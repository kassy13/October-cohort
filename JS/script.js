console.log("hello world ");
let child;
console.log(child);
console.log(typeof 40);

//3 ways of declaring variables
// let
// const
// var

let firstName = "somtoochukwu";
console.log(firstName);
firstName = "ada";
console.log(firstName);

let age = 20;
age = 21;
console.log(age);

const birthYear = 2012;

var job = "teacher";
console.log(job);
job = "engineer";

let job1 = "teacher";
let currentJob = "teacher";
let CurrentJob = "programmer";

// Basic operators in javascript
// minus
const year = 2024;
const ageNigeria = year - 1960;
console.log("Age Nigeria", ageNigeria);

const amalgamation = year - 1914;

const add = 23 + 39;
console.log(job1 + " " + CurrentJob);

// Assignment operators  =, +=, *=, ++, --

let x = 10 - 5;
x += 10; // x = x + 10
x *= 4; // x= x * 4

// comparison operators
4 > 3;
4 >= 4;
console.log(4 === "4");

console.log(23 - 50 * 3 ** 3);

console.log((23 - 50) * 3 ** 3);

const myfirstName = "jay";
const myJob = "teacher";
const myBirthYear = 1960;
const myCurrentYear = 2024;
// I'm jay ,  a 64 year old teacher
const jayjay =
  "I'm" +
  " " +
  myfirstName +
  ", a " +
  (myCurrentYear - myBirthYear) +
  "years old" +
  myJob;
console.log(jayjay);

const jayjay2 = `I'm  ${myfirstName}, a ${
  myCurrentYear - myBirthYear
} years old ${myJob}`;
console.log(jayjay2);

console.log(" string with  \n multiple \n lines");
console.log(` string
with 
multiple 
line`);

// Type conversion
// console.log(prompt("what number are you thinking of?"));

const inputNumber = "60";
console.log(inputNumber + 18);

const inputNumber2 = Number(inputNumber);

const jc = Number("jc");
console.log(jc);

let num = String(80);
console.log(num);

//Type Coercion
console.log("23" - "10" - 3);
console.log("23" + "10" - 3); // 2307

//GUESS THE OUTPUT
let n = "1" + 1; //11 string
n = n - 1; // 10 number
console.log(2 + 3 + 4 + "5"); //95 String
console.log("10" - "4" - "3" - 2 + "5"); // 15 string

//Boolean Logic
// chinaza has a driver's license
// Nkemjika has good vision
let myAge = 16;
console.log(age >= 30);
console.log(age <= 30);

//5 falsey values 0, '' , undefined, null and NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("jay"));
console.log(Boolean({}));

const sheHasADriversLisence = true;
const sheHasGoodVision = false;

console.log(sheHasADriversLisence && sheHasGoodVision); // false
console.log(!sheHasADriversLisence || sheHasGoodVision); //false
console.log(sheHasGoodVision && !sheHasADriversLisence && !sheHasGoodVision); //false

//CONTROL STRUCTURES
/*
if(condition that returns a boolean) {
  code for if the condition is true 
}
 */
const yourAge = 16;
if (yourAge >= 18) {
  console.log("Chinaza should buy a car");
} else {
  console.log(`chinaza should wait ${18 - 16} years`);
}

const isSunny = true;

let weatherMessage;

if (isSunny) {
  let hi = "hi";
  weatherMessage = `its a sunny day`;
  console.log(hi);
} else {
  weatherMessage = `its partly sunny `;
}

const myFavoriteAnimal = "Cat";
const mySecondFavoriteAnimal = "penguin";
if (myFavoriteAnimal === "cat" && mySecondFavoriteAnimal === "penguin") {
  console.log("cats are great and i also love penguins");
} else if (myFavoriteAnimal === "dog") {
  console.log("Dogs are not that bad");
} else if (myFavoriteAnimal === "shark") {
  console.log("Well it seems i may be abnormal");
} else {
  console.log("i have never heard of this animal");
}

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

*/
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scorekoalas = (88 + 91 + 110) / 3;
// console.log("score Dolphins", scoreDolphins);
// console.log("score Koalas", scorekoalas);

