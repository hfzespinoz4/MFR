/*
*FizzBuzz!*
Primera iteración
1. Pedir al usuario un número por pantalla (_prompt_)
2. Si el número es *divisible** por 3, mostrar al usuario por pantalla la palabra *Fizz!*
3. Si el número es *divisible* por 5, mostrar al usuario por pantalla la palabra *Buzz!*
4. Si el número es *divisible* por 3 *y* por 5, mostrar al usuario por pantalla la palabra *FizzBuzz!*
5. Si el número no es divisible por ninguno de los anteriores, imprimir solamente el número
```// Ejemplo del 1 al 5
--> 1 2 Fizz! 4 Buzz!```
\* Para comprobar si un número es divisible por otro número, debemos comprobar que su resto (módulo *%*) es igual a 0

*Bonus Points*
- Mediante un bucle, sin interacción del usuario, recorrer los números del 1 al 100 e imprime por pantalla lo mismo que en el ejercicio principal
*/

let num=prompt('Por favor, digite un número:')
if (num % 3 === 0) {
    console.log ('Fizz!');
} else if (num % 5 === 0) {
    console.log ('Buzz!');
} else if (num % 3 === 0 && num % 5 === 0){
    console.log('FizzBuzz!');
} else {
    console.log(num);
}

for (i=0; i<=100; i++){
    if (i % 3 === 0) {
        console.log ('Fizz!');
    } else if (i % 5 === 0) {
        console.log ('Buzz!');
    } else if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz!');
    } else {
        console.log(i);
    }  
}

