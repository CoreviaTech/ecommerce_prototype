const body = document.body;

const globalUiMarkup = `
  <div class="search-overlay" role="dialog" aria-modal="true" aria-labelledby="search-title" aria-hidden="true">
    <button class="search-close" type="button" aria-label="Đóng tìm kiếm">×</button>
    <div class="search-panel">
      <p class="eyebrow">Tìm một điều thật vừa</p>
      <h2 id="search-title">Bạn đang tìm gì?</h2>
      <form action="collection.html">
        <label class="sr-only" for="site-search">Tìm sản phẩm</label>
        <div class="search-field"><input id="site-search" name="q" type="search" placeholder="Chén, bình hoa, quà tân gia…" /><button type="submit" aria-label="Gửi tìm kiếm">→</button></div>
      </form>
      <div class="search-suggestions"><span>Gợi ý</span><a href="collection.html">Bộ bàn ăn</a><a href="collection.html#gift-ready">Quà tân gia</a><a href="product.html">Bộ Chén Sớm Mai</a></div>
    </div>
  </div>
  <aside class="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title" aria-hidden="true">
    <div class="cart-drawer-head"><p class="eyebrow">Giỏ của bạn</p><button class="cart-close" type="button" aria-label="Đóng giỏ hàng">×</button></div>
    <div class="cart-empty"><h2 id="cart-title">Một khoảng trống<br /><em>đang chờ điều đẹp.</em></h2><p>Những món bạn thêm sẽ xuất hiện ở đây. Giỏ được lưu trên thiết bị này.</p><a class="button button--dark" href="shop.html">Bắt đầu khám phá →</a></div>
    <div class="cart-filled" hidden><h2>Đã dành riêng cho bạn.</h2><div class="cart-line"><img src="materials/img8.jpg" alt="Sản phẩm vừa thêm vào giỏ" width="1000" height="1000" /><div><strong class="cart-product-name">Bộ Chén Sớm Mai</strong><small>Phiên bản đã chọn · SL <span class="cart-quantity">1</span></small><span>Tạm tính tại bước thanh toán</span></div></div><p class="cart-prototype-note">Bản mẫu giao diện — giá và tồn kho sẽ được xác nhận trong hệ thống bán hàng.</p><a class="button button--dark" href="product.html">Xem giỏ hàng →</a><button class="cart-clear" type="button">Xóa sản phẩm mẫu</button></div>
  </aside>
  <div class="page-scrim" aria-hidden="true"></div>
  <div class="toast" role="status" aria-live="polite"><span class="toast-icon">✓</span><span class="toast-text">Đã thêm vào giỏ</span></div>
`;

if (!document.querySelector('.search-overlay')) {
  body.insertAdjacentHTML('beforeend', globalUiMarkup);
}

const siteHeader = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const searchOverlay = document.querySelector('.search-overlay');
const searchInput = searchOverlay?.querySelector('input');
const cartDrawer = document.querySelector('.cart-drawer');
const pageScrim = document.querySelector('.page-scrim');
const toast = document.querySelector('.toast');
let lastFocusedElement = null;
let toastTimer;

const readCart = () => {
  try {
    const stored = JSON.parse(localStorage.getItem('hedyPrototypeCart'));
    return {
      count: Number.isFinite(stored?.count) ? stored.count : 0,
      product: stored?.product || 'Bộ Chén Sớm Mai'
    };
  } catch {
    return { count: 0, product: 'Bộ Chén Sớm Mai' };
  }
};

let cartState = readCart();

const saveCart = () => {
  try {
    localStorage.setItem('hedyPrototypeCart', JSON.stringify(cartState));
  } catch {
    // The prototype still works when browser storage is unavailable.
  }
};

const updateCartUi = () => {
  document.querySelectorAll('.bag-count').forEach((element) => {
    element.textContent = String(cartState.count);
  });
  document.querySelectorAll('.bag-button').forEach((button) => {
    button.setAttribute('aria-label', `Giỏ hàng, ${cartState.count} sản phẩm`);
  });

  const emptyState = cartDrawer?.querySelector('.cart-empty');
  const filledState = cartDrawer?.querySelector('.cart-filled');
  if (!emptyState || !filledState) return;

  const hasItems = cartState.count > 0;
  emptyState.hidden = hasItems;
  filledState.hidden = !hasItems;
  const productName = filledState.querySelector('.cart-product-name');
  const quantity = filledState.querySelector('.cart-quantity');
  if (productName) productName.textContent = cartState.product;
  if (quantity) quantity.textContent = String(cartState.count);
};

