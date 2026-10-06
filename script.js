/* =========================================================
   PESQUEIRO GIRASSOL — CARDÁPIO ONLINE
   =========================================================
   IMPORTANTÍSSIMO: troque o número abaixo pelo WhatsApp real
   do pesqueiro, no formato DDI + DDD + número, só números.
   Exemplo Brasil: 55 13 99999-9999  ->  "5513999999999"
   ========================================================= */
const WHATSAPP_NUMBER = "5513996341796"; // <-- TROQUE AQUI

/* ---------------------------------------------------------
   DADOS DO CARDÁPIO
   Cada categoria tem um "hue" (matiz de cor 0–360) usado nos
   ícones e detalhes visuais daquela seção.
   Cada item tem "price" (preço único) OU "sizes"
   ({ meia, inteira }).
   --------------------------------------------------------- */
const MENU = [
  {
    id: "bebidas", name: "Bebidas", icon: "🥤", hue: 199,
    note: "Geladinhas, direto pra sua mesa.",
    items: [
      { name: "Refrigerante Lata", icon: "🥤", price: 6.5 },
      { name: "Schweppes Lata", icon: "🥤", price: 7.5 },
      { name: "Red Bull", icon: "⚡", price: 18 },
      { name: "Skol", icon: "🍺", price: 6.5 },
      { name: "Itaipava", icon: "🍺", price: 6.5 },
      { name: "Xingu", icon: "🍺", price: 7.5 },
      { name: "Duplo Malte", icon: "🍺", price: 7.5 },
      { name: "Eisenbahn", icon: "🍺", price: 7.5 },
      { name: "Império", icon: "🍺", price: 7.5 },
      { name: "Amstel", icon: "🍺", price: 7.5 },
      { name: "Brahma Zero", icon: "🍺", price: 7.5 },
      { name: "Heineken", icon: "🍺", price: 9.5 },
      { name: "Heineken Zero", icon: "🍺", price: 9.5 },
      { name: "Água sem Gás", icon: "💧", price: 4 },
      { name: "Água com Gás", icon: "💧", price: 5 },
      { name: "Suco Litro", icon: "🧃", price: 20 },
      { name: "Suco Copo", icon: "🧃", price: 10 },
      { name: "Caipirinha Limão", icon: "🍹", price: 13 },
      { name: "Caipirinha Limão Vodka", icon: "🍹", price: 19 },
      { name: "Caipirinha de Pinga", icon: "🍹", price: 15, desc: "Sabores: abacaxi, morango e maracujá." },
      { name: "Caipirinha de Vodka", icon: "🍸", price: 23, desc: "Sabores: abacaxi, morango e maracujá." },
    ],
  },
  {
    id: "porcoes", name: "Porções", icon: "🍤", hue: 27,
    note: "Preço em meia ou porção inteira.",
    items: [
      { name: "Calabresa Acebolada", icon: "🌭", sizes: { meia: 30, inteira: 42 } },
      { name: "Frango a Passarinho", icon: "🍗", sizes: { meia: 30, inteira: 41 } },
      { name: "Fritas / Mandioca / Polenta", icon: "🍟", sizes: { meia: 17, inteira: 24 } },
      { name: "Costelinha de Pacu", icon: "🐟", sizes: { meia: 34, inteira: 52 } },
      { name: "Isca de Filé de Tilápia", icon: "🐟", sizes: { meia: 34, inteira: 52 } },
      { name: "Sashimi de Tilápia", icon: "🍣", sizes: { meia: 40, inteira: 60 } },
      { name: "Yakisoba Misto", icon: "🍜", sizes: { meia: 33, inteira: 45 } },
      { name: "Yakisoba de Tilápia", icon: "🍜", sizes: { meia: 42, inteira: 55 } },
      { name: "Porco a Passarinho", icon: "🥩", sizes: { meia: 32, inteira: 43 } },
      { name: "Camarão", icon: "🍤", sizes: { meia: 42, inteira: 55 } },
      { name: "Salada Simples", icon: "🥗", sizes: { meia: 13, inteira: 19 } },
      { name: "Salada Mista", icon: "🥗", sizes: { meia: 18, inteira: 25 } },
      { name: "Costela na Chapa", icon: "🥩", price: 79 },
      { name: "Porção Isca de Sobrecoxa à Milanesa", icon: "🍗", price: 52 },
      { name: "Porção Isca de Carne à Milanesa", icon: "🥩", price: 65 },
    ],
  },
  {
    id: "acompanhamentos", name: "Acompanhamentos", icon: "🍚", hue: 45,
    note: "Para completar sua porção.",
    items: [
      { name: "Arroz", icon: "🍚", sizes: { meia: 10, inteira: 12 } },
      { name: "Feijão", icon: "🫘", sizes: { meia: 10, inteira: 12 } },
      { name: "Pururuca de Tilápia", icon: "🐟", price: 10 },
    ],
  },
  {
    id: "lanches", name: "Lanches", icon: "🍔", hue: 354, note: "",
    items: [
      { name: "Misto Quente", icon: "🥪", price: 14 },
      { name: "Queijo Quente", icon: "🧀", price: 14 },
      { name: "Bauru", icon: "🥪", price: 17 },
      { name: "Hambúrguer", icon: "🍔", price: 17 },
      { name: "X-Burguer", icon: "🍔", price: 19 },
      { name: "X-Salada", icon: "🍔", price: 21 },
      { name: "X-Egg", icon: "🍔", price: 23 },
      { name: "X-Egg Salada", icon: "🍔", price: 25 },
      { name: "X-Calabresa", icon: "🍔", price: 23 },
      { name: "Americano", icon: "🥪", price: 22 },
    ],
  },
  {
    id: "salgados", name: "Salgados", icon: "🥟", hue: 33, note: "",
    items: [
      { name: "Coxinha", icon: "🍗", price: 9 },
      { name: "Presunto e Queijo", icon: "🥟", price: 9 },
      { name: "Carne", icon: "🥟", price: 9 },
      { name: "Bolinho de Tilápia", icon: "🐟", price: 11 },
      { name: "Kibe de Tilápia", icon: "🐟", price: 11 },
      { name: "Empada Tilápia / Camarão / Palmito", icon: "🥧", price: 10 },
      { name: "Porpeta de Carne", icon: "🥩", price: 15 },
      { name: "Torresmo Rolo", icon: "🥓", price: 15 },
    ],
  },
  {
    id: "alacarte", name: "À La Carte", icon: "🍽️", hue: 255,
    note: "Pratos para compartilhar.",
    items: [
      { name: "Costela à La Carte", icon: "🥩", price: 99, desc: "Acompanha arroz, feijão, salada, mandioca e batata." },
      { name: "Moqueca à La Girassol", icon: "🍲", price: 100, desc: "Ovo, camarão seco, banana, palmito, pimentões, cebola, tomate, farofa, fritas e arroz." },
      { name: "Moqueca de Tilápia", icon: "🍲", price: 130, desc: "Filé de tilápia, banana, palmito, pimentões, cebola, fritas, farofa e arroz." },
      { name: "Traíra sem Espinho Inteira Frita", icon: "🐟", price: 110, desc: "Acompanha arroz, fritas e pirão." },
      { name: "Parmegiana de Carne", icon: "🥩", price: 85, desc: "Acompanha arroz e fritas." },
      { name: "Parmegiana de Filé de Tilápia", icon: "🐟", price: 98, desc: "Acompanha arroz e fritas." },
      { name: "Joelho de Porco", icon: "🍖", price: 79, desc: "Purê, pimenta biquinho e salada de repolho com mostarda." },
    ],
  },
  {
    id: "comerciais", name: "Pratos Comerciais", icon: "🍛", hue: 18,
    note: "Todos acompanham arroz, feijão, fritas e salada.",
    items: [
      { name: "Tilápia", icon: "🐟", price: 30 },
      { name: "Contra Filé", icon: "🥩", price: 30 },
      { name: "Frango", icon: "🍗", price: 27 },
      { name: "Calabresa", icon: "🌭", price: 27 },
    ],
  },
];

