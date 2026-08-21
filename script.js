const body = document.body;
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const searchOverlay = document.querySelector('.search-overlay');
const searchInput = searchOverlay.querySelector('input');
const bagCount = document.querySelector('.bag-count');
const toast = document.querySelector('.toast');
let count = 0;
let toastTimer;

const setMenu = (open) => {
  menuButton.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
  mobileMenu.classList.toggle('open', open);
  body.classList.toggle('menu-open', open);
};

menuButton.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

const setSearch = (open) => {
  searchOverlay.classList.toggle('open', open);
  searchOverlay.setAttribute('aria-hidden', String(!open));
  body.classList.toggle('overlay-open', open);
  if (open) setTimeout(() => searchInput.focus(), 250);
};

document.querySelector('.search-trigger').addEventListener('click', () => setSearch(true));
document.querySelector('.search-close').addEventListener('click', () => setSearch(false));
searchOverlay.addEventListener('click', (event) => { if (event.target === searchOverlay) setSearch(false); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { setSearch(false); setMenu(false); } });

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    bagCount.textContent = count;
    document.querySelector('.bag-button').setAttribute('aria-label', `Shopping bag, ${count} ${count === 1 ? 'item' : 'items'}`);
    document.querySelector('.toast-text').textContent = `${button.dataset.product} added to your bag`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  });
});

document.querySelector('.newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  form.querySelector('.form-message').textContent = 'Thank you — your first letter will arrive soon.';
  form.reset();
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
