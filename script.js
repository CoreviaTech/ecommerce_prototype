const body = document.body;
const prototypeData = window.HedyPrototypeData || {};
const CART_STORAGE_KEY = 'hedyPrototypeCart';
const CART_SCHEMA_VERSION = 2;
const CONTACT_CHECKLIST = [
  'Sản phẩm hoặc loại quà cần trao đổi.',
  'Dùng cho cá nhân, doanh nghiệp hay không gian.',
  'Số lượng dự kiến.',
  'Dấu riêng, logo hoặc nội dung đã có.',
  'Thời điểm cần.',
  'Tỉnh/thành hoặc địa điểm giao.'
];

const pageId = body.dataset.page || 'home';
const currentClass = (page) => {
  const isCurrent = page === 'shop' ? ['shop', 'collection', 'product'].includes(pageId) : pageId === page;
  return isCurrent ? ' class="is-current" aria-current="page"' : '';
};

const announcementMarkup = `
  <div class="announcement" data-shared-shell="announcement">
    <p>Bản mẫu giao diện — chưa nhận đơn, tin nhắn hoặc thanh toán thật.</p>
    <a href="policies.html#pham-vi-ban-mau">Hiểu phạm vi bản mẫu <span aria-hidden="true">↗</span></a>
  </div>
`;

const headerMarkup = `
  <header class="site-header" id="top" data-shared-shell="header">
    <a class="brand" href="index.html" aria-label="HEDY Atelier — trang chủ">
      <span class="brand-emblem" aria-hidden="true"><img src="materials/logo.jpg" alt="" width="1254" height="1254" /></span>
      <span class="brand-name">HEDY<small>ATELIER</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Điều hướng chính">
      <a${currentClass('custom')} href="custom.html">Đặt riêng &amp; Doanh nghiệp</a>
      <a${currentClass('shop')} href="shop.html">Cửa hàng</a>
    </nav>
    <div class="header-actions">
      <button class="contact-header-button contact-trigger" type="button" data-contact-source="nav">Liên hệ</button>
      <button class="icon-button search-trigger" type="button" aria-label="Tìm kiếm">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg>
      </button>
      <button class="bag-button" type="button" aria-label="Giỏ hàng, 0 sản phẩm">Giỏ <span class="bag-count">0</span></button>
      <button class="menu-button" type="button" aria-label="Mở menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button>
    </div>
  </header>
`;

const mobileMenuMarkup = `
  <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title" aria-hidden="true" data-shared-shell="mobile-menu">
    <h2 class="sr-only" id="mobile-menu-title" tabindex="-1" data-dialog-initial-focus>Điều hướng</h2>
    <button class="mobile-menu-close dialog-close" type="button" aria-label="Đóng menu">×</button>
    <nav aria-label="Điều hướng di động">
      <a href="custom.html">Đặt riêng &amp; Doanh nghiệp <span>01</span></a>
      <a href="shop.html">Cửa hàng <span>02</span></a>
      <button class="mobile-contact-link contact-trigger" type="button" data-contact-source="nav">Liên hệ HEDY <span>03</span></button>
    </nav>
    <div class="mobile-menu-note">
      <p>Trao đổi đặt riêng và mua sản phẩm bán lẻ<br />là hai hành trình khác nhau.</p>
      <a href="contact.html">Xem thông tin liên hệ chung →</a>
    </div>
  </div>
`;