/* Destaques da casa — referências (categoria + nome do item),
   os dados reais (preço etc.) sempre vêm do MENU acima. */
const FEATURED_REFS = [
  ["alacarte", "Moqueca de Tilápia"],
  ["porcoes", "Costela na Chapa"],
  ["porcoes", "Camarão"],
  ["bebidas", "Caipirinha de Vodka"],
  ["comerciais", "Tilápia"],
  ["lanches", "X-Egg Salada"],
  ["porcoes", "Costelinha de Pacu"],
  ["bebidas", "Heineken"],
];

/* ---------------------------------------------------------
   HELPERS
   --------------------------------------------------------- */
const money = (v) => "R$ " + v.toFixed(2).replace(".", ",");
const slug = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function findItem(catId, name) {
  const cat = MENU.find((c) => c.id === catId);
  if (!cat) return null;
  const idx = cat.items.findIndex((it) => it.name === name);
  if (idx === -1) return null;
  return { cat, item: cat.items[idx], idx };
}
function itemKey(catId, idx) {
  const cat = MENU.find((c) => c.id === catId);
  return slug(catId + "-" + cat.items[idx].name);
}
function startPrice(item) {
  return item.sizes ? Math.min(item.sizes.meia, item.sizes.inteira) : item.price;
}

/* ---------------------------------------------------------
   ESTADO
   --------------------------------------------------------- */
