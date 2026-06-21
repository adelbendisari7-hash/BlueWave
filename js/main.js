/* ════════════════════════════════════════════════════════
   BLUEWAVE POOLS — Main Application Logic
   ════════════════════════════════════════════════════════ */

// ── State ────────────────────────────────────────────────
let activeCategory = "all";
let cart = []; // [{product, qty}]

// ── DOM Ready ────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initScrollHeader();
  initHamburger();
  initLanguageSwitch();
  renderProducts("all");
  initCategoryTabs();
  initCart();
  initDetailModal();
  initModalEvents();
  initWilayaSelect();
  initDeliveryListeners();
  initScrollAnimations();
  applyTranslations();
  initWhatsApp();
});

// ════════════════════════════════════════════════════════
// PARTICLES
// ════════════════════════════════════════════════════════
function initParticles() {
  const container = document.querySelector(".hero-particles");
  if (!container) return;
  const colors = ["rgba(0,180,216,", "rgba(72,202,228,", "rgba(144,224,239,"];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 6 + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const opacity = Math.random() * 0.6 + 0.2;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random() * 100}%;
      background:${color}${opacity});
      animation-duration:${Math.random() * 15 + 8}s;
      animation-delay:${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }
}

// ════════════════════════════════════════════════════════
// SCROLL HEADER
// ════════════════════════════════════════════════════════
function initScrollHeader() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
  }, { passive: true });
}

// ════════════════════════════════════════════════════════
// HAMBURGER / MOBILE MENU
// ════════════════════════════════════════════════════════
function initHamburger() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => menu.classList.remove("open"));
  });
}

// ════════════════════════════════════════════════════════
// LANGUAGE SWITCH
// ════════════════════════════════════════════════════════
function initLanguageSwitch() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const newLang = currentLang === "fr" ? "ar" : "fr";
    setLang(newLang);
    applyTranslations();
    renderProducts(activeCategory);
    btn.querySelector(".lang-label").textContent = newLang === "fr" ? "العربية" : "Français";
  });
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (val && val !== key) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = t(key);
    if (val && val !== key) el.placeholder = val;
  });
  // Update wilaya placeholder
  const wilayaSelect = document.getElementById("wilaya");
  if (wilayaSelect) {
    wilayaSelect.querySelector("option[value='']").textContent = t("modal.wilayaPh");
  }
  const communeSelect = document.getElementById("commune");
  if (communeSelect) {
    communeSelect.querySelector("option[value='']").textContent = t("modal.communePh");
  }
}

// ════════════════════════════════════════════════════════
// PRODUCTS RENDERING
// ════════════════════════════════════════════════════════
const CATEGORY_ICONS = {
  tubulaire:    "images/icons/tubulaire.png",
  autoportante: "images/icons/autoportante.png",
  enfants:      "images/icons/enfants.png",
  baches:       "images/icons/baches.png",
  nautique:     "images/icons/nautique.png",
  jeux:         "images/icons/jeux.png",
  accessoires:  "images/icons/accessoires.png"
};

function catIcon(category, cls = "") {
  const src = CATEGORY_ICONS[category] || "images/icons/default.png";
  return `<img src="${src}" alt="" class="cat-icon-img${cls ? " " + cls : ""}">`;
}