const footerMarkup = `
  <footer class="site-footer" data-shared-shell="footer">
    <div class="footer-service-strip">
      <span><b>01</b> Đặt riêng cần trao đổi trước</span>
      <span><b>02</b> Dữ liệu bán lẻ đang minh họa</span>
      <span><b>03</b> Zalo &amp; Instagram chờ cấu hình</span>
    </div>
    <div class="footer-main section-shell">
      <div class="footer-brand">
        <a href="index.html"><img src="materials/logo.jpg" alt="HEDY ATELIER — Quiet Beauty, Lasting Meaning" width="1254" height="1254" loading="lazy" /></a>
        <p>Gốm · Quà tặng · Không gian sống</p>
      </div>
      <div class="footer-note">
        <p>Cho một món quà, một không gian<br />hay một nghi thức ở lại lâu hơn.</p>
        <button class="contact-trigger" type="button" data-contact-source="footer">Chọn Zalo hoặc Instagram ↗</button>
      </div>
      <div class="footer-links">
        <div><span>Khám phá</span><a href="custom.html">Đặt riêng &amp; Doanh nghiệp</a><a href="shop.html">Cửa hàng</a><a href="contact.html">Liên hệ HEDY</a></div>
        <div><span>Chính sách</span><a href="policies.html#giao-hang-va-hu-hong">Giao hàng &amp; hư hỏng</a><a href="policies.html#thanh-toan">Thanh toán</a><a href="policies.html#doi-tra-huy-hoan">Đổi trả &amp; hủy</a></div>
        <div><span>Thông tin</span><a href="policies.html#quyen-rieng-tu">Quyền riêng tư</a><a href="policies.html#dieu-khoan">Điều khoản</a><button class="contact-trigger footer-channel-button" type="button" data-contact-source="footer">Zalo / Instagram ↗</button></div>
      </div>
    </div>
    <div class="footer-bottom"><span>© 2026 HEDY ATELIER</span><span>Quiet Beauty, Lasting Meaning.</span><div><a href="policies.html#quyen-rieng-tu">Riêng tư</a><a href="policies.html#dieu-khoan">Điều khoản</a></div></div>
  </footer>
`;

const replaceSharedShell = (selector, markup) => {
  const element = document.querySelector(selector);
  if (element) element.outerHTML = markup.trim();
};

replaceSharedShell('.announcement', announcementMarkup);
replaceSharedShell('.site-header', headerMarkup);
replaceSharedShell('.mobile-menu', mobileMenuMarkup);
replaceSharedShell('.site-footer', footerMarkup);

document.querySelectorAll('.search-overlay, .contact-dialog, .cart-drawer, .page-scrim, .toast, .cart-live-summary').forEach((element) => element.remove());

