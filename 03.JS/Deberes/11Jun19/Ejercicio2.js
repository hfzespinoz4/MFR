/*
Exercise 2 - True or false
Using promp, variables and conditionals, ask questions to the users and display the result on the console.

Ask: "Tomatos are fruits, not vegetables: true or false". If that answer is "true" you show "correct", otherwise show "incorrect".
Ask: "You should drink 8 glasses of water: true or false". If that answer is "false" you show "correct", otherwise show "incorrect".
Ask: "Fishes have only three seconds of memory: true or false". If that answer is "false" you show "correct", otherwise show "incorrect".
Ask: "The Great Wall of China is the only man made structure visible from space The Great Wall of China: true or false". If that answer is "true" you show "correct", otherwise show "incorrect".
Create more true or false questions.

Bonus points
Create a variable points and initialize it to zero.
If the answer is correct, add 10 points to the points variable.
If the answer is incorrect, remove 5 points to the points variable.
Display how many points the user has on the console.
*/

let q1=prompt("Los tomates son frutas, no vegetale ¿Verdadero o falso?");
if (q1 === 'verdadero'){
    console.log("Correcto!");
} else {
    console.log("Incorrecto!");
}

let q2=prompt("Debes tomar 8 vasos de agua al día ¿Verdadero o Falso?");
if (q2 === 'verdadero'){
    console.log('Correcto!');
} else {
    console.log('Incorrecto!');
}
let q3=prompt('Los peces tienen una memoria de tres segundos ¿Verdadero o Falso?');
if (q3 === 'verdadero'){
    console.log('Correcto!');
} else {
    console.log('Incorrecto!');
}

let q4=prompt('La Gran Muralla China es la única edificación humana que puede verse desde el espacio ¿Verdadero o Falso?');
if (q4 === 'verdadero'){
    console.log('Correcto!');
} else {
    console.log('Incorrecto!')
}


