const elements = document.querySelectorAll(
    '.case-section, .case-split, .case-full-image'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

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