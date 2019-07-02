const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
      }
const randomNumber = getRandomInt(100);                  // Número Generado por la PC
const userNumber = document.querySelector("#number");    //Numero que ingresa el usuario
const printTryout = document.getElementById("intentos"); 
const printLifes = document.getElementById("restantes");
let tryout = 0;     // El numero de intentos
let lifes = 10;     // Cantidad intentos restantes.

const comprobacion = () =>{
    if (userNumber.value <= 100){
        if (userNumber.value < randomNumber){
            alert("Te has pasado");
            console.log(userNumber + " es menor que " + randomNumber);    
            }
        else if (userNumber.value > randomNumber){
            alert("Te has ido por arriba");    
            console.log(userNumber + " es mayor que " + randomNumber)
            }
        else if (userNumber.value === randomNumber){
            alert("¡Felicidades, has acertado el número!");
            console.log(userNumber + " es igual que " + randomNumber)
            }
    }
    else {
        alert("Asegurate de haber ingresado un número en el rango indicado");  
         }        
lifes=lifes--;
tryout=tryout++;
}
printTryout.innerHTML=tryout;
printLifes.innerHTML=lifes;
document.getElementById('buttom').addEventListener('click', comprobacion);