/* =================================================================================================
Map exercises ======================================================================================
1-Given the following array, create a second array with the result of getting the power of each number by itself.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const powNumbers = numbers.map(function(number){
    return number**number
});
console.log(powNumbers);

//2-Given the following array, create a second array that uses each one of the words to form the sentences seen below.

const foodList = ['Pizza', 'Ramen', 'Paella', 'Chuletón'];

const preferences = foodList.map(function(food){
    if (food === 'Pizza'){
        return "Since I'm Italian, I love eating " + food;
    } else if (food === 'Ramen'){
        return "Since I'm Japanese, I love eating " + food;
    } else if (food === 'Paella'){
        return "Since I'm from Valencia, I love eating " + food;
    } else if (food === 'Chuletón'){
        return "Although I don't eat meat, " + food + " is certainly tasty";
    }
});
console.log(preferences);
//3-Given the following array, create a second array that forms sentences using the objects' properties:

const mfrStaff = [
  {
    name: 'Andrea',
    role: 'coordinator',
    hobbies: ['sing', 'watch movies']
  },
  {
    name: 'Xavi',
    role: 'teacher',
    hobbies: ['read', 'code']
  },
  {
    name: 'Ricardo',
    role: 'teacher',
    hobbies: ['read', 'garden']
  },
  {
    name: 'Rafa',
    role: 'teacher',
    hobbies: ['travel', 'watch series']
  },
  {
    name: 'Jordi',
    role: 'teacher',
    hobbies: ['travel', 'build robots']
  }
];

const staff = mfrStaff.map((persons) =>{
    return persons.name + " is a " + persons.role + " and they like to " + persons.hobbies[0] + " and " +  persons.hobbies[1]
});
console.log(staff);

/*
===================================================================================================
2. Filter exercises ===============================================================================
1- Given the following array, create a second array only with the even numbers*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter(function(number){
    return number %2 === 0;
})
console.log(evenNumbers);

/*Given the following array, create a second array that filters out all the food that has meat and outputs the sentence
seen below. Tip: You can chain map and filter to first remove the elements you don't want in your new array and then giving 
them the desired shape*/

const foodList = [
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Beyond meat burguer',
    isVeggie: true
  },
  {
    name: 'Chuletón',
    isVeggie: false
  }
];

const foods = foodList.filter(function(food){
    return food.isVeggie === true
})

const VeggieFood = foods.map(function(vfoods){
    return "Nothing like a good " + vfoods.name + " for dinner!";
});
console.log(VeggieFood);

//Given the following array, create a second array that outputs only the name of the products that cost less than 200€

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV 4K',
    price: 400
  },
  {
    name: 'PS5',
    price: 600
  },
  {
    name: 'Programming course license',
    price: 155
  }
]
const devices = inventory.filter(function(device){
    return device.price <= 200
});
 const selectedDevices = devices.map(function(device){
     return device.name 
 })

console.log(selectedDevices);

// or 

const devices = inventory
    .filter(device => device.price < 200)
    .map(device => device.name);

/* ===================================================================================================
3. Reduce exercises ==================================================================================
1- Given the following array, get the multiplication of all the elements of it. */

const numbersList = [45, 5, 1, 23, 32]

const multiplication = numbersList.reduce((accum, num) =>{
    return accum * num;
});

console.log(multiplication);

//2- Given the following array, concatenate all the elements in the array using .reduce().

const sentenceElements = [
  'My ',
  'name ',
  'is ',
  'Harvin ',
  'and ',
  'I ',
  'love ',
  'javascript '
];

const sentence = sentenceElements.reduce((accum, element) =>{
    return accum + element;
});

console.log(sentence);

//3- Given the following array, get the total amount of those products that belong to the category of coding

const booksList = [
  {
    name: 'You don\'t know JS',
    author: 'Kyle Sympson',
    price: 15,
    category: 'code'
  },
  {
    name: 'The handmaids tale',
    author: 'Margaret Atwood',
    price: 18,
    category: 'novel'
  },
  {
    name: 'Game of Thrones',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'Eloquent Javascript',
    author: 'Marijn Haverbeke',
    price: 40,
    category: 'code'
  }
];

const filterBooks = booksList.filter(book => book.category === 'code')
const totalAmount = filterBooks.reduce((accum, element) =>{
    return accum.price + element.price;
});
;

console.log(totalAmount);

/* ===================================================================================================
Ejercicios de Funciones ==============================================================================
1- Define a function "f" that receives a number and returns that number multiplied by 2. */

function f (number){
  return number * 2
}
console.log(f);

// Define a function "g" that receives a number and returns that number plus 3.
 function g (number){
   return number + 3
 }

/* Define a function "h" that receives a number and returns that number multiplied by 2 
and then plus 3, reusing f and g functions.*/

function h (numberx){
  const f = numberx * 2;
  
  function g (){
    return f + 3
  }
  
 return g();
}
console.log(h);
/* Define a function "i" that receives a number and returns that number plus 3, then multiplied by 2,
reusing f and g functions.*/
function i (number){
  const f = numberx + 3;
  
  function g (){
    return f * 2
  }
  
  return g();
 }
 console.log(h);

/*Pro exercise: higher order functions
 Define a function "compose" that receives two functions and a number as arguments and applies the
 composition of the functions to the number
 * E.g: compose(f, g, 10) -> 26
 * E.g: compose(g, f, 10) -> 23 */

function compose(f, g,) {
  const 
  
  
  ;
  
    
  // Tests (as in the examples)
  console.log(f(4));
  console.log(g(7));
  console.log(h(10));
  console.log(i(10));
  console.log(compose(f, g, 10));
  console.log(compose(g, f, 10));