let cart = {}; // key -> {catId, idx, name, icon, size(label|null), unitPrice, qty}
let lastSize = {}; // itemKeyBase -> "meia" | "inteira", lembrado entre aberturas
let sheetItem = null; // {catId, idx, size, qty} do item aberto na folha
let lastFocused = null;

try {
  const saved = JSON.parse(localStorage.getItem("girassol_cart_v1") || "null");
  if (saved && typeof saved === "object") cart = saved;
} catch (e) { /* ignora, começa com carrinho vazio */ }

function persistCart() {
  try { localStorage.setItem("girassol_cart_v1", JSON.stringify(cart)); } catch (e) { /* modo privado etc. */ }
}

/* ---------------------------------------------------------
   RENDER — chips de categoria
   --------------------------------------------------------- */
function renderCatNav() {
  const nav = $("#catNav");
  nav.innerHTML = MENU.map((cat, i) => `
    <button type="button" class="chip${i === 0 ? " on" : ""}" data-goto="${cat.id}">
      <span class="ce">${cat.icon}</span>${cat.name}
    </button>
  `).join("");
}

/* ---------------------------------------------------------
   RENDER — destaques
   --------------------------------------------------------- */
function renderFeatured() {
  const row = $("#fRow");
  const cards = FEATURED_REFS.map(([catId, name]) => {
    const found = findItem(catId, name);
    if (!found) return "";
    const { cat, item, idx } = found;
    const price = startPrice(item);
    return `
      <button type="button" class="fcard f-open" data-open="${catId}::${idx}" style="--h:${cat.hue}">
        <span class="f-tile">${item.icon}</span>
        <span class="f-name">${item.name}</span>
        <span class="f-foot">
          <span class="f-price">${item.sizes ? `<small>a partir de</small>${money(price)}` : money(price)}</span>
        </span>
      </button>`;
  }).join("");
  row.innerHTML = cards;
}

/* ---------------------------------------------------------
   RENDER — cardápio (com filtro de busca opcional)
   --------------------------------------------------------- */
function cartCountFor(catId, idx) {
  const base = itemKey(catId, idx);
  let n = 0;
  Object.values(cart).forEach((l) => { if (l.catId === catId && l.idx === idx) n += l.qty; });
  return n;
}

