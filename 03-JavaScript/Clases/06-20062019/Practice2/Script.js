const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

const updateBoxes = () => {
    box1.classList.remove('box1');
    box1.classList.add('box4');
    box2.classList.remove('box2');
    box2.classlist.add('box5');
    box3.classlist.remove('box3');
    box3.classlist.add('box6');
}
window.setInterval(updateBoxes, 2000);
