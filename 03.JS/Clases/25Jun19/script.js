const button = document.querySelector('.read-more')
const secondaryText = document.querySelector('.secondary-text')

button.addEventListener('click', function (event) {
  secondaryText.classList.toggle('hidden')
  if (secondaryText.classList.contains('hidden')) {
    this.textContent = 'Read More'
  } else {
    this.textContent = 'Read Less'
  }
})

// button.addEventListener('click', (event) => {
//   secondaryText.classList.toggle('hidden')
//   if (secondaryText.classList.contains('hidden')) {
//     button.textContent = 'Read More'
//   } else {
//     button.textContent = 'Read Less'
//   }
// })