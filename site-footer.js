
(() => {
    const footer = document.getElementById("site-footer");

    if (!footer) return;

    footer.innerHTML = `
    <footer class="main-footer">
      <div class="main-container">

        <div class="main-footer__upper">

          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>

            <div class="main-footer__social-cont">
              <a
                href="https://www.linkedin.com/in/julian-jaako-ahlberger/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  class="main-footer__icon"
                  src="/assets/png/linkedin-ico.png"
                  alt="LinkedIn"
                />
              </a>

              <a
                href="https://olaf-firebeard.itch.io"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Itch.io"
              >
                <img
                  class="main-footer__icon"
                  src="/assets/png/itch-io-logo.png"
                  alt="Itch.io"
                />
              </a>
            </div>
          </div>

          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">
              Julian Jaako Ahlberger
            </h4>

            <p class="main-footer__short-desc">
              E-mail:
              <a href="mailto:jaako.julian@gmail.com">
                <strong>jaako.julian@gmail.com</strong>
              </a>
            </p>
          </div>

        </div>

        <div class="main-footer__lower">
          &copy; Copyright 2021. Made by
          <a
            href="https://rammaheshwari.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ram Maheshwari
          </a>
        </div>

      </div>
    </footer>
  `;
})();