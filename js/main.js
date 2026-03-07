const THEME_KEY = "icat-theme";
const WHATSAPP_ENQUIRY_NUMBER = "918808800266";

const COURSE_CATEGORIES = [
  { value: "office", label: "Office & Basics" },
  { value: "accounting", label: "Accounting & Finance" },
  { value: "certification", label: "Govt Certification" },
  { value: "programming", label: "Programming & Web" },
  { value: "design", label: "Design & Multimedia" },
  { value: "ai", label: "AI & Emerging Tech" }
];

const COURSE_CATEGORY_LABELS = COURSE_CATEGORIES.reduce((acc, item) => {
  acc[item.value] = item.label;
  return acc;
}, {});

const courseMenuItems = [
  { href: "courses.html", label: "All Courses", category: "" },
  ...COURSE_CATEGORIES.map((category) => ({
    href: `courses.html?category=${category.value}`,
    label: category.label,
    category: category.value
  }))
];

const navItems = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "courses.html", label: "Courses", submenu: courseMenuItems },
  { href: "notebook.html", label: "Notebook" },
  { href: "gallery.html", label: "Gallery" },
  { href: "contact.html", label: "Contact Us" },
  { href: "admission.html", label: "Admission" }
];

// Update only the `driveLink` values below to replace notebook PDFs.
const notebookCatalog = [
  {
    course: "ADCA",
    description: "Complete class notebook for computer fundamentals and office tools.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "DCA",
    description: "Beginner-focused notebook for practical diploma exercises.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "ADFA",
    description: "Financial accounting and digital skills notebook with assignments.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "DFA",
    description: "Core accounting practice notebook for daily class revision.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "ADCA Plus",
    description: "Advanced mixed-skill notebook covering office and web modules.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "Tally Prime",
    description: "Accounting entries and GST workflow notes for practical sessions.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "CCC",
    description: "CCC concept-wise notebook for exam preparation and practice.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "O-Level",
    description: "Module-wise notebook covering M1-R5 to M4-R5 topics.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "Python",
    description: "Programming notebook with syntax examples and practice tasks.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "Advance Excel",
    description: "Formula, Pivot and dashboard notebook for advanced workbook practice.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "DTP",
    description: "Desktop publishing notebook for Photoshop and CorelDraw practice.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "Graphic Designing",
    description: "Design workflow notebook covering typography, tools and projects.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "Diploma in Animation & Motion Graphics",
    description: "Animation class notebook for timeline, effects and render workflow.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "Artificial Intelligence & Generative AI Course",
    description: "AI tools, prompt engineering and practical use-case notebook.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "WordPress Website Development Course",
    description: "Step-by-step notebook for WordPress setup, themes and plugins.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "Web Development",
    description: "Front-end and project notebook for HTML, CSS and JavaScript training.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "Video Editing - Basic",
    description: "Editing notebook for Filmora workflow, transitions and export process.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  },
  {
    course: "Video Editing - Advance",
    description: "Advanced editing notebook for Premiere Pro workflow and ad creation.",
    driveLink: "https://drive.google.com/file/d/1ugpRJM4NFGUD_dtvj3Ne8qoJ6DHOeFYt/view?usp=sharing"
  }
];

function getCurrentPage() {
  const current = window.location.pathname.split("/").pop();
  return current || "index.html";
}

function buildHeader() {
  const currentPage = getCurrentPage();
  const currentParams = new URLSearchParams(window.location.search);
  const currentCategory = currentParams.get("category") || "";

  const menu = navItems
    .map((item) => {
      if (item.submenu) {
        const isActive = currentPage === item.href;
        const submenuMarkup = item.submenu
          .map((subItem) => {
            const isCategoryMatch = subItem.category
              ? currentCategory === subItem.category
              : currentCategory === "";
            const isSubActive = currentPage === item.href && isCategoryMatch;
            return `<li><a class="nav-link ${isSubActive ? "active" : ""}" href="${subItem.href}">${subItem.label}</a></li>`;
          })
          .join("");

        return `
          <li class="nav-item has-submenu">
            <button class="nav-link nav-trigger ${isActive ? "active" : ""}" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="coursesSubmenu">
              <span>Courses</span>
              <span class="nav-caret" aria-hidden="true">▾</span>
            </button>
            <ul class="nav-submenu" id="coursesSubmenu">
              ${submenuMarkup}
            </ul>
          </li>
        `;
      }

      return `<li class="nav-item"><a class="nav-link ${currentPage === item.href ? "active" : ""}" href="${item.href}">${item.label}</a></li>`;
    })
    .join("");

  return `
    <header class="site-header">
      <div class="header-strip">
        <div class="container strip-inner">
          <p class="strip-address strip-item">
            <span class="strip-icon icon-float" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z"></path>
                <circle cx="12" cy="11" r="2.2"></circle>
              </svg>
            </span>
            <span>Hyderganj Market, Ayodhya</span>
          </p>
          <div class="strip-links">
            <a class="strip-item" href="https://wa.me/918808800266" target="_blank" rel="noopener noreferrer">
              <span class="strip-icon icon-whatsapp" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M16.75 13.96c.25.13.41.22.47.33.05.1.05.58-.13 1.06-.18.48-1.09.92-1.51.97-.42.05-.95.23-3.34-.82-2.42-1.07-3.98-3.68-4.1-3.84-.14-.16-.98-1.27-.98-2.42s.58-1.69.79-1.92c.21-.23.46-.29.61-.29.15 0 .3 0 .43.01.14.01.32-.05.51.41.19.46.66 1.61.72 1.73.06.12.1.27.01.43-.08.16-.13.25-.26.4-.13.15-.27.33-.39.46-.13.13-.27.27-.12.53.16.26.69 1.13 1.48 1.83 1.03.91 1.9 1.2 2.2 1.34.3.14.47.12.61-.04.14-.17.61-.72.79-.98.18-.26.36-.21.59-.12.23.08 1.4.66 1.62.78ZM12 2a10 10 0 0 0-10 10c0 1.76.46 3.45 1.25 4.95L2 22l5.17-1.26A9.9 9.9 0 0 0 12 22a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"></path>
                </svg>
              </span>
              <span>WhatsApp: 8808800266</span>
            </a>
            <a class="strip-item" href="tel:8808807636">
              <span class="strip-icon icon-soft-pulse" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M6 3h4l2 5-2 2a14 14 0 0 0 4 4l2-2 5 2v4a2 2 0 0 1-2 2C10.2 20 4 13.8 4 6a2 2 0 0 1 2-2Z"></path>
                </svg>
              </span>
              <span>Call: 8808807636</span>
            </a>
            <a class="strip-item" href="mailto:academyicat@gmail.com">
              <span class="strip-icon icon-pop" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                  <path d="m4 8 8 6 8-6"></path>
                </svg>
              </span>
              <span>academyicat@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <div class="container nav-wrap">
        <a class="logo" href="index.html" aria-label="iCat Compuer Academy Home">
          <img class="logo-img" src="assets/logo.png" alt="iCat Compuer Academy Logo" />
        </a>
        <ul class="nav-menu" id="navMenu">
          ${menu}
        </ul>
        <div class="nav-controls">
          <button class="mode-switch" id="modeToggle" type="button" role="switch" aria-label="Toggle dark and light mode" aria-checked="false">
            <span class="mode-switch-track" aria-hidden="true">
              <span class="mode-switch-thumb"></span>
            </span>
          </button>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">&#9776;</button>
        </div>
      </div>
    </header>
  `;
}

function buildFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-brand">
          <img class="footer-logo" src="assets/logo.png" alt="iCat Compuer Academy Logo" />
          <div>
            <h3>iCat Compuer Academy</h3>
            <p>Unlock your digital potential</p>
          </div>
        </div>
        <div class="footer-grid">
          <article class="footer-card">
            <h3 class="icon-title">
              <span class="icon-badge icon-float" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M10 14 7 17a3 3 0 0 1-4-4l3-3"></path>
                  <path d="m14 10 3-3a3 3 0 0 1 4 4l-3 3"></path>
                  <path d="m8 16 8-8"></path>
                </svg>
              </span>
              <span>Quick Links</span>
            </h3>
            <p><a class="footer-link" href="about.html"><span class="footer-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 19V5"></path><path d="M4 19h16"></path><path d="m7 14 4-4 3 3 4-5"></path></svg></span><span>About Institute</span></a></p>
            <p><a class="footer-link" href="courses.html"><span class="footer-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M8 8h8"></path><path d="M8 12h8"></path><path d="M8 16h5"></path></svg></span><span>Courses</span></a></p>
            <p><a class="footer-link" href="notebook.html"><span class="footer-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"></path><path d="M9 8h6"></path><path d="M9 12h6"></path><path d="M9 16h4"></path></svg></span><span>Notebook</span></a></p>
            <p><a class="footer-link" href="admission.html"><span class="footer-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"></rect><path d="M8 8h8"></path><path d="M8 12h8"></path><path d="M8 16h5"></path></svg></span><span>Admission</span></a></p>
          </article>
          <article class="footer-card">
            <h3 class="icon-title">
              <span class="icon-badge icon-float" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z"></path>
                  <circle cx="12" cy="11" r="2.2"></circle>
                </svg>
              </span>
              <span>Address</span>
            </h3>
            <p class="footer-line"><span class="footer-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z"></path><circle cx="12" cy="11" r="2.2"></circle></svg></span><span>Hyderganj Market, Ayodhya</span></p>
          </article>
          <article class="footer-card">
            <h3 class="icon-title">
              <span class="icon-badge icon-soft-pulse" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M6 3h4l2 5-2 2a14 14 0 0 0 4 4l2-2 5 2v4a2 2 0 0 1-2 2C10.2 20 4 13.8 4 6a2 2 0 0 1 2-2Z"></path>
                </svg>
              </span>
              <span>Phone</span>
            </h3>
            <p><a class="footer-link" href="https://wa.me/918808800266" target="_blank" rel="noopener noreferrer"><span class="footer-link-icon whatsapp-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M16.75 13.96c.25.13.41.22.47.33.05.1.05.58-.13 1.06-.18.48-1.09.92-1.51.97-.42.05-.95.23-3.34-.82-2.42-1.07-3.98-3.68-4.1-3.84-.14-.16-.98-1.27-.98-2.42s.58-1.69.79-1.92c.21-.23.46-.29.61-.29.15 0 .3 0 .43.01.14.01.32-.05.51.41.19.46.66 1.61.72 1.73.06.12.1.27.01.43-.08.16-.13.25-.26.4-.13.15-.27.33-.39.46-.13.13-.27.27-.12.53.16.26.69 1.13 1.48 1.83 1.03.91 1.9 1.2 2.2 1.34.3.14.47.12.61-.04.14-.17.61-.72.79-.98.18-.26.36-.21.59-.12.23.08 1.4.66 1.62.78ZM12 2a10 10 0 0 0-10 10c0 1.76.46 3.45 1.25 4.95L2 22l5.17-1.26A9.9 9.9 0 0 0 12 22a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"></path></svg></span><span>WhatsApp: 8808800266</span></a></p>
            <p><a class="footer-link" href="tel:8808807636"><span class="footer-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h4l2 5-2 2a14 14 0 0 0 4 4l2-2 5 2v4a2 2 0 0 1-2 2C10.2 20 4 13.8 4 6a2 2 0 0 1 2-2Z"></path></svg></span><span>Call: 8808807636</span></a></p>
          </article>
          <article class="footer-card">
            <h3 class="icon-title">
              <span class="icon-badge icon-pop" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                  <path d="m4 8 8 6 8-6"></path>
                </svg>
              </span>
              <span>Email</span>
            </h3>
            <p><a class="footer-link" href="mailto:academyicat@gmail.com"><span class="footer-link-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="m4 8 8 6 8-6"></path></svg></span><span>academyicat@gmail.com</span></a></p>
          </article>
        </div>
        <p class="copyright">&copy; <span id="year"></span> iCat Compuer Academy. All rights reserved.</p>
      </div>
    </footer>
  `;
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggle = document.getElementById("modeToggle");

  if (toggle) {
    const darkMode = theme === "dark";
    toggle.classList.toggle("is-dark", darkMode);
    toggle.setAttribute("aria-checked", String(darkMode));
    toggle.setAttribute("aria-label", darkMode ? "Switch to light mode" : "Switch to dark mode");
  }
}

function setupTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(savedTheme);

  const toggle = document.getElementById("modeToggle");
  if (!toggle) {
    return;
  }

  toggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

function setupMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeButton = document.getElementById("lightboxClose");
  const items = document.querySelectorAll(".gallery-item");

  if (!lightbox || !lightboxImage || !closeButton || items.length === 0) {
    return;
  }

  items.forEach((item) => {
    item.addEventListener("click", () => {
      lightboxImage.src = item.src;
      lightboxImage.alt = item.alt;
      lightbox.classList.add("show");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("show")) {
      closeLightbox();
    }
  });
}

function setupCursorTrail() {
  if (!window.matchMedia("(pointer: fine)").matches) {
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.id = "cursorTrailCanvas";
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  document.body.appendChild(canvas);

  let width = 0;
  let height = 0;
  let dpr = 1;

  function resizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });

  const particles = [];
  const maxParticles = 48;
  const spawnInterval = 16;
  let trailColor = "42,95,187";

  let pointerX = 0;
  let pointerY = 0;
  let hasPointer = false;
  let isPointerInside = false;
  let lastSpawnTime = 0;
  let lastMoveTime = 0;
  let rafId = 0;
  let lastFrameTime = 0;

  function updateTrailColor() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    trailColor = isDark ? "159,196,255" : "42,95,187";
  }

  updateTrailColor();
  const themeObserver = new MutationObserver(() => {
    updateTrailColor();
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"]
  });

  function spawnParticle(x, y, speed) {
    const spread = Math.min(0.24 + speed * 0.002, 0.9);
    particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * spread,
      vy: (Math.random() - 0.5) * spread,
      radius: 1.8 + Math.random() * 3.2,
      alpha: 0.35 + Math.random() * 0.45,
      age: 0,
      ttl: 260 + Math.random() * 420
    });

    if (particles.length > maxParticles) {
      particles.splice(0, particles.length - maxParticles);
    }
  }

  function requestTick() {
    if (rafId === 0) {
      rafId = requestAnimationFrame(tick);
    }
  }

  function tick(time) {
    rafId = 0;
    const delta = Math.min(34, time - (lastFrameTime || time));
    lastFrameTime = time;

    ctx.clearRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i -= 1) {
      const p = particles[i];
      p.age += delta;

      if (p.age >= p.ttl) {
        particles.splice(i, 1);
        continue;
      }

      p.x += p.vx * delta;
      p.y += p.vy * delta;
      p.vx *= 0.985;
      p.vy *= 0.985;

      const life = p.age / p.ttl;
      const alpha = (1 - life) * (1 - life) * p.alpha;

      ctx.fillStyle = `rgba(${trailColor}, ${alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    const movingRecently = time - lastMoveTime < 85;
    if ((isPointerInside && movingRecently) || particles.length > 0) {
      requestTick();
    }
  }

  function onPointerMove(event) {
    if (event.pointerType !== "mouse") {
      return;
    }

    isPointerInside = true;

    if (!hasPointer) {
      pointerX = event.clientX;
      pointerY = event.clientY;
      hasPointer = true;
      lastMoveTime = performance.now();
      requestTick();
      return;
    }

    const now = performance.now();
    lastMoveTime = now;
    const dx = event.clientX - pointerX;
    const dy = event.clientY - pointerY;
    const distance = Math.hypot(dx, dy);

    if (now - lastSpawnTime >= spawnInterval && distance > 1) {
      const steps = Math.min(4, Math.max(1, Math.floor(distance / 14)));
      for (let i = 1; i <= steps; i += 1) {
        const ratio = i / steps;
        spawnParticle(pointerX + dx * ratio, pointerY + dy * ratio, distance);
      }
      lastSpawnTime = now;
    }

    pointerX = event.clientX;
    pointerY = event.clientY;
    requestTick();
  }

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerleave", () => {
    isPointerInside = false;
    requestTick();
  });
}

