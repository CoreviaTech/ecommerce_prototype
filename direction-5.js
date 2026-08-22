const page = document.body;
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const searchPanel = document.querySelector('.search-panel');
const searchInput = searchPanel.querySelector('input');
const searchTriggers = document.querySelectorAll('.search-button, .mobile-search-trigger');
const bagCount = document.querySelector('.bag-count');
const toast = document.querySelector('.cart-toast');
const toastProduct = document.querySelector('.toast-product');
const atlasEntry = document.querySelector('.atlas-entry');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let itemCount = 0;
let toastTimer;
let lastFocusedElement;

const atlasNotes = {
  bloom: {
    number: 'Field note 01',
    code: 'PAT / BLM / 001',
    kicker: 'Pattern study',
    title: 'The painted bloom',
    description: 'A small repeat can carry the energy of an entire room. Layered florals and spare stripes make a table feel gathered rather than matched.',
    surface: 'Painted botanical repeat',
    form: 'Tea bowl & cup',
    ritual: 'Tea shared slowly',
    image: 'materials/img7.jpg',
    alt: 'Patterned tea bowls and cups with botanical and striped decoration'
  },
  line: {
    number: 'Field note 02',
    code: 'PAT / LIN / 002',
    kicker: 'Line study',
    title: 'The wandering stem',
    description: 'A single botanical line turns a quiet place setting into something intimate. The pauses and variations are what let the motif breathe.',
    surface: 'Fine botanical linework',
    form: 'Plate, cup & bowl',
    ritual: 'An unhurried breakfast',
    image: 'materials/img5.jpg',
    alt: 'Cream tableware with delicate hand-drawn botanical linework'
  },
  earth: {
    number: 'Field note 03',
    code: 'FRM / EAR / 003',
    kicker: 'Form study',
    title: 'The generous curve',
    description: 'When ornament falls away, proportion becomes the pattern. A rounded body, narrow neck, and softly mottled glaze reward a closer look.',
    surface: 'Softly mottled glaze',
    form: 'Small flower vase',
    ritual: 'One branch, well placed',
    image: 'materials/img3.jpg',
    alt: 'Rounded cream flower vase holding small yellow flowers'
  },
  knot: {
    number: 'Field note 04',
    code: 'GFT / KNT / 004',
    kicker: 'Giving study',
    title: 'The ceremonial knot',
    description: 'Wrapping makes the moment visible before the object is revealed. A vivid cord against white paper turns anticipation into part of the gift.',
    surface: 'Paper, cord & porcelain',
    form: 'Three-piece gift set',
    ritual: 'Marking a new chapter',
    image: 'materials/img6.jpg',
    alt: 'Porcelain set beside white wrapping tied with a red ceremonial cord'
  }
};

function syncPageLock() {
  page.classList.toggle('locked', mobileMenu.classList.contains('open') || searchPanel.classList.contains('open'));
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
    window.setTimeout(() => searchInput.focus(), reduceMotion ? 0 : 220);
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
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2800);
}

function renderAtlasNote(key) {
  const note = atlasNotes[key];
  if (!note) return;

  document.querySelectorAll('.atlas-point').forEach((button) => {
    const isActive = button.dataset.atlas === key;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  atlasEntry.classList.add('is-changing');
  window.setTimeout(() => {
    const image = atlasEntry.querySelector('.atlas-image img');
    atlasEntry.querySelector('.atlas-number').textContent = note.number;
    atlasEntry.querySelector('.atlas-code').textContent = note.code;
    atlasEntry.querySelector('.atlas-kicker').textContent = note.kicker;
    atlasEntry.querySelector('.atlas-title').textContent = note.title;
    atlasEntry.querySelector('.atlas-description').textContent = note.description;
    atlasEntry.querySelector('.atlas-surface').textContent = note.surface;
    atlasEntry.querySelector('.atlas-form').textContent = note.form;
    atlasEntry.querySelector('.atlas-ritual').textContent = note.ritual;
    image.src = note.image;
    image.alt = note.alt;
    atlasEntry.classList.remove('is-changing');
  }, reduceMotion ? 0 : 180);
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

document.querySelectorAll('.atlas-point').forEach((button) => {
  button.addEventListener('click', () => renderAtlasNote(button.dataset.atlas));
});

document.querySelectorAll('.collection-filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.collection-filter').forEach((filter) => {
      filter.classList.toggle('active', filter === button);
    });

    const category = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach((card) => {
      const categories = card.dataset.category.split(' ');
      card.classList.toggle('hidden', category !== 'all' && !categories.includes(category));
    });
  });
});

document.querySelectorAll('.quick-add').forEach((button) => {
  button.addEventListener('click', () => showCartFeedback(button.dataset.product));
});

document.querySelectorAll('.note-choice').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.note-choice').forEach((choice) => {
      choice.classList.toggle('active', choice === button);
    });
    document.querySelector('.gift-note-text').textContent = button.dataset.note;
  });
});

document.querySelector('.newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-status').textContent = 'Welcome to the journal — your first field note will arrive soon.';
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
  }, { threshold: 0.08, rootMargin: '0px 0px -30px' });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}
