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
  const isCurrent = page === 'shop' ? ['shop', 'collection', 'search', 'product'].includes(pageId) : pageId === page;
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

initPhase3Home();
initPhase3Custom();
initPhase4Shop();
initPhase4Collection();
initPhase4Search();
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
