// let numToWord = {
//   1:'one',
//   2:'two',
//   3:'three',
//   4:'four',
//   5:'five'
// }
// let picNum = 1
// let visiblePicture = document.querySelector(`#${numToWord[picNum]}`)
// visiblePicture.hidden= false
//
// let leftArrow = document.querySelector('#left')
// let rightArrow = document.querySelector('#right')
//
// leftArrow.addEventListener('click', () => {
//   if (picNum==1) {
//     picNum=5;
//   } else {picNum--}
//   visiblePicture.hidden=true
//   visiblePicture = document.querySelector(`#${numToWord[picNum]}`)
//   visiblePicture.hidden= false
// })
//
// rightArrow.addEventListener('click', () => {
//   if (picNum==5) {
//     picNum=1;
//   } else {picNum++}
//   visiblePicture.hidden=true
//   visiblePicture = document.querySelector(`#${numToWord[picNum]}`)
//   visiblePicture.hidden= false
// })
const carousel_track = document.querySelector('.carousel')
const panes = Array.from(carousel_track.children)

let spaceBefore = 0
panes.forEach((slide, index) => {
    let slideWidth = slide.getBoundingClientRect().width;
    if (index > 0) {
        slide.style.left = slideWidth 

    }
    
    
});