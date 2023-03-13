////////////////// 1 //////////////////

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

//----------//Predict the output//----------//

console.log("\n"+randomCar) 
console.log("\nExpected result: 'Tesla'\n");
console.log(otherRandomCar)
console.log("\nExpected result: 'Mercedes'\n");

// -----------------------------------------------------------------------------------

////////////////// 2 //////////////////

const employee = {
    name: 'Elon',
  //othername = 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

//----------//Predict the output//----------//

// console.log(name); 
// console.log("\nExpected result: 'undefined'\n");
console.log(otherName); 
console.log("\nExpected result: 'Elon'\n");

// -----------------------------------------------------------------------------------

////////////////// 3 //////////////////

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

//----------//Predict the output//----------//

console.log(password);
console.log("\nExpected result: '12345'\n"); 
console.log(hashedPassword);
console.log("\nExpected result: 'undefined'\n"); 
 
// -----------------------------------------------------------------------------------

////////////////// 4 //////////////////

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 2 

//----------//Predict the output//----------//

console.log(first == second);
console.log("\nExpected result: 'false'\n");  
console.log(first == third); 
console.log("\nExpected result: 'true'\n"); 

// -----------------------------------------------------------------------------------

////////////////// 5 //////////////////

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest; 
const [ ,willThisWork] = secondKey; 

//----------//Predict the output//----------//

console.log(key); 
console.log("\nExpected result: 'value'\n"); 
console.log(secondKey); 
console.log("\nExpected result: [1, 5, 1, 8, 3, 3]\n"); 
console.log(secondKey[0]);
console.log("\nExpected result: 1\n"); 
console.log(willThisWork); 
console.log("\nExpected result: 5\n"); 