function renderMenu(query) {
  const root = $("#menuRoot");
  const info = $("#resultInfo");
  const noRes = $("#noResults");
  const q = query ? norm(query.trim()) : "";
  const searching = q.length > 0;

  $("#featured").hidden = searching;
  $("#catNav").hidden = searching;

  let totalMatches = 0;
  let html = "";

  MENU.forEach((cat) => {
    const items = cat.items
      .map((item, idx) => ({ item, idx }))
      .filter(({ item }) => !searching || norm(item.name).includes(q) || norm(item.desc || "").includes(q));

    if (searching && items.length === 0) return;
    totalMatches += items.length;

    html += `
      <section class="cat" id="${cat.id}">
        <div class="cat-head">
          <span class="tile" style="--h:${cat.hue}">${cat.icon}</span>
          <div>
            <h2>${cat.name}</h2>
            ${cat.note ? `<p>${cat.note}</p>` : ""}
          </div>
        </div>
        <div class="squiggle" style="--h:${cat.hue}"></div>
        <div class="list">
          ${items.map(({ item, idx }) => renderRow(cat, item, idx)).join("")}
        </div>
      </section>`;
  });

  root.innerHTML = html;

  if (searching) {
    info.hidden = false;
    info.textContent = totalMatches === 0
      ? "Nenhum resultado"
      : `${totalMatches} ${totalMatches === 1 ? "resultado" : "resultados"} para "${query.trim()}"`;
    noRes.hidden = totalMatches !== 0;
  } else {
    info.hidden = true;
    noRes.hidden = true;
  }
}

function renderRow(cat, item, idx) {
  const hasSizes = !!item.sizes;
  const key = `${cat.id}::${idx}`;
  const count = cartCountFor(cat.id, idx);

  const prices = hasSizes
    ? `<span class="r-prices">
         <span class="pr"><em>Meia</em>${money(item.sizes.meia)}</span>
         <span class="pr"><em>Inteira</em>${money(item.sizes.inteira)}</span>
       </span>`
    : `<span class="r-prices"><span class="pr">${money(item.price)}</span></span>`;

  return `
    <article class="row">
      <button type="button" class="row-open" data-open="${key}">
        <span class="tile" style="--h:${cat.hue}">${item.icon}</span>
        <span class="r-txt">
          <span class="r-name">${item.name}</span>
          ${item.desc ? `<span class="r-desc">${item.desc}</span>` : ""}
          ${prices}
        </span>
      </button>
      <div class="ctl">
        <button type="button" class="add" data-quick="${key}" aria-label="Adicionar ${item.name}">
          ＋${count > 0 ? `<span class="cnt">${count}</span>` : ""}
        </button>
      </div>
    </article>`;
}

/* re-renderiza só o cardápio, preservando busca atual */
function refreshMenu() {
  renderMenu($("#q").value);
}

/* ---------------------------------------------------------
   FOLHA DO ITEM
   --------------------------------------------------------- */
function openItemSheet(catId, idx, trigger) {
  const cat = MENU.find((c) => c.id === catId);
  const item = cat.items[idx];
  const base = itemKey(catId, idx);
  const hasSizes = !!item.sizes;
  const size = hasSizes ? (lastSize[base] || "meia") : null;

  sheetItem = { catId, idx, size, qty: 1 };

  const body = $("#itemBody");
  body.innerHTML = `
    <div class="s-hero" style="--h:${cat.hue}">${item.icon}</div>
    <h2 id="itemTitle">${item.name}</h2>
    ${item.desc ? `<p class="s-desc">${item.desc}</p>` : `<p class="s-desc">${cat.name} · ${cat.note || "Feito na hora, com capricho."}</p>`}
    ${hasSizes ? `
      <p class="sizes-label">Escolha o tamanho</p>
      <div class="sizes" role="radiogroup" aria-label="Tamanho da porção">
        <button type="button" class="size" data-size="meia" role="radio" aria-checked="${size === "meia"}">
          <span class="sz-name">Meia</span><span class="sz-price">${money(item.sizes.meia)}</span>
        </button>
        <button type="button" class="size" data-size="inteira" role="radio" aria-checked="${size === "inteira"}">
          <span class="sz-name">Inteira</span><span class="sz-price">${money(item.sizes.inteira)}</span>
        </button>
      </div>` : ""}
  `;

  if (hasSizes) {
    $$(".size", body).forEach((btn) => {
      btn.addEventListener("click", () => {
        sheetItem.size = btn.dataset.size;
        lastSize[base] = btn.dataset.size;
        $$(".size", body).forEach((b) => b.setAttribute("aria-checked", String(b === btn)));
        updateItemFoot();
      });
    });
  }

  $("#sq").textContent = "1";
  updateItemFoot();
  openSheet($("#itemSheet"), trigger);
}