function renderProducts(category) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const filtered = category === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === category);

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:4rem;color:var(--text-muted);">${t("products.empty")}</div>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => buildProductCard(p, i)).join("");

  // Load card images from PHP (any filename)
  loadCardImages(filtered);

  // Qty buttons
  grid.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.pid;
      const el  = document.getElementById(`qty-${pid}`);
      if (!el) return;
      let qty = parseInt(el.textContent, 10);
      qty = btn.dataset.action === "plus" ? Math.min(99, qty + 1) : Math.max(1, qty - 1);
      el.textContent = qty;
    });
  });

  // Details buttons
  grid.querySelectorAll(".btn-details").forEach(btn => {
    btn.addEventListener("click", () => openDetailModal(btn.dataset.pid));
  });

  // Add to cart buttons
  grid.querySelectorAll(".btn-add-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const pid  = btn.dataset.pid;
      const qtyEl = document.getElementById(`qty-${pid}`);
      const qty  = parseInt(qtyEl?.textContent || "1", 10);
      addToCart(pid, qty);
      // Flash button feedback
      btn.innerHTML = `<img class="cat-icon-img btn-icon-img" src="images/icons/original.png" alt=""> ${t("cart.added")}`;
      btn.classList.add("added");
      setTimeout(() => {
        btn.innerHTML = `<img class="cat-icon-img btn-icon-img" src="images/icons/accessoires.png" alt=""> ${t("cart.add")}`;
        btn.classList.remove("added");
      }, 1500);
    });
  });
}

function loadCardImages(products) {
  products.forEach(p => {
    fetch(`php/images.php?ref=${encodeURIComponent(p.ref)}`)
      .then(r => r.json())
      .then(imgs => {
        if (!Array.isArray(imgs) || imgs.length === 0) return;
        const imgEl = document.getElementById(`card-img-${p.id}`);
        const fbEl  = document.getElementById(`card-fallback-${p.id}`);
        if (!imgEl) return;
        imgEl.onerror = () => {
          imgEl.style.display = "none";
          if (fbEl) fbEl.style.display = "flex";
        };
        imgEl.src = imgs[0];
        imgEl.style.display = "block";
        if (fbEl) fbEl.style.display = "none";
      })
      .catch(() => {});
  });
}

function buildProductCard(p, idx) {
  const name  = currentLang === "ar" ? p.nameA  : p.nameF;
  const desc  = currentLang === "ar" ? p.descA  : p.descF;
  const badge = currentLang === "ar" ? p.badgeA : p.badge;
  const delay = (idx % 4) * 0.08;
  const unit  = t("products.priceUnit");

  return `
  <div class="product-card" style="animation-delay:${delay}s">
    ${badge ? `<div class="card-badge">${badge}</div>` : ""}
    <div class="card-img-wrap">
      <img
        class="card-img"
        id="card-img-${p.id}"
        alt="${name}"
        loading="lazy"
        style="display:none"
      />
      <div class="card-img-fallback" id="card-fallback-${p.id}">
        <div class="card-img-icon">${catIcon(p.category)}</div>
        <div class="card-img-ref">${t("products.ref")}: ${p.ref}</div>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-name">${name}</h3>
      <p class="card-desc">${desc}</p>
      <div class="card-price">
        <span class="label">${t("products.priceLabel")}</span>
        <span class="value">${p.price.toLocaleString("fr-DZ")} ${unit}</span>
      </div>
      <div class="card-actions">
        <div class="qty-selector">
          <button class="qty-btn" data-pid="${p.id}" data-action="minus">−</button>
          <span class="qty-val" id="qty-${p.id}">1</span>
          <button class="qty-btn" data-pid="${p.id}" data-action="plus">+</button>
        </div>
        <button class="btn-add-cart" data-pid="${p.id}">
          <img class="cat-icon-img btn-icon-img" src="images/icons/accessoires.png" alt=""> ${t("cart.add")}
        </button>
      </div>
      <button class="btn-details" data-pid="${p.id}">
        <img class="cat-icon-img btn-icon-img" src="images/icons/default.png" alt=""> ${t("products.details") || "Voir détails"}
      </button>
    </div>
  </div>`;
}

// ════════════════════════════════════════════════════════
// CATEGORY TABS
// ════════════════════════════════════════════════════════
function initCategoryTabs() {
  const tabs = document.querySelectorAll(".cat-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.dataset.cat;
      renderProducts(activeCategory);
    });
  });
}