function setupCourseSyllabusPopup() {
  const modal = document.getElementById("courseModal");
  const modalTitle = document.getElementById("courseModalTitle");
  const modalBody = document.getElementById("courseModalBody");
  const closeButton = document.getElementById("courseModalClose");
  const syllabusButtons = document.querySelectorAll(".course-syllabus-btn[data-template]");

  if (!modal || !modalTitle || !modalBody || !closeButton || syllabusButtons.length === 0) {
    return;
  }

  function openModal(button) {
    const templateId = button.getAttribute("data-template");
    const template = templateId ? document.getElementById(templateId) : null;
    if (!template || template.tagName !== "TEMPLATE") {
      return;
    }

    const cardTitle = button.closest(".course-card")?.querySelector("h3")?.textContent || "";
    modalTitle.textContent = template.dataset.title || cardTitle || "Course Syllabus";
    modalBody.innerHTML = "";
    modalBody.appendChild(template.content.cloneNode(true));
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    modalBody.innerHTML = "";
    document.body.style.overflow = "";
  }

  syllabusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button);
    });
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
}

function setupCourseSearchFilter() {
  const grid = document.querySelector(".courses-grid");
  const searchInput = document.getElementById("courseSearchInput");
  const durationSelect = document.getElementById("courseDurationFilter");
  const feeSelect = document.getElementById("courseFeeFilter");
  const sortSelect = document.getElementById("courseSortFilter");
  const resetButton = document.getElementById("coursesFilterReset");
  const countText = document.getElementById("coursesFilterCount");
  const noResultText = document.getElementById("coursesNoResult");

  if (!grid || !searchInput || !durationSelect || !feeSelect || !sortSelect || !resetButton || !countText || !noResultText) {
    return;
  }

  const cards = Array.from(grid.querySelectorAll(".course-card"));
  if (cards.length === 0) {
    return;
  }

  function parseDuration(durationText) {
    const lower = durationText.toLowerCase();
    const monthsMatch = lower.match(/(\d+)\s*month/);
    const yearsMatch = lower.match(/(\d+)\s*year/);

    if (monthsMatch) {
      return Number(monthsMatch[1]);
    }
    if (yearsMatch) {
      return Number(yearsMatch[1]) * 12;
    }
    return null;
  }

  function parseFee(feeText) {
    const digits = feeText.replace(/[^\d]/g, "");
    return digits ? Number(digits) : null;
  }

  function normalizeText(value) {
    return value.toLowerCase().replace(/\s+/g, " ").trim();
  }

  const courseData = cards.map((card, index) => {
    const title = card.querySelector("h3")?.textContent?.trim() || "";
    const lines = Array.from(card.querySelectorAll("p"));
    const durationText = lines[0]?.textContent?.replace(/^Duration:\s*/i, "").trim() || "";
    const feeText = lines[1]?.textContent?.replace(/^Fee:\s*/i, "").trim() || "";

    return {
      card,
      index,
      title,
      searchableText: normalizeText(`${title} ${durationText} ${feeText}`),
      duration: parseDuration(durationText),
      durationRaw: normalizeText(durationText),
      fee: parseFee(feeText)
    };
  });

  function matchesDurationFilter(item, filterValue) {
    if (filterValue === "all") {
      return true;
    }
    if (filterValue === "module") {
      return item.durationRaw.includes("module");
    }
    if (filterValue === "contact") {
      return item.durationRaw.includes("contact");
    }
    if (!Number.isNaN(Number(filterValue))) {
      return item.duration === Number(filterValue);
    }
    return true;
  }

  function matchesFeeFilter(item, filterValue) {
    if (filterValue === "all") {
      return true;
    }
    if (filterValue === "contact") {
      return item.fee === null;
    }
    if (item.fee === null) {
      return false;
    }
    if (filterValue === "upto3000") {
      return item.fee <= 3000;
    }
    if (filterValue === "3001to6000") {
      return item.fee >= 3001 && item.fee <= 6000;
    }
    if (filterValue === "6001to10000") {
      return item.fee >= 6001 && item.fee <= 10000;
    }
    if (filterValue === "10001plus") {
      return item.fee >= 10001;
    }
    return true;
  }

  function sortItems(items, sortValue) {
    const sorted = [...items];

    const numericAsc = (a, b, key) => {
      const left = a[key] ?? Number.POSITIVE_INFINITY;
      const right = b[key] ?? Number.POSITIVE_INFINITY;
      return left - right;
    };

    const numericDesc = (a, b, key) => {
      const left = a[key] ?? Number.NEGATIVE_INFINITY;
      const right = b[key] ?? Number.NEGATIVE_INFINITY;
      return right - left;
    };

    if (sortValue === "name-asc") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === "fee-asc") {
      sorted.sort((a, b) => numericAsc(a, b, "fee"));
    } else if (sortValue === "fee-desc") {
      sorted.sort((a, b) => numericDesc(a, b, "fee"));
    } else if (sortValue === "duration-asc") {
      sorted.sort((a, b) => numericAsc(a, b, "duration"));
    } else if (sortValue === "duration-desc") {
      sorted.sort((a, b) => numericDesc(a, b, "duration"));
    } else {
      sorted.sort((a, b) => a.index - b.index);
    }

    return sorted;
  }

  function applyFilters() {
    const searchTerm = normalizeText(searchInput.value || "");
    const durationValue = durationSelect.value;
    const feeValue = feeSelect.value;
    const sortValue = sortSelect.value;

    const filtered = courseData.filter((item) => {
      const matchSearch = !searchTerm || item.searchableText.includes(searchTerm);
      const matchDuration = matchesDurationFilter(item, durationValue);
      const matchFee = matchesFeeFilter(item, feeValue);
      return matchSearch && matchDuration && matchFee;
    });

    const sortedFiltered = sortItems(filtered, sortValue);
    const hiddenItems = courseData.filter((item) => !filtered.includes(item));
    const ordered = [...sortedFiltered, ...hiddenItems];
    const visibleSet = new Set(filtered);

    ordered.forEach((item) => {
      grid.appendChild(item.card);
      item.card.hidden = !visibleSet.has(item);
    });

    countText.textContent = `Showing ${filtered.length} of ${courseData.length} courses`;
    noResultText.hidden = filtered.length !== 0;
  }

  searchInput.addEventListener("input", applyFilters);
  durationSelect.addEventListener("change", applyFilters);
  feeSelect.addEventListener("change", applyFilters);
  sortSelect.addEventListener("change", applyFilters);

  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    durationSelect.value = "all";
    feeSelect.value = "all";
    sortSelect.value = "default";
    applyFilters();
  });

  applyFilters();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeDrivePreviewLink(rawLink) {
  if (typeof rawLink !== "string") {
    return "";
  }

  const trimmed = rawLink.trim();
  if (!trimmed || trimmed.includes("REPLACE_")) {
    return "";
  }

  const directPreviewPattern = /^https:\/\/drive\.google\.com\/file\/d\/[a-zA-Z0-9_-]+\/preview/i;
  if (directPreviewPattern.test(trimmed)) {
    return trimmed;
  }

  const fileIdMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]{10,})/) || trimmed.match(/[?&]id=([a-zA-Z0-9_-]{10,})/);
  if (!fileIdMatch) {
    return "";
  }

  return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
}

