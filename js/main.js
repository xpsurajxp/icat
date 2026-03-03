const THEME_KEY = "icat-theme";

const navItems = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "courses.html", label: "Courses" },
  { href: "gallery.html", label: "Gallery" },
  { href: "contact.html", label: "Contact Us" },
  { href: "admission.html", label: "Admission" }
];

function getCurrentPage() {
  const current = window.location.pathname.split("/").pop();
  return current || "index.html";
}

function buildHeader() {
  const currentPage = getCurrentPage();
  const menu = navItems
    .map(
      ({ href, label }) =>
        `<li><a class="nav-link ${currentPage === href ? "active" : ""}" href="${href}">${label}</a></li>`
    )
    .join("");

  return `
    <header class="site-header">
      <div class="header-strip">
        <div class="container strip-inner">
          <p>Hyderganj Market, Ayodhya</p>
          <div class="strip-links">
            <a href="tel:8808800266">8808800266</a>
            <a href="mailto:xpsurajxp@gmail.com">xpsurajxp@gmail.com</a>
          </div>
        </div>
      </div>
      <div class="container nav-wrap">
        <a class="logo" href="index.html" aria-label="iCat Compuer Academy Home">
          <img class="logo-img" src="assets/logo.png" alt="iCat Compuer Academy Logo" />
          <span class="logo-text">
            <span class="logo-title">iCat Compuer Academy</span>
            <span class="logo-subtitle">Unlock your digital potential</span>
          </span>
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
            <h3>Quick Links</h3>
            <p><a href="about.html">About Institute</a></p>
            <p><a href="courses.html">Courses</a></p>
            <p><a href="admission.html">Admission</a></p>
          </article>
          <article class="footer-card">
            <h3>Address</h3>
            <p>Hyderganj Market, Ayodhya</p>
          </article>
          <article class="footer-card">
            <h3>Phone</h3>
            <p><a href="tel:8808800266">8808800266</a></p>
            <p><a href="tel:8808807636">8808807636</a></p>
          </article>
          <article class="footer-card">
            <h3>Email</h3>
            <p><a href="mailto:xpsurajxp@gmail.com">xpsurajxp@gmail.com</a></p>
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

    const mobilePattern = /^\d{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let error = "";

    if (fullName.length < 3) {
      error = "Please enter a valid full name.";
    } else if (!mobilePattern.test(mobile)) {
      error = "Please enter a valid 10-digit mobile number.";
    } else if (!emailPattern.test(email)) {
      error = "Please enter a valid email address.";
    } else if (!course) {
      error = "Please select a course.";
    } else if (message.length < 10) {
      error = "Please enter a message with at least 10 characters.";
    }

    if (error) {
      status.textContent = error;
      status.className = "form-status error";
      return;
    }

    status.textContent = "Thank you! Your enquiry has been submitted successfully.";
    status.className = "form-status success";
    form.reset();
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
  initCommonLayout();
  setupTheme();
  setupCursorTrail();
  setupMobileMenu();
  setupLightbox();
  setupCourseSyllabusPopup();
  setupFormValidation();
});