const globalUiMarkup = `
  <div class="search-overlay shared-dialog" role="dialog" aria-modal="true" aria-labelledby="search-title" aria-hidden="true" data-dialog="search">
    <button class="dialog-close search-close" type="button" aria-label="Đóng tìm kiếm">×</button>
    <div class="search-panel">
      <p class="eyebrow">Tìm một điều thật vừa</p>
      <h2 id="search-title" tabindex="-1" data-dialog-initial-focus>Bạn đang tìm gì?</h2>
      <form action="collection.html">
        <label class="sr-only" for="site-search">Tìm sản phẩm</label>
        <div class="search-field"><input id="site-search" name="q" type="search" placeholder="Chén, bình hoa, quà tân gia…" /><button type="submit" aria-label="Gửi tìm kiếm">→</button></div>
      </form>
      <div class="search-suggestions"><span>Gợi ý</span><a href="collection.html?collection=ban-an">Bộ bàn ăn</a><a href="collection.html?collection=qua-tang">Quà tặng</a><a href="product.html?fixture=multi-variant&amp;variant=suong-bon">Bộ Chén Sớm Mai</a></div>
      <p class="dialog-footnote">Trang kết quả chuyên biệt đang được chuẩn bị; tìm kiếm hiện tiếp tục đến bộ sưu tập mẫu.</p>
    </div>
  </div>
  <div class="contact-dialog shared-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" aria-describedby="contact-dialog-description" aria-hidden="true" data-dialog="contact">
    <button class="dialog-close contact-close" type="button" aria-label="Đóng lựa chọn liên hệ">×</button>
    <div class="contact-dialog-panel">
      <div class="contact-dialog-intro">
        <p class="eyebrow">Liên hệ HEDY</p>
        <h2 id="contact-dialog-title" tabindex="-1" data-dialog-initial-focus>Bạn muốn<br /><em>tiếp tục ở đâu?</em></h2>
        <p id="contact-dialog-description">Chọn Zalo hoặc Instagram. Bạn sẽ rời website; điểm đến và thời gian phản hồi thật vẫn đang chờ HEDY cấu hình.</p>
        <p class="contact-context" hidden><span>Ngữ cảnh được giữ</span><strong></strong></p>
      </div>
      <div class="contact-dialog-actions">
        <div class="status-banner status-banner--pending contact-state-banner" role="status" aria-live="polite"><strong>Điểm đến đang chờ cấu hình.</strong><span>Bản mẫu không mở hồ sơ hoặc gửi tin nhắn thật.</span></div>
        <div class="contact-channel-grid">
          <button class="contact-channel" type="button" data-contact-channel="zalo" disabled aria-describedby="zalo-reason"><span><small>Kênh 01</small><strong>Zalo</strong></span><i aria-hidden="true">↗</i></button>
          <p class="disabled-reason" id="zalo-reason">Chưa có điểm đến Zalo được HEDY xác nhận.</p>
          <button class="contact-channel" type="button" data-contact-channel="instagram" disabled aria-describedby="instagram-reason"><span><small>Kênh 02</small><strong>Instagram</strong></span><i aria-hidden="true">↗</i></button>
          <p class="disabled-reason" id="instagram-reason">Chưa có điểm đến Instagram được HEDY xác nhận.</p>
        </div>
        <div class="contact-checklist">
          <p>Bạn có thể sao chép danh sách này trước khi mở kênh:</p>
          <ul>${CONTACT_CHECKLIST.map((item) => `<li>${item}</li>`).join('')}</ul>
          <button class="button button--outline copy-contact-checklist" type="button">Sao chép nội dung cần chuẩn bị</button>
          <p class="inline-confirmation contact-copy-status" role="status" aria-live="polite"></p>
        </div>
        <a class="text-link" href="contact.html">Xem thông tin liên hệ chung <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </div>
  <aside class="cart-drawer shared-dialog" role="dialog" aria-modal="true" aria-labelledby="cart-title" aria-hidden="true" data-dialog="cart">
    <div class="cart-drawer-head"><div><p class="eyebrow">Giỏ của bạn</p><h2 id="cart-title" tabindex="-1" data-dialog-initial-focus>Những món đã chọn.</h2></div><button class="dialog-close cart-close" type="button" aria-label="Đóng giỏ hàng">×</button></div>
    <div class="cart-empty"><h3>Một khoảng trống<br /><em>đang chờ điều đẹp.</em></h3><p>Những món bạn thêm sẽ xuất hiện ở đây. Giỏ phiên bản mới lưu từng fixture, phiên bản, số lượng và giá minh họa trên thiết bị này.</p><a class="button button--dark" href="shop.html">Bắt đầu khám phá →</a></div>
    <div class="cart-filled" hidden><div class="cart-lines" aria-label="Sản phẩm trong giỏ"></div><p class="cart-prototype-note">Bản mẫu giao diện — giá, tồn kho và điều kiện bán vẫn cần HEDY xác nhận. Phí giao hàng chưa được tính ở đây.</p><div class="cart-drawer-actions"><a class="button button--dark" href="shop.html">Tiếp tục khám phá →</a><button class="cart-clear" type="button">Làm trống giỏ mẫu</button></div></div>
  </aside>
  <div class="page-scrim" aria-hidden="true"></div>
  <div class="toast" role="status" aria-live="polite" aria-atomic="true"><span class="toast-icon">✓</span><span class="toast-text">Đã cập nhật</span></div>
  <p class="cart-live-summary sr-only" role="status" aria-live="polite" aria-atomic="true"></p>
`;

body.insertAdjacentHTML('beforeend', globalUiMarkup);

const siteHeader = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const searchOverlay = document.querySelector('.search-overlay');
const contactDialog = document.querySelector('.contact-dialog');
const cartDrawer = document.querySelector('.cart-drawer');
const pageScrim = document.querySelector('.page-scrim');
const toast = document.querySelector('.toast');
const cartLiveSummary = document.querySelector('.cart-live-summary');
const panels = [mobileMenu, searchOverlay, contactDialog, cartDrawer].filter(Boolean);
const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
let activePanel = null;
let activeTrigger = null;
let toastTimer;

const getFocusable = (panel) => Array.from(panel.querySelectorAll(focusableSelector)).filter((element) => !element.hidden && element.getAttribute('aria-hidden') !== 'true');

const setBackgroundInert = (inert, panel) => {
  Array.from(body.children).forEach((element) => {
    const shouldRemainInteractive = element === panel || element === pageScrim || element === toast || element === cartLiveSummary;
    if ('inert' in element) element.inert = inert && !shouldRemainInteractive;
  });
};

const closePanel = (panel = activePanel, restoreFocus = true) => {
  if (!panel) return;
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  if (panel === mobileMenu) {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Mở menu');
  }
  pageScrim?.classList.remove('open');
  body.classList.remove('dialog-open', 'menu-open', 'overlay-open', 'cart-open', 'contact-open');
  setBackgroundInert(false, panel);
  const returnTarget = activeTrigger;
  activePanel = null;
  activeTrigger = null;
  if (restoreFocus && returnTarget instanceof HTMLElement && returnTarget.isConnected) returnTarget.focus();
};

