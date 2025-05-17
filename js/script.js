/*
 Assignment: String Length and Accessing Characters
 Task:
 Declare a variable named myString and assign it the value "Hello World!".Print the length of 
myString Print the first character of myString Print the last character of myString .
*/
// console.log("--------- Task 1----------------");
// let myString = "Hello World";
// console.log(myString); // print a text
// console.log(myString.charAt(0)); // print the frist char
// console.log(myString[myString.length - 1]); //print the last chsr

// /*
//  Assignment: Changing Case
//  Task:
//  Declare a variable named message and assign it the value "javascript is FUN!".Print
// message converted entirely to uppercase.Print message converted entirely to lowercase
// */
// console.log("--------- Task 2----------------");
// const message = "javascript is FUN!";
// console.log(message.toUpperCase()); //Uppercase
// console.log(message.toLowerCase()); //lowercase

// console.log("--------- Task 3----------------");
// const sentence = "The quick brown fox jump over the lazy dog.";
// console.log(sentence.search("quick"));

// if (sentence.includes("cat")) console.log(true); //includes => use to check
// else console.log(false);

// console.log("------------ Task 4 --------------------");
// const firstName = "Noor";
// const lastName = "Al Afifi";
// const fullName = firstName + " " + lastName;
// console.log(fullName);

// console.log("------------ Task 5 --------------------");
// const item = "Apple";
// const quantity = 5;
// const concatenate = item + " " + quantity;
// console.log(concatenate);

// console.log("------------ Task 6 --------------------");
// const greeting = "Hello, ";
// const fullName1 = "Noor Afifi";
// const punctuation = "!";
// const fullGreeting = greeting.concat(fullName1 + " " + punctuation);
// console.log(fullGreeting);

// console.log("------------ Task 7 --------------------");
// const num1 = 10;
// const num2 = 20;
// const sumResult = num1 + num2;

// console.log(`The sum of ${num1} and ${num2} is ${sumResult}`);

// console.log("------------ Task 8 --------------------");
// const data = "Product-12345";
// const array = data.split("-");
// console.log(`hyphen is  ${array[1]}`);

// console.log("------------ Task 9 --------------------");
// const badSentence = "I love to code with Python";
// const updated = badSentence.replace("Python", "javaScript");
// console.log(updated);

// console.log("------------ Task 10 --------------------");
// const messyString = " Hello, world! ";
// console.log(messyString.split(" ").join("")); // to sepater a white space  use a splite and join nothine

// console.log("------------ Task 11 --------------------");
// const colors = "red,green,blue";
// console.log(colors.split(","));

//=================================================================================================
console.log("=========== Assigment 2 ===================");

// task 1
const num1 = 10;
const num2 = 5;
const sum = num1 + num2;
const differance = num1 - num2;
const mulitply = num1 - num2;
const divid = num1 - num2;
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${differance}`);
console.log(`${num1} * ${num2} = ${mulitply}`);
console.log(`${num1} / ${num2} = ${divid}`);
console.log("-----------");
//task 2
const number = 17;
const divisor = 4;

console.log(`${number} % ${divisor} = ${number % divisor}`);
console.log("-----------");
//task 3
const myNumber = 15;
if (myNumber % 2 == 0) console.log(`The number ${myNumber} is a even`);
else console.log(`The number ${myNumber} is a odd `);
console.log("-----------");
//task 4
const decimalNumber = 3.7;
console.log(
  `The DecimalNumber of a ${decimalNumber} =>  ${Math.round(decimalNumber)}`
);
const anotherDecimal = 3.2;
console.log(
  `The DecimalNumber of a ${anotherDecimal} =>  ${Math.round(anotherDecimal)}`
);
console.log("-----------");
//task 5
const floatValue = 5.9;
console.log(`The floatValue of a ${floatValue} =>  ${Math.floor(floatValue)}`);
console.log(`The floatValue of a ${floatValue} =>  ${Math.ceil(floatValue)}`);
console.log("-----------");
//task 6
const a = 25,
  b = 10,
  c = 30;
const resultMax = Math.max(a, b, c);
console.log(`The Max number of value  is ${resultMax}`);

const resultMin = Math.min(a, b, c);
console.log(`The Min number of value  is ${resultMin}`);
console.log("-----------");
//task 7
const randomDecimal = Math.random();
console.log("Random number between 0 and 1:", randomDecimal);
const randomInteger = Math.floor(Math.random() * 10) + 1;
console.log("number between 1 and 10: ", randomInteger);
console.log("-----------");
//task 8
console.log(`2 raised to the power of 3 => ${Math.pow(2, 3)}`);
console.log(`5 raised to the power of 0 => ${Math.pow(5, 0)}`);
console.log("-----------");
//task 8
const score = 85;
if (score <= 90) console.log("Excellent");
else if (score <= 89 && score >= 70) console.log("Very Good!");
else if (score <= 69 && score >= 50) console.log("Good!");
else console.log("Needs Improvement.");
console.log("-----------");
//task 10
const dayNumber = 2;
switch (dayNumber) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Saturday");
    break;
  case 4:
    console.log("Monday");
    break;
  case 5:
    console.log("Tuesday,");
    break;
  case 6:
    console.log("Wansday");
    break;
  case 7:
    console.log("Thusday");
    break;
  case 8:
    console.log("Friday");
    break;
  default:
    console.log("Invalid day number.");
}
