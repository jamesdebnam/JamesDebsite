
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const carousel = document.querySelector('.carousel-list');
const slides = Array.from(carousel.children);
const carouselPic = document.querySelector('.carousel-pic-only');
const indicators = document.querySelector('.indicators');
const indicatorDots = Array.from(indicators.children);

let slideWidth = slides[0].getBoundingClientRect().width;

for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = slideWidth * i + "px";
}

let slideNumber = 0;
dotColor();

// resizes the size of each slide when the page is resized
window.addEventListener('resize', ()=> {
    slideWidth = slides[0].getBoundingClientRect().width;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = slideWidth * i + "px";
    }
});

document.addEventListener('keydown', (e) => {
    if (e.keyCode == '37'){
        slideLeft();
    } else if(e.keyCode == '39'){
        slideRight();
    }
});

leftArrow.addEventListener('click', slideLeft);

rightArrow.addEventListener('click', slideRight);

function dotColor() {
    for (dot of indicatorDots) {
        dot.style.backgroundColor = '#667c8d';
    }
    indicatorDots[slideNumber].style.backgroundColor = '#17222c'
}

function slideLeft() {
    slideNumber = (slideNumber == 0) ? 8 : slideNumber - 1;
    carouselPic.style.transform = `translateX(-${slideWidth * slideNumber}px)`;
    dotColor();
}

function slideRight() {
    slideNumber = (slideNumber == 8) ? 0 : slideNumber + 1;
    carouselPic.style.transform = `translateX(-${slideWidth * slideNumber}px)`;
    dotColor();    
}