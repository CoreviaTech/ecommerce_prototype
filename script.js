const body = document.body;
const prototypeData = window.HedyPrototypeData || {};
const CART_STORAGE_KEY = 'hedyPrototypeCart';
const CART_SCHEMA_VERSION = 2;
const CHECKOUT_STORAGE_KEY = 'hedyPrototypeCheckoutDraft';
const CHECKOUT_SCHEMA_VERSION = 1;
const CHECKOUT_RESULT_STORAGE_KEY = 'hedyPrototypeCheckoutResults';
const CHECKOUT_RESULT_SCHEMA_VERSION = 1;
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
  const isCurrent = page === 'shop' ? ['shop', 'collection', 'search', 'product', 'cart', 'checkout', 'confirmation'].includes(pageId) : pageId === page;
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
      <form action="search.html">
        <label class="sr-only" for="site-search">Tìm sản phẩm</label>
        <div class="search-field"><input id="site-search" name="q" type="search" placeholder="Chén, bình hoa, quà tân gia…" /><button type="submit" aria-label="Gửi tìm kiếm">→</button></div>
      </form>
      <div class="search-suggestions"><span>Gợi ý theo loại</span><a href="product.html?fixture=multi-variant&amp;variant=suong-bon&amp;from=search">Sản phẩm · Bộ Chén Sớm Mai</a><a href="collection.html?collection=ban-an">Bộ sưu tập · Cho bàn ăn</a><a href="custom.html?source=search">Dịch vụ · Đặt riêng</a></div>
      <p class="dialog-footnote">Bạn có thể gửi từ khóa trực tiếp mà không cần chọn một gợi ý.</p>
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
        <div class="status-banner status-banner--pending contact-state-banner" role="status" aria-live="polite"><strong>Điểm đến đang chờ cấu hình.</strong><span>Chọn một kênh để xem bước chuyển tiếp mẫu; không có tin nhắn nào được gửi.</span></div>
        <div class="contact-channel-grid">
          <button class="contact-channel" type="button" data-contact-channel="zalo" aria-pressed="false" aria-describedby="zalo-reason"><span><small>Kênh 01 · xem trước</small><strong>Zalo</strong></span><i aria-hidden="true">↗</i></button>
          <p class="disabled-reason" id="zalo-reason">Điểm đến thật chưa cấu hình; lựa chọn chỉ mô phỏng bước rời website.</p>
          <button class="contact-channel" type="button" data-contact-channel="instagram" aria-pressed="false" aria-describedby="instagram-reason"><span><small>Kênh 02 · xem trước</small><strong>Instagram</strong></span><i aria-hidden="true">↗</i></button>
          <p class="disabled-reason" id="instagram-reason">Điểm đến thật chưa cấu hình; lựa chọn chỉ mô phỏng bước rời website.</p>
        </div>
        <p class="contact-channel-outcome" role="status" aria-live="polite" hidden></p>
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
    <div class="cart-filled" hidden><div class="cart-lines" aria-label="Sản phẩm trong giỏ"></div><p class="cart-drawer-subtotal"></p><p class="cart-prototype-note">Bản mẫu giao diện — giá, tồn kho và điều kiện bán vẫn cần HEDY xác nhận. Phí giao hàng được tính sau khi có địa chỉ; chưa được cộng ở đây.</p><div class="cart-drawer-actions"><a class="button button--dark" href="cart.html">Xem và sửa giỏ →</a><a class="text-link" href="shop.html">Tiếp tục khám phá</a><button class="cart-clear" type="button">Làm trống giỏ mẫu</button></div></div>
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
const filterDialog = document.querySelector('.filter-dialog');
const pageScrim = document.querySelector('.page-scrim');
const toast = document.querySelector('.toast');
const cartLiveSummary = document.querySelector('.cart-live-summary');
const panels = [mobileMenu, searchOverlay, contactDialog, cartDrawer, filterDialog].filter(Boolean);
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
  body.classList.remove('dialog-open', 'menu-open', 'overlay-open', 'cart-open', 'contact-open', 'filter-open');
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
  } else if (panel === filterDialog) {
    body.classList.add('filter-open');
    pageScrim?.classList.add('open');
    Array.from(panel.children).forEach((child) => { child.style.visibility = 'visible'; });
  }
  panel.getBoundingClientRect();
  const initialFocus = panel.querySelector('[data-dialog-initial-focus]') || getFocusable(panel)[0];
  initialFocus?.focus({ preventScroll: true });
  setBackgroundInert(true, panel);
  window.requestAnimationFrame(() => {
    if (activePanel === panel && !panel.contains(document.activeElement)) initialFocus?.focus({ preventScroll: true });
  });
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
filterDialog?.querySelector('.filter-close')?.addEventListener('click', () => closePanel(filterDialog));
document.querySelectorAll('.filter-trigger').forEach((button) => button.addEventListener('click', () => openPanel(filterDialog, button)));
pageScrim?.addEventListener('click', () => {
  if (activePanel === cartDrawer || activePanel === filterDialog) closePanel(activePanel);
});

const contactStateCopy = {
  default: ['Điểm đến đang chờ cấu hình.', 'Chọn một kênh để xem bước chuyển tiếp mẫu; không có hồ sơ được mở hay tin nhắn được gửi.', 'pending'],
  contextual: ['Ngữ cảnh đã được giữ.', 'Chọn một kênh để xem nhánh mẫu. Tên fixture được giữ; nội dung tự do không được đưa vào URL.', 'pending'],
  'zalo-unavailable': ['Zalo chưa khả dụng.', 'Instagram cũng chỉ mở khi HEDY cung cấp điểm đến đã xác nhận.', 'warning'],
  'instagram-unavailable': ['Instagram chưa khả dụng.', 'Zalo cũng chỉ mở khi HEDY cung cấp điểm đến đã xác nhận.', 'warning'],
  'open-failure': ['Chưa mở được điểm liên hệ bên ngoài.', 'Thử lại sau, sao chép danh sách cần chuẩn bị hoặc xem thông tin liên hệ chung.', 'error'],
  offline: ['Thiết bị có vẻ đang ngoại tuyến.', 'Ngữ cảnh vẫn còn ở đây; hãy sao chép danh sách và thử mở kênh sau.', 'warning']
};

const safeContactState = (value) => Object.hasOwn(contactStateCopy, value) ? value : 'default';
let activeContactState = 'default';
let activeContactContext = { source: 'direct', fixture: null, label: 'Nhu cầu đặt riêng' };
let activeContactChecklist = [...CONTACT_CHECKLIST];

const getContextChecklist = (context) => {
  const fixtureChecklist = context.fixture ? prototypeData.cases?.[context.fixture]?.contactPrompt : null;
  return Array.isArray(fixtureChecklist) && fixtureChecklist.length ? fixtureChecklist : CONTACT_CHECKLIST;
};

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
  activeContactState = resolvedState;
  activeContactContext = context;
  activeContactChecklist = [...getContextChecklist(context)];
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
  const checklist = contactDialog.querySelector('.contact-checklist ul');
  if (checklist) {
    checklist.replaceChildren(...activeContactChecklist.map((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      return listItem;
    }));
  }
  const outcome = contactDialog.querySelector('.contact-channel-outcome');
  if (outcome) {
    outcome.hidden = true;
    outcome.textContent = '';
    outcome.removeAttribute('data-tone');
  }
  const channelAvailability = {
    zalo: resolvedState !== 'zalo-unavailable' && resolvedState !== 'offline',
    instagram: resolvedState !== 'instagram-unavailable' && resolvedState !== 'offline'
  };
  contactDialog.querySelectorAll('[data-contact-channel]').forEach((button) => {
    const channel = button.dataset.contactChannel;
    const isAvailable = channelAvailability[channel];
    button.disabled = !isAvailable;
    button.setAttribute('aria-pressed', 'false');
    const reason = contactDialog.querySelector(`#${channel}-reason`);
    if (!reason) return;
    if (resolvedState === 'offline') reason.textContent = 'Thiết bị đang ngoại tuyến; sao chép danh sách và thử lại khi có kết nối.';
    else if (!isAvailable) reason.textContent = `${channel === 'zalo' ? 'Zalo' : 'Instagram'} không khả dụng trong trạng thái này; chọn kênh còn lại hoặc xem Liên hệ chung.`;
    else reason.textContent = 'Điểm đến thật chưa cấu hình; lựa chọn chỉ mô phỏng bước rời website.';
  });
};

