//Beauty UI vars
//Beauty slide show imgs
const imgs = document.querySelectorAll('.slideshow__photo')
const img1 = document.querySelector('.slideshow__photo--1')
const img2 = document.querySelector('.slideshow__photo--2')
const img3 = document.querySelector('.slideshow__photo--3')
const img4 = document.querySelector('.slideshow__photo--4')
// beauty slideshow buttons
const slideButtons = document.querySelectorAll('.slideshow__button')
const slideButton1 = document.querySelector('.slideshow__button--1')
const slideButton2 = document.querySelector('.slideshow__button--2')
const slideButton3 = document.querySelector('.slideshow__button--3')
const slideButton4 = document.querySelector('.slideshow__button--4')

//Event Handlers
slideButton1.addEventListener('click', () => {
  removeActiveImg()
  removeActiveSlideButton()

  slideButton1.classList.add('active')
  img1.classList.add('opacity-1')
})
slideButton2.addEventListener('click', () => {
  removeActiveImg()
  removeActiveSlideButton()

  slideButton2.classList.add('active')
  img2.classList.add('opacity-1')
})
slideButton3.addEventListener('click', () => {
  removeActiveImg()
  removeActiveSlideButton()

  slideButton3.classList.add('active')
  img3.classList.add('opacity-1')
})
slideButton4.addEventListener('click', () => {
  removeActiveImg()
  removeActiveSlideButton()

  slideButton4.classList.add('active')
  img4.classList.add('opacity-1')
})
