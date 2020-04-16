let numToWord = {
  1:'one',
  2:'two',
  3:'three',
  4:'four',
  5:'five'
}
let picNum = 1
let visiblePicture = document.querySelector(`#${numToWord[picNum]}`)
visiblePicture.hidden= false
