/*
Una función es un fragmento de còdigo que realiza una operación con los valores que le proporcionamos, 
estos valores pueden ser números, arreglos o cualquier tipo de dato de los ya conocidos en JavaScript

Se crean funciones para escribir código una sola vez, una función puede ser llamada dentro de otra función.

Ejemplo: Crear una función que reciba los elementos de un arreglo, 
los multiplique por el número que yo decida y el resultado lo almacene en un nuevo arreglo */


const Precios = ['10', '20', '60', '240', '100']; 
// Se define el arreglo Precios que contiene los valores que serán utilizados dentro de la función. 
let num = prompt("Ingrese el multiplo del precio:");
// Se define la variable num que contendrá el multiplo de los precios que utilizaremos en la función.
function cambio (Precios, num) { 
/*Definimos la función cambio, para ello utilizamos la palabra reservada "function" y le indicamos los valores 
con los que realizará la operación, en este caso la variable y el arreglo que definimos previamente*/
    let res = [];
    /*Definimos el arreglo "res" que contendrá el resultado de la operación realizada dentro del ciclo FOR */
        Precios.forEach((valor) =>{
            /*Utilizamos el ForEach ya que la multiplicación se realizará con cada elemento del arreglo Precios*/
            res.push(valor * num);
            /*Indicamos que en el arreglo "res" se introduzca (utilizando .push) el resultado de multiplicar 
            la variable num por la variable valor (cada uno de los elementos del arreglo Precios) */
    })
    return res;
    /*Utilizamos la palabra reservada "return" para indicar" el valor que queremos sea devuelto por la función
    en este caso queremos que la función nos entregue como resultado el arreglo "res" y su contenido*/
    }
/*Importante: Cada linea de código se ejecuta dentro de las llaves {} a menos que las hayamos declarado de manera
global al inicio del ejercicio */