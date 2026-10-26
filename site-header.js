
(() => {

    document.querySelectorAll('link[rel~="icon"]')
        .forEach(icon => icon.remove());

    const favicon = document.createElement("link");

    favicon.rel = "icon";
    favicon.type = "image/svg+xml";
    favicon.href = "/assets/svg/favicon.svg";

    document.head.appendChild(favicon);
    
    // All navigation links are defined in one place.
    const navigation = [
        { label: "Home", href: "/index.html" },
        { label: "Featured Work", href: "/index.html#featured-work" },
        { label: "About Me", href: "/index.html#about" },
        { label: "Other Projects", href: "/index.html#other-projects" },
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
            <span class="header__initials" aria-hidden="true">[JA]</span>
          </div>
          <span class="header__logo-sub">
            Julian Jaako Ahlberger
          </span>
        </a>

        <div class="header__main">
          <ul class="header__links">
            ${desktopLinks}
          </ul>

          <button
          type="button"
          class="header__main-ham-menu-cont"
          aria-label="Toggle navigation"
          aria-expanded="false"
          aria-controls="mobile-navigation"
          >
          
          <img
            src="/assets/svg/ham-menu.svg"
            alt=""
            class="header__main-ham-menu"
          />
        
          <img
            src="/assets/svg/ham-menu-close.svg"
            alt=""
            class="header__main-ham-menu-close d-none"
          />
        </button>
        </div>
      </div>

      <div class="header__sm-menu" id="mobile-navigation">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            ${mobileLinks}
          </ul>
        </div>
      </div>
    </header>
  `;

    // ------------------------------------
// Mobile menu functionality
// ------------------------------------

    const menuButton = header.querySelector(
        ".header__main-ham-menu-cont"
    );

    const mobileMenu = header.querySelector(
        ".header__sm-menu"
    );

    const openIcon = header.querySelector(
        ".header__main-ham-menu"
    );

    const closeIcon = header.querySelector(
        ".header__main-ham-menu-close"
    );

// Keep the menu and button state synchronized.
    function setMenuOpen(isOpen) {
        mobileMenu.classList.toggle(
            "header__sm-menu--active",
            isOpen
        );

        openIcon.classList.toggle("d-none", isOpen);
        closeIcon.classList.toggle("d-none", !isOpen);

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    }

// Toggle when the hamburger is pressed.
    menuButton.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.contains(
            "header__sm-menu--active"
        );

        setMenuOpen(!isOpen);
    });

// Close when a navigation link is selected.
    header.querySelectorAll(".header__sm-menu-link a")
        .forEach(link => {
            link.addEventListener("click", () => {
                setMenuOpen(false);
            });
        });

// Allow Escape to close the menu.
    document.addEventListener("keydown", event => {
        if (
            event.key === "Escape" &&
            mobileMenu.classList.contains("header__sm-menu--active")
        ) {
            setMenuOpen(false);
            menuButton.focus();
        }
    });
    
// ------------------------------------
// Active navigation link
// ------------------------------------

    const navLinks = header.querySelectorAll(
        ".header__link, .header__sm-menu-link a"
    );

    function updateActiveNavigation() {

        const onHomepage =
            window.location.pathname === "/" ||
            window.location.pathname.endsWith("/index.html");

        const currentDestination = onHomepage
            ? "/index.html" + window.location.hash
            : null;

        navLinks.forEach(link => {

            const isActive =
                currentDestination !== null &&
                link.getAttribute("href") === currentDestination;

            link.classList.toggle("header__link--active", isActive);

            if (isActive) {
                link.setAttribute(
                    "aria-current",
                    window.location.hash ? "location" : "page"
                );
            } else {
                link.removeAttribute("aria-current");
            }

        });
    }

    updateActiveNavigation();

    window.addEventListener(
        "hashchange",
        updateActiveNavigation
    );

})();
