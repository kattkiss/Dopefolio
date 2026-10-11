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

  let index = 0;

  function show(i) {
    index = (i + thumbs.length) % thumbs.length;

    mainImg.src = thumbs[index].src;

    thumbs.forEach(t => t.classList.remove("active"));
    thumbs[index].classList.add("active");
  }

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => show(i));
  });

  next.addEventListener("click", () => show(index + 1));
  prev.addEventListener("click", () => show(index - 1));

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