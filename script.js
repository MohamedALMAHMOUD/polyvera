(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Génération de la page à partir de sites.js
  const sites = window.SITES || [];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const ext = 'target="_blank" rel="noopener"';
  const host = u => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  const col = s => `--c:${esc(s.color || '#7c5cff')};--c2:${esc(s.color2 || s.color || '#22d3ee')}`;
  const fallback = s => `<svg viewBox="0 0 240 150"><circle cx="120" cy="75" r="46" fill="none" stroke="var(--c)" stroke-width="3"/><text x="120" y="92" text-anchor="middle" font-family="Fraunces,serif" font-size="52" font-weight="700" fill="#fff">${esc(s.name.charAt(0))}</text></svg>`;

  $('#cards').innerHTML = sites.map(s => `
    <article class="card reveal" style="${col(s)}">
      <div class="visual" aria-hidden="true">${s.svg || fallback(s)}</div>
      <div class="body">
        <span class="tag">${esc(s.tag || '')}</span>
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.desc || '')}</p>
        <ul>${(s.points || []).map(p => `<li>${esc(p)}</li>`).join('')}</ul>
        <a class="visit" href="${esc(s.url)}" ${ext}>${esc(host(s.url))} <span aria-hidden="true">↗</span></a>
      </div>
    </article>`).join('');
  $('#orbit').innerHTML = sites.map(s => `<li><a href="${esc(s.url)}" ${ext} style="--c:${esc(s.color)}">${esc(host(s.url))}</a></li>`).join('');
  $('#chips').innerHTML = sites.map(s => `<a href="${esc(s.url)}" ${ext} style="--c:${esc(s.color)}">${esc(s.name)}</a>`).join('');
  $('#footer-links').innerHTML = sites.map(s => `<a href="${esc(s.url)}" ${ext}>${esc(s.name)}</a>`).join('');
  $$('[data-sites-count]').forEach(el => {
    if ('count' in el.dataset) el.dataset.count = sites.length; else el.textContent = sites.length;
  });

  // Nav: état au scroll + menu mobile
  const nav = $('#nav'), burger = $('#burger'), menu = $('#menu');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  const setMenu = open => {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  };
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));

  // Compteurs animés
  const count = el => {
    const end = +el.dataset.count;
    if (reduce) { el.textContent = end; return; }
    const t0 = performance.now(), dur = 1400;
    const tick = t => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // Apparition au scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      const n = $('[data-count]', e.target);
      if (n) count(n);
      io.unobserve(e.target);
    });
  }, { threshold: .15 });
  $$('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 80 + 'ms';
    io.observe(el);
  });

  // Cartes : halo lumineux + inclinaison 3D
  if (!reduce && matchMedia('(hover: hover)').matches) {
    $$('.card').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', x * 100 + '%');
        card.style.setProperty('--my', y * 100 + '%');
        card.style.transform = `perspective(900px) rotateY(${(x - .5) * 6}deg) rotateX(${(.5 - y) * 6}deg) translateY(-4px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  $('#year').textContent = new Date().getFullYear();
})();
