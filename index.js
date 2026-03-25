// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

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

const mainImg = document.querySelector('.gallery-carousel__main-img');
const thumbs = document.querySelectorAll('.gallery-carousel__thumb');
const prevBtn = document.querySelector('.gallery-carousel__nav--prev');
const nextBtn = document.querySelector('.gallery-carousel__nav--next');

let currentIndex = 0;

function updateMainImage(index) {
  thumbs.forEach(t => t.classList.remove('active'));
  thumbs[index].classList.add('active');
  mainImg.src = thumbs[index].src;
  currentIndex = index;
}

thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => updateMainImage(i));
});

prevBtn.addEventListener('click', () => {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = thumbs.length - 1;
  updateMainImage(newIndex);
});

nextBtn.addEventListener('click', () => {
  let newIndex = currentIndex + 1;
  if (newIndex >= thumbs.length) newIndex = 0;
  updateMainImage(newIndex);
});