// ════════════════════════════════════════════════════════
// WILAYA / COMMUNE SELECTS
// ════════════════════════════════════════════════════════
function initWilayaSelect() {
  const wilayaEl  = document.getElementById("wilaya");
  const communeEl = document.getElementById("commune");
  if (!wilayaEl || !communeEl) return;

  // Populate wilayas
  WILAYAS.forEach(w => {
    const opt = document.createElement("option");
    opt.value = w.name;
    opt.textContent = `${w.id} — ${w.name}`;
    wilayaEl.appendChild(opt);
  });

  // On wilaya change → populate communes + update delivery
  wilayaEl.addEventListener("change", () => {
    const selected = WILAYAS.find(w => w.name === wilayaEl.value);
    communeEl.innerHTML = `<option value="">${t("modal.communePh")}</option>`;
    communeEl.disabled = !selected;
    if (selected) {
      selected.communes.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c;
        opt.textContent = c;
        communeEl.appendChild(opt);
      });
    }
    clearFieldError(communeEl);
    updateDelivery();
  });
}

// ════════════════════════════════════════════════════════
// ORDER MODAL
// ════════════════════════════════════════════════════════
function openModal() {
  if (cart.length === 0) return;
  renderModalCart();
  resetModal();
  document.getElementById("order-modal").classList.add("open");
  document.body.style.overflow = "hidden";
  closeCart();
}

function renderModalCart() {
  const container = document.getElementById("modal-cart-summary");
  if (!container) return;
  const unit = t("products.priceUnit");
  container.innerHTML = cart.map(item => {
    const name = currentLang === "ar" ? item.product.nameA : item.product.nameF;
    return `
    <div class="modal-cart-item">
      <span class="mci-icon">${catIcon(item.product.category)}</span>
      <div class="mci-info">
        <span class="mci-name">${name}</span>
        <span class="mci-ref">Réf: ${item.product.ref}</span>
      </div>
      <div class="mci-right">
        <span class="mci-qty">× ${item.qty}</span>
        <span class="mci-sub">${(item.product.price * item.qty).toLocaleString("fr-DZ")} ${unit}</span>
      </div>
    </div>`;
  }).join("");
}

function closeModal() {
  document.getElementById("order-modal").classList.remove("open");
  document.body.style.overflow = "";
}

function resetModal() {
  const form    = document.getElementById("order-form");
  const result  = document.getElementById("modal-result");
  const formWrap = document.getElementById("form-wrapper");
  if (form)    form.reset();
  if (result)  result.classList.remove("show");
  if (formWrap) formWrap.style.display = "";
  // Reset commune select
  const commune = document.getElementById("commune");
  if (commune) {
    commune.innerHTML = `<option value="">${t("modal.communePh")}</option>`;
    commune.disabled = true;
  }
  // Reset delivery UI — keep cards visible, reset prices to placeholder
  document.getElementById("no-delivery-msg").style.display = "none";
  document.getElementById("price-summary").style.display = "none";
  document.querySelectorAll(".delivery-card").forEach(c => c.classList.remove("unavailable"));
  document.querySelectorAll('input[name="delivery_type"]').forEach(r => { r.disabled = false; });
  document.getElementById("radio-domicile").checked = true;
  document.getElementById("radio-bureau").checked   = false;
  document.getElementById("dc-price-domicile").textContent = "—";
  document.getElementById("dc-price-bureau").textContent   = "—";
  // Reset address field to optional state
  const notesLabel = document.getElementById("notes-label");
  const notesReq   = document.getElementById("notes-req");
  const notesErr   = document.getElementById("notes-error");
  if (notesLabel) { notesLabel.textContent = t("modal.notes"); }
  if (notesReq)   { notesReq.style.display = "none"; }
  if (notesErr)   { notesErr.classList.remove("show"); }
  document.getElementById("notes")?.classList.remove("error");
  // Clear all errors
  document.querySelectorAll(".error-msg").forEach(el => el.classList.remove("show"));
  document.querySelectorAll(".form-group input, .form-group select").forEach(el => el.classList.remove("error"));
}

