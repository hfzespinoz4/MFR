const getRandomInt = (max) => {                        // Fx que devuelve un valor aleatorio
    return Math.floor(Math.random(max));
}
getRandomInt();

const randomNumber = getRandomInt(100);                      // Número Generado por la PC
let userNumber = document.getElementById("number").value;    //Numero que ingresa el usuario
const printTryout = document.getElementById("intentos");
const printLifes = document.getElementById("restantes");
let tryout = 0;     // El numero de intentos
let lifes = 10;     // Cantidad intentos restantes.

const comprobacion = () =>{
    if (lifes.value<=10) {
        if (userNumber.value < randomNumber.value){
            alert("Te has pasado");    
        }
        else if (userNumber.value > randomNumber.value){
            alert("Te has ido por arriba");    
        }
        else if (userNumber.value === randomNumber.value){
            alert("¡Felicidades, has acertado el número!");
        }
    else {
       alert("Asegurate de haber ingresado un número");  
         }      
    }  
}
lifes=lifes-1;
tryout=tryout+1;

document.getElementById('intentos').innerHTML=tryout;
document.getElementById('restantes').innerHTML= lifes;
document.getElementById('buttom').addEventListener('click', comprobacion);