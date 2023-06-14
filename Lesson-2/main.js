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

// ! WE SHOULD USE WHILE WHEN WE DON'T KNOW ANYTHING ABOUT : AMOUNT OF ITERRATION
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

// alert('Hello user!');

// var attemptsCounter = 0;

// var tips = {
//     bigger: 'Ur number bigger than mine',
//     less: 'Ur number less than mine',
//     incorrect: 'Invalid value!'
// };

// var magicNumber = 23;

// var isRunning = true;

// var userChoose = prompt('Do you wanna play this game ?');

// // toLowerCase
// if (userChoose.toLocaleLowerCase() === 'y') {
//     while (isRunning === true) {
//         var userNumber = parseInt(prompt('Enter ur number : '));

//         if (magicNumber === userNumber) {
//             var isEscape = confirm('Do you wanna try again');

//             if (!isEscape) {
//                 isRunning = false;
//             }

//             attemptsCounter = 0;

//             continue;
//         } else if (magicNumber < userNumber) {
//             console.log(tips.bigger);
//         } else if (magicNumber > userNumber) {
//             console.log(tips.less);
//         } else {
//             console.log(tips.incorrect);
//         }

//         attemptsCounter = attemptsCounter + 1;
//     }
// } else {
//     alert('Goodbye');
// }

// cycles
//      itter declar , condition ,increment
// FOR (var i = 0 ; i < ... , i++)
//              0123456789101112
// var greeting = 'Hello world!!';

// // length
// // console.log(greeting.length);
// // console.log(greeting[1]);
// var hello = '';

// for (var i = 0; i < greeting.length; i++) {
//     var letter = greeting[i];

//     if (i < 5) {
//         hello = hello + letter;
//     }
//     if (i === 5) continue;

//     console.log('[CURRENT_COUNTER - i]', i);
//     console.log('[CURRENT_LETTER]', letter);
//     console.log('________________________');

//     if (i === 12) {
//         hello = hello + letter;
//     }
// }

// var number = 0;
// ++ = + 1
// console.log(number++);
// console.log(--number);

// User validator

// 1) Get user : name , email , password , age
// 2) name must has at least 2 symbols
// 3) if name is valid -> check user email
// 4) email should include into it -> "@" symbol
// 5) password should be longer than 7 and * might
// include : numbers and strings
// 6) This case migth be acceed only if all conditions above
// is TRUE...age must be bigger than 18
// 7) If all above is true -> console -> Welcome!
// Otherwise -> Go out of here!
