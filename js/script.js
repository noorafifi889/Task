/*
 Assignment: String Length and Accessing Characters
 Task:
 Declare a variable named myString and assign it the value "Hello World!".Print the length of 
myString Print the first character of myString Print the last character of myString .
*/
console.log("--------- Task 1----------------");
let myString = "Hello World";
console.log(myString); // print a text
console.log(myString.charAt(0)); // print the frist char
console.log(myString[myString.length - 1]); //print the last chsr

/*
 Assignment: Changing Case
 Task:
 Declare a variable named message and assign it the value "javascript is FUN!".Print 
message converted entirely to uppercase.Print message converted entirely to lowercase
*/
console.log("--------- Task 2----------------");
const message = "javascript is FUN!";
console.log(message.toUpperCase()); //Uppercase
console.log(message.toLowerCase()); //lowercase

console.log("--------- Task 3----------------");
const sentence = "The quick brown fox jump over the lazy dog.";
console.log(sentence.search("quick"));

if (sentence.includes("cat")) console.log(true); //includes => use to check
else console.log(false);

console.log("------------ Task 4 --------------------");
const firstName = "Noor";
const lastName = "Al Afifi";
const fullName = firstName + " " + lastName;
console.log(fullName);

console.log("------------ Task 5 --------------------");
const item = "Apple";
const quantity = 5;
const concatenate = item + " " + quantity;
console.log(concatenate);

console.log("------------ Task 6 --------------------");
const greeting = "Hello, ";
const fullName1 = "Noor Afifi";
const punctuation = "!";
const fullGreeting = greeting.concat(fullName1 + " " + punctuation);
console.log(fullGreeting);

console.log("------------ Task 7 --------------------");
const num1 = 10;
const num2 = 20;
const sumResult = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sumResult}`);

console.log("------------ Task 8 --------------------");
const data = "Product-12345";
const array = data.split("-");
console.log(`hyphen is  ${array[1]}`);

console.log("------------ Task 9 --------------------");
const badSentence = "I love to code with Python";
const updated = badSentence.replace("Python", "javaScript");
console.log(updated);

console.log("------------ Task 10 --------------------");
const messyString = " Hello, world! ";
console.log(messyString.split(" ").join("")); // to sepater a white space  use a splite and join nothine

console.log("------------ Task 11 --------------------");
const colors = "red,green,blue";
console.log(colors.split(","));
