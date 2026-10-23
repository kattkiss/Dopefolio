/* ==========================================
   SCROLL REVEAL ANIMATIONS
   ========================================== */

const revealSelectors = [

  // Existing case study elements
  ".case-section",
  ".case-split",
  ".case-full-image",

  // Featured Work
  ".featured-work .heading-sec__main",
  ".featured-work .heading-sec__sub",
  ".featured-work .projects__row-img-cont",
  ".featured-work .projects__specialty",
  ".featured-work .projects__row-content-title",
  ".featured-work .projects__row-content-desc",
  ".featured-work .skills__skill",
  ".featured-work .projects__row-content > .btn",

  // About Me
  ".about .heading-sec__main",
  ".about .about__content-title",
  ".about .about__content-details-para",
  ".about .about__content-main > .btn",
  ".about .skills__skill",
  ".about .education-timeline__item",

  // Other Projects
  "#other-projects .heading-sec__main",
  "#other-projects .other-project-card",

  // Contact
  "#contact .heading-sec__main",
  "#contact .heading-sec__sub",
  "#contact .contact__form-field",
  "#contact .contact__btn"
    
];

/* ==========================================
   CASE STUDY SCROLL REVEALS
   ========================================== */

revealSelectors.push(

    // ------------------------------------
    // THE SHOE
    // ------------------------------------

    ".shoe-case-study .shoe-section__heading",
    ".shoe-case-study .shoe-section > .shoe-copy",
    ".shoe-case-study .shoe-feature-media",
    ".shoe-case-study .shoe-contributions > div",
    ".shoe-case-study .shoe-callout",

    // Gameplay systems
    ".shoe-case-study .shoe-system__header",
    ".shoe-case-study .shoe-system__rows > div",
    ".shoe-case-study .shoe-system > .gallery",
    ".shoe-case-study .shoe-intox-gallery",

    // Technical work
    ".shoe-case-study .shoe-tech-feature > .shoe-section__index",
    ".shoe-case-study .shoe-tech-feature > h3",
    ".shoe-case-study .shoe-tech-feature > p",
    ".shoe-case-study .shoe-architecture",
    ".shoe-case-study .shoe-checkpoint > li",

    // Additional visual breakdowns
    ".shoe-case-study .shoe-spectrum",
    ".shoe-case-study .shoe-qte-comparison",
    ".shoe-case-study .shoe-flow__lane",
    ".shoe-case-study .shoe-save-flow__phase",
    ".shoe-case-study .shoe-shader-compare__card",

    // Reflections and conclusion
    ".shoe-case-study .shoe-testing > div",
    ".shoe-case-study .shoe-detail-list > div",
    ".shoe-case-study .shoe-bottom-cta",

    // ------------------------------------
    // SQUEAK N' SERVE
    // ------------------------------------

    ".squeak-case-study .case-study-section__heading",
    ".squeak-case-study .case-study-section > .case-study-copy",
    ".squeak-case-study .video-wrapper",
    ".squeak-case-study .case-study-contributions > div",
    ".squeak-case-study .case-study-callout",

    // Gameplay systems
    ".squeak-case-study .squeak-loop__caption",
    ".squeak-case-study .squeak-loop__step",
    ".squeak-case-study .squeak-loop__takeaway",
    ".squeak-case-study .case-study-system__header",
    ".squeak-case-study .case-study-system__rows > div",
    ".squeak-case-study .case-study-system__example",
    ".squeak-case-study .case-study-recipe",
    ".squeak-case-study .squeak-cooking-stations__station",
    ".squeak-case-study .squeak-grades",

    // Iterations and concepts
    ".squeak-case-study .squeak-grading-iteration__comparison > div",
    ".squeak-case-study .squeak-grading-iteration__image",
    ".squeak-case-study .squeak-concept",

    // Onboarding, playtesting and reflections
    ".squeak-case-study .squeak-onboarding__steps > div",
    ".squeak-case-study .squeak-onboarding__feedback",
    ".squeak-case-study .squeak-testing__card",
    ".squeak-case-study .squeak-testing__response",
    ".squeak-case-study .squeak-vfx__examples > div",
    ".squeak-case-study .squeak-reflections > div",
    ".squeak-case-study .case-study-bottom-cta",
    
    // ------------------------------------
    // POST VOID
    // ------------------------------------

    ".postvoid-case-study .case-study-section__heading",
    ".postvoid-case-study .case-study-section > .case-study-copy",
    ".postvoid-case-study .video-wrapper",
    ".postvoid-case-study .postvoid-contributions > div",
    ".postvoid-case-study .case-study-callout",

    // Design vision and gameplay
    ".postvoid-case-study .postvoid-vision__subtitle",
    ".postvoid-case-study .postvoid-vision__principles > div",
    ".postvoid-case-study .postvoid-decision",
    ".postvoid-case-study .postvoid-gameplay-demo",
    ".postvoid-case-study .postvoid-gameplay-note",

    // Movement and level design
    ".postvoid-case-study .postvoid-movement-demo",
    ".postvoid-case-study .postvoid-movement-logic",
    ".postvoid-case-study .postvoid-movement-note",
    ".postvoid-case-study .gallery",
    ".postvoid-case-study .postvoid-level__takeaway",

    // Technical work and reflections
    ".postvoid-case-study .postvoid-technical-challenge",
    ".postvoid-case-study .postvoid-reflections > article",

    // Post Void — Closing CTA
    ".postvoid-case-study .case-study-bottom-cta",
    
    // Twilight Tropics
    ".twilight-case-study .case-study-section__heading",
    ".twilight-case-study .case-study-copy",
    ".twilight-case-study .twilight-vision__map",
    ".twilight-case-study .case-study-callout",
    ".twilight-case-study .twilight-vision__principles > div",
    ".twilight-case-study .twilight-area-card",
    ".twilight-case-study .twilight-structure__note",

    // Twilight Tropics — Player Choice
    ".twilight-case-study .twilight-route__checkpoint",
    ".twilight-case-study .twilight-route__choice",
    ".twilight-case-study .twilight-route__gallery-title",
    ".twilight-case-study .twilight-route .gallery",
    ".twilight-case-study .twilight-route__outcome",
    ".twilight-case-study .twilight-route__next > div",
    ".twilight-case-study .twilight-route__takeaway",

    // Twilight Tropics — Supporting Areas
    ".twilight-case-study .twilight-support__heading",
    ".twilight-case-study .twilight-support__options > div",
    ".twilight-case-study .twilight-support__area .gallery",

    // Twilight Tropics — Reflections
    ".twilight-case-study .twilight-reflection__card",
    ".twilight-case-study .twilight-reflection__takeaway",

    // Twilight Tropics — Overview
    ".twilight-case-study #overview .video-wrapper",
    ".twilight-case-study #overview .case-study-contributions > div",
    
    // Twilight Tropics — Closing CTA
    ".twilight-case-study .case-study-bottom-cta",
    
    // ------------------------------------
    // ESCORT GAME
    // ------------------------------------

    ".escort-case-study .case-study-section__heading",
    ".escort-case-study .case-study-section > .case-study-copy",
    ".escort-case-study .escort-overview__image",
    ".escort-case-study .case-study-callout",
    ".escort-case-study .escort-overview__role",

    // Escort Game — Asymmetric Roles
    ".escort-case-study .escort-role__heading",
    ".escort-case-study .escort-role__media > figure",
    ".escort-case-study .escort-role__details > div",
    
    // Escort Game — Cooperative Loop
    ".escort-case-study .escort-loop__npc",
    ".escort-case-study .escort-loop__encounters",
    ".escort-case-study .escort-loop__outcomes > article",

    // Escort Game — Technical Implementation
    ".escort-case-study .escort-tech__feature",
    ".escort-case-study .escort-tech__tradeoff",

    // Escort Game — Reflections
    ".escort-case-study .escort-reflection__card",
    ".escort-case-study .escort-reflection__next",
    ".escort-case-study .case-study-bottom-cta",

);

