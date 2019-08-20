//Clase del 13 Agosto 2019 | Map - Filter - Reduce

//Map - Ejemplo 1:
const foodList = ["pizza", "tofu", "burguer", "chuleton"];

const prefers= foodList.map(function(comida){
    return "I Love eating "+comida
});

//Map - Ejemplo 2:
const array =[1,2,3,4,5];

function exponencial (number){
    const numberb = number**number
    return numberb
}

const array2 = array.map(exponencial);
console.log(array2);

//Map - Ejemplo2 (otra manera de realizarlo):
const array =[1,2,3,4,5];

const array2 = array.map(function(number){
    return number**number;
});
console.log(array2);

//Map - Ejemplo2 (otra manera de realizarlo)
const array =[1,2,3,4,5];

const array2 = array.map((number)**number);
console.log(array2)

//Map - Ejemplo 3

const personsList = [
    {
        name: "Texy",
        age: 36,
        role: "student" 
    },
    {
        name: "Harving",
        age: 29,
        role: "student" 
    },
    {
        name: "Rafa",
        age: 39,
        role: "Teacher" 
    },
    {
        name: "Ricardo",
        age: 29,
        role: "Teacher" 
    }
];

const list = persons.map((person) =>{
    return person.name + " is " + person.age + "years old ans is a " + person.role
});

