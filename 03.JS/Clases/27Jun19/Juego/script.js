const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const restartGame = () => {
    location.reload();
    userNumber.value = "";
    userNumber.focus();
}

const randomNumber = getRandomInt(100);                  // Número Generado por la PC
const userNumber = document.querySelector("#number");    // Numero que ingresa el usuario
const tryoutsElement = document.getElementById("tryouts"); 
const lifesElement = document.getElementById("lifes");
const sendNumber = document.getElementById('random-num-val');
let tryouts = 0;     // El numero de intentos
let lifes = 10;     // Cantidad intentos restantes.

const showMessages = (text, comparison) => {
    alert(text);
    console.log(text + userNumber.value + comparison + randomNumber);

}

sendNumber.addEventListener('submit', function(event) {
    event.preventDefault();
    const value = Number(userNumber.value);
    if (lifes > 0 ) {
        if (value < randomNumber) {
            showMessages("Te has pasado ", " es menor ");    
            }
        else if (value > randomNumber){
            showMessages("Te has ido por arriba ", " es mayor ");
            }
        else if (value === randomNumber) {
            // alert("¡Felicidades, has acertado el número!");
            // console.log("¡Felicidades, has acertado el número!");
            showMessages("¡Felicidades, has acertado el número!");
            restartGame();
            }
    }
    else {
        alert("No tienes mas intentos"); 
        restartGame();
        }
    userNumber.value="";
    userNumber.focus();
    lifes--;
    tryouts++;
    tryoutsElement.innerHTML=tryouts;
    lifesElement.innerHTML=lifes;
})
tryoutsElement.innerHTML=tryouts;
lifesElement.innerHTML=lifes;