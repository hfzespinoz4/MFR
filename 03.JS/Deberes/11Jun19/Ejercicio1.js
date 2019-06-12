/*
Exercise 1 - 
The Lifetime Supply Calculator
How many potatoes will a person eat until the end of his life? Discover yourself!

-Store the persons current age into a variable.
-Store an stimated maximum age into a variable.
-Store an estimated amount per week (as a number).
-Calculate how many weeks will happen until the end of this person life.
-Calculate how many potatoes would eat total for the rest of his life.
-Output the result to the screen by console like so: "NAME has NN years and will eat NN potatoes until age of X".

*/

    const NAME=prompt("ingrese su nombre:");
    const AGE=prompt("Ingrese su edad actual:");
    const AGEMAX=prompt("Ingrese la espectativa de vida actual en años:");
    let potatoes=prompt("Ingrese la cantidad de kilos de patatas que consume por semana:");
    const tweeks=(AGEMAX * 52.1429);
    const tpotatoes=(tweeks * potatoes);
    console.log(NAME + " tiene " + AGE + " años de edad, vivirá " + tweeks.toFixed(2) + " semanas y consumirá " + tpotatoes.toFixed(2) + "kilos de patatas.");
  