function setupNotebookLibrary() {
  const grid = document.getElementById("notebookGrid");
  const countText = document.getElementById("notebookCount");
  const statusText = document.getElementById("notebookStatus");
  const viewer = document.getElementById("notebookViewer");
  const viewerTitle = document.getElementById("notebookViewerTitle");
  const viewerFrame = document.getElementById("notebookFrame");
  const viewerBack = document.getElementById("notebookViewerBack");
  const viewerClose = document.getElementById("notebookViewerClose");

  if (!grid) {
    return;
  }

  const notebookItems = notebookCatalog.map((item) => ({
    ...item,
    previewLink: normalizeDrivePreviewLink(item.driveLink)
  }));

  grid.innerHTML = notebookItems
    .map(
      (item) => `
      <article class="course-card notebook-card">
        <h3>${escapeHtml(item.course)}</h3>
        <p>${escapeHtml(item.description || "Course-wise notebook for revision and practical work.")}</p>
        <div class="course-actions">
          <button class="btn btn-secondary notebook-open-btn" type="button" data-course="${escapeHtml(item.course)}" data-link="${escapeHtml(item.previewLink)}">
            Open Notebook
          </button>
        </div>
      </article>
    `
    )
    .join("");

  if (countText) {
    countText.textContent = `Showing ${notebookItems.length} notebooks`;
  }

  if (!viewer || !viewerTitle || !viewerFrame || !viewerBack || !viewerClose) {
    return;
  }

  function setNotebookStatus(message, isError) {
    if (!statusText) {
      return;
    }
    statusText.textContent = message;
    statusText.className = `notebook-status${isError ? " error" : ""}`;
  }

  function openViewer(courseName, previewLink) {
    if (!previewLink) {
      setNotebookStatus("Notebook link is pending. Add the Google Drive embed link in js/main.js.", true);
      return;
    }

    setNotebookStatus("", false);
    viewerTitle.textContent = `${courseName} - Notebook`;
    viewerFrame.src = previewLink;
    viewer.classList.add("show");
    viewer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeViewer() {
    viewer.classList.remove("show");
    viewer.setAttribute("aria-hidden", "true");
    viewerFrame.src = "about:blank";
    document.body.style.overflow = "";
  }

  grid.querySelectorAll(".notebook-open-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const courseName = button.getAttribute("data-course") || "Course";
      const previewLink = button.getAttribute("data-link") || "";
      openViewer(courseName, previewLink);
    });
  });

  viewerBack.addEventListener("click", closeViewer);
  viewerClose.addEventListener("click", closeViewer);

  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
      closeViewer();
    }
  });

  viewer.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  document.addEventListener("keydown", (event) => {
    const isViewerOpen = viewer.classList.contains("show");
    if (!isViewerOpen) {
      return;
    }

    const key = event.key.toLowerCase();
    if (event.key === "Escape") {
      closeViewer();
      return;
    }
    if ((event.ctrlKey || event.metaKey) && (key === "p" || key === "s")) {
      event.preventDefault();
    }
  });
}

