<!-- scroll the header --->

/** 
* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar 
* @function ready
**/

function ready() {
  var prevScrollpos = window.pageYOffset;

  const width  = window.innerWidth;
  let   height = 70;

  /* the height of the navbar header depending on the screen size */
  if (width < 960 )  height = 117;
  if (width < 767 )  height = 255;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
   
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = 0 ;
    } else {
      navbar.style.top = "-" + height + "px";
    }
    
    prevScrollpos = currentScrollPos;
  };
}

const navbar = document.getElementById('navbar');
const btn    = document.getElementById('btn-open');
const drop   = document.getElementById('drop');

/* the dropdown of the navbar menu if clicked */
btn.addEventListener('click',(e) => {

  if (drop.style.display == '' )  drop.style.display = "none";

  drop.style.display = (drop.style.display === "none" ) ? "block" : "none";
});

document.addEventListener("DOMContentLoaded", ready);

<!-- carousel --->

const track = document.querySelector('.carousel_track');

if (track != undefined) {
  const slides      = Array.from( track.children );
  const nextButton  = document.querySelector('.carousel_button--right');
  const prevButton  = document.querySelector('.carousel_button--left');
  const dotsNav     = document.querySelector('.carousel_nav');
  const dots        = Array.from( dotsNav.children );
  const slideSize   = slides[0].getBoundingClientRect();
  const slideWidth  = slideSize.width;

  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  }

  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  }

  const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  }

  const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
      prevButton.classList.add('is-hidden');
      nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove('is-hidden');
      nextButton.classList.add('is-hidden');
    } else {
      prevButton.classList.remove('is-hidden');
      nextButton.classList.remove('is-hidden');
    }
  }

  /* click right, move slide to right */
  nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
  })

  /* click left, move slide to left */
  prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
  })

  /* click nav indicators, move to slide */
  dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
  });
}