function initModalEvents() {
  // Close button
  document.getElementById("modal-close")?.addEventListener("click", closeModal);

  // Overlay click to close
  document.getElementById("order-modal")?.addEventListener("click", e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  // Form submit
  document.getElementById("order-form")?.addEventListener("submit", handleOrderSubmit);
}

// ════════════════════════════════════════════════════════
// FORM VALIDATION & SUBMISSION
// ════════════════════════════════════════════════════════
function validateField(input) {
  const group = input.closest(".form-group");
  const errEl = group?.querySelector(".error-msg");
  const valid = input.value.trim() !== "";
  input.classList.toggle("error", !valid);
  if (errEl) errEl.classList.toggle("show", !valid);
  return valid;
}

function clearFieldError(input) {
  input.classList.remove("error");
  const errEl = input.closest(".form-group")?.querySelector(".error-msg");
  if (errEl) errEl.classList.remove("show");
}

async function handleOrderSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const fields = ["nom","prenom","telephone","wilaya","commune"];
  let valid = true;
  fields.forEach(f => {
    const el = form.elements[f];
    if (el && !validateField(el)) valid = false;
  });

  // Validate address if domicile delivery
  const checkedType = document.querySelector('input[name="delivery_type"]:checked');
  if (checkedType?.value === "domicile") {
    const notesEl  = document.getElementById("notes");
    const notesErr = document.getElementById("notes-error");
    if (!notesEl?.value.trim()) {
      notesEl.classList.add("error");
      if (notesErr) { notesErr.textContent = t("modal.addressRequired"); notesErr.classList.add("show"); }
      valid = false;
    } else {
      notesEl.classList.remove("error");
      if (notesErr) notesErr.classList.remove("show");
    }
  }

  if (!valid) return;

  // Phone validation
  const tel = form.elements["telephone"].value.trim();
  if (!/^(0|\+213)[5-7][0-9]{8}$/.test(tel.replace(/\s/g,""))) {
    const el = form.elements["telephone"];
    el.classList.add("error");
    const errEl = el.closest(".form-group")?.querySelector(".error-msg");
    if (errEl) { errEl.textContent = currentLang === "ar" ? "رقم الهاتف غير صحيح" : "Numéro de téléphone invalide"; errEl.classList.add("show"); }
    return;
  }

  const submitBtn = form.querySelector(".btn-submit");
  submitBtn.disabled = true;
  submitBtn.textContent = t("modal.submitting");

  if (cart.length === 0) return;

  // Delivery info
  const wilayaData      = WILAYAS.find(w => w.name === form.elements["wilaya"].value);
  const checkedDelivery = document.querySelector('input[name="delivery_type"]:checked:not(:disabled)');
  const rates           = wilayaData ? DELIVERY_RATES[parseInt(wilayaData.id, 10)] : null;
  const hasDelivery     = rates && (rates.domicile !== null || rates.bureau !== null);
  if (hasDelivery && !checkedDelivery) return;

  const deliveryType  = checkedDelivery?.value || "";
  const deliveryFee   = (rates && deliveryType) ? (rates[deliveryType] || 0) : 0;
  const cartSubtotal  = getCartSubtotal();
  const totalPrice    = cartSubtotal + deliveryFee;
  const deliveryLabel = deliveryType === "domicile" ? t("modal.domicile")
                      : deliveryType === "bureau"   ? t("modal.bureau") : "";

  const cartItems = cart.map(item => ({
    name:      currentLang === "ar" ? item.product.nameA : item.product.nameF,
    ref:       item.product.ref,
    qty:       item.qty,
    unitPrice: item.product.price,
    subtotal:  item.product.price * item.qty
  }));

  const formData = new FormData();
  formData.append("nom",            form.elements["nom"].value.trim());
  formData.append("prenom",         form.elements["prenom"].value.trim());
  formData.append("telephone",      tel);
  formData.append("wilaya",         form.elements["wilaya"].value);
  formData.append("commune",        form.elements["commune"].value);
  formData.append("notes",          form.elements["notes"]?.value.trim() || "");
  formData.append("cart_items",     JSON.stringify(cartItems));
  formData.append("cart_subtotal",  cartSubtotal);
  formData.append("delivery_type",  deliveryType);
  formData.append("delivery_label", deliveryLabel);
  formData.append("delivery_fee",   deliveryFee);
  formData.append("total_price",    totalPrice);
  formData.append("lang",           currentLang);

  try {
    const res  = await fetch("php/send-order.php", { method: "POST", body: formData });
    const data = await res.json();
    showModalResult(data.success);
  } catch {
    showModalResult(false);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t("modal.submit");
  }
}

