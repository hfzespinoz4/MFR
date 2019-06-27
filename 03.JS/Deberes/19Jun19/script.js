const flagColors = [
    '#E70000',
    '#FF8C00',
    '#FFEF00',
    '#00811F',
    '#0044FF',
    '#760089'
]

const myContainer = document.querySelector('.my-container')
const flagStripes = []

// backgroundColor, width, height
const buildStripe = (stripeColor) => {
    const stripe = document.createElement('div')
    stripe.style.height = '40px'
    stripe.style.width= '400px'
    stripe.style.backgroundColor = stripeColor
    myContainer.appendChild(stripe)
    flagStripes.push(stripe);
}

flagColors.forEach((stripeColor) => {
    buildStripe(stripeColor)
})

let i = 0
setInterval(() => {
    if (i < flagStripes.length) {
        i++
        flagStripes[i].classList.toggle('visible');
    } else {
        i = 0
    }
}, 200)