const revealElements = document.querySelectorAll(
    revealSelectors.join(",")
);

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {

  const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");

          // Reveal only once
          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
      }
  );

  revealElements.forEach(element => {

    element.classList.add("fade-in");
    revealObserver.observe(element);

  });
}

document.querySelectorAll(".gallery").forEach(gallery => {

  const mainImg = gallery.querySelector(".gallery-image");
  const thumbs = gallery.querySelectorAll(".gallery-thumbs img");
  const next = gallery.querySelector(".next");
  const prev = gallery.querySelector(".prev");
  const captionTitle = gallery.querySelector(".shoe-intox-gallery__caption-title");
  const captionDescription = gallery.querySelector(".shoe-intox-gallery__caption-description");

  if (!mainImg || !thumbs.length || !next || !prev) {
    console.warn("Gallery is missing required elements.", gallery);
    return;
  }

  let index = 0;

  function show(i) {

    index = (i + thumbs.length) % thumbs.length;

    const selectedThumb = thumbs[index];

    mainImg.src = selectedThumb.src;

    const galleryName =
        gallery.getAttribute("aria-label") || "Image gallery";

    mainImg.alt = selectedThumb.dataset.alt ||
        `${galleryName}, image ${index + 1} of ${thumbs.length}`;
    
    if (captionTitle && selectedThumb.dataset.title) {
      captionTitle.textContent = selectedThumb.dataset.title;
    }

    if (captionDescription && selectedThumb.dataset.description) {
      captionDescription.textContent =
          selectedThumb.dataset.description;
    }
    
    thumbs.forEach((thumb, thumbIndex) => {

      const isSelected = thumbIndex === index;

      thumb.classList.toggle("active", isSelected);

      const control = thumb.closest("button") || thumb;

      control.setAttribute(
          "aria-pressed",
          String(isSelected)
      );

    });
  }


  thumbs.forEach((thumb, i) => {

    // Use the real button when one exists.
    // Otherwise, make the image itself interactive.
    const control = thumb.closest("button") || thumb;

    const label = thumb.dataset.title ||
        `image ${i + 1} of ${thumbs.length}`;

    control.setAttribute("aria-label", `Show ${label}`);

    if (control === thumb) {

      thumb.tabIndex = 0;
      thumb.setAttribute("role", "button");

      thumb.addEventListener("keydown", event => {

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          show(i);
        }

      });
    }

    control.addEventListener("click", () => show(i));
  });

  next.addEventListener("click", () => show(index + 1));
  prev.addEventListener("click", () => show(index - 1));
  show(0);
  
  // swipe support
  let startX = 0;

  mainImg.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  mainImg.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) show(index + 1);
    if (endX - startX > 50) show(index - 1);
  });

});