function showModalResult(success) {
  const formWrap = document.getElementById("form-wrapper");
  const result   = document.getElementById("modal-result");
  const iconEl   = document.getElementById("result-icon");
  const titleEl  = document.getElementById("result-title");
  const msgEl    = document.getElementById("result-msg");

  if (formWrap) formWrap.style.display = "none";
  if (result)   result.classList.add("show");
  if (iconEl)   iconEl.textContent  = success ? "✅" : "❌";
  if (titleEl)  titleEl.textContent = success ? t("modal.successTitle") : "Oops!";
  if (msgEl)    msgEl.textContent   = success ? t("modal.successMsg")   : t("modal.errorMsg");
  if (success) { cart = []; updateCartBadge(); renderCart(); }
}

// ════════════════════════════════════════════════════════
// CART
// ════════════════════════════════════════════════════════
function initCart() {
  document.getElementById("cart-nav-btn")?.addEventListener("click", openCart);
  document.getElementById("cart-close")?.addEventListener("click",   closeCart);
  document.getElementById("cart-overlay")?.addEventListener("click", closeCart);
  document.getElementById("btn-checkout")?.addEventListener("click", openModal);
  renderCart();
}

function addToCart(pid, qty) {
  const product  = PRODUCTS.find(p => p.id === pid);
  if (!product) return;
  const existing = cart.find(i => i.product.id === pid);
  if (existing) existing.qty += qty;
  else cart.push({ product, qty });
  updateCartBadge();
  renderCart();
  openCart();
}

function removeFromCart(pid) {
  cart = cart.filter(i => i.product.id !== pid);
  updateCartBadge();
  renderCart();
  if (cart.length === 0) closeCart();
}

function updateCartItemQty(pid, delta) {
  const item = cart.find(i => i.product.id === pid);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateCartBadge();
  renderCart();
}

function getCartSubtotal() {
  return cart.reduce((s, i) => s + i.product.price * i.qty, 0);
}

function getCartCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const count = getCartCount();
  if (badge) { badge.textContent = count; badge.style.display = count > 0 ? "" : "none"; }
}

function openCart() {
  document.getElementById("cart-drawer")?.classList.add("open");
  document.getElementById("cart-overlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-drawer")?.classList.remove("open");
  document.getElementById("cart-overlay")?.classList.remove("open");
  if (!document.getElementById("order-modal")?.classList.contains("open")) {
    document.body.style.overflow = "";
  }
}

function renderCart() {
  const container  = document.getElementById("cart-items");
  const empty      = document.getElementById("cart-empty");
  const footer     = document.getElementById("cart-footer");
  const subtotalEl = document.getElementById("cart-subtotal-val");
  const checkoutBtn = document.getElementById("btn-checkout");
  if (!container) return;

  const unit = t("products.priceUnit");

  if (cart.length === 0) {
    container.innerHTML = "";
    if (empty)   empty.style.display   = "";
    if (footer)  footer.style.display  = "none";
    return;
  }
  if (empty)  empty.style.display  = "none";
  if (footer) footer.style.display = "";

  container.innerHTML = cart.map(item => {
    const name = currentLang === "ar" ? item.product.nameA : item.product.nameF;
    return `
    <div class="cart-item">
      <div class="ci-icon">${catIcon(item.product.category)}</div>
      <div class="ci-info">
        <p class="ci-name">${name}</p>
        <span class="ci-ref">Réf: ${item.product.ref}</span>
        <span class="ci-unit">${item.product.price.toLocaleString("fr-DZ")} ${unit}/unité</span>
      </div>
      <div class="ci-right">
        <div class="ci-qty-ctrl">
          <button class="ci-qbtn" data-pid="${item.product.id}" data-action="minus">−</button>
          <span>${item.qty}</span>
          <button class="ci-qbtn" data-pid="${item.product.id}" data-action="plus">+</button>
        </div>
        <span class="ci-sub">${(item.product.price * item.qty).toLocaleString("fr-DZ")} ${unit}</span>
        <button class="ci-del" data-pid="${item.product.id}" title="${t('cart.remove')}">🗑</button>
      </div>
    </div>`;
  }).join("");

  container.querySelectorAll(".ci-qbtn").forEach(btn => {
    btn.addEventListener("click", () => updateCartItemQty(btn.dataset.pid, btn.dataset.action === "plus" ? 1 : -1));
  });
  container.querySelectorAll(".ci-del").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(btn.dataset.pid));
  });

  if (subtotalEl) subtotalEl.textContent = getCartSubtotal().toLocaleString("fr-DZ") + " " + unit;
  if (checkoutBtn) checkoutBtn.querySelector("span").textContent =
    `${t("cart.checkout")} (${getCartCount()})`;
}

