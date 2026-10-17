(function () {
  "use strict";

  const D = window.PORTFOLIO || {};

  /* ---------- Icons ---------- */
  const STROKE = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const ICONS = {
    github: { fill: true, d: '<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>' },
    linkedin: { fill: true, d: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/>' },
    x: { fill: true, d: '<path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"/>' },
    website: { d: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>' },
    email: { d: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>' },
    external: { d: '<path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>' },
    code: { d: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>' },
    spark: { d: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>' },
    layers: { d: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>' },
    tool: { d: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z"/>' },
    camera: { d: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13.5" r="3.5"/>' },
    gamepad: { d: '<path d="M7 7h10a5 5 0 0 1 4.9 6l-.7 3.4a2.5 2.5 0 0 1-4.3 1.1L15 15.5H9l-1.9 2a2.5 2.5 0 0 1-4.3-1.1L2.1 13A5 5 0 0 1 7 7Z"/><path d="M7.5 10v3M6 11.5h3"/><circle cx="16" cy="10.5" r=".6" fill="currentColor"/><circle cx="17.5" cy="12.5" r=".6" fill="currentColor"/>' },
    glove: { d: '<path d="M7 20v-3.5L5.2 13A4 4 0 0 1 5 11.6V8a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v4.5a4.5 4.5 0 0 1-2 3.7V20Z"/><path d="M7 20h10M5 9.5h3.5A2.5 2.5 0 0 1 11 12v1"/>' },
    palette: { d: '<path d="M12 3a9 9 0 0 0 0 18c1.1 0 1.8-.9 1.8-1.9 0-.5-.2-.9-.5-1.3-.3-.3-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3Z"/><circle cx="7.5" cy="11" r="1" fill="currentColor"/><circle cx="10" cy="7" r="1" fill="currentColor"/><circle cx="15" cy="7.5" r="1" fill="currentColor"/>' },
    cap: { d:'<path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6"/>' },
    download: { d: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>' },
    pin: { d: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>' },
    sun: { d: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>' },
    moon: { d: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>' },
    menu: { d: '<path d="M4 7h16M4 12h16M4 17h16"/>' },
    close: { d: '<path d="M6 6l12 12M18 6 6 18"/>' }
  };
  const LABELS = { github: "GitHub", linkedin: "LinkedIn", x: "X", website: "Website", email: "Email" };

  function icon(name, size) {
    const i = ICONS[name] || ICONS.website;
    const s = size || 18;
    return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" ${i.fill ? 'fill="currentColor"' : STROKE} aria-hidden="true">${i.d}</svg>`;
  }

  /* ---------- Helpers ---------- */
  const $ = (sel) => document.querySelector(sel);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const safeUrl = (u) => (/^\s*(javascript|data|vbscript):/i.test(String(u || "")) ? "#" : esc(u));
  const ext = 'target="_blank" rel="noopener"';

  const initials = () => (D.name || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  function sectionHead(n, id, title) {
    return `<div class="section-head reveal"><span class="num">0${n}.</span><h2>${esc(title)}</h2><span class="line"></span></div>`;
  }

  function socialLinks() {
    const links = (D.links || []).map((l) =>
      `<a class="social" href="${safeUrl(l.url)}" ${ext} aria-label="${esc(LABELS[l.type] || l.type)}" title="${esc(LABELS[l.type] || l.type)}">${icon(l.type, 19)}</a>`);
    if (D.email) links.push(`<a class="social" href="mailto:${esc(D.email)}" aria-label="Email" title="Email">${icon("email", 19)}</a>`);
    return links.join("");
  }

  const tags = (list) => `<div class="tags">${(list || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

  /* ---------- Sections ---------- */
  const NAV = [["about", "About"], ["experience", "Experience"], ["projects", "Projects"], ["skills", "Skills"], ["education", "Education"], ["contact", "Contact"]];

  function renderNav() {
    $("#brand").innerHTML = `<span class="lt">&lt;</span>${esc(initials())}<span class="lt">/&gt;</span>`;
    $("#nav-links").innerHTML = NAV.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("");
  }

  function renderHero() {
    const avatar = D.avatar
      ? `<img class="avatar" src="${safeUrl(D.avatar)}" alt="${esc(D.name)}" width="160" height="160">`
      : `<div class="avatar-fallback">${esc(initials())}</div>`;

    const stack = ["Python", "FastAPI", "PyTorch"].map((s) => `<span class="s">"${s}"</span>`).join('<span class="p">, </span>');
    const code = [
      `<span class="k">const</span> <span class="v">me</span> <span class="p">= {</span>`,
      `  name<span class="p">:</span> <span class="s">"${esc(D.name)}"</span><span class="p">,</span>`,
      `  focus<span class="p">: [</span><span class="s">"AI"</span><span class="p">, </span><span class="s">"Backend"</span><span class="p">],</span>`,
      `  stack<span class="p">: [</span>${stack}<span class="p">],</span>`,
      `  location<span class="p">:</span> <span class="s">"${esc(D.location)}"</span><span class="p">,</span>`,
      `  openToWork<span class="p">:</span> <span class="b">${D.status ? "true" : "false"}</span>`,
      `<span class="p">};</span>`
    ].join("\n");

    $("#hero").innerHTML = `
      <div class="hero-text reveal">
        <div class="status">
          ${D.status ? `<span class="pill"><span class="dot"></span>${esc(D.status)}</span>` : ""}
          ${D.location ? `<span class="loc">${icon("pin", 16)}${esc(D.location)}</span>` : ""}
        </div>
        <p class="hello">Hi, I'm</p>
        <h1>${esc(D.name)}</h1>
        <p class="role">${esc(D.role)}</p>
        <p class="intro">${esc(D.intro)}</p>
        <div class="actions">
          <a class="btn primary" href="#projects">View projects</a>
          ${D.resume ? `<a class="btn" href="${safeUrl(D.resume)}" ${ext}>${icon("download")}Resume</a>` : ""}
          <a class="btn" href="#contact">Get in touch</a>
        </div>
        <div class="socials">${socialLinks()}</div>
      </div>
      <div class="hero-visual reveal">
        <div class="avatar-ring">${avatar}</div>
        <div class="code-card">
          <div class="code-head"><span></span><span></span><span></span></div>
          <pre><code>${code}</code></pre>
        </div>
      </div>`;

    const img = $("#hero .avatar");
    if (img) img.addEventListener("error", () => { img.outerHTML = `<div class="avatar-fallback">${esc(initials())}</div>`; }, { once: true });
  }

  function renderAbout() {
    const paras = (D.about || []).map((p) => `<p>${esc(p)}</p>`).join("");
    const facts = (D.facts || []).map((f) => `<div class="fact"><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join("");
    const interests = (D.interests || []).map((i) => `<span class="chip">${i.icon ? icon(i.icon, 15) : ""}${esc(i.label)}</span>`).join("");
    $("#about").innerHTML = `
      ${sectionHead(1, "about", "About me")}
      <div class="about-grid">
        <div class="about-text reveal">
          ${paras}
          ${interests ? `<div class="interests"><h3>Outside of code</h3><div class="chips">${interests}</div></div>` : ""}
        </div>
        ${facts ? `<dl class="card facts reveal">${facts}</dl>` : ""}
      </div>`;
  }

  function renderExperience() {
    const items = (D.experience || []).map((e) => `
      <article class="card t-item reveal">
        <div class="t-top">
          <div>
            <h3>${esc(e.title)}</h3>
            <div class="place">${esc(e.place)}</div>
          </div>
          <span class="period">${esc(e.period)}</span>
        </div>
        ${(e.points || []).length ? `<ul class="points">${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
      </article>`).join("");
    $("#experience").innerHTML = `${sectionHead(2, "experience", "Experience")}<div class="timeline">${items}</div>`;
  }

  function renderProjects() {
    const cards = (D.projects || []).map((p) => `
      <article class="card hover project reveal">
        <span class="kicker">${esc(p.subtitle)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        ${(p.highlights || []).length ? `<ul class="points">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
        ${tags(p.tags)}
        <div class="project-links">
          ${p.repo ? `<a href="${safeUrl(p.repo)}" ${ext}>${icon("github", 16)}Code</a>` : ""}
          ${p.demo ? `<a href="${safeUrl(p.demo)}" ${ext}>${icon("external", 16)}Live demo</a>` : ""}
        </div>
      </article>`).join("");

    const others = (D.otherProjects || []).map((p) => `
      <li class="other reveal">
        <div class="other-main">
          <h4>${esc(p.title)}</h4>
          <p>${esc(p.description)}</p>
        </div>
        ${tags(p.tags)}
        <div class="project-links">
          ${p.repo ? `<a href="${safeUrl(p.repo)}" ${ext} aria-label="${esc(p.title)} code">${icon("github", 16)}Code</a>` : ""}
          ${p.demo ? `<a href="${safeUrl(p.demo)}" ${ext} aria-label="${esc(p.title)} live demo">${icon("external", 16)}Demo</a>` : ""}
        </div>
      </li>`).join("");

    $("#projects").innerHTML = `
      ${sectionHead(3, "projects", "Projects")}
      <div class="grid projects-grid">${cards}</div>
      ${others ? `
        <div class="sub-head reveal">
          <h3>Earlier projects</h3>
          ${D.github ? `<a class="link-arrow" href="https://github.com/${encodeURIComponent(D.github)}?tab=repositories" ${ext}>All repositories ${icon("external", 15)}</a>` : ""}
        </div>
        <ul class="card others">${others}</ul>` : ""}`;
  }

  function renderSkills() {
    const cards = (D.skills || []).map((g) => `
      <div class="card skill-card reveal">
        <h3><span class="ico">${icon(g.icon || "code", 18)}</span>${esc(g.group)}</h3>
        <div class="chips">${(g.items || []).map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      </div>`).join("");
    $("#skills").innerHTML = `${sectionHead(4, "skills", "Skills")}<div class="grid skills-grid">${cards}</div>`;
  }

  function renderEducation() {
    const cards = (D.education || []).map((e) => `
      <article class="card edu reveal">
        <span class="ico">${icon("cap", 20)}</span>
        <div>
          <span class="period">${esc(e.period)}</span>
          <h3>${esc(e.degree)}</h3>
          <div class="place">${esc(e.school)}</div>
          ${e.detail ? `<div class="detail">${esc(e.detail)}</div>` : ""}
        </div>
      </article>`).join("");
    $("#education").innerHTML = `${sectionHead(5, "education", "Education")}<div class="grid edu-grid">${cards}</div>`;
  }

  function renderContact() {
    $("#contact").innerHTML = `
      <div class="card contact-card reveal">
        <span class="num">06. Contact</span>
        <h2>Let's work together</h2>
        <p>${esc(D.contactText)}</p>
        <div class="actions">
          ${D.email ? `<a class="btn primary" href="mailto:${esc(D.email)}">${icon("email")}Email me</a>` : ""}
          ${D.resume ? `<a class="btn" href="${safeUrl(D.resume)}" ${ext}>${icon("download")}Resume</a>` : ""}
        </div>
        ${D.email ? `<span class="email">${esc(D.email)}</span>` : ""}
        <div class="socials">${socialLinks()}</div>
      </div>`;
  }

  function renderFooter() {
    $("#footer").innerHTML = `<span>© ${new Date().getFullYear()} ${esc(D.name)}</span><a href="#top">Back to top ↑</a>`;
  }

  /* ---------- Reveal on scroll ---------- */
  function observeReveal() {
    const els = document.querySelectorAll(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Theme ---------- */
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  function updateThemeIcon() { $("#theme-btn").innerHTML = icon(currentTheme() === "dark" ? "sun" : "moon", 18); }
  $("#theme-btn").addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store.set("theme", next);
    updateThemeIcon();
  });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateThemeIcon);

  /* ---------- Mobile menu ---------- */
  const nav = $("#nav");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    $("#menu-btn").setAttribute("aria-expanded", String(open));
    $("#menu-btn").innerHTML = icon(open ? "close" : "menu", 18);
  }
  $("#menu-btn").addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  $("#nav-links").addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  document.addEventListener("click", (e) => { if (!nav.contains(e.target)) setMenu(false); });
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 8), { passive: true });

  /* ---------- Render ---------- */
  document.title = `${D.name} | ${D.role}`;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", D.intro || "");

  renderNav();
  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();
  renderContact();
  renderFooter();
  updateThemeIcon();
  setMenu(false);
  observeReveal();
})();