document.querySelectorAll(".project-preview").forEach(preview => {

  const video = preview.querySelector(".project-preview__video");
  const button = preview.querySelector(".project-preview__toggle");
  const link = preview.querySelector(".project-preview__link");

  if (!video || !button || !link) return;

  // Update the visual state.
  function updateState(isPlaying) {
    preview.classList.toggle("is-playing", isPlaying);

    button.textContent = isPlaying ? "❚❚ Pause" : "▶ Preview";

    button.setAttribute(
        "aria-label",
        isPlaying ? "Pause gameplay preview" : "Play gameplay preview"
    );

    button.setAttribute("aria-pressed", String(isPlaying));
  }

  // Start video playback.
  async function playPreview() {
    try {
      await video.play();
      updateState(true);
    } catch (error) {
      console.error("Video preview failed:", error);
      updateState(false);
    }
  }

  // Stop playback and reset the video.
  function stopPreview() {
    video.pause();

    if (video.readyState > 0) {
      video.currentTime = 0;
    }

    updateState(false);
  }

  // Play or pause using the button.
  button.addEventListener("click", () => {
    if (preview.classList.contains("is-playing")) {
      stopPreview();
    } else {
      playPreview();
    }
  });

  // Enable hover playback on desktop.
  const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
  ).matches;

  const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
  ).matches;

  if (canHover && !reducedMotion) {
    preview.addEventListener("mouseenter", playPreview);
    preview.addEventListener("mouseleave", stopPreview);
  }

  // Keyboard users can also preview the video.
  if (!reducedMotion) {
    link.addEventListener("focus", playPreview);
    link.addEventListener("blur", stopPreview);
  }

  // Stop the video when switching browser tabs.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopPreview();
    }
  });
});