function currentSheetUnitPrice() {
  const cat = MENU.find((c) => c.id === sheetItem.catId);
  const item = cat.items[sheetItem.idx];
  return item.sizes ? item.sizes[sheetItem.size] : item.price;
}

function updateItemFoot() {
  if (!sheetItem) return;
  const total = currentSheetUnitPrice() * sheetItem.qty;
  $("#itemAddPrice").textContent = money(total);
}

/* ---------------------------------------------------------
   CARRINHO — lógica
   --------------------------------------------------------- */
function addToCart({ catId, idx, size, qty }) {
  const cat = MENU.find((c) => c.id === catId);
  const item = cat.items[idx];
  const unitPrice = size ? item.sizes[size] : item.price;
  const key = itemKey(catId, idx) + (size ? "-" + size : "");

  if (cart[key]) {
    cart[key].qty += qty;
  } else {
    cart[key] = {
      catId, idx, name: item.name, icon: item.icon,
      size: size ? (size === "meia" ? "Meia" : "Inteira") : null,
      unitPrice, qty,
    };
  }
  persistCart();
  renderCart();
  refreshMenu();
}

function cartTotal() { return Object.values(cart).reduce((s, l) => s + l.unitPrice * l.qty, 0); }
function cartCount() { return Object.values(cart).reduce((s, l) => s + l.qty, 0); }

function updateCartChrome() {
  const n = cartCount();
  const has = n > 0;
  document.body.classList.toggle("has-cart", has);

  $("#cartBadge").hidden = !has;
  $("#cartBadge").textContent = n > 99 ? "99+" : n;

  $("#cartBar").hidden = !has;
  $("#cbCount").textContent = n;
  $("#cbTotal").textContent = money(cartTotal());
  $("#cartTotal").textContent = money(cartTotal());
}

function renderCart() {
  updateCartChrome();
  const entries = Object.entries(cart);
  const empty = $("#cartEmpty");
  const filled = $("#cartFilled");

  if (entries.length === 0) {
    empty.hidden = false;
    filled.hidden = true;
    $("#sendBtn").disabled = true;
    return;
  }
  empty.hidden = true;
  filled.hidden = false;
  $("#sendBtn").disabled = false;

  $("#cartList").innerHTML = entries.map(([key, l]) => `
    <li class="line">
      <span class="tile" style="--h:${(MENU.find(c=>c.id===l.catId)||{}).hue||200}">${l.icon}</span>
      <div class="l-info">
        <b>${l.name}</b>
        ${l.size ? `<span class="tag">${l.size}</span>` : ""}
        <small>${money(l.unitPrice)} cada</small>
      </div>
      <div class="l-right">
        <span class="l-price">${money(l.unitPrice * l.qty)}</span>
        <div class="step sm">
          <button type="button" data-dec="${key}" aria-label="Diminuir ${l.name}">−</button>
          <b>${l.qty}</b>
          <button type="button" data-inc="${key}" aria-label="Aumentar ${l.name}">+</button>
        </div>
      </div>
    </li>
  `).join("");

  renderUpsell();
}

