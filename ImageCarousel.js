
let leftArrow = document.querySelector('#left')
let rightArrow = document.querySelector('#right')
const carousel = document.querySelector('.carousel-list');
const slides = Array.from(carousel.children);
const carouselPic = document.querySelector('.carousel-pic-only')
let slideWidth = slides[0].getBoundingClientRect().width;

for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = slideWidth * i + "px";
}
window.addEventListener('resize', ()=> {
    slideWidth = slides[0].getBoundingClientRect().width;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = slideWidth * i + "px";
    }
});


let slideNumber = 0

leftArrow.addEventListener('click', () => {
    slideNumber = (slideNumber == 0) ? 8 : slideNumber-1;
    carouselPic.style.transform = `translateX(-${slideWidth*slideNumber}px)`
  
})

rightArrow.addEventListener('click', () => {
    slideNumber = (slideNumber == 8) ? 0 : slideNumber + 1;
    carouselPic.style.transform = `translateX(-${slideWidth*slideNumber}px)`
})
