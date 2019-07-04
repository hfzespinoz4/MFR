const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
      }

const restartGame = () =>{
    location.reload();
    userNumber.value="";
    userNumber.focus();
}
const randomNumber = getRandomInt(100);                  // Número Generado por la PC
const userNumber = document.querySelector("#number");    // Numero que ingresa el usuario
const printTryout = document.getElementById("intentos"); 
const printLifes = document.getElementById("restantes");
const sendNumber = document.querySelector('#buttom');
let tryout = 0;     // El numero de intentos
let lifes = 10;     // Cantidad intentos restantes.

sendNumber.addEventListener('click', function(event){
    if (lifes > 0  && userNumber.value<=100){
        if (userNumber.value < randomNumber){
            alert("Te has pasado ");
            console.log("Te has pasado " + userNumber.value + " es menor que " + randomNumber);    
            }
        else if (userNumber.value > randomNumber){
            alert("Te has ido por arriba ");
            console.log("Te has ido por arriba " + userNumber.value + " es mayor que " + randomNumber);
            }
        else if (userNumber.value == randomNumber){
            alert("¡Felicidades, has acertado el número!");
            console.log("¡Felicidades, has acertado el número!");
            restartGame();
            }
        else {
            alert("Asegurate de haber ingresado un número"); 
            console.log("Asegurate de haber ingresado un número"); 
            }
    }
    else if (userNumber.value > 100){
        alert("Asegurate de haber ingresado un número en el rango indicado");  
        console.log(userNumber.value + " excede el rango de números permitidos");
    } 
    else if (isNaN(userNumber.value)){
        alert("Debes ingresar un número");
        console.log("Debes ingresar un número");
        return true;
        }
    else {
        alert("No tienes mas intentos"); 
        restartGame();
         }
    userNumber.value="";
    userNumber.focus();
    lifes--;
    tryout++;
    printTryout.innerHTML=tryout;
    printLifes.innerHTML=lifes;
    return false;   
})
printTryout.innerHTML=tryout;
printLifes.innerHTML=lifes;