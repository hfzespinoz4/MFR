// Escribe una función que acepte dos números y los sume// 
const sumNumbers = (number1,number2) => {
    let result= number1 + number2
    console.log(result + " es el resultado de sumar " + number1 + " y " + number2);
    return result
}

// Escribe una función que acepte dos números y los reste//
const subsNumbers = (number1, number2) => {
    let result = number1 - number2
    console.log(result + " es el resultado de restar " + number1 + " menos " + number2)
    return result
}

// Escribe una función que acepte dos números y los divida//
const divNumbers = (number1, number2) => {
    let result= number1 / number2;
    console.log(result + " es el resultado de dividir " + number1 +" entre " + number2)
    return result
}

// Escribe una función que acepte un número y devuelve su potencia//
const powerNumber = (number, power) =>{
    let result = (number ** power)
    console.log("El número " + number + " elevado a " + power + " es igual a " + result)
}

// Escribe una función que acepte dos números y devuelva el que es mayor//
const wichIsBigger = (number1, number2) =>{
    if (number1 > number2){
        console.log(number1 + " es mayor que " + number2)
    } else{
        console.log(number2 + "es mayor que " + number1)
    }
}

// Escribe una función que acepte una cadena de texto (string) y una letra y devuelva el número de veces que aparece dicha letra
const countChar = () => {
    string = prompt("Ingresa una frase: ")
    char = prompt("Ingresa la letra a buscar: ")
    index= []
    for (i=0; i< string.length; i++){
        if (string[i].toLowerCase() === char) index.push(i)
    }
    console.log("En la fase: " + string + " aparece " + index.length + " veces la letra " + char)
}