const openPanel = (panel, trigger) => {
  if (!panel) return;
  if (activePanel && activePanel !== panel) closePanel(activePanel, false);
  activePanel = panel;
  activeTrigger = trigger instanceof HTMLElement ? trigger : document.activeElement;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  body.classList.add('dialog-open');
  if (panel === mobileMenu) {
    body.classList.add('menu-open');
    menuButton?.setAttribute('aria-expanded', 'true');
    menuButton?.setAttribute('aria-label', 'Đóng menu');
  } else if (panel === searchOverlay) {
    body.classList.add('overlay-open');
  } else if (panel === contactDialog) {
    body.classList.add('contact-open');
  } else if (panel === cartDrawer) {
    body.classList.add('cart-open');
    pageScrim?.classList.add('open');
  }
  setBackgroundInert(true, panel);
  const initialFocus = panel.querySelector('[data-dialog-initial-focus]') || getFocusable(panel)[0];
  initialFocus?.focus();
};

document.addEventListener('keydown', (event) => {
  if (!activePanel) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    closePanel();
    return;
  }
  if (event.key !== 'Tab') return;
  const focusable = getFocusable(activePanel);
  if (!focusable.length) {
    event.preventDefault();
    activePanel.querySelector('[data-dialog-initial-focus]')?.focus();
    return;
  }
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!focusable.includes(document.activeElement)) {
    event.preventDefault();
    (event.shiftKey ? last : first).focus();
  } else if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

menuButton?.addEventListener('click', () => {
  if (activePanel === mobileMenu) closePanel();
  else openPanel(mobileMenu, menuButton);
});

mobileMenu?.querySelector('.mobile-menu-close')?.addEventListener('click', () => closePanel(mobileMenu));

mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closePanel(mobileMenu, false)));
document.querySelectorAll('.search-trigger').forEach((button) => button.addEventListener('click', () => openPanel(searchOverlay, button)));
searchOverlay?.querySelector('.search-close')?.addEventListener('click', () => closePanel(searchOverlay));
searchOverlay?.addEventListener('click', (event) => {
  if (event.target === searchOverlay) closePanel(searchOverlay);
});
cartDrawer?.querySelector('.cart-close')?.addEventListener('click', () => closePanel(cartDrawer));
pageScrim?.addEventListener('click', () => {
  if (activePanel === cartDrawer) closePanel(cartDrawer);
});

const contactStateCopy = {
  default: ['Điểm đến đang chờ cấu hình.', 'Bản mẫu không mở hồ sơ hoặc gửi tin nhắn thật.', 'pending'],
  contextual: ['Ngữ cảnh đã được giữ.', 'Tên fixture hoặc nguồn vào vẫn ở đây; nội dung tự do không được đưa vào URL.', 'pending'],
  'zalo-unavailable': ['Zalo chưa khả dụng.', 'Instagram cũng chỉ mở khi HEDY cung cấp điểm đến đã xác nhận.', 'warning'],
  'instagram-unavailable': ['Instagram chưa khả dụng.', 'Zalo cũng chỉ mở khi HEDY cung cấp điểm đến đã xác nhận.', 'warning'],
  'open-failure': ['Chưa mở được điểm liên hệ bên ngoài.', 'Thử lại sau, sao chép danh sách cần chuẩn bị hoặc xem thông tin liên hệ chung.', 'error'],
  offline: ['Thiết bị có vẻ đang ngoại tuyến.', 'Ngữ cảnh vẫn còn ở đây; hãy sao chép danh sách và thử mở kênh sau.', 'warning']
};

const safeContactState = (value) => Object.hasOwn(contactStateCopy, value) ? value : 'default';

const getContactContext = (trigger) => {
  const query = new URLSearchParams(window.location.search);
  const source = trigger?.dataset.contactSource || query.get('source') || pageId;
  const fixture = trigger?.dataset.contactFixture || query.get('fixture');
  const explicitLabel = trigger?.dataset.contactLabel;
  const caseFixture = fixture ? prototypeData.cases?.[fixture] : null;
  const productFixture = fixture ? prototypeData.products?.[fixture] : null;
  const fixtureLabel = caseFixture?.publicTitle || caseFixture?.sourceLabel || productFixture?.name?.short || fixture;
  const label = explicitLabel || fixtureLabel || `Nguồn vào: ${source}`;
  return { source, fixture, label };
};