function validateEnquiryData(fullName, mobile, email, course, message) {
  const mobilePattern = /^\d{10}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (fullName.length < 3) {
    return "Please enter a valid full name.";
  }
  if (!mobilePattern.test(mobile)) {
    return "Please enter a valid 10-digit mobile number.";
  }
  if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  }
  if (!course) {
    return "Please select a course.";
  }
  return "";
}

function sendEnquiryToWhatsApp(fullName, mobile, email, course, message, sourceLabel) {
  const messageText = message || "Not provided";
  const enquiryMessage = [
    "New Admission Enquiry - iCat Compuer Academy",
    `Source: ${sourceLabel}`,
    `Full Name: ${fullName}`,
    `Mobile Number: ${mobile}`,
    `Email: ${email}`,
    `Course Interested: ${course}`,
    `Message: ${messageText}`
  ].join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_ENQUIRY_NUMBER}?text=${encodeURIComponent(enquiryMessage)}`;
  const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  if (!popup) {
    window.location.href = whatsappUrl;
  }
}

function setupFormValidation() {
  const form = document.getElementById("enquiryForm");
  const status = document.getElementById("formStatus");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("courseInterested").value;
    const message = document.getElementById("message").value.trim();

    const error = validateEnquiryData(fullName, mobile, email, course, message);

    if (error) {
      status.textContent = error;
      status.className = "form-status error";
      return;
    }

    sendEnquiryToWhatsApp(fullName, mobile, email, course, message, "Admission Page");

    status.textContent = "Thank you! WhatsApp is opening with your enquiry details.";
    status.className = "form-status success";
    form.reset();
  });
}

function setupQuickEnquiryPopup() {
  const openButton = document.getElementById("heroEnquireBtn");
  const modal = document.getElementById("quickEnquiryModal");
  const closeButton = document.getElementById("quickEnquiryClose");
  const form = document.getElementById("quickEnquiryForm");
  const status = document.getElementById("quickFormStatus");

  if (!openButton || !modal || !closeButton || !form || !status) {
    return;
  }

  function openModal() {
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    status.textContent = "";
    status.className = "form-status";
  }

  openButton.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("quickFullName").value.trim();
    const mobile = document.getElementById("quickMobile").value.trim();
    const email = document.getElementById("quickEmail").value.trim();
    const course = document.getElementById("quickCourseInterested").value;
    const message = document.getElementById("quickMessage").value.trim();

    const error = validateEnquiryData(fullName, mobile, email, course, message);

    if (error) {
      status.textContent = error;
      status.className = "form-status error";
      return;
    }

    sendEnquiryToWhatsApp(fullName, mobile, email, course, message, "Home Hero Popup");

    status.textContent = "Thank you! WhatsApp is opening with your enquiry details.";
    status.className = "form-status success";
    form.reset();
    closeModal();
  });
}

function setupCourseEnquiryPopup() {
  const modal = document.getElementById("courseEnquiryModal");
  const closeButton = document.getElementById("courseEnquiryClose");
  const form = document.getElementById("courseEnquiryForm");
  const status = document.getElementById("courseEnqStatus");
  const courseSelect = document.getElementById("courseEnqInterested");
  const triggers = document.querySelectorAll(".course-enquire");
  const courseCards = document.querySelectorAll(".course-card");

  if (!modal || !closeButton || !form || !status || !courseSelect || (triggers.length === 0 && courseCards.length === 0)) {
    return;
  }

  function setCourseValue(courseName) {
    const options = Array.from(courseSelect.options).map((option) => option.value);
    courseSelect.value = options.includes(courseName) ? courseName : "";
  }

  function openModal(courseName) {
    setCourseValue(courseName);
    status.textContent = "";
    status.className = "form-status";
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const courseName = trigger.closest(".course-card")?.querySelector("h3")?.textContent?.trim() || "";
      openModal(courseName);
    });
  });

  courseCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".course-syllabus-btn, .course-enquire, button, a")) {
        return;
      }
      const courseName = card.querySelector("h3")?.textContent?.trim() || "";
      openModal(courseName);
    });
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("courseEnqFullName").value.trim();
    const mobile = document.getElementById("courseEnqMobile").value.trim();
    const email = document.getElementById("courseEnqEmail").value.trim();
    const course = courseSelect.value;
    const message = document.getElementById("courseEnqMessage").value.trim();

    const error = validateEnquiryData(fullName, mobile, email, course, message);

    if (error) {
      status.textContent = error;
      status.className = "form-status error";
      return;
    }

    sendEnquiryToWhatsApp(fullName, mobile, email, course, message, "Courses Page Popup");

    status.textContent = "Thank you! WhatsApp is opening with your enquiry details.";
    status.className = "form-status success";
    form.reset();
    closeModal();
  });
}

function setupInteractionRestrictions() {
  const preventAction = (event) => {
    event.preventDefault();
  };

  document.addEventListener("contextmenu", preventAction);
  document.addEventListener("copy", preventAction);
  document.addEventListener("cut", preventAction);
  document.addEventListener("paste", preventAction);
  document.addEventListener("selectstart", preventAction);
  document.addEventListener("dragstart", preventAction);

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const blockedKeys = ["a", "c", "v", "x", "p", "s"];
    if ((event.ctrlKey || event.metaKey) && blockedKeys.includes(key)) {
      event.preventDefault();
    }
  });
}

function initCommonLayout() {
  const headerRoot = document.getElementById("site-header");
  const footerRoot = document.getElementById("site-footer");

  if (headerRoot) {
    headerRoot.innerHTML = buildHeader();
  }

  if (footerRoot) {
    footerRoot.innerHTML = buildFooter();
    const year = document.getElementById("year");
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupInteractionRestrictions();
  initCommonLayout();
  setupTheme();
  setupCursorTrail();
  setupMobileMenu();
  setupLightbox();
  setupCourseSyllabusPopup();
  setupCourseSearchFilter();
  setupNotebookLibrary();
  setupFormValidation();
  setupQuickEnquiryPopup();
  setupCourseEnquiryPopup();
});