const showToast = (message, icon = '✓') => {
  if (!toast) return;
  const toastText = toast.querySelector('.toast-text');
  const toastIcon = toast.querySelector('.toast-icon');
  if (toastText) toastText.textContent = message;
  if (toastIcon) toastIcon.textContent = icon;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2800);
};

const setMenu = (open) => {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  mobileMenu.setAttribute('aria-hidden', String(!open));
  mobileMenu.classList.toggle('open', open);
  body.classList.toggle('menu-open', open);
};

const setSearch = (open) => {
  if (!searchOverlay) return;
  if (open) {
    lastFocusedElement = document.activeElement;
    setMenu(false);
  }
  searchOverlay.classList.toggle('open', open);
  searchOverlay.setAttribute('aria-hidden', String(!open));
  body.classList.toggle('overlay-open', open);
  if (open) {
    window.setTimeout(() => searchInput?.focus(), 220);
  } else if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
};

const setCart = (open) => {
  if (!cartDrawer || !pageScrim) return;
  if (open) {
    lastFocusedElement = document.activeElement;
    setMenu(false);
    setSearch(false);
  }
  cartDrawer.classList.toggle('open', open);
  cartDrawer.setAttribute('aria-hidden', String(!open));
  pageScrim.classList.toggle('open', open);
  body.classList.toggle('cart-open', open);
  if (open) {
    window.setTimeout(() => cartDrawer.querySelector('.cart-close')?.focus(), 220);
  } else if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
};

menuButton?.addEventListener('click', () => {
  setMenu(!mobileMenu?.classList.contains('open'));
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.querySelectorAll('.search-trigger').forEach((button) => {
  button.addEventListener('click', () => setSearch(true));
});

searchOverlay?.querySelector('.search-close')?.addEventListener('click', () => setSearch(false));
searchOverlay?.addEventListener('click', (event) => {
  if (event.target === searchOverlay) setSearch(false);
});

document.querySelectorAll('.bag-button').forEach((button) => {
  button.addEventListener('click', () => setCart(true));
});

cartDrawer?.querySelector('.cart-close')?.addEventListener('click', () => setCart(false));
pageScrim?.addEventListener('click', () => setCart(false));

cartDrawer?.querySelector('.cart-clear')?.addEventListener('click', () => {
  cartState = { count: 0, product: 'Bộ Chén Sớm Mai' };
  saveCart();
  updateCartUi();
  showToast('Đã làm trống giỏ mẫu', '–');
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (cartDrawer?.classList.contains('open')) {
    setCart(false);
  } else if (searchOverlay?.classList.contains('open')) {
    setSearch(false);
  } else {
    setMenu(false);
  }
});

document.querySelectorAll('.add-to-bag').forEach((button) => {
  button.addEventListener('click', () => {
    const quantity = button.classList.contains('product-add')
      ? Number(document.querySelector('.quantity-value')?.textContent || 1)
      : 1;
    cartState.count += quantity;
    cartState.product = button.dataset.product || 'Sản phẩm HEDY';
    saveCart();
    updateCartUi();
    showToast(`${cartState.product} đã được thêm vào giỏ`);
  });
});

document.querySelectorAll('[data-zalo]').forEach((button) => {
  button.addEventListener('click', () => {
    showToast('Liên kết Zalo sẽ được cấu hình trước khi ra mắt', '↗');
  });
});

document.querySelectorAll('.newsletter-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = form.querySelector('.form-message');
    if (message) message.textContent = 'Cảm ơn bạn — lá thư đầu tiên sẽ sớm ghé đến.';
    form.reset();
  });
});

const galleryMain = document.querySelector('[data-gallery-main]');
const galleryCounter = document.querySelector('.image-counter');

document.querySelectorAll('.gallery-thumb').forEach((button) => {
  button.addEventListener('click', () => {
    if (!galleryMain) return;
    galleryMain.src = button.dataset.image || galleryMain.src;
    galleryMain.alt = button.dataset.alt || galleryMain.alt;
    document.querySelectorAll('.gallery-thumb').forEach((thumb) => {
      const isActive = thumb === button;
      thumb.classList.toggle('is-active', isActive);
      thumb.setAttribute('aria-pressed', String(isActive));
    });
    if (galleryCounter) galleryCounter.textContent = `${button.dataset.index} / 04`;
  });
});

let productMaxQuantity = 5;
const quantityValue = document.querySelector('.quantity-value');

const setQuantity = (nextQuantity) => {
  if (!quantityValue) return;
  const safeQuantity = Math.min(Math.max(nextQuantity, 1), productMaxQuantity);
  quantityValue.textContent = String(safeQuantity);
};

document.querySelector('.quantity-minus')?.addEventListener('click', () => {
  setQuantity(Number(quantityValue?.textContent || 1) - 1);
});