const selectContactChannel = (channel) => {
  if (!contactDialog || !['zalo', 'instagram'].includes(channel)) return;
  const button = contactDialog.querySelector(`[data-contact-channel="${channel}"]`);
  if (!button || button.disabled) return;
  const outcome = contactDialog.querySelector('.contact-channel-outcome');
  if (!outcome) return;
  contactDialog.querySelectorAll('[data-contact-channel]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  outcome.hidden = false;
  if (activeContactState === 'open-failure') {
    outcome.dataset.tone = 'error';
    outcome.textContent = `Chưa mở được ${channel === 'zalo' ? 'Zalo' : 'Instagram'}. Ngữ cảnh “${activeContactContext.label}” vẫn được giữ; hãy sao chép danh sách, thử lại hoặc chọn kênh còn lại.`;
    return;
  }
  outcome.dataset.tone = 'pending';
  outcome.textContent = `${channel === 'zalo' ? 'Zalo' : 'Instagram'} đã được chọn trong bản mẫu cho “${activeContactContext.label}”. Khi HEDY cấu hình điểm đến thật, bước này sẽ rời website. Hiện chưa có hồ sơ được mở và chưa có tin nhắn nào được gửi.`;
};

const bindContactTrigger = (button) => {
  if (button.dataset.contactBound === 'true') return;
  button.dataset.contactBound = 'true';
  button.addEventListener('click', () => {
    const query = new URLSearchParams(window.location.search);
    const state = button.dataset.contactState || (pageId === 'contact' ? query.get('state') : null) || (button.dataset.contactFixture ? 'contextual' : 'default');
    renderContactDialog(state, getContactContext(button));
    openPanel(contactDialog, button.closest('.mobile-menu') ? menuButton : button);
    if (button.dataset.contactIntent) selectContactChannel(button.dataset.contactIntent);
  });
};

document.querySelectorAll('.contact-trigger').forEach(bindContactTrigger);

contactDialog?.querySelectorAll('[data-contact-channel]').forEach((button) => {
  button.addEventListener('click', () => selectContactChannel(button.dataset.contactChannel));
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
    await copyText(activeContactChecklist.map((item) => `• ${item}`).join('\n'));
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
const escapeHtml = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');
const getAsset = (assetId) => prototypeData.assets?.[assetId] || null;
const getAssetPath = (assetId) => getAsset(assetId)?.path || null;
const getPrimaryAsset = (product, variant = null) => {
  if (variant?.primaryAssetId) return getAssetPath(variant.primaryAssetId) || 'materials/logo.jpg';
  const media = product?.media?.find((item) => item.status === 'prototype-only' && getAssetPath(item.assetId));
  return getAssetPath(media?.assetId) || 'materials/logo.jpg';
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
  const subtotal = cartState.lines.reduce((total, line) => total + line.unitPriceVnd * line.quantity, 0);
  const subtotalElement = cartDrawer?.querySelector('.cart-drawer-subtotal');
  if (subtotalElement) subtotalElement.textContent = `Tạm tính minh họa · ${formatVnd(subtotal)}`;
  cartState.lines.forEach((line) => {
    const product = getProduct(line.productFixtureId);
    const variant = getVariant(line.productFixtureId, line.variantId);
    const article = document.createElement('article');
    article.className = 'cart-line';
    article.dataset.cartLine = `${line.productFixtureId}:${line.variantId}`;
    article.innerHTML = `
      <img src="${getPrimaryAsset(product, variant)}" alt="" width="160" height="160" />
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

const addCartRequest = (request, button) => {
  if (!request) {
    const message = 'Món này chưa có fixture bán lẻ tương ứng nên chưa được thêm vào giỏ.';
    showInlineConfirmation(button, message, 'warning');
    showToast(message, '!');
    return false;
  }
  if (request.variant.inventory?.state !== 'in-stock' || !['retail', 'retail-manual-delivery'].includes(request.variant.retailEligibility)) {
    const message = 'Lựa chọn này không có hành động mua bán lẻ; ngữ cảnh đặt riêng vẫn khả dụng.';
    showInlineConfirmation(button, message, 'warning');
    showToast(message, '!');
    return false;
  }
  const existingLine = cartState.lines.find((line) => line.productFixtureId === request.fixtureId && line.variantId === request.variantId);
  const maxQuantity = request.variant.inventory.sellableQuantity;
  if (existingLine) {
    existingLine.quantity = Math.min(existingLine.quantity + request.quantity, maxQuantity);
    if (existingLine.unitPriceVnd !== request.variant.priceVnd) {
      existingLine.lineStatus = 'price-changed';
    }
  } else {
    cartState.lines.push({
      productFixtureId: request.fixtureId,
      variantId: request.variantId,
      quantity: Math.min(request.quantity, maxQuantity),
      unitPriceVnd: request.variant.priceVnd,
      lineStatus: 'current'
    });
  }
  const saved = saveCart();
  renderCart();
  const product = getProduct(request.fixtureId);
  const message = `${product.name.short} · ${request.variant.label} × ${request.quantity} đã được thêm vào giỏ.`;
  showInlineConfirmation(button, saved ? message : `${message} Trình duyệt không cho phép lưu lâu dài.`, saved ? 'success' : 'warning');
  announceCart(message);
  return true;
};

document.querySelectorAll('.bag-button').forEach((button) => button.addEventListener('click', () => openPanel(cartDrawer, button)));

document.querySelectorAll('.add-to-bag').forEach((button) => {
  button.addEventListener('click', () => {
    const request = resolveAddRequest(button);
    addCartRequest(request, button);
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

const initPhase3Home = () => {
  if (pageId !== 'home') return;
  const query = new URLSearchParams(window.location.search);
  const allowedStates = Object.keys(prototypeData.experienceFixtures?.home || {});
  const requestedState = query.get('state') || 'default';
  const state = allowedStates.includes(requestedState) ? requestedState : 'default';
  body.dataset.phaseState = state;

  const heroMedia = document.querySelector('[data-home-hero-media]');
  const heroImage = heroMedia?.querySelector('.custom-home-hero-image');
  const fallback = heroMedia?.querySelector('[data-home-media-fallback]');
  const fallbackText = fallback?.querySelector('p');
  if (heroMedia && heroImage && fallback) {
    const isSlow = state === 'slow-hero-media';
    const isFailed = state === 'failed-hero-media';
    heroMedia.classList.toggle('is-media-slow', isSlow);
    heroMedia.classList.toggle('is-media-failed', isFailed);
    heroImage.hidden = isSlow || isFailed;
    fallback.hidden = !isSlow && !isFailed;
    if (fallbackText && isSlow) fallbackText.textContent = 'Hình mở đầu đang tải; nội dung Đặt riêng và các lối đi vẫn dùng được.';
    if (fallbackText && isFailed) fallbackText.textContent = 'Không tải được hình mở đầu. Bạn vẫn có thể xem quy trình, chuẩn bị yêu cầu hoặc vào Cửa hàng.';
  }

  const noCases = state === 'no-cases';
  const caseGrid = document.querySelector('[data-home-case-grid]');
  const caseEmpty = document.querySelector('[data-home-case-empty]');
  if (caseGrid) caseGrid.hidden = noCases;
  if (caseEmpty) caseEmpty.hidden = !noCases;

  const noProducts = state === 'no-featured-products';
  const productGrid = document.querySelector('[data-home-product-grid]');
  const productEmpty = document.querySelector('[data-home-product-empty]');
  if (productGrid) productGrid.hidden = noProducts;
  if (productEmpty) productEmpty.hidden = !noProducts;

  if (state === 'operational-announcement') {
    const announcement = document.querySelector('.announcement');
    const pendingCopy = prototypeData.experienceFixtures?.content?.['operational-announcement']?.customerText
      || 'Thông báo vận hành sẽ xuất hiện sau khi nội dung và thời hạn áp dụng được duyệt.';
    if (announcement) {
      announcement.querySelector('p').textContent = pendingCopy;
      announcement.querySelector('a').textContent = 'Trạng thái chờ duyệt ↗';
      announcement.querySelector('a').href = 'policies.html#pham-vi-ban-mau';
    }
  }
  const reviewView = query.get('view');
  const reviewTarget = reviewView === 'consultation' ? document.querySelector('#consultation') : (reviewView === 'top' ? document.documentElement : null);
  if (reviewTarget) {
    reviewTarget.classList?.add('visible');
    if (reviewView === 'consultation') {
      Array.from(document.querySelector('main').children).forEach((section) => { section.hidden = section !== reviewTarget; });
    }
    const positionReviewTarget = () => window.scrollTo(0, 0);
    positionReviewTarget();
    window.addEventListener('load', positionReviewTarget, { once: true });
    window.setTimeout(positionReviewTarget, 120);
  }
};

const customContextMap = {
  individual: { fixtureId: 'individual-personalized', label: 'Quà tặng cá nhân' },
  corporate: { fixtureId: 'corporate-volume', label: 'Quà tặng doanh nghiệp' },
  hospitality: { fixtureId: 'hospitality-venue', label: 'Gốm cho không gian' },
  other: { fixtureId: null, label: 'Nhu cầu khác hoặc chưa gọi tên' }
};

const initPhase3Custom = () => {
  if (pageId !== 'custom') return;
  const query = new URLSearchParams(window.location.search);
  const requestedUseCase = query.get('use-case') || 'individual';
  const useCase = Object.hasOwn(customContextMap, requestedUseCase) ? requestedUseCase : 'individual';
  const context = customContextMap[useCase];
  const caseFixture = context.fixtureId ? prototypeData.cases?.[context.fixtureId] : null;
  const checklist = Array.isArray(caseFixture?.contactPrompt) && caseFixture.contactPrompt.length
    ? caseFixture.contactPrompt
    : CONTACT_CHECKLIST;
  const allowedStates = ['default', 'limited-cases', 'no-cases', 'failed-case-media', 'channel-unavailable', 'rich', 'missing-commercial-guidance'];
  const requestedState = query.get('state') || 'default';
  const state = allowedStates.includes(requestedState) ? requestedState : 'default';
  body.dataset.phaseState = state;
  body.dataset.customUseCase = useCase;

  document.querySelectorAll('[data-use-case-link]').forEach((link) => {
    const isCurrent = link.dataset.useCaseLink === useCase;
    if (isCurrent) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
  document.querySelectorAll('[data-case-fixture]').forEach((card) => {
    const isCurrent = Boolean(context.fixtureId) && card.dataset.caseFixture === context.fixtureId;
    if (isCurrent) card.setAttribute('aria-current', 'true');
    else card.removeAttribute('aria-current');
  });

  const selectedLabel = document.querySelector('[data-selected-use-case-label]');
  if (selectedLabel) selectedLabel.textContent = context.label;
  const preparationTitle = document.querySelector('[data-preparation-title]');
  if (preparationTitle) preparationTitle.textContent = caseFixture?.publicTitle || 'Một nhu cầu cần được làm rõ';
  const preparationList = document.querySelector('[data-preparation-list]');
  if (preparationList) {
    preparationList.replaceChildren(...checklist.map((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      return listItem;
    }));
  }

  document.querySelectorAll('[data-custom-context-trigger]').forEach((trigger) => {
    if (context.fixtureId) trigger.dataset.contactFixture = context.fixtureId;
    else {
      delete trigger.dataset.contactFixture;
      trigger.dataset.contactLabel = context.label;
    }
    if (state === 'channel-unavailable') trigger.dataset.contactState = 'zalo-unavailable';
    else delete trigger.dataset.contactState;
  });

  document.querySelector('.copy-preparation')?.addEventListener('click', async () => {
    const status = document.querySelector('.preparation-copy-status');
    try {
      await copyText(checklist.map((item) => `• ${item}`).join('\n'));
      if (status) status.textContent = 'Đã sao chép danh sách cho bối cảnh này.';
    } catch {
      if (status) status.textContent = 'Chưa sao chép tự động được. Danh sách vẫn hiển thị để bạn chọn thủ công.';
    }
  });

  const caseGrid = document.querySelector('[data-custom-case-grid]');
  const caseEmpty = document.querySelector('[data-custom-case-empty]');
  const caseState = document.querySelector('[data-custom-case-state]');
  const caseBanner = document.querySelector('[data-custom-case-status]');
  const noCases = state === 'no-cases';
  if (caseGrid) caseGrid.hidden = noCases || state === 'rich';
  if (caseEmpty) caseEmpty.hidden = !noCases;
  if (caseState) {
    caseState.hidden = state !== 'rich' && state !== 'failed-case-media';
    caseState.replaceChildren();
  }
  if (state === 'failed-case-media' && caseState) {
    const failure = document.createElement('div');
    failure.className = 'status-banner status-banner--error';
    failure.innerHTML = '<strong>Mẫu lỗi media đã được giữ an toàn.</strong><span>Không có hồ sơ đã duyệt để áp dụng lỗi này như bằng chứng. Khi có hồ sơ hợp lệ, trạng thái sẽ giữ brief, chú thích, điều cần chuẩn bị và Liên hệ mà không mượn ảnh sản phẩm khác.</span>';
    caseState.appendChild(failure);
    if (caseBanner) {
      caseBanner.className = 'status-banner status-banner--warning custom-case-status reveal visible';
      caseBanner.querySelector('strong').textContent = 'Không giả lập lỗi tải cho nội dung vốn đang thiếu.';
      caseBanner.querySelector('span').textContent = 'Ba bối cảnh giới hạn bên dưới vẫn được hiển thị đúng bản chất.';
    }
  }
  if (state === 'rich' && caseState) {
    const template = document.querySelector('#rich-case-pattern');
    if (template) caseState.appendChild(template.content.cloneNode(true));
    caseState.querySelectorAll('.contact-trigger').forEach(bindContactTrigger);
  }

  const commercial = document.querySelector('[data-commercial-guidance]');
  if (commercial && state === 'missing-commercial-guidance') {
    commercial.classList.add('is-guidance-missing');
    const fallback = document.createElement('div');
    fallback.className = 'custom-commercial-fallback';
    fallback.innerHTML = '<p class="eyebrow">Hướng dẫn đang thiếu · dùng fallback an toàn</p><h3>Xác nhận sau khi HEDY hiểu đủ yêu cầu.</h3><p>Số lượng, mẫu thử, thời gian, chi phí thiết kế hoặc đặt cọc và cách giao đều chưa có giá trị được duyệt. Bản mẫu không thay chúng bằng số giả.</p>';
    commercial.querySelector('.custom-commercial-copy')?.insertAdjacentElement('afterend', fallback);
  }
  const reviewView = query.get('view');
  const reviewTarget = reviewView === 'preparation' ? document.querySelector('#can-chuan-bi') : (reviewView === 'top' ? document.documentElement : null);
  if (reviewTarget) {
    reviewTarget.classList?.add('visible');
    if (reviewView === 'preparation') {
      Array.from(document.querySelector('main').children).forEach((section) => { section.hidden = section !== reviewTarget; });
    }
    const positionReviewTarget = () => window.scrollTo(0, 0);
    positionReviewTarget();
    window.addEventListener('load', positionReviewTarget, { once: true });
    window.setTimeout(positionReviewTarget, 120);
  }
};

const DISCOVERY_STORAGE_KEY = 'hedyPrototypeDiscoveryContext';
const RECENT_SEARCH_STORAGE_KEY = 'hedyPrototypeRecentSearches';
const phase4FilterLabels = {
  available: 'Có thể mua trong bản mẫu',
  gift: 'Phù hợp lối Quà tặng',
  'low-stock': 'Có phiên bản còn ít',
  'manual-delivery': 'Cần báo phí giao',
  consultation: 'Chỉ tư vấn'
};

const normalizeSearchValue = (value) => String(value || '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('vi')
  .trim();

const getCatalogPriceValue = (product) => {
  const price = product?.catalogPrice;
  if (price?.type === 'single') return price.amountVnd;
  if (price?.type === 'range') return price.minVnd;
  return Number.MAX_SAFE_INTEGER;
};

const getCatalogPriceLabel = (product) => {
  const price = product?.catalogPrice;
  if (price?.type === 'single') return formatVnd(price.amountVnd);
  if (price?.type === 'range') return `${formatVnd(price.minVnd)} – ${formatVnd(price.maxVnd)}`;
  return price?.customerText || 'Xác nhận sau tư vấn';
};

const getCardAvailability = (product, options = {}) => {
  if (options.soldOut) return { badge: 'Hết hàng · minh họa', tone: 'warning', text: 'Trạng thái thử nghiệm: không thể thêm vào Giỏ; không suy diễn thời điểm có lại.' };
  if (product.retailEligibility === 'enquiry-only') return { badge: 'Chỉ tư vấn', tone: 'pending', text: 'Không có SKU hoặc giá bán lẻ đã duyệt.' };
  if (product.retailEligibility === 'retail-manual-delivery') return { badge: 'Báo phí giao', tone: 'warning', text: 'Có thể thêm vào Giỏ mẫu; phí giao và tổng cuối vẫn chờ xác nhận.' };
  const lowStockVariant = product.variants?.find((variant) => variant.inventory?.state === 'in-stock' && variant.inventory.sellableQuantity <= 2);
  if (lowStockVariant) return { badge: 'Có phiên bản còn ít', tone: 'warning', text: `${lowStockVariant.label} còn ${lowStockVariant.inventory.sellableQuantity} trong dữ liệu minh họa.` };
  return { badge: 'Có thể mua · minh họa', tone: 'default', text: 'Tồn kho và điều kiện bán vẫn cần HEDY xác nhận.' };
};

const getProductCardMarkup = (product, options = {}) => {
  const source = options.source || pageId;
  const variant = product.variants?.find((item) => item.id === product.defaultVariantId) || product.variants?.[0];
  const asset = prototypeData.assets?.[variant?.primaryAssetId];
  const hasImage = Boolean(asset?.path) && !options.mediaFailed;
  const availability = getCardAvailability(product, options);
  const detailReady = product.fixtureId === 'multi-variant';
  const isConsultation = product.retailEligibility === 'enquiry-only';
  const destination = isConsultation
    ? (product.related?.serviceRoute || 'custom.html?source=product')
    : `product.html?fixture=${encodeURIComponent(product.fixtureId)}&variant=${encodeURIComponent(product.defaultVariantId)}&from=${encodeURIComponent(source)}`;
  const imageContent = hasImage
    ? `<img src="${asset.path}" alt="${asset.altIntent}" width="${asset.width}" height="${asset.height}" loading="lazy" />`
    : `<span class="phase4-media-fallback" role="img" aria-label="${asset?.altIntent || 'Ảnh sản phẩm đang được cập nhật.'}"><span>${isConsultation ? 'Bằng chứng được duyệt<br />đang chờ bổ sung.' : 'Ảnh sản phẩm<br />đang được cập nhật.'}</span></span>`;
  const imageMarkup = detailReady || isConsultation
    ? `<a class="product-image" href="${destination}" data-discovery-link>${imageContent}<span class="product-badge product-badge--${availability.tone}">${availability.badge}</span><span class="product-view">${isConsultation ? 'Xem hành trình tư vấn' : 'Xem chi tiết'} ↗</span></a>`
    : `<div class="product-image product-image--pending-detail">${imageContent}<span class="product-badge product-badge--${availability.tone}">${availability.badge}</span><span class="product-view product-view--static">Chi tiết ở Phase 5</span></div>`;
  const actionMarkup = options.soldOut
    ? '<span class="product-card-phase-note">Không thể thêm vào Giỏ</span>'
    : isConsultation
    ? `<a class="text-link product-card-service-link" href="${destination}" data-discovery-link>Chuẩn bị yêu cầu <span aria-hidden="true">↗</span></a>`
    : (detailReady
      ? `<button class="round-add add-to-bag" type="button" data-fixture-id="${product.fixtureId}" data-variant-id="${product.defaultVariantId}" aria-label="Thêm ${product.name.short}, ${variant.label} vào giỏ">+</button>`
      : '<span class="product-card-phase-note">PDP ở Phase 5</span>');
  return `
    <article class="product-card phase4-product-card${isConsultation ? ' product-card--consultation' : ''}" data-fixture-id="${product.fixtureId}" data-price="${getCatalogPriceValue(product)}" id="${options.idPrefix || 'product'}-${product.fixtureId}">
      ${imageMarkup}
      <div class="product-info">
        <div><p class="product-card-kind">${product.productType}</p><h3>${detailReady || isConsultation ? `<a href="${destination}" data-discovery-link>${product.name.short}</a>` : product.name.short}</h3><p>${product.description.short}</p></div>
        <div class="price-row"><span>${getCatalogPriceLabel(product)}</span>${actionMarkup}</div>
      </div>
      <p class="product-card-availability" data-tone="${availability.tone}">${availability.text}</p>
    </article>
  `;
};

const getDiscoverySourceUrl = () => `${window.location.pathname.split('/').pop() || 'index.html'}${window.location.search}${window.location.hash}`;

const saveDiscoveryContext = (link, visibleCount) => {
  const card = link.closest('[data-fixture-id]');
  const context = {
    sourcePage: pageId,
    sourceUrl: getDiscoverySourceUrl(),
    sourceLabel: document.querySelector('[data-collection-title]')?.textContent?.trim() || (pageId === 'search' ? 'Kết quả tìm kiếm' : 'Cửa hàng'),
    scrollY: Math.round(window.scrollY),
    visibleCount,
    scrollAnchor: card?.id || null,
    returnPending: true
  };
  try {
    sessionStorage.setItem(DISCOVERY_STORAGE_KEY, JSON.stringify(context));
  } catch {
    // Discovery remains usable when session storage is unavailable.
  }
};

const getPendingDiscoveryContext = () => {
  try {
    const context = JSON.parse(sessionStorage.getItem(DISCOVERY_STORAGE_KEY) || 'null');
    return context?.sourceUrl === getDiscoverySourceUrl() && context.returnPending ? context : null;
  } catch {
    return null;
  }
};

const consumeDiscoveryContext = (context) => {
  if (!context) return;
  context.returnPending = false;
  try { sessionStorage.setItem(DISCOVERY_STORAGE_KEY, JSON.stringify(context)); } catch { /* no-op */ }
  requestAnimationFrame(() => window.scrollTo(0, Math.max(Number(context.scrollY) || 0, 0)));
};

const addPhase4Product = (button) => {
  const request = resolveAddRequest(button);
  if (!request || request.variant.inventory?.state !== 'in-stock') {
    const message = 'Món này chưa có một phiên bản bán lẻ khả dụng để thêm vào Giỏ mẫu.';
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
  const message = `${product.name.short} · ${request.variant.label} đã được thêm vào Giỏ mẫu.`;
  showInlineConfirmation(button, saved ? message : `${message} Trình duyệt không cho phép lưu lâu dài.`, saved ? 'success' : 'warning');
  announceCart(message);
};

const bindPhase4Grid = (grid, getVisibleCount = () => grid.querySelectorAll('.phase4-product-card').length) => {
  if (!grid || grid.dataset.phase4Bound === 'true') return;
  grid.dataset.phase4Bound = 'true';
  grid.addEventListener('click', (event) => {
    const addButton = event.target.closest('.add-to-bag');
    if (addButton) {
      addPhase4Product(addButton);
      return;
    }
    const discoveryLink = event.target.closest('[data-discovery-link]');
    if (discoveryLink) saveDiscoveryContext(discoveryLink, getVisibleCount());
  });
};

const initPhase4Shop = () => {
  if (pageId !== 'shop') return;
  const query = new URLSearchParams(window.location.search);
  const requestedState = query.get('state') || 'default';
  const allowedStates = prototypeData.stateFixtures?.shop || ['default'];
  const state = allowedStates.includes(requestedState) ? requestedState : 'default';
  const shopFixture = prototypeData.experienceFixtures?.shop?.[state] || prototypeData.experienceFixtures?.shop?.default;
  const allProducts = Object.values(prototypeData.products || {});
  const collectionList = document.querySelector('[data-shop-collection-list]');
  const productGrid = document.querySelector('[data-shop-product-grid]');
  const stateBanner = document.querySelector('[data-shop-state-banner]');
  const sparseNote = document.querySelector('[data-shop-sparse-note]');
  const restoredContext = getPendingDiscoveryContext();
  const collectionMedia = { 'ban-an': 'img5', 'qua-tang': 'img8', 'goc-nha': 'img4' };
  body.dataset.phaseState = state;
  if (query.get('view') === 'retail') body.dataset.reviewView = 'retail';
  if (query.get('view') === 'top') {
    const positionShopTop = () => window.scrollTo(0, 0);
    positionShopTop();
    window.addEventListener('load', positionShopTop, { once: true });
    window.setTimeout(positionShopTop, 120);
  }

  if (state === 'media-failure') {
    const hero = document.querySelector('[data-shop-hero-media]');
    const image = hero?.querySelector('img');
    const fallback = hero?.querySelector('.phase4-media-fallback');
    if (image) image.hidden = true;
    if (fallback) fallback.hidden = false;
    if (stateBanner) {
      stateBanner.hidden = false;
      stateBanner.className = 'status-banner status-banner--warning shop-state-banner';
      stateBanner.innerHTML = '<strong>Hình bán lẻ không tải được.</strong><span>Tên, giá minh họa, trạng thái và lối đi vẫn còn; placeholder không thay thế ảnh bằng tài sản khác.</span>';
    }
  }

  const collectionIds = shopFixture?.collectionIds || Object.keys(prototypeData.collections || {});
  if (collectionList) {
    collectionList.innerHTML = collectionIds.map((collectionId, index) => {
      const collection = prototypeData.collections[collectionId];
      const count = allProducts.filter((product) => product.collectionIds?.includes(collectionId)).length;
      const asset = prototypeData.assets?.[collectionMedia[collectionId]];
      return `<a class="category-row reveal" href="collection.html?collection=${collectionId}"><span class="category-number">0${index + 1}</span><div><small>${collection.shortDescription}</small><h3>${collection.label}</h3></div><span class="category-count">${count} fixture</span><span class="category-arrow" aria-hidden="true">↗</span>${state === 'media-failure' ? '' : `<img src="${asset.path}" alt="" width="${asset.width}" height="${asset.height}" loading="lazy" />`}</a>`;
    }).join('');
  }

  const productIds = state === 'sparse-shop'
    ? (shopFixture.productFixtureIds || ['simple-in-stock'])
    : [...(shopFixture.retailProductFixtureIds || ['simple-in-stock', 'multi-variant', 'fragile-large']), ...(shopFixture.consultationFixtureIds || ['enquiry-only'])];
  if (productGrid) {
    productGrid.innerHTML = productIds.map((fixtureId, index) => getProductCardMarkup(prototypeData.products[fixtureId], { source: 'shop', mediaFailed: state === 'media-failure', idPrefix: 'shop-product', eager: index < 2 })).join('');
    bindPhase4Grid(productGrid);
  }
  if (sparseNote) sparseNote.hidden = state !== 'sparse-shop';
  if (restoredContext && stateBanner && state !== 'media-failure') {
    stateBanner.hidden = false;
    stateBanner.className = 'status-banner status-banner--success shop-state-banner';
    stateBanner.innerHTML = '<strong>Đã trở lại Cửa hàng.</strong><span>Vị trí trước khi mở sản phẩm được giữ trong phiên này.</span>';
    consumeDiscoveryContext(restoredContext);
  }
};

const productMatchesPhase4Filter = (product, filterId) => {
  if (filterId === 'available') return ['retail', 'retail-manual-delivery'].includes(product.retailEligibility);
  if (filterId === 'gift') return product.collectionIds?.includes('qua-tang') || product.useCases?.some((useCase) => useCase.includes('gift'));
  if (filterId === 'low-stock') return product.variants?.some((variant) => variant.inventory?.state === 'in-stock' && variant.inventory.sellableQuantity <= 2);
  if (filterId === 'manual-delivery') return product.retailEligibility === 'retail-manual-delivery';
  if (filterId === 'consultation') return product.retailEligibility === 'enquiry-only';
  return true;
};

const initPhase4Collection = () => {
  if (pageId !== 'collection') return;
  const query = new URLSearchParams(window.location.search);
  const allowedCollections = Object.keys(prototypeData.collections || {});
  const requestedCollection = query.get('collection') || 'ban-an';
  const collectionId = allowedCollections.includes(requestedCollection) ? requestedCollection : 'ban-an';
  const collection = prototypeData.collections[collectionId];
  const allowedStates = prototypeData.stateFixtures?.collection || ['default'];
  const requestedState = query.get('state') || 'default';
  let state = allowedStates.includes(requestedState) ? requestedState : 'default';
  const soldOutFixtureId = query.get('card') === 'sold-out' ? 'simple-in-stock' : null;
  const allowedSorts = ['featured', 'newest', 'price-low', 'price-high'];
  let sort = allowedSorts.includes(query.get('sort')) ? query.get('sort') : 'featured';
  let filters = (query.get('filter') || '').split(',').filter((filterId) => Object.hasOwn(phase4FilterLabels, filterId));
  let visibleLimit = 2;
  let restoreContext = null;
  try {
    restoreContext = JSON.parse(sessionStorage.getItem(DISCOVERY_STORAGE_KEY) || 'null');
    if (restoreContext?.sourceUrl === getDiscoverySourceUrl() && restoreContext.returnPending) visibleLimit = Math.max(Number(restoreContext.visibleCount) || 2, 2);
  } catch {
    restoreContext = null;
  }

  const title = document.querySelector('[data-collection-title]');
  const description = document.querySelector('[data-collection-description]');
  const breadcrumb = document.querySelector('[data-collection-breadcrumb]');
  const indexLabel = document.querySelector('[data-collection-index]');
  const hero = document.querySelector('[data-collection-hero-media]');
  const heroImage = hero?.querySelector('img');
  const heroFallback = hero?.querySelector('.phase4-media-fallback');
  const grid = document.querySelector('#phase4-catalog-grid');
  const skeleton = document.querySelector('[data-collection-skeleton]');
  const empty = document.querySelector('[data-collection-empty]');
  const stateRegion = document.querySelector('[data-collection-state]');
  const live = document.querySelector('[data-collection-live]');
  const resultCount = document.querySelector('.phase4-catalog-summary .result-count');
  const loadButton = document.querySelector('.phase4-load-more');
  const loadCount = document.querySelector('[data-load-more-count]');
  const sortControl = document.querySelector('#phase4-product-sort');
  const filterForm = document.querySelector('.collection-filter-form');
  const collectionAssetIds = { 'ban-an': 'img5', 'qua-tang': 'img8', 'goc-nha': 'img4' };
  const collectionAsset = prototypeData.assets?.[collectionAssetIds[collectionId]];
  body.dataset.phaseState = state;
  if (query.get('view') === 'catalog') body.dataset.reviewView = 'catalog';
  if (title) title.textContent = `${collection.label}.`;
  if (description) description.textContent = collection.shortDescription;
  if (breadcrumb) breadcrumb.textContent = collection.label;
  if (indexLabel) indexLabel.textContent = `Bộ sưu tập · ${collection.truthStatus === 'illustrative' ? 'Dữ liệu minh họa' : 'Đã duyệt'}`;
  document.title = `${collection.label} — HEDY ATELIER`;
  if (heroImage && collectionAsset) {
    heroImage.src = collectionAsset.path;
    heroImage.alt = collectionAsset.altIntent;
    heroImage.width = collectionAsset.width;
    heroImage.height = collectionAsset.height;
  }
  if (sortControl) sortControl.value = sort;

  const syncFilterForm = () => {
    filterForm?.querySelectorAll('input[name="filter"]').forEach((input) => { input.checked = filters.includes(input.value); });
    const count = document.querySelector('.filter-selection-count');
    if (count) count.textContent = String(filters.length);
  };

  const updateDiscoveryUrl = () => {
    const next = new URLSearchParams();
    next.set('collection', collectionId);
    if (filters.length) next.set('filter', filters.join(','));
    if (sort !== 'featured') next.set('sort', sort);
    window.history.replaceState({}, '', `${window.location.pathname}?${next.toString()}`);
  };

  const renderAppliedFilters = () => {
    const bar = document.querySelector('[data-applied-filter-bar]');
    const chips = document.querySelector('[data-applied-filter-chips]');
    if (!bar || !chips) return;
    bar.hidden = filters.length === 0;
    chips.innerHTML = filters.map((filterId) => `<button type="button" data-remove-filter="${filterId}">${phase4FilterLabels[filterId]} <span aria-hidden="true">×</span><span class="sr-only">Bỏ bộ lọc</span></button>`).join('');
  };

  const setStateBanner = (tone, heading, message, actions = '') => {
    if (!stateRegion) return;
    stateRegion.innerHTML = `<div class="status-banner status-banner--${tone}"><strong>${heading}</strong><span>${message}${actions}</span></div>`;
  };

  const getSortedProducts = () => {
    let products = Object.values(prototypeData.products || {}).filter((product) => product.collectionIds?.includes(collectionId));
    products = products.filter((product) => filters.every((filterId) => productMatchesPhase4Filter(product, filterId)));
    if (state === 'removed-item') products = products.filter((product) => product.fixtureId !== 'enquiry-only');
    if (state === 'zero') products = [];
    return products.sort((a, b) => {
      if (sort === 'price-low') return getCatalogPriceValue(a) - getCatalogPriceValue(b);
      if (sort === 'price-high') return getCatalogPriceValue(b) - getCatalogPriceValue(a);
      if (sort === 'newest') return b.catalogOrder - a.catalogOrder;
      return a.catalogOrder - b.catalogOrder;
    });
  };

  const renderCollection = (announcement) => {
    const products = getSortedProducts();
    const visibleProducts = products.slice(0, visibleLimit);
    const loading = state === 'loading' || state === 'retrying';
    if (grid) {
      grid.hidden = loading || products.length === 0;
      grid.innerHTML = loading ? '' : visibleProducts.map((product, index) => getProductCardMarkup(product, { source: 'collection', mediaFailed: state === 'media-failure' && index === 0, soldOut: product.fixtureId === soldOutFixtureId, idPrefix: 'product' })).join('');
    }
    if (skeleton) skeleton.hidden = !loading;
    if (empty) empty.hidden = loading || products.length > 0;
    if (resultCount) resultCount.textContent = loading ? '—' : String(products.length);
    if (loadButton) {
      const remaining = Math.max(products.length - visibleProducts.length, 0);
      loadButton.hidden = loading || remaining === 0;
      loadButton.disabled = false;
      loadButton.firstChild.textContent = state === 'load-failure' ? 'Thử tải phần còn lại ' : 'Xem thêm ';
      if (loadCount) loadCount.textContent = remaining ? `(${remaining})` : '';
    }
    if (stateRegion) stateRegion.replaceChildren();
    if (state === 'loading' || state === 'retrying') setStateBanner('pending', 'Đang cập nhật danh sách.', 'Bộ lọc và cách sắp xếp được giữ trong khi fixture đang tải.');
    if (state === 'load-failure') setStateBanner('error', 'Chưa tải được phần tiếp theo.', `${visibleProducts.length} kết quả đang thấy vẫn được giữ. Thử lại không thay bộ lọc hoặc thứ tự.`);
    if (state === 'removed-item') setStateBanner('warning', 'Một mục chỉ tư vấn đã rời danh sách.', 'Bộ Quà Dấu Riêng không được gọi là hết hàng; bạn vẫn có thể <a href="custom.html?source=collection-removed">mở Đặt riêng</a>.');
    if (state === 'media-failure') setStateBanner('warning', 'Một ảnh sản phẩm không tải được.', 'Tên, giá và trạng thái vẫn hiển thị. Placeholder không dùng ảnh của sản phẩm khác.');
    if (state === 'restored-context' || restoreContext?.returnPending) setStateBanner('success', 'Ngữ cảnh khám phá đã được khôi phục.', 'Bộ lọc, thứ tự, số mục đã mở và vị trí trước khi xem sản phẩm được giữ trong phiên này.');
    renderAppliedFilters();
    syncFilterForm();
    if (announcement && live) live.textContent = announcement;
  };

  bindPhase4Grid(grid, () => grid?.querySelectorAll('.phase4-product-card').length || 0);
  renderCollection();

  if (restoreContext?.sourceUrl === getDiscoverySourceUrl() && restoreContext.returnPending) {
    restoreContext.returnPending = false;
    try { sessionStorage.setItem(DISCOVERY_STORAGE_KEY, JSON.stringify(restoreContext)); } catch { /* no-op */ }
    requestAnimationFrame(() => window.scrollTo(0, Math.max(Number(restoreContext.scrollY) || 0, 0)));
  }

  document.querySelector('[data-applied-filter-chips]')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-remove-filter]');
    if (!button) return;
    filters = filters.filter((filterId) => filterId !== button.dataset.removeFilter);
    visibleLimit = 2;
    state = 'default';
    updateDiscoveryUrl();
    renderCollection(`Đã bỏ bộ lọc ${phase4FilterLabels[button.dataset.removeFilter]}. Có ${getSortedProducts().length} kết quả.`);
  });

  document.querySelectorAll('.clear-all-filters').forEach((button) => button.addEventListener('click', () => {
    filters = [];
    visibleLimit = 2;
    state = 'default';
    updateDiscoveryUrl();
    renderCollection(`Đã xóa mọi bộ lọc. Có ${getSortedProducts().length} kết quả.`);
    if (activePanel === filterDialog) closePanel(filterDialog);
  }));

  filterForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    filters = Array.from(filterForm.querySelectorAll('input[name="filter"]:checked')).map((input) => input.value);
    visibleLimit = 2;
    state = 'default';
    updateDiscoveryUrl();
    renderCollection(`Đã áp dụng ${filters.length} bộ lọc. Có ${getSortedProducts().length} kết quả.`);
    closePanel(filterDialog);
  });

  sortControl?.addEventListener('change', () => {
    sort = allowedSorts.includes(sortControl.value) ? sortControl.value : 'featured';
    visibleLimit = 2;
    state = 'default';
    updateDiscoveryUrl();
    renderCollection(`Đã sắp xếp lại ${getSortedProducts().length} kết quả.`);
  });

  loadButton?.addEventListener('click', () => {
    loadButton.disabled = true;
    loadButton.firstChild.textContent = 'Đang tải ';
    if (live) live.textContent = 'Đang tải phần tiếp theo.';
    window.setTimeout(() => {
      state = 'default';
      visibleLimit = getSortedProducts().length;
      updateDiscoveryUrl();
      renderCollection(`Đã hiển thị đủ ${getSortedProducts().length} kết quả.`);
      grid?.querySelectorAll('.phase4-product-card')[Math.max(visibleLimit - 1, 0)]?.querySelector('a, button')?.focus();
    }, 320);
  });

  if (state === 'media-failure' && heroImage && heroFallback) {
    heroImage.hidden = true;
    heroFallback.hidden = false;
  }
};

const readRecentSearches = () => {
  try {
    const value = JSON.parse(localStorage.getItem(RECENT_SEARCH_STORAGE_KEY) || '[]');
    return Array.isArray(value) ? value.filter((item) => typeof item === 'string').slice(0, 3) : [];
  } catch {
    return [];
  }
};

const saveRecentSearch = (query) => {
  if (!query.trim()) return;
  const searches = [query.trim(), ...readRecentSearches().filter((item) => normalizeSearchValue(item) !== normalizeSearchValue(query))].slice(0, 3);
  try { localStorage.setItem(RECENT_SEARCH_STORAGE_KEY, JSON.stringify(searches)); } catch { /* Search remains usable. */ }
};

const searchPrototypeCatalog = (query) => {
  const needle = normalizeSearchValue(query);
  if (!needle) return { products: [], collections: [], content: [], services: [] };
  const includesNeedle = (...values) => normalizeSearchValue(values.flat().filter(Boolean).join(' ')).includes(needle);
  const products = Object.values(prototypeData.products || {}).filter((product) => includesNeedle(product.name?.short, product.name?.long, product.productType, product.keywords, product.useCases));
  const collections = Object.values(prototypeData.collections || {}).filter((collection) => includesNeedle(collection.label, collection.shortDescription, collection.id));
  const content = Object.values(prototypeData.contentEntries || {}).filter((entry) => includesNeedle(entry.title, entry.excerpt, entry.contentType));
  const services = [];
  if (includesNeedle('quà cá nhân cá nhân hóa dấu riêng')) services.push({ id: 'individual', label: 'Quà tặng cá nhân đặt riêng', route: 'custom.html?use-case=individual&source=search', description: 'Chuẩn bị dịp tặng, số lượng, nội dung, thời điểm và nơi giao.' });
  if (includesNeedle('quà doanh nghiệp logo số lượng đặt riêng')) services.push({ id: 'corporate', label: 'Quà tặng doanh nghiệp', route: 'custom.html?use-case=corporate&source=search', description: 'Trao đổi loại quà, số lượng, logo hoặc nội dung, thời điểm và địa điểm giao.' });
  if (includesNeedle('không gian khách sạn nhà hàng hospitality bình đặt riêng')) services.push({ id: 'hospitality', label: 'Gốm cho không gian', route: 'custom.html?use-case=hospitality&source=search', description: 'Làm rõ công năng, điều kiện sử dụng, số lượng và địa điểm.' });
  return { products, collections, content, services };
};

const initPhase4Search = () => {
  if (pageId !== 'search') return;
  const params = new URLSearchParams(window.location.search);
  const allowedStates = prototypeData.stateFixtures?.search || [];
  const requestedState = params.get('state');
  const input = document.querySelector('#search-page-input');
  const form = document.querySelector('[data-search-form]');
  const clearButton = document.querySelector('.search-clear');
  const kicker = document.querySelector('[data-search-kicker]');
  const title = document.querySelector('[data-search-title]');
  const count = document.querySelector('[data-search-count]');
  const stateRegion = document.querySelector('[data-search-state]');
  const suggestionsRegion = document.querySelector('[data-search-suggestions]');
  const resultsRegion = document.querySelector('[data-search-results]');
  const zeroState = document.querySelector('[data-search-zero]');
  const zeroQuery = document.querySelector('[data-zero-query]');
  const zeroCollections = document.querySelector('[data-search-zero-collections]');
  const fixtureStates = prototypeData.experienceFixtures?.search || {};
  const recentFixture = fixtureStates.recent?.recentQueries || [];
  const restoredDiscoveryContext = getPendingDiscoveryContext();
  let query = params.get('q') || '';
  let state = requestedState && allowedStates.includes(requestedState) ? requestedState : null;

  if (state && fixtureStates[state]?.query !== undefined) query = fixtureStates[state].query;
  if (!state) state = query.trim() ? (Object.values(searchPrototypeCatalog(query)).flat().length ? 'mixed-results' : 'zero-results') : (readRecentSearches().length ? 'recent' : 'initial');
  body.dataset.phaseState = state;
  if (params.get('view') === 'results') body.dataset.reviewView = 'results';
  if (input) input.value = query;
  if (clearButton) clearButton.hidden = !query;

  const resetRegions = () => {
    if (stateRegion) stateRegion.replaceChildren();
    if (suggestionsRegion) suggestionsRegion.replaceChildren();
    if (resultsRegion) resultsRegion.replaceChildren();
    if (zeroState) zeroState.hidden = true;
  };

  const setHeading = (nextKicker, nextTitle, nextCount = '') => {
    if (kicker) kicker.textContent = nextKicker;
    if (title) title.textContent = nextTitle;
    if (count) count.textContent = nextCount;
  };

  const renderSuggestionGroups = (activeQuery = '') => {
    const matches = activeQuery ? searchPrototypeCatalog(activeQuery) : null;
    const productSuggestions = matches?.products?.slice(0, 2) || [prototypeData.products['multi-variant']];
    const collectionSuggestions = matches?.collections?.slice(0, 2) || [prototypeData.collections['ban-an'], prototypeData.collections['qua-tang']];
    const serviceSuggestions = matches?.services?.slice(0, 2) || [{ label: 'Đặt riêng & Doanh nghiệp', route: 'custom.html?source=search', description: 'Khi nhu cầu chưa phải một sản phẩm có sẵn.' }];
    const productSuggestionMarkup = productSuggestions.length
      ? productSuggestions.map((product) => product.fixtureId === 'multi-variant'
        ? `<a href="product.html?fixture=${product.fixtureId}&variant=${product.defaultVariantId}&from=search" data-discovery-link data-fixture-id="${product.fixtureId}"><strong>${product.name.short}</strong><span>${getCatalogPriceLabel(product)}</span></a>`
        : `<div><strong>${product.name.short}</strong><span>${getCatalogPriceLabel(product)} · Trang chi tiết fixture này thuộc Phase 5.</span></div>`).join('')
      : '<p>Chưa có sản phẩm khớp.</p>';
    if (!suggestionsRegion) return;
    suggestionsRegion.innerHTML = `
      <section class="search-suggestion-group"><p class="eyebrow">Sản phẩm</p>${productSuggestionMarkup}</section>
      <section class="search-suggestion-group"><p class="eyebrow">Bộ sưu tập</p>${collectionSuggestions.length ? collectionSuggestions.map((collection) => `<a href="collection.html?collection=${collection.id}"><strong>${collection.label}</strong><span>${collection.shortDescription}</span></a>`).join('') : '<p>Chưa có bộ sưu tập khớp.</p>'}</section>
      <section class="search-suggestion-group search-suggestion-group--content"><p class="eyebrow">Nội dung nền</p><div><strong>${prototypeData.contentEntries['story-craft-limited'].title}</strong><span>Trang Câu chuyện thuộc Phase 8; nội dung hiện chỉ cho biết phạm vi đang chờ xác nhận.</span></div></section>
      <section class="search-suggestion-group"><p class="eyebrow">Đặt riêng</p>${serviceSuggestions.map((service) => `<a href="${service.route}"><strong>${service.label}</strong><span>${service.description}</span></a>`).join('')}</section>
    `;
    bindPhase4Grid(suggestionsRegion);
  };

  const renderRecent = () => {
    const recent = [...readRecentSearches(), ...(state === 'recent' ? recentFixture : [])].filter((value, index, values) => values.findIndex((item) => normalizeSearchValue(item) === normalizeSearchValue(value)) === index).slice(0, 3);
    renderSuggestionGroups();
    if (!recent.length || !suggestionsRegion) return;
    suggestionsRegion.insertAdjacentHTML('afterbegin', `<section class="search-recent"><div><p class="eyebrow">Tìm gần đây trên thiết bị này</p><button type="button" data-clear-recent>Xóa lịch sử mẫu</button></div><div>${recent.map((item) => `<a href="search.html?q=${encodeURIComponent(item)}">${item} <span aria-hidden="true">→</span></a>`).join('')}</div></section>`);
    suggestionsRegion.querySelector('[data-clear-recent]')?.addEventListener('click', () => {
      try { localStorage.removeItem(RECENT_SEARCH_STORAGE_KEY); } catch { /* no-op */ }
      state = 'initial';
      renderState();
      input?.focus();
    });
  };

  const renderLoading = (message) => {
    setHeading('Đang tìm trong bản mẫu', message, 'Kết quả chưa sẵn sàng');
    if (stateRegion) stateRegion.innerHTML = `<div class="status-banner status-banner--pending"><strong>Đang giữ từ khóa.</strong><span>${message} Bạn vẫn có thể sửa hoặc xóa nội dung tìm.</span></div>`;
    if (resultsRegion) resultsRegion.innerHTML = '<div class="search-loading-list" aria-hidden="true"><div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div></div>';
  };

  const renderResults = (resultSet, restored = false) => {
    const total = Object.values(resultSet).reduce((sum, group) => sum + group.length, 0);
    setHeading(restored ? 'Ngữ cảnh đã trở lại' : 'Kết quả hỗn hợp', `Kết quả cho “${query}”.`, `${total} kết quả · dữ liệu minh họa`);
    if (restored && stateRegion) stateRegion.innerHTML = '<div class="status-banner status-banner--success"><strong>Đã khôi phục kết quả.</strong><span>Từ khóa, nhóm kết quả và vị trí trước khi mở sản phẩm được giữ trong phiên này.</span></div>';
    if (!resultsRegion) return;
    const productMarkup = resultSet.products.length ? `<section class="search-result-group"><div class="search-result-group-heading"><p class="eyebrow">Sản phẩm · ${resultSet.products.length}</p><a href="collection.html?collection=ban-an">Xem bộ sưu tập →</a></div><div class="product-grid phase4-product-grid search-product-grid">${resultSet.products.map((product) => getProductCardMarkup(product, { source: 'search', idPrefix: 'result' })).join('')}</div></section>` : '';
    const collectionMarkup = resultSet.collections.length ? `<section class="search-result-group"><div class="search-result-group-heading"><p class="eyebrow">Bộ sưu tập · ${resultSet.collections.length}</p></div><div class="search-route-grid">${resultSet.collections.map((collection) => `<a href="collection.html?collection=${collection.id}"><span>Bộ sưu tập</span><strong>${collection.label}</strong><p>${collection.shortDescription}</p><i aria-hidden="true">↗</i></a>`).join('')}</div></section>` : '';
    const serviceMarkup = resultSet.services.length ? `<section class="search-result-group"><div class="search-result-group-heading"><p class="eyebrow">Đặt riêng · ${resultSet.services.length}</p></div><div class="search-route-grid">${resultSet.services.map((service) => `<a href="${service.route}"><span>Cần trao đổi trước</span><strong>${service.label}</strong><p>${service.description}</p><i aria-hidden="true">↗</i></a>`).join('')}</div></section>` : '';
    const contentMarkup = resultSet.content.length ? `<section class="search-result-group"><div class="search-result-group-heading"><p class="eyebrow">Nội dung nền · ${resultSet.content.length}</p></div><article class="search-content-pending"><span>Trang thuộc Phase 8</span><h3>${resultSet.content[0].title}</h3><p>${resultSet.content[0].limitedFallback}</p><a class="text-link" href="shop.html">Tiếp tục ở Cửa hàng →</a></article></section>` : '';
    resultsRegion.innerHTML = productMarkup + collectionMarkup + serviceMarkup + contentMarkup;
    resultsRegion.querySelectorAll('.phase4-product-grid').forEach((grid) => bindPhase4Grid(grid));
  };

  const renderZero = () => {
    setHeading('Không có kết quả', `Chưa tìm thấy “${query}”.`, '0 kết quả');
    if (zeroState) zeroState.hidden = false;
    if (zeroQuery) zeroQuery.textContent = query;
    if (zeroCollections) zeroCollections.innerHTML = (fixtureStates['zero-results']?.recoveryCollectionIds || ['ban-an', 'qua-tang']).map((collectionId) => `<a href="collection.html?collection=${collectionId}">${prototypeData.collections[collectionId].label} <span aria-hidden="true">→</span></a>`).join('');
  };

  const renderState = () => {
    resetRegions();
    body.dataset.phaseState = state;
    if (input) input.value = query;
    if (clearButton) clearButton.hidden = !query;
    if (state === 'initial' || state === 'recent' || state === 'cleared') {
      setHeading(state === 'recent' ? 'Quay lại một từ đã tìm' : 'Bắt đầu nhẹ nhàng', state === 'recent' ? 'Tìm kiếm gần đây.' : 'Gợi ý để khám phá.', 'Sản phẩm · Bộ sưu tập · Nội dung · Đặt riêng');
      renderRecent();
      if (state === 'cleared' && stateRegion) stateRegion.innerHTML = '<div class="status-banner status-banner--success"><strong>Đã xóa từ khóa.</strong><span>Gợi ý ban đầu và lịch sử mẫu vẫn ở đây.</span></div>';
      return;
    }
    if (state === 'empty-query') {
      setHeading('Chưa có từ khóa', 'Nhập một điều bạn muốn tìm.', 'Không gửi truy vấn trống');
      if (stateRegion) stateRegion.innerHTML = '<div class="status-banner status-banner--warning"><strong>Chưa thể tìm với ô trống.</strong><span>Bạn có thể nhập từ khóa hoặc chọn một gợi ý bên dưới.</span></div>';
      renderSuggestionGroups();
      return;
    }
    if (state === 'typing') {
      setHeading('Đang nhập', `Gợi ý cho “${query}”.`, 'Có thể gửi trực tiếp');
      if (stateRegion) stateRegion.innerHTML = '<div class="status-banner status-banner--pending"><strong>Gợi ý đang được chuẩn bị.</strong><span>Nút Tìm vẫn khả dụng; bạn không cần đợi hoặc chọn autocomplete.</span></div>';
      renderSuggestionGroups(query);
      return;
    }
    if (state === 'suggestions') {
      setHeading('Gợi ý theo loại', `Có thể đi tiếp từ “${query}”.`, '4 nhóm gợi ý');
      renderSuggestionGroups(query);
      return;
    }
    if (state === 'loading' || state === 'retrying') {
      renderLoading(state === 'retrying' ? `Đang thử lại “${query}”…` : `Đang tìm “${query}”…`);
      return;
    }
    if (state === 'service-error') {
      setHeading('Tìm kiếm tạm gián đoạn', `Từ khóa “${query}” vẫn được giữ.`, 'Chưa thể cập nhật kết quả');
      if (stateRegion) stateRegion.innerHTML = '<div class="status-banner status-banner--error"><strong>Chưa tải được kết quả.</strong><span>Không cần nhập lại từ khóa. <button type="button" data-search-retry>Thử lại</button> hoặc <a href="shop.html">về Cửa hàng</a>.</span></div>';
      stateRegion?.querySelector('[data-search-retry]')?.addEventListener('click', () => {
        state = 'retrying';
        renderState();
        window.setTimeout(() => {
          state = searchPrototypeCatalog(query).products.length || searchPrototypeCatalog(query).collections.length ? 'mixed-results' : 'zero-results';
          renderState();
          title?.focus();
        }, 420);
      });
      return;
    }
    if (state === 'zero-results') {
      renderZero();
      return;
    }
    let resultSet = searchPrototypeCatalog(query);
    if (state === 'mixed-results' && requestedState === 'mixed-results') {
      const fixture = fixtureStates['mixed-results'];
      resultSet = {
        products: fixture.productFixtureIds.map((id) => prototypeData.products[id]),
        collections: fixture.collectionIds.map((id) => prototypeData.collections[id]),
        content: fixture.contentIds.map((id) => prototypeData.contentEntries[id]),
        services: [
          { label: 'Quà tặng cá nhân đặt riêng', route: fixture.serviceRoutes[0], description: 'Chuẩn bị dịp tặng, số lượng, nội dung, thời điểm và nơi giao.' },
          { label: 'Quà tặng doanh nghiệp', route: fixture.serviceRoutes[1], description: 'Chuẩn bị loại quà, số lượng, logo hoặc nội dung, thời điểm và địa điểm giao.' }
        ]
      };
    }
    renderResults(resultSet, state === 'restored-context' || Boolean(restoredDiscoveryContext));
  };

  form?.addEventListener('submit', (event) => {
    const nextQuery = input?.value.trim() || '';
    if (!nextQuery) {
      event.preventDefault();
      query = '';
      state = 'empty-query';
      renderState();
      title?.focus();
      return;
    }
    saveRecentSearch(nextQuery);
  });

  input?.addEventListener('input', () => {
    query = input.value;
    if (clearButton) clearButton.hidden = !query;
    state = query.trim() ? 'suggestions' : 'initial';
    renderState();
  });

  clearButton?.addEventListener('click', () => {
    query = '';
    state = 'cleared';
    window.history.replaceState({}, '', 'search.html?state=cleared');
    renderState();
    input?.focus();
  });

  renderState();
  if (['mixed-results', 'restored-context'].includes(state) && query) saveRecentSearch(query);
  consumeDiscoveryContext(restoredDiscoveryContext);
};

const initDiscoveryReturn = () => {
  if (pageId !== 'product') return;
  let context = null;
  try { context = JSON.parse(sessionStorage.getItem(DISCOVERY_STORAGE_KEY) || 'null'); } catch { context = null; }
  if (!context?.sourceUrl || !['collection', 'search', 'shop'].includes(context.sourcePage)) return;
  const breadcrumbLinks = document.querySelectorAll('.breadcrumbs a');
  const sourceLink = breadcrumbLinks[breadcrumbLinks.length - 1];
  if (sourceLink) {
    sourceLink.href = context.sourceUrl;
    sourceLink.textContent = context.sourceLabel;
  }
  const breadcrumbs = document.querySelector('.breadcrumbs');
  if (breadcrumbs) {
    const returnNote = document.createElement('div');
    returnNote.className = 'discovery-return section-shell';
    returnNote.innerHTML = `<a href="${context.sourceUrl}">← Quay lại ${context.sourceLabel}</a><span>Bộ lọc, thứ tự và vị trí được giữ trong phiên này.</span>`;
    breadcrumbs.insertAdjacentElement('afterend', returnNote);
  }
};

const cloneFixture = (value) => JSON.parse(JSON.stringify(value));

const mergeFixturePatch = (base, patch) => {
  if (!patch || typeof patch !== 'object' || Array.isArray(patch)) return patch === undefined ? base : patch;
  const next = { ...(base || {}) };
  Object.entries(patch).forEach(([key, value]) => {
    next[key] = value && typeof value === 'object' && !Array.isArray(value)
      ? mergeFixturePatch(next[key], value)
      : value;
  });
  return next;
};

const phase5ProductStates = new Set(prototypeData.stateFixtures?.product || []);
const productAvailability = (product, variant) => {
  const eligibility = variant?.retailEligibility || product?.retailEligibility;
  const inventoryState = variant?.inventory?.state;
  if (eligibility === 'enquiry-only' || inventoryState === 'not-retail') {
    return { label: 'Chỉ trao đổi đặt riêng', tone: 'pending', retail: false };
  }
  if (eligibility === 'not-approved') {
    return { label: 'Chưa được duyệt để bán lẻ', tone: 'warning', retail: false };
  }
  if (eligibility === 'sold-out' || inventoryState === 'sold-out') {
    return { label: 'Tạm hết trong fixture mẫu', tone: 'warning', retail: false };
  }
  if (eligibility === 'unavailable' || inventoryState === 'unavailable-combination') {
    return { label: 'Tổ hợp không khả dụng', tone: 'error', retail: false };
  }
  if (eligibility === 'retail-manual-delivery') {
    return { label: 'Có thể chọn · phí giao xác nhận riêng', tone: 'pending', retail: inventoryState === 'in-stock' };
  }
  return { label: 'Có thể chọn trong bản mẫu', tone: 'success', retail: inventoryState === 'in-stock' };
};

const phase5MediaRole = (role) => {
  if (role.includes('primary')) return 'Toàn cảnh';
  if (role.includes('detail')) return 'Bề mặt';
  if (role.includes('scale')) return 'Tỷ lệ';
  if (role.includes('context')) return 'Bối cảnh';
  if (role.includes('fallback')) return 'Phiên bản';
  return 'Hình ảnh';
};

const resolveProductView = () => {
  const query = new URLSearchParams(window.location.search);
  const requestedState = phase5ProductStates.has(query.get('state')) ? query.get('state') : 'default';
  const overrides = prototypeData.commerceFixtures?.productOverrides || {};
  const override = overrides[requestedState] || overrides.default;
  const requestedFixtureId = query.get('fixture');
  const baseFixtureId = prototypeData.products?.[requestedFixtureId] ? requestedFixtureId : override.baseFixtureId;
  let product = cloneFixture(prototypeData.products?.[baseFixtureId] || prototypeData.products?.['multi-variant']);
  if (baseFixtureId === override.baseFixtureId && override.productPatch) {
    product = mergeFixturePatch(product, override.productPatch);
  }
  const requestedVariantId = query.get('variant');
  const overrideVariantId = baseFixtureId === override.baseFixtureId ? override.variantId : product.defaultVariantId;
  const selectedVariantId = product.variants.some((variant) => variant.id === requestedVariantId)
    ? requestedVariantId
    : overrideVariantId;
  let variant = cloneFixture(product.variants.find((item) => item.id === selectedVariantId) || product.variants[0]);
  if (baseFixtureId === override.baseFixtureId && variant.id === override.variantId && override.variantPatch) {
    variant = mergeFixturePatch(variant, override.variantPatch);
  }
  product.variants = product.variants.map((item) => item.id === variant.id ? cloneFixture(variant) : item);
  const mediaPatch = baseFixtureId === override.baseFixtureId ? override.mediaPatch : null;
  return { query, requestedState, override, product, variant, mediaPatch };
};

const buildProductMedia = (product, variant, mediaPatch) => {
  const primaryAssetId = mediaPatch?.primaryAssetId || variant.primaryAssetId;
  const primaryMedia = product.media.find((item) => item.assetId === variant.primaryAssetId)
    || product.media.find((item) => item.status === 'prototype-only')
    || product.media[0];
  const media = [{
    assetId: primaryAssetId,
    role: primaryMedia?.role || 'prototype-primary',
    altIntent: primaryMedia?.altIntent || `Hình minh họa cho ${product.name.short}.`,
    status: mediaPatch?.state || getAsset(primaryAssetId)?.rightsStatus || primaryMedia?.status,
    fallbackText: mediaPatch?.fallbackText || 'Ảnh sản phẩm đang được cập nhật.'
  }];
  product.media.forEach((item) => {
    if (!media.some((entry) => entry.assetId === item.assetId)) media.push({ ...item });
  });
  return media.slice(0, 4);
};

const productMediaPlaceholder = (item, index) => `
  <div class="phase5-media-placeholder" data-media-placeholder>
    <span aria-hidden="true">H</span>
    <strong>${phase5MediaRole(item.role)} đang được cập nhật</strong>
    <small>${item.fallbackText || item.altIntent || 'Chưa có hình ảnh được phép công bố.'}</small>
    ${index === 0 && item.status === 'failed' ? '<button type="button" data-media-retry>Thử tải lại</button>' : ''}
  </div>
`;

const productMainMediaMarkup = (item, index = 0) => {
  const path = getAssetPath(item.assetId);
  if (!path) return productMediaPlaceholder(item, index);
  return `
    <button class="phase5-main-media-button" type="button" data-gallery-open aria-label="Mở ảnh lớn: ${item.altIntent}">
      <img class="is-loading" src="${path}" alt="${item.altIntent}" width="1000" height="1000" data-product-main-image />
      <span>Mở ảnh lớn ↗</span>
    </button>
  `;
};

const phase5ProductStateBanner = (view) => {
  const { requestedState, override, product, variant } = view;
  if (requestedState === 'price-changed') {
    return `<div class="status-banner status-banner--warning phase5-product-banner"><strong>Giá fixture đã thay đổi.</strong><span>Giá trước ${formatVnd(override.previousPriceVnd)}; giá hiện tại ${formatVnd(variant.priceVnd)}. Giỏ sẽ yêu cầu xác nhận trước khi tiếp tục.</span></div>`;
  }
  if (requestedState === 'media-failure') {
    return '<div class="status-banner status-banner--warning phase5-product-banner"><strong>Ảnh chính chưa tải được.</strong><span>Thông tin, lựa chọn và hành động vẫn còn; hình thay thế không được dùng để suy diễn sản phẩm.</span></div>';
  }
  if (requestedState === 'made-to-order-review-only') {
    return `<div class="status-banner status-banner--warning phase5-product-banner"><strong>Trạng thái chỉ dành cho review.</strong><span>${override.customerText}</span></div>`;
  }
  if (requestedState === 'invalid-combination' || variant.inventory?.state === 'unavailable-combination') {
    return `<div class="status-banner status-banner--error phase5-product-banner"><strong>Tổ hợp đã chọn không khả dụng.</strong><span>${variant.unavailableReason || 'Chọn một phiên bản khả dụng hoặc mở Đặt riêng.'}</span></div>`;
  }
  if (requestedState === 'sold-out' || variant.inventory?.state === 'sold-out') {
    return `<div class="status-banner status-banner--warning phase5-product-banner"><strong>Không thể thêm lựa chọn này.</strong><span>${override.customerText || 'Xem món liên quan hoặc trao đổi một yêu cầu tương tự.'}</span></div>`;
  }
  if (product.retailEligibility === 'enquiry-only') {
    return '<div class="status-banner status-banner--pending phase5-product-banner"><strong>Đây là khả năng đặt riêng, không phải SKU bán lẻ.</strong><span>Gửi ngữ cảnh không tạo đơn hàng hoặc báo giá.</span></div>';
  }
  return '<div class="status-banner status-banner--pending phase5-product-banner"><strong>Dữ liệu sản phẩm đang minh họa.</strong><span>Giá, SKU, tồn kho, mô tả và điều kiện bán cần HEDY phê duyệt trước khi xuất bản.</span></div>';
};

const phase5VariantMarkup = (product, selectedVariant) => {
  if (product.variants.length === 1) {
    return `
      <div class="phase5-single-variant">
        <span>Phiên bản</span>
        <strong>${selectedVariant.label}</strong>
      </div>
    `;
  }
  return `
    <fieldset class="phase5-variant-fieldset">
      <legend>Chọn phiên bản <span>Đã chọn: ${selectedVariant.label}</span></legend>
      <div class="phase5-variant-grid">
        ${product.variants.map((variant) => {
          const availability = productAvailability(product, variant);
          const isSelected = variant.id === selectedVariant.id;
          const disabled = !availability.retail && variant.inventory?.state === 'unavailable-combination';
          return `
            <button class="phase5-variant-option${isSelected ? ' is-active' : ''}" type="button" data-product-variant="${variant.id}" aria-pressed="${isSelected}" ${disabled ? 'disabled' : ''}>
              <span>${variant.label}</span>
              <small>${Number.isInteger(variant.priceVnd) ? formatVnd(variant.priceVnd) : 'Báo giá riêng'} · ${availability.label}</small>
            </button>
          `;
        }).join('')}
      </div>
      ${product.variants.some((variant) => variant.inventory?.state === 'unavailable-combination')
        ? '<p class="disabled-reason">“Đất · Bộ bốn” không có trong mẻ fixture; nút được vô hiệu hóa. Chọn Bộ đôi, men Sương hoặc mở Đặt riêng.</p>'
        : ''}
    </fieldset>
  `;
};

const phase5ProductActionMarkup = (product, variant) => {
  const availability = productAvailability(product, variant);
  if (availability.retail) {
    return `
      <div class="phase5-purchase-actions" data-main-purchase-action>
        <div class="quantity-picker" aria-label="Số lượng">
          <button type="button" data-product-quantity-minus aria-label="Giảm số lượng">−</button>
          <output data-product-quantity aria-live="polite">1</output>
          <button type="button" data-product-quantity-plus aria-label="Tăng số lượng">+</button>
        </div>
        <button class="button button--dark phase5-product-add" type="button" data-phase5-add>Thêm đúng phiên bản <span aria-hidden="true">→</span></button>
      </div>
      <p class="phase5-quantity-note">Tối đa ${variant.inventory.sellableQuantity} trong fixture này. Tồn kho chỉ được giữ sau khi một đơn thật được xác nhận.</p>
    `;
  }
  return `
    <div class="phase5-consultation-actions" data-main-purchase-action>
      <button class="button button--dark contact-trigger" type="button" data-contact-state="contextual" data-contact-source="product" data-contact-fixture="${product.fixtureId}" data-contact-label="${product.name.short} · ${variant.label}">Chọn kênh trao đổi <span aria-hidden="true">↗</span></button>
      <a class="button button--outline" href="${product.related.serviceRoute}&amp;fixture=${product.fixtureId}&amp;variant=${variant.id}">Xem hành trình Đặt riêng</a>
    </div>
    <p class="phase5-quantity-note">Lựa chọn hiện tại và những món đã có trong giỏ không bị xóa khi bạn mở Đặt riêng.</p>
  `;
};

const phase5FactMarkup = (label, value) => `
  <div><dt>${label}</dt><dd>${value}</dd></div>
`;

const phase5RelatedCard = (product) => {
  const variant = getVariant(product.fixtureId, product.defaultVariantId);
  const availability = productAvailability(product, variant);
  const imagePath = getPrimaryAsset(product, variant);
  return `
    <article class="phase5-related-card">
      <a class="phase5-related-media" href="product.html?fixture=${product.fixtureId}&amp;variant=${variant.id}">
        <img src="${imagePath}" alt="Hình minh họa cho ${product.name.short}" width="640" height="640" loading="lazy" />
      </a>
      <div>
        <span>${availability.label}</span>
        <h3><a href="product.html?fixture=${product.fixtureId}&amp;variant=${variant.id}">${product.name.short}</a></h3>
        <p>${Number.isInteger(variant.priceVnd) ? formatVnd(variant.priceVnd) : 'Báo giá riêng sau trao đổi'} · minh họa</p>
      </div>
    </article>
  `;
};

const initPhase5Product = () => {
  const root = document.querySelector('[data-phase5-product]');
  if (!root) return;
  let view = resolveProductView();
  let quantity = 1;
  let activeMediaIndex = 0;
  let galleryTrigger = null;

  const render = (focusVariantId = null) => {
    view = resolveProductView();
    const { product, variant, mediaPatch } = view;
    const availability = productAvailability(product, variant);
    const media = buildProductMedia(product, variant, mediaPatch);
    const price = Number.isInteger(variant.priceVnd)
      ? formatVnd(variant.priceVnd)
      : product.catalogPrice.customerText || 'Báo giá riêng sau trao đổi';
    const relatedProducts = (product.related?.productFixtureIds || []).map((id) => getProduct(id)).filter(Boolean);
    const manualDelivery = product.facts?.packedShippingProfile?.deliveryTreatment === 'manual-quote';
    document.title = `${product.name.short} — HEDY ATELIER`;
    root.innerHTML = `
      <nav class="breadcrumbs section-shell" aria-label="Đường dẫn">
        <a href="index.html">Trang chủ</a><span>/</span><a href="shop.html">Cửa hàng</a><span>/</span><span aria-current="page">${product.name.short}</span>
      </nav>
      <div class="phase5-product-return" data-phase5-return-anchor></div>
      <section class="phase5-product-detail" aria-labelledby="phase5-product-title">
        <div class="phase5-product-gallery" data-product-gallery>
          <div class="phase5-product-main" data-product-main>
            ${productMainMediaMarkup(media[activeMediaIndex] || media[0], activeMediaIndex)}
            <span class="image-counter">${String(activeMediaIndex + 1).padStart(2, '0')} / ${String(media.length).padStart(2, '0')}</span>
          </div>
          <div class="phase5-thumbnails" role="group" aria-label="Hình ảnh sản phẩm">
            ${media.map((item, index) => {
              const path = getAssetPath(item.assetId);
              return `
                <button class="phase5-gallery-thumb${index === activeMediaIndex ? ' is-active' : ''}" type="button" data-product-media-index="${index}" aria-pressed="${index === activeMediaIndex}" aria-label="${phase5MediaRole(item.role)}: ${item.altIntent}">
                  ${path ? `<img src="${path}" alt="" width="160" height="160" />` : '<span aria-hidden="true">H</span>'}
                  <small>${phase5MediaRole(item.role)}</small>
                </button>
              `;
            }).join('')}
          </div>
          <p class="phase5-media-caption" data-media-caption>${media[activeMediaIndex]?.altIntent || ''}</p>
        </div>
        <div class="phase5-product-purchase">
          <div class="phase5-product-heading">
            <p class="eyebrow">${product.productType} · ${product.truthStatus === 'illustrative' ? 'fixture minh họa' : 'nội dung giới hạn'}</p>
            <h1 id="phase5-product-title">${product.name.short}</h1>
            <p class="phase5-product-long-name">${product.name.long}</p>
            <div class="phase5-product-price"><strong>${price}</strong><span>${Number.isInteger(variant.priceVnd) ? 'Giá fixture · chưa phê duyệt' : 'Không phải giá bán lẻ'}</span></div>
            <p class="phase5-availability" data-tone="${availability.tone}"><i aria-hidden="true"></i><strong>${availability.label}</strong></p>
            <p class="phase5-product-lede">${product.description.short}</p>
          </div>
          ${phase5ProductStateBanner(view)}
          <form class="phase5-purchase-form" aria-label="Lựa chọn sản phẩm">
            ${phase5VariantMarkup(product, variant)}
            <div class="phase5-selection-facts" aria-live="polite" aria-atomic="true">
              <span>SKU <strong>${variant.sku || 'Không áp dụng'}</strong></span>
              <span>Tồn kho <strong>${variant.inventory?.state === 'in-stock' ? `${variant.inventory.sellableQuantity} · minh họa` : availability.label}</strong></span>
              <span>Thời gian <strong>${variant.leadTime?.customerText || 'Xác nhận sau trao đổi'}</strong></span>
            </div>
            ${phase5ProductActionMarkup(product, variant)}
            <p class="inline-confirmation add-inline-confirmation phase5-add-confirmation" role="status" aria-live="polite"></p>
          </form>
          <aside class="phase5-custom-escalation">
            <p class="eyebrow">Khác với mua bán lẻ</p>
            <h2>Cần dấu riêng, số lượng hoặc phương án khác?</h2>
            <p>${product.customEscalation.customerText}</p>
            <a href="${product.related.serviceRoute}&amp;fixture=${product.fixtureId}&amp;variant=${variant.id}">Chuẩn bị yêu cầu Đặt riêng →</a>
          </aside>
          <div class="phase5-product-accordions">
            <details open><summary>Mô tả &amp; kích thước <span aria-hidden="true">+</span></summary><div><p>${product.description.long}</p><p>${product.facts.dimensions.customerText}</p></div></details>
            <details><summary>Chất liệu, hoàn thiện &amp; giới hạn sử dụng <span aria-hidden="true">+</span></summary><div><p><strong>Chất liệu:</strong> ${product.facts.material}</p><p><strong>Hoàn thiện:</strong> ${product.facts.finish}</p><p><strong>Giới hạn:</strong> ${product.facts.useRestrictions}</p></div></details>
            <details><summary>Chăm sóc &amp; biến thiên <span aria-hidden="true">+</span></summary><div><p>${product.facts.care}</p><p>${product.facts.handmadeVariation}</p></div></details>
            <details><summary>Đóng gói, giao hàng &amp; chính sách <span aria-hidden="true">+</span></summary><div><p>${product.facts.packaging}</p><p>${product.facts.policySummary}</p><p>${manualDelivery ? 'Fixture lớn/dễ vỡ này chuyển sang yêu cầu xác nhận phí giao riêng; phí và tổng cuối chưa được tính.' : 'Phí giao hàng được tính tại Thanh toán sau khi có địa chỉ và hồ sơ kiện hàng; không mặc định là miễn phí.'}</p><div class="phase5-policy-links">${(product.policyLinks || []).map((href, index) => `<a href="${href}">${index === 0 ? 'Giao hàng & chính sách' : index === 1 ? 'Thanh toán / đổi trả' : 'Thông tin liên quan'} →</a>`).join('')}</div></div></details>
          </div>
          <dl class="phase5-product-facts">
            ${phase5FactMarkup('Fixture', product.fixtureId)}
            ${phase5FactMarkup('Phiên bản', variant.label)}
            ${phase5FactMarkup('Xử lý giao', manualDelivery ? 'Báo phí thủ công' : 'Tính sau khi có địa chỉ')}
          </dl>
        </div>
      </section>
      <section class="phase5-related section-shell" aria-labelledby="phase5-related-title">
        <div class="section-heading"><div><p class="eyebrow">Đi tiếp mà không mất ngữ cảnh</p><h2 id="phase5-related-title">Một lựa chọn bán lẻ khác.</h2></div><a class="text-link" href="shop.html">Trở về Cửa hàng →</a></div>
        <div class="phase5-related-grid">${relatedProducts.map(phase5RelatedCard).join('')}</div>
      </section>
      <dialog class="phase5-lightbox" data-product-lightbox aria-labelledby="phase5-lightbox-title">
        <div class="phase5-lightbox-head"><h2 id="phase5-lightbox-title">Ảnh sản phẩm</h2><button type="button" data-lightbox-close aria-label="Đóng ảnh lớn">×</button></div>
        <div data-lightbox-media></div>
        <p data-lightbox-caption></p>
      </dialog>
      ${availability.retail ? `<div class="phase5-mobile-purchase-bar" data-mobile-product-bar aria-hidden="true"><div><small>${product.name.short} · ${variant.label}</small><strong>${price}</strong></div><button type="button" data-mobile-phase5-add>Thêm vào giỏ</button></div>` : ''}
    `;

    const main = root.querySelector('[data-product-main]');
    const caption = root.querySelector('[data-media-caption]');
    const updateMedia = (index, moveFocus = false) => {
      activeMediaIndex = index;
      const item = media[index];
      main.innerHTML = `${productMainMediaMarkup(item, index)}<span class="image-counter">${String(index + 1).padStart(2, '0')} / ${String(media.length).padStart(2, '0')}</span>`;
      if (caption) caption.textContent = item.altIntent;
      root.querySelectorAll('[data-product-media-index]').forEach((button) => {
        const active = Number(button.dataset.productMediaIndex) === index;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      bindMainMedia();
      if (moveFocus) root.querySelector(`[data-product-media-index="${index}"]`)?.focus();
    };

    const lightbox = root.querySelector('[data-product-lightbox]');
    const openLightbox = () => {
      const item = media[activeMediaIndex];
      const path = getAssetPath(item.assetId);
      if (!path || !lightbox) return;
      galleryTrigger = document.activeElement;
      lightbox.querySelector('[data-lightbox-media]').innerHTML = `<img src="${path}" alt="${item.altIntent}" width="1200" height="1200" />`;
      lightbox.querySelector('[data-lightbox-caption]').textContent = item.altIntent;
      lightbox.showModal();
      lightbox.querySelector('[data-lightbox-close]')?.focus();
    };
    const bindMainMedia = () => {
      const image = main.querySelector('[data-product-main-image]');
      image?.addEventListener('load', () => image.classList.remove('is-loading'));
      if (image?.complete && image.naturalWidth > 0) image.classList.remove('is-loading');
      image?.addEventListener('error', () => {
        main.innerHTML = `${productMediaPlaceholder({ ...media[activeMediaIndex], status: 'failed' }, activeMediaIndex)}<span class="image-counter">${String(activeMediaIndex + 1).padStart(2, '0')} / ${String(media.length).padStart(2, '0')}</span>`;
        bindMainMedia();
      });
      main.querySelector('[data-gallery-open]')?.addEventListener('click', openLightbox);
      main.querySelector('[data-media-retry]')?.addEventListener('click', () => {
        const item = media[activeMediaIndex];
        if (getAssetPath(item.assetId)) updateMedia(activeMediaIndex);
        else announceCart('Ảnh vẫn chưa được cấu hình; thông tin sản phẩm được giữ nguyên.');
      });
    };
    bindMainMedia();
    root.querySelectorAll('[data-product-media-index]').forEach((button) => {
      button.addEventListener('click', () => updateMedia(Number(button.dataset.productMediaIndex)));
      button.addEventListener('keydown', (event) => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const current = Number(button.dataset.productMediaIndex);
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? media.length - 1 : event.key === 'ArrowRight' ? (current + 1) % media.length : (current - 1 + media.length) % media.length;
        updateMedia(next, true);
      });
    });
    lightbox?.querySelector('[data-lightbox-close]')?.addEventListener('click', () => lightbox.close());
    lightbox?.addEventListener('click', (event) => {
      if (event.target === lightbox) lightbox.close();
    });
    lightbox?.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        lightbox.close();
      }
    });
    lightbox?.addEventListener('close', () => galleryTrigger?.focus());

    root.querySelectorAll('[data-product-variant]').forEach((button) => {
      button.addEventListener('click', () => {
        const nextQuery = new URLSearchParams(window.location.search);
        nextQuery.set('fixture', product.fixtureId);
        nextQuery.set('variant', button.dataset.productVariant);
        nextQuery.delete('state');
        window.history.replaceState({}, '', `product.html?${nextQuery.toString()}`);
        quantity = 1;
        activeMediaIndex = 0;
        render(button.dataset.productVariant);
      });
    });
    if (focusVariantId) root.querySelector(`[data-product-variant="${focusVariantId}"]`)?.focus();

    const quantityOutput = root.querySelector('[data-product-quantity]');
    const setProductQuantity = (next) => {
      const max = variant.inventory?.sellableQuantity || 1;
      if (next > max) {
        showToast(`Phiên bản này giới hạn ${max} trong fixture mẫu.`, '!');
        return;
      }
      quantity = Math.max(1, next);
      if (quantityOutput) quantityOutput.textContent = String(quantity);
    };
    root.querySelector('[data-product-quantity-minus]')?.addEventListener('click', () => setProductQuantity(quantity - 1));
    root.querySelector('[data-product-quantity-plus]')?.addEventListener('click', () => setProductQuantity(quantity + 1));
    const handleAdd = (button) => {
      button.disabled = true;
      const added = addCartRequest({ fixtureId: product.fixtureId, variantId: variant.id, quantity, variant }, button);
      button.disabled = false;
      if (added) {
        const confirmation = root.querySelector('.phase5-add-confirmation');
        if (confirmation) confirmation.innerHTML = `${product.name.short} · ${variant.label} × ${quantity} đã ở trong giỏ. <a href="cart.html">Xem và sửa giỏ →</a>`;
      }
    };
    root.querySelector('[data-phase5-add]')?.addEventListener('click', (event) => handleAdd(event.currentTarget));
    root.querySelector('[data-mobile-phase5-add]')?.addEventListener('click', (event) => handleAdd(event.currentTarget));
    root.querySelectorAll('.contact-trigger').forEach(bindContactTrigger);

    const mobileBar = root.querySelector('[data-mobile-product-bar]');
    const mainAction = root.querySelector('[data-main-purchase-action]');
    if (mobileBar && mainAction && 'IntersectionObserver' in window) {
      const barObserver = new IntersectionObserver(([entry]) => {
        const show = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        mobileBar.classList.toggle('is-visible', show);
        mobileBar.setAttribute('aria-hidden', String(!show));
      });
      barObserver.observe(mainAction);
    }
  };

  render();
};

const phase5CartStateCopy = {
  updating: ['Đang cập nhật giỏ.', 'Các điều khiển vẫn hiển thị; tạm tính chưa được dùng để tiếp tục.', 'pending'],
  'removal-undo': ['Đã xóa một dòng.', 'Bạn có thể hoàn tác mà không phải tìm lại đúng phiên bản.', 'warning'],
  'price-change': ['Giá fixture đã thay đổi.', 'Xem giá trước và giá hiện tại trên đúng dòng, rồi xác nhận trước khi tiếp tục.', 'warning'],
  'stock-change': ['Số lượng vượt tồn kho fixture.', 'Giảm về mức khả dụng hoặc xóa dòng; lựa chọn khác không bị mất.', 'error'],
  'stale-totals': ['Tạm tính không còn hiện hành.', 'Các dòng cuối cùng được giữ; cần tính lại trước khi tiếp tục.', 'warning'],
  'recalculation-failure': ['Chưa cập nhật được tạm tính.', 'Các dòng cuối cùng được giữ. Thử lại; chưa thể tiếp tục với một tổng không chắc chắn.', 'error']
};

const cloneCartLines = (lines) => cloneFixture(lines || []);

const initPhase5Cart = () => {
  const root = document.querySelector('[data-phase5-cart]');
  if (!root) return;
  const query = new URLSearchParams(window.location.search);
  const fixtures = prototypeData.commerceFixtures;
  const requestedState = Object.hasOwn(fixtures.cartStates, query.get('state')) ? query.get('state') : null;
  const deterministic = Boolean(requestedState);
  let displayState = requestedState || (cartState.lines.length ? 'normal' : 'empty');
  const stateFixture = requestedState ? fixtures.cartStates[requestedState] : null;
  const scenarioLineSets = {
    'standard-cod': 'standardCod',
    'standard-transfer': 'standardTransfer',
    'manual-delivery': 'manualDelivery'
  };
  const reviewLineSet = requestedState === 'normal' && scenarioLineSets[query.get('scenario')]
    ? scenarioLineSets[query.get('scenario')]
    : stateFixture?.lineSet;
  let workingLines = deterministic
    ? cloneCartLines(reviewLineSet ? fixtures.cartLines[reviewLineSet] : [])
    : cloneCartLines(cartState.lines);
  let discoveredPriceChange = false;
  workingLines.forEach((line) => {
    const currentVariant = getVariant(line.productFixtureId, line.variantId);
    if (!Number.isInteger(currentVariant?.priceVnd) || currentVariant.priceVnd === line.unitPriceVnd) return;
    line.previousUnitPriceVnd = line.unitPriceVnd;
    line.unitPriceVnd = currentVariant.priceVnd;
    line.lineStatus = 'price-changed';
    discoveredPriceChange = true;
  });
  if (!requestedState && discoveredPriceChange) displayState = 'price-change';
  let removedLine = null;
  let removedIndex = -1;
  let updateTimer = null;
  if (displayState === 'removal-undo' && workingLines.length) {
    removedIndex = 0;
    removedLine = workingLines.shift();
  }

  const persistWorkingCart = () => {
    if (deterministic) return;
    cartState.lines = workingLines.map(sanitizeCartLine).filter(Boolean);
    saveCart();
    renderCart();
  };

  const lineValidity = (line) => {
    const product = getProduct(line.productFixtureId);
    const variant = getVariant(line.productFixtureId, line.variantId);
    if (!product || !variant) return { valid: false, reason: 'Dòng không còn trong catalog fixture.' };
    if (line.lineStatus === 'price-changed') return { valid: false, reason: 'Giá fixture thay đổi; cần xác nhận.' };
    if (line.quantity > variant.inventory.sellableQuantity) return { valid: false, reason: `Chỉ còn ${variant.inventory.sellableQuantity} trong fixture.` };
    const availability = productAvailability(product, variant);
    if (!availability.retail) return { valid: false, reason: availability.label };
    return { valid: true, reason: '' };
  };

  const getCartScenario = () => workingLines.some((line) => getProduct(line.productFixtureId)?.facts?.packedShippingProfile?.deliveryTreatment === 'manual-quote')
    ? 'manual-delivery'
    : query.get('scenario') || 'standard-cod';

  const render = (focusSelector = null) => {
    window.clearTimeout(updateTimer);
    const subtotal = workingLines.reduce((total, line) => total + line.unitPriceVnd * line.quantity, 0);
    const validations = workingLines.map(lineValidity);
    const totalsCurrent = !['updating', 'stale-totals', 'recalculation-failure'].includes(displayState);
    const checkoutReady = workingLines.length > 0 && totalsCurrent && validations.every((result) => result.valid);
    const scenario = getCartScenario();
    const manualDelivery = scenario === 'manual-delivery';
    const stateCopy = phase5CartStateCopy[displayState];
    root.innerHTML = `
      <nav class="breadcrumbs section-shell" aria-label="Đường dẫn"><a href="index.html">Trang chủ</a><span>/</span><a href="shop.html">Cửa hàng</a><span>/</span><span aria-current="page">Giỏ hàng</span></nav>
      <header class="phase5-cart-hero section-shell">
        <div><p class="eyebrow">Bước 01 · Kiểm tra lựa chọn</p><h1>Giỏ hàng,<br /><em>rõ từng món.</em></h1></div>
        <div><p>${deterministic ? 'URL review đang dùng một bộ dòng tách khỏi giỏ đã lưu trên thiết bị.' : 'Các dòng hợp lệ được lưu trên thiết bị này; không có thông tin người nhận hoặc thanh toán trong giỏ.'}</p><a href="shop.html">Tiếp tục chọn sản phẩm →</a></div>
      </header>
      <section class="phase5-cart-layout section-shell" aria-labelledby="phase5-cart-lines-title">
        <div class="phase5-cart-lines-panel">
          <div class="phase5-cart-panel-head"><div><p class="eyebrow">Lựa chọn hiện tại</p><h2 id="phase5-cart-lines-title">${workingLines.length} dòng · ${workingLines.reduce((count, line) => count + line.quantity, 0)} món</h2></div><span>${deterministic ? 'Trạng thái review' : 'Đã lưu cục bộ'}</span></div>
          <div class="phase5-cart-live" role="status" aria-live="polite">
            ${stateCopy ? `<div class="status-banner status-banner--${stateCopy[2]}"><strong>${stateCopy[0]}</strong><span>${stateCopy[1]}</span>${displayState === 'removal-undo' && removedLine ? '<button type="button" data-cart-undo>Hoàn tác</button>' : ''}${['stale-totals', 'recalculation-failure'].includes(displayState) ? '<button type="button" data-cart-retry>Tính lại</button>' : ''}</div>` : ''}
          </div>
          ${workingLines.length ? `
            <div class="phase5-cart-lines">
              ${workingLines.map((line, index) => {
                const product = getProduct(line.productFixtureId);
                const variant = getVariant(line.productFixtureId, line.variantId);
                const validity = validations[index];
                const previousPrice = line.previousUnitPriceVnd;
                return `
                  <article class="phase5-cart-line${validity.valid ? '' : ' has-warning'}" data-full-cart-line="${index}">
                    <a class="phase5-cart-line-media" href="product.html?fixture=${product.fixtureId}&amp;variant=${variant.id}">
                      <img src="${getPrimaryAsset(product, variant)}" alt="Hình minh họa cho ${product.name.short}" width="240" height="240" />
                    </a>
                    <div class="phase5-cart-line-copy">
                      <p>${product.productType} · dữ liệu minh họa</p>
                      <h3><a href="product.html?fixture=${product.fixtureId}&amp;variant=${variant.id}">${product.name.short}</a></h3>
                      <dl><div><dt>Phiên bản</dt><dd>${variant.label}</dd></div><div><dt>SKU</dt><dd>${variant.sku || 'Không áp dụng'}</dd></div></dl>
                      ${!validity.valid ? `<p class="phase5-line-warning"><strong>Cần xử lý:</strong> ${validity.reason}</p>` : ''}
                      ${previousPrice ? `<p class="phase5-price-change">Giá trước <del>${formatVnd(previousPrice)}</del> · hiện tại <strong>${formatVnd(line.unitPriceVnd)}</strong></p>` : ''}
                      <div class="phase5-cart-line-links"><a href="product.html?fixture=${product.fixtureId}&amp;variant=${variant.id}">Sửa phiên bản</a><button type="button" data-full-cart-remove="${index}">Xóa</button></div>
                    </div>
                    <div class="phase5-cart-line-totals">
                      <span>Đơn giá <strong>${formatVnd(line.unitPriceVnd)}</strong></span>
                      <div class="quantity-picker" aria-label="Số lượng ${product.name.short}">
                        <button type="button" data-full-cart-minus="${index}" aria-label="Giảm số lượng ${product.name.short}" ${displayState === 'updating' ? 'disabled' : ''}>−</button>
                        <output aria-live="polite">${line.quantity}</output>
                        <button type="button" data-full-cart-plus="${index}" aria-label="Tăng số lượng ${product.name.short}" ${displayState === 'updating' || line.quantity >= variant.inventory.sellableQuantity ? 'disabled' : ''}>+</button>
                      </div>
                      <span>Thành tiền <strong>${formatVnd(line.unitPriceVnd * line.quantity)}</strong></span>
                      ${line.lineStatus === 'price-changed' ? `<button class="phase5-line-accept" type="button" data-cart-accept-price="${index}">Xác nhận giá hiện tại</button>` : ''}
                    </div>
                  </article>
                `;
              }).join('')}
            </div>
          ` : `
            <div class="phase5-cart-empty">
              <span aria-hidden="true">H</span>
              <h2>Giỏ đang để trống.</h2>
              <p>Chọn một sản phẩm bán lẻ, trở về Trang chủ hoặc chuẩn bị một yêu cầu Đặt riêng.</p>
              <div class="empty-state-actions"><a class="button button--dark" href="shop.html">Đến Cửa hàng</a><a class="button button--outline" href="index.html">Trang chủ</a><a class="text-link" href="custom.html">Đặt riêng &amp; Doanh nghiệp →</a></div>
            </div>
          `}
        </div>
        <aside class="phase5-cart-summary">
          <p class="eyebrow">Tạm tính</p>
          <h2>Trước địa chỉ giao.</h2>
          <dl>
            <div><dt>Sản phẩm</dt><dd>${formatVnd(subtotal)}</dd></div>
            <div><dt>Giao hàng</dt><dd>${manualDelivery ? 'HEDY xác nhận riêng' : 'Tính tại Thanh toán'}</dd></div>
            <div class="phase5-summary-total"><dt>${manualDelivery ? 'Tạm tính sản phẩm' : 'Tạm tính'}</dt><dd>${totalsCurrent ? formatVnd(subtotal) : 'Chưa hiện hành'}</dd></div>
          </dl>
          <div class="status-banner status-banner--${manualDelivery ? 'warning' : 'pending'}">
            <strong>${manualDelivery ? 'Phí giao và tổng cuối đang chờ.' : 'Chưa bao gồm phí giao hàng.'}</strong>
            <span>${manualDelivery ? 'Checkout sẽ tạo yêu cầu báo phí; chưa yêu cầu thanh toán.' : 'Phí phụ thuộc địa chỉ và kiện hàng; không được hiển thị là 0₫.'}</span>
          </div>
          <button class="button button--dark phase5-checkout-action" type="button" data-cart-checkout-preview ${checkoutReady ? '' : 'disabled'}>Tiếp tục đến Thanh toán <span aria-hidden="true">→</span></button>
          <p class="disabled-reason" data-checkout-reason>${checkoutReady ? 'Mở biểu mẫu khách vãng lai với đúng các dòng hiện tại. Chưa tạo đơn, yêu cầu báo phí hoặc thanh toán.' : 'Xử lý cảnh báo dòng và cập nhật lại tạm tính trước khi tiếp tục.'}</p>
          <p class="inline-confirmation phase5-checkout-confirmation" role="status" aria-live="polite"></p>
          <a class="phase5-summary-policy" href="policies.html#giao-hang-va-hu-hong">Giao hàng &amp; hư hỏng</a>
          <a class="phase5-summary-policy" href="policies.html#thanh-toan">Thanh toán</a>
          <div class="phase5-cart-consultation">
            <h3>Cần gắn dấu hoặc số lượng lớn?</h3>
            <p>Đây là một yêu cầu riêng, không phải tăng số lượng bán lẻ.</p>
            <button class="contact-trigger" type="button" data-contact-state="contextual" data-contact-source="cart" data-contact-label="Đặt riêng từ giỏ hiện tại">Chọn Zalo hoặc Instagram ↗</button>
          </div>
        </aside>
      </section>
    `;

    root.querySelectorAll('.contact-trigger').forEach(bindContactTrigger);
    const updateQuantity = (index, next) => {
      const line = workingLines[index];
      const variant = getVariant(line.productFixtureId, line.variantId);
      if (next < 1 || next > variant.inventory.sellableQuantity) return;
      displayState = 'updating';
      render();
      updateTimer = window.setTimeout(() => {
        line.quantity = next;
        line.lineStatus = 'current';
        displayState = 'normal';
        persistWorkingCart();
        render(`[data-full-cart-line="${index}"] .quantity-picker`);
        announceCart(`Đã cập nhật số lượng ${getProduct(line.productFixtureId).name.short} thành ${next}.`);
      }, 360);
    };
    root.querySelectorAll('[data-full-cart-minus]').forEach((button) => button.addEventListener('click', () => {
      const index = Number(button.dataset.fullCartMinus);
      updateQuantity(index, workingLines[index].quantity - 1);
    }));
    root.querySelectorAll('[data-full-cart-plus]').forEach((button) => button.addEventListener('click', () => {
      const index = Number(button.dataset.fullCartPlus);
      updateQuantity(index, workingLines[index].quantity + 1);
    }));
    root.querySelectorAll('[data-full-cart-remove]').forEach((button) => button.addEventListener('click', () => {
      removedIndex = Number(button.dataset.fullCartRemove);
      removedLine = workingLines.splice(removedIndex, 1)[0];
      displayState = 'removal-undo';
      persistWorkingCart();
      render('[data-cart-undo]');
      announceCart(`${getProduct(removedLine.productFixtureId).name.short} đã được xóa; có thể hoàn tác.`);
    }));
    root.querySelector('[data-cart-undo]')?.addEventListener('click', () => {
      workingLines.splice(Math.max(removedIndex, 0), 0, removedLine);
      const restoredProduct = getProduct(removedLine.productFixtureId);
      removedLine = null;
      removedIndex = -1;
      displayState = 'normal';
      persistWorkingCart();
      render(`[data-full-cart-line="0"] h3 a`);
      announceCart(`${restoredProduct.name.short} đã trở lại giỏ.`);
    });
    root.querySelectorAll('[data-cart-accept-price]').forEach((button) => button.addEventListener('click', () => {
      const index = Number(button.dataset.cartAcceptPrice);
      workingLines[index].lineStatus = 'current';
      delete workingLines[index].previousUnitPriceVnd;
      displayState = 'normal';
      persistWorkingCart();
      render(`[data-full-cart-line="${index}"] h3 a`);
      announceCart('Đã xác nhận giá fixture hiện tại.');
    }));
    root.querySelector('[data-cart-retry]')?.addEventListener('click', () => {
      displayState = 'updating';
      render();
      updateTimer = window.setTimeout(() => {
        displayState = 'normal';
        persistWorkingCart();
        render('[data-cart-checkout-preview]');
        announceCart('Tạm tính đã được cập nhật từ các dòng được giữ.');
      }, 420);
    });
    root.querySelector('[data-cart-checkout-preview]')?.addEventListener('click', () => {
      const checkoutUrl = new URL('checkout.html', window.location.href);
      checkoutUrl.searchParams.set('scenario', scenario);
      checkoutUrl.searchParams.set('source', 'cart');
      window.location.href = checkoutUrl.href;
    });
    if (focusSelector) root.querySelector(focusSelector)?.focus();
  };

  render();
};

const phase6DeliveryStates = new Set([
  'not-ready',
  'calculating',
  'one-method',
  'multiple-methods',
  'zone-fallback',
  'manual-quote',
  'unsupported',
  'quote-failure',
  'stale'
]);

const phase6CheckoutStates = new Set([
  'initial',
  'validation-error',
  'address-service-error',
  ...phase6DeliveryStates
]);

const phase7CheckoutStates = new Set([
  'cod-ineligible',
  'submitting',
  'known-creation-failure',
  'unknown-outcome'
]);

const phase7ConfirmationStates = new Set([
  'received',
  'awaiting-payment',
  'awaiting-verification',
  'request-received',
  'notification-failure',
  'known-creation-failure',
  'unknown-outcome'
]);

const checkoutCartSignature = (lines) => lines
  .map((line) => `${line.productFixtureId}:${line.variantId}:${line.quantity}:${line.unitPriceVnd}`)
  .join('|');

const readCheckoutDraft = () => {
  try {
    const stored = JSON.parse(sessionStorage.getItem(CHECKOUT_STORAGE_KEY));
    return stored?.version === CHECKOUT_SCHEMA_VERSION && stored.values && typeof stored.values === 'object' ? stored : null;
  } catch {
    return null;
  }
};

const readCheckoutResults = () => {
  try {
    const stored = JSON.parse(sessionStorage.getItem(CHECKOUT_RESULT_STORAGE_KEY));
    return stored?.version === CHECKOUT_RESULT_SCHEMA_VERSION && Array.isArray(stored.results) ? stored.results : [];
  } catch {
    return [];
  }
};

const saveCheckoutResult = (result) => {
  try {
    const results = readCheckoutResults().filter((entry) => entry.resultKey !== result.resultKey);
    results.unshift(result);
    sessionStorage.setItem(CHECKOUT_RESULT_STORAGE_KEY, JSON.stringify({
      version: CHECKOUT_RESULT_SCHEMA_VERSION,
      results: results.slice(0, 8)
    }));
    return true;
  } catch {
    return false;
  }
};

const findCheckoutResult = (resultKey) => readCheckoutResults().find((entry) => entry.resultKey === resultKey) || null;

const defaultConfirmationState = (scenarioId) => {
  if (scenarioId === 'standard-transfer') return 'awaiting-payment';
  if (scenarioId === 'manual-delivery') return 'request-received';
  return 'received';
};

const initPhase6Checkout = () => {
  const root = document.querySelector('[data-phase6-checkout]');
  if (!root) return;
  const query = new URLSearchParams(window.location.search);
  const scenarioIds = ['standard-cod', 'standard-transfer', 'manual-delivery'];
  const scenarioId = scenarioIds.includes(query.get('scenario')) ? query.get('scenario') : 'standard-cod';
  const scenario = prototypeData.reviewScenarios?.[scenarioId];
  const rawState = query.get('state');
  const requestedDeliveryState = phase6CheckoutStates.has(rawState) ? rawState : null;
  const requestedPaymentState = phase7CheckoutStates.has(rawState) ? rawState : null;
  const requestedState = requestedDeliveryState || requestedPaymentState;
  const deterministic = Boolean(requestedState);
  const fromCart = query.get('source') === 'cart';
  const requestedOutcome = ['success', 'notification-failure', 'known-creation-failure', 'unknown-outcome'].includes(query.get('outcome'))
    ? query.get('outcome')
    : 'success';
  const scenarioLines = cloneCartLines(scenario?.lineSnapshot || []);
  const workingLines = fromCart && cartState.lines.length ? cloneCartLines(cartState.lines) : scenarioLines;
  const cartSignature = checkoutCartSignature(workingLines);
  const storedDraft = deterministic ? null : readCheckoutDraft();
  const matchingDraft = storedDraft?.scenarioId === scenarioId ? storedDraft : null;
  const syntheticValues = scenario?.recipientSnapshot || {};
  const blankValues = {
    recipientName: '',
    phone: '',
    email: '',
    deliveryNote: '',
    province: '',
    districtWard: '',
    street: '',
    addressNote: ''
  };
  const stateNeedsAddress = requestedState && !['initial', 'not-ready'].includes(requestedState);
  let values = matchingDraft
    ? { ...blankValues, ...matchingDraft.values }
    : stateNeedsAddress
      ? { ...blankValues, ...syntheticValues }
      : { ...blankValues };
  if (requestedState === 'validation-error') {
    values.phone = '09AB';
    values.street = 'A';
  }
  let checkoutState = requestedDeliveryState || (requestedPaymentState ? scenario?.deliveryFixtureId : null) || matchingDraft?.checkoutState || 'initial';
  if (checkoutState === 'initial') checkoutState = 'not-ready';
  if (matchingDraft?.cartSignature && matchingDraft.cartSignature !== cartSignature && phase6DeliveryStates.has(checkoutState) && checkoutState !== 'not-ready') {
    checkoutState = 'stale';
  }
  let selectedDeliveryMethodId = matchingDraft?.selectedDeliveryMethodId || scenario?.selectedDeliveryMethodId || null;
  if (checkoutState === 'multiple-methods' && deterministic) selectedDeliveryMethodId = null;
  const codEligible = requestedPaymentState !== 'cod-ineligible';
  let selectedPaymentMethod = scenarioId === 'manual-delivery'
    ? null
    : matchingDraft?.selectedPaymentMethod || (scenarioId === 'standard-transfer' || !codEligible ? 'bank-transfer' : 'cod');
  let policyConsent = requestedPaymentState === 'submitting' ? true : deterministic ? false : Boolean(matchingDraft?.policyConsent);
  let errors = {};
  let calculationTimer = null;
  let submissionTimer = null;
  let isSubmitting = requestedPaymentState === 'submitting';
  let boundaryMessage = '';

  const deliveryFixtures = prototypeData.commerceFixtures?.delivery || {};
  const fields = {
    recipientName: {
      label: 'Họ và tên người nhận',
      validate: (value) => value.trim().length >= 2 ? '' : 'Nhập họ tên người nhận có ít nhất 2 ký tự.'
    },
    phone: {
      label: 'Số điện thoại Việt Nam',
      validate: (value) => /^(?:\+84|0)\d{9,10}$/.test(value.replace(/[\s.-]/g, '')) ? '' : 'Nhập số điện thoại Việt Nam có đủ chữ số và không kèm chữ cái.'
    },
    email: {
      label: 'Email nhận thông tin',
      validate: (value) => !value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? '' : 'Nhập email theo dạng ten@example.com hoặc để trống.'
    },
    province: {
      label: 'Tỉnh / thành phố',
      validate: (value) => value ? '' : 'Chọn tỉnh hoặc thành phố để đánh giá giao hàng.'
    },
    districtWard: {
      label: 'Quận, huyện / phường, xã',
      validate: (value) => value ? '' : 'Chọn khu vực sau khi đã chọn tỉnh hoặc thành phố.'
    },
    street: {
      label: 'Số nhà, đường, tòa nhà',
      validate: (value) => value.trim().length >= 5 ? '' : 'Nhập số nhà, đường hoặc thông tin tòa nhà rõ hơn.'
    }
  };

  if (requestedState === 'validation-error') {
    errors.phone = fields.phone.validate(values.phone);
    errors.street = fields.street.validate(values.street);
  }

  const addressFieldIds = ['province', 'districtWard', 'street'];
  const requiredFieldIds = ['recipientName', 'phone', 'email', 'province', 'districtWard', 'street'];
  const subtotal = workingLines.reduce((total, line) => total + line.unitPriceVnd * line.quantity, 0);

  const saveDraft = () => {
    if (deterministic) return;
    try {
      sessionStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify({
        version: CHECKOUT_SCHEMA_VERSION,
        scenarioId,
        cartSignature,
        values,
        checkoutState,
        selectedDeliveryMethodId,
        selectedPaymentMethod,
        policyConsent
      }));
    } catch {
      boundaryMessage = 'Thiết bị không lưu được bản nháp phiên này; biểu mẫu vẫn dùng được trên trang hiện tại.';
    }
  };

  const validateField = (fieldId) => {
    const message = fields[fieldId]?.validate(values[fieldId] || '') || '';
    if (message) errors[fieldId] = message;
    else delete errors[fieldId];
    return !message;
  };

  const validateAll = () => {
    requiredFieldIds.forEach(validateField);
    return Object.keys(errors).length === 0;
  };

  const deliveryResult = () => {
    if (checkoutState === 'multiple-methods') {
      return deliveryFixtures['multiple-methods']?.methods?.find((method) => method.id === selectedDeliveryMethodId) || null;
    }
    return deliveryFixtures[checkoutState] || null;
  };

  const deliveryIsCurrent = () => {
    if (['one-method', 'zone-fallback', 'manual-quote'].includes(checkoutState)) return true;
    return checkoutState === 'multiple-methods' && Boolean(selectedDeliveryMethodId);
  };

  const finalDeliveryFee = () => {
    const result = deliveryResult();
    return Number.isInteger(result?.feeVnd) ? result.feeVnd : null;
  };

  const finalTotal = () => {
    const fee = finalDeliveryFee();
    return deliveryIsCurrent() && fee !== null ? subtotal + fee : null;
  };

  const resolvedOutcome = () => {
    if (scenarioId === 'manual-delivery') return 'manual-quote';
    if (values.province === 'Ngoài vùng cấu hình — dữ liệu mẫu') return 'unsupported';
    if (values.province === 'Hà Nội — dữ liệu mẫu') return 'multiple-methods';
    if (values.province === 'Đà Nẵng — dữ liệu mẫu') return 'zone-fallback';
    return 'one-method';
  };

  const updateUrlState = () => {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set('scenario', scenarioId);
    if (fromCart) nextUrl.searchParams.set('source', 'cart');
    nextUrl.searchParams.set('state', checkoutState);
    window.history.replaceState({}, '', `${nextUrl.pathname.split('/').pop()}${nextUrl.search}${nextUrl.hash}`);
  };

  const deliveryMarkup = () => {
    if (checkoutState === 'calculating') {
      return `
        <div class="phase6-delivery-state phase6-delivery-state--loading" role="status" aria-live="polite">
          <span class="phase6-progress-mark" aria-hidden="true"></span>
          <div><strong>Đang tính phương án giao hàng.</strong><p>Bạn vẫn có thể sửa địa chỉ. Mọi kết quả cũ đang bị khóa trong lúc tính.</p></div>
        </div>
      `;
    }
    if (checkoutState === 'one-method') {
      const method = deliveryFixtures['one-method'];
      return `
        <div class="phase6-delivery-state status-banner status-banner--success" role="status" aria-live="polite"><strong>Đã có một phương án.</strong><span>Phí và thời gian dưới đây là dữ liệu mẫu, chưa phải cam kết vận hành.</span></div>
        <label class="phase6-option-card is-selected"><input type="radio" name="delivery-method" value="${method.methodId}" checked /><span><strong>${method.methodLabel}</strong><small>${method.estimateLabel}</small></span><b>${formatVnd(method.feeVnd)}</b></label>
      `;
    }
    if (checkoutState === 'multiple-methods') {
      const fixture = deliveryFixtures['multiple-methods'];
      return `
        <div class="phase6-delivery-state status-banner status-banner--pending" role="status" aria-live="polite"><strong>Có nhiều phương án mẫu.</strong><span>Chọn rõ một phương án để hoàn tất tổng tiền.</span></div>
        <div class="phase6-option-list">
          ${fixture.methods.map((method) => `
            <label class="phase6-option-card${selectedDeliveryMethodId === method.id ? ' is-selected' : ''}"><input type="radio" name="delivery-method" value="${method.id}" ${selectedDeliveryMethodId === method.id ? 'checked' : ''} /><span><strong>${method.label}</strong><small>${method.estimateLabel}</small></span><b>${formatVnd(method.feeVnd)}</b></label>
          `).join('')}
        </div>
        ${selectedDeliveryMethodId ? '' : '<p class="field-error" data-delivery-selection-error>Chọn một phương án giao hàng để có tổng cuối.</p>'}
      `;
    }
    if (checkoutState === 'zone-fallback') {
      const method = deliveryFixtures['zone-fallback'];
      return `
        <div class="phase6-delivery-state status-banner status-banner--pending" role="status" aria-live="polite"><strong>Dùng bảng khu vực mẫu.</strong><span>Dịch vụ báo phí trực tiếp không áp dụng ở fixture này; kết quả dự phòng vẫn là một mức phí hiện hành.</span></div>
        <label class="phase6-option-card is-selected"><input type="radio" name="delivery-method" value="${method.methodId}" checked /><span><strong>${method.methodLabel}</strong><small>${method.estimateLabel}</small></span><b>${formatVnd(method.feeVnd)}</b></label>
      `;
    }
    if (checkoutState === 'manual-quote') {
      return `
        <div class="phase6-delivery-state status-banner status-banner--warning" role="status" aria-live="polite"><strong>Cần HEDY xác nhận phí riêng.</strong><span>Kiện hàng hoặc địa điểm cần được xem thủ công. Phí giao và tổng cuối đang chờ; chưa cần thanh toán.</span></div>
        <div class="phase6-manual-facts"><span>Phương án</span><strong>Yêu cầu xác nhận giao hàng</strong><span>Phí giao</span><strong>Đang chờ HEDY xác nhận</strong></div>
      `;
    }
    if (checkoutState === 'unsupported') {
      return `
        <div class="phase6-delivery-state status-banner status-banner--error" role="status" aria-live="polite"><strong>Địa chỉ mẫu chưa được hỗ trợ.</strong><span>Không có phương án giao hàng hiện hành. Sửa tỉnh/thành hoặc trao đổi trực tiếp; chưa thể đặt đơn.</span></div>
        <div class="phase6-state-actions"><button class="button button--outline" type="button" data-checkout-edit-address>Sửa địa chỉ</button><button class="text-link contact-trigger" type="button" data-contact-state="contextual" data-contact-source="checkout" data-contact-label="Hỗ trợ địa chỉ giao hàng">Chọn kênh liên hệ →</button></div>
      `;
    }
    if (checkoutState === 'quote-failure') {
      return `
        <div class="phase6-delivery-state status-banner status-banner--error" role="status" aria-live="polite"><strong>Chưa lấy được phí giao hàng.</strong><span>Thông tin hợp lệ vẫn được giữ. Thử lại; phương án thủ công chỉ xuất hiện sau khi quy tắc vận hành được duyệt.</span></div>
        <div class="phase6-state-actions"><button class="button button--outline" type="button" data-delivery-retry>Thử tính lại</button><a class="text-link" href="contact.html?source=checkout">Xem hỗ trợ chung →</a></div>
      `;
    }
    if (checkoutState === 'stale') {
      return `
        <div class="phase6-delivery-state status-banner status-banner--warning" role="status" aria-live="polite"><strong>Phí trước đó không còn hiệu lực.</strong><span>Địa chỉ hoặc giỏ đã thay đổi. Phương án cũ bị bỏ khỏi tổng và không thể dùng để tiếp tục.</span></div>
        <button class="button button--outline" type="button" data-delivery-calculate>Tính lại với thông tin hiện tại</button>
      `;
    }
    return `
      <div class="phase6-delivery-state status-banner status-banner--pending" role="status" aria-live="polite"><strong>Chưa đủ thông tin để tính.</strong><span>Hoàn tất người nhận và địa chỉ. Phí giao chưa biết không được hiển thị là 0₫.</span></div>
      <button class="button button--outline" type="button" data-delivery-calculate>Tính phương án giao hàng</button>
    `;
  };

  const paymentMarkup = () => {
    if (checkoutState === 'manual-quote') {
      return '<div class="phase6-payment-boundary is-disabled"><span aria-hidden="true">04</span><div><strong>Chưa yêu cầu thanh toán</strong><p>Phương thức thanh toán chỉ được chọn sau khi HEDY xác nhận phí và tổng cuối.</p></div></div>';
    }
    if (!deliveryIsCurrent()) {
      return '<div class="phase6-payment-boundary is-disabled"><span aria-hidden="true">04</span><div><strong>Chờ phương án giao hàng hiện hành</strong><p>Khả năng COD hoặc chuyển khoản có thể phụ thuộc địa chỉ và tổng tiền.</p></div></div>';
    }
    return `
      <fieldset class="phase7-payment-options" data-phase7-payment-options>
        <legend class="sr-only">Chọn phương thức thanh toán mẫu</legend>
        <label class="phase7-payment-card${selectedPaymentMethod === 'cod' ? ' is-selected' : ''}${codEligible ? '' : ' is-disabled'}">
          <input type="radio" name="paymentMethod" value="cod" ${selectedPaymentMethod === 'cod' ? 'checked' : ''} ${codEligible ? '' : 'disabled'} aria-describedby="phase7-cod-description${codEligible ? '' : ' phase7-cod-disabled'}" />
          <span class="phase7-payment-card-mark" aria-hidden="true">01</span>
          <span><strong>Thanh toán khi nhận hàng (COD)</strong><small id="phase7-cod-description">Trả đúng tổng cuối khi nhận kiện. Đơn được ghi nhận trước; trạng thái không bao giờ là “Đã thanh toán” tại bước này.</small>${codEligible ? '<em>Khả dụng trong fixture này · quy tắc thật chờ duyệt</em>' : '<em id="phase7-cod-disabled">Không khả dụng: điều kiện địa chỉ hoặc tổng mẫu không đáp ứng quy tắc COD đang dùng để review.</em>'}</span>
        </label>
        <label class="phase7-payment-card${selectedPaymentMethod === 'bank-transfer' ? ' is-selected' : ''}">
          <input type="radio" name="paymentMethod" value="bank-transfer" ${selectedPaymentMethod === 'bank-transfer' ? 'checked' : ''} aria-describedby="phase7-transfer-description" />
          <span class="phase7-payment-card-mark" aria-hidden="true">02</span>
          <span><strong>Chuyển khoản thủ công</strong><small id="phase7-transfer-description">Tạo đơn mẫu trước, rồi mới xem hướng dẫn mô phỏng. HEDY phải đối chiếu thực nhận trước khi trạng thái có thể đổi.</small><em>Không có tài khoản hoặc giao dịch thật</em></span>
        </label>
      </fieldset>
      <p class="disabled-reason">Cổng thanh toán tương lai không hiển thị trong MVP. Điều kiện COD, hạn chuyển khoản và cách thông báo thật vẫn chờ HEDY duyệt.</p>
    `;
  };

  const reviewLinesMarkup = () => workingLines.map((line) => {
    const product = getProduct(line.productFixtureId);
    const variant = getVariant(line.productFixtureId, line.variantId);
    return `
      <li class="phase6-review-line"><span><strong>${product?.name?.short || line.productFixtureId}</strong><small>${variant?.label || line.variantId} · SL ${line.quantity}</small></span><b>${formatVnd(line.unitPriceVnd * line.quantity)}</b></li>
    `;
  }).join('');

  const buildCheckoutResult = (resultState) => {
    const knownFailure = resultState === 'known-creation-failure';
    const unknownOutcome = resultState === 'unknown-outcome';
    const resultCreated = unknownOutcome ? null : !knownFailure;
    const manualQuote = checkoutState === 'manual-quote';
    const paymentSegment = manualQuote ? 'YC' : selectedPaymentMethod === 'bank-transfer' ? 'CK' : 'COD';
    const referencePrefix = `HEDY-MAU-${paymentSegment}-`;
    const resultSequence = readCheckoutResults().filter((entry) => entry.referenceCode?.startsWith(referencePrefix)).length + 1;
    const referenceCode = resultCreated ? `${referencePrefix}${String(resultSequence).padStart(2, '0')}` : null;
    const resultType = resultCreated ? (manualQuote ? 'delivery-quote-request' : 'order') : null;
    const amountVnd = finalTotal();
    const transferBase = prototypeData.reviewScenarios?.['standard-transfer']?.paymentInstructionSnapshot || {};
    const paymentInstructionSnapshot = selectedPaymentMethod === 'bank-transfer' && resultCreated ? {
      ...transferBase,
      amountVnd,
      transferReference: referenceCode
    } : null;
    return {
      version: CHECKOUT_RESULT_SCHEMA_VERSION,
      resultKey: referenceCode || `phase7-${scenarioId}-${paymentSegment.toLowerCase()}-${resultState}`,
      submissionKey: [scenarioId, checkoutCartSignature(workingLines), selectedDeliveryMethodId, selectedPaymentMethod || 'manual'].join('|'),
      scenarioId,
      state: resultState,
      resultCreated,
      resultType,
      referenceCode,
      orderCreated: resultCreated === true && !manualQuote,
      requestCreated: resultCreated === true && manualQuote,
      paymentStatus: unknownOutcome ? 'unknown' : knownFailure ? 'not-created' : manualQuote ? 'not-actionable' : selectedPaymentMethod === 'bank-transfer' ? 'awaiting-payment' : 'due-on-delivery',
      deliveryStatus: unknownOutcome ? 'unknown' : knownFailure ? 'not-created' : manualQuote ? 'fee-pending' : 'quoted',
      notificationStatus: resultState === 'notification-failure' ? 'failed' : resultCreated ? 'not-promised' : unknownOutcome ? 'unknown' : 'not-sent',
      selectedPaymentMethod,
      selectedPaymentLabel: manualQuote ? 'Chưa yêu cầu thanh toán' : selectedPaymentMethod === 'bank-transfer' ? 'Chuyển khoản thủ công' : 'Thanh toán khi nhận hàng (COD)',
      selectedDeliveryMethodId,
      selectedDeliveryLabel: deliveryResult()?.methodLabel || deliveryResult()?.label || (manualQuote ? 'HEDY xác nhận phí riêng' : ''),
      lines: cloneCartLines(workingLines),
      recipient: { ...values },
      totals: {
        subtotalVnd: subtotal,
        deliveryFeeVnd: finalDeliveryFee(),
        totalVnd: amountVnd,
        totalFinal: amountVnd !== null
      },
      paymentInstructionSnapshot,
      fromCart,
      createdLabel: 'Kết quả mô phỏng trong phiên này · không phải giao dịch thật'
    };
  };

  const render = (focusSelector = null) => {
    window.clearTimeout(calculationTimer);
    if (!isSubmitting) window.clearTimeout(submissionTimer);
    if (!workingLines.length) {
      root.innerHTML = `
        <nav class="breadcrumbs section-shell" aria-label="Đường dẫn"><a href="index.html">Trang chủ</a><span>/</span><a href="cart.html">Giỏ hàng</a><span>/</span><span aria-current="page">Thanh toán</span></nav>
        <section class="phase6-empty section-shell"><span aria-hidden="true">H</span><p class="eyebrow">Không có dòng hợp lệ</p><h1>Trở lại Giỏ trước khi tiếp tục.</h1><p>Thanh toán không tạo sản phẩm hoặc đoán một phiên bản thay cho bạn.</p><a class="button button--dark" href="cart.html">Xem Giỏ hàng →</a></section>
      `;
      return;
    }
    const fee = finalDeliveryFee();
    const total = finalTotal();
    const manualQuote = checkoutState === 'manual-quote';
    const deliveryCurrent = deliveryIsCurrent();
    const formValid = requiredFieldIds.every((fieldId) => !fields[fieldId].validate(values[fieldId] || ''));
    const paymentReady = manualQuote || selectedPaymentMethod === 'bank-transfer' || (selectedPaymentMethod === 'cod' && codEligible);
    const submitReady = formValid && deliveryCurrent && paymentReady && policyConsent && !isSubmitting;
    const submitLabel = manualQuote
      ? 'Gửi yêu cầu xác nhận phí giao'
      : selectedPaymentMethod === 'bank-transfer'
        ? 'Đặt đơn và xem hướng dẫn chuyển khoản'
        : 'Đặt đơn COD';
    const submittingLabel = manualQuote ? 'Đang ghi nhận yêu cầu mẫu…' : 'Đang tạo đơn mẫu…';
    const selectedDeliveryLabel = deliveryResult()?.methodLabel || deliveryResult()?.label || (manualQuote ? 'HEDY xác nhận phí riêng' : 'Chưa chọn');
    const selectedPaymentLabel = manualQuote
      ? 'Chưa yêu cầu thanh toán'
      : selectedPaymentMethod === 'bank-transfer'
        ? 'Chuyển khoản thủ công'
        : 'Thanh toán khi nhận hàng (COD)';
    const cartReturnHref = fromCart ? 'cart.html' : `cart.html?scenario=${scenarioId}&state=normal`;
    root.innerHTML = `
      <nav class="breadcrumbs section-shell" aria-label="Đường dẫn"><a href="index.html">Trang chủ</a><span>/</span><a href="shop.html">Cửa hàng</a><span>/</span><a href="${cartReturnHref}">Giỏ hàng</a><span>/</span><span aria-current="page">Thanh toán</span></nav>
      <header class="phase6-checkout-hero section-shell">
        <div><p class="eyebrow">Bước 02 · Giao hàng &amp; thanh toán mẫu</p><h1>Giao đúng nơi,<br /><em>gọi đúng trạng thái.</em></h1></div>
        <div><p>Bản mẫu chỉ tạo kết quả mô phỏng trong phiên trình duyệt. Không gửi thông tin, không đặt đơn, không nhận tiền và không liên hệ HEDY thật.</p><a href="${cartReturnHref}">← Sửa Giỏ hàng</a></div>
      </header>
      <form class="phase6-checkout-layout section-shell" novalidate data-checkout-form ${isSubmitting ? 'aria-busy="true"' : ''}>
        <div class="phase6-checkout-flow">
          ${Object.keys(errors).length ? `
            <div class="error-summary" id="checkout-errors" role="alert" tabindex="-1" data-checkout-error-summary>
              <h2>Cần sửa ${Object.keys(errors).length} thông tin trước khi tính giao hàng.</h2>
              <ul>${Object.entries(errors).map(([fieldId, message]) => `<li><a href="#checkout-${fieldId}" data-error-link="${fieldId}">${fields[fieldId].label}: ${message}</a></li>`).join('')}</ul>
            </div>
          ` : ''}
          <section class="phase6-form-section" aria-labelledby="phase6-contact-title">
            <div class="phase6-step-heading"><span>01</span><div><p class="eyebrow">Liên hệ &amp; người nhận</p><h2 id="phase6-contact-title">Ai sẽ nhận món đồ?</h2></div></div>
            <div class="phase6-field-grid">
              <div class="field"><label for="checkout-recipientName">Họ và tên người nhận <span aria-hidden="true">*</span></label><input id="checkout-recipientName" name="recipientName" autocomplete="name" maxlength="80" aria-describedby="checkout-recipientName-help${errors.recipientName ? ' checkout-recipientName-error' : ''}" ${errors.recipientName ? 'aria-invalid="true"' : ''} /><p class="field-help" id="checkout-recipientName-help">Dùng tên người có thể nhận kiện hàng.</p>${errors.recipientName ? `<p class="field-error" id="checkout-recipientName-error">${errors.recipientName}</p>` : ''}</div>
              <div class="field"><label for="checkout-phone">Số điện thoại Việt Nam <span aria-hidden="true">*</span></label><input id="checkout-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" maxlength="18" aria-describedby="checkout-phone-help${errors.phone ? ' checkout-phone-error' : ''}" ${errors.phone ? 'aria-invalid="true"' : ''} /><p class="field-help" id="checkout-phone-help">Chỉ dùng trong luồng giao hàng mẫu; không được gửi đi.</p>${errors.phone ? `<p class="field-error" id="checkout-phone-error">${errors.phone}</p>` : ''}</div>
              <div class="field phase6-field-wide"><label for="checkout-email">Email <span>không bắt buộc</span></label><input id="checkout-email" name="email" type="email" autocomplete="email" maxlength="120" aria-describedby="checkout-email-help${errors.email ? ' checkout-email-error' : ''}" ${errors.email ? 'aria-invalid="true"' : ''} /><p class="field-help" id="checkout-email-help">Kênh gửi biên nhận thật chưa được duyệt, vì vậy email không bắt buộc trong bản mẫu.</p>${errors.email ? `<p class="field-error" id="checkout-email-error">${errors.email}</p>` : ''}</div>
              <div class="field phase6-field-wide"><label for="checkout-deliveryNote">Ghi chú cho người giao <span>không bắt buộc</span></label><textarea id="checkout-deliveryNote" name="deliveryNote" maxlength="240" rows="3" aria-describedby="checkout-deliveryNote-help"></textarea><p class="field-help" id="checkout-deliveryNote-help">Tối đa 240 ký tự. Không nhập thông tin nhạy cảm trong bản mẫu.</p></div>
            </div>
          </section>
          <section class="phase6-form-section" aria-labelledby="phase6-address-title">
            <div class="phase6-step-heading"><span>02</span><div><p class="eyebrow">Địa chỉ giao</p><h2 id="phase6-address-title">Thông tin nào ảnh hưởng đến phí?</h2></div></div>
            ${checkoutState === 'address-service-error' ? '<div class="status-banner status-banner--error phase6-address-service"><strong>Chưa đọc được nguồn địa chỉ mẫu.</strong><span>Các giá trị đã nhập vẫn còn. Thử lại nguồn dữ liệu; chưa tự động chuyển sang giao thủ công.</span><button type="button" data-address-service-retry>Thử lại</button></div>' : ''}
            <div class="phase6-field-grid">
              <div class="field"><label for="checkout-province">Tỉnh / thành phố <span aria-hidden="true">*</span></label><select id="checkout-province" name="province" autocomplete="address-level1" aria-describedby="checkout-province-help${errors.province ? ' checkout-province-error' : ''}" ${errors.province ? 'aria-invalid="true"' : ''}><option value="">Chọn tỉnh / thành phố</option><option>Thành phố Hồ Chí Minh — dữ liệu mẫu</option><option>Hà Nội — dữ liệu mẫu</option><option>Đà Nẵng — dữ liệu mẫu</option><option>Ngoài vùng cấu hình — dữ liệu mẫu</option></select><p class="field-help" id="checkout-province-help">Đổi tỉnh/thành sẽ xóa khu vực phụ thuộc và phí cũ.</p>${errors.province ? `<p class="field-error" id="checkout-province-error">${errors.province}</p>` : ''}</div>
              <div class="field"><label for="checkout-districtWard">Quận, huyện / phường, xã <span aria-hidden="true">*</span></label><select id="checkout-districtWard" name="districtWard" autocomplete="address-level2" aria-describedby="checkout-districtWard-help${errors.districtWard ? ' checkout-districtWard-error' : ''}" ${values.province ? '' : 'disabled'} ${errors.districtWard ? 'aria-invalid="true"' : ''}><option value="">Chọn khu vực</option><option>Quận 1 — dữ liệu mẫu</option><option>Khu vực trung tâm — dữ liệu mẫu</option><option>Khu vực ngoại thành — dữ liệu mẫu</option></select><p class="field-help" id="checkout-districtWard-help">Danh mục thật cần nguồn địa chỉ được duyệt.</p>${errors.districtWard ? `<p class="field-error" id="checkout-districtWard-error">${errors.districtWard}</p>` : ''}</div>
              <div class="field phase6-field-wide"><label for="checkout-street">Số nhà, đường, tòa nhà <span aria-hidden="true">*</span></label><input id="checkout-street" name="street" autocomplete="street-address" maxlength="160" aria-describedby="checkout-street-help${errors.street ? ' checkout-street-error' : ''}" ${errors.street ? 'aria-invalid="true"' : ''} /><p class="field-help" id="checkout-street-help">Nhập đủ chi tiết để đánh giá giao hàng; đây không phải kiểm tra địa chỉ thật.</p>${errors.street ? `<p class="field-error" id="checkout-street-error">${errors.street}</p>` : ''}</div>
              <div class="field phase6-field-wide"><label for="checkout-addressNote">Chỉ dẫn địa chỉ <span>không bắt buộc</span></label><input id="checkout-addressNote" name="addressNote" maxlength="160" aria-describedby="checkout-addressNote-help" /><p class="field-help" id="checkout-addressNote-help">Ví dụ: tên tòa nhà hoặc lối vào. Không nhập mã cửa hay thông tin nhạy cảm.</p></div>
            </div>
          </section>
          <section class="phase6-form-section" aria-labelledby="phase6-delivery-title">
            <div class="phase6-step-heading"><span>03</span><div><p class="eyebrow">Giao hàng</p><h2 id="phase6-delivery-title" tabindex="-1">Phí nào đã biết, phí nào đang chờ?</h2></div></div>
            <div class="phase6-delivery-live" aria-live="polite">${deliveryMarkup()}</div>
          </section>
          <section class="phase6-form-section" aria-labelledby="phase6-payment-title">
            <div class="phase6-step-heading"><span>04</span><div><p class="eyebrow">Thanh toán</p><h2 id="phase6-payment-title">Chỉ tiếp tục khi tổng đã rõ.</h2></div></div>
            ${paymentMarkup()}
          </section>
        </div>
        <aside class="phase6-review" aria-labelledby="phase6-review-title">
          <div class="phase6-review-heading"><p class="eyebrow">Bước 03 · Kiểm tra</p><h2 id="phase6-review-title">Trước khi gửi.</h2><a href="${cartReturnHref}">Sửa Giỏ</a></div>
          <ol class="phase6-review-lines">${reviewLinesMarkup()}</ol>
          <dl class="phase6-review-totals">
            <div><dt>Sản phẩm</dt><dd>${formatVnd(subtotal)}</dd></div>
            <div><dt>Giao hàng</dt><dd>${fee !== null ? formatVnd(fee) : '<strong class="phase6-pending-value">Đang chờ xác nhận</strong>'}</dd></div>
            <div class="phase6-review-total"><dt>${total !== null ? 'Tổng cuối' : 'Tạm tính sản phẩm'}</dt><dd>${total !== null ? formatVnd(total) : formatVnd(subtotal)}</dd></div>
          </dl>
          <dl class="phase7-review-methods">
            <div><dt>Giao hàng</dt><dd>${escapeHtml(selectedDeliveryLabel)}</dd></div>
            <div><dt>Thanh toán</dt><dd>${escapeHtml(selectedPaymentLabel)}</dd></div>
          </dl>
          <div class="phase6-review-status status-banner status-banner--${total !== null ? 'success' : manualQuote ? 'warning' : 'pending'}"><strong>${total !== null ? 'Tổng cuối của fixture đã rõ.' : manualQuote ? 'Tổng cuối đang chờ.' : 'Chưa có tổng cuối.'}</strong><span>${total !== null ? 'Phí và thời gian vẫn là dữ liệu minh họa chờ cấu hình.' : manualQuote ? 'Không yêu cầu thanh toán khi phí giao chưa được xác nhận.' : 'Không dùng tạm tính sản phẩm như một tổng phải trả.'}</span></div>
          <div class="phase6-address-summary"><div><span>Người nhận</span><button type="button" data-edit-field="recipientName">Sửa</button></div><strong>${escapeHtml(values.recipientName || 'Chưa nhập người nhận')}</strong><p>${escapeHtml([values.street, values.districtWard, values.province].filter(Boolean).join(', ') || 'Chưa đủ địa chỉ giao hàng')}</p></div>
          <label class="phase6-consent"><input type="checkbox" name="policyConsent" ${policyConsent ? 'checked' : ''} /><span>Tôi đã đọc các nội dung bản mẫu về <a href="policies.html?source=checkout#giao-hang-va-hu-hong">giao hàng &amp; hư hỏng</a>, <a href="policies.html?source=checkout#doi-tra-huy-hoan">đổi trả &amp; hủy</a> và <a href="policies.html?source=checkout#dieu-khoan">điều khoản</a>. Nội dung thật vẫn chờ HEDY duyệt.</span></label>
          <button class="button button--dark phase6-submit phase7-submit" type="submit" data-phase6-boundary data-phase7-submit ${submitReady ? '' : 'disabled'} ${isSubmitting ? 'aria-busy="true"' : ''}>${isSubmitting ? submittingLabel : submitLabel} <span aria-hidden="true">${isSubmitting ? '·' : '→'}</span></button>
          <p class="disabled-reason" data-submit-reason>${isSubmitting ? 'Đã khóa kích hoạt lặp lại. Chờ kết quả mô phỏng hiện tại.' : submitReady ? manualQuote ? 'Hệ quả: ghi nhận một yêu cầu phí giao mẫu; không tạo đơn và không yêu cầu thanh toán.' : selectedPaymentMethod === 'bank-transfer' ? 'Hệ quả: tạo đơn mẫu rồi mở hướng dẫn chuyển khoản mô phỏng; chưa ghi nhận thanh toán.' : 'Hệ quả: tạo đơn COD mẫu với số tiền phải trả khi nhận hàng; chưa thanh toán.' : !formValid ? 'Sửa thông tin bắt buộc trước khi tiếp tục.' : !deliveryCurrent ? 'Cần một phương án giao hàng hiện hành trước khi tiếp tục.' : !paymentReady ? 'Chọn một phương thức thanh toán khả dụng.' : 'Đánh dấu xác nhận chính sách để tiếp tục.'}</p>
          <p class="inline-confirmation phase6-boundary-message" role="status" aria-live="polite">${boundaryMessage}</p>
          <p class="phase6-tax-note">Thuế, hóa đơn và điều kiện xuất chứng từ đang chờ HEDY cấu hình; không được suy diễn từ giá fixture.</p>
        </aside>
      </form>
    `;

    Object.entries(values).forEach(([fieldId, value]) => {
      const control = root.querySelector(`[name="${fieldId}"]`);
      if (control) control.value = value;
    });

    root.querySelectorAll('input:not([type="radio"]):not([type="checkbox"]), select, textarea').forEach((control) => {
      control.addEventListener('input', () => {
        values[control.name] = control.value;
        if (errors[control.name] && validateField(control.name)) render(`#checkout-${control.name}`);
        else saveDraft();
      });
      control.addEventListener('blur', () => {
        if (!fields[control.name]) return;
        const hadError = Boolean(errors[control.name]);
        const valid = validateField(control.name);
        if (hadError !== !valid) render(`#checkout-${control.name}`);
      });
    });

    root.querySelector('#checkout-province')?.addEventListener('change', (event) => {
      values.province = event.currentTarget.value;
      values.districtWard = '';
      delete errors.province;
      if (deliveryIsCurrent() || checkoutState === 'calculating') checkoutState = 'stale';
      else checkoutState = 'not-ready';
      selectedDeliveryMethodId = null;
      boundaryMessage = 'Tỉnh/thành đã đổi; khu vực phụ thuộc và phí giao trước đó đã được xóa.';
      saveDraft();
      updateUrlState();
      render('#checkout-districtWard');
    });

    addressFieldIds.filter((fieldId) => fieldId !== 'province').forEach((fieldId) => {
      root.querySelector(`#checkout-${fieldId}`)?.addEventListener('change', () => {
        if (!deliveryIsCurrent() && checkoutState !== 'calculating') return;
        checkoutState = 'stale';
        selectedDeliveryMethodId = null;
        boundaryMessage = 'Địa chỉ đã đổi; phí giao cũ không còn nằm trong tổng.';
        saveDraft();
        updateUrlState();
        render(`#checkout-${fieldId}`);
      });
    });

    root.querySelectorAll('[data-error-link]').forEach((link) => link.addEventListener('click', (event) => {
      event.preventDefault();
      root.querySelector(`#checkout-${link.dataset.errorLink}`)?.focus();
    }));

    const calculateDelivery = () => {
      if (!validateAll()) {
        checkoutState = 'not-ready';
        boundaryMessage = 'Các giá trị hợp lệ vẫn được giữ; sửa những trường được nêu trước khi tính giao hàng.';
        render();
        root.querySelector(`#checkout-${Object.keys(errors)[0]}`)?.focus();
        return;
      }
      checkoutState = 'calculating';
      selectedDeliveryMethodId = null;
      boundaryMessage = '';
      saveDraft();
      updateUrlState();
      render('#phase6-delivery-title');
      calculationTimer = window.setTimeout(() => {
        checkoutState = resolvedOutcome();
        selectedDeliveryMethodId = ['one-method', 'zone-fallback', 'manual-quote'].includes(checkoutState)
          ? deliveryFixtures[checkoutState]?.methodId
          : null;
        boundaryMessage = checkoutState === 'manual-quote'
          ? 'Đã chuyển sang hệ quả yêu cầu xác nhận phí; thanh toán không khả dụng.'
          : checkoutState === 'unsupported'
            ? 'Không có phương án hiện hành cho địa chỉ mẫu này.'
            : 'Đã cập nhật phương án và tổng tiền mẫu.';
        saveDraft();
        updateUrlState();
        render('#phase6-delivery-title');
      }, 520);
    };

    root.querySelector('[data-delivery-calculate]')?.addEventListener('click', calculateDelivery);
    root.querySelector('[data-delivery-retry]')?.addEventListener('click', calculateDelivery);
    root.querySelector('[data-address-service-retry]')?.addEventListener('click', () => {
      checkoutState = 'not-ready';
      boundaryMessage = 'Nguồn địa chỉ mẫu đã sẵn sàng để thử lại; các giá trị trước đó vẫn còn.';
      saveDraft();
      updateUrlState();
      render('#checkout-province');
    });
    root.querySelector('[data-checkout-edit-address]')?.addEventListener('click', () => root.querySelector('#checkout-province')?.focus());
    root.querySelectorAll('[name="delivery-method"]').forEach((radio) => radio.addEventListener('change', () => {
      selectedDeliveryMethodId = radio.value;
      boundaryMessage = `Đã chọn ${radio.closest('label').querySelector('strong').textContent}; tổng fixture đã cập nhật.`;
      saveDraft();
      render('[name="delivery-method"]:checked');
    }));
    root.querySelectorAll('[name="paymentMethod"]').forEach((radio) => radio.addEventListener('change', () => {
      selectedPaymentMethod = radio.value;
      boundaryMessage = selectedPaymentMethod === 'bank-transfer'
        ? 'Đã chọn chuyển khoản thủ công. Hướng dẫn chỉ xuất hiện sau khi đơn mẫu tồn tại.'
        : 'Đã chọn COD. Tổng cuối sẽ được ghi là số tiền phải trả khi nhận hàng, không phải đã thanh toán.';
      saveDraft();
      render('[name="paymentMethod"]:checked');
    }));
    root.querySelector('[name="policyConsent"]')?.addEventListener('change', (event) => {
      policyConsent = event.currentTarget.checked;
      saveDraft();
      render('[name="policyConsent"]');
    });
    root.querySelectorAll('[data-edit-field]').forEach((button) => button.addEventListener('click', () => root.querySelector(`#checkout-${button.dataset.editField}`)?.focus()));
    root.querySelectorAll('.contact-trigger').forEach(bindContactTrigger);
    root.querySelector('[data-checkout-form]')?.addEventListener('submit', (event) => {
      event.preventDefault();
      if (isSubmitting) return;
      if (!validateAll()) {
        boundaryMessage = 'Chưa thể tiếp tục; các thông tin hợp lệ vẫn được giữ.';
        render();
        root.querySelector(`#checkout-${Object.keys(errors)[0]}`)?.focus();
        return;
      }
      if (!deliveryIsCurrent()) {
        boundaryMessage = 'Cần tính hoặc chọn lại một phương án giao hàng hiện hành.';
        render('#phase6-delivery-title');
        return;
      }
      if (!policyConsent) {
        boundaryMessage = 'Đánh dấu xác nhận chính sách trước khi tiếp tục.';
        render('[name="policyConsent"]');
        return;
      }
      const resultState = requestedOutcome === 'success'
        ? manualQuote
          ? 'request-received'
          : selectedPaymentMethod === 'bank-transfer'
            ? 'awaiting-payment'
            : 'received'
        : requestedOutcome;
      const prospectiveResult = buildCheckoutResult(resultState);
      const reusableResult = readCheckoutResults().find((entry) => entry.submissionKey === prospectiveResult.submissionKey && entry.resultCreated !== false);
      if (reusableResult) {
        const confirmationUrl = new URL('confirmation.html', window.location.href);
        confirmationUrl.searchParams.set('scenario', reusableResult.scenarioId);
        confirmationUrl.searchParams.set('state', reusableResult.state);
        confirmationUrl.searchParams.set('result', reusableResult.resultKey);
        window.location.href = confirmationUrl.href;
        return;
      }
      isSubmitting = true;
      boundaryMessage = manualQuote
        ? 'Đang ghi nhận một yêu cầu phí giao mẫu. Chưa có đơn hoặc yêu cầu thanh toán.'
        : 'Đang tạo kết quả đơn mẫu. Kích hoạt lặp lại đã bị khóa.';
      saveDraft();
      render('[data-phase7-submit]');
      submissionTimer = window.setTimeout(() => {
        const result = buildCheckoutResult(resultState);
        saveCheckoutResult(result);
        const confirmationUrl = new URL('confirmation.html', window.location.href);
        confirmationUrl.searchParams.set('scenario', scenarioId);
        confirmationUrl.searchParams.set('state', resultState);
        confirmationUrl.searchParams.set('result', result.resultKey);
        window.location.href = confirmationUrl.href;
      }, 680);
    });

    if (focusSelector) root.querySelector(focusSelector)?.focus({ preventScroll: true });
  };

  render();
  if (window.location.hash) {
    const scrollToHashTarget = () => {
      const target = root.querySelector(window.location.hash);
      target?.scrollIntoView({ block: 'start' });
    };
    window.requestAnimationFrame(scrollToHashTarget);
    window.setTimeout(scrollToHashTarget, 220);
  }
};

