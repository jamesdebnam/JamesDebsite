const imageTextRef = {
  0: "The neck was made from 4 pieces of wood stuck together",
  1: "The sides of the body were ironed into shape in a mold",
  2: "Struts were then glued onto the roughly shaped face",
  3: "The face and back were glued to the sides",
  4: "The neck after I had measured and cut a fretboard to fit",
  5: "The neck being glued to the body, they fit like a 3D jigsaw!",
  6: "The fretboard is glued on, and the whole ukelele is sanded",
  7: "Final product after making and gluing the bridge on",
  8: "Another angle! The wood is darker from a few coats of varnish",
};

const imageText = document.querySelector(".image-text");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
const playPause = document.querySelector("#play-pause");
const carousel = document.querySelector(".carousel-list");
const slides = Array.from(carousel.children);
const carouselPic = document.querySelector(".carousel-pic-only");
const indicators = document.querySelector(".indicators");
const indicatorDots = Array.from(indicators.children);
let isPlaying = false;
let slideWidth = slides[0].getBoundingClientRect().width;

for (let i = 0; i < slides.length; i++) {
  slides[i].style.left = slideWidth * i + "px";
}

let slideNumber = 0;
dotColor();

// resizes the size of each slide when the page is resized
window.addEventListener("resize", () => {
  slideWidth = slides[0].getBoundingClientRect().width;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = slideWidth * i + "px";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == "37") {
    slideLeft();
  } else if (e.keyCode == "39") {
    slideRight();
  }
});

leftArrow.addEventListener("click", slideLeft);

rightArrow.addEventListener("click", slideRight);

playPause.addEventListener("click", togglePlay);

// Resets the dot colors, and darkens the corresponding picture dot
function dotColor() {
  for (dot of indicatorDots) {
    dot.style.backgroundColor = "#667c8d";
  }
  indicatorDots[slideNumber].style.backgroundColor = "#17222c";
}

function changeText() {
  imageText.innerHTML = imageTextRef[slideNumber];
}

function slideLeft() {
  slideNumber = slideNumber == 0 ? 8 : slideNumber - 1;
  carouselPic.style.transform = `translateX(-${slideWidth * slideNumber}px)`;
  changeText();
  dotColor();
}

function slideRight() {
  slideNumber = slideNumber == 8 ? 0 : slideNumber + 1;
  carouselPic.style.transform = `translateX(-${slideWidth * slideNumber}px)`;
  changeText();
  dotColor();
}

let interval = null;

function togglePlay() {
  if (isPlaying) {
    isPlaying = false;
    playPause.src = "icons/play.svg";
    clearInterval(interval);
  } else {
    isPlaying = true;
    playPause.src = "icons/pause.svg";
    interval = setInterval(slideRight, 2500);
  }
}