document.querySelector('.quantity-plus')?.addEventListener('click', () => {
  const current = Number(quantityValue?.textContent || 1);
  if (current >= productMaxQuantity) {
    showToast(`Mẻ men này hiện còn ${productMaxQuantity} bộ`, '!');
    return;
  }
  setQuantity(current + 1);
});

document.querySelectorAll('.variant-option').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.variant-option').forEach((option) => {
      const isActive = option === button;
      option.classList.toggle('is-active', isActive);
      option.setAttribute('aria-pressed', String(isActive));
    });
    const selectedVariant = document.querySelector('.selected-variant');
    const productPrice = document.querySelector('.product-detail-price');
    const mobilePrice = document.querySelector('.mobile-product-price');
    const productStock = document.querySelector('.product-stock');
    const productSku = document.querySelector('.product-sku');
    if (selectedVariant) selectedVariant.textContent = button.dataset.variant || '';
    if (productPrice) productPrice.textContent = button.dataset.price || '';
    if (mobilePrice) mobilePrice.textContent = button.dataset.price || '';
    if (productStock) productStock.textContent = button.dataset.stock || '';
    if (productSku) productSku.textContent = button.dataset.sku || '';
    productMaxQuantity = button.dataset.variant === 'Đất' ? 2 : 5;
    setQuantity(1);
  });
});

const giftToggle = document.querySelector('.gift-toggle');
const giftMessageWrap = document.querySelector('.gift-message');
const giftMessageInput = document.querySelector('#gift-message');

giftToggle?.addEventListener('change', () => {
  if (!giftMessageWrap) return;
  giftMessageWrap.hidden = !giftToggle.checked;
  if (giftToggle.checked) giftMessageInput?.focus();
});

giftMessageInput?.addEventListener('input', () => {
  const counter = document.querySelector('.gift-message label span');
  if (counter) counter.textContent = `${giftMessageInput.value.length} / 160`;
});

const catalogGrid = document.querySelector('#catalog-grid');
const catalogCards = catalogGrid ? Array.from(catalogGrid.querySelectorAll('.product-card')) : [];
const resultCount = document.querySelector('.result-count');
const catalogEmpty = document.querySelector('.catalog-empty');
const loadMoreButton = document.querySelector('.load-more');
let hasLoadedAll = false;
let activeFilter = 'all';

const applyCatalogFilter = () => {
  let visibleCount = 0;
  catalogCards.forEach((card) => {
    const categories = card.dataset.category?.split(' ') || [];
    const matches = activeFilter === 'all' || categories.includes(activeFilter);
    const hiddenAsExtra = card.classList.contains('catalog-extra') && !hasLoadedAll && activeFilter === 'all';
    card.classList.toggle('is-filtered-out', !matches);
    card.classList.toggle('is-loaded', !hiddenAsExtra);
    if (matches && !hiddenAsExtra) visibleCount += 1;
  });
  if (resultCount) resultCount.textContent = String(visibleCount);
  if (catalogEmpty) catalogEmpty.hidden = visibleCount > 0;
  if (loadMoreButton) loadMoreButton.hidden = hasLoadedAll || activeFilter !== 'all';
};

document.querySelectorAll('.filter-chip').forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter || 'all';
    document.querySelectorAll('.filter-chip').forEach((chip) => {
      const isActive = chip === button;
      chip.classList.toggle('is-active', isActive);
      chip.setAttribute('aria-pressed', String(isActive));
    });
    applyCatalogFilter();
  });
});

loadMoreButton?.addEventListener('click', () => {
  hasLoadedAll = true;
  applyCatalogFilter();
  catalogGrid?.querySelector('.catalog-extra')?.querySelector('a')?.focus();
});

document.querySelector('#product-sort')?.addEventListener('change', (event) => {
  const value = event.currentTarget.value;
  const sorted = [...catalogCards].sort((a, b) => {
    if (value === 'price-low') return Number(a.dataset.price) - Number(b.dataset.price);
    if (value === 'price-high') return Number(b.dataset.price) - Number(a.dataset.price);
    if (value === 'newest') return Number(b.dataset.order) - Number(a.dataset.order);
    return Number(a.dataset.order) - Number(b.dataset.order);
  });
  sorted.forEach((card) => catalogGrid?.appendChild(card));
});

if (catalogGrid) applyCatalogFilter();

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -35px' });
  revealElements.forEach((element) => revealObserver.observe(element));
  window.setTimeout(() => {
    revealElements.forEach((element) => element.classList.add('visible'));
  }, 700);
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

window.addEventListener('scroll', () => {
  siteHeader?.classList.toggle('is-scrolled', window.scrollY > 24);
}, { passive: true });

updateCartUi();
