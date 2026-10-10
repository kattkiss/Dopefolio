
(() => {
    // All navigation links are defined in one place.
    const navigation = [
        { label: "Home", href: "/index.html" },
        { label: "Featured Work", href: "/index.html#featured-work" },
        { label: "About", href: "/index.html#about" },
        { label: "More Projects", href: "/index.html#other-projects" },
        { label: "Contact", href: "/index.html#contact" }
    ];

    // Generate desktop navigation links.
    const desktopLinks = navigation.map(item => `
    <li class="header__link-wrapper">
      <a href="${item.href}" class="header__link">
        ${item.label}
      </a>
    </li>
  `).join("");

    // Generate mobile navigation links.
    const mobileLinks = navigation.map(item => `
    <li class="header__sm-menu-link">
      <a href="${item.href}">
        ${item.label}
      </a>
    </li>
  `).join("");

    const header = document.getElementById("site-header");

    if (!header) return;

    header.innerHTML = `
    <header class="header">
      <div class="header__content">

        <a href="/index.html" class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src="/assets/png/headshot.png"
              alt="Julian Jaako Ahlberger"
              class="header__logo-img"
            />
          </div>
          <span class="header__logo-sub">
            Julian Jaako Ahlberger
          </span>
        </a>

        <div class="header__main">
          <ul class="header__links">
            ${desktopLinks}
          </ul>

          <div class="header__main-ham-menu-cont">
            <img
              src="/assets/svg/ham-menu.svg"
              alt="Open menu"
              class="header__main-ham-menu"
            />
            <img
              src="/assets/svg/ham-menu-close.svg"
              alt="Close menu"
              class="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>

      <div class="header__sm-menu">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            ${mobileLinks}
          </ul>
        </div>
      </div>
    </header>
  `;
})();
