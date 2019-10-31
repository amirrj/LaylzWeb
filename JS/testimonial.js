// testimonial text
const testimonials = document.querySelectorAll('.testimonial__text')
const testimonial1 = document.querySelector('.testimonial__text--1')
const testimonial2 = document.querySelector('.testimonial__text--2')
const testimonial3 = document.querySelector('.testimonial__text--3')
const testimonial4 = document.querySelector('.testimonial__text--4')
//testimonials buttons
const testButtons = document.querySelectorAll('.testimonial__button')
const testButton1 = document.querySelector('.testimonial__button--1')
const testButton2 = document.querySelector('.testimonial__button--2')
const testButton3 = document.querySelector('.testimonial__button--3')
const testButton4 = document.querySelector('.testimonial__button--4')

//Event Handlers
testButton1.addEventListener('click', () => {
  removeActiveTestButton()
  removeActiveTest()

  testimonial1.classList.add('d-block')
  testButton1.classList.add('active')
})

testButton2.addEventListener('click', () => {
  removeActiveTestButton()
  removeActiveTest()

  testimonial2.classList.add('d-block')
  testButton2.classList.add('active')
})

testButton3.addEventListener('click', () => {
  removeActiveTestButton()
  removeActiveTest()

  testimonial3.classList.add('d-block')
  testButton3.classList.add('active')
})

testButton4.addEventListener('click', () => {
  removeActiveTestButton()
  removeActiveTest()

  testimonial4.classList.add('d-block')
  testButton4.classList.add('active')
})
