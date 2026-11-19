/* Shared header, footer, cart and toast for every page of the puppy shop. */
(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  window.$ = $; window.$$ = $$;

  /* ---------- Theme (remembered between pages) ---------- */
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;

  /* ---------- Cart in localStorage: [{ type: 'puppy' | 'gear', id, qty }] ---------- */
  const Cart = {
    get() { try { return JSON.parse(localStorage.getItem('cart')) || []; } catch { return []; } },
    save(items) { localStorage.setItem('cart', JSON.stringify(items)); Cart.render(); },
    count() { return Cart.get().reduce((n, i) => n + i.qty, 0); },
    has(type, id) { return Cart.get().some((i) => i.type === type && i.id === id); },
    add(type, id, qty = 1) {
      const items = Cart.get();
      const line = items.find((i) => i.type === type && i.id === id);
      if (type === 'puppy') { if (!line) items.push({ type, id, qty: 1 }); }   // one reservation per puppy
      else if (line) line.qty += qty; else items.push({ type, id, qty });
      Cart.save(items);
    },
    setQty(type, id, qty) {
      Cart.save(Cart.get().map((i) => (i.type === type && i.id === id ? { ...i, qty } : i)).filter((i) => i.qty > 0));
    },
    remove(type, id) { Cart.save(Cart.get().filter((i) => !(i.type === type && i.id === id))); },
    clear() { Cart.save([]); },
    render() {
      const badge = $('#cart-badge'); if (!badge) return;
      const n = Cart.count();
      badge.textContent = n; badge.hidden = n === 0;
    }
  };
  window.Cart = Cart;

  /* ---------- Header ---------- */
  const page = document.body.dataset.page || '';
  const NAV = [
    ['puppies', 'puppies.html', 'All puppies'],
    ['breeds', 'breeds.html', 'Breed guide'],
    ['gear', 'puppy-gear.html', 'Puppy gear'],
    ['how', 'how-it-works.html', 'How it works'],
    ['care', 'care-guide.html', 'Care guide'],
    ['visit', 'book-a-visit.html', 'Book a visit'],
    ['breeders', 'our-breeders.html', 'Our breeders'],
    ['product', 'index.html', 'Hiking backpack']
  ];
  const header = $('#site-header');
  if (header) header.outerHTML = `
  <header class="page-header">
    <nav class="vtmn-navbar" aria-label="Main navigation">
      <div class="vtmn-navbar_left-navigation">
        <button class="vtmn-btn vtmn-btn--icon-alone vtmn-btn_variant--ghost" aria-expanded="false" aria-controls="subnav" id="menu-btn">
          <span class="vtmn-sr-only">Menu</span><span class="vtmx-menu-line" aria-hidden="true"></span>
        </button>
      </div>
      <div class="vtmn-navbar_logo">
        <a href="puppies-home.html" title="Decathlon Puppies home"><img src="assets/logo.svg" alt="Decathlon logo"></a>
      </div>
      <div class="vtmn-navbar_middle-area">
        <form class="vtmn-search vtmn-search_variant--persistent" role="search" action="puppies.html">
          <label class="vtmn-sr-only" for="nav-search">Search puppies and gear</label>
          <input type="search" id="nav-search" name="q" placeholder="Search a puppy, breed or gear" title="Search a puppy, breed or gear">
          <div class="vtmn-search_buttons">
            <button class="vtmn-btn vtmn-btn_variant--ghost vtmn-btn_size--medium vtmn-btn--icon-alone" type="submit">
              <span class="vtmn-sr-only">Search</span><span class="vtmx-search-line" aria-hidden="true"></span>
            </button>
          </div>
        </form>
      </div>
      <div class="vtmn-navbar_right-navigation">
        <a class="vtmn-navbar_link" href="book-a-visit.html"><div><span class="vtmx-store-line" aria-hidden="true"></span></div><span>Visit</span></a>
        <a class="vtmn-navbar_link" href="our-breeders.html"><div><span class="vtmx-user-line" aria-hidden="true"></span></div><span>Breeders</span></a>
        <a class="vtmn-navbar_link" href="cart.html">
          <div><span class="vtmn-badge vtmn-badge_variant--accent" id="cart-badge">0</span><span class="vtmx-shopping-cart-line" aria-hidden="true"></span></div>
          <span>Cart</span>
        </a>
      </div>
    </nav>
    <nav class="subnav" id="subnav" aria-label="Puppy shop sections">
      <ul>${NAV.map(([key, href, label]) => `<li><a href="${href}"${key === page ? ' aria-current="page"' : ''}>${label}</a></li>`).join('')}</ul>
    </nav>
  </header>`;
  const q = new URLSearchParams(location.search).get('q');
  if (q && $('#nav-search')) $('#nav-search').value = q;
  $('#menu-btn')?.addEventListener('click', (e) => {
    const sub = $('#subnav'); const open = sub.hidden;
    sub.hidden = !open; e.currentTarget.setAttribute('aria-expanded', String(open));
  });

  /* ---------- Footer ---------- */
  const footer = $('#site-footer');
  if (footer) footer.outerHTML = `
  <footer class="stack gap-4">
    <div class="vtmn-divider" role="separator"></div>
    <div class="section-head gap-5">
      <div class="row gap-5">
        <a href="how-it-works.html#faq" class="vtmn-link vtmn-link--standalone">FAQ</a>
        <a href="care-guide.html" class="vtmn-link vtmn-link--standalone">Care guide</a>
        <a href="our-breeders.html" class="vtmn-link vtmn-link--standalone">Our breeders</a>
        <a href="book-a-visit.html" class="vtmn-link vtmn-link--standalone">Contact</a>
      </div>
      <div class="row gap-2" style="align-items: center;">
        <span class="vtmn-tag vtmn-tag_variant--decorative_jade vtmn-tag_size--small">Vet-checked</span>
        <span class="vtmn-tag vtmn-tag_variant--decorative_cobalt vtmn-tag_size--small">Microchipped</span>
        <span class="vtmn-tag vtmn-tag_variant--decorative_saffron vtmn-tag_size--small">Vaccinated</span>
      </div>
      <button class="vtmn-btn vtmn-btn_variant--ghost vtmn-btn_size--small vtmn-btn--icon-left" id="theme-toggle">
        <span class="vtmx-eye-line" aria-hidden="true"></span><span id="theme-label">Dark theme</span>
      </button>
    </div>
    <p class="vtmn-typo_caption-1 muted">Demo site. Puppies, breeders, prices and reviews are sample content.</p>
  </footer>`;
  const syncThemeLabel = () => { const l = $('#theme-label'); if (l) l.textContent = document.documentElement.dataset.theme === 'dark' ? 'Light theme' : 'Dark theme'; };
  syncThemeLabel();
  $('#theme-toggle')?.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    syncThemeLabel();
  });

  /* ---------- Toast ---------- */
  document.body.insertAdjacentHTML('beforeend', `
  <div role="status" id="toast" hidden>
    <div class="vtmn-toast vtmn-toast--with-icon-info">
      <div class="vtmn-toast_content" id="toast-text"></div>
      <button class="vtmn-btn vtmn-btn_variant--ghost-reversed vtmn-btn_size--small vtmn-btn--icon-alone" id="toast-close"><span class="vtmn-sr-only">Close</span><span class="vtmx-close-line" aria-hidden="true"></span></button>
    </div>
  </div>`);
  let toastTimer;
  window.toast = (msg) => {
    $('#toast-text').innerHTML = msg; $('#toast').hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 5000);
  };
  $('#toast-close').addEventListener('click', () => { $('#toast').hidden = true; });

  /* ---------- Shared renderers ---------- */
  window.puppyCard = (p) => {
    const b = breedById(p.breed);
    const reserved = p.status === 'reserved';
    return `
    <a class="card-link" href="puppy.html?id=${p.id}">
      <article class="vtmn-card">
        <div class="vtmn-card_image"><img src="assets/puppies/${p.img}.svg" alt="${p.name}, ${b.name} puppy"></div>
        <div class="vtmn-card_content stack gap-2">
          <div class="card-meta">
            ${reserved ? '<span class="vtmn-tag vtmn-tag_variant--alert vtmn-tag_size--small">Reserved</span>'
                       : '<span class="vtmn-tag vtmn-tag_variant--decorative_jade vtmn-tag_size--small">Available</span>'}
            ${p.badge ? `<span class="vtmn-tag vtmn-tag_variant--brand vtmn-tag_size--small">${p.badge}</span>` : ''}
          </div>
          <h3 class="vtmn-card_content--title">${p.name} · ${b.name}</h3>
          <span class="vtmn-card_content--body muted">${p.sex} · ${p.ageWeeks} weeks · ${p.color}</span>
          <span class="vtmn-price vtmn-price_size--small vtmn-price_variant--${reserved ? 'strikethrough' : 'default'}">${euro(p.price)}</span>
        </div>
      </article>
    </a>`;
  };
  window.gearCard = (g) => `
    <article class="vtmn-card">
      <div class="vtmn-card_image"><img src="assets/product-placeholder.svg" alt=""></div>
      <div class="vtmn-card_content stack gap-2">
        <span class="vtmn-tag vtmn-tag_variant--${g.tag} vtmn-tag_size--small" style="align-self: flex-start;">${g.cat}</span>
        <h3 class="vtmn-card_content--title">${g.name}</h3>
        <span class="vtmn-card_content--body muted">${g.desc}</span>
        <div class="vtmn-rating vtmn-rating_size--small">
          <span class="vtmx-star-fill" role="presentation"></span>
          <span class="vtmn-rating_comment--primary"><span class="vtmn-sr-only">rating</span>${g.rating}/5</span>
          <span class="vtmn-rating_comment--secondary"><span class="vtmn-sr-only">number of ratings</span>(${g.count})</span>
        </div>
        <div class="section-head">
          <span class="vtmn-price vtmn-price_size--small vtmn-price_variant--default">${euro(g.price)}</span>
          <button class="vtmn-btn vtmn-btn_variant--primary vtmn-btn_size--small vtmn-btn--icon-left" data-add-gear="${g.id}">
            <span class="vtmx-shopping-cart-line" aria-hidden="true"></span>Add
          </button>
        </div>
      </div>
    </article>`;
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add-gear]'); if (!btn) return;
    const g = gearById(btn.dataset.addGear);
    Cart.add('gear', g.id);
    toast(`${g.name} added to your cart · <a href="cart.html" style="color: inherit;">View cart</a>`);
  });
  window.meter = (n, label) => `<span class="meter" role="img" aria-label="${label}: ${n} out of 5">${[1, 2, 3, 4, 5].map((i) => `<span class="${i <= n ? 'on' : ''}"></span>`).join('')}</span>`;

  Cart.render();
})();