const renderContactDialog = (state, context) => {
  if (!contactDialog) return;
  const resolvedState = safeContactState(state);
  const [title, message, tone] = contactStateCopy[resolvedState];
  const banner = contactDialog.querySelector('.contact-state-banner');
  if (banner) {
    banner.className = `status-banner status-banner--${tone} contact-state-banner`;
    banner.querySelector('strong').textContent = title;
    banner.querySelector('span').textContent = message;
  }
  const contextElement = contactDialog.querySelector('.contact-context');
  if (contextElement) {
    const showContext = resolvedState === 'contextual' || Boolean(context.fixture) || context.source !== 'nav';
    contextElement.hidden = !showContext;
    const contextText = contextElement.querySelector('strong');
    if (contextText) contextText.textContent = context.label;
  }
  const copyStatus = contactDialog.querySelector('.contact-copy-status');
  if (copyStatus) copyStatus.textContent = '';
};

document.querySelectorAll('.contact-trigger').forEach((button) => {
  button.addEventListener('click', () => {
    const query = new URLSearchParams(window.location.search);
    const state = button.dataset.contactState || (pageId === 'contact' ? query.get('state') : null) || (button.dataset.contactFixture ? 'contextual' : 'default');
    renderContactDialog(state, getContactContext(button));
    openPanel(contactDialog, button.closest('.mobile-menu') ? menuButton : button);
  });
});

contactDialog?.querySelector('.contact-close')?.addEventListener('click', () => closePanel(contactDialog));
contactDialog?.addEventListener('click', (event) => {
  if (event.target === contactDialog) closePanel(contactDialog);
});

const copyText = async (value) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();
  if (!copied) throw new Error('Copy unavailable');
};

contactDialog?.querySelector('.copy-contact-checklist')?.addEventListener('click', async () => {
  const status = contactDialog.querySelector('.contact-copy-status');
  try {
    await copyText(CONTACT_CHECKLIST.map((item) => `• ${item}`).join('\n'));
    if (status) status.textContent = 'Đã sao chép nội dung cần chuẩn bị.';
  } catch {
    if (status) status.textContent = 'Chưa sao chép tự động được. Danh sách vẫn hiển thị để bạn chọn thủ công.';
  }
});

const initContactPage = () => {
  const pageBanner = document.querySelector('[data-contact-page-banner]');
  if (!pageBanner) return;
  const query = new URLSearchParams(window.location.search);
  const state = safeContactState(query.get('state') || 'default');
  const [title, message, tone] = contactStateCopy[state];
  pageBanner.className = `status-banner status-banner--${tone}`;
  pageBanner.querySelector('strong').textContent = title;
  pageBanner.querySelector('span').textContent = message;
  const context = getContactContext(null);
  const pageContext = document.querySelector('[data-contact-page-context]');
  if (pageContext) {
    pageContext.hidden = state !== 'contextual' && !context.fixture;
    pageContext.querySelector('strong').textContent = context.label;
  }
};

const showToast = (message, icon = '✓') => {
  if (!toast) return;
  toast.querySelector('.toast-text').textContent = message;
  toast.querySelector('.toast-icon').textContent = icon;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2800);
};

const emptyCart = () => ({ version: CART_SCHEMA_VERSION, updatedAt: null, lines: [] });
const getProduct = (fixtureId) => prototypeData.products?.[fixtureId] || null;
const getVariant = (fixtureId, variantId) => getProduct(fixtureId)?.variants?.find((variant) => variant.id === variantId) || null;

const sanitizeCartLine = (line) => {
  const product = getProduct(line?.productFixtureId);
  const variant = product?.variants?.find((item) => item.id === line?.variantId);
  const quantity = Number(line?.quantity);
  const unitPriceVnd = Number(line?.unitPriceVnd);
  if (!product || !variant || !Number.isInteger(quantity) || quantity < 1 || !Number.isInteger(unitPriceVnd) || unitPriceVnd < 0) return null;
  return {
    productFixtureId: product.fixtureId,
    variantId: variant.id,
    quantity,
    unitPriceVnd,
    lineStatus: typeof line.lineStatus === 'string' ? line.lineStatus : 'current'
  };
};