// if (scoreDolphins > scorekoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scorekoalas > scoreDolphins) {
//   console.log("Koalas win");
// } else if (scoreDolphins === scorekoalas) {
//   console.log("Both teams win the tropy");
// }

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log("score Dolphins", scoreDolphins); //103
console.log("score Koalas", scoreKoalas); //103
103 > 109;
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the tropy ");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins");
}

const money = 0;
if (money !== null) {
  console.log("Agba Baller");
} else {
  console.log("Go and work hard");
}
//SWITCH STATEMENT
/* 
switch ( variable for comparison){
  case ' value you want to compare' : {
    code to be executed if value matches case
  }
}
 */

const myNewFavaouriteAnimal = "Rabbit";
switch (myNewFavaouriteAnimal) {
  case "dog":
    {
      console.log("Dogs are awesome");
    }
    break;
  case "rabbit":
    {
      console.log("small letter rabbit  are awesome also");
    }
    break;
  case "Rabbit":
    {
      console.log("Capital letter Rabbit is my new favourite Animal");
    }
    break;
  case "shark":
    {
      console.log("well sharks are not bad");
    }
    break;
  default: {
    console.log("i have have never heard of this animal");
  }
}
//Ternary operator
const isNotSunny = false;
isNotSunny ? console.log("its sunny day") : console.log("its partly sunny");

//FUNCTIONS
/*function declaration
SYNTAX   -----> function nameofFunction (parameter){
  stuffs inside our function
}
*/
function logger() {
  console.log("hello world");
  console.log("Its a beautiful monday morning");
}
logger();
greet("amaka");
function greet(name, second) {
  console.log(`hello ${name} good morning and hello ${second}`);
}
greet("jc", "chinaza");

function avg(a = 1, b = 3, c = 6) {
  const avg2 = (a + b + c) / 3;
  console.log(avg2);
}
avg(4, 5, 4);
function greet2(name = "dear") {
  console.log(`hello ${name} have a nice day`);
}
greet2("emmanuel");
function calcAge(birthYear) {
  console.log(2024 - birthYear);
  console.log("declaration", this);
  return 2024 - birthYear;
}
const myFinalAge = calcAge(1999);
console.log(myFinalAge > 18);

//Function Expressions
// calcAge2(1990);
const calcAge2 = function (birthYear) {
  console.log("dexpression", this);
  return 2024 - birthYear;
};
const myFinalAge2 = calcAge2(2000);
console.log(myFinalAge2);

//Arrow function
const calcAge3 = (birttYear) => {
  console.log(this);
  console.log(` arrow function ${birttYear}`);
};
calcAge3(1999);

//IIFE immediately invoked function expression
(function (name) {
  console.log(`hello ${name}`);
})("obi");

//ASSIGNMENT
//create a function for checking if a number is odd or even

const isEven = function (num) {
  if (num % 2 === 0) {
    console.log("This is an even number");
  } else {
    console.log("this is an odd number");
  }
};

//ARRAYS AND OBJECTS
const friend1 = "emmanuel";
const friend2 = "nkem";
const friends = ["emmanuel", "nkem", "jc", "ebube", " chinaza", [20, 9], true];
console.log(friends);

const numYears = new Array(1991, 1980, 2002);
console.log(numYears);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[0] = "some one else";
console.log(friends);
console.log(friends[5][0]);
// friends = [1, 2, 3, 4];

const ageCalc = function (birthyearh) {
  return 2024 - birthyearh;
};
ageCalc(2022);
const birthyeah = [1990, 1877, 2022, 2015];
const age1 = ageCalc(birthyeah[0]);
const age2 = ageCalc(birthyeah[1]);

const age3 = ageCalc(birthyeah[birthyeah.length - 1]);
const ages = [
  ageCalc(birthyeah[0]),
  ageCalc(birthyeah[1]),
  ageCalc(birthyeah[birthyeah.length - 1]),
];
console.log(ages);

const newAges2 = new Array(age1, age2, age3);
console.log(newAges2);
console.log(newAges2[0]);
//BASIC ARRAY METHODS
//push
console.log(friends);
friends.push(34);
console.log(friends);

//unshift
friends.unshift("john");
console.log(friends);
//storing the original friends
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
//INDEXOF
console.log(friends.indexOf("nkem"));
//includes
console.log(friends.includes("nkem"));

if (friends.includes("jc")) {
  console.log(`you have a friend called ${friends[2]}`);
}
/*
Steven is still building his tip calculator, using the some rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above  Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
