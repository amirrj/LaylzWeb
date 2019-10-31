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

//Navigation
navIcon.addEventListener('click', () => {
  if (nav.classList.contains('open')) {
    nav.classList.remove('open')
  } else {
    nav.classList.add('open')
  }
})

/////////////////////////////////////////////////////////////
