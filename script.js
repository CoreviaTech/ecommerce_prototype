const body = document.body;
const translatePrototypeData = (data) => {
  if (typeof window.t !== 'function') return data;
  const walk = (node) => {
    if (typeof node === 'string') return window.t(node);
    if (Array.isArray(node)) return node.map(walk);
    if (node !== null && typeof node === 'object') {
      const res = {};
      for (const k in node) {
        if (['id', 'fixtureId', 'productId', 'path', 'focalPoint', 'truthStatus', 'status', 'variantId', 'currency', 'href'].includes(k)) {
          res[k] = node[k];
        } else {
          res[k] = walk(node[k]);
        }
      }
      return res;
    }
    return node;
  };
  return walk(data);
};
const prototypeData = translatePrototypeData(window.HedyPrototypeData || {});

let __initialHedyLang = window.getLanguage && window.getLanguage();
window.addEventListener("languageChanged", (e) => {
  if (__initialHedyLang && e.detail.language !== __initialHedyLang) {
    window.location.reload();
  }
});
window.__hedyRuntimeErrors = [];
window.addEventListener("error", (event) => {
  window.__hedyRuntimeErrors.push(event.message || "Unknown runtime error");
});
window.addEventListener("unhandledrejection", (event) => {
  window.__hedyRuntimeErrors.push(
    String(
      event.reason?.message || event.reason || "Unhandled promise rejection",
    ),
  );
});
const CART_STORAGE_KEY = "hedyPrototypeCart";
const CART_SCHEMA_VERSION = 3;
const CHECKOUT_STORAGE_KEY = "hedyPrototypeCheckoutDraft";
const CHECKOUT_SCHEMA_VERSION = 1;
const CHECKOUT_RESULT_STORAGE_KEY = "hedyPrototypeCheckoutResults";
const CHECKOUT_RESULT_SCHEMA_VERSION = 1;
const CONTACT_CHECKLIST = [
  "Sản phẩm hoặc loại quà cần trao đổi.",
  "Dùng cho cá nhân, doanh nghiệp hay không gian.",
  "Số lượng dự kiến.",
  "Dấu riêng, logo hoặc nội dung đã có.",
  "Thời điểm cần.",
  "Tỉnh/thành hoặc địa điểm giao.",
];

const pageId = body.dataset.page || "home";
const currentClass = (page) => {
  const isCurrent =
    page === "shop"
      ? [
          "shop",
          "collection",
          "search",
          "product",
          "cart",
          "checkout",
          "confirmation",
        ].includes(pageId)
      : pageId === page;
  return isCurrent ? ' class="is-current" aria-current="page"' : "";
};

const headerMarkup = `
  <header class="site-header" id="top" data-shared-shell="header">
    <a class="brand" href="index.html" aria-label="HEDY Atelier — trang chủ">
      <span class="brand-emblem" aria-hidden="true"><img src="materials/logo.jpg" alt="" width="1254" height="1254" decoding="async" /></span>
      <span class="brand-name">HEDY<small>ATELIER</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Điều hướng chính">
      <a${currentClass("custom")} href="custom.html" data-i18n="nav_custom">Đặt riêng &amp; Doanh nghiệp</a>
      <a${currentClass("shop")} href="shop.html" data-i18n="nav_shop">Cửa hàng</a>
      <a${currentClass("story")} href="story.html" data-i18n="nav_story">Sứ mệnh HEDY</a>
    </nav>
    <div class="header-actions">
      <div class="lang-toggle" style="display:flex; gap: 8px; font-size: 0.85rem; align-items:center; margin-right: 16px;">
        <button type="button" class="lang-btn" data-lang="vi" onclick="setLanguage('vi')" style="background:none; border:none; padding:0; cursor:pointer; font-weight: 500;">VN</button>
        <span style="opacity: 0.3;">|</span>
        <button type="button" class="lang-btn" data-lang="en" onclick="setLanguage('en')" style="background:none; border:none; padding:0; cursor:pointer; font-weight: 500; opacity: 0.5;">EN</button>
      </div>
      <a class="contact-header-button" href="contact.html" data-i18n="nav_contact">Liên hệ</a>
      <button class="icon-button search-trigger" type="button" aria-label="Tìm kiếm">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg>
      </button>
      <button class="bag-button" type="button" aria-label="Giỏ hàng, 0 sản phẩm"><span data-i18n="nav_cart">Giỏ</span> <span class="bag-count">0</span></button>
      <button class="menu-button" type="button" aria-label="Mở menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button>
    </div>
  </header>
`;

const mobileMenuMarkup = `
  <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title" aria-hidden="true" data-shared-shell="mobile-menu">
    <h2 class="sr-only" id="mobile-menu-title" tabindex="-1" data-dialog-initial-focus>Điều hướng</h2>
    <button class="mobile-menu-close dialog-close" type="button" aria-label="Đóng menu">×</button>
    <div class="mobile-lang-toggle" style="padding: 1rem 1.5rem; display: flex; gap: 1rem;">
      <button type="button" onclick="setLanguage('vi')" style="background:none; border:none; font-size: 1rem; font-weight: 500; cursor:pointer;">VN</button>
      <span style="opacity: 0.3;">|</span>
      <button type="button" onclick="setLanguage('en')" style="background:none; border:none; font-size: 1rem; font-weight: 500; cursor:pointer; opacity: 0.5;">EN</button>
    </div>
    <nav aria-label="Điều hướng di động">
      <a href="custom.html"><span data-i18n="nav_custom">Đặt riêng &amp; Doanh nghiệp</span> <span>01</span></a>
      <a href="shop.html"><span data-i18n="nav_shop">Cửa hàng</span> <span>02</span></a>
      <a href="story.html"><span data-i18n="nav_story">Sứ mệnh HEDY</span> <span>03</span></a>
      <a class="mobile-contact-link" href="contact.html"><span data-i18n="nav_contact">Liên hệ HEDY</span> <span>04</span></a>
    </nav>
    <div class="mobile-menu-note">
      <p data-i18n="mobile_menu_note">Trao đổi đặt riêng và mua sản phẩm bán lẻ<br />là hai hành trình khác nhau.</p>
      <a href="contact.html" data-i18n="mobile_menu_contact">Xem thông tin liên hệ chung →</a>
    </div>
  </div>
`;

const footerMarkup = `
  <footer class="site-footer" data-shared-shell="footer">
    <div class="footer-main section-shell">
      <div class="footer-brand">
        <a href="index.html"><img src="materials/logo.jpg" alt="HEDY ATELIER — Quiet Beauty, Lasting Meaning" width="1254" height="1254" loading="lazy" decoding="async" /></a>
        <p data-i18n="footer_brand_desc">Gốm · Quà tặng · Không gian sống</p>
      </div>
      <div class="footer-note">
        <p data-i18n="footer_note">HEDY Atelier<br />hơn cả một món quà.</p>
        <button class="contact-trigger" type="button" data-contact-source="footer" data-i18n="footer_contact">Chọn Zalo hoặc Instagram ↗</button>
      </div>
      <div class="footer-links">
        <div><span data-i18n="footer_col_1">Khám phá</span><a href="custom.html" data-i18n="nav_custom">Đặt riêng &amp; Doanh nghiệp</a><a href="shop.html" data-i18n="nav_shop">Cửa hàng</a><a href="story.html" data-i18n="nav_story">Sứ mệnh HEDY</a><a href="contact.html" data-i18n="nav_contact">Liên hệ HEDY</a></div>
        <div><span data-i18n="footer_col_2">Chính sách</span><a href="policies.html#giao-hang-va-hu-hong" data-i18n="footer_policy_1">Giao hàng &amp; hư hỏng</a><a href="policies.html#thanh-toan" data-i18n="footer_policy_2">Thanh toán</a><a href="policies.html#doi-tra-huy-hoan" data-i18n="footer_policy_3">Đổi trả &amp; hủy</a></div>
        <div><span data-i18n="footer_col_3">Thông tin</span><a href="policies.html#quyen-rieng-tu" data-i18n="footer_info_1">Quyền riêng tư</a><a href="policies.html#dieu-khoan" data-i18n="footer_info_2">Điều khoản</a><button class="contact-trigger footer-channel-button" type="button" data-contact-source="footer" data-i18n="footer_contact_2">Zalo / Instagram ↗</button></div>
      </div>
    </div>
    <div class="footer-bottom"><span>© 2026 HEDY ATELIER</span><span>Quiet Beauty, Lasting Meaning.</span><div><a href="policies.html#quyen-rieng-tu" data-i18n="footer_btm_1">Riêng tư</a><a href="policies.html#dieu-khoan" data-i18n="footer_btm_2">Điều khoản</a></div></div>
  </footer>
`;

const replaceSharedShell = (selector, markup) => {
  const element = document.querySelector(selector);
  if (element) element.outerHTML = markup.trim();
};

document.querySelectorAll(".announcement").forEach((element) => element.remove());
replaceSharedShell(".site-header", headerMarkup);
replaceSharedShell(".mobile-menu", mobileMenuMarkup);
replaceSharedShell(".site-footer", footerMarkup);

document
  .querySelectorAll(
    ".search-overlay, .contact-dialog, .cart-drawer, .page-scrim, .toast, .cart-live-summary",
  )
  .forEach((element) => element.remove());

const globalUiMarkup = `
  <div class="search-overlay shared-dialog" role="dialog" aria-modal="true" aria-labelledby="search-title" aria-hidden="true" data-dialog="search">
    <button class="dialog-close search-close" type="button" aria-label="Đóng tìm kiếm">×</button>
    <div class="search-panel">
      <p class="eyebrow">Tìm kiếm đồ gốm · HEDY ATELIER</p>
      <h2 id="search-title" tabindex="-1" data-dialog-initial-focus>Bạn đang tìm gì?</h2>
      <form action="search.html">
        <label class="sr-only" for="site-search">Tìm sản phẩm</label>
        <div class="search-field"><input id="site-search" name="q" type="search" placeholder="Chén, bình hoa, quà tân gia…" autocomplete="off" /><button type="submit" aria-label="Gửi tìm kiếm">→</button></div>
      </form>
      
      <div class="search-suggestions">
        <span>Gợi ý theo loại</span>
        <a href="product.html?fixture=multi-variant&amp;variant=suong-bon&amp;from=search">Sản phẩm · Bộ Chén Sớm Mai</a>
        <a href="collection.html?collection=ban-an">Bộ sưu tập · Cho bàn ăn</a>
        <a href="custom.html?source=search">Dịch vụ · Đặt riêng</a>
      </div>
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
        <div class="contact-channel-grid">
          <button class="contact-channel" type="button" data-contact-channel="zalo" aria-pressed="false" aria-describedby="zalo-reason"><span><small>Kênh 01 · xem trước</small><strong>Zalo</strong></span><i aria-hidden="true">↗</i></button>
          <p class="disabled-reason" id="zalo-reason">Điểm đến thật chưa cấu hình; lựa chọn chỉ mô phỏng bước rời website.</p>
          <button class="contact-channel" type="button" data-contact-channel="instagram" aria-pressed="false" aria-describedby="instagram-reason"><span><small>Kênh 02 · xem trước</small><strong>Instagram</strong></span><i aria-hidden="true">↗</i></button>
          <p class="disabled-reason" id="instagram-reason">Điểm đến thật chưa cấu hình; lựa chọn chỉ mô phỏng bước rời website.</p>
        </div>
        <p class="contact-channel-outcome" role="status" aria-live="polite" hidden></p>
        <div class="contact-checklist">
          <p>Bạn có thể sao chép danh sách này trước khi mở kênh:</p>
          <ul>${CONTACT_CHECKLIST.map((item) => `<li>${item}</li>`).join("")}</ul>
          <button class="button button--outline copy-contact-checklist" type="button">Sao chép nội dung cần chuẩn bị</button>
          <p class="inline-confirmation contact-copy-status" role="status" aria-live="polite"></p>
        </div>
        <a class="text-link" href="contact.html">Xem thông tin liên hệ chung <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </div>
  <aside class="cart-drawer shared-dialog" role="dialog" aria-modal="true" aria-labelledby="cart-title" aria-hidden="true" data-dialog="cart">
    <div class="cart-drawer-head"><div><p class="eyebrow" data-i18n="cart_drawer_eyebrow">Giỏ của bạn</p><h2 id="cart-title" tabindex="-1" data-dialog-initial-focus data-i18n="cart_drawer_title">Những món đã chọn.</h2></div><button class="dialog-close cart-close" type="button" aria-label="Đóng giỏ hàng" data-i18n-aria="cart_drawer_close">×</button></div>
    <div class="cart-empty"><h3 data-i18n="cart_drawer_empty_title">[html]Một khoảng trống<br /><em>đang chờ điều đẹp.</em></h3><p data-i18n="cart_drawer_empty_desc">Những món đồ bạn chọn sẽ xuất hiện ở đây để bạn dễ dàng xem lại và tiếp tục đặt mua.</p><a class="button button--dark" href="shop.html" data-i18n="cart_drawer_empty_btn">Bắt đầu khám phá →</a></div>
    <div class="cart-filled" hidden><div class="cart-lines" aria-label="Sản phẩm trong giỏ" data-i18n-aria="cart_drawer_lines_aria"></div><p class="cart-drawer-subtotal"></p><p class="cart-prototype-note" data-i18n="cart_drawer_note">Giá chưa bao gồm phí giao hàng. Phí vận chuyển và thời gian giao sẽ được tính chính xác tại bước thanh toán.</p><div class="cart-drawer-actions"><a class="button button--dark" href="cart.html" data-i18n="cart_drawer_btn_cart">Xem và sửa giỏ →</a><div class="cart-drawer-secondary-actions"><a class="text-link" href="shop.html" data-i18n="cart_drawer_btn_shop">Tiếp tục khám phá</a><button class="cart-clear" type="button" data-i18n="cart_drawer_clear">Làm trống giỏ hàng</button></div></div></div>
  </aside>
  <div class="page-scrim" aria-hidden="true"></div>
  <div class="toast" role="status" aria-live="polite" aria-atomic="true"><span class="toast-icon">✓</span><span class="toast-text">Đã cập nhật</span></div>
  <p class="cart-live-summary sr-only" role="status" aria-live="polite" aria-atomic="true"></p>
`;

body.insertAdjacentHTML("beforeend", globalUiMarkup);

const siteHeader = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const searchOverlay = document.querySelector(".search-overlay");
const contactDialog = document.querySelector(".contact-dialog");
const cartDrawer = document.querySelector(".cart-drawer");
const filterDialog = document.querySelector(".filter-dialog");
const pageScrim = document.querySelector(".page-scrim");
const toast = document.querySelector(".toast");
const cartLiveSummary = document.querySelector(".cart-live-summary");
const panels = [
  mobileMenu,
  searchOverlay,
  contactDialog,
  cartDrawer,
  filterDialog,
].filter(Boolean);
const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
let activePanel = null;
let activeTrigger = null;
let toastTimer;

const getFocusable = (panel) =>
  Array.from(panel.querySelectorAll(focusableSelector)).filter((element) => {
    if (
      element.hidden ||
      element.getAttribute("aria-hidden") === "true" ||
      element.closest("[hidden]")
    )
      return false;
    const style = window.getComputedStyle(element);
    return style.display !== "none" && element.getClientRects().length > 0;
  });

const setBackgroundInert = (inert, panel) => {
  Array.from(body.children).forEach((element) => {
    const shouldRemainInteractive =
      element === panel ||
      element === pageScrim ||
      element === toast ||
      element === cartLiveSummary;
    if ("inert" in element) element.inert = inert && !shouldRemainInteractive;
  });
};

const closePanel = (panel = activePanel, restoreFocus = true) => {
  if (!panel) return;
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  if (panel === mobileMenu) {
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Mở menu");
  }
  pageScrim?.classList.remove("open");
  body.classList.remove(
    "dialog-open",
    "menu-open",
    "overlay-open",
    "cart-open",
    "contact-open",
    "filter-open",
  );
  setBackgroundInert(false, panel);
  const returnTarget = activeTrigger;
  activePanel = null;
  activeTrigger = null;
  if (
    restoreFocus &&
    returnTarget instanceof HTMLElement &&
    returnTarget.isConnected
  )
    returnTarget.focus();
};

const openPanel = (panel, trigger) => {
  if (!panel) return;
  if (activePanel && activePanel !== panel) closePanel(activePanel, false);
  activePanel = panel;
  activeTrigger =
    trigger instanceof HTMLElement ? trigger : document.activeElement;
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  panel.inert = false;
  body.classList.add("dialog-open");
  if (panel === mobileMenu) {
    body.classList.add("menu-open");
    menuButton?.setAttribute("aria-expanded", "true");
    menuButton?.setAttribute("aria-label", "Đóng menu");
  } else if (panel === searchOverlay) {
    body.classList.add("overlay-open");
  } else if (panel === contactDialog) {
    body.classList.add("contact-open");
  } else if (panel === cartDrawer) {
    body.classList.add("cart-open");
    pageScrim?.classList.add("open");
  } else if (panel === filterDialog) {
    body.classList.add("filter-open");
    pageScrim?.classList.add("open");
  }
  panel.getBoundingClientRect();
  panel.getAnimations({ subtree: true }).forEach((animation) => {
    if (animation.transitionProperty === "visibility") animation.finish();
  });
  const initialFocus =
    panel.querySelector("[data-dialog-initial-focus]") ||
    getFocusable(panel)[0];
  initialFocus?.focus({ preventScroll: true });
  setBackgroundInert(true, panel);
  window.requestAnimationFrame(() => {
    if (activePanel === panel && !panel.contains(document.activeElement))
      initialFocus?.focus({ preventScroll: true });
  });
};

document.addEventListener("keydown", (event) => {
  if (!activePanel) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closePanel();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = getFocusable(activePanel);
  if (!focusable.length) {
    event.preventDefault();
    activePanel.querySelector("[data-dialog-initial-focus]")?.focus();
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

menuButton?.addEventListener("click", () => {
  if (activePanel === mobileMenu) closePanel();
  else openPanel(mobileMenu, menuButton);
});

mobileMenu
  ?.querySelector(".mobile-menu-close")
  ?.addEventListener("click", () => closePanel(mobileMenu));

mobileMenu
  ?.querySelectorAll("a")
  .forEach((link) =>
    link.addEventListener("click", () => closePanel(mobileMenu, false)),
  );
document
  .querySelectorAll(".search-trigger")
  .forEach((button) =>
    button.addEventListener("click", () => openPanel(searchOverlay, button)),
  );
searchOverlay
  ?.querySelector(".search-close")
  ?.addEventListener("click", () => closePanel(searchOverlay));
searchOverlay?.addEventListener("click", (event) => {
  if (event.target === searchOverlay) closePanel(searchOverlay);
});
cartDrawer
  ?.querySelector(".cart-close")
  ?.addEventListener("click", () => closePanel(cartDrawer));
filterDialog
  ?.querySelector(".filter-close")
  ?.addEventListener("click", () => closePanel(filterDialog));
document
  .querySelectorAll(".filter-trigger")
  .forEach((button) =>
    button.addEventListener("click", () => openPanel(filterDialog, button)),
  );
pageScrim?.addEventListener("click", () => {
  if (activePanel === cartDrawer || activePanel === filterDialog)
    closePanel(activePanel);
});

const contactStateCopy = {
  default: [
    "Điểm đến đang chờ cấu hình.",
    "Chọn một kênh để xem bước chuyển tiếp mẫu; không có hồ sơ được mở hay tin nhắn được gửi.",
    "pending",
  ],
  contextual: [
    "Ngữ cảnh đã được giữ.",
    "Chọn một kênh để xem nhánh mẫu. Tên fixture được giữ; nội dung tự do không được đưa vào URL.",
    "pending",
  ],
  "zalo-unavailable": [
    "Zalo chưa khả dụng.",
    "Instagram cũng chỉ mở khi HEDY cung cấp điểm đến đã xác nhận.",
    "warning",
  ],
  "instagram-unavailable": [
    "Instagram chưa khả dụng.",
    "Zalo cũng chỉ mở khi HEDY cung cấp điểm đến đã xác nhận.",
    "warning",
  ],
  "open-failure": [
    "Chưa mở được điểm liên hệ bên ngoài.",
    "Thử lại sau, sao chép danh sách cần chuẩn bị hoặc xem thông tin liên hệ chung.",
    "error",
  ],
  offline: [
    "Thiết bị có vẻ đang ngoại tuyến.",
    "Ngữ cảnh vẫn còn ở đây; hãy sao chép danh sách và thử mở kênh sau.",
    "warning",
  ],
};

const safeContactState = (value) =>
  Object.hasOwn(contactStateCopy, value) ? value : "default";
let activeContactState = "default";
let activeContactContext = {
  source: "direct",
  fixture: null,
  label: "Nhu cầu đặt riêng",
};
let activeContactChecklist = [...CONTACT_CHECKLIST];

const getContextChecklist = (context) => {
  const fixtureChecklist = context.fixture
    ? prototypeData.cases?.[context.fixture]?.contactPrompt
    : null;
  return Array.isArray(fixtureChecklist) && fixtureChecklist.length
    ? fixtureChecklist
    : CONTACT_CHECKLIST;
};

const getContactContext = (trigger) => {
  const query = new URLSearchParams(window.location.search);
  const source =
    trigger?.dataset.contactSource || query.get("source") || pageId;
  const fixture = trigger?.dataset.contactFixture || query.get("fixture");
  const explicitLabel = trigger?.dataset.contactLabel;
  const caseFixture = fixture ? prototypeData.cases?.[fixture] : null;
  const productFixture = fixture ? prototypeData.products?.[fixture] : null;
  const fixtureLabel =
    caseFixture?.publicTitle ||
    caseFixture?.sourceLabel ||
    productFixture?.name?.short ||
    fixture;
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
  const banner = contactDialog.querySelector(".contact-state-banner");
  if (banner) {
    banner.className = `status-banner status-banner--${tone} contact-state-banner`;
    banner.querySelector("strong").textContent = title;
    banner.querySelector("span").textContent = message;
  }
  const contextElement = contactDialog.querySelector(".contact-context");
  if (contextElement) {
    const showContext =
      resolvedState === "contextual" ||
      Boolean(context.fixture) ||
      context.source !== "nav";
    contextElement.hidden = !showContext;
    const contextText = contextElement.querySelector("strong");
    if (contextText) contextText.textContent = context.label;
  }
  const copyStatus = contactDialog.querySelector(".contact-copy-status");
  if (copyStatus) copyStatus.textContent = "";
  const checklist = contactDialog.querySelector(".contact-checklist ul");
  if (checklist) {
    checklist.replaceChildren(
      ...activeContactChecklist.map((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        return listItem;
      }),
    );
  }
  const outcome = contactDialog.querySelector(".contact-channel-outcome");
  if (outcome) {
    outcome.hidden = true;
    outcome.textContent = "";
    outcome.removeAttribute("data-tone");
  }
  const channelAvailability = {
    zalo: resolvedState !== "zalo-unavailable" && resolvedState !== "offline",
    instagram:
      resolvedState !== "instagram-unavailable" && resolvedState !== "offline",
  };
  contactDialog.querySelectorAll("[data-contact-channel]").forEach((button) => {
    const channel = button.dataset.contactChannel;
    const isAvailable = channelAvailability[channel];
    button.disabled = !isAvailable;
    button.setAttribute("aria-pressed", "false");
    const reason = contactDialog.querySelector(`#${channel}-reason`);
    if (!reason) return;
    if (resolvedState === "offline")
      reason.textContent =
        "Thiết bị đang ngoại tuyến; sao chép danh sách và thử lại khi có kết nối.";
    else if (!isAvailable)
      reason.textContent = `${channel === "zalo" ? "Zalo" : "Instagram"} không khả dụng trong trạng thái này; chọn kênh còn lại hoặc xem Liên hệ chung.`;
    else
      reason.textContent =
        "Điểm đến thật chưa cấu hình; lựa chọn chỉ mô phỏng bước rời website.";
  });
};

const selectContactChannel = (channel) => {
  if (!contactDialog || !["zalo", "instagram"].includes(channel)) return;
  const button = contactDialog.querySelector(
    `[data-contact-channel="${channel}"]`,
  );
  if (!button || button.disabled) return;
  const outcome = contactDialog.querySelector(".contact-channel-outcome");
  if (!outcome) return;
  contactDialog
    .querySelectorAll("[data-contact-channel]")
    .forEach((item) =>
      item.setAttribute("aria-pressed", String(item === button)),
    );
  outcome.hidden = false;
  if (activeContactState === "open-failure") {
    outcome.dataset.tone = "error";
    outcome.textContent = `Chưa mở được ${channel === "zalo" ? "Zalo" : "Instagram"}. Ngữ cảnh “${activeContactContext.label}” vẫn được giữ; hãy sao chép danh sách, thử lại hoặc chọn kênh còn lại.`;
    return;
  }
  outcome.dataset.tone = "pending";
  outcome.textContent = `${channel === "zalo" ? "Zalo" : "Instagram"} đã được chọn cho “${activeContactContext.label}”. Hệ thống đang chuẩn bị mở kết nối đến kênh hỗ trợ của HEDY ATELIER.`;
};

const bindContactTrigger = (button) => {
  if (button.dataset.contactBound === "true") return;
  button.dataset.contactBound = "true";
  button.addEventListener("click", () => {
    const query = new URLSearchParams(window.location.search);
    const state =
      button.dataset.contactState ||
      (pageId === "contact" ? query.get("state") : null) ||
      (button.dataset.contactFixture ? "contextual" : "default");
    renderContactDialog(state, getContactContext(button));
    openPanel(
      contactDialog,
      button.closest(".mobile-menu") ? menuButton : button,
    );
    if (button.dataset.contactIntent)
      selectContactChannel(button.dataset.contactIntent);
  });
};

document.querySelectorAll(".contact-trigger").forEach(bindContactTrigger);

contactDialog?.querySelectorAll("[data-contact-channel]").forEach((button) => {
  button.addEventListener("click", () =>
    selectContactChannel(button.dataset.contactChannel),
  );
});

contactDialog
  ?.querySelector(".contact-close")
  ?.addEventListener("click", () => closePanel(contactDialog));
contactDialog?.addEventListener("click", (event) => {
  if (event.target === contactDialog) closePanel(contactDialog);
});

const copyText = async (value) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("Copy unavailable");
};

contactDialog
  ?.querySelector(".copy-contact-checklist")
  ?.addEventListener("click", async () => {
    const status = contactDialog.querySelector(".contact-copy-status");
    try {
      await copyText(
        activeContactChecklist.map((item) => `• ${item}`).join("\n"),
      );
      if (status) status.textContent = "Đã sao chép nội dung cần chuẩn bị.";
    } catch {
      if (status)
        status.textContent =
          "Chưa sao chép tự động được. Danh sách vẫn hiển thị để bạn chọn thủ công.";
    }
  });

const initContactPage = () => {
  const pageBanner = document.querySelector("[data-contact-page-banner]");
  if (!pageBanner) return;
  const query = new URLSearchParams(window.location.search);
  const state = safeContactState(query.get("state") || "default");
  const [title, message, tone] = contactStateCopy[state];
  pageBanner.className = `status-banner status-banner--${tone}`;
  pageBanner.querySelector("strong").textContent = title;
  pageBanner.querySelector("span").textContent = message;
  const context = getContactContext(null);
  const pageContext = document.querySelector("[data-contact-page-context]");
  if (pageContext) {
    pageContext.hidden = state !== "contextual" && !context.fixture;
    pageContext.querySelector("strong").textContent = context.label;
  }

};

const showToast = (message, icon = "✓") => {
  if (!toast) return;
  toast.querySelector(".toast-text").textContent = message;
  toast.querySelector(".toast-icon").textContent = icon;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
};

const emptyCart = () => ({
  version: CART_SCHEMA_VERSION,
  updatedAt: null,
  lines: [],
});
const getProduct = (fixtureId) => prototypeData.products?.[fixtureId] || null;
const getVariant = (fixtureId, variantId) =>
  getProduct(fixtureId)?.variants?.find(
    (variant) => variant.id === variantId,
  ) || null;

const sanitizeCartLine = (line) => {
  const product = getProduct(line?.productFixtureId);
  const variant = product?.variants?.find(
    (item) => item.id === line?.variantId,
  );
  const quantity = Number(line?.quantity);
  const unitPriceVnd = Number(line?.unitPriceVnd);
  if (
    !product ||
    !variant ||
    !Number.isInteger(quantity) ||
    quantity < 1 ||
    !Number.isInteger(unitPriceVnd) ||
    unitPriceVnd < 0
  )
    return null;
  return {
    productFixtureId: product.fixtureId,
    variantId: variant.id,
    quantity,
    unitPriceVnd,
    lineStatus:
      typeof line.lineStatus === "string" ? line.lineStatus : "current",
    selected: line.selected !== false,
  };
};

const defaultSeedCartLines = [
  {
    productFixtureId: "mug-sand",
    variantId: "men-cat",
    quantity: 2,
    unitPriceVnd: 360000,
    lineStatus: "current",
    selected: true,
  },
  {
    productFixtureId: "simple-in-stock",
    variantId: "kem",
    quantity: 1,
    unitPriceVnd: 520000,
    lineStatus: "current",
    selected: true,
  },
  {
    productFixtureId: "tray-stone",
    variantId: "da-moc",
    quantity: 1,
    unitPriceVnd: 680000,
    lineStatus: "current",
    selected: true,
  },
  {
    productFixtureId: "vase-dew",
    variantId: "suong-mo",
    quantity: 1,
    unitPriceVnd: 750000,
    lineStatus: "current",
    selected: true,
  },
];

const readCart = () => {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) {
      return {
        version: CART_SCHEMA_VERSION,
        updatedAt: new Date().toISOString(),
        lines: defaultSeedCartLines.map(sanitizeCartLine).filter(Boolean),
      };
    }
    const stored = JSON.parse(raw);
    if (
      stored?.version !== CART_SCHEMA_VERSION ||
      !Array.isArray(stored.lines)
    ) {
      return {
        version: CART_SCHEMA_VERSION,
        updatedAt: new Date().toISOString(),
        lines: defaultSeedCartLines.map(sanitizeCartLine).filter(Boolean),
      };
    }
    return {
      version: CART_SCHEMA_VERSION,
      updatedAt: typeof stored.updatedAt === "string" ? stored.updatedAt : null,
      lines: stored.lines.map(sanitizeCartLine).filter(Boolean),
    };
  } catch {
    return {
      version: CART_SCHEMA_VERSION,
      updatedAt: null,
      lines: defaultSeedCartLines.map(sanitizeCartLine).filter(Boolean),
    };
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

const formatVnd = (value) => new Intl.NumberFormat("vi-VN").format(value) + "₫";
const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
const getAsset = (assetId) => prototypeData.assets?.[assetId] || null;
const getAssetPath = (assetId) => getAsset(assetId)?.path || null;
const getPrimaryAssetRecord = (product, variant = null) => {
  if (variant?.primaryAssetId)
    return getAsset(variant.primaryAssetId) || getAsset("logo");
  const media = product?.media?.find(
    (item) => item.status === "prototype-only" && getAssetPath(item.assetId),
  );
  return getAsset(media?.assetId) || getAsset("logo");
};
const getPrimaryAsset = (product, variant = null) =>
  getPrimaryAssetRecord(product, variant)?.path || "materials/logo.jpg";

const renderCart = () => {
  const count = cartState.lines.reduce(
    (total, line) => total + line.quantity,
    0,
  );
  document.querySelectorAll(".bag-count").forEach((element) => {
    element.textContent = String(count);
  });
  document
    .querySelectorAll(".bag-button")
    .forEach((button) =>
      button.setAttribute("aria-label", window.t ? `${window.t("Giỏ hàng")}, ${count} ${window.t("sản phẩm")}` : `Giỏ hàng, ${count} sản phẩm`),
    );
  const emptyState = cartDrawer?.querySelector(".cart-empty");
  const filledState = cartDrawer?.querySelector(".cart-filled");
  const linesElement = cartDrawer?.querySelector(".cart-lines");
  if (!emptyState || !filledState || !linesElement) return;
  emptyState.hidden = count > 0;
  filledState.hidden = count === 0;
  linesElement.replaceChildren();
  const subtotal = cartState.lines.reduce(
    (total, line) => total + line.unitPriceVnd * line.quantity,
    0,
  );
  const subtotalElement = cartDrawer?.querySelector(".cart-drawer-subtotal");
  if (subtotalElement) {
    const prefix = window.t ? window.t("Tạm tính minh họa") : "Tạm tính minh họa";
    subtotalElement.textContent = `${prefix} · ${formatVnd(subtotal)}`;
  }
  cartState.lines.forEach((line) => {
    const product = getProduct(line.productFixtureId);
    const variant = getVariant(line.productFixtureId, line.variantId);
    const asset = getPrimaryAssetRecord(product, variant);
    const article = document.createElement("article");
    article.className = "cart-line";
    article.dataset.cartLine = `${line.productFixtureId}:${line.variantId}`;
    article.innerHTML = `
      <img src="${asset.path}" alt="" width="${asset.width}" height="${asset.height}" loading="lazy" decoding="async" style="--media-focal: ${asset.focalPoint || "50% 50%"}" />
      <div class="cart-line-copy"><strong>${window.t ? window.t(product.name.short) : product.name.short}</strong><small>${window.t ? window.t(variant.label) : variant.label} · ${window.t ? window.t("SL") : "SL"} ${line.quantity}</small><span>${formatVnd(line.unitPriceVnd)} / ${window.t ? window.t("món") : "món"} · ${window.t ? window.t("minh họa") : "minh họa"}</span><button class="cart-line-remove" type="button">${window.t ? window.t("Xóa") : "Xóa"} <span class="sr-only">${window.t ? window.t(product.name.short) : product.name.short}, ${window.t ? window.t(variant.label) : variant.label}</span></button></div>
    `;
    linesElement.appendChild(article);
  });
};

const announceCart = (message) => {
  if (cartLiveSummary) cartLiveSummary.textContent = message;
  showToast(message);
};

const knownProductMap = {
  "Bộ Chén Sớm Mai": { fixtureId: "multi-variant", variantId: "suong-bon" },
  "Đĩa Lá Nhỏ": { fixtureId: "simple-in-stock", variantId: "kem" },
  "Hộp Nhà Có Hoa": { fixtureId: "fragile-large", variantId: "kem-lon" },
};

const resolveAddRequest = (button) => {
  const selectedVariantButton = document.querySelector(
    ".variant-option.is-active",
  );
  const isProductAction =
    button.classList.contains("product-add") ||
    button.closest(".mobile-purchase-bar");
  const mapped = knownProductMap[button.dataset.product];
  const fixtureId =
    button.dataset.fixtureId ||
    (isProductAction ? "multi-variant" : mapped?.fixtureId);
  const variantId =
    button.dataset.variantId ||
    (isProductAction
      ? selectedVariantButton?.dataset.variantId
      : mapped?.variantId);
  const quantity = button.classList.contains("product-add")
    ? Number(document.querySelector(".quantity-value")?.textContent || 1)
    : 1;
  const variant = getVariant(fixtureId, variantId);
  if (
    !fixtureId ||
    !variantId ||
    !variant ||
    !Number.isInteger(variant.priceVnd)
  )
    return null;
  return { fixtureId, variantId, quantity, variant };
};

const showInlineConfirmation = (button, message, tone = "success") => {
  const scope =
    button.closest(".purchase-form, .product-card, .mobile-purchase-bar") ||
    button.parentElement;
  if (!scope) return;
  let status = scope.querySelector(".add-inline-confirmation");
  if (!status) {
    status = document.createElement("p");
    status.className = "inline-confirmation add-inline-confirmation";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    scope.appendChild(status);
  }
  status.dataset.tone = tone;
  status.textContent = message;
};

const addCartRequest = (request, button) => {
  if (!request) {
    const message =
      "Món này chưa có fixture bán lẻ tương ứng nên chưa được thêm vào giỏ.";
    showInlineConfirmation(button, message, "warning");
    showToast(message, "!");
    return false;
  }
  if (
    request.variant.inventory?.state !== "in-stock" ||
    !["retail", "retail-manual-delivery"].includes(
      request.variant.retailEligibility,
    )
  ) {
    const message =
      "Lựa chọn này không có hành động mua bán lẻ; ngữ cảnh đặt riêng vẫn khả dụng.";
    showInlineConfirmation(button, message, "warning");
    showToast(message, "!");
    return false;
  }
  const existingLine = cartState.lines.find(
    (line) =>
      line.productFixtureId === request.fixtureId &&
      line.variantId === request.variantId,
  );
  const maxQuantity = request.variant.inventory.sellableQuantity;
  if (existingLine) {
    existingLine.quantity = Math.min(
      existingLine.quantity + request.quantity,
      maxQuantity,
    );
    existingLine.selected = true;
    if (existingLine.unitPriceVnd !== request.variant.priceVnd) {
      existingLine.lineStatus = "price-changed";
    }
  } else {
    cartState.lines.push({
      productFixtureId: request.fixtureId,
      variantId: request.variantId,
      quantity: Math.min(request.quantity, maxQuantity),
      unitPriceVnd: request.variant.priceVnd,
      lineStatus: "current",
      selected: true,
    });
  }
  const saved = saveCart();
  renderCart();
  const product = getProduct(request.fixtureId);
  const message = `${product.name.short} · ${request.variant.label} × ${request.quantity} đã được thêm vào giỏ.`;
  showInlineConfirmation(
    button,
    saved ? message : `${message} Trình duyệt không cho phép lưu lâu dài.`,
    saved ? "success" : "warning",
  );
  announceCart(message);
  return true;
};

document
  .querySelectorAll(".bag-button")
  .forEach((button) =>
    button.addEventListener("click", () => openPanel(cartDrawer, button)),
  );

document.querySelectorAll(".add-to-bag").forEach((button) => {
  button.addEventListener("click", () => {
    const request = resolveAddRequest(button);
    addCartRequest(request, button);
  });
});

cartDrawer?.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".cart-line-remove");
  if (!removeButton) return;
  const lineElement = removeButton.closest("[data-cart-line]");
  const [fixtureId, variantId] = lineElement.dataset.cartLine.split(":");
  const product = getProduct(fixtureId);
  cartState.lines = cartState.lines.filter(
    (line) =>
      line.productFixtureId !== fixtureId || line.variantId !== variantId,
  );
  saveCart();
  renderCart();
  announceCart(`${product?.name?.short || "Sản phẩm"} đã được xóa khỏi giỏ.`);
});

cartDrawer?.querySelector(".cart-clear")?.addEventListener("click", () => {
  cartState = emptyCart();
  saveCart();
  renderCart();
  announceCart("Đã làm trống giỏ mẫu.");
});

document.querySelectorAll(".newsletter-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    if (message)
      message.textContent =
        "Biểu mẫu mẫu đã nhận địa chỉ trong phiên này nhưng không đăng ký hoặc gửi email thật.";
    form.reset();
  });
});

const galleryMain = document.querySelector("[data-gallery-main]");
const galleryCounter = document.querySelector(".image-counter");
document.querySelectorAll(".gallery-thumb").forEach((button) => {
  button.addEventListener("click", () => {
    if (!galleryMain) return;
    galleryMain.src = button.dataset.image || galleryMain.src;
    galleryMain.alt = button.dataset.alt || galleryMain.alt;
    document.querySelectorAll(".gallery-thumb").forEach((thumb) => {
      const isActive = thumb === button;
      thumb.classList.toggle("is-active", isActive);
      thumb.setAttribute("aria-pressed", String(isActive));
    });
    if (galleryCounter)
      galleryCounter.textContent = `${button.dataset.index} / 04`;
  });
});

let productMaxQuantity = 5;
const quantityValue = document.querySelector(".quantity-value");
const setQuantity = (nextQuantity) => {
  if (!quantityValue) return;
  quantityValue.textContent = String(
    Math.min(Math.max(nextQuantity, 1), productMaxQuantity),
  );
};
document
  .querySelector(".quantity-minus")
  ?.addEventListener("click", () =>
    setQuantity(Number(quantityValue?.textContent || 1) - 1),
  );
document.querySelector(".quantity-plus")?.addEventListener("click", () => {
  const current = Number(quantityValue?.textContent || 1);
  if (current >= productMaxQuantity) {
    showToast(
      `Phiên bản này hiện giới hạn ${productMaxQuantity} trong fixture mẫu.`,
      "!",
    );
    return;
  }
  setQuantity(current + 1);
});

document.querySelectorAll(".variant-option").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".variant-option").forEach((option) => {
      const isActive = option === button;
      option.classList.toggle("is-active", isActive);
      option.setAttribute("aria-pressed", String(isActive));
    });
    const variant = getVariant("multi-variant", button.dataset.variantId);
    document.querySelector(".selected-variant").textContent =
      button.dataset.variant || variant?.label || "";
    document
      .querySelectorAll(".product-detail-price, .mobile-product-price")
      .forEach((element) => {
        element.textContent =
          button.dataset.price || (variant ? formatVnd(variant.priceVnd) : "");
      });
    if (document.querySelector(".product-stock"))
      document.querySelector(".product-stock").textContent =
        button.dataset.stock || "";
    if (document.querySelector(".product-sku"))
      document.querySelector(".product-sku").textContent =
        button.dataset.sku || "";
    productMaxQuantity = Math.max(variant?.inventory?.sellableQuantity || 1, 1);
    setQuantity(1);
    const productAdd = document.querySelector(".product-add");
    const mobileAdd = document.querySelector(
      ".mobile-purchase-bar .add-to-bag",
    );
    [productAdd, mobileAdd].filter(Boolean).forEach((addButton) => {
      addButton.dataset.variantId = button.dataset.variantId || "";
    });
  });
});

const giftToggle = document.querySelector(".gift-toggle");
const giftMessageWrap = document.querySelector(".gift-message");
const giftMessageInput = document.querySelector("#gift-message");
giftToggle?.addEventListener("change", () => {
  if (!giftMessageWrap) return;
  giftMessageWrap.hidden = !giftToggle.checked;
  if (giftToggle.checked) giftMessageInput?.focus();
});
giftMessageInput?.addEventListener("input", () => {
  const counter = document.querySelector(".gift-message label span");
  if (counter) counter.textContent = `${giftMessageInput.value.length} / 160`;
});

const catalogGrid = document.querySelector("#catalog-grid");
const catalogCards = catalogGrid
  ? Array.from(catalogGrid.querySelectorAll(".product-card"))
  : [];
const resultCount = document.querySelector(".result-count");
const catalogEmpty = document.querySelector(".catalog-empty");
const loadMoreButton = document.querySelector(".load-more");
let hasLoadedAll = false;
let activeFilter = "all";
const applyCatalogFilter = () => {
  let visibleCount = 0;
  catalogCards.forEach((card) => {
    const categories = card.dataset.category?.split(" ") || [];
    const matches = activeFilter === "all" || categories.includes(activeFilter);
    const hiddenAsExtra =
      card.classList.contains("catalog-extra") &&
      !hasLoadedAll &&
      activeFilter === "all";
    card.classList.toggle("is-filtered-out", !matches);
    card.classList.toggle("is-loaded", !hiddenAsExtra);
    if (matches && !hiddenAsExtra) visibleCount += 1;
  });
  if (resultCount) resultCount.textContent = String(visibleCount);
  if (catalogEmpty) catalogEmpty.hidden = visibleCount > 0;
  if (loadMoreButton)
    loadMoreButton.hidden = hasLoadedAll || activeFilter !== "all";
};
document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";
    document.querySelectorAll(".filter-chip").forEach((chip) => {
      const isActive = chip === button;
      chip.classList.toggle("is-active", isActive);
      chip.setAttribute("aria-pressed", String(isActive));
    });
    applyCatalogFilter();
  });
});
loadMoreButton?.addEventListener("click", () => {
  hasLoadedAll = true;
  applyCatalogFilter();
  catalogGrid?.querySelector(".catalog-extra")?.querySelector("a")?.focus();
});
document.querySelector("#product-sort")?.addEventListener("change", (event) => {
  const value = event.currentTarget.value;
  const sorted = [...catalogCards].sort((a, b) => {
    if (value === "price-low")
      return Number(a.dataset.price) - Number(b.dataset.price);
    if (value === "price-high")
      return Number(b.dataset.price) - Number(a.dataset.price);
    if (value === "newest")
      return Number(b.dataset.order) - Number(a.dataset.order);
    return Number(a.dataset.order) - Number(b.dataset.order);
  });
  sorted.forEach((card) => catalogGrid?.appendChild(card));
});
if (catalogGrid) applyCatalogFilter();

const initPhase3Home = () => {
  if (pageId !== "home") return;
  const query = new URLSearchParams(window.location.search);
  const allowedStates = Object.keys(
    prototypeData.experienceFixtures?.home || {},
  );
  const requestedState = query.get("state") || "default";
  const state = allowedStates.includes(requestedState)
    ? requestedState
    : "default";
  body.dataset.phaseState = state;

  const heroMedia = document.querySelector("[data-home-hero-media]");
  const heroImage = heroMedia?.querySelector(".custom-home-hero-image");
  const fallback = heroMedia?.querySelector("[data-home-media-fallback]");
  const fallbackText = fallback?.querySelector("p");
  if (heroMedia && heroImage && fallback) {
    const isSlow = state === "slow-hero-media";
    const isFailed = state === "failed-hero-media";
    heroMedia.classList.toggle("is-media-slow", isSlow);
    heroMedia.classList.toggle("is-media-failed", isFailed);
    heroImage.hidden = isSlow || isFailed;
    fallback.hidden = !isSlow && !isFailed;
    if (fallbackText && isSlow)
      fallbackText.textContent =
        "Hình mở đầu đang tải; nội dung Đặt riêng và các lối đi vẫn dùng được.";
    if (fallbackText && isFailed)
      fallbackText.textContent =
        "Không tải được hình mở đầu. Bạn vẫn có thể xem quy trình, chuẩn bị yêu cầu hoặc vào Cửa hàng.";
  }

  const noCases = state === "no-cases";
  const caseGrid = document.querySelector("[data-home-case-grid]");
  const caseEmpty = document.querySelector("[data-home-case-empty]");
  if (caseGrid) caseGrid.hidden = noCases;
  if (caseEmpty) caseEmpty.hidden = !noCases;

  const noProducts = state === "no-featured-products";
  const productGrid = document.querySelector("[data-home-product-grid]");
  const productEmpty = document.querySelector("[data-home-product-empty]");
  if (productGrid) productGrid.hidden = noProducts;
  if (productEmpty) productEmpty.hidden = !noProducts;

  if (state === "operational-announcement") {
    const announcement = document.querySelector(".announcement");
    const pendingCopy =
      prototypeData.experienceFixtures?.content?.["operational-announcement"]
        ?.customerText ||
      "Thông báo vận hành sẽ xuất hiện sau khi nội dung và thời hạn áp dụng được duyệt.";
    if (announcement) {
      announcement.querySelector("p").textContent = pendingCopy;
      announcement.querySelector("a").textContent = "Trạng thái chờ duyệt ↗";
      announcement.querySelector("a").href = "policies.html#pham-vi-ban-mau";
    }
  }
  const reviewView = query.get("view");
  const reviewTarget =
    reviewView === "consultation"
      ? document.querySelector("#consultation")
      : reviewView === "top"
        ? document.documentElement
        : null;
  if (reviewTarget) {
    reviewTarget.classList?.add("visible");
    if (reviewView === "consultation") {
      Array.from(document.querySelector("main").children).forEach((section) => {
        section.hidden = section !== reviewTarget;
      });
    }
    const positionReviewTarget = () => window.scrollTo(0, 0);
    positionReviewTarget();
    window.addEventListener("load", positionReviewTarget, { once: true });
    window.setTimeout(positionReviewTarget, 120);
  }

  const slider = document.querySelector('[data-home-collections-slider]');
  if (slider) {
    const prevBtn = document.querySelector('.prev-collection');
    const nextBtn = document.querySelector('.next-collection');
    
    if (prevBtn && nextBtn) {
      const updateSliderButtons = () => {
        prevBtn.disabled = slider.scrollLeft <= 0;
        nextBtn.disabled = Math.ceil(slider.scrollLeft + slider.clientWidth) >= slider.scrollWidth;
      };

      slider.addEventListener('scroll', updateSliderButtons, { passive: true });
      window.addEventListener('resize', updateSliderButtons, { passive: true });
      
      const getScrollAmount = () => {
        const slide = slider.querySelector('.collection-slide');
        return slide ? slide.clientWidth + parseFloat(window.getComputedStyle(slider).gap || 0) : slider.clientWidth / 2;
      };

      prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
      });

      nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
      });
      
      setTimeout(updateSliderButtons, 100);
    }
  }
};

const customContextMap = {
  individual: {
    fixtureId: "individual-personalized",
    label: "Quà tặng cá nhân",
  },
  corporate: { fixtureId: "corporate-volume", label: "Quà tặng doanh nghiệp" },
  hospitality: { fixtureId: "hospitality-venue", label: "Gốm cho không gian" },
  other: { fixtureId: null, label: "Nhu cầu khác hoặc chưa gọi tên" },
};

const b2bCollectionsData = {
  partner: {
    category: "Quà đối tác",
    title: "Bộ Sưu Tập Trà Đạo Trầm Vân",
    summary:
      "Tác phẩm gốm mộc nung tro củi kết hợp quai gỗ óc chó tự nhiên, đóng hộp lụa sang trọng dành tặng đối tác VIP và lãnh đạo cấp cao.",
    packaging:
      "Hộp quà cứng lót lụa định hình, ép nhũ kim logo doanh nghiệp, kèm thiệp thư cảm ơn riêng.",
    products: [
      {
        name: "Ấm Trà Gốm Mộc Quai Gỗ Óc Chó",
        specs:
          "Dung tích 450ml · Gốm nung củi 1.280°C · Quai gỗ óc chó tự nhiên",
        img: "assets/b2b/products/partner-1-teapot.jpg",
        note: "Khắc chìm logo tinh tế trên nắp ấm",
      },
      {
        name: "Bộ 4 Chén Trà Men Tro Nung Củi",
        specs:
          "Dung tích 65ml/chén · Men tro khoáng tự nhiên · Viền miệng vuốt tay",
        img: "assets/b2b/products/partner-2-cups.jpg",
        note: "In logo thương hiệu chìm dưới đáy chén",
      },
      {
        name: "Hũ Đựng Trà Gốm Kín Khí",
        specs:
          "Chứa 100g trà · Nắp gỗ óc chó chốt đồng kín khí bảo quản hương trà",
        img: "assets/b2b/products/partner-3-caddy.jpg",
        note: "Khắc laser tên doanh nghiệp trên nắp gỗ",
      },
      {
        name: "Khay Trà Gỗ Sồi Khảm Gốm Mộc",
        specs:
          "Kích thước 32 x 22cm · Gỗ sồi nhập khẩu chống thấm · Lòng đĩa gốm mộc",
        img: "assets/b2b/products/partner-4-tray.jpg",
        note: "Gia công góc cạnh tỉ mỉ, mộc mạc và sang trọng",
      },
      {
        name: "Hộp Quà Sơn Mài & Lụa Định Hình",
        specs:
          "Kích thước 38 x 28 x 14cm · Khung cứng bọc vải linen lót lụa tơ tằm",
        img: "assets/b2b/products/partner-5-box.jpg",
        note: "Dập nhũ kim logo doanh nghiệp và nẹp đai thương hiệu",
      },
    ],
  },
  tet: {
    category: "Quà Tết",
    title: "Bộ Sưu Tập Khay Mứt Men Ngọc Đoàn Viên",
    summary:
      "Sự giao hòa giữa gốm sứ men ngọc thanh tao và nắp gỗ khắc hoa sen cổ truyền, mang lời chúc thịnh vượng đầu xuân đến đối tác và tập thể nhân viên.",
    packaging:
      "Hộp quà Tết màu đỏ trầm nẹp nơ lụa cao cấp, phong bao thiệp chúc xuân ép kim thiết kế riêng.",
    products: [
      {
        name: "Khay Mứt Gốm 5 Ngăn Men Ngọc",
        specs: "Đường kính 30cm · 5 ngăn gốm sứ men ngọc tháo rời tiện lợi",
        img: "assets/b2b/products/tet-1-jambox.jpg",
        note: "Nung men ngọc hỏa biến chống bám màu đường mứt",
      },
      {
        name: "Nắp Gỗ Chạm Khắc Sen Cổ Truyền",
        specs: "Gỗ óc chó chạm khắc nổi hoa văn hoa sen và chữ Phúc Lộc",
        img: "assets/b2b/products/tet-2-woodlid.jpg",
        note: "Khắc logo doanh nghiệp kín đáo cạnh hoa văn sen",
      },
      {
        name: "Bộ Đôi Chén Thưởng Trà Xuân",
        specs: "Dung tích 80ml · Men lam ngọc vết rạn cổ điển thanh thoát",
        img: "assets/b2b/products/tet-3-teaset.jpg",
        note: "Thích hợp nhâm nhi trà xuân cùng mứt Tết",
      },
      {
        name: "Hũ Gốm Đựng Hạt Mứt Đầu Năm",
        specs: "Dung tích 350ml · Men ngọc nắp gỗ tròn kín khí giữ độ giòn hạt",
        img: "assets/b2b/products/tet-4-jar.jpg",
        note: "In họa tiết hoa mai xuân nhẹ nhàng",
      },
      {
        name: "Bình Hoa Lộc Xuân Men Rạn Dáng Cổ",
        specs: "Chiều cao 18cm · Dáng hồ lô tụ khí tài lộc cắm đào xuân",
        img: "assets/b2b/products/tet-5-vase.jpg",
        note: "Điểm nhấn tao nhã cho không gian Tết",
      },
    ],
  },
  health: {
    category: "Quà tặng sức khoẻ",
    title: "Bộ Sưu Tập Gốm Sứ Dưỡng Sinh An Lành",
    summary:
      "Chế tác từ đất khoáng tự nhiên nung 1.280°C, không chứa chì hay kim loại nặng, giữ trọn vi chất dinh dưỡng và gửi gắm thông điệp trường thọ.",
    packaging:
      "Hộp quà sinh thái bọc giấy mỹ thuật xơ thực vật, đệm định hình chống sốc tuyệt đối.",
    products: [
      {
        name: "Nồi Sứ Dưỡng Sinh Nấu Chậm (Casserole)",
        specs:
          "Dung tích 2.2L · Chịu sốc nhiệt -20°C đến 500°C · Nấu bếp ga, lò nướng, hồng ngoại",
        img: "assets/b2b/products/health-1-pot.jpg",
        note: "Khắc chìm biểu trưng thương hiệu trên quai nồi",
      },
      {
        name: "Set Thố Tiềm & Bát Yến Gốm Trắng Ngà",
        specs: "Thố tiềm 600ml nắp kín + 2 bát yến men sứ mịn màng giữ nhiệt",
        img: "assets/b2b/products/health-2-stew.jpg",
        note: "An toàn tuyệt đối trong lò vi sóng và máy rửa bát",
      },
      {
        name: "Bình Thủy Gốm Khoáng Thanh Lọc",
        specs: "Dung tích 1.0L · Gốm xốp vi khoáng cân bằng kiềm tự nhiên",
        img: "assets/b2b/products/health-3-carafe.jpg",
        note: "Giúp nước uống ngọt lành và giàu khoáng chất",
      },
      {
        name: "Bộ 4 Bát Ăn Dưỡng Sinh Men Tro",
        specs:
          "Đường kính 11.5cm · Gốm nung củi chịu va đập tốt, men khoáng mịn",
        img: "assets/b2b/products/health-4-bowl.jpg",
        note: "In logo thương hiệu chìm tinh tế dưới đáy bát",
      },
      {
        name: "Cặp Cốc Gốm Lọc Trà Thảo Mộc",
        specs: "Dung tích 380ml · Kèm lõi lọc gốm đục lỗ và nắp giữ hương",
        img: "assets/b2b/products/health-5-mug.jpg",
        note: "Tối ưu cho thói quen uống trà thảo mộc văn phòng",
      },
    ],
  },
  souvenir: {
    category: "Quà lưu niệm",
    title: "Bộ Sưu Tập Gốm Nghệ Thuật Dấu Ấn Kỷ Niệm",
    summary:
      "Tác phẩm gốm điêu khắc độc bản tôn vinh các dấu mốc thành lập, kỷ niệm chuyển đổi số hoặc vinh danh đối tác gắn bó lâu năm.",
    packaging:
      "Hộp quà vải nhung lót mút định hình, có ngăn kẹp chứng nhận tác phẩm độc bản.",
    products: [
      {
        name: "Bình Hoa Điêu Khắc Rãnh Gân Độc Bản",
        specs: "Chiều cao 26cm · Gốm men kem ngọc vuốt tay điêu khắc rãnh gân",
        img: "assets/b2b/products/souvenir-1-vase.jpg",
        note: "Khắc laser dấu mốc kỷ niệm trên đế gốm",
      },
      {
        name: "Đĩa Biểu Trưng Gốm Men Lam Khắc Nổi",
        specs: "Đường kính 28cm · Khắc nổi công trình hoặc biểu trưng tổ chức",
        img: "assets/b2b/products/souvenir-2-plaque.jpg",
        note: "Kèm giá đỡ gỗ sồi tự nhiên để bàn trang trọng",
      },
      {
        name: "Bình Gốm Men Kem Dáng Cổ Điển",
        specs: "Chiều cao 22cm · Men rạn tro tự nhiên mang vẻ đẹp vĩnh cửu",
        img: "assets/b2b/products/souvenir-3-artvase.jpg",
        note: "Thích hợp trang trí phòng khách và phòng làm việc",
      },
      {
        name: "Tượng Linh Vật Gốm Phong Thủy May Mắn",
        specs: "Kích thước 18 x 14cm · Điêu khắc thủ công nung nhiệt cao",
        img: "assets/b2b/products/souvenir-4-sculpture.jpg",
        note: "Tượng trưng cho sự bền vững, hanh thông và phát triển",
      },
      {
        name: "Cốc Sứ Men Tro Kỷ Niệm Thành Lập",
        specs: "Dung tích 350ml · Men mờ vân đá, tay cầm thủ công tinh xảo",
        img: "assets/b2b/products/souvenir-5-mug.jpg",
        note: "In niên đại và thông điệp sự kiện của tổ chức",
      },
    ],
  },
  gratitude: {
    category: "Quà tri ân",
    title: "Hộp Quà Tri Ân Nguyệt Dạ Thanh Lịch",
    summary:
      "Món quà tri ân ấm áp kết hợp bộ đôi ly gốm thủ công men hạt cát, thìa gỗ sồi và thiệp thư cảm ơn viết tay trân trọng.",
    packaging:
      "Hộp quà giấy mỹ thuật bọc vải linen, nẹp đai và phong bao sáp niêm phong thiệp chúc mừng.",
    products: [
      {
        name: "Hộp Quà Tri Ân Toàn Diện Nguyệt Dạ",
        specs:
          "Kích thước 34 x 24 x 12cm · Bọc vải linen, sáp niêm phong cao cấp",
        img: "assets/b2b/products/gratitude-1-box.jpg",
        note: "Trọn bộ quà tặng tri ân hoàn chỉnh trao tay",
      },
      {
        name: "Cặp Cốc Gốm Men Hạt Cát Thủ Công",
        specs: "Dung tích 320ml/cốc · Men mờ đốm cát tự nhiên, quai cầm êm ái",
        img: "assets/b2b/products/gratitude-4-cups.jpg",
        note: "In khắc logo thương hiệu tối giản ở thân cốc",
      },
      {
        name: "Set Tinh Dầu Thơm & Nhành Khuynh Diệp",
        specs:
          "Lọ tinh dầu 30ml thiên nhiên + nhành khuynh diệp sấy khô thanh tao",
        img: "assets/b2b/products/gratitude-2-diffuser.jpg",
        note: "Mang lại cảm giác thư thái, giải tỏa căng thẳng",
      },
      {
        name: "Lọ Hoa Gốm Mini Bàn Làm Việc",
        specs: "Chiều cao 12cm · Gốm mộc tạo điểm nhấn an lành mỗi ngày",
        img: "assets/b2b/products/gratitude-3-deskvase.jpg",
        note: "Kèm nhánh hoa khô trang trí bàn làm việc",
      },
      {
        name: "Bộ Đôi Chén Trà & Đĩa Gỗ Nhâm Nhi",
        specs: "2 chén trà nhỏ men tro + đĩa bánh gỗ sồi tiện dụng",
        img: "assets/b2b/products/gratitude-5-tea.jpg",
        note: "Gửi gắm lời cảm ơn chân thành đến người nhận",
      },
    ],
  },
};

const initPhase3Custom = () => {
  if (pageId !== "custom") return;

  // 1. Tab Switching for Corporate Gifts
  const tabButtons = document.querySelectorAll(".b2b-tab-btn");
  const tabPanels = document.querySelectorAll(".b2b-tab-panel");

  const switchTab = (targetId) => {
    tabButtons.forEach((btn) => {
      const isActive = btn.dataset.tabTarget === targetId;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    tabPanels.forEach((panel) => {
      const isTarget = panel.id === `panel-${targetId}`;
      panel.classList.toggle("is-active", isTarget);
    });
  };

  tabButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      switchTab(btn.dataset.tabTarget);
    });

    btn.addEventListener("keydown", (e) => {
      let targetIndex = null;
      if (e.key === "ArrowRight") {
        targetIndex = (index + 1) % tabButtons.length;
      } else if (e.key === "ArrowLeft") {
        targetIndex = (index - 1 + tabButtons.length) % tabButtons.length;
      } else if (e.key === "Home") {
        targetIndex = 0;
      } else if (e.key === "End") {
        targetIndex = tabButtons.length - 1;
      }
      if (targetIndex !== null) {
        e.preventDefault();
        tabButtons[targetIndex].focus();
        switchTab(tabButtons[targetIndex].dataset.tabTarget);
      }
    });
  });

  // Query parameter tab support
  const query = new URLSearchParams(window.location.search);
  const requestedTab = query.get("tab") || query.get("gift-tab");
  if (requestedTab && document.getElementById(`panel-${requestedTab}`)) {
    switchTab(requestedTab);
  }

  // 2. Collection Showcase Modal Controller
  const modalOverlay = document.getElementById("b2b-collection-modal");
  const modalCategoryEl = document.getElementById("b2b-modal-category");
  const modalTitleEl = document.getElementById("b2b-modal-title");
  const modalSummaryEl = document.getElementById("b2b-modal-summary");
  const modalMainImg = document.getElementById("b2b-modal-main-img");
  const modalCaptionName = document.getElementById("b2b-modal-caption-name");
  const modalCaptionNote = document.getElementById("b2b-modal-caption-note");
  const modalThumbsContainer = document.getElementById(
    "b2b-modal-thumbs-container",
  );
  const modalItemsList = document.getElementById("b2b-modal-items-list");
  const modalPackagingText = document.getElementById(
    "b2b-modal-packaging-text",
  );
  const modalCloseBtn = document.getElementById("b2b-modal-close-btn");
  const modalDismissBtn = document.getElementById("b2b-modal-dismiss-btn");
  const modalConsultBtn = document.getElementById("b2b-modal-consult-btn");
  let currentActiveCollectionKey = "partner";

  const selectModalItem = (collectionData, itemIndex) => {
    const item = collectionData.products[itemIndex];
    if (!item) return;

    if (modalMainImg) {
      modalMainImg.style.opacity = "0.3";
      setTimeout(() => {
        modalMainImg.src = item.img;
        modalMainImg.alt = item.name;
        modalMainImg.style.opacity = "1";
      }, 150);
    }
    if (modalCaptionName)
      modalCaptionName.textContent = `0${itemIndex + 1}. ${item.name}`;
    if (modalCaptionNote)
      modalCaptionNote.textContent = item.note || item.specs;

    if (modalThumbsContainer) {
      const thumbs = modalThumbsContainer.querySelectorAll(
        ".b2b-modal-thumb-btn",
      );
      thumbs.forEach((t, i) =>
        t.classList.toggle("is-active", i === itemIndex),
      );
    }
    if (modalItemsList) {
      const rows = modalItemsList.querySelectorAll(".b2b-modal-item");
      rows.forEach((r, i) =>
        r.classList.toggle("is-selected", i === itemIndex),
      );
    }
  };

  const openCollectionModal = (collectionKey) => {
    const data =
      b2bCollectionsData[collectionKey] || b2bCollectionsData.partner;
    currentActiveCollectionKey = collectionKey;

    if (modalCategoryEl)
      modalCategoryEl.textContent = `BỘ SƯU TẬP · ${data.category.toUpperCase()}`;
    if (modalTitleEl) modalTitleEl.textContent = `${data.title} (5 tác phẩm)`;
    if (modalSummaryEl) modalSummaryEl.textContent = data.summary;
    if (modalPackagingText) modalPackagingText.textContent = data.packaging;

    // Render Thumbnails
    if (modalThumbsContainer) {
      modalThumbsContainer.innerHTML = "";
      data.products.forEach((prod, index) => {
        const thumbBtn = document.createElement("button");
        thumbBtn.type = "button";
        thumbBtn.className = `b2b-modal-thumb-btn ${index === 0 ? "is-active" : ""}`;
        thumbBtn.setAttribute("aria-label", `Xem ảnh ${prod.name}`);
        thumbBtn.innerHTML = `<img src="${prod.img}" alt="${prod.name}" loading="lazy" />`;
        thumbBtn.addEventListener("click", () => selectModalItem(data, index));
        modalThumbsContainer.appendChild(thumbBtn);
      });
    }

    // Render List Items
    if (modalItemsList) {
      modalItemsList.innerHTML = "";
      data.products.forEach((prod, index) => {
        const itemLi = document.createElement("li");
        itemLi.className = `b2b-modal-item ${index === 0 ? "is-selected" : ""}`;
        itemLi.innerHTML = `
          <div class="b2b-modal-item-index">0${index + 1}</div>
          <div class="b2b-modal-item-info">
            <h4>${prod.name}</h4>
            <p>${prod.specs}</p>
            <span>✦ ${prod.note}</span>
          </div>
        `;
        itemLi.addEventListener("click", () => selectModalItem(data, index));
        modalItemsList.appendChild(itemLi);
      });
    }

    // Select first item
    selectModalItem(data, 0);

    if (modalOverlay) {
      modalOverlay.classList.add("is-active");
      modalOverlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (modalCloseBtn) modalCloseBtn.focus();
    }
  };

  const closeCollectionModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove("is-active");
      modalOverlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  };

  // Bind Open buttons
  const openModalButtons = document.querySelectorAll(".b2b-open-modal-btn");
  openModalButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.collectionTarget || "partner";
      openCollectionModal(target);
    });
  });

  // Bind Close triggers
  if (modalCloseBtn)
    modalCloseBtn.addEventListener("click", closeCollectionModal);
  if (modalDismissBtn)
    modalDismissBtn.addEventListener("click", closeCollectionModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeCollectionModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      modalOverlay &&
      modalOverlay.classList.contains("is-active")
    ) {
      closeCollectionModal();
    }
  });

  // Modal Consult CTA
  if (modalConsultBtn) {
    modalConsultBtn.addEventListener("click", () => {
      const data =
        b2bCollectionsData[currentActiveCollectionKey] ||
        b2bCollectionsData.partner;
      closeCollectionModal();

      // Pre-fill form
      const giftTypeSelect = document.getElementById("b2b-gift-type");
      const notesTextarea = document.getElementById("b2b-notes");
      const companyInput = document.getElementById("b2b-company");
      const consultSection = document.getElementById("dang-ky-tu-van");

      if (giftTypeSelect && data.category) {
        Array.from(giftTypeSelect.options).forEach((opt) => {
          if (
            opt.value.toLowerCase().includes(currentActiveCollectionKey) ||
            opt.text.toLowerCase().includes(data.category.toLowerCase())
          ) {
            opt.selected = true;
          }
        });
      }

      if (notesTextarea && data.title) {
        const currentVal = notesTextarea.value.trim();
        const prefix = `Quan tâm tư vấn: ${data.title}`;
        if (!currentVal.includes(data.title)) {
          notesTextarea.value = currentVal
            ? `${currentVal}\n• ${prefix}`
            : `• ${prefix}`;
        }
      }

      if (consultSection) {
        consultSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          if (companyInput) {
            companyInput.focus();
            companyInput.style.transition = "box-shadow 0.3s ease";
            companyInput.style.boxShadow = "0 0 0 4px rgba(117, 89, 67, 0.4)";
            setTimeout(() => {
              companyInput.style.boxShadow = "";
            }, 1500);
          }
        }, 400);
      }
    });
  }

  // 3. Consultation Form Submission & Validation
  const form = document.getElementById("b2b-consultation-form");
  const formContainer = document.getElementById("b2b-form-container");
  const successCard = document.getElementById("b2b-form-success");
  const ticketCodeEl = document.getElementById("b2b-ticket-code");
  const resetBtn = document.getElementById("b2b-reset-form-btn");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector(".b2b-submit-btn");
      const originalText = submitBtn ? submitBtn.innerHTML : "";

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "<span>ĐANG GỬI YÊU CẦU...</span>";
      }

      setTimeout(() => {
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const ticketCode = `Mã yêu cầu: #B2B-2026-${randomNum}`;
        if (ticketCodeEl) ticketCodeEl.textContent = ticketCode;

        if (formContainer) formContainer.style.display = "none";
        if (successCard) {
          successCard.classList.add("is-visible");
          successCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 600);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (form) form.reset();
      if (successCard) successCard.classList.remove("is-visible");
      if (formContainer) formContainer.style.display = "block";
      if (companyInput) companyInput.focus();
    });
  }
};

const DISCOVERY_STORAGE_KEY = "hedyPrototypeDiscoveryContext";
const RECENT_SEARCH_STORAGE_KEY = "hedyPrototypeRecentSearches";
const phase4FilterLabels = {
  available: "Có thể đặt mua",
  gift: "Phù hợp lối Quà tặng",
  "low-stock": "Có phiên bản còn ít",
  "manual-delivery": "Cần báo phí giao",
  consultation: "Chỉ tư vấn",
};

const normalizeSearchValue = (value) =>
  String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("vi")
    .trim();

const getCatalogPriceValue = (product) => {
  const price = product?.catalogPrice;
  if (price?.type === "single") return price.amountVnd;
  if (price?.type === "range") return price.minVnd;
  return Number.MAX_SAFE_INTEGER;
};

const getCatalogPriceLabel = (product) => {
  const price = product?.catalogPrice;
  if (price?.type === "single") return formatVnd(price.amountVnd);
  if (price?.type === "range")
    return `${formatVnd(price.minVnd)} – ${formatVnd(price.maxVnd)}`;
  return price?.customerText || "Xác nhận sau tư vấn";
};

const getCardAvailability = (product, options = {}) => {
  if (options.soldOut)
    return {
      badge: window.t ? window.t("Tạm hết hàng") : "Tạm hết hàng",
      tone: "warning",
      text: window.t ? window.t("Món này đang được chế tác trong mẻ nung tiếp theo.") : "Món này đang được chế tác trong mẻ nung tiếp theo.",
    };
  if (product.retailEligibility === "enquiry-only")
    return {
      badge: window.t ? window.t("Tư vấn riêng") : "Tư vấn riêng",
      tone: "pending",
      text: window.t ? window.t("Chế tác theo yêu cầu cá nhân & doanh nghiệp.") : "Chế tác theo yêu cầu cá nhân & doanh nghiệp.",
    };
  if (product.retailEligibility === "retail-manual-delivery")
    return {
      badge: window.t ? window.t("Kiện hàng lớn") : "Kiện hàng lớn",
      tone: "warning",
      text: window.t ? window.t("Đóng gói chuyên dụng chống sốc; phí giao xác nhận sau.") : "Đóng gói chuyên dụng chống sốc; phí giao xác nhận sau.",
    };
  const lowStockVariant = product.variants?.find(
    (variant) =>
      variant.inventory?.state === "in-stock" &&
      variant.inventory.sellableQuantity <= 2,
  );
  if (lowStockVariant)
    return {
      badge: window.t ? window.t("Số lượng còn ít") : "Số lượng còn ít",
      tone: "warning",
      text: `${window.t ? window.t(lowStockVariant.label) : lowStockVariant.label} ${window.t ? window.t("chỉ còn") : "chỉ còn"} ${lowStockVariant.inventory.sellableQuantity} ${window.t ? window.t("món cho mẻ này.") : "món cho mẻ này."}`,
    };
  return {
    badge: window.t ? window.t("Có sẵn") : "Có sẵn",
    tone: "default",
    text: window.t ? window.t("Chế tác thủ công · Men mờ tự nhiên · Sẵn sàng gửi.") : "Chế tác thủ công · Men mờ tự nhiên · Sẵn sàng gửi.",
  };
};

const getProductCardMarkup = (product, options = {}) => {
  const source = options.source || pageId;
  const variant =
    product.variants?.find((item) => item.id === product.defaultVariantId) ||
    product.variants?.[0];
  const asset = prototypeData.assets?.[variant?.primaryAssetId];
  const hasImage = Boolean(asset?.path) && !options.mediaFailed;
  const availability = getCardAvailability(product, options);
  const isConsultation = product.retailEligibility === "enquiry-only";
  const detailReady = !isConsultation;
  const destination = isConsultation
    ? product.related?.serviceRoute || "custom.html?source=product"
    : `product.html?fixture=${encodeURIComponent(product.fixtureId)}&variant=${encodeURIComponent(product.defaultVariantId || variant?.id || "")}&from=${encodeURIComponent(source)}`;
  const loadingAttributes = options.eager
    ? 'loading="eager" fetchpriority="high"'
    : 'loading="lazy"';
  const imageContent = hasImage
    ? `<img src="${asset.path}" alt="${asset.altIntent}" width="${asset.width}" height="${asset.height}" ${loadingAttributes} decoding="async" style="--media-focal: ${asset.focalPoint || "50% 50%"}" />`
    : `<span class="phase4-media-fallback" role="img" aria-label="${asset?.altIntent || (window.t ? window.t("Ảnh sản phẩm đang được cập nhật.") : "Ảnh sản phẩm đang được cập nhật.")}"><span>${isConsultation ? (window.t ? window.t("[html]Chế tác riêng<br />theo yêu cầu.") : "Chế tác riêng<br />theo yêu cầu.") : (window.t ? window.t("[html]Ảnh sản phẩm<br />đang được cập nhật.") : "Ảnh sản phẩm<br />đang được cập nhật.")}</span></span>`;
  const imageMarkup = `<a class="product-image" href="${destination}" data-discovery-link>${imageContent}<span class="product-badge product-badge--${availability.tone}">${window.t ? window.t(availability.badge) : availability.badge}</span><span class="product-view">${isConsultation ? (window.t ? window.t("Xem tư vấn") : "Xem tư vấn") : (window.t ? window.t("Xem chi tiết") : "Xem chi tiết")} ↗</span></a>`;
  const actionMarkup = options.soldOut
    ? `<span class="product-card-sold-out">${window.t ? window.t("Tạm hết") : "Tạm hết"}</span>`
    : isConsultation
      ? `<a class="product-card-service-cta" href="${destination}" data-discovery-link>${window.t ? window.t("Tư vấn riêng ↗") : "Tư vấn riêng ↗"}</a>`
      : `<button class="round-add add-to-bag" type="button" data-fixture-id="${product.fixtureId}" data-variant-id="${product.defaultVariantId || variant?.id || ""}" aria-label="${window.t ? window.t("Thêm") : "Thêm"} ${window.t ? window.t(product.name.short) : product.name.short} ${window.t ? window.t("vào giỏ") : "vào giỏ"}">+</button>`;
  return `
    <article class="product-card phase4-product-card${isConsultation ? " product-card--consultation" : ""}" data-fixture-id="${product.fixtureId}" data-price="${getCatalogPriceValue(product)}" id="${options.idPrefix || "product"}-${product.fixtureId}">
      ${imageMarkup}
      <div class="product-info">
        <div><p class="product-card-kind">${window.t ? window.t(product.productType) : product.productType}</p><h3><a href="${destination}" data-discovery-link>${window.t ? window.t(product.name.short) : product.name.short}</a></h3><p>${window.t ? window.t(product.description.short) : product.description.short}</p></div>
        <div class="price-row">
          <div class="product-price-wrap">
            <span class="product-price-label">${getCatalogPriceLabel(product)}</span>
          </div>
          ${actionMarkup}
        </div>
      </div>
      <p class="product-card-availability" data-tone="${availability.tone}">${window.t ? window.t(availability.text) : availability.text}</p>
    </article>
  `;
};

const getDiscoverySourceUrl = () =>
  `${window.location.pathname.split("/").pop() || "index.html"}${window.location.search}${window.location.hash}`;

const saveDiscoveryContext = (link, visibleCount) => {
  const card = link.closest("[data-fixture-id]");
  const context = {
    sourcePage: pageId,
    sourceUrl: getDiscoverySourceUrl(),
    sourceLabel:
      document.querySelector("[data-collection-title]")?.textContent?.trim() ||
      (pageId === "search" ? "Kết quả tìm kiếm" : "Cửa hàng"),
    scrollY: Math.round(window.scrollY),
    visibleCount,
    scrollAnchor: card?.id || null,
    returnPending: true,
  };
  try {
    sessionStorage.setItem(DISCOVERY_STORAGE_KEY, JSON.stringify(context));
  } catch {
    // Discovery remains usable when session storage is unavailable.
  }
};

const getPendingDiscoveryContext = () => {
  try {
    const context = JSON.parse(
      sessionStorage.getItem(DISCOVERY_STORAGE_KEY) || "null",
    );
    return context?.sourceUrl === getDiscoverySourceUrl() &&
      context.returnPending
      ? context
      : null;
  } catch {
    return null;
  }
};

const consumeDiscoveryContext = (context) => {
  if (!context) return;
  context.returnPending = false;
  try {
    sessionStorage.setItem(DISCOVERY_STORAGE_KEY, JSON.stringify(context));
  } catch {
    /* no-op */
  }
  requestAnimationFrame(() =>
    window.scrollTo(0, Math.max(Number(context.scrollY) || 0, 0)),
  );
};

const addPhase4Product = (button) => {
  const request = resolveAddRequest(button);
  if (!request || request.variant.inventory?.state !== "in-stock") {
    const message =
      "Món này chưa có một phiên bản bán lẻ khả dụng để thêm vào Giỏ mẫu.";
    showInlineConfirmation(button, message, "warning");
    showToast(message, "!");
    return;
  }
  const existingLine = cartState.lines.find(
    (line) =>
      line.productFixtureId === request.fixtureId &&
      line.variantId === request.variantId,
  );
  if (existingLine) {
    existingLine.quantity += request.quantity;
    existingLine.selected = true;
  } else
    cartState.lines.push({
      productFixtureId: request.fixtureId,
      variantId: request.variantId,
      quantity: request.quantity,
      unitPriceVnd: request.variant.priceVnd,
      lineStatus: "current",
      selected: true,
    });
  const saved = saveCart();
  renderCart();
  const product = getProduct(request.fixtureId);
  const message = `${product.name.short} · ${request.variant.label} đã được thêm vào Giỏ mẫu.`;
  showInlineConfirmation(
    button,
    saved ? message : `${message} Trình duyệt không cho phép lưu lâu dài.`,
    saved ? "success" : "warning",
  );
  announceCart(message);
};

const bindPhase4Grid = (
  grid,
  getVisibleCount = () => grid.querySelectorAll(".phase4-product-card").length,
) => {
  if (!grid || grid.dataset.phase4Bound === "true") return;
  grid.dataset.phase4Bound = "true";
  grid.addEventListener("click", (event) => {
    const addButton = event.target.closest(".add-to-bag");
    if (addButton) {
      addPhase4Product(addButton);
      return;
    }
    const discoveryLink = event.target.closest("[data-discovery-link]");
    if (discoveryLink) saveDiscoveryContext(discoveryLink, getVisibleCount());
  });
};

const initShopChannels = () => {
  const channelCards = document.querySelectorAll(".shop-channel-card");
  const channelStatus = document.querySelector("[data-channel-status]");
  channelCards.forEach((card) => {
    card.addEventListener("click", () => {
      const channel = card.dataset.channelTarget;
      channelCards.forEach((c) =>
        c.setAttribute("aria-pressed", String(c === card)),
      );
      if (channelStatus) {
        channelStatus.classList.add("is-active");
        if (channel === "zalo") {
          channelStatus.textContent =
            "Đã chọn Zalo: Bạn có thể liên hệ trực tiếp qua Zalo của HEDY ATELIER để được tư vấn nhanh.";
        } else if (channel === "instagram") {
          channelStatus.textContent =
            "Đã chọn Instagram: Bạn có thể gửi tin nhắn qua Instagram Direct của HEDY ATELIER.";
        }
      }
    });
  });
};

const initPhase4Shop = () => {
  if (pageId !== "shop") return;
  const query = new URLSearchParams(window.location.search);
  const requestedState = query.get("state") || "default";
  const allowedStates = prototypeData.stateFixtures?.shop || ["default"];
  const state = allowedStates.includes(requestedState)
    ? requestedState
    : "default";
  const productGrid = document.querySelector("[data-shop-product-grid]");
  const stateBanner = document.querySelector("[data-shop-state-banner]");
  const categoryTabsWrap = document.querySelector("[data-shop-category-tabs]");
  const seeMoreBtn = document.querySelector("[data-shop-see-more]");
  const seeMoreText = seeMoreBtn?.querySelector(".shop-see-more-text");
  const restoredContext = getPendingDiscoveryContext();
  body.dataset.phaseState = state;
  if (query.get("view") === "retail") body.dataset.reviewView = "retail";
  if (query.get("view") === "top") {
    const positionShopTop = () => window.scrollTo(0, 0);
    positionShopTop();
    window.addEventListener("load", positionShopTop, { once: true });
    window.setTimeout(positionShopTop, 120);
  }

  // Accessibility & Enter/Space support for shop search bar trigger
  const shopSearchBar = document.querySelector("[data-shop-search-bar]");
  if (shopSearchBar) {
    shopSearchBar.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPanel(searchOverlay, shopSearchBar);
      }
    });
  }

  if (state === "media-failure") {
    const hero = document.querySelector("[data-shop-hero-media]");
    const image = hero?.querySelector("img");
    const fallback = hero?.querySelector(".phase4-media-fallback");
    if (image) image.hidden = true;
    if (fallback) fallback.hidden = false;
    if (stateBanner) {
      stateBanner.hidden = false;
      stateBanner.className =
        "status-banner status-banner--warning shop-state-banner";
      stateBanner.innerHTML =
        "<strong>Hình bán lẻ không tải được.</strong><span>Tên, giá minh họa, trạng thái và lối đi vẫn còn; placeholder không thay thế ảnh bằng tài sản khác.</span>";
    }
  }

  const shopCategories = prototypeData.shopCategories || {
    "bat-an": {
      id: "bat-an",
      label: "Bát đĩa",
      collectionTarget: "ban-an",
      productFixtureIds: [
        "simple-in-stock",
        "multi-variant",
        "tray-stone",
        "bowl-earth",
        "plate-oval",
        "bowl-soup",
        "plate-snack",
        "pot-casserole",
      ],
    },
    "am-chen": {
      id: "am-chen",
      label: "Ấm chén",
      collectionTarget: "am-chen",
      productFixtureIds: [
        "tea-set-zen",
        "tea-pot-side",
        "mug-sand",
        "cup-tasting",
        "mug-handle",
        "tea-pitcher",
        "tea-caddy",
        "tumbler-fire",
      ],
    },
    "trang-tri": {
      id: "trang-tri",
      label: "Trang trí",
      collectionTarget: "goc-nha",
      productFixtureIds: [
        "fragile-large",
        "vase-dew",
        "vase-decor",
        "vase-tall",
        "holder-candle",
        "holder-incense",
        "sculpt-vessel",
        "plate-display",
      ],
    },
    "qua-tang": {
      id: "qua-tang",
      label: "Quà tặng",
      collectionTarget: "qua-tang",
      productFixtureIds: [
        "gift-calm",
        "gift-tea",
        "gift-linen",
        "gift-housewarming",
        "gift-couple",
        "gift-fragrance",
        "enquiry-only",
        "gift-corporate",
      ],
    },
  };

  const initialCategory =
    query.get("category") && shopCategories[query.get("category")]
      ? query.get("category")
      : "bat-an";

  const renderCategory = (categoryId) => {
    const category = shopCategories[categoryId] || shopCategories["bat-an"];
    const productIds =
      state === "sparse-shop"
        ? ["simple-in-stock"]
        : category.productFixtureIds || [];

    if (productGrid) {
      productGrid.innerHTML = productIds
        .map((fixtureId, index) => {
          const product = prototypeData.products?.[fixtureId];
          if (!product) return "";
          return getProductCardMarkup(product, {
            source: "shop",
            mediaFailed: state === "media-failure",
            idPrefix: "shop-product",
            eager: index < 2,
          });
        })
        .join("");
      bindPhase4Grid(productGrid);
    }

    if (categoryTabsWrap) {
      categoryTabsWrap.querySelectorAll(".shop-category-tab").forEach((tab) => {
        const isSelected = tab.dataset.categoryId === categoryId;
        tab.classList.toggle("is-active", isSelected);
        tab.setAttribute("aria-selected", String(isSelected));
      });
    }

    if (seeMoreBtn) {
      seeMoreBtn.href = `collection.html?collection=${category.collectionTarget || "ban-an"}`;
      if (seeMoreText) {
        seeMoreText.textContent = `Xem thêm đồ gốm ${category.label}`;
      }
    }
  };

  if (categoryTabsWrap) {
    categoryTabsWrap.querySelectorAll(".shop-category-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetId = tab.dataset.categoryId;
        if (targetId) renderCategory(targetId);
      });
    });
  }

  renderCategory(initialCategory);

  // Direct consultation channels interaction (Zalo / Instagram without modal)
  initShopChannels();

  if (restoredContext && stateBanner && state !== "media-failure") {
    stateBanner.hidden = false;
    stateBanner.className =
      "status-banner status-banner--success shop-state-banner";
    stateBanner.innerHTML =
      "<strong>Đã trở lại Cửa hàng.</strong><span>Vị trí trước khi mở sản phẩm được giữ trong phiên này.</span>";
    consumeDiscoveryContext(restoredContext);
  }
};

const productMatchesPhase4Filter = (product, filterId) => {
  if (filterId === "available")
    return ["retail", "retail-manual-delivery"].includes(
      product.retailEligibility,
    );
  if (filterId === "gift")
    return (
      product.collectionIds?.includes("qua-tang") ||
      product.useCases?.some((useCase) => useCase.includes("gift"))
    );
  if (filterId === "low-stock")
    return product.variants?.some(
      (variant) =>
        variant.inventory?.state === "in-stock" &&
        variant.inventory.sellableQuantity <= 2,
    );
  if (filterId === "manual-delivery")
    return product.retailEligibility === "retail-manual-delivery";
  if (filterId === "consultation")
    return product.retailEligibility === "enquiry-only";
  return true;
};

const initCollectionLanding = () => {
  if (pageId !== 'collection-landing') return;
  const query = new URLSearchParams(window.location.search);
  const allowedCollections = Object.keys(prototypeData.collections || {});
  const requestedCollection = query.get('collection') || 'ban-an';
  const collectionId = allowedCollections.includes(requestedCollection) ? requestedCollection : 'ban-an';
  const collection = prototypeData.collections[collectionId];

  const breadcrumb = document.querySelector('[data-landing-breadcrumb]');
  if (breadcrumb) breadcrumb.textContent = window.t ? window.t(collection.label) : collection.label;

  const title = document.querySelector('[data-landing-title]');
  if (title) title.textContent = window.t ? window.t(collection.label) : collection.label;

  const story = document.querySelector('[data-landing-story]');
  if (story) story.textContent = window.t ? window.t(collection.story || collection.shortDescription) : (collection.story || collection.shortDescription);

  const heroMedia = document.querySelector('[data-landing-hero-media]');
  if (heroMedia && collection.heroImage) {
    heroMedia.innerHTML = `<img src="${collection.heroImage}" alt="${collection.label}" loading="eager" fetchpriority="high" decoding="async" />`;
  }

  const viewAllBtns = document.querySelectorAll('[data-landing-view-all], [data-landing-cta-btn]');
  viewAllBtns.forEach(btn => {
    btn.href = `collection-list.html?collection=${collectionId}`;
  });

  const productsContainer = document.querySelector('[data-landing-products]');
  const emptyState = document.querySelector('[data-landing-empty]');
  const ctaContainer = document.querySelector('.landing-cta');
  const viewAllLink = document.querySelector('[data-landing-view-all]');

  if (productsContainer && collection.featuredProductIds) {
    const featuredProducts = collection.featuredProductIds
      .map(id => prototypeData.products[id])
      .filter(Boolean);
    
    if (featuredProducts.length > 0) {
      productsContainer.innerHTML = featuredProducts.map((product, index) => 
        getProductCardMarkup(product, { source: 'collection-landing', idPrefix: 'feat', eager: index === 0 })
      ).join('');
    } else {
      if (productsContainer) productsContainer.style.display = 'none';
      if (ctaContainer) ctaContainer.style.display = 'none';
      if (viewAllLink) viewAllLink.style.display = 'none';
      if (emptyState) {
        emptyState.style.display = 'block';
        const section = emptyState.closest('.landing-featured-products');
        if (section) section.style.paddingBottom = '0';
      }
    }
  } else {
    if (productsContainer) productsContainer.style.display = 'none';
    if (ctaContainer) ctaContainer.style.display = 'none';
    if (viewAllLink) viewAllLink.style.display = 'none';
    if (emptyState) {
      emptyState.style.display = 'block';
      const section = emptyState.closest('.landing-featured-products');
      if (section) section.style.paddingBottom = '0';
    }
  }

  const slider = document.querySelector('[data-home-collections-slider]');
  if (slider) {
    const prevBtn = document.querySelector('.prev-collection');
    const nextBtn = document.querySelector('.next-collection');
    
    if (prevBtn && nextBtn) {
      const updateSliderButtons = () => {
        prevBtn.disabled = slider.scrollLeft <= 0;
        nextBtn.disabled = Math.ceil(slider.scrollLeft + slider.clientWidth) >= slider.scrollWidth;
      };

      slider.addEventListener('scroll', updateSliderButtons, { passive: true });
      window.addEventListener('resize', updateSliderButtons, { passive: true });
      
      const getScrollAmount = () => {
        const slide = slider.querySelector('.collection-slide');
        return slide ? slide.clientWidth + parseFloat(window.getComputedStyle(slider).gap || 0) : slider.clientWidth / 2;
      };

      prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
      });
      
      nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
      });
    }
  }
};

const initPhase4Collection = () => {
  if (pageId !== 'collection-list') return;
  if (pageId !== "collection") return;
  const query = new URLSearchParams(window.location.search);
  const allowedCollections = Object.keys(prototypeData.collections || {});
  const requestedCollection = query.get("collection") || "ban-an";
  const collectionId = allowedCollections.includes(requestedCollection)
    ? requestedCollection
    : "ban-an";
  const collection = prototypeData.collections[collectionId];
  const allowedStates = prototypeData.stateFixtures?.collection || ["default"];
  const requestedState = query.get("state") || "default";
  let state = allowedStates.includes(requestedState)
    ? requestedState
    : "default";
  const soldOutFixtureId =
    query.get("card") === "sold-out" ? "simple-in-stock" : null;
  const allowedSorts = ["featured", "newest", "price-low", "price-high"];
  let sort = allowedSorts.includes(query.get("sort"))
    ? query.get("sort")
    : "featured";
  let filters = (query.get("filter") || "")
    .split(",")
    .filter((filterId) => Object.hasOwn(phase4FilterLabels, filterId));
  let visibleLimit = 2;
  let restoreContext = null;
  try {
    restoreContext = JSON.parse(
      sessionStorage.getItem(DISCOVERY_STORAGE_KEY) || "null",
    );
    if (
      restoreContext?.sourceUrl === getDiscoverySourceUrl() &&
      restoreContext.returnPending
    )
      visibleLimit = Math.max(Number(restoreContext.visibleCount) || 2, 2);
  } catch {
    restoreContext = null;
  }

  const title = document.querySelector("[data-collection-title]");
  const description = document.querySelector("[data-collection-description]");
  const breadcrumb = document.querySelector("[data-collection-breadcrumb]");
  const indexLabel = document.querySelector("[data-collection-index]");
  const hero = document.querySelector("[data-collection-hero-media]");
  const heroImage = hero?.querySelector("img");
  const heroFallback = hero?.querySelector(".phase4-media-fallback");
  const grid = document.querySelector("#phase4-catalog-grid");
  const skeleton = document.querySelector("[data-collection-skeleton]");
  const empty = document.querySelector("[data-collection-empty]");
  const stateRegion = document.querySelector("[data-collection-state]");
  const live = document.querySelector("[data-collection-live]");
  const resultCount = document.querySelector(
    ".phase4-catalog-summary .result-count",
  );
  const loadButton = document.querySelector(".phase4-load-more");
  const loadCount = document.querySelector("[data-load-more-count]");
  const sortControl = document.querySelector("#phase4-product-sort");
  const filterForm = document.querySelector(".collection-filter-form");
  const collectionAssetIds = {
    "ban-an": "img5",
    "qua-tang": "img8",
    "goc-nha": "img4",
  };
  const collectionAsset =
    prototypeData.assets?.[collectionAssetIds[collectionId]];
  body.dataset.phaseState = state;
  if (query.get("view") === "catalog") body.dataset.reviewView = "catalog";
  if (title) title.textContent = collection.label;
  if (title) title.textContent = `${collection.label}.`;
  if (description) description.textContent = collection.shortDescription;
  if (breadcrumb) breadcrumb.textContent = collection.label;
  if (indexLabel)
    indexLabel.textContent = `Bộ sưu tập · ${collection.truthStatus === "illustrative" ? "Dữ liệu minh họa" : "Đã duyệt"}`;
  const translatedLabel = window.t ? window.t(collection.label) : collection.label;
  document.title = `${translatedLabel} — HEDY ATELIER`;
  if (sortControl) sortControl.value = sort;

  const syncFilterForm = () => {
    filterForm?.querySelectorAll('input[name="filter"]').forEach((input) => {
      input.checked = filters.includes(input.value);
    });
    const count = document.querySelector(".filter-selection-count");
    if (count) count.textContent = String(filters.length);
  };

  const updateDiscoveryUrl = () => {
    const next = new URLSearchParams();
    next.set("collection", collectionId);
    if (filters.length) next.set("filter", filters.join(","));
    if (sort !== "featured") next.set("sort", sort);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${next.toString()}`,
    );
  };

  const renderAppliedFilters = () => {
    const bar = document.querySelector("[data-applied-filter-bar]");
    const chips = document.querySelector("[data-applied-filter-chips]");
    if (!bar || !chips) return;
    bar.hidden = filters.length === 0;
    chips.innerHTML = filters
      .map(
        (filterId) =>
          `<button type="button" data-remove-filter="${filterId}">${phase4FilterLabels[filterId]} <span aria-hidden="true">×</span><span class="sr-only">Bỏ bộ lọc</span></button>`,
      )
      .join("");
  };

  const setStateBanner = (tone, heading, message, actions = "") => {
    if (!stateRegion) return;
    stateRegion.innerHTML = `<div class="status-banner status-banner--${tone}"><strong>${heading}</strong><span>${message}${actions}</span></div>`;
  };

  const getSortedProducts = () => {
    let products = Object.values(prototypeData.products || {}).filter(
      (product) => product.collectionIds?.includes(collectionId),
    );
    products = products.filter((product) =>
      filters.every((filterId) =>
        productMatchesPhase4Filter(product, filterId),
      ),
    );
    if (state === "removed-item")
      products = products.filter(
        (product) => product.fixtureId !== "enquiry-only",
      );
    if (state === "zero") products = [];
    return products.sort((a, b) => {
      if (sort === "price-low")
        return getCatalogPriceValue(a) - getCatalogPriceValue(b);
      if (sort === "price-high")
        return getCatalogPriceValue(b) - getCatalogPriceValue(a);
      if (sort === "newest") return b.catalogOrder - a.catalogOrder;
      return a.catalogOrder - b.catalogOrder;
    });
  };

  const renderCollection = (announcement) => {
    const products = getSortedProducts();
    const visibleProducts = products.slice(0, visibleLimit);
    const loading = state === "loading" || state === "retrying";
    if (grid) {
      grid.hidden = loading || products.length === 0;
      grid.innerHTML = loading
        ? ""
        : visibleProducts
            .map((product, index) =>
              getProductCardMarkup(product, {
                source: "collection",
                mediaFailed: state === "media-failure" && index === 0,
                soldOut: product.fixtureId === soldOutFixtureId,
                idPrefix: "product",
                eager: index < 2,
              }),
            )
            .join("");
    }
    if (skeleton) skeleton.hidden = !loading;
    if (empty) empty.hidden = loading || products.length > 0;
    if (resultCount)
      resultCount.textContent = loading ? "—" : String(products.length);
    if (loadButton) {
      const remaining = Math.max(products.length - visibleProducts.length, 0);
      loadButton.hidden = loading || remaining === 0;
      loadButton.disabled = false;
      loadButton.firstChild.textContent =
        state === "load-failure" ? "Thử tải phần còn lại " : "Xem thêm ";
      if (loadCount) loadCount.textContent = remaining ? `(${remaining})` : "";
    }
    if (stateRegion) stateRegion.replaceChildren();
    if (state === "loading" || state === "retrying")
      setStateBanner(
        "pending",
        "Đang cập nhật danh sách.",
        "Bộ lọc và cách sắp xếp được giữ trong khi fixture đang tải.",
      );
    if (state === "load-failure")
      setStateBanner(
        "error",
        "Chưa tải được phần tiếp theo.",
        `${visibleProducts.length} kết quả đang thấy vẫn được giữ. Thử lại không thay bộ lọc hoặc thứ tự.`,
      );
    if (state === "removed-item")
      setStateBanner(
        "warning",
        "Một mục chỉ tư vấn đã rời danh sách.",
        'Bộ Quà Dấu Riêng không được gọi là hết hàng; bạn vẫn có thể <a href="custom.html?source=collection-removed">mở Đặt riêng</a>.',
      );
    if (state === "media-failure")
      setStateBanner(
        "warning",
        "Một ảnh sản phẩm không tải được.",
        "Tên, giá và trạng thái vẫn hiển thị. Placeholder không dùng ảnh của sản phẩm khác.",
      );
    if (state === "restored-context" || restoreContext?.returnPending)
      setStateBanner(
        "success",
        "Ngữ cảnh khám phá đã được khôi phục.",
        "Bộ lọc, thứ tự, số mục đã mở và vị trí trước khi xem sản phẩm được giữ trong phiên này.",
      );
    renderAppliedFilters();
    syncFilterForm();
    if (announcement && live) live.textContent = announcement;
  };

  bindPhase4Grid(
    grid,
    () => grid?.querySelectorAll(".phase4-product-card").length || 0,
  );
  renderCollection();

  if (
    restoreContext?.sourceUrl === getDiscoverySourceUrl() &&
    restoreContext.returnPending
  ) {
    restoreContext.returnPending = false;
    try {
      sessionStorage.setItem(
        DISCOVERY_STORAGE_KEY,
        JSON.stringify(restoreContext),
      );
    } catch {
      /* no-op */
    }
    requestAnimationFrame(() =>
      window.scrollTo(0, Math.max(Number(restoreContext.scrollY) || 0, 0)),
    );
  }

  document
    .querySelector("[data-applied-filter-chips]")
    ?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-remove-filter]");
      if (!button) return;
      filters = filters.filter(
        (filterId) => filterId !== button.dataset.removeFilter,
      );
      visibleLimit = 2;
      state = "default";
      updateDiscoveryUrl();
      renderCollection(
        `Đã bỏ bộ lọc ${phase4FilterLabels[button.dataset.removeFilter]}. Có ${getSortedProducts().length} kết quả.`,
      );
    });

  document.querySelectorAll(".clear-all-filters").forEach((button) =>
    button.addEventListener("click", () => {
      filters = [];
      visibleLimit = 2;
      state = "default";
      updateDiscoveryUrl();
      renderCollection(
        `Đã xóa mọi bộ lọc. Có ${getSortedProducts().length} kết quả.`,
      );
      if (activePanel === filterDialog) closePanel(filterDialog);
    }),
  );

  filterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    filters = Array.from(
      filterForm.querySelectorAll('input[name="filter"]:checked'),
    ).map((input) => input.value);
    visibleLimit = 2;
    state = "default";
    updateDiscoveryUrl();
    renderCollection(
      `Đã áp dụng ${filters.length} bộ lọc. Có ${getSortedProducts().length} kết quả.`,
    );
    closePanel(filterDialog);
  });

  sortControl?.addEventListener("change", () => {
    sort = allowedSorts.includes(sortControl.value)
      ? sortControl.value
      : "featured";
    visibleLimit = 2;
    state = "default";
    updateDiscoveryUrl();
    renderCollection(`Đã sắp xếp lại ${getSortedProducts().length} kết quả.`);
  });

  loadButton?.addEventListener("click", () => {
    loadButton.disabled = true;
    loadButton.firstChild.textContent = "Đang tải ";
    if (live) live.textContent = "Đang tải phần tiếp theo.";
    window.setTimeout(() => {
      state = "default";
      visibleLimit = getSortedProducts().length;
      updateDiscoveryUrl();
      renderCollection(`Đã hiển thị đủ ${getSortedProducts().length} kết quả.`);
      grid
        ?.querySelectorAll(".phase4-product-card")
        [Math.max(visibleLimit - 1, 0)]?.querySelector("a, button")
        ?.focus();
    }, 320);
  });

  if (state === "media-failure" && heroImage && heroFallback) {
    heroImage.hidden = true;
    heroFallback.hidden = false;
  }
};

const readRecentSearches = () => {
  try {
    const value = JSON.parse(
      localStorage.getItem(RECENT_SEARCH_STORAGE_KEY) || "[]",
    );
    return Array.isArray(value)
      ? value.filter((item) => typeof item === "string").slice(0, 3)
      : [];
  } catch {
    return [];
  }
};

const saveRecentSearch = (query) => {
  if (!query.trim()) return;
  const searches = [
    query.trim(),
    ...readRecentSearches().filter(
      (item) => normalizeSearchValue(item) !== normalizeSearchValue(query),
    ),
  ].slice(0, 3);
  try {
    localStorage.setItem(RECENT_SEARCH_STORAGE_KEY, JSON.stringify(searches));
  } catch {
    /* Search remains usable. */
  }
};

const searchPrototypeCatalog = (query) => {
  const needle = normalizeSearchValue(query);
  if (!needle)
    return { products: [], collections: [], content: [], services: [] };
  const includesNeedle = (...values) =>
    normalizeSearchValue(values.flat().filter(Boolean).join(" ")).includes(
      needle,
    );
  const products = Object.values(prototypeData.products || {}).filter(
    (product) =>
      includesNeedle(
        product.name?.short,
        product.name?.long,
        product.productType,
        product.keywords,
        product.useCases,
      ),
  );
  const collections = Object.values(prototypeData.collections || {}).filter(
    (collection) =>
      includesNeedle(
        collection.label,
        collection.shortDescription,
        collection.id,
      ),
  );
  const content = Object.values(prototypeData.contentEntries || {}).filter(
    (entry) => includesNeedle(entry.title, entry.excerpt, entry.contentType),
  );
  const services = [];
  if (includesNeedle("quà cá nhân cá nhân hóa dấu riêng"))
    services.push({
      id: "individual",
      label: "Quà tặng cá nhân đặt riêng",
      route: "custom.html?use-case=individual&source=search",
      description:
        "Chuẩn bị dịp tặng, số lượng, nội dung, thời điểm và nơi giao.",
    });
  if (includesNeedle("quà doanh nghiệp logo số lượng đặt riêng"))
    services.push({
      id: "corporate",
      label: "Quà tặng doanh nghiệp",
      route: "custom.html?use-case=corporate&source=search",
      description:
        "Trao đổi loại quà, số lượng, logo hoặc nội dung, thời điểm và địa điểm giao.",
    });
  if (
    includesNeedle("không gian khách sạn nhà hàng hospitality bình đặt riêng")
  )
    services.push({
      id: "hospitality",
      label: "Gốm cho không gian",
      route: "custom.html?use-case=hospitality&source=search",
      description: "Làm rõ công năng, điều kiện sử dụng, số lượng và địa điểm.",
    });
  return { products, collections, content, services };
};

const initPhase4Search = () => {
  if (pageId !== "search") return;
  const params = new URLSearchParams(window.location.search);
  const allowedStates = prototypeData.stateFixtures?.search || [];
  const requestedState = params.get("state");
  const input = document.querySelector("#search-page-input");
  const form = document.querySelector("[data-search-form]");
  const clearButton = document.querySelector(".search-clear");
  const kicker = document.querySelector("[data-search-kicker]");
  const title = document.querySelector("[data-search-title]");
  const count = document.querySelector("[data-search-count]");
  const stateRegion = document.querySelector("[data-search-state]");
  const suggestionsRegion = document.querySelector("[data-search-suggestions]");
  const resultsRegion = document.querySelector("[data-search-results]");
  const zeroState = document.querySelector("[data-search-zero]");
  const zeroQuery = document.querySelector("[data-zero-query]");
  const zeroCollections = document.querySelector(
    "[data-search-zero-collections]",
  );
  const sidebar = document.querySelector("[data-search-sidebar]");
  const filterClearBtn = document.querySelector("[data-search-filter-clear]");
  const mobileFilterTrigger = document.querySelector("[data-mobile-filter-trigger]");
  const filterCountBadge = document.querySelector("[data-filter-active-count]");
  const sidebarCloseBtn = document.querySelector("[data-sidebar-close]");
  const sidebarApplyBtn = document.querySelector("[data-sidebar-apply]");
  const fastCatPills = document.querySelectorAll("[data-fast-cat]");
  const sortSelect = document.querySelector("[data-search-sort]");
  const activeChipsRegion = document.querySelector("[data-search-active-chips]");
  const resetAllBtn = document.querySelector("[data-search-reset-all]");
  const priceCustomForm = document.querySelector("[data-price-custom-form]");
  const priceMinInput = document.querySelector("#price-min");
  const priceMaxInput = document.querySelector("#price-max");
  const paginationRegion = document.querySelector("[data-search-pagination]");

  const PAGE_SIZE = 12;
  let currentPage = parseInt(params.get("page") || "1", 10);
  if (isNaN(currentPage) || currentPage < 1) currentPage = 1;

  const fixtureStates = prototypeData.experienceFixtures?.search || {};
  const recentFixture = fixtureStates.recent?.recentQueries || [];
  const restoredDiscoveryContext = getPendingDiscoveryContext();
  let query = params.get("q") || "";
  let state =
    requestedState && allowedStates.includes(requestedState)
      ? requestedState
      : null;

  // Active filter state
  let currentFilters = {
    category: params.get("category") || "all",
    price: params.get("price") || "all",
    minPrice: params.get("minPrice") ? parseInt(params.get("minPrice"), 10) : null,
    maxPrice: params.get("maxPrice") ? parseInt(params.get("maxPrice"), 10) : null,
    availability: params.get("availability") || "all",
  };
  let currentSort = params.get("sort") || "featured";

  if (currentFilters.minPrice !== null || currentFilters.maxPrice !== null) {
    currentFilters.price = "custom";
  }

  if (state && fixtureStates[state]?.query !== undefined)
    query = fixtureStates[state].query;
  if (!state)
    state = query.trim()
      ? Object.values(searchPrototypeCatalog(query)).flat().length
        ? "mixed-results"
        : "zero-results"
      : readRecentSearches().length
        ? "recent"
        : "initial";
  body.dataset.phaseState = state;
  if (params.get("view") === "results") body.dataset.reviewView = "results";
  if (input) input.value = query;
  if (clearButton) clearButton.hidden = !query;

  // Sync controls with initial state
  if (sortSelect) sortSelect.value = currentSort;
  const syncSidebarRadios = () => {
    const catRadio = document.querySelector(`input[name="filter-category"][value="${currentFilters.category}"]`);
    if (catRadio) catRadio.checked = true;

    if (currentFilters.minPrice !== null || currentFilters.maxPrice !== null || currentFilters.price === "custom") {
      document.querySelectorAll('input[name="filter-price"]').forEach((r) => (r.checked = false));
      if (priceMinInput) priceMinInput.value = currentFilters.minPrice !== null ? currentFilters.minPrice : "";
      if (priceMaxInput) priceMaxInput.value = currentFilters.maxPrice !== null ? currentFilters.maxPrice : "";
    } else {
      const priceRadio = document.querySelector(`input[name="filter-price"][value="${currentFilters.price}"]`);
      if (priceRadio) priceRadio.checked = true;
      if (priceMinInput) priceMinInput.value = "";
      if (priceMaxInput) priceMaxInput.value = "";
    }

    const availRadio = document.querySelector(`input[name="filter-avail"][value="${currentFilters.availability}"]`);
    if (availRadio) availRadio.checked = true;

    fastCatPills.forEach((pill) => {
      const pillCat = pill.getAttribute("data-fast-cat");
      pill.classList.toggle("is-active", pillCat === currentFilters.category);
    });
  };
  syncSidebarRadios();

  const resetRegions = () => {
    if (stateRegion) stateRegion.replaceChildren();
    if (suggestionsRegion) suggestionsRegion.replaceChildren();
    if (resultsRegion) resultsRegion.replaceChildren();
    if (zeroState) zeroState.hidden = true;
    if (paginationRegion) {
      paginationRegion.hidden = true;
      paginationRegion.innerHTML = "";
    }
  };

  const setHeading = (nextKicker, nextTitle, nextCount = "") => {
    if (kicker) kicker.textContent = nextKicker;
    if (title) title.textContent = nextTitle;
    if (count) count.textContent = nextCount;
  };

  const updateUrlParams = () => {
    const nextParams = new URLSearchParams();
    if (query.trim()) nextParams.set("q", query.trim());
    if (currentFilters.category !== "all") nextParams.set("category", currentFilters.category);
    if (currentFilters.price !== "all" && currentFilters.price !== "custom") nextParams.set("price", currentFilters.price);
    if (currentFilters.minPrice !== null) nextParams.set("minPrice", currentFilters.minPrice);
    if (currentFilters.maxPrice !== null) nextParams.set("maxPrice", currentFilters.maxPrice);
    if (currentFilters.availability !== "all") nextParams.set("availability", currentFilters.availability);
    if (currentSort !== "featured") nextParams.set("sort", currentSort);
    if (currentPage > 1) nextParams.set("page", currentPage);
    const searchString = nextParams.toString();
    const newUrl = searchString ? `search.html?${searchString}` : "search.html";
    window.history.replaceState({}, "", newUrl);
  };

  const getAllCatalogProducts = () => {
    return Object.values(prototypeData.products || {}).filter(
      (product) => !product.fixtureId.startsWith("missing-"),
    );
  };

  const filterAndSortProducts = (products) => {
    let list = [...products];

    // Category filter
    if (currentFilters.category && currentFilters.category !== "all") {
      list = list.filter((p) => {
        if (currentFilters.category === "bat-an") {
          return (
            p.collectionIds?.includes("ban-an") ||
            prototypeData.shopCategories?.["bat-an"]?.productFixtureIds?.includes(p.fixtureId)
          );
        }
        if (currentFilters.category === "am-chen") {
          return (
            p.collectionIds?.includes("am-chen") ||
            prototypeData.shopCategories?.["am-chen"]?.productFixtureIds?.includes(p.fixtureId)
          );
        }
        if (currentFilters.category === "trang-tri") {
          return (
            p.collectionIds?.includes("goc-nha") ||
            prototypeData.shopCategories?.["trang-tri"]?.productFixtureIds?.includes(p.fixtureId)
          );
        }
        if (currentFilters.category === "qua-tang") {
          return (
            p.collectionIds?.includes("qua-tang") ||
            prototypeData.shopCategories?.["qua-tang"]?.productFixtureIds?.includes(p.fixtureId)
          );
        }
        return true;
      });
    }

    // Price filter (custom min-max or preset)
    if (currentFilters.minPrice !== null || currentFilters.maxPrice !== null) {
      const min = currentFilters.minPrice !== null ? currentFilters.minPrice : 0;
      const max = currentFilters.maxPrice !== null ? currentFilters.maxPrice : Infinity;
      list = list.filter((p) => {
        const price = getCatalogPriceValue(p);
        if (price === Number.MAX_SAFE_INTEGER) {
          return max >= 2000000 || currentFilters.availability === "custom";
        }
        return price >= min && price <= max;
      });
    } else if (currentFilters.price && currentFilters.price !== "all") {
      list = list.filter((p) => {
        const price = getCatalogPriceValue(p);
        if (price === Number.MAX_SAFE_INTEGER) {
          return currentFilters.price === "above-2000" || currentFilters.availability === "custom";
        }
        if (currentFilters.price === "under-500") return price < 500000;
        if (currentFilters.price === "500-1000") return price >= 500000 && price <= 1000000;
        if (currentFilters.price === "1000-2000") return price >= 1000000 && price <= 2000000;
        if (currentFilters.price === "above-2000") return price > 2000000;
        return true;
      });
    }

    // Availability filter
    if (currentFilters.availability && currentFilters.availability !== "all") {
      list = list.filter((p) => {
        if (currentFilters.availability === "retail") return p.retailEligibility === "retail";
        if (currentFilters.availability === "custom") return p.retailEligibility === "enquiry-only";
        return true;
      });
    }

    // Sorting
    if (currentSort === "price-asc") {
      list.sort((a, b) => getCatalogPriceValue(a) - getCatalogPriceValue(b));
    } else if (currentSort === "price-desc") {
      list.sort((a, b) => getCatalogPriceValue(b) - getCatalogPriceValue(a));
    } else if (currentSort === "name-asc") {
      list.sort((a, b) => (a.name?.short || "").localeCompare(b.name?.short || "", "vi"));
    } else {
      list.sort((a, b) => (a.catalogOrder || 99) - (b.catalogOrder || 99));
    }

    return list;
  };

  const updateFilterCounts = (baseProducts) => {
    const counts = { all: baseProducts.length, "bat-an": 0, "am-chen": 0, "trang-tri": 0, "qua-tang": 0 };
    const priceCounts = { "under-500": 0, "500-1000": 0, "1000-2000": 0, "above-2000": 0 };
    const availCounts = { retail: 0, custom: 0 };

    baseProducts.forEach((p) => {
      if (p.collectionIds?.includes("ban-an") || prototypeData.shopCategories?.["bat-an"]?.productFixtureIds?.includes(p.fixtureId))
        counts["bat-an"]++;
      if (p.collectionIds?.includes("am-chen") || prototypeData.shopCategories?.["am-chen"]?.productFixtureIds?.includes(p.fixtureId))
        counts["am-chen"]++;
      if (p.collectionIds?.includes("goc-nha") || prototypeData.shopCategories?.["trang-tri"]?.productFixtureIds?.includes(p.fixtureId))
        counts["trang-tri"]++;
      if (p.collectionIds?.includes("qua-tang") || prototypeData.shopCategories?.["qua-tang"]?.productFixtureIds?.includes(p.fixtureId))
        counts["qua-tang"]++;

      const price = getCatalogPriceValue(p);
      if (price < 500000) priceCounts["under-500"]++;
      else if (price <= 1000000) priceCounts["500-1000"]++;
      else if (price <= 2000000) priceCounts["1000-2000"]++;
      else priceCounts["above-2000"]++;

      if (p.retailEligibility === "retail") availCounts.retail++;
      else if (p.retailEligibility === "enquiry-only") availCounts.custom++;
    });

    Object.entries(counts).forEach(([cat, countVal]) => {
      const el = document.querySelector(`[data-count-cat="${cat}"]`);
      if (el) el.textContent = countVal;
    });
    Object.entries(priceCounts).forEach(([pr, countVal]) => {
      const el = document.querySelector(`[data-count-price="${pr}"]`);
      if (el) el.textContent = countVal;
    });
    Object.entries(availCounts).forEach(([av, countVal]) => {
      const el = document.querySelector(`[data-count-avail="${av}"]`);
      if (el) el.textContent = countVal;
    });
  };

  const renderActiveChips = () => {
    if (!activeChipsRegion) return;
    const chips = [];
    const categoryLabels = {
      "bat-an": "Bát đĩa bàn ăn",
      "am-chen": "Ấm chén & Ly cốc",
      "trang-tri": "Bình hoa & Trang trí",
      "qua-tang": "Bộ quà tặng",
    };
    const priceLabels = {
      "under-500": "Dưới 500.000₫",
      "500-1000": "500k – 1.000.000₫",
      "1000-2000": "1tr – 2.000.000₫",
      "above-2000": "Trên 2.000.000₫",
    };
    const availLabels = {
      retail: "Có sẵn giao ngay",
      custom: "Chế tác theo yêu cầu",
    };

    if (currentFilters.category !== "all") {
      chips.push({
        key: "category",
        label: `Danh mục: ${categoryLabels[currentFilters.category] || currentFilters.category}`,
      });
    }
    if (currentFilters.minPrice !== null || currentFilters.maxPrice !== null) {
      const minStr = currentFilters.minPrice !== null ? formatVnd(currentFilters.minPrice) : "0₫";
      const maxStr = currentFilters.maxPrice !== null ? formatVnd(currentFilters.maxPrice) : "Trở lên";
      let priceLabel = "";
      if (currentFilters.minPrice !== null && currentFilters.maxPrice !== null) {
        priceLabel = `Giá: ${minStr} – ${maxStr}`;
      } else if (currentFilters.minPrice !== null) {
        priceLabel = `Giá: từ ${minStr}`;
      } else {
        priceLabel = `Giá: đến ${maxStr}`;
      }
      chips.push({
        key: "price-custom",
        label: priceLabel,
      });
    } else if (currentFilters.price !== "all" && currentFilters.price !== "custom") {
      chips.push({
        key: "price",
        label: `Giá: ${priceLabels[currentFilters.price] || currentFilters.price}`,
      });
    }
    if (currentFilters.availability !== "all") {
      chips.push({
        key: "availability",
        label: `Hình thức: ${availLabels[currentFilters.availability] || currentFilters.availability}`,
      });
    }

    const activeCount = chips.length;
    if (filterCountBadge) {
      filterCountBadge.textContent = activeCount;
      filterCountBadge.hidden = activeCount === 0;
    }
    if (filterClearBtn) {
      filterClearBtn.hidden = activeCount === 0;
    }

    if (activeCount === 0) {
      activeChipsRegion.hidden = true;
      activeChipsRegion.innerHTML = "";
      return;
    }

    activeChipsRegion.hidden = false;
    activeChipsRegion.innerHTML = `
      ${chips
        .map(
          (c) => `
        <span class="search-chip">
          <span>${c.label}</span>
          <button type="button" data-remove-filter="${c.key}" aria-label="Xóa bộ lọc ${c.label}">✕</button>
        </span>
      `,
        )
        .join("")}
      <button type="button" class="search-clear-all-chips" data-search-filter-clear>Xóa tất cả bộ lọc</button>
    `;

    activeChipsRegion.querySelectorAll("[data-remove-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-remove-filter");
        if (key === "price" || key === "price-custom") {
          currentFilters.price = "all";
          currentFilters.minPrice = null;
          currentFilters.maxPrice = null;
          if (priceMinInput) priceMinInput.value = "";
          if (priceMaxInput) priceMaxInput.value = "";
          syncSidebarRadios();
          currentPage = 1;
          updateUrlParams();
          renderState();
        } else if (key && currentFilters[key]) {
          currentFilters[key] = "all";
          syncSidebarRadios();
          currentPage = 1;
          updateUrlParams();
          renderState();
        }
      });
    });

    activeChipsRegion
      .querySelector(".search-clear-all-chips")
      ?.addEventListener("click", () => {
        resetAllFilters();
      });
  };

  const resetAllFilters = () => {
    currentFilters = { category: "all", price: "all", minPrice: null, maxPrice: null, availability: "all" };
    if (priceMinInput) priceMinInput.value = "";
    if (priceMaxInput) priceMaxInput.value = "";
    currentPage = 1;
    syncSidebarRadios();
    updateUrlParams();
    renderState();
  };

  const getThemedTopicsMarkup = () => `
    <section class="search-topics-hub">
      <div class="search-topics-hub__header">
        <p class="eyebrow">Khám phá theo danh mục</p>
        <h3>Chủ đề tìm kiếm nổi bật</h3>
        <p>Chọn một chủ đề bạn quan tâm để khám phá nhanh các bộ sưu tập hoặc trao đổi chế tác cùng HEDY.</p>
      </div>
      <div class="search-topic-cards">
        <a href="collection.html?collection=ban-an" class="search-topic-card" data-topic-search="Bát đĩa">
          <div class="search-topic-card__backdrop">
            <img src="materials/img5.jpg" alt="Bàn ăn &amp; Nếp sống" loading="lazy" />
            <div class="search-topic-card__overlay" aria-hidden="true"></div>
          </div>
          <div class="search-topic-card__content">
            <span class="search-topic-card__badge">Bán lẻ có sẵn</span>
            <h4>Bàn ăn &amp; Nếp sống</h4>
            <p>Bát đĩa gốm mộc, khay dĩa vẽ tay mộc mạc cho bữa cơm sum vầy ấm cúng.</p>
            <span class="search-topic-card__link">Khám phá bộ sưu tập <span aria-hidden="true">→</span></span>
          </div>
        </a>
        <a href="collection.html?collection=am-chen" class="search-topic-card" data-topic-search="Ấm chén">
          <div class="search-topic-card__backdrop">
            <img src="materials/product-tea-set.jpg" alt="Ấm chén &amp; Trà đạo" loading="lazy" />
            <div class="search-topic-card__overlay" aria-hidden="true"></div>
          </div>
          <div class="search-topic-card__content">
            <span class="search-topic-card__badge">Bán lẻ có sẵn</span>
            <h4>Ấm chén &amp; Trà đạo</h4>
            <p>Bộ ấm chén trà tĩnh, ly cốc men cát thủ công cho những khoảng lặng an yên.</p>
            <span class="search-topic-card__link">Khám phá bộ sưu tập <span aria-hidden="true">→</span></span>
          </div>
        </a>
        <a href="collection.html?collection=goc-nha" class="search-topic-card" data-topic-search="Bình hoa">
          <div class="search-topic-card__backdrop">
            <img src="materials/img3.jpg" alt="Bình hoa &amp; Trang trí" loading="lazy" />
            <div class="search-topic-card__overlay" aria-hidden="true"></div>
          </div>
          <div class="search-topic-card__content">
            <span class="search-topic-card__badge">Bán lẻ có sẵn</span>
            <h4>Bình hoa &amp; Trang trí</h4>
            <p>Bình hoa dáng tĩnh, lọ hoa vuốt tay tô điểm góc nhà an yên, tĩnh tại.</p>
            <span class="search-topic-card__link">Khám phá bộ sưu tập <span aria-hidden="true">→</span></span>
          </div>
        </a>
        <a href="collection.html?collection=qua-tang" class="search-topic-card" data-topic-search="Quà tặng">
          <div class="search-topic-card__backdrop">
            <img src="materials/img1.jpg" alt="Quà tặng tinh tế" loading="lazy" />
            <div class="search-topic-card__overlay" aria-hidden="true"></div>
          </div>
          <div class="search-topic-card__content">
            <span class="search-topic-card__badge">Đóng hộp chỉn chu</span>
            <h4>Quà tặng tinh tế</h4>
            <p>Hộp quà gốm thủ công trang nhã mừng tân gia, sinh nhật hoặc ngày kỷ niệm.</p>
            <span class="search-topic-card__link">Khám phá bộ sưu tập <span aria-hidden="true">→</span></span>
          </div>
        </a>
        <a href="custom.html?source=search-topic" class="search-topic-card search-topic-card--featured" data-topic-search="Đặt riêng">
          <div class="search-topic-card__backdrop">
            <img src="materials/custom-journey.jpg" alt="Chế tác riêng &amp; Doanh nghiệp" loading="lazy" />
            <div class="search-topic-card__overlay" aria-hidden="true"></div>
          </div>
          <div class="search-topic-card__content">
            <span class="search-topic-card__badge search-topic-card__badge--accent">Trao đổi trước</span>
            <h4>Chế tác &amp; Đặt riêng</h4>
            <p>Khắc logo doanh nghiệp, vật phẩm bài trí không gian &amp; sản phẩm quà tặng đặt riêng theo yêu cầu.</p>
            <span class="search-topic-card__link">Tư vấn chế tác riêng <span aria-hidden="true">↗</span></span>
          </div>
        </a>
      </div>
    </section>
  `;

  const renderSuggestionGroups = (activeQuery = "") => {
    if (!suggestionsRegion) return;
    if (!activeQuery) {
      suggestionsRegion.innerHTML = getThemedTopicsMarkup();
      bindPhase4Grid(suggestionsRegion);
      return;
    }

    const matches = searchPrototypeCatalog(activeQuery);
    const productSuggestions = matches?.products?.slice(0, 4) || [];
    const collectionSuggestions = matches?.collections?.slice(0, 4) || [];

    const productSuggestionMarkup = productSuggestions.length
      ? productSuggestions
          .map((product) =>
            product.fixtureId
              ? `<a href="product.html?fixture=${product.fixtureId}&variant=${product.defaultVariantId || product.variants?.[0]?.id || ""}&from=search" data-discovery-link data-fixture-id="${product.fixtureId}"><strong>${product.name?.short || product.name}</strong><span>${getCatalogPriceLabel(product)} · ${product.productType || "Sản phẩm có sẵn"}</span></a>`
              : `<div><strong>${product.name?.short || product.name}</strong><span>${getCatalogPriceLabel(product)}</span></div>`,
          )
          .join("")
      : '<p class="search-suggestion-empty">Chưa có sản phẩm khớp với từ khóa.</p>';

    const collectionSuggestionMarkup = collectionSuggestions.length
      ? collectionSuggestions
          .map(
            (collection) =>
              `<a href="collection.html?collection=${collection.id}"><strong>${collection.label}</strong><span>${collection.shortDescription}</span></a>`,
          )
          .join("")
      : '<p class="search-suggestion-empty">Chưa có bộ sưu tập khớp với từ khóa.</p>';

    suggestionsRegion.innerHTML = `
      <section class="search-suggestion-group"><p class="eyebrow">Sản phẩm liên quan (${productSuggestions.length})</p>${productSuggestionMarkup}</section>
      <section class="search-suggestion-group"><p class="eyebrow">Bộ sưu tập liên quan (${collectionSuggestions.length})</p>${collectionSuggestionMarkup}</section>
    `;
    bindPhase4Grid(suggestionsRegion);
  };

  const renderRecent = () => {
    const recent = [
      ...readRecentSearches(),
      ...(state === "recent" ? recentFixture : []),
    ]
      .filter(
        (value, index, values) =>
          values.findIndex(
            (item) =>
              normalizeSearchValue(item) === normalizeSearchValue(value),
          ) === index,
      )
      .slice(0, 3);
    renderSuggestionGroups();
    if (!recent.length || !suggestionsRegion) return;
    suggestionsRegion.insertAdjacentHTML(
      "afterbegin",
      `<section class="search-recent"><div><p class="eyebrow">Tìm gần đây trên thiết bị này</p><button type="button" data-clear-recent>Xóa lịch sử mẫu</button></div><div>${recent.map((item) => `<a href="search.html?q=${encodeURIComponent(item)}">${item} <span aria-hidden="true">→</span></a>`).join("")}</div></section>`,
    );
    suggestionsRegion
      .querySelector("[data-clear-recent]")
      ?.addEventListener("click", () => {
        try {
          localStorage.removeItem(RECENT_SEARCH_STORAGE_KEY);
        } catch {
          /* no-op */
        }
        state = "initial";
        renderState();
        input?.focus();
      });
  };

  const renderLoading = (message) => {
    setHeading(
      window.t ? window.t("Đang tìm sản phẩm") : "Đang tìm sản phẩm",
      message,
      window.t ? window.t("Đang tải kết quả") : "Đang tải kết quả"
    );
    if (stateRegion)
      stateRegion.innerHTML = `<div class="status-banner status-banner--pending"><strong>${window.t ? window.t("Đang giữ từ khóa.") : "Đang giữ từ khóa."}</strong><span>${message} ${window.t ? window.t("Bạn vẫn có thể sửa hoặc xóa nội dung tìm.") : "Bạn vẫn có thể sửa hoặc xóa nội dung tìm."}</span></div>`;
    if (resultsRegion)
      resultsRegion.innerHTML =
        '<div class="search-loading-list" aria-hidden="true"><div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div></div>';
  };

  const scrollToResultsTop = () => {
    const target = document.querySelector(".search-toolbar") || document.querySelector(".search-main-content");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderPagination = (totalItems, page, totalPages) => {
    if (!paginationRegion) return;
    if (totalItems <= PAGE_SIZE) {
      paginationRegion.hidden = true;
      paginationRegion.innerHTML = "";
      return;
    }

    paginationRegion.hidden = false;

    const fromItem = (page - 1) * PAGE_SIZE + 1;
    const toItem = Math.min(page * PAGE_SIZE, totalItems);
    const prevText = window.t ? window.t("Trước") : "Trước";
    const nextText = window.t ? window.t("Sau") : "Sau";
    const hienThiStr = window.t ? window.t("Hiển thị") : "Hiển thị";
    const trenStr = window.t ? window.t("trên") : "trên";
    const spStr = window.t ? window.t("sản phẩm") : "sản phẩm";

    let pageButtonsMarkup = "";
    for (let i = 1; i <= totalPages; i++) {
      const isCurrent = i === page;
      pageButtonsMarkup += `
        <button type="button" class="pagination-page-btn${isCurrent ? " is-active" : ""}" data-page="${i}" aria-label="${window.t ? window.t("Trang") : "Trang"} ${i}" ${isCurrent ? 'aria-current="page"' : ""}>
          ${i}
        </button>
      `;
    }

    paginationRegion.innerHTML = `
      <div class="search-pagination__inner">
        <div class="search-pagination__nav">
          <button type="button" class="pagination-nav-btn pagination-nav-btn--prev" data-page-nav="prev" ${page <= 1 ? "disabled" : ""} aria-label="${prevText}">
            <span aria-hidden="true">←</span> <span>${prevText}</span>
          </button>
          <div class="pagination-pages-list">
            ${pageButtonsMarkup}
          </div>
          <button type="button" class="pagination-nav-btn pagination-nav-btn--next" data-page-nav="next" ${page >= totalPages ? "disabled" : ""} aria-label="${nextText}">
            <span>${nextText}</span> <span aria-hidden="true">→</span>
          </button>
        </div>
        <span class="search-pagination__summary">${hienThiStr} ${fromItem}–${toItem} ${trenStr} ${totalItems} ${spStr}</span>
      </div>
    `;

    paginationRegion.querySelectorAll("[data-page]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetPage = parseInt(btn.getAttribute("data-page"), 10);
        if (targetPage && targetPage !== currentPage) {
          currentPage = targetPage;
          updateUrlParams();
          renderState();
          scrollToResultsTop();
        }
      });
    });

    paginationRegion.querySelector('[data-page-nav="prev"]')?.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        updateUrlParams();
        renderState();
        scrollToResultsTop();
      }
    });

    paginationRegion.querySelector('[data-page-nav="next"]')?.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        updateUrlParams();
        renderState();
        scrollToResultsTop();
      }
    });
  };

  const renderResults = (resultSet, restored = false) => {
    const baseProducts = resultSet.products || [];
    updateFilterCounts(baseProducts);
    const filteredProducts = filterAndSortProducts(baseProducts);
    renderActiveChips();

    const hienThiStr = window.t ? window.t("Hiển thị") : "Hiển thị";
    const ketQuaChoStr = window.t ? window.t("kết quả cho") : "kết quả cho";
    const sanPhamStr = window.t ? window.t("sản phẩm") : "sản phẩm";
    const countLabel = query.trim()
      ? `${hienThiStr} ${filteredProducts.length} ${ketQuaChoStr} “${query}”`
      : `${hienThiStr} ${filteredProducts.length} ${sanPhamStr}`;

    setHeading(
      restored 
        ? (window.t ? window.t("Ngữ cảnh đã trở lại") : "Ngữ cảnh đã trở lại") 
        : (query.trim() ? (window.t ? window.t("Kết quả tìm kiếm") : "Kết quả tìm kiếm") : (window.t ? window.t("Tác phẩm gốm mộc") : "Tác phẩm gốm mộc")),
      query.trim() 
        ? `${window.t ? window.t("Kết quả cho") : "Kết quả cho"} “${query}”.` 
        : (window.t ? window.t("Tất cả tác phẩm gốm mộc.") : "Tất cả tác phẩm gốm mộc."),
      countLabel,
    );

    if (restored && stateRegion)
      stateRegion.innerHTML =
        `<div class="status-banner status-banner--success"><strong>${window.t ? window.t("Đã khôi phục kết quả.") : "Đã khôi phục kết quả."}</strong><span>${window.t ? window.t("Từ khóa, nhóm kết quả và vị trí trước khi mở sản phẩm được giữ trong phiên này.") : "Từ khóa, nhóm kết quả và vị trí trước khi mở sản phẩm được giữ trong phiên này."}</span></div>`;

    if (!resultsRegion) return;

    if (filteredProducts.length === 0) {
      if (zeroState) zeroState.hidden = false;
      if (zeroQuery) zeroQuery.textContent = query || "bộ lọc hiện tại";
      if (zeroCollections)
        zeroCollections.innerHTML = (
          fixtureStates["zero-results"]?.recoveryCollectionIds || [
            "ban-an",
            "qua-tang",
          ]
        )
          .map(
            (collectionId) =>
              `<a href="collection.html?collection=${collectionId}">${prototypeData.collections[collectionId].label} <span aria-hidden="true">→</span></a>`,
          )
          .join("");
      resultsRegion.innerHTML = "";
      if (paginationRegion) {
        paginationRegion.hidden = true;
        paginationRegion.innerHTML = "";
      }
      return;
    }

    if (zeroState) zeroState.hidden = true;

    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / PAGE_SIZE) || 1;
    if (currentPage > totalPages) currentPage = 1;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const pagedProducts = filteredProducts.slice(startIndex, startIndex + PAGE_SIZE);

    const productMarkup = `<div class="product-grid phase4-product-grid search-product-grid">${pagedProducts.map((product, index) => getProductCardMarkup(product, { source: "search", idPrefix: "result", eager: index < 3 })).join("")}</div>`;

    const collectionMarkup = resultSet.collections?.length
      ? `<section class="search-result-group"><div class="search-result-group-heading"><p class="eyebrow">Bộ sưu tập phù hợp · ${resultSet.collections.length}</p></div><div class="search-route-grid">${resultSet.collections.map((collection) => `<a href="collection.html?collection=${collection.id}"><span>Bộ sưu tập</span><strong>${collection.label}</strong><p>${collection.shortDescription}</p><i aria-hidden="true">↗</i></a>`).join("")}</div></section>`
      : "";
    const serviceMarkup = resultSet.services?.length
      ? `<section class="search-result-group"><div class="search-result-group-heading"><p class="eyebrow">Đặt riêng theo yêu cầu · ${resultSet.services.length}</p></div><div class="search-route-grid">${resultSet.services.map((service) => `<a href="${service.route}"><span>Cần trao đổi trước</span><strong>${service.label}</strong><p>${service.description}</p><i aria-hidden="true">↗</i></a>`).join("")}</div></section>`
      : "";
    const contentMarkup = resultSet.content?.length
      ? `<section class="search-result-group"><div class="search-result-group-heading"><p class="eyebrow">Nội dung nền · ${resultSet.content.length}</p></div><article class="search-content-pending"><span>Sứ mệnh HEADY · nội dung giới hạn</span><h3>${resultSet.content[0].title}</h3><p>${resultSet.content[0].limitedFallback}</p><a class="text-link" href="story.html">Đọc nguyên tắc xác minh →</a></article></section>`
      : "";

    resultsRegion.innerHTML =
      productMarkup + collectionMarkup + serviceMarkup + contentMarkup;
    resultsRegion
      .querySelectorAll(".phase4-product-grid")
      .forEach((grid) => bindPhase4Grid(grid));

    renderPagination(totalItems, currentPage, totalPages);
  };

  const renderZero = () => {
    updateFilterCounts(getAllCatalogProducts());
    renderActiveChips();
    if (paginationRegion) {
      paginationRegion.hidden = true;
      paginationRegion.innerHTML = "";
    }
    setHeading(
      window.t ? window.t("Không có kết quả") : "Không có kết quả",
      `${window.t ? window.t("Chưa tìm thấy") : "Chưa tìm thấy"} “${query}”.`,
      window.t ? window.t("0 kết quả") : "0 kết quả"
    );
    if (zeroState) zeroState.hidden = false;
    if (zeroQuery) zeroQuery.textContent = query;
    if (zeroCollections)
      zeroCollections.innerHTML = (
        fixtureStates["zero-results"]?.recoveryCollectionIds || [
          "ban-an",
          "qua-tang",
        ]
      )
        .map(
          (collectionId) =>
            `<a href="collection.html?collection=${collectionId}">${prototypeData.collections[collectionId].label} <span aria-hidden="true">→</span></a>`,
        )
        .join("");
  };

  const renderState = () => {
    resetRegions();
    body.dataset.phaseState = state;
    if (input) input.value = query;
    if (clearButton) clearButton.hidden = !query;

    if (state === "initial" || state === "recent" || state === "cleared") {
      setHeading(
        state === "recent" ? (window.t ? window.t("Quay lại một từ đã tìm") : "Quay lại một từ đã tìm") : (window.t ? window.t("Bắt đầu khám phá") : "Bắt đầu khám phá"),
        state === "recent" ? (window.t ? window.t("Tìm kiếm gần đây.") : "Tìm kiếm gần đây.") : (window.t ? window.t("Tất cả tác phẩm gốm mộc.") : "Tất cả tác phẩm gốm mộc."),
        window.t ? window.t("Hiển thị 32 sản phẩm") : "Hiển thị 32 sản phẩm",
      );
      renderRecent();
      const allCatalog = getAllCatalogProducts();
      renderResults({
        products: allCatalog,
        collections: [],
        services: [],
        content: [],
      });
      if (state === "cleared" && stateRegion)
        stateRegion.innerHTML =
          `<div class="status-banner status-banner--success"><strong>${window.t ? window.t("Đã xóa từ khóa.") : "Đã xóa từ khóa."}</strong><span>${window.t ? window.t("Hiển thị lại toàn bộ tác phẩm có sẵn.") : "Hiển thị lại toàn bộ tác phẩm có sẵn."}</span></div>`;
      return;
    }
    if (state === "empty-query") {
      setHeading(
        window.t ? window.t("Chưa có từ khóa") : "Chưa có từ khóa",
        window.t ? window.t("Nhập một điều bạn muốn tìm.") : "Nhập một điều bạn muốn tìm.",
        window.t ? window.t("Không gửi truy vấn trống") : "Không gửi truy vấn trống",
      );
      if (stateRegion)
        stateRegion.innerHTML =
          `<div class="status-banner status-banner--warning"><strong>${window.t ? window.t("Chưa thể tìm với ô trống.") : "Chưa thể tìm với ô trống."}</strong><span>${window.t ? window.t("Bạn có thể nhập từ khóa hoặc chọn một gợi ý bên dưới.") : "Bạn có thể nhập từ khóa hoặc chọn một gợi ý bên dưới."}</span></div>`;
      renderSuggestionGroups();
      return;
    }
    if (state === "typing") {
      setHeading(
        window.t ? window.t("Đang nhập") : "Đang nhập",
        `${window.t ? window.t("Gợi ý cho") : "Gợi ý cho"} “${query}”.`,
        window.t ? window.t("Có thể gửi trực tiếp") : "Có thể gửi trực tiếp"
      );
      if (stateRegion)
        stateRegion.innerHTML =
          `<div class="status-banner status-banner--pending"><strong>${window.t ? window.t("Gợi ý đang được chuẩn bị.") : "Gợi ý đang được chuẩn bị."}</strong><span>${window.t ? window.t("Nút Tìm vẫn khả dụng; bạn không cần đợi hoặc chọn autocomplete.") : "Nút Tìm vẫn khả dụng; bạn không cần đợi hoặc chọn autocomplete."}</span></div>`;
      renderSuggestionGroups(query);
      return;
    }
    if (state === "suggestions") {
      setHeading(
        window.t ? window.t("Gợi ý liên quan") : "Gợi ý liên quan",
        `${window.t ? window.t("Gợi ý cho") : "Gợi ý cho"} “${query}”.`,
        window.t ? window.t("Sản phẩm · Bộ sưu tập") : "Sản phẩm · Bộ sưu tập",
      );
      renderSuggestionGroups(query);
      return;
    }
    if (state === "loading" || state === "retrying") {
      renderLoading(
        state === "retrying"
          ? `${window.t ? window.t("Đang thử lại") : "Đang thử lại"} “${query}”…`
          : `${window.t ? window.t("Đang tìm") : "Đang tìm"} “${query}”…`,
      );
      return;
    }
    if (state === "service-error") {
      setHeading(
        window.t ? window.t("Tìm kiếm tạm gián đoạn") : "Tìm kiếm tạm gián đoạn",
        `${window.t ? window.t("Từ khóa") : "Từ khóa"} “${query}” ${window.t ? window.t("vẫn được giữ.") : "vẫn được giữ."}`,
        window.t ? window.t("Chưa thể cập nhật kết quả") : "Chưa thể cập nhật kết quả",
      );
      if (stateRegion)
        stateRegion.innerHTML =
          `<div class="status-banner status-banner--error"><strong>${window.t ? window.t("Chưa tải được kết quả.") : "Chưa tải được kết quả."}</strong><span>${window.t ? window.t("Không cần nhập lại từ khóa.") : "Không cần nhập lại từ khóa."} <button type="button" data-search-retry>${window.t ? window.t("Thử lại") : "Thử lại"}</button> ${window.t ? window.t("hoặc") : "hoặc"} <a href="shop.html">${window.t ? window.t("về Cửa hàng") : "về Cửa hàng"}</a>.</span></div>`;
      stateRegion
        ?.querySelector("[data-search-retry]")
        ?.addEventListener("click", () => {
          state = "retrying";
          renderState();
          window.setTimeout(() => {
            state =
              searchPrototypeCatalog(query).products.length ||
              searchPrototypeCatalog(query).collections.length
                ? "mixed-results"
                : "zero-results";
            renderState();
            title?.focus();
          }, 420);
        });
      return;
    }
    if (state === "zero-results") {
      renderZero();
      return;
    }
    let resultSet = searchPrototypeCatalog(query);
    if (state === "mixed-results" && requestedState === "mixed-results") {
      const fixture = fixtureStates["mixed-results"];
      resultSet = {
        products: fixture.productFixtureIds.map(
          (id) => prototypeData.products[id],
        ),
        collections: fixture.collectionIds.map(
          (id) => prototypeData.collections[id],
        ),
        content: fixture.contentIds.map(
          (id) => prototypeData.contentEntries[id],
        ),
        services: [
          {
            label: "Quà tặng cá nhân đặt riêng",
            route: fixture.serviceRoutes[0],
            description:
              "Chuẩn bị dịp tặng, số lượng, nội dung, thời điểm và nơi giao.",
          },
          {
            label: "Quà tặng doanh nghiệp",
            route: fixture.serviceRoutes[1],
            description:
              "Chuẩn bị loại quà, số lượng, logo hoặc nội dung, thời điểm và địa điểm giao.",
          },
        ],
      };
    }
    renderResults(
      resultSet,
      state === "restored-context" || Boolean(restoredDiscoveryContext),
    );
  };

  form?.addEventListener("submit", (event) => {
    const nextQuery = input?.value.trim() || "";
    if (!nextQuery) {
      event.preventDefault();
      query = "";
      currentPage = 1;
      state = "empty-query";
      renderState();
      title?.focus();
      return;
    }
    currentPage = 1;
    saveRecentSearch(nextQuery);
  });

  input?.addEventListener("input", () => {
    query = input.value;
    if (clearButton) clearButton.hidden = !query;
    state = query.trim() ? "suggestions" : "initial";
    currentPage = 1;
    renderState();
  });

  clearButton?.addEventListener("click", () => {
    query = "";
    currentPage = 1;
    state = "cleared";
    updateUrlParams();
    renderState();
    input?.focus();
  });

  document
    .querySelectorAll(".search-tag-pill[data-search-query]")
    .forEach((pill) => {
      pill.addEventListener("click", () => {
        const term = pill.getAttribute("data-search-query");
        if (!term) return;
        if (input) input.value = term;
        query = term;
        currentPage = 1;
        const results = searchPrototypeCatalog(term);
        state = Object.values(results).flat().length
          ? "mixed-results"
          : "zero-results";
        saveRecentSearch(term);
        updateUrlParams();
        renderState();
        title?.focus();
      });
    });

  // Filter change handlers
  document.querySelectorAll('input[name="filter-category"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      currentFilters.category = radio.value;
      currentPage = 1;
      syncSidebarRadios();
      updateUrlParams();
      renderState();
    });
  });

  document.querySelectorAll('input[name="filter-price"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      currentFilters.price = radio.value;
      currentFilters.minPrice = null;
      currentFilters.maxPrice = null;
      if (priceMinInput) priceMinInput.value = "";
      if (priceMaxInput) priceMaxInput.value = "";
      currentPage = 1;
      updateUrlParams();
      renderState();
    });
  });

  priceCustomForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const minVal = priceMinInput?.value ? parseInt(priceMinInput.value, 10) : null;
    const maxVal = priceMaxInput?.value ? parseInt(priceMaxInput.value, 10) : null;

    if (minVal !== null && maxVal !== null && minVal > maxVal) {
      alert("Giá tối thiểu không thể lớn hơn giá tối đa.");
      return;
    }

    currentFilters.minPrice = minVal;
    currentFilters.maxPrice = maxVal;
    if (minVal !== null || maxVal !== null) {
      currentFilters.price = "custom";
      document.querySelectorAll('input[name="filter-price"]').forEach((r) => (r.checked = false));
    } else {
      currentFilters.price = "all";
      const allPriceRadio = document.querySelector('input[name="filter-price"][value="all"]');
      if (allPriceRadio) allPriceRadio.checked = true;
    }
    currentPage = 1;
    updateUrlParams();
    renderState();
  });

  document.querySelectorAll('input[name="filter-avail"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      currentFilters.availability = radio.value;
      currentPage = 1;
      updateUrlParams();
      renderState();
    });
  });

  fastCatPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const cat = pill.getAttribute("data-fast-cat");
      if (!cat) return;
      currentFilters.category = cat;
      currentPage = 1;
      syncSidebarRadios();
      updateUrlParams();
      renderState();
    });
  });

  sortSelect?.addEventListener("change", () => {
    currentSort = sortSelect.value;
    currentPage = 1;
    updateUrlParams();
    renderState();
  });

  filterClearBtn?.addEventListener("click", () => {
    resetAllFilters();
  });

  resetAllBtn?.addEventListener("click", () => {
    query = "";
    if (input) input.value = "";
    if (clearButton) clearButton.hidden = true;
    state = "initial";
    resetAllFilters();
  });

  // Mobile drawer controls
  const openDrawer = () => {
    if (!sidebar) return;
    sidebar.classList.add("is-open");
    sidebar.setAttribute("aria-hidden", "false");
    mobileFilterTrigger?.setAttribute("aria-expanded", "true");
    if (pageScrim) pageScrim.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    if (!sidebar) return;
    sidebar.classList.remove("is-open");
    sidebar.setAttribute("aria-hidden", "true");
    mobileFilterTrigger?.setAttribute("aria-expanded", "false");
    if (pageScrim) pageScrim.classList.remove("open");
    document.body.style.overflow = "";
  };

  mobileFilterTrigger?.addEventListener("click", openDrawer);
  sidebarCloseBtn?.addEventListener("click", closeDrawer);
  sidebarApplyBtn?.addEventListener("click", closeDrawer);
  pageScrim?.addEventListener("click", () => {
    if (sidebar?.classList.contains("is-open")) closeDrawer();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar?.classList.contains("is-open")) {
      closeDrawer();
      mobileFilterTrigger?.focus();
    }
  });

  renderState();
  if (["mixed-results", "restored-context"].includes(state) && query)
    saveRecentSearch(query);
  consumeDiscoveryContext(restoredDiscoveryContext);
};

const initDiscoveryReturn = () => {
  if (pageId !== "product") return;
  let context = null;
  try {
    context = JSON.parse(
      sessionStorage.getItem(DISCOVERY_STORAGE_KEY) || "null",
    );
  } catch {
    context = null;
  }
  if (
    !context?.sourceUrl ||
    !["collection", "search", "shop"].includes(context.sourcePage)
  )
    return;
  const breadcrumbLinks = document.querySelectorAll(".breadcrumbs a");
  const sourceLink = breadcrumbLinks[breadcrumbLinks.length - 1];
  if (sourceLink) {
    sourceLink.href = context.sourceUrl;
    sourceLink.textContent = context.sourceLabel;
  }
  const breadcrumbs = document.querySelector(".breadcrumbs");
  if (breadcrumbs) {
    const returnNote = document.createElement("div");
    returnNote.className = "discovery-return section-shell";
    returnNote.innerHTML = `<a href="${context.sourceUrl}">← ${window.t ? window.t("Quay lại") : "Quay lại"} ${context.sourceLabel}</a><span>${window.t ? window.t("Bộ lọc, thứ tự và vị trí được giữ trong phiên này.") : "Bộ lọc, thứ tự và vị trí được giữ trong phiên này."}</span>`;
    breadcrumbs.insertAdjacentElement("afterend", returnNote);
  }
};

const cloneFixture = (value) => JSON.parse(JSON.stringify(value));

const mergeFixturePatch = (base, patch) => {
  if (!patch || typeof patch !== "object" || Array.isArray(patch))
    return patch === undefined ? base : patch;
  const next = { ...(base || {}) };
  Object.entries(patch).forEach(([key, value]) => {
    next[key] =
      value && typeof value === "object" && !Array.isArray(value)
        ? mergeFixturePatch(next[key], value)
        : value;
  });
  return next;
};

const phase5ProductStates = new Set(prototypeData.stateFixtures?.product || []);
const productAvailability = (product, variant) => {
  const eligibility = variant?.retailEligibility || product?.retailEligibility;
  const inventoryState = variant?.inventory?.state;
  if (eligibility === "enquiry-only" || inventoryState === "not-retail") {
    return { label: window.t ? window.t("Chỉ trao đổi đặt riêng") : "Chỉ trao đổi đặt riêng", tone: "pending", retail: false };
  }
  if (eligibility === "not-approved") {
    return {
      label: window.t ? window.t("Chưa được duyệt để bán lẻ") : "Chưa được duyệt để bán lẻ",
      tone: "warning",
      retail: false,
    };
  }
  if (eligibility === "sold-out" || inventoryState === "sold-out") {
    return {
      label: window.t ? window.t("Tạm hết trong fixture mẫu") : "Tạm hết trong fixture mẫu",
      tone: "warning",
      retail: false,
    };
  }
  if (
    eligibility === "unavailable" ||
    inventoryState === "unavailable-combination"
  ) {
    return { label: window.t ? window.t("Tổ hợp không khả dụng") : "Tổ hợp không khả dụng", tone: "error", retail: false };
  }
  if (eligibility === "retail-manual-delivery") {
    return {
      label: window.t ? window.t("Có thể chọn · phí giao xác nhận riêng") : "Có thể chọn · phí giao xác nhận riêng",
      tone: "pending",
      retail: inventoryState === "in-stock",
    };
  }
  return {
    label: window.t ? window.t("Có sẵn để đặt") : "Có sẵn để đặt",
    tone: "success",
    retail: inventoryState === "in-stock",
  };
};

const phase5MediaRole = (role) => {
  const t = window.t || (s => s);
  if (role.includes("primary")) return t("Toàn cảnh");
  if (role.includes("detail")) return t("Bề mặt");
  if (role.includes("scale")) return t("Tỷ lệ");
  if (role.includes("context")) return t("Bối cảnh");
  if (role.includes("fallback")) return t("Phiên bản");
  return t("Hình ảnh");
};

const resolveProductView = () => {
  const query = new URLSearchParams(window.location.search);
  const requestedState = phase5ProductStates.has(query.get("state"))
    ? query.get("state")
    : "default";
  const overrides = prototypeData.commerceFixtures?.productOverrides || {};
  const override = overrides[requestedState] || overrides.default;
  const requestedFixtureId = query.get("fixture");
  const baseFixtureId = prototypeData.products?.[requestedFixtureId]
    ? requestedFixtureId
    : override.baseFixtureId;
  let product = cloneFixture(
    prototypeData.products?.[baseFixtureId] ||
      prototypeData.products?.["multi-variant"],
  );
  if (baseFixtureId === override.baseFixtureId && override.productPatch) {
    product = mergeFixturePatch(product, override.productPatch);
  }
  const requestedVariantId = query.get("variant");
  const overrideVariantId =
    baseFixtureId === override.baseFixtureId
      ? override.variantId
      : product.defaultVariantId;
  const selectedVariantId = product.variants.some(
    (variant) => variant.id === requestedVariantId,
  )
    ? requestedVariantId
    : overrideVariantId;
  let variant = cloneFixture(
    product.variants.find((item) => item.id === selectedVariantId) ||
      product.variants[0],
  );
  if (
    baseFixtureId === override.baseFixtureId &&
    variant.id === override.variantId &&
    override.variantPatch
  ) {
    variant = mergeFixturePatch(variant, override.variantPatch);
  }
  product.variants = product.variants.map((item) =>
    item.id === variant.id ? cloneFixture(variant) : item,
  );
  const mediaPatch =
    baseFixtureId === override.baseFixtureId ? override.mediaPatch : null;
  return { query, requestedState, override, product, variant, mediaPatch };
};

const buildProductMedia = (product, variant, mediaPatch) => {
  const primaryAssetId = mediaPatch?.primaryAssetId || variant.primaryAssetId;
  const primaryMedia =
    product.media.find((item) => item.assetId === variant.primaryAssetId) ||
    product.media.find((item) => item.status === "prototype-only") ||
    product.media[0];
  const media = [
    {
      assetId: primaryAssetId,
      role: primaryMedia?.role || "prototype-primary",
      altIntent:
        primaryMedia?.altIntent || `${window.t ? window.t("Hình minh họa cho") : "Hình minh họa cho"} ${product.name.short}.`,
      status:
        mediaPatch?.state ||
        getAsset(primaryAssetId)?.rightsStatus ||
        primaryMedia?.status,
      fallbackText:
        mediaPatch?.fallbackText || (window.t ? window.t("Ảnh sản phẩm đang được cập nhật.") : "Ảnh sản phẩm đang được cập nhật."),
    },
  ];
  product.media.forEach((item) => {
    if (!media.some((entry) => entry.assetId === item.assetId))
      media.push({ ...item });
  });
  return media.slice(0, 4);
};

const productMediaPlaceholder = (item, index) => `
  <div class="phase5-media-placeholder" data-media-placeholder>
    <span aria-hidden="true">H</span>
    <strong>${phase5MediaRole(item.role)} ${window.t ? window.t("đang được cập nhật") : "đang được cập nhật"}</strong>
    <small>${item.fallbackText || item.altIntent || (window.t ? window.t("Chưa có hình ảnh được phép công bố.") : "Chưa có hình ảnh được phép công bố.")}</small>
    ${index === 0 && item.status === "failed" ? `<button type="button" data-media-retry>${window.t ? window.t("Thử tải lại") : "Thử tải lại"}</button>` : ""}
  </div>
`;

const productMainMediaMarkup = (item, index = 0) => {
  const path = getAssetPath(item.assetId);
  if (!path) return productMediaPlaceholder(item, index);
  const asset = getAsset(item.assetId);
  return `
    <button class="phase5-main-media-button" type="button" data-gallery-open aria-label="${window.t ? window.t("Mở ảnh lớn:") : "Mở ảnh lớn:"} ${item.altIntent}">
      <img class="is-loading" src="${path}" alt="${item.altIntent}" width="${asset.width}" height="${asset.height}" ${index === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async" style="--media-focal: ${asset.focalPoint || "50% 50%"}" data-product-main-image />
      <span>${window.t ? window.t("Mở ảnh lớn ↗") : "Mở ảnh lớn ↗"}</span>
    </button>
  `;
};

const phase5ProductStateBanner = (view) => {
  const { requestedState, override, product, variant } = view;
  if (requestedState === "price-changed") {
    return `<div class="status-banner status-banner--warning phase5-product-banner"><strong>${window.t ? window.t("Giá fixture đã thay đổi.") : "Giá fixture đã thay đổi."}</strong><span>${window.t ? window.t("Giá trước") : "Giá trước"} ${formatVnd(override.previousPriceVnd)}; ${window.t ? window.t("giá hiện tại") : "giá hiện tại"} ${formatVnd(variant.priceVnd)}. ${window.t ? window.t("Giỏ sẽ yêu cầu xác nhận trước khi tiếp tục.") : "Giỏ sẽ yêu cầu xác nhận trước khi tiếp tục."}</span></div>`;
  }
  if (requestedState === "media-failure") {
    return `<div class="status-banner status-banner--warning phase5-product-banner"><strong>${window.t ? window.t("Ảnh chính chưa tải được.") : "Ảnh chính chưa tải được."}</strong><span>${window.t ? window.t("Thông tin, lựa chọn và hành động vẫn còn; hình thay thế không được dùng để suy diễn sản phẩm.") : "Thông tin, lựa chọn và hành động vẫn còn; hình thay thế không được dùng để suy diễn sản phẩm."}</span></div>`;
  }
  if (requestedState === "made-to-order-review-only") {
    return `<div class="status-banner status-banner--warning phase5-product-banner"><strong>${window.t ? window.t("Trạng thái chỉ dành cho review.") : "Trạng thái chỉ dành cho review."}</strong><span>${override.customerText}</span></div>`;
  }
  if (
    requestedState === "invalid-combination" ||
    variant.inventory?.state === "unavailable-combination"
  ) {
    return `<div class="status-banner status-banner--error phase5-product-banner"><strong>${window.t ? window.t("Tổ hợp đã chọn không khả dụng.") : "Tổ hợp đã chọn không khả dụng."}</strong><span>${variant.unavailableReason || (window.t ? window.t("Chọn một phiên bản khả dụng hoặc mở Đặt riêng.") : "Chọn một phiên bản khả dụng hoặc mở Đặt riêng.")}</span></div>`;
  }
  if (
    requestedState === "sold-out" ||
    variant.inventory?.state === "sold-out"
  ) {
    return `<div class="status-banner status-banner--warning phase5-product-banner"><strong>${window.t ? window.t("Không thể thêm lựa chọn này.") : "Không thể thêm lựa chọn này."}</strong><span>${override.customerText || (window.t ? window.t("Xem món liên quan hoặc trao đổi một yêu cầu tương tự.") : "Xem món liên quan hoặc trao đổi một yêu cầu tương tự.")}</span></div>`;
  }
  if (product.retailEligibility === "enquiry-only") {
    return `<div class="status-banner status-banner--pending phase5-product-banner"><strong>${window.t ? window.t("Đây là khả năng đặt riêng, không phải SKU bán lẻ.") : "Đây là khả năng đặt riêng, không phải SKU bán lẻ."}</strong><span>${window.t ? window.t("Gửi ngữ cảnh không tạo đơn hàng hoặc báo giá.") : "Gửi ngữ cảnh không tạo đơn hàng hoặc báo giá."}</span></div>`;
  }
  return '';
};

const phase5VariantMarkup = (product, selectedVariant) => {
  if (product.variants.length === 1) {
    return `
      <div class="phase5-single-variant">
        <span>${window.t ? window.t("Phiên bản") : "Phiên bản"}</span>
        <strong>${selectedVariant.label}</strong>
      </div>
    `;
  }
  return `
    <fieldset class="phase5-variant-fieldset">
      <legend>${window.t ? window.t("Chọn phiên bản") : "Chọn phiên bản"} <span>${window.t ? window.t("Đã chọn:") : "Đã chọn:"} ${selectedVariant.label}</span></legend>
      <div class="phase5-variant-grid">
        ${product.variants
          .map((variant) => {
            const availability = productAvailability(product, variant);
            const isSelected = variant.id === selectedVariant.id;
            const disabled =
              !availability.retail &&
              variant.inventory?.state === "unavailable-combination";
            return `
            <button class="phase5-variant-option${isSelected ? " is-active" : ""}" type="button" data-product-variant="${variant.id}" aria-pressed="${isSelected}" ${disabled ? "disabled" : ""}>
              <span>${variant.label}</span>
              <small>${Number.isInteger(variant.priceVnd) ? formatVnd(variant.priceVnd) : (window.t ? window.t("Báo giá riêng") : "Báo giá riêng")} · ${availability.label}</small>
            </button>
          `;
          })
          .join("")}
      </div>
      ${
        product.variants.some(
          (variant) => variant.inventory?.state === "unavailable-combination",
        )
          ? `\n<p class="disabled-reason">${window.t ? window.t("“Đất · Bộ bốn” không có trong mẻ fixture; nút được vô hiệu hóa. Chọn Bộ đôi, men Sương hoặc mở Đặt riêng.") : "“Đất · Bộ bốn” không có trong mẻ fixture; nút được vô hiệu hóa. Chọn Bộ đôi, men Sương hoặc mở Đặt riêng."}</p>`
          : ""
      }
    </fieldset>
  `;
};

const phase5ProductActionMarkup = (product, variant) => {
  const availability = productAvailability(product, variant);
  if (availability.retail) {
    return `
      <div class="phase5-purchase-actions" data-main-purchase-action>
        <div class="quantity-picker" aria-label="Số lượng">
          <button type="button" data-product-quantity-minus aria-label="${window.t ? window.t("Giảm số lượng") : "Giảm số lượng"}">−</button>
          <output data-product-quantity aria-live="polite">1</output>
          <button type="button" data-product-quantity-plus aria-label="${window.t ? window.t("Tăng số lượng") : "Tăng số lượng"}">+</button>
        </div>
        <button class="button button--dark phase5-product-add" type="button" data-phase5-add>${window.t ? window.t("Thêm đúng phiên bản") : "Thêm đúng phiên bản"} <span aria-hidden="true">→</span></button>
      </div>
      <p class="phase5-quantity-note">${window.t ? window.t("Tối đa") : "Tối đa"} ${variant.inventory.sellableQuantity} ${window.t ? window.t("trong fixture này. Tồn kho chỉ được giữ sau khi một đơn thật được xác nhận.") : "trong fixture này. Tồn kho chỉ được giữ sau khi một đơn thật được xác nhận."}</p>
    `;
  }
  return `
    <div class="phase5-consultation-actions" data-main-purchase-action>
      <button class="button button--dark contact-trigger" type="button" data-contact-state="contextual" data-contact-source="product" data-contact-fixture="${product.fixtureId}" data-contact-label="${product.name.short} · ${variant.label}">${window.t ? window.t("Chọn kênh trao đổi") : "Chọn kênh trao đổi"} <span aria-hidden="true">↗</span></button>
      <a class="button button--outline" href="${product.related.serviceRoute}&amp;fixture=${product.fixtureId}&amp;variant=${variant.id}">${window.t ? window.t("Xem hành trình Đặt riêng") : "Xem hành trình Đặt riêng"}</a>
    </div>
    <p class="phase5-quantity-note">${window.t ? window.t("Lựa chọn hiện tại và những món đã có trong giỏ không bị xóa khi bạn mở Đặt riêng.") : "Lựa chọn hiện tại và những món đã có trong giỏ không bị xóa khi bạn mở Đặt riêng."}</p>
  `;
};

const phase5FactMarkup = (label, value) => `
  <div><dt>${label}</dt><dd>${value}</dd></div>
`;

const phase5RelatedCard = (product) => {
  const variant = getVariant(product.fixtureId, product.defaultVariantId);
  const availability = productAvailability(product, variant);
  const asset = getPrimaryAssetRecord(product, variant);
  return `
    <article class="phase5-related-card">
      <a class="phase5-related-media" href="product.html?fixture=${product.fixtureId}&amp;variant=${variant.id}">
        <img src="${asset.path}" alt="${product.name.short}" width="${asset.width}" height="${asset.height}" loading="lazy" decoding="async" style="--media-focal: ${asset.focalPoint || '50% 50%'}" />
      </a>
      <div>
        <span>${availability.label}</span>
        <h3><a href="product.html?fixture=${product.fixtureId}&amp;variant=${variant.id}">${product.name.short}</a></h3>
        <p>${Number.isInteger(variant.priceVnd) ? formatVnd(variant.priceVnd) : (window.t ? window.t("Báo giá riêng sau trao đổi") : "Báo giá riêng sau trao đổi")}</p>
      </div>
    </article>
  `;
};

const initPhase5Product = () => {
  const root = document.querySelector("[data-phase5-product]");
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
      : product.catalogPrice.customerText || "Báo giá riêng sau trao đổi";
    const relatedProducts = (product.related?.productFixtureIds || [])
      .map((id) => getProduct(id))
      .filter(Boolean);
    const manualDelivery =
      product.facts?.packedShippingProfile?.deliveryTreatment ===
      "manual-quote";
    const translatedName = window.t ? window.t(product.name.short) : product.name.short;
    document.title = `${translatedName} — HEDY ATELIER`;
    root.innerHTML = `
      <nav class="breadcrumbs section-shell" aria-label="${window.t ? window.t("Đường dẫn") : "Đường dẫn"}">
        <a href="index.html">${window.t ? window.t("Trang chủ") : "Trang chủ"}</a><span>/</span><a href="shop.html">${window.t ? window.t("Cửa hàng") : "Cửa hàng"}</a><span>/</span><span aria-current="page">${product.name.short}</span>
      </nav>
      <div class="phase5-product-return" data-phase5-return-anchor></div>
      <section class="phase5-product-detail" aria-labelledby="phase5-product-title">
        <div class="phase5-product-gallery" data-product-gallery>
          <div class="phase5-product-main" data-product-main>
            ${productMainMediaMarkup(media[activeMediaIndex] || media[0], activeMediaIndex)}
            <span class="image-counter">${String(activeMediaIndex + 1).padStart(2, "0")} / ${String(media.length).padStart(2, "0")}</span>
          </div>
          <div class="phase5-thumbnails" role="group" aria-label="${window.t ? window.t("Hình ảnh sản phẩm") : "Hình ảnh sản phẩm"}">
            ${media
              .map((item, index) => {
                const path = getAssetPath(item.assetId);
                return `
                <button class="phase5-gallery-thumb${index === activeMediaIndex ? " is-active" : ""}" type="button" data-product-media-index="${index}" aria-pressed="${index === activeMediaIndex}" aria-label="${phase5MediaRole(item.role)}: ${item.altIntent}">
                  ${path ? `<img src="${path}" alt="" width="${getAsset(item.assetId).width}" height="${getAsset(item.assetId).height}" loading="lazy" decoding="async" />` : '<span aria-hidden="true">H</span>'}
                  <small>${phase5MediaRole(item.role)}</small>
                </button>
              `;
              })
              .join("")}
          </div>
          <p class="phase5-media-caption" data-media-caption>${media[activeMediaIndex]?.altIntent || ""}</p>
        </div>
        <div class="phase5-product-purchase">
          <div class="phase5-product-heading">
            <p class="eyebrow">${product.productType}</p>
            <h1 id="phase5-product-title">${product.name.short}</h1>
            <p class="phase5-product-long-name">${product.name.long}</p>
            <div class="phase5-product-price"><strong>${price}</strong></div>
            <p class="phase5-availability" data-tone="${availability.tone}"><i aria-hidden="true"></i><strong>${availability.label}</strong></p>
            <p class="phase5-product-lede">${product.description.short}</p>
          </div>
          ${phase5ProductStateBanner(view)}
          <form class="phase5-purchase-form" aria-label="${window.t ? window.t("Lựa chọn sản phẩm") : "Lựa chọn sản phẩm"}">
            ${phase5VariantMarkup(product, variant)}
            <div class="phase5-selection-facts" aria-live="polite" aria-atomic="true">
              <span>SKU <strong>${variant.sku || (window.t ? window.t("Không áp dụng") : 'Không áp dụng')}</strong></span>
              <span>${window.t ? window.t("Tồn kho") : "Tồn kho"} <strong>${variant.inventory?.state === 'in-stock' ? `${variant.inventory.sellableQuantity}` : availability.label}</strong></span>
              <span>${window.t ? window.t("Thời gian") : "Thời gian"} <strong>${variant.leadTime?.customerText || (window.t ? window.t("Xác nhận sau trao đổi") : 'Xác nhận sau trao đổi')}</strong></span>
            </div>
            ${phase5ProductActionMarkup(product, variant)}
            <p class="inline-confirmation add-inline-confirmation phase5-add-confirmation" role="status" aria-live="polite"></p>
          </form>
          <aside class="phase5-custom-escalation">
            <p class="eyebrow">${window.t ? window.t("Khác với mua bán lẻ") : "Khác với mua bán lẻ"}</p>
            <h2>${window.t ? window.t("Cần dấu riêng, số lượng hoặc phương án khác?") : "Cần dấu riêng, số lượng hoặc phương án khác?"}</h2>
            <p>${product.customEscalation.customerText}</p>
            <a href="${product.related.serviceRoute}&amp;fixture=${product.fixtureId}&amp;variant=${variant.id}">${window.t ? window.t("Chuẩn bị yêu cầu Đặt riêng →") : "Chuẩn bị yêu cầu Đặt riêng →"}</a>
          </aside>
          <div class="phase5-product-accordions">
            <details open><summary>${window.t ? window.t("Mô tả & kích thước") : "Mô tả &amp; kích thước"} <span aria-hidden="true">+</span></summary><div><p>${product.description.long}</p><p>${product.facts.dimensions.customerText}</p></div></details>
            <details><summary>${window.t ? window.t("Chất liệu, hoàn thiện & giới hạn sử dụng") : "Chất liệu, hoàn thiện &amp; giới hạn sử dụng"} <span aria-hidden="true">+</span></summary><div><p><strong>${window.t ? window.t("Chất liệu:") : "Chất liệu:"}</strong> ${product.facts.material}</p><p><strong>${window.t ? window.t("Hoàn thiện:") : "Hoàn thiện:"}</strong> ${product.facts.finish}</p><p><strong>${window.t ? window.t("Giới hạn:") : "Giới hạn:"}</strong> ${product.facts.useRestrictions}</p></div></details>
            <details><summary>${window.t ? window.t("Chăm sóc & biến thiên") : "Chăm sóc &amp; biến thiên"} <span aria-hidden="true">+</span></summary><div><p>${product.facts.care}</p><p>${product.facts.handmadeVariation}</p></div></details>
            <details><summary>${window.t ? window.t("Đóng gói, giao hàng & chính sách") : "Đóng gói, giao hàng &amp; chính sách"} <span aria-hidden="true">+</span></summary><div><p>${product.facts.packaging}</p><p>${product.facts.policySummary}</p><p>${manualDelivery ? (window.t ? window.t("Fixture lớn/dễ vỡ này chuyển sang yêu cầu xác nhận phí giao riêng; phí và tổng cuối chưa được tính.") : "Fixture lớn/dễ vỡ này chuyển sang yêu cầu xác nhận phí giao riêng; phí và tổng cuối chưa được tính.") : (window.t ? window.t("Phí giao hàng được tính tại Thanh toán sau khi có địa chỉ và hồ sơ kiện hàng; không mặc định là miễn phí.") : "Phí giao hàng được tính tại Thanh toán sau khi có địa chỉ và hồ sơ kiện hàng; không mặc định là miễn phí.")}</p><div class="phase5-policy-links">${(product.policyLinks || []).map((href, index) => `<a href="${href}">${index === 0 ? (window.t ? window.t("Giao hàng & chính sách") : "Giao hàng & chính sách") : index === 1 ? (window.t ? window.t("Thanh toán / đổi trả") : "Thanh toán / đổi trả") : (window.t ? window.t("Thông tin liên quan") : "Thông tin liên quan")} →</a>`).join("")}</div></div></details>
          </div>
          <dl class="phase5-product-facts">
            ${phase5FactMarkup("Fixture", product.fixtureId)}
            ${phase5FactMarkup(window.t ? window.t("Phiên bản") : "Phiên bản", variant.label)}
            ${phase5FactMarkup(window.t ? window.t("Xử lý giao") : "Xử lý giao", manualDelivery ? (window.t ? window.t("Báo phí thủ công") : "Báo phí thủ công") : (window.t ? window.t("Tính sau khi có địa chỉ") : "Tính sau khi có địa chỉ"))}
          </dl>
        </div>
      </section>
      <section class="phase5-related section-shell" aria-labelledby="phase5-related-title">
        <div class="section-heading"><div><p class="eyebrow">${window.t ? window.t("Đi tiếp mà không mất ngữ cảnh") : "Đi tiếp mà không mất ngữ cảnh"}</p><h2 id="phase5-related-title">${window.t ? window.t("Một lựa chọn bán lẻ khác.") : "Một lựa chọn bán lẻ khác."}</h2></div><a class="text-link" href="shop.html">${window.t ? window.t("Trở về Cửa hàng →") : "Trở về Cửa hàng →"}</a></div>
        <div class="phase5-related-grid">${relatedProducts.map(phase5RelatedCard).join("")}</div>
      </section>
      <dialog class="phase5-lightbox" data-product-lightbox aria-labelledby="phase5-lightbox-title">
        <div class="phase5-lightbox-head"><h2 id="phase5-lightbox-title">${window.t ? window.t("Ảnh sản phẩm") : "Ảnh sản phẩm"}</h2><button type="button" data-lightbox-close aria-label="${window.t ? window.t("Đóng ảnh lớn") : "Đóng ảnh lớn"}">×</button></div>
        <div data-lightbox-media></div>
        <p data-lightbox-caption></p>
      </dialog>
      ${availability.retail ? `<div class="phase5-mobile-purchase-bar" data-mobile-product-bar aria-hidden="true"><div><small>${product.name.short} · ${variant.label}</small><strong>${price}</strong></div><button type="button" data-mobile-phase5-add>${window.t ? window.t("Thêm vào giỏ") : "Thêm vào giỏ"}</button></div>` : ""}
    `;

    const main = root.querySelector("[data-product-main]");
    const caption = root.querySelector("[data-media-caption]");
    const updateMedia = (index, moveFocus = false) => {
      activeMediaIndex = index;
      const item = media[index];
      main.innerHTML = `${productMainMediaMarkup(item, index)}<span class="image-counter">${String(index + 1).padStart(2, "0")} / ${String(media.length).padStart(2, "0")}</span>`;
      if (caption) caption.textContent = item.altIntent;
      root.querySelectorAll("[data-product-media-index]").forEach((button) => {
        const active = Number(button.dataset.productMediaIndex) === index;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      bindMainMedia();
      if (moveFocus)
        root.querySelector(`[data-product-media-index="${index}"]`)?.focus();
    };

    const lightbox = root.querySelector("[data-product-lightbox]");
    const openLightbox = () => {
      const item = media[activeMediaIndex];
      const path = getAssetPath(item.assetId);
      if (!path || !lightbox) return;
      const asset = getAsset(item.assetId);
      galleryTrigger = document.activeElement;
      lightbox.querySelector("[data-lightbox-media]").innerHTML =
        `<img src="${path}" alt="${item.altIntent}" width="${asset.width}" height="${asset.height}" decoding="async" style="--media-focal: ${asset.focalPoint || "50% 50%"}" />`;
      lightbox.querySelector("[data-lightbox-caption]").textContent =
        item.altIntent;
      lightbox.showModal();
      lightbox.querySelector("[data-lightbox-close]")?.focus();
    };
    const bindMainMedia = () => {
      const image = main.querySelector("[data-product-main-image]");
      image?.addEventListener("load", () =>
        image.classList.remove("is-loading"),
      );
      if (image?.complete && image.naturalWidth > 0)
        image.classList.remove("is-loading");
      image?.addEventListener("error", () => {
        main.innerHTML = `${productMediaPlaceholder({ ...media[activeMediaIndex], status: "failed" }, activeMediaIndex)}<span class="image-counter">${String(activeMediaIndex + 1).padStart(2, "0")} / ${String(media.length).padStart(2, "0")}</span>`;
        bindMainMedia();
      });
      main
        .querySelector("[data-gallery-open]")
        ?.addEventListener("click", openLightbox);
      main
        .querySelector("[data-media-retry]")
        ?.addEventListener("click", () => {
          const item = media[activeMediaIndex];
          if (getAssetPath(item.assetId)) updateMedia(activeMediaIndex);
          else
            announceCart(
              window.t ? window.t("Ảnh vẫn chưa được cấu hình; thông tin sản phẩm được giữ nguyên.") : "Ảnh vẫn chưa được cấu hình; thông tin sản phẩm được giữ nguyên.",
            );
        });
    };
    bindMainMedia();
    root.querySelectorAll("[data-product-media-index]").forEach((button) => {
      button.addEventListener("click", () =>
        updateMedia(Number(button.dataset.productMediaIndex)),
      );
      button.addEventListener("keydown", (event) => {
        if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key))
          return;
        event.preventDefault();
        const current = Number(button.dataset.productMediaIndex);
        const next =
          event.key === "Home"
            ? 0
            : event.key === "End"
              ? media.length - 1
              : event.key === "ArrowRight"
                ? (current + 1) % media.length
                : (current - 1 + media.length) % media.length;
        updateMedia(next, true);
      });
    });
    lightbox
      ?.querySelector("[data-lightbox-close]")
      ?.addEventListener("click", () => lightbox.close());
    lightbox?.addEventListener("click", (event) => {
      if (event.target === lightbox) lightbox.close();
    });
    lightbox?.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        lightbox.close();
      }
    });
    lightbox?.addEventListener("close", () => galleryTrigger?.focus());

    root.querySelectorAll("[data-product-variant]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextQuery = new URLSearchParams(window.location.search);
        nextQuery.set("fixture", product.fixtureId);
        nextQuery.set("variant", button.dataset.productVariant);
        nextQuery.delete("state");
        window.history.replaceState(
          {},
          "",
          `product.html?${nextQuery.toString()}`,
        );
        quantity = 1;
        activeMediaIndex = 0;
        render(button.dataset.productVariant);
      });
    });
    if (focusVariantId)
      root.querySelector(`[data-product-variant="${focusVariantId}"]`)?.focus();

    const quantityOutput = root.querySelector("[data-product-quantity]");
    const setProductQuantity = (next) => {
      const max = variant.inventory?.sellableQuantity || 1;
      if (next > max) {
        showToast(`Phiên bản này giới hạn ${max} trong fixture mẫu.`, "!");
        return;
      }
      quantity = Math.max(1, next);
      if (quantityOutput) quantityOutput.textContent = String(quantity);
    };
    root
      .querySelector("[data-product-quantity-minus]")
      ?.addEventListener("click", () => setProductQuantity(quantity - 1));
    root
      .querySelector("[data-product-quantity-plus]")
      ?.addEventListener("click", () => setProductQuantity(quantity + 1));
    const handleAdd = (button) => {
      button.disabled = true;
      const added = addCartRequest(
        {
          fixtureId: product.fixtureId,
          variantId: variant.id,
          quantity,
          variant,
        },
        button,
      );
      button.disabled = false;
      if (added) {
        const confirmation = root.querySelector(".phase5-add-confirmation");
        if (confirmation)
          confirmation.innerHTML = `${product.name.short} · ${variant.label} × ${quantity} đã ở trong giỏ. <a href="cart.html">Xem và sửa giỏ →</a>`;
      }
    };
    root
      .querySelector("[data-phase5-add]")
      ?.addEventListener("click", (event) => handleAdd(event.currentTarget));
    root
      .querySelector("[data-mobile-phase5-add]")
      ?.addEventListener("click", (event) => handleAdd(event.currentTarget));
    root.querySelectorAll(".contact-trigger").forEach(bindContactTrigger);

    const mobileBar = root.querySelector("[data-mobile-product-bar]");
    const mainAction = root.querySelector("[data-main-purchase-action]");
    if (mobileBar && mainAction && "IntersectionObserver" in window) {
      const barObserver = new IntersectionObserver(([entry]) => {
        const show = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        mobileBar.classList.toggle("is-visible", show);
        mobileBar.setAttribute("aria-hidden", String(!show));
      });
      barObserver.observe(mainAction);
    }
  };

  render();
};

const phase5CartStateCopy = {
  updating: [
    "Đang cập nhật giỏ hàng…",
    "Hệ thống đang tính lại giá trị các món bạn chọn.",
    "pending",
  ],
  "removal-undo": [
    "Đã xóa sản phẩm khỏi giỏ hàng.",
    "Bạn có thể hoàn tác để giữ lại sản phẩm trong giỏ.",
    "warning",
  ],
  "price-change": [
    "Giá sản phẩm có sự thay đổi.",
    "Vui lòng xác nhận giá mới nhất trước khi tiến hành thanh toán.",
    "warning",
  ],
  "stock-change": [
    "Số lượng vượt quá tồn kho khả dụng.",
    "Vui lòng giảm số lượng về mức có sẵn để tiếp tục đặt hàng.",
    "error",
  ],
  "stale-totals": [
    "Tạm tính cần được làm mới.",
    "Vui lòng bấm tính lại để cập nhật tổng tiền chính xác.",
    "warning",
  ],
  "recalculation-failure": [
    window.t ? window.t("Chưa thể tính lại tổng tiền giỏ hàng.") : "Chưa thể tính lại tổng tiền giỏ hàng.",
    window.t ? window.t("Vui lòng thử lại để đảm bảo số tiền thanh toán chính xác.") : "Vui lòng thử lại để đảm bảo số tiền thanh toán chính xác.",
    "error",
  ],
};

const cloneCartLines = (lines) => cloneFixture(lines || []);

const initPhase5Cart = () => {
  const root = document.querySelector("[data-phase5-cart]");
  if (!root) return;
  const query = new URLSearchParams(window.location.search);
  const fixtures = prototypeData.commerceFixtures;
  const requestedState = Object.hasOwn(fixtures.cartStates, query.get("state"))
    ? query.get("state")
    : null;
  const deterministic = Boolean(requestedState);
  let displayState =
    requestedState || (cartState.lines.length ? "normal" : "empty");
  const stateFixture = requestedState
    ? fixtures.cartStates[requestedState]
    : null;
  const scenarioLineSets = {
    "standard-cod": "standardCod",
    "standard-transfer": "standardTransfer",
    "manual-delivery": "manualDelivery",
  };
  const reviewLineSet =
    requestedState === "normal" && scenarioLineSets[query.get("scenario")]
      ? scenarioLineSets[query.get("scenario")]
      : stateFixture?.lineSet;
  let workingLines = deterministic
    ? cloneCartLines(reviewLineSet ? fixtures.cartLines[reviewLineSet] : [])
    : cloneCartLines(cartState.lines);
  let discoveredPriceChange = false;
  workingLines.forEach((line) => {
    const currentVariant = getVariant(line.productFixtureId, line.variantId);
    if (
      !Number.isInteger(currentVariant?.priceVnd) ||
      currentVariant.priceVnd === line.unitPriceVnd
    )
      return;
    line.previousUnitPriceVnd = line.unitPriceVnd;
    line.unitPriceVnd = currentVariant.priceVnd;
    line.lineStatus = "price-changed";
    discoveredPriceChange = true;
  });
  if (!requestedState && discoveredPriceChange) displayState = "price-change";
  let removedLine = null;
  let removedLineSet = null;
  let removedIndex = -1;
  let updateTimer = null;
  if (displayState === "removal-undo" && workingLines.length) {
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
    if (!product || !variant)
      return { valid: false, reason: window.t ? window.t("Sản phẩm không còn trong danh mục.") : "Sản phẩm không còn trong danh mục." };
    if (line.lineStatus === "price-changed")
      return {
        valid: false,
        reason: window.t ? window.t("Giá sản phẩm đã cập nhật; cần xác nhận.") : "Giá sản phẩm đã cập nhật; cần xác nhận.",
      };
    if (line.quantity > variant.inventory.sellableQuantity)
      return {
        valid: false,
        reason: `${window.t ? window.t("Chỉ còn") : "Chỉ còn"} ${variant.inventory.sellableQuantity} ${window.t ? window.t("sản phẩm trong kho.") : "sản phẩm trong kho."}`,
      };
    const availability = productAvailability(product, variant);
    if (!availability.retail)
      return { valid: false, reason: availability.label };
    return { valid: true, reason: "" };
  };

  const getCartScenario = (linesToInspect = workingLines) =>
    linesToInspect.some(
      (line) =>
        getProduct(line.productFixtureId)?.facts?.packedShippingProfile
          ?.deliveryTreatment === "manual-quote",
    )
      ? "manual-delivery"
      : query.get("scenario") || "standard-cod";

  const render = (focusSelector = null) => {
    window.clearTimeout(updateTimer);
    const selectedLines = workingLines.filter(
      (line) => line.selected !== false,
    );
    const selectedQuantity = selectedLines.reduce(
      (count, line) => count + line.quantity,
      0,
    );
    const selectedSubtotal = selectedLines.reduce(
      (total, line) => total + line.unitPriceVnd * line.quantity,
      0,
    );
    const totalQuantity = workingLines.reduce(
      (count, line) => count + line.quantity,
      0,
    );
    const allSelected =
      workingLines.length > 0 &&
      selectedLines.length === workingLines.length;
    const someSelected = selectedLines.length > 0 && !allSelected;

    const validations = workingLines.map(lineValidity);
    const selectedValidations = selectedLines.map(lineValidity);
    const totalsCurrent = ![
      "updating",
      "stale-totals",
      "recalculation-failure",
    ].includes(displayState);
    const checkoutReady =
      selectedLines.length > 0 &&
      totalsCurrent &&
      selectedValidations.every((result) => result.valid);
    const scenario = getCartScenario(selectedLines.length ? selectedLines : workingLines);
    const manualDelivery = scenario === "manual-delivery";
    const stateCopy = phase5CartStateCopy[displayState];

    let checkoutReason = "";
    if (selectedLines.length === 0) {
      checkoutReason = "Vui lòng chọn ít nhất 1 sản phẩm để tiến hành thanh toán.";
    } else if (!selectedValidations.every((result) => result.valid)) {
      checkoutReason = "Vui lòng kiểm tra lại số lượng hoặc xử lý cảnh báo của các món đã chọn trước khi tiếp tục.";
    } else if (!totalsCurrent) {
      checkoutReason = "Đang tính lại tạm tính, vui lòng đợi trong giây lát…";
    } else {
      checkoutReason = "Thanh toán linh hoạt với phương thức Nhận hàng trả tiền (COD) hoặc Chuyển khoản ngân hàng.";
    }

    root.innerHTML = `
      <nav class="breadcrumbs section-shell" aria-label="${window.t ? window.t("Đường dẫn") : "Đường dẫn"}">
        <a href="index.html">${window.t ? window.t("Trang chủ") : "Trang chủ"}</a><span>/</span><a href="shop.html">${window.t ? window.t("Cửa hàng") : "Cửa hàng"}</a><span>/</span><span aria-current="page">${window.t ? window.t("Giỏ hàng") : "Giỏ hàng"}</span>
      </nav>
      <header class="phase5-cart-hero section-shell">
        <div>
          <p class="eyebrow">${window.t ? window.t("Giỏ hàng của bạn") : "Giỏ hàng của bạn"}</p>
          <h1>${window.t ? window.t("Giỏ hàng") : "Giỏ hàng"}</h1>
        </div>
        <div>
          <p>${window.t ? window.t("Kiểm tra danh sách sản phẩm, điều chỉnh số lượng hoặc chọn các món cần thanh toán.") : "Kiểm tra danh sách sản phẩm, điều chỉnh số lượng hoặc chọn các món cần thanh toán."}</p>
          <a href="shop.html">${window.t ? window.t("Tiếp tục mua hàng →") : "Tiếp tục mua hàng →"}</a>
        </div>
      </header>
      <section class="phase5-cart-layout section-shell" aria-labelledby="phase5-cart-lines-title">
        <div class="phase5-cart-lines-panel">
          <div class="phase5-cart-panel-head">
            <div>
              <p class="eyebrow">${window.t ? window.t("Danh sách sản phẩm") : "Danh sách sản phẩm"}</p>
              <h2 id="phase5-cart-lines-title">${totalQuantity} ${window.t ? window.t("sản phẩm trong giỏ hàng") : "sản phẩm trong giỏ hàng"}</h2>
              ${
                workingLines.length
                  ? `<p class="phase5-cart-selected-count">Đã chọn <strong>${selectedQuantity}</strong> món (${selectedLines.length}/${workingLines.length} sản phẩm)</p>`
                  : ""
              }
            </div>
            ${
              workingLines.length
                ? `
              <div class="phase5-cart-head-actions">
                <label class="phase5-select-all-toggle">
                  <input type="checkbox" class="phase5-checkbox" data-cart-select-all ${allSelected ? "checked" : ""} aria-label="${window.t ? window.t("Chọn tất cả sản phẩm") : "Chọn tất cả sản phẩm"}">
                  <span class="phase5-checkbox-box" aria-hidden="true"></span>
                  <span class="phase5-select-all-label">${window.t ? window.t("Chọn tất cả") : "Chọn tất cả"}</span>
                </label>
                ${
                  selectedLines.length > 0
                    ? `
                  <button type="button" class="phase5-cart-delete-selected-btn" data-cart-delete-selected aria-label="${window.t ? window.t("Xóa") : "Xóa"} ${selectedLines.length} ${window.t ? window.t("sản phẩm đã chọn") : "sản phẩm đã chọn"}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    <span>${window.t ? window.t("Xóa đã chọn") : "Xóa đã chọn"} (${selectedLines.length})</span>
                  </button>
                `
                    : ""
                }
                <button type="button" class="phase5-cart-clear-btn" data-cart-clear-all aria-label="${window.t ? window.t("Xóa tất cả sản phẩm trong giỏ hàng") : "Xóa tất cả sản phẩm trong giỏ hàng"}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                  <span>${window.t ? window.t("Xóa tất cả") : "Xóa tất cả"}</span>
                </button>
              </div>
            `
                : ""
            }
          </div>
          <div class="phase5-cart-live" role="status" aria-live="polite">
            ${stateCopy ? `<div class="status-banner status-banner--${stateCopy[2]}"><strong>${stateCopy[0]}</strong><span>${stateCopy[1]}</span>${displayState === "removal-undo" && (removedLine || removedLineSet) ? `<button type="button" data-cart-undo>${window.t ? window.t("Hoàn tác") : "Hoàn tác"}</button>` : ""}${["stale-totals", "recalculation-failure"].includes(displayState) ? `<button type="button" data-cart-retry>${window.t ? window.t("Tính lại") : "Tính lại"}</button>` : ""}</div>` : ""}
          </div>
          ${
            workingLines.length
              ? `
            <div class="phase5-cart-table-head" aria-hidden="true">
              <span class="col-head col-head--select">
                <label class="phase5-select-all-table">
                  <input type="checkbox" class="phase5-checkbox" data-cart-table-select-all ${allSelected ? "checked" : ""} aria-label="${window.t ? window.t("Chọn tất cả sản phẩm") : "Chọn tất cả sản phẩm"}">
                  <span class="phase5-checkbox-box"></span>
                </label>
              </span>
              <span class="col-head col-head--product">${window.t ? window.t("Sản phẩm") : "Sản phẩm"}</span>
              <span class="col-head col-head--price">${window.t ? window.t("Đơn giá") : "Đơn giá"}</span>
              <span class="col-head col-head--qty">${window.t ? window.t("Số lượng") : "Số lượng"}</span>
              <span class="col-head col-head--total">${window.t ? window.t("Thành tiền") : "Thành tiền"}</span>
              <span class="col-head col-head--action">${window.t ? window.t("Xóa") : "Xóa"}</span>
            </div>
            <div class="phase5-cart-lines">
              ${workingLines
                .map((line, index) => {
                  const product = getProduct(line.productFixtureId);
                  const variant = getVariant(
                    line.productFixtureId,
                    line.variantId,
                  );
                  const asset = getPrimaryAssetRecord(product, variant);
                  const validity = validations[index];
                  const previousPrice = line.previousUnitPriceVnd;
                  const isSelected = line.selected !== false;
                  return `
                  <article class="phase5-cart-line${validity.valid ? "" : " has-warning"}${isSelected ? " is-selected" : " is-unselected"}" data-full-cart-line="${index}">
                    <div class="phase5-cart-line-select">
                      <label class="phase5-line-checkbox-label">
                        <input type="checkbox" class="phase5-checkbox" data-full-cart-select="${index}" ${isSelected ? "checked" : ""} aria-label="Chọn mua ${product.name.short}">
                        <span class="phase5-checkbox-box" aria-hidden="true"></span>
                      </label>
                    </div>
                    <a class="phase5-cart-line-media" href="product.html?fixture=${product.fixtureId}&amp;variant=${variant.id}">
                      <img src="${asset.path}" alt="${window.t ? window.t(product.name.short) : product.name.short}" width="${asset.width}" height="${asset.height}" loading="lazy" decoding="async" style="--media-focal: ${asset.focalPoint || "50% 50%"}" />
                    </a>
                    <div class="phase5-cart-line-info">
                      <p class="phase5-cart-line-type">${window.t ? window.t(product.productType || "Gốm thủ công") : (product.productType || "Gốm thủ công")}</p>
                      <h3 class="phase5-cart-line-title"><a href="product.html?fixture=${product.fixtureId}&amp;variant=${variant.id}">${window.t ? window.t(product.name.short) : product.name.short}</a></h3>
                      <p class="phase5-cart-line-variant">${window.t ? window.t("Phân loại:") : "Phân loại:"} <strong>${window.t ? window.t(variant.label) : variant.label}</strong></p>
                      ${!validity.valid ? `<p class="phase5-line-warning"><strong>${window.t ? window.t("Cần xử lý:") : "Cần xử lý:"}</strong> ${validity.reason}</p>` : ""}
                      ${previousPrice ? `<p class="phase5-price-change">${window.t ? window.t("Giá trước") : "Giá trước"} <del>${formatVnd(previousPrice)}</del> · ${window.t ? window.t("hiện tại") : "hiện tại"} <strong>${formatVnd(line.unitPriceVnd)}</strong></p>` : ""}
                      <div class="phase5-cart-line-links">
                        <a href="product.html?fixture=${product.fixtureId}&amp;variant=${variant.id}">${window.t ? window.t("Xem chi tiết ↗") : "Xem chi tiết ↗"}</a>
                      </div>
                    </div>
                    <div class="phase5-cart-line-price">
                      <span class="price-label">${window.t ? window.t("Đơn giá") : "Đơn giá"}</span>
                      <span class="price-num">${formatVnd(line.unitPriceVnd)}</span>
                    </div>
                    <div class="phase5-cart-line-qty">
                      <span class="price-label">${window.t ? window.t("Số lượng") : "Số lượng"}</span>
                      <div class="quantity-picker" aria-label="${window.t ? window.t("Số lượng") : "Số lượng"} ${window.t ? window.t(product.name.short) : product.name.short}">
                        <button type="button" data-full-cart-minus="${index}" aria-label="${window.t ? window.t("Giảm số lượng") : "Giảm số lượng"} ${window.t ? window.t(product.name.short) : product.name.short}" ${displayState === "updating" || line.quantity <= 1 ? "disabled" : ""}>−</button>
                        <output aria-live="polite">${line.quantity}</output>
                        <button type="button" data-full-cart-plus="${index}" aria-label="${window.t ? window.t("Tăng số lượng") : "Tăng số lượng"} ${window.t ? window.t(product.name.short) : product.name.short}" ${displayState === "updating" || line.quantity >= variant.inventory.sellableQuantity ? "disabled" : ""}>+</button>
                      </div>
                    </div>
                    <div class="phase5-cart-line-total">
                      <span class="price-label">${window.t ? window.t("Thành tiền") : "Thành tiền"}</span>
                      <span class="total-num">${formatVnd(line.unitPriceVnd * line.quantity)}</span>
                      ${line.lineStatus === "price-changed" ? `<button class="phase5-line-accept" type="button" data-cart-accept-price="${index}">${window.t ? window.t("Xác nhận giá") : "Xác nhận giá"}</button>` : ""}
                    </div>
                    <div class="phase5-cart-line-remove">
                      <button type="button" class="cart-remove-button" data-full-cart-remove="${index}" aria-label="${window.t ? window.t("Xóa") : "Xóa"} ${window.t ? window.t(product.name.short) : product.name.short} ${window.t ? window.t("khỏi giỏ hàng") : "khỏi giỏ hàng"}" title="${window.t ? window.t("Xóa món này") : "Xóa món này"}">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        <span>${window.t ? window.t("Xóa") : "Xóa"}</span>
                      </button>
                    </div>
                  </article>
                `;
                })
                .join("")}
            </div>
          `
              : `
            <div class="phase5-cart-empty">
              <span aria-hidden="true">H</span>
              <h2>${window.t ? window.t("Giỏ hàng của bạn đang trống") : "Giỏ hàng của bạn đang trống"}</h2>
              <p>${window.t ? window.t("Chưa có sản phẩm nào trong giỏ hàng. Khám phá ngay các bộ sưu tập gốm thủ công mộc mạc và tĩnh tại từ HEDY ATELIER.") : "Chưa có sản phẩm nào trong giỏ hàng. Khám phá ngay các bộ sưu tập gốm thủ công mộc mạc và tĩnh tại từ HEDY ATELIER."}</p>
              <div class="empty-state-actions">
                <a class="button button--dark" href="shop.html">${window.t ? window.t("Khám phá Cửa hàng") : "Khám phá Cửa hàng"}</a>
                <button type="button" class="button button--outline" data-cart-restore-mock>${window.t ? window.t("Nạp 4 sản phẩm mẫu") : "Nạp 4 sản phẩm mẫu"}</button>
                <a class="text-link" href="custom.html">${window.t ? window.t("Đặt riêng & Doanh nghiệp →") : "Đặt riêng &amp; Doanh nghiệp →"}</a>
              </div>
            </div>
          `
          }
        </div>
        <aside class="phase5-cart-summary">
          <p class="eyebrow">${window.t ? window.t("Tóm tắt đơn hàng") : "Tóm tắt đơn hàng"}</p>
          <h2>${window.t ? window.t("Tổng đơn hàng") : "Tổng đơn hàng"}</h2>
          <dl>
            <div><dt>${window.t ? window.t("Tạm tính") : "Tạm tính"} (${selectedQuantity} ${window.t ? window.t("món đã chọn") : "món đã chọn"})</dt><dd>${formatVnd(selectedSubtotal)}</dd></div>
            <div><dt>${window.t ? window.t("Phí vận chuyển") : "Phí vận chuyển"}</dt><dd>${manualDelivery ? (window.t ? window.t("HEDY xác nhận riêng") : "HEDY xác nhận riêng") : (window.t ? window.t("Tính khi thanh toán") : "Tính khi thanh toán")}</dd></div>
            <div class="phase5-summary-total"><dt>${window.t ? window.t("Tổng thanh toán tạm tính") : "Tổng thanh toán tạm tính"}</dt><dd>${totalsCurrent ? formatVnd(selectedSubtotal) : (window.t ? window.t("Đang tính lại…") : "Đang tính lại…")}</dd></div>
          </dl>
          <div class="status-banner status-banner--${manualDelivery ? "warning" : "pending"}">
            <strong>${manualDelivery ? (window.t ? window.t("Phí giao hàng cần xác nhận riêng.") : "Phí giao hàng cần xác nhận riêng.") : (window.t ? window.t("Giao hàng toàn quốc an toàn.") : "Giao hàng toàn quốc an toàn.")}</strong>
            <span>${manualDelivery ? (window.t ? window.t("Đơn hàng có sản phẩm kích thước đặc thù; HEDY sẽ báo phí trực tiếp trước khi gửi.") : "Đơn hàng có sản phẩm kích thước đặc thù; HEDY sẽ báo phí trực tiếp trước khi gửi.") : (window.t ? window.t("Phí vận chuyển chính xác sẽ được tính theo địa chỉ nhận hàng tại bước kế tiếp.") : "Phí vận chuyển chính xác sẽ được tính theo địa chỉ nhận hàng tại bước kế tiếp.")}</span>
          </div>
          <button class="button button--dark phase5-checkout-action" type="button" data-cart-checkout-preview ${checkoutReady ? "" : "disabled"}>${window.t ? window.t("Tiến hành thanh toán") : "Tiến hành thanh toán"} <span aria-hidden="true">→</span></button>
          <p class="disabled-reason" data-checkout-reason>${checkoutReason}</p>
          <div class="phase5-summary-policies">
            <a class="phase5-summary-policy" href="policies.html#giao-hang-va-hu-hong">${window.t ? window.t("Chính sách giao nhận") : "Chính sách giao nhận"}</a>
            <a class="phase5-summary-policy" href="policies.html#thanh-toan">${window.t ? window.t("Phương thức thanh toán") : "Phương thức thanh toán"}</a>
            <a class="phase5-summary-policy" href="policies.html#doi-tra-huy-hoan">${window.t ? window.t("Đổi trả & hoàn tiền") : "Đổi trả &amp; hoàn tiền"}</a>
          </div>
          <div class="phase5-cart-consultation">
            <h3>${window.t ? window.t("Đặt quà tặng doanh nghiệp hoặc số lượng lớn?") : "Đặt quà tặng doanh nghiệp hoặc số lượng lớn?"}</h3>
            <p>${window.t ? window.t("HEDY hỗ trợ cá nhân hóa khắc dấu ấn riêng, đóng hộp quà tặng chỉn chu và ưu đãi chiết khấu theo số lượng.") : "HEDY hỗ trợ cá nhân hóa khắc dấu ấn riêng, đóng hộp quà tặng chỉn chu và ưu đãi chiết khấu theo số lượng."}</p>
            <button class="contact-trigger" type="button" data-contact-state="contextual" data-contact-source="cart" data-contact-label="Tư vấn quà tặng từ giỏ hàng">${window.t ? window.t("Tư vấn quà tặng riêng ↗") : "Tư vấn quà tặng riêng ↗"}</button>
          </div>
        </aside>
      </section>
    `;

    root.querySelectorAll(".contact-trigger").forEach(bindContactTrigger);

    // Set indeterminate state on select-all inputs
    root
      .querySelectorAll("[data-cart-select-all], [data-cart-table-select-all]")
      .forEach((input) => {
        input.indeterminate = someSelected;
      });

    // Handle individual item selection
    root.querySelectorAll("[data-full-cart-select]").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const index = Number(checkbox.dataset.fullCartSelect);
        const line = workingLines[index];
        if (!line) return;
        line.selected = checkbox.checked;
        persistWorkingCart();
        render(`[data-full-cart-select="${index}"]`);
        const prodName =
          getProduct(line.productFixtureId)?.name?.short || "Sản phẩm";
        announceCart(
          line.selected ? `Đã chọn ${prodName}.` : `Đã bỏ chọn ${prodName}.`,
        );
      });
    });

    // Handle master select all
    const toggleSelectAll = (targetChecked) => {
      workingLines.forEach((line) => {
        line.selected = targetChecked;
      });
      persistWorkingCart();
      render("[data-cart-select-all]");
      announceCart(
        targetChecked
          ? "Đã chọn tất cả sản phẩm."
          : "Đã bỏ chọn tất cả sản phẩm.",
      );
    };

    root
      .querySelectorAll("[data-cart-select-all], [data-cart-table-select-all]")
      .forEach((input) => {
        input.addEventListener("change", () => {
          const shouldCheck = allSelected ? false : true;
          toggleSelectAll(shouldCheck);
        });
      });

    // Handle delete selected items
    root
      .querySelector("[data-cart-delete-selected]")
      ?.addEventListener("click", () => {
        const toDelete = workingLines.filter(
          (l) => l.selected !== false,
        );
        if (!toDelete.length) return;
        removedLineSet = cloneCartLines(toDelete);
        removedLine = null;
        removedIndex = -1;
        workingLines = workingLines.filter((l) => l.selected === false);
        displayState = "removal-undo";
        persistWorkingCart();
        render("[data-cart-undo]");
        announceCart(
          `Đã xóa ${removedLineSet.length} sản phẩm đã chọn; bạn có thể hoàn tác.`,
        );
      });

    const updateQuantity = (index, next) => {
      const line = workingLines[index];
      const variant = getVariant(line.productFixtureId, line.variantId);
      if (next < 1 || next > variant.inventory.sellableQuantity) return;
      displayState = "updating";
      render();
      updateTimer = window.setTimeout(() => {
        line.quantity = next;
        line.lineStatus = "current";
        displayState = "normal";
        persistWorkingCart();
        render(`[data-full-cart-line="${index}"] .quantity-picker`);
        announceCart(
          `${window.t ? window.t("Đã cập nhật số lượng") : "Đã cập nhật số lượng"} ${getProduct(line.productFixtureId).name.short} ${window.t ? window.t("thành") : "thành"} ${next}.`,
        );
      }, 360);
    };
    root.querySelectorAll("[data-full-cart-minus]").forEach((button) =>
      button.addEventListener("click", () => {
        const index = Number(button.dataset.fullCartMinus);
        updateQuantity(index, workingLines[index].quantity - 1);
      }),
    );
    root.querySelectorAll("[data-full-cart-plus]").forEach((button) =>
      button.addEventListener("click", () => {
        const index = Number(button.dataset.fullCartPlus);
        updateQuantity(index, workingLines[index].quantity + 1);
      }),
    );
    root.querySelectorAll("[data-full-cart-remove]").forEach((button) =>
      button.addEventListener("click", () => {
        removedIndex = Number(button.dataset.fullCartRemove);
        removedLine = workingLines.splice(removedIndex, 1)[0];
        removedLineSet = null;
        displayState = "removal-undo";
        persistWorkingCart();
        render("[data-cart-undo]");
        announceCart(
          `${getProduct(removedLine.productFixtureId).name.short} ${window.t ? window.t("đã được xóa; có thể hoàn tác.") : "đã được xóa; có thể hoàn tác."}`,
        );
      }),
    );
    root
      .querySelector("[data-cart-clear-all]")
      ?.addEventListener("click", () => {
        if (!workingLines.length) return;
        removedLineSet = cloneCartLines(workingLines);
        removedLine = null;
        removedIndex = -1;
        workingLines = [];
        displayState = "removal-undo";
        persistWorkingCart();
        render("[data-cart-undo]");
        announceCart(window.t ? window.t("Đã làm trống giỏ hàng; bạn có thể hoàn tác.") : "Đã làm trống giỏ hàng; bạn có thể hoàn tác.");
      });
    root
      .querySelector("[data-cart-restore-mock]")
      ?.addEventListener("click", () => {
        workingLines = cloneCartLines(defaultSeedCartLines);
        displayState = "normal";
        persistWorkingCart();
        render();
        announceCart(window.t ? window.t("Đã nạp lại 4 sản phẩm mẫu vào giỏ hàng.") : "Đã nạp lại 4 sản phẩm mẫu vào giỏ hàng.");
      });
    root.querySelector("[data-cart-undo]")?.addEventListener("click", () => {
      if (removedLineSet) {
        workingLines = cloneCartLines(removedLineSet);
        removedLineSet = null;
      } else if (removedLine) {
        workingLines.splice(Math.max(removedIndex, 0), 0, removedLine);
        removedLine = null;
        removedIndex = -1;
      }
      displayState = "normal";
      persistWorkingCart();
      render();
      announceCart(window.t ? window.t("Đã khôi phục sản phẩm vào giỏ hàng.") : "Đã khôi phục sản phẩm vào giỏ hàng.");
    });
    root.querySelectorAll("[data-cart-accept-price]").forEach((button) =>
      button.addEventListener("click", () => {
        const index = Number(button.dataset.cartAcceptPrice);
        workingLines[index].lineStatus = "current";
        delete workingLines[index].previousUnitPriceVnd;
        displayState = "normal";
        persistWorkingCart();
        render(`[data-full-cart-line="${index}"] .phase5-cart-line-title a`);
        announceCart(window.t ? window.t("Đã xác nhận giá hiện tại.") : "Đã xác nhận giá hiện tại.");
      }),
    );
    root.querySelector("[data-cart-retry]")?.addEventListener("click", () => {
      displayState = "updating";
      render();
      updateTimer = window.setTimeout(() => {
        displayState = "normal";
        persistWorkingCart();
        render("[data-cart-checkout-preview]");
        announceCart(window.t ? window.t("Tạm tính đã được cập nhật từ các món được giữ.") : "Tạm tính đã được cập nhật từ các món được giữ.");
      }, 420);
    });
    root
      .querySelector("[data-cart-checkout-preview]")
      ?.addEventListener("click", () => {
        const checkoutUrl = new URL("checkout.html", window.location.href);
        checkoutUrl.searchParams.set("scenario", scenario);
        checkoutUrl.searchParams.set("source", "cart");
        window.location.href = checkoutUrl.href;
      });
    if (focusSelector) root.querySelector(focusSelector)?.focus();
  };

  render();
};

const phase6DeliveryStates = new Set([
  "not-ready",
  "calculating",
  "one-method",
  "multiple-methods",
  "zone-fallback",
  "manual-quote",
  "unsupported",
  "quote-failure",
  "stale",
]);

const phase6CheckoutStates = new Set([
  "initial",
  "validation-error",
  "address-service-error",
  ...phase6DeliveryStates,
]);

const phase7CheckoutStates = new Set([
  "cod-ineligible",
  "submitting",
  "known-creation-failure",
  "unknown-outcome",
]);

const phase7ConfirmationStates = new Set([
  "received",
  "awaiting-payment",
  "awaiting-verification",
  "request-received",
  "notification-failure",
  "known-creation-failure",
  "unknown-outcome",
]);

const checkoutCartSignature = (lines) =>
  lines
    .map(
      (line) =>
        `${line.productFixtureId}:${line.variantId}:${line.quantity}:${line.unitPriceVnd}`,
    )
    .join("|");

const readCheckoutDraft = () => {
  try {
    const stored = JSON.parse(sessionStorage.getItem(CHECKOUT_STORAGE_KEY));
    return stored?.version === CHECKOUT_SCHEMA_VERSION &&
      stored.values &&
      typeof stored.values === "object"
      ? stored
      : null;
  } catch {
    return null;
  }
};

const readCheckoutResults = () => {
  try {
    const stored = JSON.parse(
      sessionStorage.getItem(CHECKOUT_RESULT_STORAGE_KEY),
    );
    return stored?.version === CHECKOUT_RESULT_SCHEMA_VERSION &&
      Array.isArray(stored.results)
      ? stored.results
      : [];
  } catch {
    return [];
  }
};

const saveCheckoutResult = (result) => {
  try {
    const results = readCheckoutResults().filter(
      (entry) => entry.resultKey !== result.resultKey,
    );
    results.unshift(result);
    sessionStorage.setItem(
      CHECKOUT_RESULT_STORAGE_KEY,
      JSON.stringify({
        version: CHECKOUT_RESULT_SCHEMA_VERSION,
        results: results.slice(0, 8),
      }),
    );
    return true;
  } catch {
    return false;
  }
};

const findCheckoutResult = (resultKey) =>
  readCheckoutResults().find((entry) => entry.resultKey === resultKey) || null;

const defaultConfirmationState = (scenarioId) => {
  if (scenarioId === "standard-transfer") return "awaiting-payment";
  if (scenarioId === "manual-delivery") return "request-received";
  return "received";
};

const initPhase6Checkout = () => {
  const root = document.querySelector("[data-phase6-checkout]");
  if (!root) return;
  const query = new URLSearchParams(window.location.search);
  const scenarioIds = ["standard-cod", "standard-transfer", "manual-delivery"];
  const scenarioId = scenarioIds.includes(query.get("scenario"))
    ? query.get("scenario")
    : "standard-cod";
  const scenario = prototypeData.reviewScenarios?.[scenarioId];
  const rawState = query.get("state");
  const requestedDeliveryState = phase6CheckoutStates.has(rawState)
    ? rawState
    : null;
  const requestedPaymentState = phase7CheckoutStates.has(rawState)
    ? rawState
    : null;
  const requestedState = requestedDeliveryState || requestedPaymentState;
  const deterministic = Boolean(requestedState);
  const fromCart = query.get("source") === "cart";
  const requestedOutcome = [
    "success",
    "notification-failure",
    "known-creation-failure",
    "unknown-outcome",
  ].includes(query.get("outcome"))
    ? query.get("outcome")
    : "success";
  const scenarioLines = cloneCartLines(scenario?.lineSnapshot || []);
  const selectedCartLines = cartState.lines.filter(
    (line) => line.selected !== false,
  );
  const workingLines =
    (fromCart || (!deterministic && selectedCartLines.length))
      ? cloneCartLines(selectedCartLines.length ? selectedCartLines : cartState.lines)
      : scenarioLines;
  const cartSignature = checkoutCartSignature(workingLines);
  const storedDraft = deterministic ? null : readCheckoutDraft();
  const matchingDraft =
    storedDraft?.scenarioId === scenarioId ? storedDraft : null;
  const syntheticValues = scenario?.recipientSnapshot || {};
  const blankValues = {
    recipientName: "",
    phone: "",
    email: "",
    deliveryNote: "",
    province: "",
    districtWard: "",
    street: "",
    addressNote: "",
  };
  const stateNeedsAddress =
    requestedState && !["initial", "not-ready"].includes(requestedState);
  let values = matchingDraft
    ? { ...blankValues, ...matchingDraft.values }
    : stateNeedsAddress
      ? { ...blankValues, ...syntheticValues }
      : { ...blankValues };

  const cleanRealisticValue = (val) => {
    if (!val || typeof val !== "string") return val;
    return val
      .replace(" — dữ liệu mẫu", "")
      .replace(" — không phải địa chỉ giao thật", "")
      .replace("Người nhận mẫu", "Nguyễn Thị Mai");
  };
  Object.keys(values).forEach((key) => {
    values[key] = cleanRealisticValue(values[key]);
  });

  if (requestedState === "validation-error") {
    values.phone = "09AB";
    values.street = "A";
  }

  const deliveryFixtures = prototypeData.commerceFixtures?.delivery || {};

  const getProvinceRate = (provName) => {
    if (!provName) return null;
    const rates = deliveryFixtures.provinceRates || {};
    if (rates[provName]) return rates[provName];
    const clean = provName.trim().toLowerCase();
    const foundKey = Object.keys(rates).find(
      (k) =>
        k.toLowerCase() === clean ||
        clean.includes(k.toLowerCase()) ||
        k.toLowerCase().includes(clean),
    );
    if (foundKey) return rates[foundKey];
    return rates["Tỉnh / Thành phố khác"] || {
      feeVnd: 40000,
      estimateLabel: "3–4 ngày làm việc",
      methodLabel: "Giao hàng liên tỉnh tiêu chuẩn",
    };
  };

  const resolvedOutcome = () => {
    if (scenarioId === "manual-delivery") return "manual-quote";
    if (!values.province) return "not-ready";
    const normProv = (values.province || "").toLowerCase();
    if (normProv.includes("ngoài") || normProv.includes("không hỗ trợ"))
      return "unsupported";
    if (normProv.includes("hà nội")) return "multiple-methods";
    return "one-method";
  };

  const getDistrictOptions = (prov) => {
    if (!prov) return [];
    const p = prov.trim();
    const districtsMap = deliveryFixtures.provinceDistricts || {};
    if (districtsMap[p] && Array.isArray(districtsMap[p])) {
      return districtsMap[p];
    }
    const pLower = p.toLowerCase();
    const foundKey = Object.keys(districtsMap).find(
      (k) =>
        k.toLowerCase() === pLower ||
        pLower.includes(k.toLowerCase()) ||
        k.toLowerCase().includes(pLower),
    );
    if (foundKey && districtsMap[foundKey]) {
      return districtsMap[foundKey];
    }
    const cleanName = p.replace(/^(Tỉnh|Thành phố|TP\.?)\s+/i, "").trim();
    return [
      `TP. ${cleanName || "Trung tâm"}`,
      `Thị xã ${cleanName || "Khu vực"}`,
      `Huyện ${cleanName || "Khu vực"} Đông`,
      `Huyện ${cleanName || "Khu vực"} Tây`,
      `Huyện ${cleanName || "Khu vực"} Nam`,
      `Huyện ${cleanName || "Khu vực"} Bắc`,
    ];
  };

  let checkoutState =
    requestedDeliveryState ||
    (requestedPaymentState ? scenario?.deliveryFixtureId : null) ||
    matchingDraft?.checkoutState ||
    "initial";
  if (
    checkoutState === "initial" ||
    checkoutState === "calculating" ||
    checkoutState === "stale"
  ) {
    checkoutState = values.province ? resolvedOutcome() : "not-ready";
  }
  if (!values.province && checkoutState !== "manual-quote") {
    checkoutState = "not-ready";
  }
  let selectedDeliveryMethodId =
    matchingDraft?.selectedDeliveryMethodId ||
    (deterministic ? scenario?.selectedDeliveryMethodId : null) ||
    (checkoutState === "multiple-methods" ? "standard-demo" : null) ||
    (checkoutState === "one-method" ? "standard-demo" : null);
  if (checkoutState === "multiple-methods" && !selectedDeliveryMethodId)
    selectedDeliveryMethodId = "standard-demo";
  let codEligible = requestedPaymentState !== "cod-ineligible";
  let selectedPaymentMethod =
    matchingDraft?.selectedPaymentMethod ||
    (deterministic
      ? (scenarioId === "standard-transfer" ? "bank-transfer" : "cod")
      : null);
  let hasNotifiedTransfer = Boolean(matchingDraft?.hasNotifiedTransfer);
  let billImage = matchingDraft?.billImage || null;
  let policyConsent =
    requestedPaymentState === "submitting"
      ? true
      : deterministic
        ? false
        : Boolean(matchingDraft?.policyConsent);
  let errors = {};
  let calculationTimer = null;
  let submissionTimer = null;
  let isSubmitting = requestedPaymentState === "submitting";
  let boundaryMessage = "";
  let boundaryTone = "";

  const fields = {
    recipientName: {
      label: window.t ? window.t("Họ và tên người nhận") : "Họ và tên người nhận",
      validate: (value) =>
        value.trim().length >= 2
          ? ""
          : (window.t ? window.t("Vui lòng nhập họ và tên người nhận (tối thiểu 2 ký tự).") : "Vui lòng nhập họ và tên người nhận (tối thiểu 2 ký tự)."),
    },
    phone: {
      label: window.t ? window.t("Số điện thoại") : "Số điện thoại",
      validate: (value) =>
        /^(?:\+84|0)\d{9,10}$/.test(value.replace(/[\s.-]/g, ""))
          ? ""
          : (window.t ? window.t("Vui lòng nhập số điện thoại hợp lệ (10 chữ số).") : "Vui lòng nhập số điện thoại hợp lệ (10 chữ số)."),
    },
    email: {
      label: "Email",
      validate: (value) =>
        !value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
          ? ""
          : (window.t ? window.t("Vui lòng nhập email đúng định dạng (ví dụ: ten@domain.com).") : "Vui lòng nhập email đúng định dạng (ví dụ: ten@domain.com)."),
    },
    province: {
      label: window.t ? window.t("Tỉnh / Thành phố") : "Tỉnh / Thành phố",
      validate: (value) =>
        value ? "" : (window.t ? window.t("Vui lòng chọn Tỉnh / Thành phố giao hàng.") : "Vui lòng chọn Tỉnh / Thành phố giao hàng."),
    },
    districtWard: {
      label: window.t ? window.t("Quận / Huyện") : "Quận / Huyện",
      validate: (value) => (value ? "" : (window.t ? window.t("Vui lòng chọn Quận / Huyện.") : "Vui lòng chọn Quận / Huyện.")),
    },
    street: {
      label: window.t ? window.t("Địa chỉ cụ thể") : "Địa chỉ cụ thể",
      validate: (value) =>
        value.trim().length >= 5
          ? ""
          : (window.t ? window.t("Vui lòng nhập số nhà, tên đường hoặc thông tin tòa nhà chi tiết.") : "Vui lòng nhập số nhà, tên đường hoặc thông tin tòa nhà chi tiết."),
    },
  };

  if (requestedState === "validation-error") {
    errors.phone = fields.phone.validate(values.phone);
    errors.street = fields.street.validate(values.street);
  }

  const addressFieldIds = ["province", "districtWard", "street"];
  const requiredFieldIds = [
    "recipientName",
    "phone",
    "email",
    "province",
    "districtWard",
    "street",
  ];
  const subtotal = workingLines.reduce(
    (total, line) => total + line.unitPriceVnd * line.quantity,
    0,
  );

  const saveDraft = () => {
    if (deterministic) return;
    try {
      sessionStorage.setItem(
        CHECKOUT_STORAGE_KEY,
        JSON.stringify({
          version: CHECKOUT_SCHEMA_VERSION,
          scenarioId,
          cartSignature,
          values,
          checkoutState,
          selectedDeliveryMethodId,
          selectedPaymentMethod,
          hasNotifiedTransfer,
          billImage,
          policyConsent,
        }),
      );
    } catch {
      boundaryMessage =
        window.t ? window.t("Thiết bị không lưu được bản nháp phiên này; biểu mẫu vẫn dùng được trên trang hiện tại.") : "Thiết bị không lưu được bản nháp phiên này; biểu mẫu vẫn dùng được trên trang hiện tại.";
      boundaryTone = "warning";
    }
  };

  const validateField = (fieldId) => {
    const message = fields[fieldId]?.validate(values[fieldId] || "") || "";
    if (message) errors[fieldId] = message;
    else delete errors[fieldId];
    return !message;
  };

  const validateAll = () => {
    requiredFieldIds.forEach(validateField);
    return Object.keys(errors).length === 0;
  };

  const deliveryResult = () => {
    if (checkoutState === "multiple-methods") {
      const hanoiRate = deliveryFixtures.provinceRates?.["Hà Nội"];
      const methods =
        hanoiRate?.methods ||
        deliveryFixtures["multiple-methods"]?.methods ||
        [];
      return (
        methods.find((method) => method.id === selectedDeliveryMethodId) ||
        methods[0] ||
        null
      );
    }
    if (checkoutState === "one-method") {
      const provRate = getProvinceRate(values.province);
      return {
        methodId: "standard-demo",
        feeVnd: provRate?.feeVnd !== undefined ? provRate.feeVnd : 35000,
        methodLabel:
          provRate?.methodLabel ||
          (window.t ? window.t("Giao hàng tiêu chuẩn") : "Giao hàng tiêu chuẩn"),
        estimateLabel:
          provRate?.estimateLabel ||
          (window.t
            ? window.t("2 - 4 ngày làm việc")
            : "2 - 4 ngày làm việc"),
        totalFinal: true,
      };
    }
    return deliveryFixtures[checkoutState] || null;
  };

  const deliveryIsCurrent = () => {
    if (["one-method", "zone-fallback", "manual-quote"].includes(checkoutState))
      return true;
    return (
      checkoutState === "multiple-methods" && Boolean(selectedDeliveryMethodId)
    );
  };

  const finalDeliveryFee = () => {
    const result = deliveryResult();
    return Number.isInteger(result?.feeVnd) ? result.feeVnd : null;
  };

  const finalTotal = () => {
    const fee = finalDeliveryFee();
    return deliveryIsCurrent() && fee !== null ? subtotal + fee : null;
  };

  const calculateCodEligibility = () => {
    if (requestedPaymentState === "cod-ineligible") return false;
    if (scenarioId === "standard-transfer") return false;
    return true;
  };

  const updateUrlState = () => {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("scenario", scenarioId);
    if (fromCart) nextUrl.searchParams.set("source", "cart");
    nextUrl.searchParams.set("state", checkoutState);
    window.history.replaceState(
      {},
      "",
      `${nextUrl.pathname.split("/").pop()}${nextUrl.search}${nextUrl.hash}`,
    );
  };

  const deliveryMarkup = () => {
    if (checkoutState === "calculating") {
      return `
        <div class="phase6-delivery-state phase6-delivery-state--loading" role="status" aria-live="polite">
          <span class="phase6-progress-mark" aria-hidden="true"></span>
          <div><strong>${window.t ? window.t("Đang cập nhật phí vận chuyển…") : "Đang cập nhật phí vận chuyển…"}</strong><p>${window.t ? window.t("Hệ thống đang áp dụng phương thức giao hàng tối ưu cho địa chỉ của bạn.") : "Hệ thống đang áp dụng phương thức giao hàng tối ưu cho địa chỉ của bạn."}</p></div>
        </div>
      `;
    }
    if (checkoutState === "one-method" || checkoutState === "zone-fallback") {
      const result = deliveryResult();
      const label =
        result?.methodLabel?.replace(" — dữ liệu mẫu", "") ||
        (window.t ? window.t("Giao hàng tiêu chuẩn") : "Giao hàng tiêu chuẩn");
      const estimate =
        result?.estimateLabel ||
        (window.t ? window.t("Dự kiến giao trong 2 - 4 ngày làm việc") : "Dự kiến giao trong 2 - 4 ngày làm việc");
      const displayProv = values.province ? ` cho ${escapeHtml(values.province)}` : "";
      return `
        <div class="phase6-delivery-state status-banner status-banner--success" role="status" aria-live="polite">
          <strong>${window.t ? window.t("Phương thức vận chuyển phù hợp") : "Phương thức vận chuyển phù hợp"}</strong><span>${window.t ? window.t("Đã tự động áp dụng cước phí giao hàng") : "Đã tự động áp dụng cước phí giao hàng"}${displayProv}.</span>
        </div>
        <label class="phase6-option-card is-selected">
          <input type="radio" name="delivery-method" value="${result?.methodId || "standard-demo"}" checked />
          <span><strong>${escapeHtml(label)}</strong><small>${escapeHtml(estimate)}</small></span>
          <b>${formatVnd(result?.feeVnd !== undefined ? result.feeVnd : 35000)}</b>
        </label>
      `;
    }
    if (checkoutState === "multiple-methods") {
      const hanoiRate = deliveryFixtures.provinceRates?.["Hà Nội"];
      const methods =
        hanoiRate?.methods ||
        deliveryFixtures["multiple-methods"]?.methods ||
        [];
      return `
        <div class="phase6-delivery-state status-banner status-banner--pending" role="status" aria-live="polite">
          <strong>${window.t ? window.t("Chọn phương thức giao hàng") : "Chọn phương thức giao hàng"}</strong><span>${window.t ? window.t("Đã cập nhật phương thức giao hàng cho khu vực của bạn. Vui lòng chọn phương án phù hợp:") : "Đã cập nhật phương thức giao hàng cho khu vực của bạn. Vui lòng chọn phương án phù hợp:"}</span>
        </div>
        <div class="phase6-option-list">
          ${methods
            .map((method) => {
              const label = method.label.replace(" — dữ liệu mẫu", "");
              return `
            <label class="phase6-option-card${selectedDeliveryMethodId === method.id ? " is-selected" : ""}">
              <input type="radio" name="delivery-method" value="${method.id}" ${selectedDeliveryMethodId === method.id ? "checked" : ""} />
              <span><strong>${escapeHtml(label)}</strong><small>${escapeHtml(method.estimateLabel)}</small></span>
              <b>${formatVnd(method.feeVnd)}</b>
            </label>
            `;
            })
            .join("")}
        </div>
        ${selectedDeliveryMethodId ? "" : `<p class="field-error" id="checkout-delivery-error" data-delivery-selection-error>${errors.delivery || (window.t ? window.t("Vui lòng chọn một phương thức giao hàng để hoàn tất tính tổng tiền.") : "Vui lòng chọn một phương thức giao hàng để hoàn tất tính tổng tiền.")}</p>`}
      `;
    }
    if (checkoutState === "manual-quote") {
      return `
        <div class="phase6-delivery-state status-banner status-banner--warning" role="status" aria-live="polite">
          <strong>${window.t ? window.t("Vận chuyển gốm sứ chuyên biệt") : "Vận chuyển gốm sứ chuyên biệt"}</strong><span>${window.t ? window.t("Đơn hàng có sản phẩm gốm đặc biệt hoặc kiện hàng lớn. HEDY sẽ liên hệ báo cước vận chuyển an toàn sau khi nhận đơn.") : "Đơn hàng có sản phẩm gốm đặc biệt hoặc kiện hàng lớn. HEDY sẽ liên hệ báo cước vận chuyển an toàn sau khi nhận đơn."}</span>
        </div>
        <div class="phase6-manual-facts">
          <span>${window.t ? window.t("Phương án") : "Phương án"}</span><strong>${window.t ? window.t("Đóng gói chuyên dụng & vận chuyển an toàn") : "Đóng gói chuyên dụng &amp; vận chuyển an toàn"}</strong>
          <span>${window.t ? window.t("Phí vận chuyển") : "Phí vận chuyển"}</span><strong>${window.t ? window.t("HEDY sẽ liên hệ báo phí trực tiếp") : "HEDY sẽ liên hệ báo phí trực tiếp"}</strong>
        </div>
      `;
    }
    if (checkoutState === "unsupported") {
      return `
        <div class="phase6-delivery-state status-banner status-banner--error" role="status" aria-live="polite">
          <strong>${window.t ? window.t("Khu vực cần hỗ trợ riêng") : "Khu vực cần hỗ trợ riêng"}</strong><span>${window.t ? window.t("Chưa có tuyến giao hàng tự động đến địa chỉ này. Quý khách vui lòng liên hệ trực tiếp để HEDY sắp xếp vận chuyển riêng.") : "Chưa có tuyến giao hàng tự động đến địa chỉ này. Quý khách vui lòng liên hệ trực tiếp để HEDY sắp xếp vận chuyển riêng."}</span>
        </div>
        <div class="phase6-state-actions">
          <button class="button button--outline" type="button" data-checkout-edit-address>${window.t ? window.t("Sửa địa chỉ") : "Sửa địa chỉ"}</button>
          <button class="text-link contact-trigger" type="button" data-contact-state="contextual" data-contact-source="checkout" data-contact-label="${window.t ? window.t("Hỗ trợ địa chỉ giao hàng") : "Hỗ trợ địa chỉ giao hàng"}">${window.t ? window.t("Liên hệ HEDY tư vấn →") : "Liên hệ HEDY tư vấn →"}</button>
        </div>
      `;
    }
    if (checkoutState === "quote-failure") {
      return `
        <div class="phase6-delivery-state status-banner status-banner--error" role="status" aria-live="polite">
          <strong>${window.t ? window.t("Tạm thời chưa tính được phí vận chuyển") : "Tạm thời chưa tính được phí vận chuyển"}</strong><span>${window.t ? window.t("Thông tin người nhận và địa chỉ vẫn được lưu. Vui lòng chọn lại tỉnh thành hoặc liên hệ hỗ trợ.") : "Thông tin người nhận và địa chỉ vẫn được lưu. Vui lòng chọn lại tỉnh thành hoặc liên hệ hỗ trợ."}</span>
        </div>
        <div class="phase6-state-actions">
          <a class="text-link" href="contact.html?source=checkout">${window.t ? window.t("Xem hỗ trợ chung →") : "Xem hỗ trợ chung →"}</a>
        </div>
      `;
    }
    return `
      <div class="phase6-delivery-state status-banner status-banner--pending" role="status" aria-live="polite">
        <strong>${window.t ? window.t("Chờ chọn Tỉnh / Thành phố") : "Chờ chọn Tỉnh / Thành phố"}</strong><span>${window.t ? window.t("Vui lòng chọn Tỉnh / Thành phố ở bước 01 để hệ thống tự động tính cước phí vận chuyển.") : "Vui lòng chọn Tỉnh / Thành phố ở bước 01 để hệ thống tự động tính cước phí vận chuyển."}</span>
      </div>
      ${errors.delivery ? `<p class="field-error" id="checkout-delivery-error">${errors.delivery}</p>` : ""}
    `;
  };

  const paymentMarkup = () => {
    if (checkoutState === "manual-quote") {
      return `
        <div class="phase6-payment-boundary is-disabled" role="status">
          <span aria-hidden="true">03</span>
          <div>
            <strong>${window.t ? window.t("Chưa yêu cầu thanh toán") : "Chưa yêu cầu thanh toán"}</strong>
            <p>${window.t ? window.t("Phương thức thanh toán chỉ khả dụng sau khi HEDY kiểm tra kiện gốm và xác nhận cước vận chuyển chuyên biệt cùng tổng tiền cuối.") : "Phương thức thanh toán chỉ khả dụng sau khi HEDY kiểm tra kiện gốm và xác nhận cước vận chuyển chuyên biệt cùng tổng tiền cuối."}</p>
          </div>
        </div>
      `;
    }
    if (!deliveryIsCurrent()) {
      return `
        <div class="phase6-payment-boundary is-disabled" role="status">
          <span aria-hidden="true">03</span>
          <div>
            <strong>${window.t ? window.t("Chờ chọn Tỉnh / Thành phố ở bước 01") : "Chờ chọn Tỉnh / Thành phố ở bước 01"}</strong>
            <p>${window.t ? window.t("Vui lòng chọn Tỉnh / Thành phố nhận hàng để hệ thống xác định cước phí, tổng thanh toán và kiểm tra điều kiện áp dụng COD.") : "Vui lòng chọn Tỉnh / Thành phố nhận hàng để hệ thống xác định cước phí, tổng thanh toán và kiểm tra điều kiện áp dụng COD."}</p>
          </div>
        </div>
      `;
    }

    codEligible = calculateCodEligibility();
    if (!codEligible && selectedPaymentMethod === "cod") {
      selectedPaymentMethod = deterministic ? "bank-transfer" : null;
    }

    const currentFinalTotal = finalTotal();
    const orderTotalAmount = currentFinalTotal !== null ? currentFinalTotal : subtotal;
    const orderReferenceCode = scenario?.confirmationFixture?.referenceCode || "HEDY-DH-0001";

    return `
      <fieldset class="phase7-payment-options" data-phase7-payment-options>
        <legend class="sr-only">${window.t ? window.t("Chọn phương thức thanh toán") : "Chọn phương thức thanh toán"}</legend>

        <!-- Option 1: COD -->
        <label class="phase7-payment-card${selectedPaymentMethod === "cod" ? " is-selected" : ""}${codEligible ? "" : " is-disabled"}">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            ${selectedPaymentMethod === "cod" ? "checked" : ""}
            ${codEligible ? "" : "disabled"}
            aria-describedby="phase7-cod-description${codEligible ? "" : " phase7-cod-disabled"}"
          />
          <span class="phase7-payment-card-mark" aria-hidden="true">01</span>
          <div class="phase7-payment-card-body">
            <div class="phase7-payment-card-header">
              <strong>${window.t ? window.t("Thanh toán khi nhận hàng (COD)") : "Thanh toán khi nhận hàng (COD)"}</strong>
              ${codEligible
                ? `<span class="phase7-badge phase7-badge--eligible">${window.t ? window.t("Áp dụng đơn ≤ 1.000.000₫") : "Áp dụng đơn ≤ 1.000.000₫"}</span>`
                : `<span class="phase7-badge phase7-badge--limit">${window.t ? window.t("Không khả dụng (> 1.000.000₫)") : "Không khả dụng (> 1.000.000₫)"}</span>`
              }
            </div>
            <small id="phase7-cod-description">
              ${codEligible
                ? (window.t ? window.t("Quý khách thanh toán tiền mặt trực tiếp cho nhân viên giao hàng khi nhận và đồng kiểm tra kiện gốm sứ.") : "Quý khách thanh toán tiền mặt trực tiếp cho nhân viên giao hàng khi nhận và đồng kiểm tra kiện gốm sứ.")
                : (window.t ? window.t("Chính sách an toàn HEDY: Đơn hàng trên 1.000.000₫ không áp dụng hình thức COD. Đơn hàng gốm sứ thủ công giá trị cao yêu cầu chuyển khoản trước để kích hoạt bảo hiểm kiện gốm an toàn và chuẩn bị vận chuyển riêng.") : "Chính sách an toàn HEDY: Đơn hàng trên 1.000.000₫ không áp dụng hình thức COD. Đơn hàng gốm sứ thủ công giá trị cao yêu cầu chuyển khoản trước để kích hoạt bảo hiểm kiện gốm an toàn và chuẩn bị vận chuyển riêng.")
              }
            </small>
            ${codEligible
              ? `<em>${window.t ? window.t("Đồng kiểm tra kiện gốm sứ cùng nhân viên giao hàng trước khi thanh toán.") : "Đồng kiểm tra kiện gốm sứ cùng nhân viên giao hàng trước khi thanh toán."}</em>`
              : `<em id="phase7-cod-disabled">${window.t ? window.t("Không khả dụng đối với đơn hàng có giá trị trên 1.000.000₫. Quý khách vui lòng chọn Chuyển khoản ngân hàng.") : "Không khả dụng đối với đơn hàng có giá trị trên 1.000.000₫. Quý khách vui lòng chọn Chuyển khoản ngân hàng."}</em>`
            }
          </div>
        </label>

        <!-- Option 2: Bank Transfer -->
        <label class="phase7-payment-card${selectedPaymentMethod === "bank-transfer" ? " is-selected" : ""}">
          <input
            type="radio"
            name="paymentMethod"
            value="bank-transfer"
            ${selectedPaymentMethod === "bank-transfer" ? "checked" : ""}
            aria-describedby="phase7-transfer-description"
          />
          <span class="phase7-payment-card-mark" aria-hidden="true">02</span>
          <div class="phase7-payment-card-body">
            <div class="phase7-payment-card-header">
              <strong>${window.t ? window.t("Chuyển khoản ngân hàng") : "Chuyển khoản ngân hàng"}</strong>
              <span class="phase7-badge phase7-badge--recommended">${window.t ? window.t("Khuyên dùng") : "Khuyên dùng"}</span>
            </div>
            <small id="phase7-transfer-description">
              ${window.t ? window.t("Quét mã VietQR chuyển khoản nhanh 24/7. Sau khi bấm Đặt hàng, hệ thống sẽ hiển thị mã QR cùng thông tin chuyển khoản chính xác và hỗ trợ tải ảnh biên lai giao dịch.") : "Quét mã VietQR chuyển khoản nhanh 24/7. Sau khi bấm Đặt hàng, hệ thống sẽ hiển thị mã QR cùng thông tin chuyển khoản chính xác và hỗ trợ tải ảnh biên lai giao dịch."}
            </small>
            <em>${window.t ? window.t("Miễn phí giao dịch · Áp dụng cho mọi giá trị đơn hàng") : "Miễn phí giao dịch · Áp dụng cho mọi giá trị đơn hàng"}</em>
          </div>
        </label>
      </fieldset>
      ${errors.payment ? `<p class="field-error phase7-payment-error" id="checkout-paymentMethod-error">${errors.payment}</p>` : ""}
      <p class="phase7-payment-secure-note">${window.t ? window.t("Mọi thông tin thanh toán được bảo mật an toàn. HEDY hỗ trợ đối soát nhanh chóng và thông báo qua SMS/Email.") : "Mọi thông tin thanh toán được bảo mật an toàn. HEDY hỗ trợ đối soát nhanh chóng và thông báo qua SMS/Email."}</p>
    `;
  };

  const reviewLinesMarkup = () =>
    workingLines
      .map((line) => {
        const product = getProduct(line.productFixtureId);
        const variant = getVariant(line.productFixtureId, line.variantId);
        return `
      <li class="phase6-review-line"><span><strong>${escapeHtml(product?.name?.short || line.productFixtureId)}</strong><small>${escapeHtml(variant?.label || line.variantId)} · ${window.t ? window.t("SL") : "SL"} ${line.quantity}</small></span><b>${formatVnd(line.unitPriceVnd * line.quantity)}</b></li>
    `;
      })
      .join("");

  const buildCheckoutResult = (resultState) => {
    const knownFailure = resultState === "known-creation-failure";
    const unknownOutcome = resultState === "unknown-outcome";
    const resultCreated = unknownOutcome ? null : !knownFailure;
    const manualQuote = checkoutState === "manual-quote";
    const referencePrefix =
      selectedPaymentMethod === "bank-transfer" ? "HEDY-MAU-CK-" : "HEDY-MAU-COD-";
    const resultSequence =
      readCheckoutResults().filter((entry) =>
        entry.referenceCode?.startsWith(referencePrefix),
      ).length + 1;
    const referenceCode = resultCreated
      ? (scenario?.confirmationFixture?.referenceCode ||
         `${referencePrefix}${String(resultSequence).padStart(2, "0")}`)
      : null;
    const amountVnd = finalTotal();
    const paymentStatus = manualQuote
      ? "not-actionable"
      : selectedPaymentMethod === "bank-transfer"
        ? (hasNotifiedTransfer ? "awaiting-verification" : "awaiting-payment")
        : "due-on-delivery";
    return {
      version: CHECKOUT_RESULT_SCHEMA_VERSION,
      resultKey: referenceCode || `phase7-${scenarioId}-order-${resultState}`,
      submissionKey: [
        scenarioId,
        checkoutCartSignature(workingLines),
        selectedDeliveryMethodId,
        selectedPaymentMethod,
      ].join("|"),
      scenarioId,
      state: resultState,
      resultCreated,
      resultType: manualQuote ? "delivery-quote-request" : "order",
      referenceCode,
      orderCreated: resultCreated === true && !manualQuote,
      requestCreated: resultCreated === true && manualQuote,
      paymentStatus,
      deliveryStatus: manualQuote ? "fee-pending" : "quoted",
      notificationStatus:
        resultState === "notification-failure" ? "failed" : "not-promised",
      selectedPaymentMethod,
      selectedPaymentLabel: manualQuote
        ? "Chưa yêu cầu thanh toán"
        : selectedPaymentMethod === "bank-transfer"
          ? "Chuyển khoản ngân hàng"
          : "Thanh toán khi nhận hàng (COD)",
      selectedDeliveryMethodId,
      selectedDeliveryLabel:
        deliveryResult()?.methodLabel?.replace(" — dữ liệu mẫu", "") ||
        deliveryResult()?.label?.replace(" — dữ liệu mẫu", "") ||
        (manualQuote
          ? "Vận chuyển gốm sứ chuyên biệt"
          : "Giao hàng tiêu chuẩn"),
      lines: cloneCartLines(workingLines),
      recipient: { ...values },
      totals: {
        subtotalVnd: subtotal,
        deliveryFeeVnd: finalDeliveryFee(),
        totalVnd: amountVnd,
        totalFinal: amountVnd !== null,
      },
      paymentInstructionSnapshot:
        selectedPaymentMethod === "bank-transfer"
          ? {
              bankLabel: "Vietcombank (VCB)",
              accountHolder: "HEDY ATELIER",
              accountNumber: "1029 3847 5610",
              amountVnd: amountVnd || subtotal,
              transferReference: referenceCode,
              deadline: "24 giờ kể từ khi đặt đơn",
              instructionMode: "synthetic-review-only",
              liveTransferEnabled: false,
              note: "Chuyển khoản 24/7 qua Napas247 hoặc quét mã VietQR.",
            }
          : null,
      hasNotifiedTransfer,
      billImage,
      fromCart,
      createdLabel: manualQuote
        ? "Yêu cầu báo phí đã được gửi đến tư vấn viên"
        : "Đơn hàng đã được lưu trên hệ thống",
    };
  };

  const render = (focusSelector = null) => {
    window.clearTimeout(calculationTimer);
    if (!isSubmitting) window.clearTimeout(submissionTimer);
    if (!workingLines.length) {
      root.innerHTML = `
        <nav class="breadcrumbs section-shell" aria-label="${window.t ? window.t("Đường dẫn") : "Đường dẫn"}"><a href="index.html">${window.t ? window.t("Trang chủ") : "Trang chủ"}</a><span>/</span><a href="cart.html">${window.t ? window.t("Giỏ hàng") : "Giỏ hàng"}</a><span>/</span><span aria-current="page">${window.t ? window.t("Thanh toán") : "Thanh toán"}</span></nav>
        <section class="phase6-empty section-shell"><span aria-hidden="true">H</span><p class="eyebrow">${window.t ? window.t("Giỏ hàng trống") : "Giỏ hàng trống"}</p><h1>${window.t ? window.t("Chưa có sản phẩm nào trong giỏ hàng.") : "Chưa có sản phẩm nào trong giỏ hàng."}</h1><p>${window.t ? window.t("Vui lòng chọn sản phẩm yêu thích từ cửa hàng trước khi tiến hành thanh toán.") : "Vui lòng chọn sản phẩm yêu thích từ cửa hàng trước khi tiến hành thanh toán."}</p><a class="button button--dark" href="shop.html">${window.t ? window.t("Khám phá sản phẩm →") : "Khám phá sản phẩm →"}</a></section>
      `;
      return;
    }
    const fee = finalDeliveryFee();
    const total = finalTotal();
    const manualQuote = checkoutState === "manual-quote";
    const deliveryCurrent = deliveryIsCurrent();
    const formValid = requiredFieldIds.every(
      (fieldId) => !fields[fieldId].validate(values[fieldId] || ""),
    );
    const paymentReady = manualQuote ? true : Boolean(selectedPaymentMethod);
    const submitReady =
      formValid &&
      deliveryCurrent &&
      paymentReady &&
      policyConsent &&
      !isSubmitting;
    const submitLabel = manualQuote
      ? (window.t ? window.t("Gửi yêu cầu xác nhận phí giao") : "Gửi yêu cầu xác nhận phí giao")
      : selectedPaymentMethod === "bank-transfer"
        ? (hasNotifiedTransfer ? (window.t ? window.t("Đặt đơn & Xem hướng dẫn chuyển khoản (Đã báo chuyển)") : "Đặt đơn & Xem hướng dẫn chuyển khoản (Đã báo chuyển)") : (window.t ? window.t("Đặt đơn & Xem hướng dẫn chuyển khoản") : "Đặt đơn & Xem hướng dẫn chuyển khoản"))
        : selectedPaymentMethod === "cod"
          ? (window.t ? window.t("Đặt đơn COD") : "Đặt đơn COD")
          : (window.t ? window.t("Hoàn tất đặt đơn") : "Hoàn tất đặt đơn");
    const submittingLabel = manualQuote
      ? (window.t ? window.t("Đang gửi yêu cầu…") : "Đang gửi yêu cầu…")
      : (window.t ? window.t("Đang gửi thông tin đơn hàng…") : "Đang gửi thông tin đơn hàng…");
    const selectedDeliveryLabel =
      deliveryResult()?.methodLabel?.replace(" — dữ liệu mẫu", "") ||
      deliveryResult()?.label?.replace(" — dữ liệu mẫu", "") ||
      (manualQuote ? (window.t ? window.t("Vận chuyển chuyên biệt gốm sứ") : "Vận chuyển chuyên biệt gốm sứ") : (window.t ? window.t("Chưa chọn") : "Chưa chọn"));
    const selectedPaymentLabel = manualQuote
      ? (window.t ? window.t("Chưa yêu cầu thanh toán") : "Chưa yêu cầu thanh toán")
      : selectedPaymentMethod === "bank-transfer"
        ? (window.t ? window.t("Chuyển khoản ngân hàng") : "Chuyển khoản ngân hàng")
        : selectedPaymentMethod === "cod"
          ? (window.t ? window.t("Thanh toán khi nhận hàng (COD)") : "Thanh toán khi nhận hàng (COD)")
          : (window.t ? window.t("Chưa chọn") : "Chưa chọn");
    const cartReturnHref = fromCart
      ? "cart.html"
      : `cart.html?scenario=${scenarioId}&state=normal`;
    const currentDistricts = getDistrictOptions(values.province);

    let submitReason = "";
    if (isSubmitting) {
      submitReason = window.t
        ? window.t("Đang gửi thông tin đơn hàng, vui lòng chờ trong giây lát…")
        : "Đang gửi thông tin đơn hàng, vui lòng chờ trong giây lát…";
    } else if (manualQuote) {
      submitReason = window.t
        ? window.t("Gửi yêu cầu vận chuyển để HEDY xác nhận cước phí trực tiếp.")
        : "Gửi yêu cầu vận chuyển để HEDY xác nhận cước phí trực tiếp.";
    } else if (!formValid) {
      submitReason = window.t
        ? window.t("Vui lòng hoàn tất thông tin nhận hàng ở bước 01.")
        : "Vui lòng hoàn tất thông tin nhận hàng ở bước 01.";
    } else if (!deliveryCurrent) {
      submitReason = window.t
        ? window.t("Vui lòng chọn Tỉnh / Thành phố nhận hàng ở bước 01.")
        : "Vui lòng chọn Tỉnh / Thành phố nhận hàng ở bước 01.";
    } else if (!paymentReady) {
      submitReason = window.t
        ? window.t("Vui lòng chọn phương thức thanh toán ở bước 03.")
        : "Vui lòng chọn phương thức thanh toán ở bước 03.";
    } else if (!policyConsent) {
      submitReason = window.t
        ? window.t("Vui lòng xác nhận đồng ý với điều khoản và chính sách mua hàng.")
        : "Vui lòng xác nhận đồng ý với điều khoản và chính sách mua hàng.";
    } else {
      submitReason = window.t
        ? window.t("Kiểm tra kỹ thông tin và bấm để hoàn tất gửi đơn hàng.")
        : "Kiểm tra kỹ thông tin và bấm để hoàn tất gửi đơn hàng.";
    }

    const getFieldLabel = (fieldId) => {
      if (fields[fieldId]?.label) return fields[fieldId].label;
      if (fieldId === "delivery")
        return window.t ? window.t("Phương thức giao hàng") : "Phương thức giao hàng";
      if (fieldId === "payment")
        return window.t ? window.t("Phương thức thanh toán") : "Phương thức thanh toán";
      if (fieldId === "policy")
        return window.t ? window.t("Chính sách & điều khoản") : "Chính sách & điều khoản";
      return window.t ? window.t("Thông tin") : "Thông tin";
    };

    const getFieldHref = (fieldId) => {
      if (fieldId === "delivery") return "#phase6-delivery-title";
      if (fieldId === "payment") return "#phase6-payment-title";
      if (fieldId === "policy") return "#checkout-policyConsent";
      return `#checkout-${fieldId}`;
    };

    const allProvinces = Object.keys(deliveryFixtures.provinceRates || {});
    const priorityProvinces = [
      "Thành phố Hồ Chí Minh",
      "Hà Nội",
      "Đà Nẵng",
      "Cần Thơ",
      "Hải Phòng",
      "Bình Dương",
      "Đồng Nai",
      "Bà Rịa - Vũng Tàu",
      "Long An",
      "Thừa Thiên Huế",
      "Khánh Hòa",
      "Lâm Đồng",
    ];
    const otherProvinces = allProvinces
      .filter(
        (p) =>
          !priorityProvinces.includes(p) && p !== "Tỉnh / Thành phố khác",
      )
      .sort((a, b) => a.localeCompare(b, "vi"));
    const provinceOptionList = [
      ...priorityProvinces.filter((p) => allProvinces.includes(p)),
      ...otherProvinces,
      ...(allProvinces.includes("Tỉnh / Thành phố khác")
        ? ["Tỉnh / Thành phố khác"]
        : []),
    ];

    root.innerHTML = `
      <nav class="breadcrumbs section-shell" aria-label="${window.t ? window.t("Đường dẫn") : "Đường dẫn"}"><a href="index.html">${window.t ? window.t("Trang chủ") : "Trang chủ"}</a><span>/</span><a href="shop.html">${window.t ? window.t("Cửa hàng") : "Cửa hàng"}</a><span>/</span><a href="${cartReturnHref}">${window.t ? window.t("Giỏ hàng") : "Giỏ hàng"}</a><span>/</span><span aria-current="page">${window.t ? window.t("Thanh toán") : "Thanh toán"}</span></nav>
      <header class="phase6-checkout-hero section-shell">
        <div><p class="eyebrow">${window.t ? window.t("Thanh toán đơn hàng") : "Thanh toán đơn hàng"}</p><h1>${window.t ? window.t("Thông tin giao hàng") : "Thông tin giao hàng"}</h1></div>
        <div><p>${window.t ? window.t("Vui lòng hoàn tất thông tin người nhận và địa chỉ giao hàng để HEDY chuẩn bị kiện hàng cho bạn chu đáo nhất.") : "Vui lòng hoàn tất thông tin người nhận và địa chỉ giao hàng để HEDY chuẩn bị kiện hàng cho bạn chu đáo nhất."}</p><a href="${cartReturnHref}">← ${window.t ? window.t("Quay lại Giỏ hàng") : "Quay lại Giỏ hàng"}</a></div>
      </header>
      <form class="phase6-checkout-layout section-shell" novalidate data-checkout-form ${isSubmitting ? 'aria-busy="true"' : ""}>
        <div class="phase6-checkout-flow">
          ${
            Object.keys(errors).length
              ? `
            <div class="error-summary" id="checkout-errors" role="alert" tabindex="-1" data-checkout-error-summary>
              <h2>${window.t ? window.t("Vui lòng kiểm tra lại") : "Vui lòng kiểm tra lại"} ${Object.keys(errors).length} ${window.t ? window.t("thông tin dưới đây:") : "thông tin dưới đây:"}</h2>
              <ul>${Object.entries(errors)
                .map(
                  ([fieldId, message]) =>
                    `<li><a href="${getFieldHref(fieldId)}" data-error-link="${fieldId}">${getFieldLabel(fieldId)}: ${escapeHtml(message)}</a></li>`,
                )
                .join("")}</ul>
            </div>
          `
              : ""
          }
          <section class="phase6-form-section" aria-labelledby="phase6-shipping-info-title">
            <div class="phase6-step-heading">
              <span>01</span>
              <div>
                <p class="eyebrow">${window.t ? window.t("Bước 01 · Giao nhận") : "Bước 01 · Giao nhận"}</p>
                <h2 id="phase6-shipping-info-title">${window.t ? window.t("Thông tin nhận hàng") : "Thông tin nhận hàng"}</h2>
              </div>
            </div>
            <div class="phase6-subgroup">
              <h3 class="phase6-subgroup-title">${window.t ? window.t("Thông tin liên hệ & người nhận") : "Thông tin liên hệ &amp; người nhận"}</h3>
              <div class="phase6-field-grid">
                <div class="field">
                  <label for="checkout-recipientName">${window.t ? window.t("Họ và tên người nhận") : "Họ và tên người nhận"} <span class="required-mark" aria-hidden="true">*</span></label>
                  <input id="checkout-recipientName" name="recipientName" autocomplete="name" maxlength="80" placeholder="${window.t ? window.t("Ví dụ: Nguyễn Thị Mai") : "Ví dụ: Nguyễn Thị Mai"}" ${errors.recipientName ? 'aria-describedby="checkout-recipientName-error" aria-invalid="true"' : ""} />
                  ${errors.recipientName ? `<p class="field-error" id="checkout-recipientName-error">${errors.recipientName}</p>` : ""}
                </div>
                <div class="field">
                  <label for="checkout-phone">${window.t ? window.t("Số điện thoại") : "Số điện thoại"} <span class="required-mark" aria-hidden="true">*</span></label>
                  <input id="checkout-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" maxlength="18" placeholder="${window.t ? window.t("Ví dụ: 0912 345 678") : "Ví dụ: 0912 345 678"}" ${errors.phone ? 'aria-describedby="checkout-phone-error" aria-invalid="true"' : ""} />
                  ${errors.phone ? `<p class="field-error" id="checkout-phone-error">${errors.phone}</p>` : ""}
                </div>
                <div class="field phase6-field-wide">
                  <label for="checkout-email">Email <span class="field-optional">(${window.t ? window.t("không bắt buộc") : "không bắt buộc"})</span></label>
                  <input id="checkout-email" name="email" type="email" autocomplete="email" maxlength="120" placeholder="${window.t ? window.t("Ví dụ: mainguyen@example.com") : "Ví dụ: mainguyen@example.com"}" ${errors.email ? 'aria-describedby="checkout-email-error" aria-invalid="true"' : ""} />
                  ${errors.email ? `<p class="field-error" id="checkout-email-error">${errors.email}</p>` : ""}
                </div>
              </div>
            </div>

            <div class="phase6-subgroup">
              <h3 class="phase6-subgroup-title">${window.t ? window.t("Địa chỉ giao hàng") : "Địa chỉ giao hàng"}</h3>
              ${checkoutState === "address-service-error" ? `<div class="status-banner status-banner--error phase6-address-service"><strong>${window.t ? window.t("Chưa tải được danh mục địa chỉ.") : "Chưa tải được danh mục địa chỉ."}</strong><span>${window.t ? window.t("Các thông tin đã nhập vẫn được giữ nguyên. Vui lòng bấm thử lại.") : "Các thông tin đã nhập vẫn được giữ nguyên. Vui lòng bấm thử lại."}</span><button type="button" data-address-service-retry>${window.t ? window.t("Thử lại") : "Thử lại"}</button></div>` : ""}
              <div class="phase6-field-grid">
                <div class="field">
                  <label for="checkout-province">${window.t ? window.t("Tỉnh / Thành phố") : "Tỉnh / Thành phố"} <span class="required-mark" aria-hidden="true">*</span></label>
                  <select id="checkout-province" name="province" autocomplete="address-level1" ${errors.province ? 'aria-describedby="checkout-province-error" aria-invalid="true"' : ""}>
                    <option value="">${window.t ? window.t("Chọn tỉnh / thành phố") : "Chọn tỉnh / thành phố"}</option>
                    ${provinceOptionList
                      .map((p) => {
                        const rate = deliveryFixtures.provinceRates?.[p];
                        const feeStr = rate?.feeVnd ? ` — ${formatVnd(rate.feeVnd)}` : "";
                        const isSelected =
                          values.province === p ||
                          (values.province && values.province.includes(p));
                        return `<option value="${escapeHtml(p)}" ${isSelected ? "selected" : ""}>${escapeHtml(p)}${feeStr}</option>`;
                      })
                      .join("")}
                  </select>
                  ${errors.province ? `<p class="field-error" id="checkout-province-error">${errors.province}</p>` : ""}
                </div>
                <div class="field">
                  <label for="checkout-districtWard">${window.t ? window.t("Quận / Huyện") : "Quận / Huyện"} <span class="required-mark" aria-hidden="true">*</span></label>
                  <select id="checkout-districtWard" name="districtWard" autocomplete="address-level2" ${values.province ? "" : "disabled"} ${errors.districtWard ? 'aria-describedby="checkout-districtWard-error" aria-invalid="true"' : ""}>
                    <option value="">${values.province ? (window.t ? window.t("Chọn quận / huyện") : "Chọn quận / huyện") : (window.t ? window.t("Vui lòng chọn tỉnh/thành phố trước") : "Vui lòng chọn tỉnh/thành phố trước")}</option>
                    ${currentDistricts.map((d) => `<option value="${escapeHtml(d)}" ${values.districtWard.includes(d) || values.districtWard === d ? "selected" : ""}>${escapeHtml(d)}</option>`).join("")}
                  </select>
                  ${errors.districtWard ? `<p class="field-error" id="checkout-districtWard-error">${errors.districtWard}</p>` : ""}
                </div>
                <div class="field phase6-field-wide">
                  <label for="checkout-street">${window.t ? window.t("Địa chỉ cụ thể") : "Địa chỉ cụ thể"} <span class="required-mark" aria-hidden="true">*</span></label>
                  <input id="checkout-street" name="street" autocomplete="street-address" maxlength="160" placeholder="${window.t ? window.t("Số nhà, tên đường, khu dân cư hoặc tòa nhà...") : "Số nhà, tên đường, khu dân cư hoặc tòa nhà..."}" ${errors.street ? 'aria-describedby="checkout-street-error" aria-invalid="true"' : ""} />
                  ${errors.street ? `<p class="field-error" id="checkout-street-error">${errors.street}</p>` : ""}
                </div>
                <div class="field phase6-field-wide">
                  <label for="checkout-deliveryNote">${window.t ? window.t("Ghi chú giao hàng") : "Ghi chú giao hàng"} <span class="field-optional">(${window.t ? window.t("không bắt buộc") : "không bắt buộc"})</span></label>
                  <textarea id="checkout-deliveryNote" name="deliveryNote" maxlength="240" rows="2" placeholder="${window.t ? window.t("Ví dụ: Giao giờ hành chính, gọi trước khi giao, chỉ dẫn lối vào...") : "Ví dụ: Giao giờ hành chính, gọi trước khi giao, chỉ dẫn lối vào..."}"></textarea>
                </div>
              </div>
            </div>
          </section>

          <section class="phase6-form-section" aria-labelledby="phase6-delivery-title">
            <div class="phase6-step-heading">
              <span>02</span>
              <div>
                <p class="eyebrow">${window.t ? window.t("Bước 02 · Vận chuyển") : "Bước 02 · Vận chuyển"}</p>
                <h2 id="phase6-delivery-title" tabindex="-1">${window.t ? window.t("Phương thức giao hàng") : "Phương thức giao hàng"}</h2>
              </div>
            </div>
            <div class="phase6-delivery-live" aria-live="polite">${deliveryMarkup()}</div>
          </section>

          <section class="phase6-form-section" aria-labelledby="phase6-payment-title">
            <div class="phase6-step-heading">
              <span>03</span>
              <div>
                <p class="eyebrow">${window.t ? window.t("Bước 03 · Thanh toán") : "Bước 03 · Thanh toán"}</p>
                <h2 id="phase6-payment-title">${window.t ? window.t("Phương thức thanh toán") : "Phương thức thanh toán"}</h2>
              </div>
            </div>
            ${paymentMarkup()}
          </section>
        </div>

        <aside class="phase6-review" aria-labelledby="phase6-review-title">
          <div class="phase6-review-heading">
            <p class="eyebrow">${window.t ? window.t("Đơn hàng của bạn") : "Đơn hàng của bạn"}</p>
            <h2 id="phase6-review-title">${window.t ? window.t("Chi tiết đơn hàng") : "Chi tiết đơn hàng"}</h2>
            <a href="${cartReturnHref}">${window.t ? window.t("Sửa Giỏ hàng") : "Sửa Giỏ hàng"}</a>
          </div>
          <ol class="phase6-review-lines">${reviewLinesMarkup()}</ol>
          <dl class="phase6-review-totals">
            <div><dt>${window.t ? window.t("Tạm tính sản phẩm") : "Tạm tính sản phẩm"}</dt><dd>${formatVnd(subtotal)}</dd></div>
            <div><dt>${window.t ? window.t("Phí vận chuyển") : "Phí vận chuyển"}</dt><dd>${fee !== null ? formatVnd(fee) : `<strong class="phase6-pending-value">${window.t ? window.t("Chọn tỉnh/thành") : "Chọn tỉnh/thành"}</strong>`}</dd></div>
            <div class="phase6-review-total"><dt>${window.t ? window.t("Tổng thanh toán") : "Tổng thanh toán"}</dt><dd>${total !== null ? formatVnd(total) : formatVnd(subtotal)}</dd></div>
          </dl>
          <dl class="phase7-review-methods">
            <div><dt>${window.t ? window.t("Vận chuyển") : "Vận chuyển"}</dt><dd>${escapeHtml(selectedDeliveryLabel)}</dd></div>
            <div><dt>${window.t ? window.t("Thanh toán") : "Thanh toán"}</dt><dd>${escapeHtml(selectedPaymentLabel)}</dd></div>
          </dl>
          <div class="phase6-address-summary">
            <div><span>${window.t ? window.t("Người nhận") : "Người nhận"}</span><button type="button" data-edit-field="recipientName">${window.t ? window.t("Sửa") : "Sửa"}</button></div>
            <strong>${escapeHtml(values.recipientName || (window.t ? window.t("Chưa nhập tên người nhận") : "Chưa nhập tên người nhận"))}</strong>
            <p>${escapeHtml([values.street, values.districtWard, values.province].filter(Boolean).join(", ") || (window.t ? window.t("Chưa có địa chỉ giao hàng") : "Chưa có địa chỉ giao hàng"))}</p>
          </div>
          <label class="phase6-consent" for="checkout-policyConsent">
            <input type="checkbox" id="checkout-policyConsent" name="policyConsent" ${policyConsent ? "checked" : ""} />
            <span>${window.t ? window.t("Tôi đồng ý với các chính sách về") : "Tôi đồng ý với các chính sách về"} <a href="policies.html?source=checkout#giao-hang-va-hu-hong" target="_blank">${window.t ? window.t("giao hàng") : "giao hàng"}</a>, <a href="policies.html?source=checkout#doi-tra-huy-hoan" target="_blank">${window.t ? window.t("đổi trả") : "đổi trả"}</a> ${window.t ? window.t("và") : "và"} <a href="policies.html?source=checkout#dieu-khoan" target="_blank">${window.t ? window.t("điều khoản mua hàng") : "điều khoản mua hàng"}</a> ${window.t ? window.t("của HEDY ATELIER.") : "của HEDY ATELIER."}</span>
          </label>
          ${errors.policy ? `<p class="field-error" id="checkout-policy-error">${errors.policy}</p>` : ""}
          <button class="button button--dark phase6-submit phase7-submit" type="submit" data-phase6-boundary data-phase7-submit ${isSubmitting ? "disabled" : ""} ${isSubmitting ? 'aria-busy="true"' : ""}>
            ${isSubmitting ? submittingLabel : submitLabel} <span aria-hidden="true">${isSubmitting ? "·" : "→"}</span>
          </button>
          <p class="disabled-reason" data-submit-reason>${submitReason}</p>
          <p class="inline-confirmation phase6-boundary-message"${boundaryTone ? ` data-tone="${boundaryTone}"` : ""} role="status" aria-live="polite">${boundaryMessage}</p>
          <p class="phase6-tax-note">${window.t ? window.t("Mọi thông tin của quý khách được bảo mật. Giá đã bao gồm thuế GTGT.") : "Mọi thông tin của quý khách được bảo mật. Giá đã bao gồm thuế GTGT."}</p>
        </aside>
      </form>
    `;

    Object.entries(values).forEach(([fieldId, value]) => {
      const control = root.querySelector(`[name="${fieldId}"]`);
      if (control) control.value = value;
    });

    const clearFieldError = (fieldId) => {
      delete errors[fieldId];
      if (fieldId === "delivery") {
        root.querySelector("#checkout-delivery-error")?.remove();
      } else if (fieldId === "payment") {
        root.querySelector("#checkout-paymentMethod-error")?.remove();
      } else if (fieldId === "policy") {
        root.querySelector("#checkout-policy-error")?.remove();
      } else {
        const fieldEl = root.querySelector(`#checkout-${fieldId}`);
        if (fieldEl) {
          fieldEl.removeAttribute("aria-invalid");
          const describedBy = fieldEl.getAttribute("aria-describedby") || "";
          fieldEl.setAttribute(
            "aria-describedby",
            describedBy.replace(` checkout-${fieldId}-error`, "").trim(),
          );
        }
        const errorP = root.querySelector(`#checkout-${fieldId}-error`);
        if (errorP) errorP.remove();
      }

      if (Object.keys(errors).length === 0) {
        root.querySelector("#checkout-errors")?.remove();
        if (boundaryTone === "error") {
          boundaryMessage = "";
          boundaryTone = "";
          const boundaryEl = root.querySelector(".phase6-boundary-message");
          if (boundaryEl) {
            boundaryEl.textContent = "";
            boundaryEl.removeAttribute("data-tone");
          }
        }
      } else {
        const errorLink = root.querySelector(`[data-error-link="${fieldId}"]`);
        errorLink?.closest("li")?.remove();
        const countH2 = root.querySelector("#checkout-errors h2");
        if (countH2) {
          countH2.textContent = `${window.t ? window.t("Vui lòng kiểm tra lại") : "Vui lòng kiểm tra lại"} ${Object.keys(errors).length} ${window.t ? window.t("thông tin dưới đây:") : "thông tin dưới đây:"}`;
        }
      }
    };

    const showFieldError = (fieldId, message) => {
      errors[fieldId] = message;
      const fieldEl = root.querySelector(`#checkout-${fieldId}`);
      if (fieldEl) {
        fieldEl.setAttribute("aria-invalid", "true");
        let errorP = root.querySelector(`#checkout-${fieldId}-error`);
        if (!errorP) {
          errorP = document.createElement("p");
          errorP.className = "field-error";
          errorP.id = `checkout-${fieldId}-error`;
          fieldEl.insertAdjacentElement("afterend", errorP);
        }
        errorP.textContent = message;
        const describedBy = fieldEl.getAttribute("aria-describedby") || "";
        if (!describedBy.includes(`checkout-${fieldId}-error`)) {
          fieldEl.setAttribute(
            "aria-describedby",
            `${describedBy} checkout-${fieldId}-error`.trim(),
          );
        }
      }
    };

    root
      .querySelectorAll(
        'input:not([type="radio"]):not([type="checkbox"]), select, textarea',
      )
      .forEach((control) => {
        control.addEventListener("input", () => {
          values[control.name] = control.value;
          saveDraft();
          if (errors[control.name]) {
            const msg = fields[control.name]?.validate(control.value || "") || "";
            if (!msg) {
              clearFieldError(control.name);
            }
          }
        });
        control.addEventListener("blur", () => {
          if (!fields[control.name]) return;
          const msg = fields[control.name]?.validate(control.value || "") || "";
          if (msg) {
            showFieldError(control.name, msg);
          } else if (errors[control.name]) {
            clearFieldError(control.name);
          }
        });
      });

    root
      .querySelector("#checkout-province")
      ?.addEventListener("change", (event) => {
        values.province = event.currentTarget.value;
        values.districtWard = "";
        if (values.province) {
          clearFieldError("province");
          checkoutState = resolvedOutcome();
          if (checkoutState === "multiple-methods") {
            selectedDeliveryMethodId = "standard-demo";
          } else if (
            ["one-method", "zone-fallback", "manual-quote"].includes(checkoutState)
          ) {
            selectedDeliveryMethodId =
              deliveryFixtures[checkoutState]?.methodId || "standard-demo";
          }
          const rate = getProvinceRate(values.province);
          boundaryMessage =
            rate?.feeVnd !== undefined
              ? `Đã tự động áp dụng cước phí giao hàng (${formatVnd(rate.feeVnd)}) cho ${values.province}.`
              : `Đã cập nhật phương thức giao hàng cho ${values.province}.`;
          boundaryTone = "";
        } else {
          checkoutState = "not-ready";
          selectedDeliveryMethodId = null;
          boundaryMessage = "";
          boundaryTone = "";
        }
        delete errors.delivery;
        saveDraft();
        updateUrlState();
        render("#checkout-districtWard");
      });

    root
      .querySelector("#checkout-districtWard")
      ?.addEventListener("change", (event) => {
        values.districtWard = event.currentTarget.value;
        if (values.districtWard) {
          clearFieldError("districtWard");
        }
        saveDraft();
        render("#checkout-districtWard");
      });

    root
      .querySelector("#checkout-street")
      ?.addEventListener("change", () => {
        if (values.street && !fields.street.validate(values.street)) {
          clearFieldError("street");
        }
        saveDraft();
      });

    root.querySelectorAll("[data-error-link]").forEach((link) =>
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const fieldId = link.dataset.errorLink;
        if (fieldId === "delivery") {
          const target =
            root.querySelector("#checkout-province") ||
            root.querySelector('[name="delivery-method"]') ||
            root.querySelector("#phase6-delivery-title");
          target?.focus();
          target?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (fieldId === "payment") {
          const target =
            root.querySelector('[name="paymentMethod"]:not(:disabled)') ||
            root.querySelector("#phase6-payment-title");
          target?.focus();
          target?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (fieldId === "policy") {
          const target = root.querySelector('[name="policyConsent"]');
          target?.focus();
          target?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          const target = root.querySelector(`#checkout-${fieldId}`);
          target?.focus();
          target?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }),
    );

    root
      .querySelector("[data-address-service-retry]")
      ?.addEventListener("click", () => {
        checkoutState = "not-ready";
        boundaryMessage =
          "Đã sẵn sàng tải lại; các thông tin đã nhập vẫn được giữ nguyên.";
        boundaryTone = "";
        saveDraft();
        updateUrlState();
        render("#checkout-province");
      });
    root
      .querySelector("[data-checkout-edit-address]")
      ?.addEventListener("click", () =>
        root.querySelector("#checkout-province")?.focus(),
      );
    root.querySelectorAll('[name="delivery-method"]').forEach((radio) =>
      radio.addEventListener("change", () => {
        selectedDeliveryMethodId = radio.value;
        delete errors.delivery;
        boundaryMessage = `Đã chọn ${radio.closest("label").querySelector("strong").textContent}; tổng thanh toán đã cập nhật.`;
        boundaryTone = "";
        saveDraft();
        render('[name="delivery-method"]:checked');
      }),
    );
    root.querySelectorAll('[name="paymentMethod"]').forEach((radio) =>
      radio.addEventListener("change", () => {
        selectedPaymentMethod = radio.value;
        delete errors.payment;
        boundaryMessage = `Đã chọn phương thức ${radio.value === "bank-transfer" ? "Chuyển khoản ngân hàng" : "Thanh toán khi nhận hàng (COD)"}.`;
        boundaryTone = "";
        saveDraft();
        render('[name="paymentMethod"]:checked');
      }),
    );
    root
      .querySelector('[name="policyConsent"]')
      ?.addEventListener("change", (event) => {
        policyConsent = event.currentTarget.checked;
        if (policyConsent) {
          delete errors.policy;
          if (boundaryTone === "error") {
            boundaryMessage = "";
            boundaryTone = "";
          }
        }
        saveDraft();
        render('[name="policyConsent"]');
      });
    root
      .querySelectorAll("[data-edit-field]")
      .forEach((button) =>
        button.addEventListener("click", () =>
          root.querySelector(`#checkout-${button.dataset.editField}`)?.focus(),
        ),
      );
    root.querySelectorAll(".contact-trigger").forEach(bindContactTrigger);
    root
      .querySelector("[data-checkout-form]")
      ?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (isSubmitting) return;

        delete errors.delivery;
        delete errors.payment;
        delete errors.policy;

        // Step 1: Validate recipient and address fields
        if (!validateAll()) {
          boundaryMessage =
            window.t ? window.t("Vui lòng điền đầy đủ các thông tin giao hàng bắt buộc.") : "Vui lòng điền đầy đủ các thông tin giao hàng bắt buộc.";
          boundaryTone = "error";
          render();
          const firstErrorId =
            requiredFieldIds.find((id) => errors[id]) || Object.keys(errors)[0];
          if (firstErrorId) {
            const firstEl = root.querySelector(`#checkout-${firstErrorId}`);
            if (firstEl) {
              firstEl.focus();
              firstEl.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }
          return;
        }

        // Step 2: Validate delivery method
        if (!deliveryIsCurrent()) {
          let deliveryMsg = "";
          let focusTarget = null;
          if (checkoutState === "not-ready" || checkoutState === "stale") {
            deliveryMsg = window.t
              ? window.t("Vui lòng chọn Tỉnh / Thành phố để hệ thống áp dụng cước phí giao hàng.")
              : "Vui lòng chọn Tỉnh / Thành phố để hệ thống áp dụng cước phí giao hàng.";
            focusTarget =
              root.querySelector("#checkout-province") ||
              root.querySelector("#phase6-delivery-title");
          } else if (checkoutState === "multiple-methods" && !selectedDeliveryMethodId) {
            deliveryMsg = window.t
              ? window.t("Vui lòng chọn một phương thức giao hàng phù hợp.")
              : "Vui lòng chọn một phương thức giao hàng phù hợp.";
            focusTarget =
              root.querySelector('[name="delivery-method"]') ||
              root.querySelector("#phase6-delivery-title");
          } else if (checkoutState === "calculating") {
            boundaryMessage = window.t
              ? window.t("Hệ thống đang cập nhật phí vận chuyển, vui lòng chờ trong giây lát…")
              : "Hệ thống đang cập nhật phí vận chuyển, vui lòng chờ trong giây lát…";
            boundaryTone = "";
            render();
            return;
          } else if (checkoutState === "unsupported") {
            deliveryMsg = window.t
              ? window.t("Khu vực giao hàng hiện chưa hỗ trợ tuyến giao tự động. Vui lòng liên hệ HEDY để được hỗ trợ.")
              : "Khu vực giao hàng hiện chưa hỗ trợ tuyến giao tự động. Vui lòng liên hệ HEDY để được hỗ trợ.";
            focusTarget = root.querySelector("[data-checkout-edit-address]");
          } else if (checkoutState === "quote-failure") {
            deliveryMsg = window.t
              ? window.t("Tạm thời chưa tính được phí vận chuyển. Vui lòng chọn lại tỉnh thành.")
              : "Tạm thời chưa tính được phí vận chuyển. Vui lòng chọn lại tỉnh thành.";
            focusTarget = root.querySelector("#checkout-province");
          } else {
            deliveryMsg = window.t
              ? window.t("Vui lòng chọn phương thức giao hàng hợp lệ.")
              : "Vui lòng chọn phương thức giao hàng hợp lệ.";
            focusTarget = root.querySelector("#phase6-delivery-title");
          }
          errors.delivery = deliveryMsg;
          boundaryMessage = deliveryMsg;
          boundaryTone = "error";
          render();
          if (focusTarget) {
            focusTarget.focus();
            focusTarget.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
          return;
        }

        // Step 3: Validate payment method
        if (!manualQuote && !selectedPaymentMethod) {
          const payMsg = window.t
            ? window.t("Vui lòng chọn phương thức thanh toán (COD hoặc Chuyển khoản ngân hàng).")
            : "Vui lòng chọn phương thức thanh toán (COD hoặc Chuyển khoản ngân hàng).";
          errors.payment = payMsg;
          boundaryMessage = payMsg;
          boundaryTone = "error";
          render();
          const payTarget =
            root.querySelector('[name="paymentMethod"]:not(:disabled)') ||
            root.querySelector("#phase6-payment-title");
          if (payTarget) {
            payTarget.focus();
            payTarget.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
          return;
        }

        // Step 4: Validate policy consent
        if (!policyConsent) {
          const policyMsg = window.t
            ? window.t("Vui lòng xác nhận đồng ý với các chính sách và điều khoản mua hàng của HEDY ATELIER.")
            : "Vui lòng xác nhận đồng ý với các chính sách và điều khoản mua hàng của HEDY ATELIER.";
          errors.policy = policyMsg;
          boundaryMessage = "";
          boundaryTone = "";
          render();
          const consentTarget = root.querySelector('[name="policyConsent"]');
          if (consentTarget) {
            consentTarget.focus();
            consentTarget.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
          return;
        }

        const resultState =
          requestedOutcome === "success"
            ? manualQuote
              ? "request-received"
              : "received"
            : requestedOutcome;
        const prospectiveResult = buildCheckoutResult(resultState);
        const reusableResult = readCheckoutResults().find(
          (entry) =>
            entry.submissionKey === prospectiveResult.submissionKey &&
            entry.resultCreated !== false,
        );
        if (reusableResult) {
          const confirmationUrl = new URL(
            "confirmation.html",
            window.location.href,
          );
          confirmationUrl.searchParams.set(
            "scenario",
            reusableResult.scenarioId,
          );
          confirmationUrl.searchParams.set("state", reusableResult.state);
          confirmationUrl.searchParams.set("result", reusableResult.resultKey);
          window.location.href = confirmationUrl.href;
          return;
        }
        isSubmitting = true;
        boundaryMessage = manualQuote
          ? "Đang ghi nhận yêu cầu vận chuyển chuyên biệt…"
          : "Đang gửi thông tin đơn hàng…";
        boundaryTone = "";
        saveDraft();
        render("[data-phase7-submit]");
        submissionTimer = window.setTimeout(() => {
          const result = buildCheckoutResult(resultState);
          saveCheckoutResult(result);
          const confirmationUrl = new URL(
            "confirmation.html",
            window.location.href,
          );
          confirmationUrl.searchParams.set("scenario", scenarioId);
          confirmationUrl.searchParams.set("state", resultState);
          confirmationUrl.searchParams.set("result", result.resultKey);
          window.location.href = confirmationUrl.href;
        }, 550);
      });

    if (focusSelector)
      root.querySelector(focusSelector)?.focus({ preventScroll: true });
  };

  render();
  if (window.location.hash) {
    const scrollToHashTarget = () => {
      const target = root.querySelector(window.location.hash);
      target?.scrollIntoView({ block: "start" });
    };
    window.requestAnimationFrame(scrollToHashTarget);
    window.setTimeout(scrollToHashTarget, 220);
  }
};

const initPhase7Confirmation = () => {
  const root = document.querySelector("[data-phase7-confirmation]");
  if (!root) return;
  const query = new URLSearchParams(window.location.search);
  const scenarioIds = ["standard-cod", "standard-transfer", "manual-delivery"];
  const scenarioId = scenarioIds.includes(query.get("scenario"))
    ? query.get("scenario")
    : "standard-cod";
  const scenario =
    prototypeData.reviewScenarios?.[scenarioId] ||
    prototypeData.reviewScenarios?.["standard-cod"];
  const requestedState = phase7ConfirmationStates.has(query.get("state"))
    ? query.get("state")
    : defaultConfirmationState(scenarioId);
  const storedResult = query.get("result")
    ? findCheckoutResult(query.get("result"))
    : null;
  const state = storedResult?.state || requestedState;
  const fixtureResult = prototypeData.commerceFixtures?.confirmation?.find(
    (entry) => entry.scenario === scenarioId && entry.state === state,
  );
  const knownFailure = state === "known-creation-failure";
  const unknownOutcome = state === "unknown-outcome";
  const manualRequest =
    scenarioId === "manual-delivery" && !knownFailure && !unknownOutcome;
  const isPendingReview =
    storedResult?.selectedPaymentMethod === "pending-review" ||
    storedResult?.paymentStatus === "pending-review";
  const transferResult =
    !isPendingReview &&
    (storedResult?.selectedPaymentMethod ||
      (scenarioId === "standard-transfer"
        ? "bank-transfer"
        : scenarioId === "standard-cod"
          ? "cod"
          : null)) === "bank-transfer";
  const resultCreated =
    storedResult?.resultCreated ??
    fixtureResult?.resultCreated ??
    (unknownOutcome ? null : !knownFailure);
  const referenceCode = resultCreated
    ? storedResult?.referenceCode ||
      fixtureResult?.referenceCode ||
      scenario?.confirmationFixture?.referenceCode
    : null;
  const lines =
    storedResult?.lines || cloneCartLines(scenario?.lineSnapshot || []);
  const recipient =
    storedResult?.recipient || scenario?.recipientSnapshot || {};
  const totals = storedResult?.totals || scenario?.totalsSnapshot || {};

  let hasNotifiedTransfer = Boolean(
    storedResult?.hasNotifiedTransfer || state === "awaiting-verification",
  );
  let billImage = storedResult?.billImage || null;

  const notificationFailed =
    state === "notification-failure" ||
    storedResult?.notificationStatus === "failed" ||
    fixtureResult?.notificationStatus === "failed";
  const selectedPaymentLabel =
    storedResult?.selectedPaymentLabel ||
    (isPendingReview
      ? (window.t ? window.t("Đang xét duyệt (Liên hệ xác nhận)") : "Đang xét duyệt (Liên hệ xác nhận)")
      : manualRequest
        ? (window.t ? window.t("Chưa yêu cầu thanh toán") : "Chưa yêu cầu thanh toán")
        : transferResult
          ? (window.t ? window.t("Chuyển khoản ngân hàng") : "Chuyển khoản ngân hàng")
          : (window.t ? window.t("Thanh toán khi nhận hàng (COD)") : "Thanh toán khi nhận hàng (COD)"));
  const selectedDeliveryLabel =
    storedResult?.selectedDeliveryLabel ||
    prototypeData.commerceFixtures?.delivery?.[
      scenario?.deliveryFixtureId
    ]?.methodLabel?.replace(" — dữ liệu mẫu", "") ||
    (window.t ? window.t("Giao hàng tiêu chuẩn") : "Giao hàng tiêu chuẩn");
  const transferBase =
    storedResult?.paymentInstructionSnapshot ||
    scenario?.paymentInstructionSnapshot ||
    prototypeData.reviewScenarios?.["standard-transfer"]
      ?.paymentInstructionSnapshot;
  const transferInstructions =
    transferResult && resultCreated
      ? {
          ...transferBase,
          amountVnd: totals.totalVnd,
          transferReference: referenceCode,
        }
      : null;
  const checkoutReturnHref = `checkout.html?scenario=${scenarioId}${storedResult?.fromCart ? "&source=cart" : ""}&recovery=${state}`;

  const linesMarkup = lines
    .map((line) => {
      const product = getProduct(line.productFixtureId);
      const variant = getVariant(line.productFixtureId, line.variantId);
      return `<li><span><strong>${escapeHtml(product?.name?.short || line.productFixtureId)}</strong><small>${escapeHtml(variant?.label || line.variantId)} · ${window.t ? window.t("SL") : "SL"} ${line.quantity}</small></span><b>${formatVnd(line.unitPriceVnd * line.quantity)}</b></li>`;
    })
    .join("");

  const renderConfirmation = () => {
    const paymentStatusFinal =
      hasNotifiedTransfer
        ? "awaiting-verification"
        : storedResult?.paymentStatus ||
          (isPendingReview
            ? "pending-review"
            : fixtureResult?.paymentStatus ||
              (manualRequest
                ? "not-actionable"
                : transferResult
                  ? state === "awaiting-verification"
                    ? "awaiting-verification"
                    : "awaiting-payment"
                  : "due-on-delivery"));

    const transferTimelineMarkup = () => {
      const currentIndex =
        paymentStatusFinal === "awaiting-verification" ? 2 : 1;
      const steps = [
        [window.t ? window.t("Đã nhận đơn") : "Đã nhận đơn", window.t ? window.t("Đơn đã ghi nhận") : "Đơn đã ghi nhận"],
        [window.t ? window.t("Chờ chuyển khoản") : "Chờ chuyển khoản", window.t ? window.t("Chưa thanh toán") : "Chưa thanh toán"],
        [window.t ? window.t("Chờ đối chiếu") : "Chờ đối chiếu", window.t ? window.t("HEDY kiểm tra thực nhận") : "HEDY kiểm tra thực nhận"],
        [window.t ? window.t("Đã thanh toán") : "Đã thanh toán", window.t ? window.t("Xác nhận giao dịch") : "Xác nhận giao dịch"],
      ];
      return `<ol class="phase7-payment-timeline" aria-label="${window.t ? window.t("Các trạng thái chuyển khoản") : "Các trạng thái chuyển khoản"}">${steps.map(([label, note], index) => `<li class="${index < currentIndex ? "is-complete" : index === currentIndex ? "is-current" : ""}" ${index === currentIndex ? 'aria-current="step"' : ""}><span>${String(index + 1).padStart(2, "0")}</span><div><strong>${label}</strong><small>${note}</small></div></li>`).join("")}</ol>`;
    };

    const confirmationSummaryMarkup = () => `
      <aside class="phase7-confirmation-summary" aria-labelledby="phase7-summary-title">
        <div class="phase7-summary-heading"><p class="eyebrow">${window.t ? window.t("Chi tiết đơn hàng") : "Chi tiết đơn hàng"}</p><h2 id="phase7-summary-title">${manualRequest ? (window.t ? window.t("Yêu cầu vận chuyển.") : "Yêu cầu vận chuyển.") : (window.t ? window.t("Đơn hàng của bạn.") : "Đơn hàng của bạn.")}</h2></div>
        <ol class="phase7-summary-lines">${linesMarkup}</ol>
        <dl class="phase7-summary-totals">
          <div><dt>${window.t ? window.t("Tạm tính sản phẩm") : "Tạm tính sản phẩm"}</dt><dd>${formatVnd(totals.subtotalVnd || 0)}</dd></div>
          <div><dt>${window.t ? window.t("Phí vận chuyển") : "Phí vận chuyển"}</dt><dd>${Number.isInteger(totals.deliveryFeeVnd) ? formatVnd(totals.deliveryFeeVnd) : `<strong>${window.t ? window.t("Đang chờ xác nhận") : "Đang chờ xác nhận"}</strong>`}</dd></div>
          <div class="phase7-summary-total"><dt>${totals.totalFinal ? (window.t ? window.t("Tổng thanh toán") : "Tổng thanh toán") : (window.t ? window.t("Tạm tính sản phẩm") : "Tạm tính sản phẩm")}</dt><dd>${formatVnd(totals.totalFinal ? totals.totalVnd : totals.subtotalVnd || 0)}</dd></div>
        </dl>
        <dl class="phase7-summary-methods"><div><dt>${window.t ? window.t("Vận chuyển") : "Vận chuyển"}</dt><dd>${escapeHtml(selectedDeliveryLabel)}</dd></div><div><dt>${window.t ? window.t("Thanh toán") : "Thanh toán"}</dt><dd>${escapeHtml(selectedPaymentLabel)}</dd></div></dl>
        <div class="phase7-recipient-summary"><span>${window.t ? window.t("Thông tin người nhận") : "Thông tin người nhận"}</span><strong>${escapeHtml(recipient.recipientName || (window.t ? window.t("Chưa có tên người nhận") : "Chưa có tên người nhận"))}</strong><p>${escapeHtml([recipient.street, recipient.districtWard, recipient.province].filter(Boolean).join(", ") || (window.t ? window.t("Chưa có địa chỉ để hiển thị") : "Chưa có địa chỉ để hiển thị"))}</p></div>
        <p class="phase7-summary-disclosure">${window.t ? window.t("Cảm ơn bạn đã lựa chọn HEDY ATELIER. Mọi thông tin đơn hàng được bảo mật an toàn.") : "Cảm ơn bạn đã lựa chọn HEDY ATELIER. Mọi thông tin đơn hàng được bảo mật an toàn."}</p>
      </aside>
    `;

    if (knownFailure || unknownOutcome || !resultCreated) {
      const heading = knownFailure
        ? (window.t ? window.t("Chưa gửi được thông tin đơn.") : "Chưa gửi được thông tin đơn.")
        : (window.t ? window.t("Chưa xác định được kết quả đơn hàng.") : "Chưa xác định được kết quả đơn hàng.");
      const statusTitle = knownFailure
        ? (window.t ? window.t("Đơn hàng chưa được lưu thành công.") : "Đơn hàng chưa được lưu thành công.")
        : (window.t ? window.t("Không thể xác nhận trạng thái đơn hàng.") : "Không thể xác nhận trạng thái đơn hàng.");
      const statusCopy = knownFailure
        ? (window.t ? window.t("Thông tin giao hàng của bạn vẫn được lưu. Vui lòng quay lại màn hình Checkout để thử lại.") : "Thông tin giao hàng của bạn vẫn được lưu. Vui lòng quay lại màn hình Checkout để thử lại.")
        : (window.t ? window.t("Vui lòng kiểm tra lại kết nối hoặc liên hệ trực tiếp với HEDY để được hỗ trợ.") : "Vui lòng kiểm tra lại kết nối hoặc liên hệ trực tiếp với HEDY để được hỗ trợ.");
      root.innerHTML = `
        <nav class="breadcrumbs section-shell" aria-label="${window.t ? window.t("Đường dẫn") : "Đường dẫn"}"><a href="index.html">${window.t ? window.t("Trang chủ") : "Trang chủ"}</a><span>/</span><a href="shop.html">${window.t ? window.t("Cửa hàng") : "Cửa hàng"}</a><span>/</span><a href="${checkoutReturnHref}">${window.t ? window.t("Thanh toán") : "Thanh toán"}</a><span>/</span><span aria-current="page">${window.t ? window.t("Kết quả chưa hoàn tất") : "Kết quả chưa hoàn tất"}</span></nav>
        <header class="phase7-failure-hero section-shell">
          <div class="phase7-result-orbit" aria-hidden="true"><span>?</span></div>
          <div><p class="eyebrow">${window.t ? window.t("Bước 03 · Xử lý đơn") : "Bước 03 · Xử lý đơn"}</p><h1>${heading}</h1><p>${statusCopy}</p></div>
        </header>
        <section class="phase7-failure-layout section-shell">
          <div>
            <div class="status-banner status-banner--${knownFailure ? "error" : "warning"}" role="alert"><strong>${statusTitle}</strong><span>${knownFailure ? (window.t ? window.t("Bạn có thể quay lại Checkout; các trường đã nhập trong phiên không bị xóa.") : "Bạn có thể quay lại Checkout; các trường đã nhập trong phiên không bị xóa.") : (window.t ? window.t("Vui lòng liên hệ HEDY để được hỗ trợ kiểm tra đơn hàng.") : "Vui lòng liên hệ HEDY để được hỗ trợ kiểm tra đơn hàng.")}</span></div>
            <div class="phase7-failure-actions">
              ${knownFailure ? `<a class="button button--dark" href="${checkoutReturnHref}">${window.t ? window.t("Quay lại Checkout để thử lại →") : "Quay lại Checkout để thử lại →"}</a>` : ""}
              <button class="button button--outline contact-trigger" type="button" data-contact-source="confirmation" data-contact-label="${window.t ? window.t("Hỗ trợ kết quả đơn chưa xác định") : "Hỗ trợ kết quả đơn chưa xác định"}">${window.t ? window.t("Chọn kênh hỗ trợ") : "Chọn kênh hỗ trợ"}</button>
              <a class="text-link" href="cart.html">${window.t ? window.t("Xem lại Giỏ hàng") : "Xem lại Giỏ hàng"} <span aria-hidden="true">→</span></a>
            </div>
            <div class="phase7-no-code"><span>${window.t ? window.t("Mã đơn hàng") : "Mã đơn hàng"}</span><strong>${window.t ? window.t("Không được tạo") : "Không được tạo"}</strong><p>${window.t ? window.t("Vui lòng thử lại hoặc liên hệ hỗ trợ.") : "Vui lòng thử lại hoặc liên hệ hỗ trợ."}</p></div>
          </div>
          <aside class="phase7-recovery-note"><p class="eyebrow">${window.t ? window.t("Hỗ trợ khách hàng") : "Hỗ trợ khách hàng"}</p><h2>${window.t ? window.t("[html]Thông tin đã nhập<br /><em>vẫn được lưu giữ.</em>") : "Thông tin đã nhập<br /><em>vẫn được lưu giữ.</em>"}</h2><p>${window.t ? window.t("Giỏ hàng và thông tin nhận hàng của bạn không bị mất. Bạn có thể quay lại và hoàn tất đặt hàng bất kỳ lúc nào.") : "Giỏ hàng và thông tin nhận hàng của bạn không bị mất. Bạn có thể quay lại và hoàn tất đặt hàng bất kỳ lúc nào."}</p><a href="policies.html#pham-vi-ban-mau">${window.t ? window.t("Chính sách mua hàng →") : "Chính sách mua hàng →"}</a></aside>
        </section>
      `;
      root.querySelectorAll(".contact-trigger").forEach(bindContactTrigger);
      return;
    }

    const heading = manualRequest
      ? (window.t ? window.t("Đã nhận yêu cầu vận chuyển chuyên biệt") : "Đã nhận yêu cầu vận chuyển chuyên biệt")
      : isPendingReview
        ? (window.t ? window.t("Đơn hàng đã được tiếp nhận") : "Đơn hàng đã được tiếp nhận")
        : transferResult
          ? paymentStatusFinal === "awaiting-verification"
            ? (window.t ? window.t("Đang chờ đối chiếu chuyển khoản") : "Đang chờ đối chiếu chuyển khoản")
            : (window.t ? window.t("Đơn hàng đã được ghi nhận") : "Đơn hàng đã được ghi nhận")
          : (window.t ? window.t("Đã tiếp nhận đơn hàng (COD)") : "Đã tiếp nhận đơn hàng (COD)");
    const statusLabel = manualRequest
      ? (window.t ? window.t("Phí giao đang chờ xác nhận") : "Phí giao đang chờ xác nhận")
      : isPendingReview
        ? (window.t ? window.t("Đã tiếp nhận đơn · Phương thức thanh toán đang xét duyệt") : "Đã tiếp nhận đơn · Phương thức thanh toán đang xét duyệt")
        : transferResult
          ? paymentStatusFinal === "awaiting-verification"
            ? (window.t ? window.t("Đã báo chuyển khoản · Chờ đối soát") : "Đã báo chuyển khoản · Chờ đối soát")
            : (window.t ? window.t("Đang chờ chuyển khoản · Hạn 24 giờ") : "Đang chờ chuyển khoản · Hạn 24 giờ")
          : (window.t ? window.t("Đã nhận đơn · thanh toán khi nhận hàng") : "Đã nhận đơn · thanh toán khi nhận hàng");
    const heroCopy = manualRequest
      ? (window.t ? window.t("Kiện gốm của bạn yêu cầu tuyến vận chuyển chuyên biệt. Chuyên viên HEDY sẽ sớm liên hệ báo cước an toàn đến địa chỉ của bạn.") : "Kiện gốm của bạn yêu cầu tuyến vận chuyển chuyên biệt. Chuyên viên HEDY sẽ sớm liên hệ báo cước an toàn đến địa chỉ của bạn.")
      : isPendingReview
        ? (window.t ? window.t("Cảm ơn bạn đã đặt hàng tại HEDY ATELIER. Chuyên viên sẽ liên hệ qua điện thoại để xác nhận đơn và tư vấn thanh toán trước khi giao hàng.") : "Cảm ơn bạn đã đặt hàng tại HEDY ATELIER. Chuyên viên sẽ liên hệ qua điện thoại để xác nhận đơn và tư vấn thanh toán trước khi giao hàng.")
        : transferResult
          ? paymentStatusFinal === "awaiting-verification"
            ? (window.t ? window.t("HEDY đã ghi nhận thông báo chuyển khoản của bạn và đang kiểm tra đối soát số dư trên tài khoản ngân hàng.") : "HEDY đã ghi nhận thông báo chuyển khoản của bạn và đang kiểm tra đối soát số dư trên tài khoản ngân hàng.")
            : (window.t ? window.t("Cảm ơn bạn đã lựa chọn HEDY ATELIER. Vui lòng chuyển khoản theo thông tin bên dưới để HEDY tiến hành chuẩn bị kiện gốm chu đáo.") : "Cảm ơn bạn đã lựa chọn HEDY ATELIER. Vui lòng chuyển khoản theo thông tin bên dưới để HEDY tiến hành chuẩn bị kiện gốm chu đáo.")
          : `${window.t ? window.t("Số tiền thanh toán khi nhận hàng là") : "Số tiền thanh toán khi nhận hàng là"} ${formatVnd(totals.totalVnd)}. ${window.t ? window.t("HEDY sẽ đóng gói cẩn trọng và giao tận tay bạn.") : "HEDY sẽ đóng gói cẩn trọng và giao tận tay bạn."}`;
    const statusNote =
      paymentStatusFinal === "awaiting-verification"
        ? (window.t ? window.t("HEDY đang đối soát giao dịch và sẽ xác nhận thanh toán ngay khi tiền vào tài khoản.") : "HEDY đang đối soát giao dịch và sẽ xác nhận thanh toán ngay khi tiền vào tài khoản.")
        : transferResult
          ? (window.t ? window.t("Vui lòng hoàn tất chuyển khoản theo thông tin bên dưới để HEDY chuẩn bị đơn.") : "Vui lòng hoàn tất chuyển khoản theo thông tin bên dưới để HEDY chuẩn bị đơn.")
          : (window.t ? window.t("Thông tin đơn hàng đã được ghi nhận.") : "Thông tin đơn hàng đã được ghi nhận.");

    const nextStepMarkup = manualRequest
      ? `
      <section class="phase7-next-step phase7-next-step--manual" aria-labelledby="phase7-next-title">
        <p class="eyebrow">${window.t ? window.t("Bước tiếp theo") : "Bước tiếp theo"}</p><h2 id="phase7-next-title">${window.t ? window.t("[html]Chờ phí giao,<br /><em>chưa thanh toán.</em>") : "Chờ phí giao,<br /><em>chưa thanh toán.</em>"}</h2>
        <p>${window.t ? window.t("HEDY cần kiểm tra kích thước kiện gốm và địa chỉ nhận hàng để sắp xếp tuyến vận chuyển an toàn nhất. Chúng tôi sẽ liên hệ thông báo cước phí trong thời gian sớm nhất.") : "HEDY cần kiểm tra kích thước kiện gốm và địa chỉ nhận hàng để sắp xếp tuyến vận chuyển an toàn nhất. Chúng tôi sẽ liên hệ thông báo cước phí trong thời gian sớm nhất."}</p>
        <dl><div><dt>${window.t ? window.t("Phí giao") : "Phí giao"}</dt><dd>${window.t ? window.t("Đang chờ HEDY xác nhận") : "Đang chờ HEDY xác nhận"}</dd></div><div><dt>${window.t ? window.t("Phương thức") : "Phương thức"}</dt><dd>${window.t ? window.t("Đóng gói chống sốc chuyên dụng") : "Đóng gói chống sốc chuyên dụng"}</dd></div><div><dt>${window.t ? window.t("Thanh toán") : "Thanh toán"}</dt><dd>${window.t ? window.t("Chưa thanh toán (Chờ báo tổng cước)") : "Chưa thanh toán (Chờ báo tổng cước)"}</dd></div></dl>
        <div class="phase7-next-actions"><button class="button button--outline contact-trigger" type="button" data-contact-source="confirmation" data-contact-label="${window.t ? window.t("Yêu cầu phí giao") : "Yêu cầu phí giao"} ${escapeHtml(referenceCode)}">${window.t ? window.t("Liên hệ hỗ trợ") : "Liên hệ hỗ trợ"}</button><a class="text-link" href="policies.html#giao-hang-va-hu-hong">${window.t ? window.t("Xem quy cách giao hàng") : "Xem quy cách giao hàng"} <span aria-hidden="true">→</span></a></div>
      </section>
    `
      : isPendingReview
        ? `
      <section class="phase7-next-step phase7-next-step--pending-review" aria-labelledby="phase7-next-title">
        <p class="eyebrow">${window.t ? window.t("Bước tiếp theo") : "Bước tiếp theo"}</p><h2 id="phase7-next-title">${window.t ? window.t("[html]HEDY sẽ liên hệ xác nhận,<br /><em>chuẩn bị đơn hàng chu đáo.</em>") : "HEDY sẽ liên hệ xác nhận,<br /><em>chuẩn bị đơn hàng chu đáo.</em>"}</h2>
        <p>${window.t ? window.t("Đơn hàng của quý khách đã được ghi nhận thành công trên hệ thống. Vì các cổng thanh toán trực tuyến hiện đang trong quá trình xét duyệt và hoàn thiện tích hợp, chuyên viên HEDY sẽ trực tiếp gọi điện qua số") : "Đơn hàng của quý khách đã được ghi nhận thành công trên hệ thống. Vì các cổng thanh toán trực tuyến hiện đang trong quá trình xét duyệt và hoàn thiện tích hợp, chuyên viên HEDY sẽ trực tiếp gọi điện qua số"} <strong>${escapeHtml(recipient.phone || "")}</strong> ${window.t ? window.t("để xác nhận chi tiết đơn và tư vấn phương thức thanh toán thuận tiện nhất (Chuyển khoản hoặc Tiền mặt khi nhận hàng).") : "để xác nhận chi tiết đơn và tư vấn phương thức thanh toán thuận tiện nhất (Chuyển khoản hoặc Tiền mặt khi nhận hàng)."}</p>
        <div class="phase7-cod-amount"><span>${window.t ? window.t("Tổng thanh toán dự kiến") : "Tổng thanh toán dự kiến"}</span><strong>${formatVnd(totals.totalVnd)}</strong><small>${totals.deliveryFeeVnd ? (window.t ? window.t("Đã bao gồm phí vận chuyển") : "Đã bao gồm phí vận chuyển") : (window.t ? window.t("Chưa bao gồm phí vận chuyển") : "Chưa bao gồm phí vận chuyển")}</small></div>
        <div class="phase7-next-actions"><a class="button button--outline" href="shop.html">${window.t ? window.t("Tiếp tục xem Cửa hàng") : "Tiếp tục xem Cửa hàng"}</a><button class="text-link contact-trigger" type="button" data-contact-source="confirmation" data-contact-label="${window.t ? window.t("Hỗ trợ đơn hàng") : "Hỗ trợ đơn hàng"} ${escapeHtml(referenceCode)}">${window.t ? window.t("Liên hệ tư vấn viên →") : "Liên hệ tư vấn viên →"}</button></div>
      </section>
    `
        : transferResult
          ? `
      <section class="phase7-transfer-panel" aria-labelledby="phase7-transfer-title">
        <div class="phase7-transfer-heading"><p class="eyebrow">${window.t ? window.t("Hướng dẫn thanh toán chuyển khoản") : "Hướng dẫn thanh toán chuyển khoản"}</p><h2 id="phase7-transfer-title">${window.t ? window.t("Thông tin tài khoản ngân hàng") : "Thông tin tài khoản ngân hàng"}</h2><p>${window.t ? window.t("Vui lòng chuyển khoản đúng số tiền và nội dung bên dưới để đơn hàng được xử lý nhanh nhất.") : "Vui lòng chuyển khoản đúng số tiền và nội dung bên dưới để đơn hàng được xử lý nhanh nhất."}</p></div>
        ${transferTimelineMarkup()}
        <div class="phase7-transfer-grid">
          <dl class="phase7-bank-details">
            <div><dt>${window.t ? window.t("Ngân hàng") : "Ngân hàng"}</dt><dd>${escapeHtml(transferInstructions?.bankLabel || "Vietcombank")}</dd></div>
            <div><dt>${window.t ? window.t("Chủ tài khoản") : "Chủ tài khoản"}</dt><dd>${escapeHtml(transferInstructions?.accountHolder || "HEDY ATELIER")}</dd></div>
            <div><dt>${window.t ? window.t("Số tài khoản") : "Số tài khoản"}</dt><dd><strong>${escapeHtml(transferInstructions?.accountNumber || "1029 3847 5610")}</strong><button type="button" data-phase7-copy data-copy-value="${escapeHtml(transferInstructions?.accountNumber || "1029 3847 5610")}">${window.t ? window.t("Sao chép") : "Sao chép"}</button></dd></div>
            <div><dt>${window.t ? window.t("Số tiền chính xác") : "Số tiền chính xác"}</dt><dd><strong>${formatVnd(transferInstructions?.amountVnd || totals.totalVnd)}</strong><button type="button" data-phase7-copy data-copy-value="${transferInstructions?.amountVnd || totals.totalVnd}">${window.t ? window.t("Sao chép") : "Sao chép"}</button></dd></div>
            <div><dt>${window.t ? window.t("Nội dung chuyển khoản") : "Nội dung chuyển khoản"}</dt><dd><strong>${escapeHtml(transferInstructions?.transferReference || referenceCode)}</strong><button type="button" data-phase7-copy data-copy-value="${escapeHtml(transferInstructions?.transferReference || referenceCode)}">${window.t ? window.t("Sao chép") : "Sao chép"}</button></dd></div>
          </dl>
          <div class="phase7-qr-box">
            <div class="phase7-qr-visual" aria-label="${window.t ? window.t("Mã VietQR thanh toán cho đơn hàng") : "Mã VietQR thanh toán cho đơn hàng"} ${escapeHtml(referenceCode)}">
              <img
                src="https://api.vietqr.io/image/970436-102938475610-compact2.jpg?amount=${totals.totalVnd}&addInfo=${encodeURIComponent(referenceCode)}&accountName=HEDY%20ATELIER"
                alt="${window.t ? window.t("Mã VietQR thanh toán cho đơn hàng") : "Mã VietQR thanh toán cho đơn hàng"} ${escapeHtml(referenceCode)}"
                width="154"
                height="154"
                loading="lazy"
                onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'phase7-qr-fallback\\'><span>VIETQR</span><strong>${escapeHtml(referenceCode)}</strong><small>${formatVnd(totals.totalVnd)}</small></div>';"
              />
            </div>
            <span class="phase7-qr-caption">${window.t ? window.t("Quét mã bằng App ngân hàng bất kỳ để tự động điền số tiền và nội dung") : "Quét mã bằng App ngân hàng bất kỳ để tự động điền số tiền và nội dung"}</span>
          </div>
        </div>

        <!-- Payment Verification & Receipt Upload -->
        <div class="phase7-approach3-section">
          <div class="phase7-approach3-header">
            <span class="phase7-approach3-badge">${window.t ? window.t("Xác nhận thanh toán") : "Xác nhận thanh toán"}</span>
            <h4>${window.t ? window.t("Báo đã chuyển tiền & Đính kèm biên lai giao dịch") : "Báo đã chuyển tiền &amp; Đính kèm biên lai giao dịch"}</h4>
            <p>${window.t ? window.t("Sau khi chuyển khoản thành công, quý khách vui lòng bấm nút thông báo và có thể đính kèm ảnh chụp màn hình giao dịch để HEDY đối chiếu và ưu tiên chuẩn bị đơn hàng sớm nhất.") : "Sau khi chuyển khoản thành công, quý khách vui lòng bấm nút thông báo và có thể đính kèm ảnh chụp màn hình giao dịch để HEDY đối chiếu và ưu tiên chuẩn bị đơn hàng sớm nhất."}</p>
          </div>

          <div class="phase7-approach3-controls">
            <button
              type="button"
              class="button ${hasNotifiedTransfer ? "button--notified" : "button--outline"} phase7-notify-btn"
              data-transfer-notify-btn
            >
              ${hasNotifiedTransfer ? (window.t ? window.t("✓ Đã báo chuyển khoản thành công") : "✓ Đã báo chuyển khoản thành công") : (window.t ? window.t("✦ Tôi đã chuyển khoản") : "✦ Tôi đã chuyển khoản")}
            </button>

            <label class="phase7-bill-upload-trigger">
              <input type="file" accept="image/*" class="sr-only" data-bill-input />
              <span class="button button--outline">📷 ${billImage ? (window.t ? window.t("Đổi ảnh biên lai") : "Đổi ảnh biên lai") : (window.t ? window.t("Tải ảnh biên lai (Bill)") : "Tải ảnh biên lai (Bill)")}</span>
            </label>
          </div>

          ${billImage ? `
            <div class="phase7-bill-preview-box">
              <div class="phase7-bill-thumbnail">
                <img src="${billImage.dataUrl}" alt="${window.t ? window.t("Ảnh chụp biên lai chuyển khoản") : "Ảnh chụp biên lai chuyển khoản"}" />
              </div>
              <div class="phase7-bill-info">
                <span class="phase7-bill-badge">${window.t ? window.t("✓ Đã đính kèm biên lai đối soát") : "✓ Đã đính kèm biên lai đối soát"}</span>
                <strong>${escapeHtml(billImage.name)}</strong>
                <small>${(billImage.size / 1024).toFixed(0)} KB · ${window.t ? window.t("Tải lên thành công") : "Tải lên thành công"}</small>
              </div>
              <button type="button" class="phase7-bill-remove-btn" data-bill-remove-btn title="${window.t ? window.t("Gỡ ảnh biên lai") : "Gỡ ảnh biên lai"}">✕ ${window.t ? window.t("Gỡ ảnh") : "Gỡ ảnh"}</button>
            </div>
          ` : hasNotifiedTransfer ? `
            <div class="phase7-transfer-notified-banner" role="status">
              <strong>${window.t ? window.t("✓ Đã ghi nhận thông báo chuyển khoản của bạn.") : "✓ Đã ghi nhận thông báo chuyển khoản của bạn."}</strong>
              <span>${window.t ? window.t("Hệ thống đã cập nhật trạng thái đơn sang “Chờ đối chiếu”. Chuyên viên HEDY sẽ kiểm tra tài khoản và xác nhận sớm nhất.") : "Hệ thống đã cập nhật trạng thái đơn sang “Chờ đối chiếu”. Chuyên viên HEDY sẽ kiểm tra tài khoản và xác nhận sớm nhất."}</span>
            </div>
          ` : `
            <p class="phase7-approach3-note">
              <em>${window.t ? window.t("Sau khi chuyển tiền thành công, bấm “Tôi đã chuyển khoản” và tải ảnh biên lai để đơn được ưu tiên xử lý nhanh nhất.") : "Sau khi chuyển tiền thành công, bấm “Tôi đã chuyển khoản” và tải ảnh biên lai để đơn được ưu tiên xử lý nhanh nhất."}</em>
            </p>
          `}

          <div class="phase7-safe-reconcile-notice">
            <strong>${window.t ? window.t("Lưu ý đối soát:") : "Lưu ý đối soát:"}</strong>
            <span>${window.t ? window.t("Đơn hàng sẽ được nhân viên HEDY kiểm tra thực nhận trên tài khoản ngân hàng và cập nhật trước khi đóng gói xuất kho. Trạng thái chỉ chuyển sang “Đã thanh toán” khi kế toán hoàn tất đối soát số dư.") : "Đơn hàng sẽ được nhân viên HEDY kiểm tra thực nhận trên tài khoản ngân hàng và cập nhật trước khi đóng gói xuất kho. Trạng thái chỉ chuyển sang “Đã thanh toán” khi kế toán hoàn tất đối soát số dư."}</span>
          </div>
        </div>
        <p class="inline-confirmation phase7-copy-status" role="status" aria-live="polite"></p>
      </section>
    `
          : `
      <section class="phase7-next-step phase7-next-step--cod" aria-labelledby="phase7-next-title">
        <p class="eyebrow">${window.t ? window.t("Bước tiếp theo") : "Bước tiếp theo"}</p><h2 id="phase7-next-title">${window.t ? window.t("Thanh toán khi nhận hàng (COD)") : "Thanh toán khi nhận hàng (COD)"}</h2>
        <p>${window.t ? window.t("HEDY sẽ chuẩn bị và giao kiện hàng đến bạn. Quý khách vui lòng kiểm tra kiện hàng và thanh toán đúng số tiền cho nhân viên giao hàng.") : "HEDY sẽ chuẩn bị và giao kiện hàng đến bạn. Quý khách vui lòng kiểm tra kiện hàng và thanh toán đúng số tiền cho nhân viên giao hàng."}</p>
        <div class="phase7-cod-amount"><span>${window.t ? window.t("Số tiền thanh toán khi nhận hàng") : "Số tiền thanh toán khi nhận hàng"}</span><strong>${formatVnd(totals.totalVnd)}</strong><small>${window.t ? window.t("Đã bao gồm thuế và phí vận chuyển") : "Đã bao gồm thuế và phí vận chuyển"}</small></div>
        <div class="phase7-next-actions"><a class="button button--outline" href="shop.html">${window.t ? window.t("Tiếp tục xem Cửa hàng") : "Tiếp tục xem Cửa hàng"}</a><button class="text-link contact-trigger" type="button" data-contact-source="confirmation" data-contact-label="${window.t ? window.t("Hỗ trợ đơn COD") : "Hỗ trợ đơn COD"} ${escapeHtml(referenceCode)}">${window.t ? window.t("Liên hệ hỗ trợ →") : "Liên hệ hỗ trợ →"}</button></div>
      </section>
    `;

    root.innerHTML = `
      <nav class="breadcrumbs section-shell" aria-label="${window.t ? window.t('Đường dẫn') : 'Đường dẫn'}"><a href="index.html">${window.t ? window.t("Trang chủ") : "Trang chủ"}</a><span>/</span><a href="shop.html">${window.t ? window.t("Cửa hàng") : "Cửa hàng"}</a><span>/</span><a href="cart.html">${window.t ? window.t("Giỏ hàng") : "Giỏ hàng"}</a><span>/</span><span aria-current="page">${window.t ? window.t("Xác nhận đơn hàng") : "Xác nhận đơn hàng"}</span></nav>
      <header class="phase7-confirmation-hero section-shell">
        <div class="phase7-confirmation-title"><p class="eyebrow">${window.t ? window.t("Đặt hàng thành công") : "Đặt hàng thành công"}</p><h1>${heading}</h1><p>${heroCopy}</p></div>
        <div class="phase7-result-code"><span>${manualRequest ? (window.t ? window.t("Mã yêu cầu") : "Mã yêu cầu") : (window.t ? window.t("Mã đơn hàng") : "Mã đơn hàng")}</span><strong>${escapeHtml(referenceCode)}</strong><button type="button" data-phase7-copy data-copy-value="${escapeHtml(referenceCode)}">${window.t ? window.t("Sao chép mã") : "Sao chép mã"}</button><small>${escapeHtml(window.t ? window.t(storedResult?.createdLabel || "Đơn hàng đã được lưu trên hệ thống") : (storedResult?.createdLabel || "Đơn hàng đã được lưu trên hệ thống"))}</small></div>
      </header>
      <div class="phase7-status-strip section-shell" role="status"><span aria-hidden="true">●</span><strong>${statusLabel}</strong><small>${statusNote}</small></div>
      ${notificationFailed ? `<div class="phase7-notification-alert section-shell"><div class="status-banner status-banner--warning" role="alert"><strong>${window.t ? window.t("Đơn hàng đã ghi nhận thành công, nhưng hệ thống email thông báo đang bận.") : "Đơn hàng đã ghi nhận thành công, nhưng hệ thống email thông báo đang bận."}</strong><span>${window.t ? window.t("Mã đơn hàng vẫn hợp lệ. Vui lòng lưu lại mã đơn hàng trên màn hình; chuyên viên HEDY sẽ sớm liên hệ qua điện thoại.") : "Mã đơn hàng vẫn hợp lệ. Vui lòng lưu lại mã đơn hàng trên màn hình; chuyên viên HEDY sẽ sớm liên hệ qua điện thoại."}</span></div></div>` : ""}
      <div class="phase7-confirmation-layout section-shell">
        <div class="phase7-confirmation-main">
          ${nextStepMarkup}
          <section class="phase7-receipt-note" aria-labelledby="phase7-receipt-title"><p class="eyebrow">${window.t ? window.t("Biên nhận & hỗ trợ") : "Biên nhận &amp; hỗ trợ"}</p><h2 id="phase7-receipt-title">${window.t ? window.t("[html]HEDY luôn sẵn sàng,<br /><em>đồng hành cùng bạn.</em>") : "HEDY luôn sẵn sàng,<br /><em>đồng hành cùng bạn.</em>"}</h2><p>${window.t ? window.t("Thông tin xác nhận đơn hàng sẽ được gửi qua số điện thoại/email người nhận. Mọi thắc mắc cần hỗ trợ, xin vui lòng liên hệ với đội ngũ chăm sóc khách hàng HEDY.") : "Thông tin xác nhận đơn hàng sẽ được gửi qua số điện thoại/email người nhận. Mọi thắc mắc cần hỗ trợ, xin vui lòng liên hệ với đội ngũ chăm sóc khách hàng HEDY."}</p><div><button class="button button--outline contact-trigger" type="button" data-contact-source="confirmation" data-contact-label="${window.t ? window.t("Hỗ trợ kết quả") : "Hỗ trợ kết quả"} ${escapeHtml(referenceCode)}">${window.t ? window.t("Chọn kênh hỗ trợ") : "Chọn kênh hỗ trợ"}</button><a class="text-link" href="shop.html">${window.t ? window.t("Tiếp tục xem Cửa hàng") : "Tiếp tục xem Cửa hàng"} <span aria-hidden="true">→</span></a></div></section>
        </div>
        ${confirmationSummaryMarkup()}
      </div>
    `;

    root.querySelectorAll("[data-phase7-copy]").forEach((button) =>
      button.addEventListener("click", async () => {
        const status =
          root.querySelector(".phase7-copy-status") ||
          button.closest(".phase7-result-code")?.querySelector("small");
        if (status) status.textContent = window.t ? window.t("Đang sao chép thông tin hiển thị…") : "Đang sao chép thông tin hiển thị…";
        try {
          await copyText(button.dataset.copyValue || "");
          if (status)
            status.textContent = `${window.t ? window.t("Đã sao chép") : "Đã sao chép"} ${button.textContent.toLowerCase().replace(window.t ? window.t("sao chép") : "sao chép", "").trim() || (window.t ? window.t("thông tin") : "thông tin")}.`;
        } catch {
          if (status)
            status.textContent =
              window.t ? window.t("Chưa sao chép tự động được. Giá trị vẫn hiển thị để chọn thủ công.") : "Chưa sao chép tự động được. Giá trị vẫn hiển thị để chọn thủ công.";
        }
      }),
    );

    root
      .querySelector("[data-transfer-notify-btn]")
      ?.addEventListener("click", () => {
        hasNotifiedTransfer = !hasNotifiedTransfer;
        if (storedResult) {
          storedResult.hasNotifiedTransfer = hasNotifiedTransfer;
          storedResult.paymentStatus = hasNotifiedTransfer
            ? "awaiting-verification"
            : "awaiting-payment";
          saveCheckoutResult(storedResult);
        }
        renderConfirmation();
      });

    root
      .querySelector("[data-bill-input]")
      ?.addEventListener("change", (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
          alert(window.t ? window.t("Kích thước ảnh vượt quá 5MB. Vui lòng chọn ảnh nhỏ hơn.") : "Kích thước ảnh vượt quá 5MB. Vui lòng chọn ảnh nhỏ hơn.");
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          billImage = {
            name: file.name,
            size: file.size,
            dataUrl: e.target.result,
          };
          hasNotifiedTransfer = true;
          if (storedResult) {
            storedResult.billImage = billImage;
            storedResult.hasNotifiedTransfer = true;
            storedResult.paymentStatus = "awaiting-verification";
            saveCheckoutResult(storedResult);
          }
          renderConfirmation();
        };
        reader.readAsDataURL(file);
      });

    root
      .querySelector("[data-bill-remove-btn]")
      ?.addEventListener("click", () => {
        billImage = null;
        if (storedResult) {
          storedResult.billImage = null;
          saveCheckoutResult(storedResult);
        }
        renderConfirmation();
      });

    root.querySelectorAll(".contact-trigger").forEach(bindContactTrigger);
  };

  renderConfirmation();
};

const initPhase8Story = () => {
  if (pageId !== "story") return;
  const params = new URLSearchParams(window.location.search);
  const allowedStates = prototypeData.stateFixtures?.story || [
    "default",
    "limited-content",
    "media-failure",
  ];
  let state = allowedStates.includes(params.get("state"))
    ? params.get("state")
    : "default";
  if (params.get("view") === "lower") body.dataset.reviewView = "lower";
  const status = document.querySelector("[data-story-status]");
  const frame = document.querySelector("[data-story-media-frame]");
  const retry = document.querySelector("[data-story-media-retry]");

  const render = () => {
    body.dataset.phaseState = state;
    const failed = state === "media-failure";
    const explicitlyLimited = state === "limited-content";
    if (status) {
      status.className = `status-banner status-banner--${failed ? "error" : "pending"}`;
      status.querySelector("strong").textContent = failed
        ? "Không tải được vùng hình câu chuyện."
        : explicitlyLimited
          ? "Không có tuyên bố xuất xứ để công bố."
          : "Nội dung giới hạn.";
      status.querySelector("span").textContent = failed
        ? "Chỉ giữ nội dung về phạm vi xác minh; không thay bằng ảnh sản phẩm, moodboard hoặc nhận diện bên thứ ba."
        : "Chưa có dữ liệu nguồn gốc, người làm hoặc quy trình được phép công bố.";
    }
    if (frame) {
      frame.classList.toggle("is-failed", failed);
      frame.setAttribute(
        "aria-label",
        failed
          ? "Không tải được hình câu chuyện; nội dung đã xác minh vẫn được giữ"
          : "Vùng hình câu chuyện đang chờ tư liệu được duyệt",
      );
      frame.querySelector("span").innerHTML = failed
        ? "Hình câu chuyện<br />không tải được"
        : "Hình nguồn gốc,<br />người làm &amp; quy trình";
      frame.querySelector("strong").textContent = failed
        ? "Không dùng ảnh thay thế không liên quan"
        : "Đang chờ tư liệu được duyệt";
    }
    if (retry) retry.hidden = !failed;
  };

  retry?.addEventListener("click", () => {
    state = "limited-content";
    window.history.replaceState({}, "", "story.html?state=limited-content");
    render();
    status?.focus?.();
  });
  render();
};

const initPhase8Recovery = () => {
  if (pageId !== "recovery") return;
  const root = document.querySelector("[data-unavailable-root]");
  if (!root) {
    body.dataset.phaseState = "not-found";
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const allowedTypes = ["product", "case", "article", "private"];
  const type = allowedTypes.includes(params.get("type"))
    ? params.get("type")
    : "product";
  const requestedFixture = params.get("fixture");
  const product =
    type === "product" && requestedFixture
      ? prototypeData.products?.[requestedFixture]
      : type === "product"
        ? prototypeData.products?.["multi-variant"]
        : null;
  const kicker = root.querySelector("[data-unavailable-kicker]");
  const title = root.querySelector("[data-unavailable-title]");
  const description = root.querySelector("[data-unavailable-description]");
  const context = root.querySelector("[data-unavailable-context]");
  const related = root.querySelector("[data-unavailable-related]");
  const notSoldOutBanner = root.querySelector(
    "[data-unavailable-not-sold-out]",
  );
  body.dataset.phaseState = `known-unavailable-${type}`;

  if (notSoldOutBanner) {
    if (type === "product") {
      notSoldOutBanner.hidden = false;
    } else {
      notSoldOutBanner.hidden = true;
    }
  }

  const typeCopy = {
    case: {
      kicker: "Hồ sơ dự án · Chưa công bố",
      title: "Hồ sơ dự án này<br /><em>chưa thể hiển thị công khai.</em>",
      description:
        "Dự án này được lưu trữ nội bộ hoặc thuộc diện bảo mật thông tin khách hàng. Quý khách có thể tham khảo dịch vụ Đặt riêng hoặc quay lại Trang chủ để tiếp tục.",
    },
    article: {
      kicker: "Nội dung chia sẻ · Đang hoàn thiện",
      title: "Bài viết này<br /><em>chưa có sẵn điểm đến.</em>",
      description:
        "Chuyên mục bài viết và nhật ký xưởng gốm đang trong quá trình biên tập hoàn thiện. Quý khách có thể ghé thăm Sứ mệnh HEADY để tìm hiểu về chất liệu và người thợ làm gốm.",
    },
    private: {
      kicker: "Thông báo · Nội dung riêng tư",
      title: "Nội dung này<br /><em>được giữ riêng tư.</em>",
      description:
        "Liên kết bạn truy cập không thuộc phạm vi hiển thị công khai. Vui lòng quay trở lại Trang chủ hoặc Cửa hàng để tiếp tục hành trình.",
    },
  };

  if (product) {
    const defaultName = window.t ? window.t("Tác phẩm thủ công") : "Tác phẩm thủ công";
    const nameStr = product.name?.short || defaultName;
    const name = window.t ? window.t(nameStr) : nameStr;
    const titleTemplate = window.t ? window.t("[html]{name}<br /><em>hiện chưa sẵn sàng.</em>") : "[html]{name}<br /><em>hiện chưa sẵn sàng.</em>";
    document.title = `${name} ${window.t ? window.t("chưa sẵn sàng — HEDY ATELIER") : "chưa sẵn sàng — HEDY ATELIER"}`;
    if (kicker)
      kicker.textContent = `${window.t ? window.t("Thông báo ·") : "Thông báo ·"} ${window.t ? window.t(product.productType || "Tác phẩm") : (product.productType || "Tác phẩm")} ${window.t ? window.t("chưa khả dụng") : "chưa khả dụng"}`;
    if (title)
      title.innerHTML = titleTemplate.replace("{name}", escapeHtml(name));
    if (description)
      description.textContent = window.t ? window.t("Tác phẩm bạn đang tìm kiếm hiện đang tạm dừng tiếp nhận hoặc đã thay đổi thông tin. HEDY rất tiếc vì sự gián đoạn này trong trải nghiệm của bạn. Quý khách có thể khám phá các tác phẩm tương tự bên dưới hoặc quay lại Trang chủ.") : "Tác phẩm bạn đang tìm kiếm hiện đang tạm dừng tiếp nhận hoặc đã thay đổi thông tin. HEDY rất tiếc vì sự gián đoạn này trong trải nghiệm của bạn. Quý khách có thể khám phá các tác phẩm tương tự bên dưới hoặc quay lại Trang chủ.";
    if (context) {
      context.hidden = false;
      const nameEl = context.querySelector("[data-unavailable-name]");
      const metaEl = context.querySelector("[data-unavailable-meta]");
      if (nameEl) nameEl.textContent = name;
      if (metaEl)
        metaEl.textContent = `${window.t ? window.t(product.productType || "Gốm thủ công") : (product.productType || "Gốm thủ công")} · ${window.t ? window.t("Quý khách có thể liên hệ xưởng để biết lịch ra lò của mẻ gốm tiếp theo.") : "Quý khách có thể liên hệ xưởng để biết lịch ra lò của mẻ gốm tiếp theo."}`;
    }
    const candidates = ["simple-in-stock", "multi-variant", "fragile-large"]
      .map((fixtureId) => prototypeData.products?.[fixtureId])
      .filter(
        (candidate) => candidate && candidate.fixtureId !== product.fixtureId,
      )
      .slice(0, 2);
    if (related) {
      const suggestLabel = window.t ? window.t("Gợi ý") : "Gợi ý";
      const exploreBtn = window.t ? window.t("Khám phá tác phẩm →") : "Khám phá tác phẩm →";
      const craftText = window.t ? window.t("Gốm thủ công") : "Gốm thủ công";
      const defaultTitle = window.t ? window.t("Tác phẩm thủ công") : "Tác phẩm thủ công";
      const descText = window.t ? window.t("Tác phẩm gốm mộc sẵn sàng tại xưởng. Khám phá chi tiết dáng gốm, sắc men và công năng.") : "Tác phẩm gốm mộc sẵn sàng tại xưởng. Khám phá chi tiết dáng gốm, sắc men và công năng.";
      related.innerHTML = candidates
        .map((candidate, index) => {
          const variantId =
            candidate.defaultVariantId || candidate.variants?.[0]?.id || "";
          return `<a href="product.html?fixture=${encodeURIComponent(candidate.fixtureId)}&amp;variant=${encodeURIComponent(variantId)}"><span>${suggestLabel} 0${index + 1} · ${escapeHtml(candidate.productType || craftText)}</span><strong>${escapeHtml(candidate.name?.short || defaultTitle)}</strong><p>${descText}</p><i aria-hidden="true">${exploreBtn}</i></a>`;
        })
        .join("");
    }
    return;
  }

  const copy = typeCopy[type] || typeCopy.private;
  const kickerParts = copy.kicker.split(" · ");
  const translatedKicker = window.t ? window.t(kickerParts[0]) + " · " + window.t(kickerParts[1]) : copy.kicker;
  document.title = `${window.t ? window.t(kickerParts[0]) : kickerParts[0]} ${window.t ? window.t("không khả dụng — HEDY ATELIER") : "không khả dụng — HEDY ATELIER"}`;
  if (kicker) kicker.textContent = translatedKicker;
  if (title) title.innerHTML = window.t ? window.t(copy.title) : copy.title;
  if (description) description.textContent = window.t ? window.t(copy.description) : copy.description;
  if (context) {
    context.hidden = true;
    const nameEl = context.querySelector("[data-unavailable-name]");
    const metaEl = context.querySelector("[data-unavailable-meta]");
    if (nameEl) nameEl.textContent = "";
    if (metaEl) metaEl.textContent = "";
  }
  if (related) {
    const storyTitle = window.t ? window.t("Sứ mệnh HEADY") : "Sứ mệnh HEADY";
    const storyDesc = window.t ? window.t("Tìm hiểu nguồn gốc đất sét mộc, nghệ nhân và tinh thần chế tác của xưởng.") : "Tìm hiểu nguồn gốc đất sét mộc, nghệ nhân và tinh thần chế tác của xưởng.";
    const storyBtn = window.t ? window.t("Đọc câu chuyện →") : "Đọc câu chuyện →";
    const customTitle = window.t ? window.t("Đặt riêng & Doanh nghiệp") : "Đặt riêng & Doanh nghiệp";
    const customDesc = window.t ? window.t("Khám phá dịch vụ chế tác theo yêu cầu, quà tặng số lượng riêng và dấu ấn cá nhân.") : "Khám phá dịch vụ chế tác theo yêu cầu, quà tặng số lượng riêng và dấu ấn cá nhân.";
    const customBtn = window.t ? window.t("Xem Đặt riêng ↗") : "Xem Đặt riêng ↗";
    const introLabel = window.t ? window.t("01 · Giới thiệu xưởng") : "01 · Giới thiệu xưởng";
    const customLabel = window.t ? window.t("02 · Chế tác riêng") : "02 · Chế tác riêng";
    related.innerHTML = `
    <a href="story.html"><span>${introLabel}</span><strong>${storyTitle}</strong><p>${storyDesc}</p><i aria-hidden="true">${storyBtn}</i></a>
    <a href="custom.html?source=recovery"><span>${customLabel}</span><strong>${customTitle}</strong><p>${customDesc}</p><i aria-hidden="true">${customBtn}</i></a>
  `;
  }
  initShopChannels();
};

const initPhase8PolicyAndContact = () => {
  if (pageId === "policies") {
    const params = new URLSearchParams(window.location.search);
    if (params.get("view") === "lower") body.dataset.reviewView = "lower";
    const returnRoutes = {
      checkout: ["checkout.html", "Quay lại Thanh toán"],
      cart: ["cart.html", "Quay lại Giỏ hàng"],
      product: ["shop.html", "Quay lại Cửa hàng"],
      confirmation: ["confirmation.html", "Quay lại Kết quả"],
      custom: ["custom.html", "Quay lại Đặt riêng"],
      contact: ["contact.html", "Quay lại Liên hệ"],
    };
    const returnLink = document.querySelector("[data-policy-return]");
    const returnRoute = returnRoutes[params.get("source")];
    if (returnLink && returnRoute) {
      returnLink.hidden = false;
      returnLink.href = returnRoute[0];
      returnLink.textContent = `${returnRoute[1]} →`;
    }
    document
      .querySelector("[data-print-policy]")
      ?.addEventListener("click", () => window.print());

    // ScrollSpy for policy navigation
    const policyNavLinks = document.querySelectorAll(".policy-nav a");
    const policySections = document.querySelectorAll(".policy-section");

    if (policyNavLinks.length && policySections.length) {
      const updateActiveNav = () => {
        const scrollPosition = window.scrollY + 140;
        let currentSectionId = "";
        policySections.forEach((section) => {
          if (
            section.style.display !== "none" &&
            section.offsetTop <= scrollPosition
          ) {
            currentSectionId = section.id;
          }
        });
        if (!currentSectionId) {
          const firstVisible = Array.from(policySections).find(
            (s) => s.style.display !== "none",
          );
          if (firstVisible) currentSectionId = firstVisible.id;
        }
        policyNavLinks.forEach((link) => {
          const hrefAnchor = link.getAttribute("href")?.replace("#", "");
          const isActive = hrefAnchor === currentSectionId;
          link.classList.toggle("is-active", isActive);
          if (isActive && window.innerWidth <= 900) {
            link.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }
        });
      };

      window.addEventListener("scroll", updateActiveNav, { passive: true });
      updateActiveNav();
    }
  }

  if (pageId === "contact") {
    const button = document.querySelector("[data-contact-page-copy]");
    const status = document.querySelector("[data-contact-page-copy-status]");
    button?.addEventListener("click", async () => {
      if (status) status.textContent = "Đang sao chép danh sách…";
      try {
        await copyText(CONTACT_CHECKLIST.map((item) => `• ${item}`).join("\n"));
        if (status) status.textContent = "Đã sao chép danh sách chuẩn bị.";
      } catch {
        if (status)
          status.textContent =
            "Chưa sao chép tự động được. Bạn vẫn có thể chọn danh sách hiển thị trên trang.";
      }
    });
  }
};

initPhase3Home();
initPhase3Custom();
initPhase4Shop();
initCollectionLanding();
initPhase4Collection();
initPhase4Search();
initPhase5Product();
initPhase5Cart();
initPhase6Checkout();
initPhase7Confirmation();
initPhase8Story();
initPhase8Recovery();
initPhase8PolicyAndContact();
initDiscoveryReturn();

const revealElements = document.querySelectorAll(".reveal");
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -35px" },
  );
  revealElements.forEach((element) => revealObserver.observe(element));
  window.setTimeout(
    () => revealElements.forEach((element) => element.classList.add("visible")),
    700,
  );
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

window.addEventListener(
  "scroll",
  () => siteHeader?.classList.toggle("is-scrolled", window.scrollY > 24),
  { passive: true },
);

initContactPage();
renderCart();

const annotateAnalyticsIntent = (root = document) => {
  body.dataset.analyticsScreen = pageId;
  const within = (selector) => [
    ...(root instanceof Element && root.matches(selector) ? [root] : []),
    ...Array.from(root.querySelectorAll?.(selector) || []),
  ];
  const annotate = (selector, intent, getPlacement = () => pageId) => {
    within(selector).forEach((element) => {
      element.dataset.analyticsIntent = intent;
      element.dataset.analyticsPlacement = getPlacement(element);
    });
  };

  annotate(
    ".contact-trigger",
    "contact-chooser-open",
    (element) => element.dataset.contactSource || pageId,
  );
  annotate(
    "[data-contact-channel], [data-contact-intent]",
    "contact-channel-select",
    (element) =>
      element.dataset.contactChannel ||
      element.dataset.contactIntent ||
      "chooser",
  );
  annotate(".search-overlay form, .search-page-form", "search-submit");
  annotate(
    "[data-product-variant]",
    "variant-select",
    () => "product-decision",
  );
  annotate(
    ".add-to-bag, [data-phase5-add], [data-mobile-phase5-add]",
    "cart-add",
    (element) =>
      element.hasAttribute("data-mobile-phase5-add")
        ? "product-sticky"
        : pageId,
  );
  annotate("[data-full-cart-remove]", "cart-remove", () => "full-cart");
  annotate("[data-cart-checkout-preview]", "checkout-start", () => "full-cart");
  annotate("[data-delivery-calculate]", "delivery-calculate", () => "checkout");
  annotate("[data-delivery-retry]", "delivery-retry", () => "checkout");
  annotate(
    '[name="paymentMethod"]',
    "payment-select",
    (element) => element.value || "checkout",
  );
  annotate("[data-phase7-submit]", "checkout-submit", () => "checkout-review");
};

annotateAnalyticsIntent();
const analyticsIntentObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) =>
    mutation.addedNodes.forEach((node) => {
      if (node instanceof Element) annotateAnalyticsIntent(node);
    }),
  );
});
analyticsIntentObserver.observe(body, { childList: true, subtree: true });