const readCart = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    if (stored?.version !== CART_SCHEMA_VERSION || !Array.isArray(stored.lines)) return emptyCart();
    return {
      version: CART_SCHEMA_VERSION,
      updatedAt: typeof stored.updatedAt === 'string' ? stored.updatedAt : null,
      lines: stored.lines.map(sanitizeCartLine).filter(Boolean)
    };
  } catch {
    return emptyCart();
  }
};

let cartState = readCart();

const saveCart = () => {
  cartState.updatedAt = new Date().toISOString();
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState));
    return true;
  } catch {
    return false;
  }
};

const formatVnd = (value) => new Intl.NumberFormat('vi-VN').format(value) + '₫';
const getPrimaryAsset = (product) => {
  const media = product?.media?.find((item) => item.status === 'prototype-only');
  return prototypeData.assets?.[media?.assetId]?.path || 'materials/logo.jpg';
};

const renderCart = () => {
  const count = cartState.lines.reduce((total, line) => total + line.quantity, 0);
  document.querySelectorAll('.bag-count').forEach((element) => { element.textContent = String(count); });
  document.querySelectorAll('.bag-button').forEach((button) => button.setAttribute('aria-label', `Giỏ hàng, ${count} sản phẩm`));
  const emptyState = cartDrawer?.querySelector('.cart-empty');
  const filledState = cartDrawer?.querySelector('.cart-filled');
  const linesElement = cartDrawer?.querySelector('.cart-lines');
  if (!emptyState || !filledState || !linesElement) return;
  emptyState.hidden = count > 0;
  filledState.hidden = count === 0;
  linesElement.replaceChildren();
  cartState.lines.forEach((line) => {
    const product = getProduct(line.productFixtureId);
    const variant = getVariant(line.productFixtureId, line.variantId);
    const article = document.createElement('article');
    article.className = 'cart-line';
    article.dataset.cartLine = `${line.productFixtureId}:${line.variantId}`;
    article.innerHTML = `
      <img src="${getPrimaryAsset(product)}" alt="" width="160" height="160" />
      <div class="cart-line-copy"><strong>${product.name.short}</strong><small>${variant.label} · SL ${line.quantity}</small><span>${formatVnd(line.unitPriceVnd)} / món · minh họa</span><button class="cart-line-remove" type="button">Xóa <span class="sr-only">${product.name.short}, ${variant.label}</span></button></div>
    `;
    linesElement.appendChild(article);
  });
};

const announceCart = (message) => {
  if (cartLiveSummary) cartLiveSummary.textContent = message;
  showToast(message);
};

const knownProductMap = {
  'Bộ Chén Sớm Mai': { fixtureId: 'multi-variant', variantId: 'suong-bon' },
  'Đĩa Lá Nhỏ': { fixtureId: 'simple-in-stock', variantId: 'kem' },
  'Hộp Nhà Có Hoa': { fixtureId: 'fragile-large', variantId: 'kem-lon' }
};

const resolveAddRequest = (button) => {
  const selectedVariantButton = document.querySelector('.variant-option.is-active');
  const isProductAction = button.classList.contains('product-add') || button.closest('.mobile-purchase-bar');
  const mapped = knownProductMap[button.dataset.product];
  const fixtureId = button.dataset.fixtureId || (isProductAction ? 'multi-variant' : mapped?.fixtureId);
  const variantId = button.dataset.variantId || (isProductAction ? selectedVariantButton?.dataset.variantId : mapped?.variantId);
  const quantity = button.classList.contains('product-add') ? Number(document.querySelector('.quantity-value')?.textContent || 1) : 1;
  const variant = getVariant(fixtureId, variantId);
  if (!fixtureId || !variantId || !variant || !Number.isInteger(variant.priceVnd)) return null;
  return { fixtureId, variantId, quantity, variant };
};

const showInlineConfirmation = (button, message, tone = 'success') => {
  const scope = button.closest('.purchase-form, .product-card, .mobile-purchase-bar') || button.parentElement;
  if (!scope) return;
  let status = scope.querySelector('.add-inline-confirmation');
  if (!status) {
    status = document.createElement('p');
    status.className = 'inline-confirmation add-inline-confirmation';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    scope.appendChild(status);
  }
  status.dataset.tone = tone;
  status.textContent = message;
};

