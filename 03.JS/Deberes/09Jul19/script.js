//Declaramos las funciones:
//===================================

//Definimos las variables para los botones y resultados:
const sumNumbersForm = document.querySelector('.sum-opr');
const subsNumbersForm = document.querySelector('.subs-opr');
const divNumbersForm = document.querySelector('.div-opr');
const powerNumberForm = document.querySelector('.pow-opr');
const compNumbersForm = document.querySelector('.comp-opr');
const stringCountForm = document.querySelector('.strcount-opr');
const inputFieldsTagName = document.querySelector('#input-field');
const sumResultsElement = document.querySelector('#sum-results');
const subsResultsElement = document.querySelector('#subs-results');
const divResultsElement = document.querySelector('#div-results');
const powResultsElement = document.querySelector('#pow-results');
const compResultsElement = document.querySelector('#comp-results');
const strCountResultsElement = document.querySelector('#strcount-results');

// Escribe una función que acepte dos números y los reste//
const subsNumbers = () => {
    const sb1 = document.getElementById('subs-number1');
    const sb2 = document.getElementById('subs-number2');
    const sbnumber1 = Number(sb1.value);
    const sbnumber2 = Number(sb2.value);
    let result= sbnumber1 - sbnumber2;
    //showMessage(" - ", " es igual a ");
    subsResultsElement.innerHTML=result;
    console.log(sbnumber1 + " - " + sbnumber2 + " es igual a " + result);
    sb1.value="";
    sb2.value="";
    sb1.focus();
}

// Escribe una función que acepte dos números y los sume// 
const sumNumbers = () => {
    const sm1 = document.getElementById('sum-number1');
    const sm2 = document.getElementById('sum-number2');
    const smnumber1 = Number(sm1.value);
    const smnumber2 = Number(sm2.value);
    let result = smnumber1 + smnumber2;
    //showMessage(" + ", " es igual a ");
    sumResultsElement.innerHTML=result;
    console.log(smnumber1 + " + " + smnumber2 + " es igual a  " + result);
    sm1.value="";
    sm2.value="";
    sm1.focus();
}


// Escribe una función que acepte dos números y los divida//
const divNumbers = () => {
    const dv1 = document.getElementById('div-number1');
    const dv2 = document.getElementById('div-number2');
    const dvnumber1 = Number(dv1.value);
    const dvnumber2 = Number(dv2.value);
    let result = dvnumber1 / dvnumber2;
    //showMessage(" / ", " es igual a ");
    divResultsElement.innerHTML=result;
    console.log (dvnumber1 + " / " + dvnumber2 + " es igual a " + result);
    dv1.value="";
    dv2.value="";
    dv1.focus();
}

// Escribe una función que acepte un número y devuelve su potencia//
const powerNumber = () => {
    const pw1 = document.getElementById('pow-number1');
    const pw2 = document.getElementById('pow-number2');
    const pwnumber1 = Number(pw1.value);
    const pwnumber2 = Number(pw2.value);
    let result= (pwnumber1 ** pwnumber2);
    //showMessage(" elevado a ", " es igual a ");
    powResultsElement.innerHTML=result;
    console.log (pwnumber1 + " elevado a " + pwnumber2 + " es igual a " + result);
    pw1.value="";
    pw2.value="";
}

// Escribe una función que acepte dos números y devuelva el que es mayor//
const whichIsBigger = () => {
    const n1 = document.getElementById("comp-number1");
    const n2 = document.getElementById("comp-number2");
    const number1 = Number(n1.value);
    const number2 = Number(n2.value);
    if (number1 > number2){
        console.log (number1 + " es mayor que " + number2);
        compResultsElement.innerHTML=(number1 + " es mayor que " + number2);
    }
    else{
        console.log (number2 + "es mayor que " + number2);
        compResultsElement.innerHTML=(number2 + " es mayor que " + number1);
        }
    n1.value="";
    n2.value="";
    }

// Escribe una función que acepte una cadena de texto (string) y una letra y devuelva el número de veces que aparece dicha letra
const  countCharInString = () =>{
    const str = document.getElementById("strcount-input");
    const chr = document.getElementById("strcount-letter");
    const string = str.value;
    const char = chr.value;
    const index = [];
    for (i = 0; i < string.length; i++){
        if (string[i].toLowerCase() ===  char) index.push(i);
    }
    console.log("En la frase: " + string + " aparece " + index.length + " veces la letra " + char);
    //document.getElementById("strcount-results").innerHTML = letterCount.length;
    document.getElementById("strcount-results").innerHTML = ("En la frase: " + string + " aparece " + index.length + " veces la letra " + char);
str.value="";
chr.value="";   
}

//Declaramos los addEventListener para cada operación:
//=====================================================

sumNumbersForm.addEventListener('submit', function(event) {
    event.preventDefault();
    sumNumbers();
})

subsNumbersForm.addEventListener('submit', function(event) {
    event.preventDefault();
    subsNumbers();
})

divNumbersForm.addEventListener('submit', function(event){
    event.preventDefault();
    divNumbers();
})

powerNumberForm.addEventListener('submit', function (event){
    event.preventDefault();
    powerNumber();
})

compNumbersForm.addEventListener('submit', function (event){
    event.preventDefault()
    whichIsBigger();
})

stringCountForm.addEventListener('submit', function(event){
    event.preventDefault()
    countCharInString()
})

