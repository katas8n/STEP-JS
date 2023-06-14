'use strict'; // strict mode
import './style.scss';

// ! Variables
// let , var , const

// ! State / expression
// ; -> end of expression . You shpuld use it in particular cases : 1) Definition 2) Function's call
// var name = 'John';
// var age = 23;

// ! quotes : "" , '' , ``(special)
// console.log(`[NAME]`, name);
// console.log('[AGE]', age);

// 6
// ! 5 - primitive data types
//! --------------------------Numbers-----------------------------
// console.log(10);
// console.log(1.12);

// * Math operations
// console.log('[ADD]', 13 + 10);
// console.log('[SUBTRACT]', 13 - 10);
// console.log('[DIVIDE]', 13 / 10);
// console.log('[MULTIPLY]', 13 * 10);
// console.log('[division_remainder]', 13 % 2);
// console.log('[SQRT]', 13 ** 2);

//! --------------------------String-----------------------------
// '', "" , ``
// console.log('There is just a string!');

// Concat
// !!!!!!!!!!Everything that u'll add to a string -> WILL BE A STRING
// console.log('Hello ' + 'friend ;)');
//            0123456789101112
// var string = 'Hello world !';

// var hello_st = string.slice(0, 5);
// var name = 'Kir';

// var helloExpression = hello_st + ' ' + name;

// console.log(helloExpression);
// slice
// console.log(string.slice(0, 5));

// Incorrect behavior
// string[7] = 'EEEEEE';

// console.log('[string]', string[7] + string[0] + string[5] + string[1]);

// console.log('Hello world huck'.slice(-4));
// console.log('Hello world'.length);

//! --------------------------Boolean-----------------------------
// TRUE / FALSE
// We always get boolean data type when we compare something
// Equation operation : < , > , == , === , ! , != , !==

// ! - 'not' operator
// console.log('[2 < 10]', 2 < 10); // less
// console.log('[2 > 10]', 2 > 10); // more
// console.log('[2 != 10]', 2 != 10); // not equal
// console.log('[2 == 2]', 2 == 2); // weak equality (equal data by values , but not by type)
// console.log("['----------']", '----------');
// console.log("[2 == '2']", 2 == '2'); // weak equality (equal data by values , but not by type)
// console.log("[2 === '2']", 2 === '2'); // Strong equality (equal data by values and also by type)
// console.log("[2 !== '2']", 2 !== '2'); // Strong equality (equal data by values and also by type)
// console.log("[2 != '2']", 2 != '2'); // weak equality (equal data by values , but not by type)

// *--------------------------------Null-------------------------------
// Null - is nothing , empty place , place of nothingness
// We might use Null when we wanna reserve some variable name , or
// we are sure that in nearest time we will put there something

// var null_value = null;
// console.log('[null_value]', null_value + 10);
// console.log('[null_value]', null_value == 0);
// console.log('[null_value]', null_value === 0);

// *--------------------------------Undefined----------------------------
// console.log('[userName]', userName);

// var userName = 'John';
// console.log('[userName]', userName);

// Function by default : alert , prompt , confirm
// var user_name = prompt('Enter ur name : ');
// console.log('[user_name]', user_name);

// !-----------------------------OBJECT=================================
// var user = {
//     name: 'John',
//     age: 23,
//     isDrunk: false
// };

// // How u should name variables in JS .
// console.log('[user]', user);

// Functions by default

// var name = 'John';

// * alert => Show modal window with nested message
// alert('Hello world!');
// alert('Hello ' + name);

// ! prompt -C phrase
// !       |
// !      {c} - fresh meat -> Get user data
// var userName = prompt("Sup!? What's ur name ?");

// alert('Hello ' + userName);

// var confirmMessage = confirm('Do you like boys ? (Are u doter ?)');
// console.log('[confirmMessage]', confirmMessage);

// SCREEM CASE : HP_BY_DEFAULT -> const
// CAMEL CASE : myHuckingVariable -> JS
// SNAKE CASE : my_hucking_variable -> python
// PASCAL CASE : MyHuckingVariable -> pascal
// KEBAB CASE : my-hucking-variable -> html

// Rules : How to name a variable :
// (wrong) var 45hello
// (wrong) var @hello / var h@llo / h)llo
// (wrong) var SPECIAL_FUNCTIONAL_WORDS : class , function , alert , break , while

// (correct(but not recomended)) var $hello
// (correct(but not special case)) var _hello
// (correct(but not recomended)) var name2

// to name boolean type variables we should use qestion_verb
// var isAdmin = false;
// var isAdmin = true;

// Task
// There was Mary .
// Mary wanted us to create simple page that will
// welcome only her friends : 'Dobkin Mixa' ,
// 'Prizrachniy Doter' , "Nagibator228"

// Greeting must be printed on the screen only if
// user confirms it

// 1) What is user name ? ...
// 2) Save user name
// 3) Compare it to options above
// 4) Is user comfirmation is there ?
// 5) IF "y" : show data on the screen , otherwise : "Huck u"

// // CONST
// var GREETING_BY_DEFAULT = 'Sup, ';

// // ! Mary's friends
// var friendMisha = 'Misha';
// var friendJohn = 'John';
// var friendBob = 'Bob';

// // ! Current user name
// var userName = prompt("Hi! What's ur name ?");

// // Logical operations : and - && , or - || , not - !

// // if , else , if ... else
// // 1) condition special word 2) expression 3) comp
// if (
//     userName === friendMisha ||
//     userName === friendJohn ||
//     userName === friendBob
// ) {
//     // SCOPE
//     var isConfirmed = confirm('Do you wanna see ur greeting message ?');

//     if (isConfirmed === true) {
//         alert(GREETING_BY_DEFAULT + userName);
//     } else {
//         alert('Huck you!');
//     }
// } else {
//     console.log('Huck you!');
// }

//

// HOMEWORK

// U should create a programm that takes :
// name
// yearOfBirth
// surname
// Is it love money ?

// as a result : both (users name and surname ) into modal window
// how old is it , let say :
// user entred 1973 => 50

// *
// if isLove -> Welcome , pane !
// otherwise !isLove -> Sorry , here is a training business,
//  go away please!
