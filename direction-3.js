const page = document.body;
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const searchPanel = document.querySelector('.search-panel');
const searchInput = searchPanel.querySelector('input');
const searchTriggers = document.querySelectorAll('.search-button, .mobile-search-trigger');
const toast = document.querySelector('.cart-toast');
const toastProduct = document.querySelector('.toast-product');
const bagCount = document.querySelector('.bag-count');
const occasionStage = document.querySelector('.occasion-stage');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let itemCount = 0;
let toastTimer;
let lastFocusedElement;

const occasions = {
  breakfast: {
    image: 'materials/img8.jpg',
    alt: 'Neutral ceramic breakfast bowls packed as a coordinated set',
    serves: '2',
    kicker: 'A gentle start',
    title: 'The slow morning table',
    description: 'Warm bowls, a little cup, and room for whatever the morning brings. Tonal stoneware makes even toast feel considered.',
    items: ['Two morning bowls', 'Two small cups', 'Two beechwood spoons'],
    price: '$96',
    product: 'Slow Morning Set'
  },
  tea: {
    image: 'materials/img1.jpg',
    alt: 'Two ceramic place settings arranged on a warm wooden tray',
    serves: '2',
    kicker: 'Pour another cup',
    title: 'Tea and nowhere to be',
    description: 'A pairing for small cakes, generous refills, and the friend who always understands. Soft neutrals keep the moment easy.',
    items: ['Two tea bowls', 'Two little plates', 'Two walnut rests'],
    price: '$116',
    product: 'Tea for Two Set'
  },
  supper: {
    image: 'materials/img7.jpg',
    alt: 'Patterned bowls and cups arranged for a lively shared meal',
    serves: '4',
    kicker: 'More is more',
    title: 'The pass-it-around supper',
    description: 'Pattern, colour, and plenty of room for second helpings. Each piece is different enough to make a shared table feel collected.',
    items: ['Four patterned bowls', 'One generous serving plate', 'One shared sauce dish'],
    price: '$168',
    product: 'Shared Supper Set'
  }
};

function toggleMenu(open) {
  if (open) toggleSearch(false, false);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  page.classList.toggle('locked', open);
}

function toggleSearch(open, returnFocus = true) {
  if (open) {
    lastFocusedElement = document.activeElement;
    toggleMenu(false);
  }
  searchPanel.classList.toggle('open', open);
  searchPanel.setAttribute('aria-hidden', String(!open));
  page.classList.toggle('locked', open);
  if (open) {
    window.setTimeout(() => searchInput.focus(), reduceMotion ? 0 : 220);
  } else if (returnFocus && lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function showCartFeedback(product) {
  itemCount += 1;
  bagCount.textContent = String(itemCount);
  toastProduct.textContent = `${product} is in your bag.`;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2800);
}

function renderOccasion(key) {
  const occasion = occasions[key];
  const updateContent = () => {
    const image = occasionStage.querySelector('.occasion-image');
    image.src = occasion.image;
    image.alt = occasion.alt;
    occasionStage.querySelector('.occasion-serves').textContent = occasion.serves;
    occasionStage.querySelector('.occasion-kicker').textContent = occasion.kicker;
    occasionStage.querySelector('.occasion-title').textContent = occasion.title;
    occasionStage.querySelector('.occasion-description').textContent = occasion.description;
    occasionStage.querySelector('.occasion-price').textContent = occasion.price;
    const listItems = occasionStage.querySelectorAll('.occasion-list li');
    listItems.forEach((item, index) => {
      item.lastChild.textContent = occasion.items[index];
    });
    const addButton = occasionStage.querySelector('.add-set-button');
    addButton.dataset.product = occasion.product;
    occasionStage.classList.remove('is-changing');
  };

  occasionStage.classList.add('is-changing');
  window.setTimeout(updateContent, reduceMotion ? 0 : 180);
}

menuButton.addEventListener('click', () => {
  toggleMenu(!mobileMenu.classList.contains('open'));
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => toggleMenu(false));
});

searchTriggers.forEach((button) => {
  button.addEventListener('click', () => toggleSearch(true));
});

document.querySelector('.search-close').addEventListener('click', () => toggleSearch(false));
searchPanel.addEventListener('click', (event) => {
  if (event.target === searchPanel) toggleSearch(false);
});
searchPanel.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => toggleSearch(false, false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    toggleMenu(false);
    toggleSearch(false);
    toast.classList.remove('show');
  }
});

document.querySelectorAll('.occasion-tab').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.occasion-tab').forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    renderOccasion(button.dataset.occasion);
  });
});

document.querySelectorAll('.shop-filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.shop-filter').forEach((filter) => {
      filter.classList.toggle('active', filter === button);
    });
    const category = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach((card) => {
      card.classList.toggle('hidden', category !== 'all' && card.dataset.category !== category);
    });
  });
});

document.querySelectorAll('.round-add, .add-set-button').forEach((button) => {
  button.addEventListener('click', () => showCartFeedback(button.dataset.product));
});

document.querySelector('.newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const status = event.currentTarget.querySelector('.form-status');
  status.textContent = 'You are at the table - thank you for joining us.';
  event.currentTarget.reset();
});

if ('IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px' });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}
