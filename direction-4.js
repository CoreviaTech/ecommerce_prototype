const page = document.body;
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const searchPanel = document.querySelector('.search-panel');
const searchInput = searchPanel.querySelector('input');
const searchTriggers = document.querySelectorAll('.search-button, .mobile-search-trigger');
const toast = document.querySelector('.cart-toast');
const toastProduct = document.querySelector('.toast-product');
const bagCount = document.querySelector('.bag-count');
const finderCard = document.querySelector('.finder-card');
const finderSteps = [...document.querySelectorAll('.finder-step')];
const finderResult = document.querySelector('.finder-result');
const finderBack = document.querySelector('.finder-back');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let itemCount = 0;
let toastTimer;
let lastFocusedElement;
let currentFinderStep = 0;
const finderAnswers = {};

const giftResults = {
  small: {
    homebody: { name: 'Kiri Bud Vase', label: 'The quiet comfort', price: '$48', image: 'materials/img3.jpg', alt: 'Cream Kiri bud vase with small yellow flowers' },
    host: { name: 'Morning Bowl Pair', label: 'The useful delight', price: '$72', image: 'materials/img8.jpg', alt: 'Neutral ceramic bowls packed as a gift' },
    beginning: { name: 'Morning Bowl Pair', label: 'The fresh start', price: '$72', image: 'materials/img8.jpg', alt: 'Neutral ceramic bowls packed as a gift' },
    'just-because': { name: 'Kiri Bud Vase', label: 'The little brightener', price: '$48', image: 'materials/img3.jpg', alt: 'Cream Kiri bud vase with small yellow flowers' }
  },
  medium: {
    homebody: { name: 'Willow Place Setting', label: 'The slow morning edit', price: '$86', image: 'materials/img5.jpg', alt: 'Botanical ceramic place setting arranged for gifting' },
    host: { name: 'Sunday Pairing', label: 'The thoughtful host edit', price: '$116', image: 'materials/img1.jpg', alt: 'Two ceramic place settings arranged on a wooden tray' },
    beginning: { name: 'Willow Place Setting', label: 'The make-it-home edit', price: '$86', image: 'materials/img5.jpg', alt: 'Botanical ceramic place setting arranged for gifting' },
    'just-because': { name: 'Willow Place Setting', label: 'The saw-this-thought-of-you edit', price: '$86', image: 'materials/img5.jpg', alt: 'Botanical ceramic place setting arranged for gifting' }
  },
  special: {
    homebody: { name: 'Studio Gift Composition', label: 'The full comfort edit', price: '$142', image: 'materials/img2.jpg', alt: 'Earth-toned ceramics and botanicals in a gift box' },
    host: { name: 'Gather Round Tea Set', label: 'The full-house edit', price: '$142', image: 'materials/img7.jpg', alt: 'Patterned tea bowls and cups arranged for sharing' },
    beginning: { name: 'Hasami Ceremony Set', label: 'The milestone edit', price: '$128', image: 'materials/img6.jpg', alt: 'Japanese porcelain gift set with ceremonial red cord' },
    'just-because': { name: 'Studio Gift Composition', label: 'The wonderfully unexpected edit', price: '$142', image: 'materials/img2.jpg', alt: 'Earth-toned ceramics and botanicals in a gift box' }
  }
};

