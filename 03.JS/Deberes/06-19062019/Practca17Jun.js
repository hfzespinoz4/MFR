/*Programa que pida una frase y escriba las vocales que aparecen */

let fr = prompt("Escriba una frase");
let qty = fr.length;
for (i=0; i < qty; i++){
    if (fr.substr (i,1) === "a" || fr.substr(i,1) === "e" || fr.substr(i,1) === "i" || 
    fr.substr(i,1) === "0" || fr.substr(i,1) === "u") {
        console.log(fr.substr(i,1));
    }
}

/* Un programa que pida dos números y nos indique si los dos números y el resultado de la multiplicación
de ambos numeros son divisibles entre 2,3,5 o 7. */

let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");
let res = num1 * num2;

function multip (num1, num2){
    let nums = [];
    if (num1 %2 === 0) {
        console.log(num1 + " es divisible entre 2");
    } else if (num1 %3 === 0) {
        console.log (num1 + " Es divisible entre 3");
    } else if (num1 %5 === 0) {
        console.log (num1 + " es divisible entre 5");
    } else if (num1 %7 === 0) {
        console.log (num1 + " Es divisible entre 7");
    } else {
        console.log (num1 + " No es divisible entre 2, 3, 5 y 7");
            }
    
    if (num2 %2 ===0) {
        console.log (num2 + " es divisible entre 2");
    } else  if (num2 %3 === 0) {
        console.log (num2 + " es divisible entre 3");
    } else if (num2 %5 === 0) {
        console.log (num2 + " es divisible entre 5");
    } else if (num2 %7 === 0) {
        console.log (num2 + " es divisble entre 7");
    } else {
        console.log (num2 + " No es divisible entre 2, 3, 5 y 7");
    }

    if (res %2 ===0){
        console.log(res + " es divisible entre 2 ");
    } else if (res %3 === 0) {
        console.log (res + " es divisible entre 3");
    } else if (res %5 === 0) {
        console.log (res + " es divisible entre 5");
    } else if (res %7 === 0) {
        console.log (res + " es divisible entre 7");
    } else {
        console.log (res + " no es divisible entre 2,3,5 y 7");
    }
    nums.push(num1);
    nums.push(num2);
    nums.push(res);
return nums;
}
console.log ("El primer número es: " + num1);
console.log ("El segundo número es: " + num2);
console.log ("El resultado de multiplicar ambos números es: " + res);
console.log ("La colección " + nums + " contiene " + nums.length + " elementos");
    nums.forEach((items, index) => {
        console.log(index, items);
    })

/* Busqueda de un elemento en el arreglo */

const fruits = ["Banana", "Tomatoes", "Apple", "Orange", "Mango", "Strawberry", "Watermelon", "Lima", "Pear"];
let query = prompt ("Ingrese la fruta a buscar");
let found = fruits.find( fruit => fruit.name = query);
console.log(found);