// ════════════════════════════════════════════════════════
// DELIVERY LOGIC
// ════════════════════════════════════════════════════════
function initDeliveryListeners() {
  document.querySelectorAll('input[name="delivery_type"]').forEach(radio => {
    radio.addEventListener("change", () => {
      calculateTotal();
      updateAddressRequirement();
    });
  });
}

function updateAddressRequirement() {
  const checked    = document.querySelector('input[name="delivery_type"]:checked');
  const isDomicile = checked?.value === "domicile";
  const label      = document.getElementById("notes-label");
  const req        = document.getElementById("notes-req");
  const textarea   = document.getElementById("notes");

  if (isDomicile) {
    if (label) label.setAttribute("data-i18n", "modal.addressLabel");
    if (label) label.textContent = t("modal.addressLabel");
    if (req)   req.style.display = "";
    if (textarea) textarea.placeholder = t("modal.addressPh");
  } else {
    if (label) label.setAttribute("data-i18n", "modal.notes");
    if (label) label.textContent = t("modal.notes");
    if (req)   req.style.display = "none";
    if (textarea) textarea.placeholder = t("modal.notesPh");
    // Clear any existing address error
    const errEl = document.getElementById("notes-error");
    if (errEl) { errEl.textContent = ""; errEl.classList.remove("show"); }
    if (textarea) textarea.classList.remove("error");
  }
}

function updateDelivery() {
  const wilayaEl      = document.getElementById("wilaya");
  const noDeliveryMsg = document.getElementById("no-delivery-msg");

  if (!wilayaEl.value) {
    noDeliveryMsg.style.display = "none";
    document.getElementById("price-summary").style.display = "none";
    return;
  }

  const wilayaData = WILAYAS.find(w => w.name === wilayaEl.value);
  if (!wilayaData) return;
  const rates = DELIVERY_RATES[parseInt(wilayaData.id, 10)];
  if (!rates) return;

  // Wilaya not served at all
  if (rates.domicile === null && rates.bureau === null) {
    noDeliveryMsg.style.display = "";
    document.getElementById("price-summary").style.display = "none";
    _setCard("card-domicile", "radio-domicile", "dc-price-domicile", null);
    _setCard("card-bureau",   "radio-bureau",   "dc-price-bureau",   null);
    return;
  }
  noDeliveryMsg.style.display = "none";

  const unit = t("products.priceUnit");
  _setCard("card-domicile", "radio-domicile", "dc-price-domicile", rates.domicile, unit);
  _setCard("card-bureau",   "radio-bureau",   "dc-price-bureau",   rates.bureau,   unit);

  // Auto-select first available
  const radioDomicile = document.getElementById("radio-domicile");
  const radioBureau   = document.getElementById("radio-bureau");
  if (!radioDomicile.disabled) {
    radioDomicile.checked = true;
  } else if (!radioBureau.disabled) {
    radioBureau.checked = true;
  }

  calculateTotal();
}

