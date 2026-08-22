const page = document.body;
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const searchPanel = document.querySelector('.search-panel');
const searchInput = searchPanel.querySelector('input');
const bagCount = document.querySelector('.bag-count');
const toast = document.querySelector('.cart-toast');
const toastProduct = document.querySelector('.toast-product');
const roomObject = document.querySelector('.room-object');
const roomKeys = ['vase', 'service', 'setting', 'gift'];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let activeRoomIndex = 0;
let itemCount = 0;
let toastTimer;
let lastFocusedElement;

const roomData = {
  vase: {
    count: '01 / 04',
    code: 'HEDY / OBJ / 001',
    title: 'Kiri Bud Vase',
    note: 'A rounded body drawn inward to a fine neck. The speckled surface holds changing light without asking for attention.',
    material: 'Glazed ceramic',
    character: 'Softly mottled',
    availability: 'Current edit',
    price: '$48',
    image: 'materials/img3.jpg',
    alt: 'Rounded cream bud vase with yellow flowers beside its presentation cylinder'
  },
  service: {
    count: '02 / 04',
    code: 'HEDY / OBJ / 002',
    title: 'Still Life Serving Set',
    note: 'Quiet bowls in balanced proportions, paired with warm wood. A useful composition designed for the centre of a table.',
    material: 'Ceramic and wood',
    character: 'Raw rim detail',
    availability: 'Gift-ready edit',
    price: '$136',
    image: 'materials/img8.jpg',
    alt: 'Neutral ceramic bowls and wooden spoons arranged in a presentation box'
  },
  setting: {
    count: '03 / 04',
    code: 'HEDY / OBJ / 003',
    title: 'Willow Place Setting',
    note: 'Fine botanical lines interrupt a pale field. Each piece feels related without becoming a perfect match.',
    material: 'Botanical ceramic',
    character: 'Fine linework',
    availability: 'Current edit',
    price: '$86',
    image: 'materials/img5.jpg',
    alt: 'Cream plate, cup, and bowl with delicate botanical linework'
  },
  gift: {
    count: '04 / 04',
    code: 'HEDY / GFT / 004',
    title: 'Ceremonial Table Set',
    note: 'Pale forms, crisp paper, and a single red cord. The presentation turns anticipation into part of the object.',
    material: 'Ceramic, paper, cord',
    character: 'Gift presentation',
    availability: 'Wrapped by hand',
    price: '$124',
    image: 'materials/img6.jpg',
    alt: 'Pale ceramic set and white wrapping finished with a ceremonial red cord'
  }
};

function syncPageLock() {
  const overlayOpen = mobileMenu.classList.contains('open') || searchPanel.classList.contains('open');
  page.classList.toggle('locked', overlayOpen);
}

function toggleMenu(shouldOpen) {
  mobileMenu.classList.toggle('open', shouldOpen);
  mobileMenu.setAttribute('aria-hidden', String(!shouldOpen));
  menuButton.classList.toggle('open', shouldOpen);
  menuButton.setAttribute('aria-expanded', String(shouldOpen));
  menuButton.setAttribute('aria-label', shouldOpen ? 'Close menu' : 'Open menu');
  syncPageLock();
}

function toggleSearch(shouldOpen, restoreFocus = true) {
  const wasOpen = searchPanel.classList.contains('open');

  if (shouldOpen) {
    lastFocusedElement = document.activeElement;
    toggleMenu(false);
  }

  searchPanel.classList.toggle('open', shouldOpen);
  searchPanel.setAttribute('aria-hidden', String(!shouldOpen));
  syncPageLock();

  if (shouldOpen) {
    window.setTimeout(() => searchInput.focus(), reduceMotion ? 0 : 300);
  } else if (wasOpen && restoreFocus && lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function showCartFeedback(productName) {
  itemCount += 1;
  bagCount.textContent = String(itemCount);
  toastProduct.textContent = `${productName} is in your bag.`;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3200);
}

function renderRoom(key) {
  const room = roomData[key];
  if (!room) return;

  activeRoomIndex = roomKeys.indexOf(key);
  document.querySelectorAll('.room-tab').forEach((button) => {
    const isActive = button.dataset.room === key;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  roomObject.classList.add('is-changing');
  window.setTimeout(() => {
    const image = roomObject.querySelector('.room-image img');
    image.src = room.image;
    image.alt = room.alt;
    roomObject.querySelector('.room-count').textContent = room.count;
    roomObject.querySelector('.object-code').textContent = room.code;
    roomObject.querySelector('.object-title').textContent = room.title;
    roomObject.querySelector('.object-note').textContent = room.note;
    roomObject.querySelector('.object-material').textContent = room.material;
    roomObject.querySelector('.object-character').textContent = room.character;
    roomObject.querySelector('.object-availability').textContent = room.availability;
    roomObject.querySelector('.object-price').textContent = room.price;
    const addButton = roomObject.querySelector('.object-add');
    addButton.dataset.product = room.title;
    roomObject.classList.remove('is-changing');
  }, reduceMotion ? 0 : 240);
}

menuButton.addEventListener('click', () => toggleMenu(!mobileMenu.classList.contains('open')));
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => toggleMenu(false)));

document.querySelectorAll('.search-trigger, .mobile-search-trigger').forEach((button) => {
  button.addEventListener('click', () => toggleSearch(true));
});
document.querySelector('.search-close').addEventListener('click', () => toggleSearch(false));
searchPanel.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => toggleSearch(false, false)));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    toggleMenu(false);
    toggleSearch(false);
    toast.classList.remove('show');
  }
});

document.querySelectorAll('.room-tab').forEach((button) => {
  button.addEventListener('click', () => renderRoom(button.dataset.room));
});

document.querySelector('.room-previous').addEventListener('click', () => {
  const previousIndex = (activeRoomIndex - 1 + roomKeys.length) % roomKeys.length;
  renderRoom(roomKeys[previousIndex]);
});

document.querySelector('.room-next').addEventListener('click', () => {
  const nextIndex = (activeRoomIndex + 1) % roomKeys.length;
  renderRoom(roomKeys[nextIndex]);
});

document.querySelectorAll('.object-add, .quick-add').forEach((button) => {
  button.addEventListener('click', () => showCartFeedback(button.dataset.product));
});

document.querySelector('.cart-toast button').addEventListener('click', () => toast.classList.remove('show'));

document.querySelectorAll('.collection-filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.collection-filter').forEach((filter) => {
      const isActive = filter === button;
      filter.classList.toggle('active', isActive);
      filter.setAttribute('aria-pressed', String(isActive));
    });

    const category = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach((card) => {
      const categories = card.dataset.category.split(' ');
      card.classList.toggle('hidden', category !== 'all' && !categories.includes(category));
    });
  });
});

document.querySelectorAll('.gift-note').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.gift-note').forEach((choice) => {
      const isActive = choice === button;
      choice.classList.toggle('active', isActive);
      choice.setAttribute('aria-pressed', String(isActive));
    });
    document.querySelector('.note-preview p').textContent = button.dataset.note;
  });
});

document.querySelector('.search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  document.querySelector('.search-status').textContent = query
    ? `Showing the curated index for “${query}”.`
    : 'Enter an object, material, or occasion to search.';
});

document.querySelector('.newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-status').textContent = 'Your invitation is confirmed. A quiet note will arrive soon.';
  event.currentTarget.reset();
});

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});

if ('IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px' });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}