function renderUpsell() {
  const box = $("#upsell");
  const cartKeys = new Set(Object.values(cart).map((l) => `${l.catId}::${l.idx}`));
  const pool = [];
  MENU.forEach((cat) => {
    cat.items.forEach((item, idx) => {
      if (item.sizes) return; // upsell só com itens de preço único (adição direta)
      if (cartKeys.has(`${cat.id}::${idx}`)) return;
      pool.push({ cat, item, idx });
    });
  });
  if (pool.length === 0) { box.hidden = true; return; }

  // embaralha de forma estável por sessão
  const picks = pool.sort(() => 0.5 - Math.random()).slice(0, 5);
  box.hidden = false;
  $("#upRow").innerHTML = picks.map(({ cat, item, idx }) => `
    <button type="button" class="up" data-upadd="${cat.id}::${idx}">
      <span class="tile" style="--h:${cat.hue}">${item.icon}</span>
      <b>${item.name}</b>
      <span class="up-foot">
        <small>${money(item.price)}</small>
        <span class="plus" aria-hidden="true">＋</span>
      </span>
    </button>
  `).join("");
}

/* ---------------------------------------------------------
   FOLHAS (bottom sheets) — abrir/fechar, arrastar, foco
   --------------------------------------------------------- */
function openSheet(sheet, trigger) {
  lastFocused = trigger || document.activeElement;
  $("#toast").classList.remove("show");
  $("#scrim").classList.add("on");
  document.documentElement.classList.add("lock");
  sheet.removeAttribute("inert");
  sheet.classList.add("open");
  const focusTarget = sheet.querySelector("input, button:not(.x-btn)") || sheet;
  requestAnimationFrame(() => { try { focusTarget.focus({ preventScroll: true }); } catch (e) {} });
}
function closeSheets() {
  $$(".sheet.open").forEach((s) => {
    s.classList.remove("open");
    s.setAttribute("inert", "");
  });
  $("#scrim").classList.remove("on");
  document.documentElement.classList.remove("lock");
  if (lastFocused && document.contains(lastFocused)) {
    try { lastFocused.focus({ preventScroll: true }); } catch (e) {}
  }
}

function setupDrag(grabId, sheetEl) {
  const grab = document.getElementById(grabId);
  let startY = 0, dy = 0, dragging = false;
  const onStart = (y) => { dragging = true; startY = y; sheetEl.style.transition = "none"; };
  const onMove = (y) => {
    if (!dragging) return;
    dy = Math.max(0, y - startY);
    sheetEl.style.transform = `translateY(${dy}px)`;
  };
  const onEnd = () => {
    if (!dragging) return;
    dragging = false;
    sheetEl.style.transition = "";
    sheetEl.style.transform = "";
    if (dy > 110) closeSheets();
    dy = 0;
  };
  grab.addEventListener("touchstart", (e) => onStart(e.touches[0].clientY), { passive: true });
  grab.addEventListener("touchmove", (e) => onMove(e.touches[0].clientY), { passive: true });
  grab.addEventListener("touchend", onEnd);
  grab.addEventListener("pointerdown", (e) => { if (e.pointerType !== "touch") { onStart(e.clientY); grab.setPointerCapture(e.pointerId); } });
  grab.addEventListener("pointermove", (e) => { if (e.pointerType !== "touch") onMove(e.clientY); });
  grab.addEventListener("pointerup", (e) => { if (e.pointerType !== "touch") onEnd(); });
}

/* ---------------------------------------------------------
   TOAST + animação "voar até o carrinho"
   --------------------------------------------------------- */
let toastTimer = null;
function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.toggle("top", $$(".sheet.open").length > 0);
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2000);
}

