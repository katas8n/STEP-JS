'use strict';
// let , const

// Null as a placeholder

// string -> number

// var result = null;

// var firstNum = parseInt(prompt('Which number will be first : '));
// var secondNum = parseInt(prompt('Which number will be second : '));

// var operator = prompt('Eneter which of these operation : + , - , * , /');

// if (operator === '+') {
//     result = firstNum + secondNum;
// } else if (operator === '-') {
//     result = firstNum - secondNum;
// } else if (operator === '*') {
//     result = firstNum * secondNum;
// } else if (operator === '/') {
//     result = firstNum / secondNum;
// }

// NaN -> Not a Number -> type of NaN is number
// isNaN
// isFinite
// if (!isNaN(result)) {
//     console.log('[result]', result);
// } else {
//     alert('Something went wrong !');
// }

//
// cycles , functions , objects

// Club-control
// var john = {
//     // : -> defenition
//     // key/property : value
//     firstName: 'Mike',
//     surname: 'Doe',
//     age: 18
// };

// Access to values
// <object>.<property>

// if (john.age < 18) {
//     console.log('There is nothing here for u');
// } else if (john.age > 18) {
//     console.log('Sup. Welcome!');
// } else {
//     console.log('Huck!');
// }

// more condition

// && - and
// || - or
// ! - not

// if (john.age === 18 && john.firstName === 'John') {
//     console.log('Hello , ur 18!');
// }
// if (john.age >= 18) {
//     console.log('Hello , welcome to the club!');
// }

// AGE - detector

// var userAge = parseInt(prompt('Enter ur age : '));

// var user = {
//     age: userAge
// };

// var unExist = user.age < 60;
// var young = user.age > 0 && user.age < 20;
// var adult = user.age >= 20 && user.age < 40;
// var elderly = user.age >= 40 && user.age < 60;
// var almostDeadman = user.age > 60;

// if (young) {
//     console.log('Hello , baby');
// } else if (adult) {
//     console.log('Sup?');
// } else if (elderly) {
//     console.log('Greeting!');
// } else if (unExist || almostDeadman) {
//     console.log('ERROR');
// }

// cycles , functions

// cycles
// While -> while will work until condition is true
// force quit -> break;

// var counter = 0;

// 0 -> ... -> 10
// break -> force quit
// continue -> skip

// while (counter != 10) {
//     if (counter === 7 || counter === 0) {
//         counter = counter + 1;
//         continue;
//     }

//     counter = counter + 1;
//     console.log('[counter]', counter);
// }

// Task
// USEFUL : While , if , isNaN ,isFinite

// Do you wanna play a game ? y -> ok , n => Goodbye
// magicNumber = 13
// Write a programm that will get number from user (Hi!
// then we should compare magicNumber
// (it should be defined on the top of ur code , also value of this number up to u)
// and userNumber
// if userNumber less than magic -> tell user -> ur number less than mine
// if userNumber bigger than magic -> tell user -> ur number bigger than mine
// if userNumber equal magic -> tell user -> Amazing
// if userNumber - not a number -> tell him that : "Type error. Incorrect value"
// User might to quit a game on the start of our program and on the end