function _setCard(cardId, radioId, priceId, rate, unit) {
  const card  = document.getElementById(cardId);
  const radio = document.getElementById(radioId);
  const price = document.getElementById(priceId);
  if (rate !== null && rate !== undefined) {
    card.classList.remove("unavailable");
    radio.disabled = false;
    price.textContent = rate.toLocaleString("fr-DZ") + " " + (unit || "DA");
  } else {
    card.classList.add("unavailable");
    radio.disabled = true;
    radio.checked  = false;
    price.textContent = t("modal.unavailable");
  }
}

function calculateTotal() {
  const priceSummary = document.getElementById("price-summary");
  const wilayaEl     = document.getElementById("wilaya");
  const wilayaData   = WILAYAS.find(w => w.name === wilayaEl?.value);
  const checked      = document.querySelector('input[name="delivery_type"]:checked:not(:disabled)');

  if (cart.length === 0 || !wilayaData || !checked) {
    priceSummary.style.display = "none";
    return;
  }

  const rates = DELIVERY_RATES[parseInt(wilayaData.id, 10)];
  const fee   = rates?.[checked.value];
  if (fee === null || fee === undefined) {
    priceSummary.style.display = "none";
    return;
  }

  const unit     = t("products.priceUnit");
  const subtotal = getCartSubtotal();
  const total    = subtotal + fee;

  document.getElementById("ps-product").textContent  = subtotal.toLocaleString("fr-DZ") + " " + unit;
  document.getElementById("ps-delivery").textContent = fee.toLocaleString("fr-DZ") + " " + unit;
  document.getElementById("ps-total").textContent    = total.toLocaleString("fr-DZ") + " " + unit;

  priceSummary.style.display = "";
}

// ════════════════════════════════════════════════════════
// WHATSAPP
// ════════════════════════════════════════════════════════
function initWhatsApp() {
  const btn = document.getElementById("whatsapp-float");
  if (!btn) return;
  const phone   = "213556662611";
  const message = encodeURIComponent(t("whatsappMsg"));
  btn.href = `https://wa.me/${phone}?text=${message}`;
}

// ════════════════════════════════════════════════════════
// SCROLL ANIMATIONS
// ════════════════════════════════════════════════════════
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
}

// ════════════════════════════════════════════════════════
// PRODUCT DETAIL MODAL
// ════════════════════════════════════════════════════════
let detailProduct  = null;
let galleryImages  = [];
let galleryIndex   = 0;