function flyToCart(fromEl) {
  if (!fromEl || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const target = $("#cartBtn");
  const a = fromEl.getBoundingClientRect();
  const b = target.getBoundingClientRect();
  const dot = document.createElement("div");
  dot.className = "fly";
  dot.style.left = a.left + a.width / 2 - 13 + "px";
  dot.style.top = a.top + a.height / 2 - 13 + "px";
  document.body.appendChild(dot);
  const dx = (b.left + b.width / 2) - (a.left + a.width / 2);
  const dy = (b.top + b.height / 2) - (a.top + a.height / 2);
  const anim = dot.animate(
    [
      { transform: "translate(0,0) scale(1)", opacity: 1 },
      { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 60}px) scale(1.1)`, opacity: 1, offset: 0.55 },
      { transform: `translate(${dx}px, ${dy}px) scale(.3)`, opacity: 0.2 },
    ],
    { duration: 620, easing: "cubic-bezier(.3,.6,.3,1)" }
  );
  anim.onfinish = () => dot.remove();
  target.classList.add("bump");
  setTimeout(() => target.classList.remove("bump"), 420);
  $("#cartBar").classList.add("bump");
  setTimeout(() => $("#cartBar").classList.remove("bump"), 420);
}

/* ---------------------------------------------------------
   BUSCA
   --------------------------------------------------------- */
function setupSearch() {
  const input = $("#q");
  const clearBtn = $("#qClear");
  let t = null;
  input.addEventListener("input", () => {
    clearBtn.hidden = input.value.length === 0;
    clearTimeout(t);
    t = setTimeout(() => renderMenu(input.value), 110);
  });
  clearBtn.addEventListener("click", () => {
    input.value = "";
    clearBtn.hidden = true;
    renderMenu("");
    input.focus();
  });
  $("#qReset").addEventListener("click", () => {
    input.value = "";
    clearBtn.hidden = true;
    renderMenu("");
  });
}

/* ---------------------------------------------------------
   SCROLL: topo sólido, chip ativo, nav "grudado"
   --------------------------------------------------------- */
function setupScroll() {
  const topbar = $("#topbar");
  const catNav = $("#catNav");
  const heroH = () => $(".hero").offsetHeight;

  const hdr = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hdr")) || 58;
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      topbar.classList.toggle("solid", window.scrollY > heroH() - 90);
      catNav.classList.toggle("stuck", Math.round(catNav.getBoundingClientRect().top) <= Math.round(hdr()));
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupScrollSpy() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      $$(".chip").forEach((c) => c.classList.toggle("on", c.dataset.goto === entry.target.id));
    });
  }, { rootMargin: "-170px 0px -65% 0px", threshold: 0 });

  function observe() { MENU.forEach((c) => { const el = document.getElementById(c.id); if (el) observer.observe(el); }); }
  observe();
  return observe;
}

/* ---------------------------------------------------------
   WHATSAPP
   --------------------------------------------------------- */
function buildWhatsAppMessage(name, local, obs) {
  const lines = [];
  lines.push("🌻 *Pedido — Pesqueiro Girassol*", "");
  lines.push(`*Cliente:* ${name}`);
  lines.push(`*Local:* ${local}`, "");
  lines.push("*Itens do pedido:*");
  Object.values(cart).forEach((l) => {
    const sizeTxt = l.size ? ` (${l.size})` : "";
    lines.push(`• ${l.qty}x ${l.name}${sizeTxt} — ${money(l.unitPrice * l.qty)}`);
  });
  lines.push("", `*Total: ${money(cartTotal())}*`);
  if (obs && obs.trim()) lines.push("", `*Observação:* ${obs.trim()}`);
  lines.push("", "_Pedido feito pelo cardápio online 🎣_");
  return lines.join("\n");
}

function setupCheckout() {
  const form = $("#checkoutForm");
  const name = $("#custName"), local = $("#custLocal"), obs = $("#custObs");

  function fieldError(el, errEl, show) {
    el.closest(".fld").classList.toggle("bad", show);
    errEl.hidden = !show;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cartCount() === 0) { showToast("Seu carrinho está vazio."); return; }

    const nameOk = name.value.trim().length >= 3;
    const localOk = local.value.trim().length >= 1;
    fieldError(name, $("#errName"), !nameOk);
    fieldError(local, $("#errLocal"), !localOk);
    if (!nameOk || !localOk) {
      (nameOk ? local : name).focus();
      return;
    }

    const msg = buildWhatsAppMessage(name.value.trim(), local.value.trim(), obs.value);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener");

    $("#doneOpen").href = url;
    closeSheets();
    setTimeout(() => openSheet($("#doneSheet")), 260);
  });

  [name, local].forEach((el) => el.addEventListener("input", () => {
    el.closest(".fld").classList.remove("bad");
  }));
}

/* ---------------------------------------------------------
   DELEGAÇÃO DE EVENTOS (um só listener para tudo)
   --------------------------------------------------------- */
function setupDelegation() {
  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-open]");
    if (openBtn) {
      const [catId, idx] = openBtn.dataset.open.split("::");
      openItemSheet(catId, Number(idx), openBtn);
      return;
    }

    const quickBtn = e.target.closest("[data-quick]");
    if (quickBtn) {
      const [catId, idxStr] = quickBtn.dataset.quick.split("::");
      const idx = Number(idxStr);
      const item = MENU.find((c) => c.id === catId).items[idx];
      if (item.sizes) {
        openItemSheet(catId, idx, quickBtn);
      } else {
        addToCart({ catId, idx, size: null, qty: 1 });
        flyToCart(quickBtn);
        showToast(`${item.name} adicionado`);
      }
      return;
    }

    const upBtn = e.target.closest("[data-upadd]");
    if (upBtn) {
      const [catId, idxStr] = upBtn.dataset.upadd.split("::");
      const idx = Number(idxStr);
      addToCart({ catId, idx, size: null, qty: 1 });
      flyToCart(upBtn);
      showToast(`${MENU.find((c) => c.id === catId).items[idx].name} adicionado`);
      return;
    }

    const gotoBtn = e.target.closest("[data-goto]");
    if (gotoBtn) {
      const el = document.getElementById(gotoBtn.dataset.goto);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hdr")) + 64);
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      return;
    }

    const act = e.target.closest("[data-act]");
    if (act) {
      const a = act.dataset.act;
      if (a === "opencart") { openSheet($("#cartSheet"), act); }
      else if (a === "close") { closeSheets(); }
      else if (a === "itemadd") {
        if (!sheetItem) return;
        addToCart({ catId: sheetItem.catId, idx: sheetItem.idx, size: sheetItem.size, qty: sheetItem.qty });
        const name = MENU.find((c) => c.id === sheetItem.catId).items[sheetItem.idx].name;
        closeSheets();
        setTimeout(() => { flyToCart($("#cartBtn")); showToast(`${name} adicionado`); }, 120);
      }
      else if (a === "sq") {
        const d = Number(act.dataset.d);
        sheetItem.qty = Math.max(1, sheetItem.qty + d);
        $("#sq").textContent = sheetItem.qty;
        updateItemFoot();
      }
      else if (a === "newOrder") {
        cart = {};
        persistCart();
        renderCart();
        refreshMenu();
        closeSheets();
      }
      return;
    }

    const inc = e.target.closest("[data-inc]");
    if (inc) { cart[inc.dataset.inc].qty += 1; persistCart(); renderCart(); refreshMenu(); return; }
    const dec = e.target.closest("[data-dec]");
    if (dec) {
      const key = dec.dataset.dec;
      cart[key].qty -= 1;
      if (cart[key].qty <= 0) delete cart[key];
      persistCart(); renderCart(); refreshMenu();
      return;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $$(".sheet.open").length) closeSheets();
  });

  $("#scrim").addEventListener("click", closeSheets);

  $("#heroLogo").addEventListener("click", () => {
    const fish = $("#fish");
    fish.classList.remove("go");
    void fish.offsetWidth; // reinicia a animação
    fish.classList.add("go");
  });
  $("#fish").addEventListener("animationend", () => $("#fish").classList.remove("go"));
}

/* ---------------------------------------------------------
   INIT
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderCatNav();
  renderFeatured();
  renderMenu("");
  renderCart();
  setupSearch();
  setupScroll();
  setupScrollSpy();
  setupCheckout();
  setupDelegation();
  setupDrag("itemGrab", $("#itemSheet"));
  setupDrag("cartGrab", $("#cartSheet"));
  setupDrag("doneGrab", $("#doneSheet"));

  setTimeout(() => { const f = $("#fish"); f.classList.add("go"); }, 900);
});
