// ═══════════════════════════════════════════════════════════
// TDCM — Hash-based SPA Router
// ═══════════════════════════════════════════════════════════

const routes = [];
let notFoundHandler = null;

export function addRoute(pattern, handler) {
  // Convert pattern like '/services/:slug' to regex
  const paramNames = [];
  const regexStr = pattern
    .replace(/:([^/]+)/g, (_, name) => {
      paramNames.push(name);
      return '([^/]+)';
    });
  routes.push({
    pattern,
    regex: new RegExp(`^${regexStr}$`),
    paramNames,
    handler
  });
}

export function setNotFound(handler) {
  notFoundHandler = handler;
}

export function navigate(path) {
  window.location.hash = '#' + path;
}

export function getPath() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

function matchRoute(path) {
  for (const route of routes) {
    const match = path.match(route.regex);
    if (match) {
      const params = {};
      route.paramNames.forEach((name, i) => {
        params[name] = match[i + 1];
      });
      return { handler: route.handler, params };
    }
  }
  return null;
}

export function handleRoute() {
  const path = getPath();
  const container = document.getElementById('page-content');
  const navbar = document.getElementById('navbar');
  const footer = document.getElementById('site-footer');

  // Hide navbar/footer on admin routes
  const isAdmin = path.startsWith('/admin');
  if (navbar) navbar.style.display = isAdmin ? 'none' : '';
  if (footer) footer.style.display = isAdmin ? 'none' : '';

  if (isAdmin) {
    document.body.style.margin = '0';
    document.body.style.background = '#F1F5F9';
  } else {
    document.body.style.margin = '';
    document.body.style.background = '';
  }

  // Scroll to top
  window.scrollTo(0, 0);

  const result = matchRoute(path);
  if (result) {
    container.innerHTML = '';
    container.innerHTML = result.handler(result.params);
  } else if (notFoundHandler) {
    container.innerHTML = notFoundHandler();
  } else {
    container.innerHTML = `
      <div class="page-hero">
        <div class="container">
          <h1>404 — Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <a href="#/" class="btn btn-white" style="margin-top:24px">Back to Home</a>
        </div>
      </div>`;
  }

  // Re-initialize scroll animations
  initScrollAnimations();

  // Update active nav link
  updateActiveNav(path);
}

function updateActiveNav(path) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('data-path');
    if (href && (path === href || (href !== '/' && path.startsWith(href)))) {
      link.classList.add('active');
    }
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Animate stat counters
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('[data-count]').forEach(el => {
    counterObserver.observe(el);
  });
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const prefix = el.getAttribute('data-prefix') || '';
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(target * eased);
    el.textContent = prefix + current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
