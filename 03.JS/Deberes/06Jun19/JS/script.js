//Archivo con código JS

/*var nombre;
var edad;

nombre = prompt("Ingresa tu nombre:");
edad = prompt("Ingresa tu edad:");
document.write(nombre + "  tiene  " + edad + " años de edad.");
console.log ( nombre + " tiene " + edad + "de edad.");
alert(nombre + " tiene " + edad + " años de edad."); */

//Utilizando el ciclo For

/*for (i=0; i<=4; i++){
    nombre=prompt("Ingresa tu nombre:");
    edad=prompt("Ingresa tu edad:")
    document.write(nombre + "  tiene  " + edad + " años de edad." + "<br>");
    console.log ( nombre + " tiene " + edad + "de edad.");
    alert(nombre + " tiene " + edad + " años de edad.");
    }
     */

const alumnos =[];
for (i=0; i<=4; i++){
    nombre=prompt("Ingresa tu nombre:");
    alumnos.push (nombre);
    edad=prompt("Ingresa tu edad:");
    alumnos.push(edad);
    document.write(nombre + " tiene " + edad + " años de edad." + "<br>");
    console.log ( nombre + " tiene " + edad + " años de edad.");    
}
    alert(alumnos[0] + " tiene " + alumnos[1] + " años de edad," +
        alumnos[2] + " tiene " + alumnos[3] + " años de edad, " +
        alumnos[4] + " tiene " + alumnos[5] + " años de edad, " +
        alumnos[6] + " tiene " + alumnos[7] + " años de edad y " +
        alumnos[8] + " tiene " + alumnos[9] + " años de edad.");
    