const initPhase7Confirmation = () => {
  const root = document.querySelector('[data-phase7-confirmation]');
  if (!root) return;
  const query = new URLSearchParams(window.location.search);
  const scenarioIds = ['standard-cod', 'standard-transfer', 'manual-delivery'];
  const scenarioId = scenarioIds.includes(query.get('scenario')) ? query.get('scenario') : 'standard-cod';
  const scenario = prototypeData.reviewScenarios?.[scenarioId] || prototypeData.reviewScenarios?.['standard-cod'];
  const requestedState = phase7ConfirmationStates.has(query.get('state')) ? query.get('state') : defaultConfirmationState(scenarioId);
  const storedResult = query.get('result') ? findCheckoutResult(query.get('result')) : null;
  const state = storedResult?.state || requestedState;
  const fixtureResult = prototypeData.commerceFixtures?.confirmation?.find((entry) => entry.scenario === scenarioId && entry.state === state);
  const knownFailure = state === 'known-creation-failure';
  const unknownOutcome = state === 'unknown-outcome';
  const manualRequest = scenarioId === 'manual-delivery' && !knownFailure && !unknownOutcome;
  const transferResult = (storedResult?.selectedPaymentMethod || (scenarioId === 'standard-transfer' ? 'bank-transfer' : scenarioId === 'standard-cod' ? 'cod' : null)) === 'bank-transfer';
  const resultCreated = storedResult?.resultCreated ?? fixtureResult?.resultCreated ?? (unknownOutcome ? null : !knownFailure);
  const referenceCode = resultCreated ? storedResult?.referenceCode || fixtureResult?.referenceCode || scenario?.confirmationFixture?.referenceCode : null;
  const lines = storedResult?.lines || cloneCartLines(scenario?.lineSnapshot || []);
  const recipient = storedResult?.recipient || scenario?.recipientSnapshot || {};
  const totals = storedResult?.totals || scenario?.totalsSnapshot || {};
  const paymentStatus = storedResult?.paymentStatus || fixtureResult?.paymentStatus || (manualRequest ? 'not-actionable' : transferResult ? state === 'awaiting-verification' ? 'awaiting-verification' : 'awaiting-payment' : 'due-on-delivery');
  const notificationFailed = state === 'notification-failure' || storedResult?.notificationStatus === 'failed' || fixtureResult?.notificationStatus === 'failed';
  const selectedPaymentLabel = storedResult?.selectedPaymentLabel || (manualRequest ? 'Chưa yêu cầu thanh toán' : transferResult ? 'Chuyển khoản thủ công' : 'Thanh toán khi nhận hàng (COD)');
  const selectedDeliveryLabel = storedResult?.selectedDeliveryLabel || prototypeData.commerceFixtures?.delivery?.[scenario?.deliveryFixtureId]?.methodLabel || 'Phương án giao mẫu';
  const transferBase = storedResult?.paymentInstructionSnapshot || scenario?.paymentInstructionSnapshot || prototypeData.reviewScenarios?.['standard-transfer']?.paymentInstructionSnapshot;
  const transferInstructions = transferResult && resultCreated ? {
    ...transferBase,
    amountVnd: totals.totalVnd,
    transferReference: referenceCode
  } : null;
  const checkoutReturnHref = `checkout.html?scenario=${scenarioId}${storedResult?.fromCart ? '&source=cart' : ''}&recovery=${state}`;

  const linesMarkup = lines.map((line) => {
    const product = getProduct(line.productFixtureId);
    const variant = getVariant(line.productFixtureId, line.variantId);
    return `<li><span><strong>${escapeHtml(product?.name?.short || line.productFixtureId)}</strong><small>${escapeHtml(variant?.label || line.variantId)} · SL ${line.quantity}</small></span><b>${formatVnd(line.unitPriceVnd * line.quantity)}</b></li>`;
  }).join('');

  const transferTimelineMarkup = () => {
    const currentIndex = paymentStatus === 'awaiting-verification' ? 2 : 1;
    const steps = [
      ['Đã nhận đơn', 'Đơn mẫu tồn tại'],
      ['Chờ chuyển khoản', 'Chưa ghi nhận tiền'],
      ['Chờ đối chiếu', 'HEDY kiểm tra thực nhận'],
      ['Đã thanh toán', 'Chỉ sau đối chiếu thật']
    ];
    return `<ol class="phase7-payment-timeline" aria-label="Các trạng thái chuyển khoản">${steps.map(([label, note], index) => `<li class="${index < currentIndex ? 'is-complete' : index === currentIndex ? 'is-current' : ''}" ${index === currentIndex ? 'aria-current="step"' : ''}><span>${String(index + 1).padStart(2, '0')}</span><div><strong>${label}</strong><small>${note}</small></div></li>`).join('')}</ol>`;
  };

  const confirmationSummaryMarkup = () => `
    <aside class="phase7-confirmation-summary" aria-labelledby="phase7-summary-title">
      <div class="phase7-summary-heading"><p class="eyebrow">Chi tiết được giữ</p><h2 id="phase7-summary-title">${manualRequest ? 'Yêu cầu mẫu.' : 'Đơn mẫu.'}</h2></div>
      <ol class="phase7-summary-lines">${linesMarkup}</ol>
      <dl class="phase7-summary-totals">
        <div><dt>Sản phẩm</dt><dd>${formatVnd(totals.subtotalVnd || 0)}</dd></div>
        <div><dt>Giao hàng</dt><dd>${Number.isInteger(totals.deliveryFeeVnd) ? formatVnd(totals.deliveryFeeVnd) : '<strong>Đang chờ xác nhận</strong>'}</dd></div>
        <div class="phase7-summary-total"><dt>${totals.totalFinal ? 'Tổng cuối' : 'Tạm tính sản phẩm'}</dt><dd>${formatVnd(totals.totalFinal ? totals.totalVnd : totals.subtotalVnd || 0)}</dd></div>
      </dl>
      <dl class="phase7-summary-methods"><div><dt>Giao hàng</dt><dd>${escapeHtml(selectedDeliveryLabel)}</dd></div><div><dt>Thanh toán</dt><dd>${escapeHtml(selectedPaymentLabel)}</dd></div></dl>
      <div class="phase7-recipient-summary"><span>Người nhận · dữ liệu mẫu</span><strong>${escapeHtml(recipient.recipientName || 'Chưa có tên người nhận')}</strong><p>${escapeHtml([recipient.street, recipient.districtWard, recipient.province].filter(Boolean).join(', ') || 'Chưa có địa chỉ để hiển thị')}</p></div>
      <p class="phase7-summary-disclosure">Tên, địa chỉ, giá, phí, trạng thái và mã trên trang này chỉ là fixture đánh giá giao diện. Không có dữ liệu nào được gửi đi.</p>
    </aside>
  `;

  if (knownFailure || unknownOutcome || !resultCreated) {
    const heading = knownFailure ? 'Chưa tạo được đơn mẫu.' : 'Chưa xác định được kết quả.';
    const statusTitle = knownFailure ? 'Không có đơn hoặc yêu cầu nào được tạo.' : 'Không thể xác nhận đơn hoặc yêu cầu có tồn tại hay không.';
    const statusCopy = knownFailure
      ? 'Không có mã kết quả. Bản nháp hợp lệ vẫn được giữ trong phiên để bạn quay lại và thử một lần nữa.'
      : 'Không hiển thị mã và không khuyến khích gửi lại mù quáng. Cần tra cứu hoặc hỗ trợ theo hợp đồng kỹ thuật thật trước khi thử lại.';
    root.innerHTML = `
      <nav class="breadcrumbs section-shell" aria-label="Đường dẫn"><a href="index.html">Trang chủ</a><span>/</span><a href="shop.html">Cửa hàng</a><span>/</span><a href="${checkoutReturnHref}">Thanh toán</a><span>/</span><span aria-current="page">Kết quả chưa hoàn tất</span></nav>
      <header class="phase7-failure-hero section-shell">
        <div class="phase7-result-orbit" aria-hidden="true"><span>?</span></div>
        <div><p class="eyebrow">Bước 03 · Phục hồi an toàn</p><h1>${heading}</h1><p>${statusCopy}</p></div>
      </header>
      <section class="phase7-failure-layout section-shell">
        <div>
          <div class="status-banner status-banner--${knownFailure ? 'error' : 'warning'}" role="alert"><strong>${statusTitle}</strong><span>${knownFailure ? 'Bạn có thể quay lại Checkout; các trường hợp lệ trong phiên không bị xóa.' : 'Trang này cố ý không suy đoán trạng thái và không tạo mã thay thế.'}</span></div>
          <div class="phase7-failure-actions">
            ${knownFailure ? `<a class="button button--dark" href="${checkoutReturnHref}">Quay lại Checkout để thử lại →</a>` : ''}
            <button class="button button--outline contact-trigger" type="button" data-contact-source="confirmation" data-contact-label="Hỗ trợ kết quả đơn chưa xác định">Chọn kênh hỗ trợ</button>
            <a class="text-link" href="cart.html">Xem lại Giỏ hàng <span aria-hidden="true">→</span></a>
          </div>
          <div class="phase7-no-code"><span>Mã đơn / yêu cầu</span><strong>Không được tạo</strong><p>Không dùng mã fixture khi kết quả tạo chưa được biết chắc.</p></div>
        </div>
        <aside class="phase7-recovery-note"><p class="eyebrow">Điều vẫn còn</p><h2>Thông tin hợp lệ,<br /><em>không phải một đơn.</em></h2><p>Giỏ và bản nháp Checkout được giữ tách biệt với trạng thái tạo đơn. Việc làm mới trang này chỉ đọc lại kết quả phục hồi; không gửi thêm lần nào.</p><a href="policies.html#pham-vi-ban-mau">Xem phạm vi bản mẫu →</a></aside>
      </section>
    `;
    root.querySelectorAll('.contact-trigger').forEach(bindContactTrigger);
    return;
  }

  const heading = manualRequest
    ? 'Đã nhận yêu cầu phí giao mẫu.'
    : transferResult
      ? paymentStatus === 'awaiting-verification'
        ? 'Đang chờ HEDY đối chiếu.'
        : 'Đơn mẫu đã được ghi nhận.'
      : 'Đã nhận đơn COD mẫu.';
  const statusLabel = manualRequest
    ? 'Phí giao đang chờ xác nhận'
    : transferResult
      ? paymentStatus === 'awaiting-verification' ? 'Đang chờ xác minh · chưa phải Đã thanh toán' : 'Đang chờ chuyển khoản · chưa phải Đã thanh toán'
      : 'Đã nhận đơn · thanh toán khi nhận hàng';
  const heroCopy = manualRequest
    ? 'Đây là một yêu cầu xác nhận phí, không phải đơn đã có tổng cuối. HEDY chưa yêu cầu thanh toán.'
    : transferResult
      ? 'Đơn mẫu tồn tại, nhưng việc hiển thị hướng dẫn không chứng minh đã chuyển hoặc đã nhận tiền.'
      : `Số tiền phải trả khi nhận hàng là ${formatVnd(totals.totalVnd)}. Trạng thái hiện tại không phải “Đã thanh toán”.`;

  const nextStepMarkup = manualRequest ? `
    <section class="phase7-next-step phase7-next-step--manual" aria-labelledby="phase7-next-title">
      <p class="eyebrow">Bước tiếp theo</p><h2 id="phase7-next-title">Chờ phí giao,<br /><em>chưa thanh toán.</em></h2>
      <p>HEDY cần xem kiện hàng và địa điểm trước khi phí giao và tổng cuối có thể được xác nhận. Kênh và thời gian phản hồi thật vẫn đang chờ cấu hình.</p>
      <dl><div><dt>Phí giao</dt><dd>Đang chờ HEDY xác nhận</dd></div><div><dt>Tổng cuối</dt><dd>Chưa có</dd></div><div><dt>Thanh toán</dt><dd>Chưa khả dụng</dd></div></dl>
      <div class="phase7-next-actions"><button class="button button--outline contact-trigger" type="button" data-contact-source="confirmation" data-contact-label="Yêu cầu phí giao ${escapeHtml(referenceCode)}">Chọn kênh hỗ trợ</button><a class="text-link" href="policies.html#giao-hang-va-hu-hong">Xem nội dung giao hàng <span aria-hidden="true">→</span></a></div>
    </section>
  ` : transferResult ? `
    <section class="phase7-transfer-panel" aria-labelledby="phase7-transfer-title">
      <div class="phase7-transfer-heading"><p class="eyebrow">Hướng dẫn dạng chữ · thay cho QR</p><h2 id="phase7-transfer-title">Chuyển khoản mẫu,<br /><em>không chuyển tiền thật.</em></h2><p>Thông tin dưới đây cố ý là dữ liệu không thể thanh toán, chỉ để duyệt bố cục và ngôn ngữ vận hành.</p></div>
      <div class="status-banner status-banner--warning"><strong>MÔ PHỎNG — KHÔNG CHUYỂN TIỀN</strong><span>Luôn kiểm tra chủ tài khoản, số tiền và nội dung trước một giao dịch thật. Ảnh chụp không tự xác nhận thanh toán.</span></div>
      ${transferTimelineMarkup()}
      <div class="phase7-transfer-grid">
        <dl class="phase7-bank-details">
          <div><dt>Ngân hàng</dt><dd>${escapeHtml(transferInstructions?.bankLabel || 'NGÂN HÀNG MẪU — KHÔNG CHUYỂN TIỀN')}</dd></div>
          <div><dt>Chủ tài khoản</dt><dd>${escapeHtml(transferInstructions?.accountHolder || 'HEDY ATELIER — DỮ LIỆU MẪU')}</dd></div>
          <div><dt>Số tài khoản</dt><dd><strong>${escapeHtml(transferInstructions?.accountNumber || '0000 0000 0000')}</strong><button type="button" data-phase7-copy data-copy-value="${escapeHtml(transferInstructions?.accountNumber || '0000 0000 0000')}">Sao chép</button></dd></div>
          <div><dt>Số tiền chính xác</dt><dd><strong>${formatVnd(transferInstructions?.amountVnd || totals.totalVnd)}</strong><button type="button" data-phase7-copy data-copy-value="${transferInstructions?.amountVnd || totals.totalVnd}">Sao chép</button></dd></div>
          <div><dt>Nội dung chuyển khoản</dt><dd><strong>${escapeHtml(transferInstructions?.transferReference || referenceCode)}</strong><button type="button" data-phase7-copy data-copy-value="${escapeHtml(transferInstructions?.transferReference || referenceCode)}">Sao chép</button></dd></div>
          <div><dt>Hạn mẫu</dt><dd>${escapeHtml(transferInstructions?.deadline || 'Đang chờ HEDY cấu hình')}</dd></div>
        </dl>
        <aside class="phase7-qr-withheld"><span aria-hidden="true">QR</span><strong>Không hiển thị VietQR thật</strong><p>Chưa có tài khoản được duyệt. Các trường dạng chữ và nút sao chép bên cạnh là phương án đánh giá thay thế.</p></aside>
      </div>
      <p class="inline-confirmation phase7-copy-status" role="status" aria-live="polite"></p>
      <p class="phase7-verification-note"><strong>Trạng thái hiện tại: ${paymentStatus === 'awaiting-verification' ? 'đang chờ đối chiếu' : 'đang chờ chuyển khoản'}.</strong> “Đã thanh toán” chỉ được dùng sau khi HEDY đối chiếu thực nhận. Kênh thông báo xác nhận thật chưa được cấu hình.</p>
    </section>
  ` : `
    <section class="phase7-next-step phase7-next-step--cod" aria-labelledby="phase7-next-title">
      <p class="eyebrow">Bước tiếp theo</p><h2 id="phase7-next-title">Trả khi nhận,<br /><em>không phải đã trả.</em></h2>
      <p>HEDY sẽ xử lý đơn theo quy trình vận hành sau khi các điều kiện thật được duyệt. Bản mẫu không đặt hàng hoặc gửi thông báo.</p>
      <div class="phase7-cod-amount"><span>Số tiền phải trả khi nhận hàng</span><strong>${formatVnd(totals.totalVnd)}</strong><small>Giá và phí đều là dữ liệu minh họa</small></div>
      <div class="phase7-next-actions"><a class="button button--outline" href="policies.html#thanh-toan">Xem nội dung thanh toán</a><button class="text-link contact-trigger" type="button" data-contact-source="confirmation" data-contact-label="Hỗ trợ đơn COD ${escapeHtml(referenceCode)}">Chọn kênh hỗ trợ →</button></div>
    </section>
  `;

  root.innerHTML = `
    <nav class="breadcrumbs section-shell" aria-label="Đường dẫn"><a href="index.html">Trang chủ</a><span>/</span><a href="shop.html">Cửa hàng</a><span>/</span><a href="cart.html">Giỏ hàng</a><span>/</span><span aria-current="page">Xác nhận</span></nav>
    <header class="phase7-confirmation-hero section-shell">
      <div class="phase7-result-orbit" aria-hidden="true"><span>03</span><i>✓</i></div>
      <div class="phase7-confirmation-title"><p class="eyebrow">Bước 03 · Kết quả trong phiên</p><h1>${heading}</h1><p>${heroCopy}</p></div>
      <div class="phase7-result-code"><span>${manualRequest ? 'Mã yêu cầu mẫu' : 'Mã đơn mẫu'}</span><strong>${escapeHtml(referenceCode)}</strong><button type="button" data-phase7-copy data-copy-value="${escapeHtml(referenceCode)}">Sao chép mã</button><small>${escapeHtml(storedResult?.createdLabel || 'Fixture trực tiếp · không phải giao dịch thật')}</small></div>
    </header>
    <div class="phase7-status-strip section-shell" role="status"><span aria-hidden="true">●</span><strong>${statusLabel}</strong><small>Làm mới trang chỉ đọc lại trạng thái này; không tạo thêm kết quả.</small></div>
    ${notificationFailed ? `<div class="phase7-notification-alert section-shell"><div class="status-banner status-banner--warning" role="alert"><strong>Kết quả đã tồn tại, nhưng thông báo biên nhận mẫu gửi không thành công.</strong><span>${manualRequest ? 'Yêu cầu phí giao mẫu vẫn hợp lệ.' : 'Đơn mẫu vẫn hợp lệ.'} Lưu mã trên trang; kênh nhận thông báo thật vẫn đang chờ cấu hình.</span></div></div>` : ''}
    <div class="phase7-confirmation-layout section-shell">
      <div class="phase7-confirmation-main">
        ${nextStepMarkup}
        <section class="phase7-receipt-note" aria-labelledby="phase7-receipt-title"><p class="eyebrow">Biên nhận &amp; hỗ trợ</p><h2 id="phase7-receipt-title">Giữ mã trên trang,<br /><em>không đoán kênh nhận.</em></h2><p>Email, SMS hoặc kênh nhắn tin dùng cho biên nhận thật chưa được HEDY xác nhận. Bản mẫu không hứa một thông báo đã được gửi.</p><div><button class="button button--outline contact-trigger" type="button" data-contact-source="confirmation" data-contact-label="Hỗ trợ kết quả ${escapeHtml(referenceCode)}">Chọn kênh hỗ trợ</button><a class="text-link" href="shop.html">Tiếp tục xem Cửa hàng <span aria-hidden="true">→</span></a></div></section>
      </div>
      ${confirmationSummaryMarkup()}
    </div>
  `;

  root.querySelectorAll('[data-phase7-copy]').forEach((button) => button.addEventListener('click', async () => {
    const status = root.querySelector('.phase7-copy-status') || button.closest('.phase7-result-code')?.querySelector('small');
    if (status) status.textContent = 'Đang sao chép thông tin hiển thị…';
    try {
      await copyText(button.dataset.copyValue || '');
      if (status) status.textContent = `Đã sao chép ${button.textContent.toLowerCase().replace('sao chép', '').trim() || 'thông tin'}.`;
    } catch {
      if (status) status.textContent = 'Chưa sao chép tự động được. Giá trị vẫn hiển thị để chọn thủ công.';
    }
  }));
  root.querySelectorAll('.contact-trigger').forEach(bindContactTrigger);
};

initPhase3Home();
initPhase3Custom();
initPhase4Shop();
initPhase4Collection();
initPhase4Search();
initPhase5Product();
initPhase5Cart();
initPhase6Checkout();
initPhase7Confirmation();
initDiscoveryReturn();

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