const feelingCopy = {
  comfort: 'Soft, useful, and reassuring - a gift that makes everyday rituals feel cared for.',
  celebrate: 'Joyful enough for the moment and lasting enough to keep the feeling around.',
  meaning: 'Chosen with intention: beautiful, useful, and personal without trying too hard.'
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
    window.setTimeout(() => searchInput.focus(), reduceMotion ? 0 : 200);
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

function focusFinderHeading(container) {
  const heading = container.querySelector('h3');
  if (!heading) return;
  heading.setAttribute('tabindex', '-1');
  heading.focus({ preventScroll: true });
}

function updateFinderProgress() {
  const dots = [...document.querySelectorAll('.progress-dot')];
  dots.forEach((dot, index) => dot.classList.toggle('active', index <= currentFinderStep));
  document.querySelector('.current-step').textContent = String(Math.min(currentFinderStep + 1, 3));
}

function showFinderStep(index, shouldFocus = true) {
  currentFinderStep = index;
  finderResult.hidden = true;
  finderSteps.forEach((step, stepIndex) => {
    const active = stepIndex === index;
    step.hidden = !active;
    step.classList.toggle('active', active);
  });
  finderBack.hidden = index === 0;
  updateFinderProgress();
  if (shouldFocus) focusFinderHeading(finderSteps[index]);
}

function showFinderResult() {
  const result = giftResults[finderAnswers.budget][finderAnswers.recipient];
  finderSteps.forEach((step) => { step.hidden = true; });
  finderResult.hidden = false;
  finderBack.hidden = false;
  document.querySelector('.current-step').textContent = '3';
  document.querySelectorAll('.progress-dot').forEach((dot) => dot.classList.add('active'));
  document.querySelector('.result-name').textContent = result.name;
  document.querySelector('.result-label').textContent = result.label;
  document.querySelector('.result-price').textContent = result.price;
  document.querySelector('.result-reason').textContent = feelingCopy[finderAnswers.feeling];
  const image = document.querySelector('.result-image img');
  image.src = result.image;
  image.alt = result.alt;
  const addButton = document.querySelector('.result-add');
  addButton.dataset.product = result.name;
  focusFinderHeading(finderResult);
}

function resetFinder() {
  Object.keys(finderAnswers).forEach((key) => delete finderAnswers[key]);
  finderCard.querySelectorAll('.choice-grid button').forEach((button) => button.classList.remove('selected'));
  showFinderStep(0);
}

menuButton.addEventListener('click', () => toggleMenu(!mobileMenu.classList.contains('open')));
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => toggleMenu(false)));
searchTriggers.forEach((button) => button.addEventListener('click', () => toggleSearch(true)));
document.querySelector('.search-close').addEventListener('click', () => toggleSearch(false));
searchPanel.addEventListener('click', (event) => {
  if (event.target === searchPanel) toggleSearch(false);
});
searchPanel.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => toggleSearch(false, false)));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    toggleMenu(false);
    toggleSearch(false);
    toast.classList.remove('show');
  }
});

finderSteps.forEach((step, index) => {
  step.querySelectorAll('.choice-grid button').forEach((button) => {
    button.addEventListener('click', () => {
      step.querySelectorAll('button').forEach((option) => option.classList.remove('selected'));
      button.classList.add('selected');
      finderAnswers[step.dataset.step] = button.dataset.value;
      window.setTimeout(() => {
        if (index < finderSteps.length - 1) {
          showFinderStep(index + 1);
        } else {
          showFinderResult();
        }
      }, reduceMotion ? 0 : 160);
    });
  });
});

finderBack.addEventListener('click', () => {
  if (!finderResult.hidden) {
    showFinderStep(2);
  } else if (currentFinderStep > 0) {
    showFinderStep(currentFinderStep - 1);
  }
});

document.querySelector('.restart-button').addEventListener('click', resetFinder);
document.querySelector('.result-add').addEventListener('click', (event) => showCartFeedback(event.currentTarget.dataset.product));

document.querySelectorAll('.shop-filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.shop-filter').forEach((filter) => filter.classList.toggle('active', filter === button));
    const category = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach((card) => {
      card.classList.toggle('hidden', category !== 'all' && card.dataset.category !== category);
    });
  });
});

document.querySelectorAll('.quick-add').forEach((button) => {
  button.addEventListener('click', () => showCartFeedback(button.dataset.product));
});

document.querySelectorAll('.note-tone').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.note-tone').forEach((tone) => tone.classList.toggle('active', tone === button));
    document.querySelector('.note-message').textContent = button.dataset.message;
  });
});

document.querySelector('.newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-status').textContent = 'Lovely - we will save you a seat.';
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
