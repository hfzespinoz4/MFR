const images =[
    'https://source.unsplash.com/daily?paella',
    'https://source.unsplash.com/daily?oranges',
    'https://source.unsplash.com/daily?fallas',
]

let currentSlide = 0;
const image = document.querySelector('#slider-image');
image.setAttribute('src', images[currentSlide]);

const updateImage = () => {
    console.log(currentSlide);
    if ((currentSlide +1) < images.length ){
        currentSlide = currentSlide + 1;
    } else {
        currentSlide = 0;
    }
    console.log(currentSlide);
    image.setAttribute('src', images[currentSlide]);
};

window.setInterval(updateImage, 2000);