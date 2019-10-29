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

//NAVIGATION
//navigation icon
const navIcon = document.querySelector('.nav__icon')
const nav = document.querySelector('.nav')

//////////////////////////////////////////////////////////////
// functions

// remove slidehsow imgs from screen
removeActiveImg = () => {
  imgs.forEach(img => {
    if (img.classList.contains('opacity-1')) {
      img.classList.remove('opacity-1')
    }
  })
}

removeActiveTest = () => {
  testimonials.forEach(testimonial => {
    if (testimonial.classList.contains('d-block')) {
      testimonial.classList.remove('d-block')
    }
  })
}

//remove active class from buttons
removeActiveSlideButton = () => {
  slideButtons.forEach(button => {
    if (button.classList.contains('active')) {
      button.classList.remove('active')
    }
  })
}

removeActiveTestButton = () => {
  testButtons.forEach(button => {
    if (button.classList.contains('active')) {
      button.classList.remove('active')
    }
  })
}

/////////////////////////////////////////////////////////////
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

//Navigation
navIcon.addEventListener('click', () => {
  if (nav.classList.contains('open')) {
    nav.classList.remove('open')
  } else {
    nav.classList.add('open')
  }
})

/////////////////////////////////////////////////////////////
