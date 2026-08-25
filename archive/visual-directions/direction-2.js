const page = document.body;
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const searchPanel = document.querySelector('.search-panel');
const searchInput = searchPanel.querySelector('input');
const toast = document.querySelector('.cart-toast');
const bagCount = document.querySelector('.bag-count');
let objectCount = 0;
let toastTimer;

function toggleMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  page.classList.toggle('locked', open);
}

function toggleSearch(open) {
  searchPanel.classList.toggle('open', open);
  searchPanel.setAttribute('aria-hidden', String(!open));
  page.classList.toggle('locked', open);
  if (open) setTimeout(() => searchInput.focus(), 250);
}

menuButton.addEventListener('click', () => toggleMenu(!mobileMenu.classList.contains('open')));
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => toggleMenu(false)));
document.querySelector('.search-button').addEventListener('click', () => toggleSearch(true));
document.querySelector('.search-close').addEventListener('click', () => toggleSearch(false));
searchPanel.addEventListener('click', (event) => { if (event.target === searchPanel) toggleSearch(false); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { toggleMenu(false); toggleSearch(false); }
});

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    document.querySelectorAll('.product').forEach((product) => {
      product.classList.toggle('hidden', category !== 'all' && product.dataset.category !== category);
    });
  });
});

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    objectCount += 1;
    bagCount.textContent = String(objectCount).padStart(2, '0');
    document.querySelector('.cart-toast b').textContent = `${button.dataset.product} added`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  });
});

document.querySelector('.newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-status').textContent = 'SUBSCRIBED / THANK YOU';
  event.currentTarget.reset();
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -35px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
