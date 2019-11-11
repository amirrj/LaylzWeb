const tiles = document.querySelectorAll('.services__tile')
//classname when tile element is closed
const closed = 'closed'

tiles.forEach(tile => {
  tile.addEventListener('click', e => {
    //if container is clicked
    if (e.target.classList.contains('services__tile-container')) {
      //open tile and remove cross
      if (e.target.nextElementSibling.classList.contains(closed)) {
        e.target.nextElementSibling.classList.remove(closed)
        e.target.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.classList.add(
          'd-none'
        )
      }
      //close tile and add cross
      else {
        e.target.nextElementSibling.classList.add(closed)
        e.target.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.classList.remove(
          'd-none'
        )
      }
    }
    //if title text is clicked or svg border is clicked
    else if (
      e.target.parentElement.classList.contains('services__tile-container')
    ) {
      //open tile and remove cross
      if (
        e.target.parentElement.nextElementSibling.classList.contains(closed)
      ) {
        e.target.parentElement.nextElementSibling.classList.remove(closed)
        if (e.target.classList.contains('services__tile-text')) {
          e.target.nextElementSibling.firstElementChild.nextElementSibling.classList.add(
            'd-none'
          )
        } else if (e.target.classList.contains('services__tile-icon')) {
          e.target.firstElementChild.nextElementSibling.classList.add('d-none')
        }
      }
      //close tile and add cross
      else {
        e.target.parentElement.nextElementSibling.classList.add(closed)
        if (e.target.classList.contains('services__tile-text')) {
          e.target.nextElementSibling.firstElementChild.nextElementSibling.classList.remove(
            'd-none'
          )
        } else if (e.target.classList.contains('services__tile-icon')) {
          e.target.firstElementChild.nextElementSibling.classList.remove(
            'd-none'
          )
        }
      }
    }
    // svg plus icon is clicked
    else if (
      e.target.parentElement.parentElement.classList.contains(
        'services__tile-container'
      )
    ) {
      //open tile and remove cross
      if (
        e.target.parentElement.parentElement.nextElementSibling.classList.contains(
          closed
        )
      ) {
        e.target.parentElement.parentElement.nextElementSibling.classList.remove(
          closed
        )
        e.target.classList.add('d-none')
      }
      //close tile and add cross
      else {
        e.target.parentElement.parentElement.nextElementSibling.classList.add(
          closed
        )
        e.target.nextElementSibling.classList.remove('d-none')
      }
    }
  })
})
