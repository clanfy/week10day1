//Section 1

//what types are these? Write your answer in a comment beside it.

1; //number
"cat"; //string
true; //boolean
[]; //array
{}; //object
1.1; //number
undefined; //undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //truthy
true; //truthy
NaN; //falsey
[]; //truthy
{}; //truthy
undefined; //falsey
""; //falsey
0; //falsey


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var number = 3;
//3.2 Assign a variable that is a string
var string = "word"
//3.3 Assign a variable that is a boolean
var boolean = true;
//3.4 Assign a variable that is an object
var kitty = {
  name: "Garfield"
  favoriteFood: "Lasagna"
}

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

  if (true) {
    console.log("hello");
  } else {
    console.log("bye");
  }



//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];


//5.1. Assign the first element to a variable

var firstAnimal = animals[0];

//5.2. Assign the last element to a variable

var lastAnimal = animals[animals.length - 1];

//5.3. Assign the length of an array to a variable

var animalsLength = animals.length;

//5.4. Add an item to the end of the array

animals.push("hampster");

//5.5. Add an item to the start of the array

animals.unshift("guinea pig");

//5.6. Assign the index of hedgehog to a variable

var hedgehogIndex = animals.indexOf("hedgehog");

//Section 6

//6.1 Create an array of 5 vegetables

var vegetables = ["cucumber", "potato", "celery", "kale", "pepper"]

//6.2 Loop over the array and write to the console using a "while"

var x = 0;
while (x < vegetables.length) {
  console.log(vegetables[x]);
  x++
}

//6.3 Loop again using a "for" with a counter

for (var i = 0; i < vegetables.length; i++){
  console.log(vegetables[i]);
}

//6.4 Loop again using a "for of"

for (var vegetable of vegetables) {
  console.log(vegetable);
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];
//7.1 Calculate the total cash in accounts


//7.2 Find the amount of money in the account with the largest balance
//7.3 Find the name of the account with the smallest balance
//7.4 Calculate the average bank account value
//7.5 Find the value of marcs bank account
//7.6 Find the holder of the largest bank account
//7.7 Calculate the total cash in business accounts
//7.8 Find the largest personal account owner


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method