

// alert() - function byh default => show modal window with text between round brakets

// Data types 

// 5
// undefined -> JS : "I know what is that , but i don't have an idea what is the value "
// string - > 'Hello ' , "hello " , `Hello `

// var , let , const -> key word that define a place in memory of computer and also create a ref to object wich we saved before 

// var -> ES6 -> 
// var x = 23 ;

// * let -> cycle, placeholder
// * const => value that we will not be able to reassign in the future;

// * console.log(x);
// console.log(num);
//! let num = 23;


// 'use strict'
// num = 23;
// console.log('[num]', num);

//! const num = 23;
// num = 13;

// console.log('[num]', num);

// num = 13;
// console.log(num);


// const favoruteNumber = 13;

// console.log(x);
// * back
// ${name_of_variable}
// console.log(`Hello , my favorite number is - ${favoruteNumber}`);
// alert("Hello user")


// var - has global area of vision
// for(i = 0 ;i < 10;i++) {
//     console.log(i);
// }

// for(i = 0;i < 20;i++) {
//     console.log(i);
  
// }

// let - has block area of vision
// for (let j = 0 ; j < 10; j++) {
//     console.log(j);
// }

// console.log("[VAR_AFTER_CYCLE]",i)
// console.log("[LET_AFTER_CYCLE]",j)


// Data types 

// 5
// undefined -> JS : "I know what is that , but i don't have an idea what is the value "
// string - > 'Hello ' , "hello " , `Hello `
// number - > 2 , 3.0 -> + , - , / , * , % // float/decimal , whole/integer
// boolean - > True/False
// null -> nothing 

// typeof 
// let isKir = true;
// let isKir = true;
// let userAge = "false";


// if - > (condition/expression) is true -> we gonna execute code in {}
// else if - > or if 
// else -> all other
// < , > , <= , >= , === , ==
// false => 0
// true => 1
// if(userAge < 18) {
//     console.log("huck u babe!");
//     // or(||) , and(&&) -> 
//     // 18 - 30
// }else if (userAge >= 18 && userAge <= 30) {
//     console.log("Wellcum ;)");
// }else {
//     console.log("BadCum");
// }
// console.log(26 % 5);


// * SCOPE - +
// if(true) {
//     let x = 23;
// }

// console.log(x);

// ! conditions

// let userName = "Mike";
// let num = "13";

// ===  - stricted equality
// if(num === 13){
//     console.log("Welcome");
// }else {
//     console.log("Huck u!");
// }


// do ... while (-) , while , for 

// let i = 0;

// while - keyword which define a cycle 
// i < 65 - > condition
// while(i < 8) {
//     i++; // increment / decrement
//     // i = i + 1
//     // break;
//     // if (i === 1)break;

//     // if(i === 2) break;

//     // if(i === 3) break;

//     // if(i === 4) break;

//     console.log('[i]', i);
//     if(i === 5 || i === 7 || i === 2) continue;


//     console.log("[I]" , i);
//     console.log("Here we are!");

// }


// const list_of_users = [
//     {
//         name : "Kir", 
//         isVipPerson : false ,
//         money : 500
//     },
//     {
//         name : "John", 
//         isVipPerson : true ,
//         money : 500
//     },
//     {
//         name : "Mike", 
//         isVipPerson : false ,
//         money : 500
//     },
//     {
//         name : "Bob", 
//         isVipPerson : false ,
//         money : 500
//     },
// ]

// let i = 0 ;

// while (i < list_of_users.length) {
    
//     const user = list_of_users[i];

//     i++;

//     // ! - not 
//     if (!user.isVipPerson) continue;
    
//     console.log(`Hello , mr. ${user.name}`);

//     // -= -> x = x - y 
//     user.money -=  500;
//     console.log(user.money );
   

// }


// Homework
// ИМТ 
// Get height and weight
// Formula : weight / _,__ * _,__ 
// Example : 77(вес Кирилла) / 1,85 * 1,85
//  (Рост Кирилла в квадрате) (Кирилл - это 185 cм 77 кг)
//  16 – 18,5      ►  Недостаточная масса тела (дефицит);
//  18,5 – 25     ►  Норма;
//  25 – 30       ►  Избыточная масса тела (состояние, предшествующее ожирению);
//  30 – 35       ►  Ожирение 1-й степени;
//  35 – 40       ►  Ожирение 2-й степени;
//  40 и более ►  Ожирение 3-й степени.


// Home work 

// Via : cycle show in the console next picture 
// #
// ##
// ###
// ####
// #####
// ######


// .length
// const userChoose = +prompt("Eneter how many \"#\" should be on the last piramids lvl ?")

// const sharp = "#";

// const lastLvlPiramidLength = userChoose;

// let piramidStr = "";

// const stringBreak = "\n";

// * On every iterration to piramidStr added : # * i and strBreak
// for(let i = 1 ; i < lastLvlPiramidLength + 1 ; i++){
//     piramidStr += sharp.repeat(i) + stringBreak;
// }

// console.log(piramidStr)

// odd , even 
//  # # # 
// # # # #
//  # # #
// # # # #

// * 1) Get how many rows must be
// * 2) Define variables : const space = " "; const symbol = "#"  or  const even = " #" ; const odd = "# ";

// const maxLength = 6;
// const rowLength = 6;

// const space = " # # # #\n";
// const symbol = "# # # # \n";

// const breakLine = "\n";

// let result = "";

// for(let i = 0 ; i < maxLength ; i++){
//     if(i % 2 === 0) {
//         result += space;
//     }
//     else {
//         result += symbol;
//     }
// }

// console.log('[result]', result);

// for (let i = 0; i < rowLength; i++) {
//     let str = "";

//     for(let j = 0 ; j < maxLength ; j++){

//         if(i % 2 === 0){
//             if(j % 2 === 0) {
//                 str += space;
//             }
//             else {
//                 str += symbol;
//             }
//         }
//         else {
//             if(j % 2 === 0) {
//                 str += symbol;
//             }
//             else {
//                 str += space;
//             } 
//         }
//     }
//     result += str + breakLine;
// }


// const a = "0"; 
// const b = "1";

// const expectedLength = 13;

// let string = "";

// for(let i = 0 ; i < expectedLength; i++) {
//     if(i % 2 === 0 || i % 5 === 0){ 
//         string += `${a}`;
//     }
//     else {
//         string += `${b}\n`;
//     }
// }

// console.log("n");

// (function () {
//     console.log("kek");
// })