document.querySelectorAll('.bag-button').forEach((button) => button.addEventListener('click', () => openPanel(cartDrawer, button)));

document.querySelectorAll('.add-to-bag').forEach((button) => {
  button.addEventListener('click', () => {
    const request = resolveAddRequest(button);
    if (!request) {
      const message = 'Món này chưa có fixture bán lẻ tương ứng nên chưa được thêm vào giỏ.';
      showInlineConfirmation(button, message, 'warning');
      showToast(message, '!');
      return;
    }
    if (request.variant.inventory?.state !== 'in-stock') {
      const message = 'Tổ hợp này hiện không khả dụng trong dữ liệu mẫu.';
      showInlineConfirmation(button, message, 'warning');
      showToast(message, '!');
      return;
    }
    const existingLine = cartState.lines.find((line) => line.productFixtureId === request.fixtureId && line.variantId === request.variantId);
    if (existingLine) existingLine.quantity += request.quantity;
    else cartState.lines.push({ productFixtureId: request.fixtureId, variantId: request.variantId, quantity: request.quantity, unitPriceVnd: request.variant.priceVnd, lineStatus: 'current' });
    const saved = saveCart();
    renderCart();
    const product = getProduct(request.fixtureId);
    const message = `${product.name.short} · ${request.variant.label} × ${request.quantity} đã được thêm vào giỏ.`;
    showInlineConfirmation(button, saved ? message : `${message} Trình duyệt không cho phép lưu lâu dài.`, saved ? 'success' : 'warning');
    announceCart(message);
  });
});

cartDrawer?.addEventListener('click', (event) => {
  const removeButton = event.target.closest('.cart-line-remove');
  if (!removeButton) return;
  const lineElement = removeButton.closest('[data-cart-line]');
  const [fixtureId, variantId] = lineElement.dataset.cartLine.split(':');
  const product = getProduct(fixtureId);
  cartState.lines = cartState.lines.filter((line) => line.productFixtureId !== fixtureId || line.variantId !== variantId);
  saveCart();
  renderCart();
  announceCart(`${product?.name?.short || 'Sản phẩm'} đã được xóa khỏi giỏ.`);
});

cartDrawer?.querySelector('.cart-clear')?.addEventListener('click', () => {
  cartState = emptyCart();
  saveCart();
  renderCart();
  announceCart('Đã làm trống giỏ mẫu.');
});

document.querySelectorAll('.newsletter-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = form.querySelector('.form-message');
    if (message) message.textContent = 'Biểu mẫu mẫu đã nhận địa chỉ trong phiên này nhưng không đăng ký hoặc gửi email thật.';
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
  quantityValue.textContent = String(Math.min(Math.max(nextQuantity, 1), productMaxQuantity));
};
document.querySelector('.quantity-minus')?.addEventListener('click', () => setQuantity(Number(quantityValue?.textContent || 1) - 1));
document.querySelector('.quantity-plus')?.addEventListener('click', () => {
  const current = Number(quantityValue?.textContent || 1);
  if (current >= productMaxQuantity) {
    showToast(`Phiên bản này hiện giới hạn ${productMaxQuantity} trong fixture mẫu.`, '!');
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
    const variant = getVariant('multi-variant', button.dataset.variantId);
    document.querySelector('.selected-variant').textContent = button.dataset.variant || variant?.label || '';
    document.querySelectorAll('.product-detail-price, .mobile-product-price').forEach((element) => { element.textContent = button.dataset.price || (variant ? formatVnd(variant.priceVnd) : ''); });
    if (document.querySelector('.product-stock')) document.querySelector('.product-stock').textContent = button.dataset.stock || '';
    if (document.querySelector('.product-sku')) document.querySelector('.product-sku').textContent = button.dataset.sku || '';
    productMaxQuantity = Math.max(variant?.inventory?.sellableQuantity || 1, 1);
    setQuantity(1);
    const productAdd = document.querySelector('.product-add');
    const mobileAdd = document.querySelector('.mobile-purchase-bar .add-to-bag');
    [productAdd, mobileAdd].filter(Boolean).forEach((addButton) => { addButton.dataset.variantId = button.dataset.variantId || ''; });
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
  window.setTimeout(() => revealElements.forEach((element) => element.classList.add('visible')), 700);
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

window.addEventListener('scroll', () => siteHeader?.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true });

initContactPage();
renderCart();