function openDetailModal(pid) {
  const product = PRODUCTS.find(p => p.id === pid);
  if (!product) return;
  detailProduct = product;

  const name  = currentLang === "ar" ? product.nameA  : product.nameF;
  const badge = currentLang === "ar" ? product.badgeA : product.badge;
  const unit  = t("products.priceUnit");

  document.getElementById("detail-name").textContent  = name;
  document.getElementById("detail-ref").textContent   = product.ref;
  document.getElementById("detail-price").textContent = product.price.toLocaleString("fr-DZ") + " " + unit;
  const fallbackIcon = document.getElementById("gallery-fallback-icon");
  if (fallbackIcon) fallbackIcon.innerHTML = catIcon(product.category);
  document.getElementById("detail-add-label").textContent = t("cart.add");
  document.getElementById("detail-qty").textContent   = "1";

  const badgeWrap = document.getElementById("detail-badge-wrap");
  badgeWrap.innerHTML = badge ? `<span class="card-badge detail-badge-chip">${badge}</span>` : "";

  // Specs
  renderDetailSpecs(product.ref);

  // Gallery
  loadGallery(product.ref, name);

  // Open modal
  document.getElementById("detail-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  document.getElementById("detail-modal").classList.remove("open");
  document.body.style.overflow = "";
}

function renderDetailSpecs(ref) {
  const table  = document.getElementById("detail-specs-table");
  const specs  = PRODUCT_SPECS?.[ref];
  const labels = SPEC_LABELS?.[currentLang] || SPEC_LABELS?.fr;

  if (!specs) {
    table.innerHTML = `<p class="specs-empty">Fiche technique non disponible.</p>`;
    return;
  }

  const rows = Object.entries(specs).map(([key, val]) => {
    const label = labels?.[key] || key;
    return `<div class="specs-row">
      <span class="specs-key">${label}</span>
      <span class="specs-val">${val}</span>
    </div>`;
  }).join("");

  table.innerHTML = rows;
}

async function loadGallery(ref, altName) {
  galleryImages = [];
  galleryIndex  = 0;

  const mainImg  = document.getElementById("gallery-main-img");
  const noImg    = document.getElementById("gallery-no-img");
  const thumbs   = document.getElementById("gallery-thumbs");
  mainImg.style.display = "none";
  noImg.style.display   = "flex";
  thumbs.innerHTML      = "";

  try {
    const res  = await fetch(`php/images.php?ref=${encodeURIComponent(ref)}`);
    const imgs = await res.json();
    galleryImages = Array.isArray(imgs) ? imgs : [];
  } catch {
    galleryImages = [];
  }

  if (galleryImages.length === 0) {
    noImg.style.display   = "flex";
    mainImg.style.display = "none";
    document.getElementById("gallery-prev").style.display = "none";
    document.getElementById("gallery-next").style.display = "none";
    return;
  }

  document.getElementById("gallery-prev").style.display = galleryImages.length > 1 ? "" : "none";
  document.getElementById("gallery-next").style.display = galleryImages.length > 1 ? "" : "none";

  showGalleryImage(0);
  renderThumbs(altName);
}

function showGalleryImage(idx) {
  if (galleryImages.length === 0) return;
  galleryIndex = (idx + galleryImages.length) % galleryImages.length;

  const mainImg = document.getElementById("gallery-main-img");
  const noImg   = document.getElementById("gallery-no-img");
  mainImg.src   = galleryImages[galleryIndex];
  mainImg.alt   = "";
  mainImg.style.display = "";
  noImg.style.display   = "none";

  document.querySelectorAll(".gallery-thumb").forEach((th, i) => {
    th.classList.toggle("active", i === galleryIndex);
  });
}

function renderThumbs(altName) {
  const thumbs = document.getElementById("gallery-thumbs");
  thumbs.innerHTML = galleryImages.map((src, i) =>
    `<img class="gallery-thumb${i === 0 ? " active" : ""}"
          src="${src}" alt="${altName} ${i + 1}"
          data-idx="${i}" loading="lazy"
          onerror="this.style.display='none'" />`
  ).join("");

  thumbs.querySelectorAll(".gallery-thumb").forEach(th => {
    th.addEventListener("click", () => showGalleryImage(parseInt(th.dataset.idx, 10)));
  });
}

function initDetailModal() {
  document.getElementById("detail-close")?.addEventListener("click", closeDetailModal);
  document.getElementById("detail-modal")?.addEventListener("click", e => {
    if (e.target === e.currentTarget) closeDetailModal();
  });
  document.getElementById("gallery-prev")?.addEventListener("click", () => showGalleryImage(galleryIndex - 1));
  document.getElementById("gallery-next")?.addEventListener("click", () => showGalleryImage(galleryIndex + 1));

  document.getElementById("detail-qty-minus")?.addEventListener("click", () => {
    const el  = document.getElementById("detail-qty");
    el.textContent = Math.max(1, parseInt(el.textContent, 10) - 1);
  });
  document.getElementById("detail-qty-plus")?.addEventListener("click", () => {
    const el  = document.getElementById("detail-qty");
    el.textContent = Math.min(99, parseInt(el.textContent, 10) + 1);
  });

  document.getElementById("detail-add-cart")?.addEventListener("click", () => {
    if (!detailProduct) return;
    const qty = parseInt(document.getElementById("detail-qty").textContent, 10);
    addToCart(detailProduct.id, qty);
    closeDetailModal();
  });
}

// ── Smooth Scroll ────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});
