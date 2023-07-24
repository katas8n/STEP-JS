// var , let 
//           _
// const - []_] 

// console.log('[o]', o);

// let o = 0;
// var o = 0;

// console.log("Hello world");

// continue , break;
// for(var i = 0; i < 10 ; i = i + 1) {
     
//     if(i === 0) continue;
//     if(i === 8) break;
//     console.log('[i]', i);
// }
// if (true) {
//     var a =  10;
//     let b = 5;
// }

// console.log(a);
// console.log(b);

// SCREAM + / - 
// camelCase + 
// PascalCase
// snake_case
// block-element ... 


// const students = [
//     "John",
//     "Mike",
//     "Bob",
//     "Don",
// ]; 

// const studentsKrop = [
//     "Misha",
//     "Oleg",
//     "Arsen",
//     "Vitaliy",
// ]; 

// new Array()


console.log('[students - before push]', students);

// Push element on the end of arr 
students.push("Ruslan");
console.log('[students - after push]', students);
// Push element on the first place in arr
students.unshift("Ruslan");
console.log('[students - after unshift]', students);

// Remove elemnt from last place of arr 
students.pop()
console.log('[students - after pop]', students);

// showStudents(students);
// showStudents(studentsKrop);

// DRY 
// Presentational / dummy / dumb / silly 
// function showStudents(arr) {
//     if(!Array.isArray(arr)) return; // undefined

//     // return -> break function on the place where it invoke 

//     // O(n)
//     // i++ === i = i + 1 , ++i
//     // i-- , --i
//     for(let i = 0 ; i < arr.length ; i++) {
//         const entity = arr[i];

//         console.log('[entity]', entity);
//     }
// }

const pureFunction = upgradeStudents(students);

console.log('[pureFunction]', pureFunction);

function upgradeStudents(arr) {
    let nestedArr = [];

    if(!Array.isArray(arr)) return; // undefined

    // return -> break function on the place where it invoke 

    // O(n)
    // i++ === i = i + 1 , ++i
    // i-- , --i
    for(let i = 0 ; i < arr.length ; i++) {
        const entity = arr[i];

        nestedArr.push({
            name : entity,
            age : Math.random().toFixed(2).slice(2)
        })
    }

    return nestedArr
}

// const number = new Number(23);
const number = 23;
// const str = new String("23");
const str = "23";
// const bool = new Boolean(1);
const bool = true;
// const object = new Object({name : "John"});
const object = {name : "John"};

// const arr = new Array(23);
const arr = [];
arr.push(1)

object.age = 23 ;

// console.log('[number]', number);
// console.log('[str]', str);
// console.log('[bool]', bool);
// console.log('[object]', object);
// console.log('[arr]', arr);

// console.log(Math.PI * 30**2);
// console.log(Math.abs(-4));

// console.log(Math.max(2 , 3,  5, 13 , 23 , 1 ));
// console.log(Math.min(2 , 3,  5, 13 , 23 , 1 ));
// console.log(Math.random().toString().slice(3, 7));

const phrase = "HelloDimaworldMishaNeRuslanDota?";

const dimaStr = 'Dima';

const startIndext = phrase.indexOf(dimaStr) ;
const lastIndext = startIndext + dimaStr.length;

// console.log(phrase);

const startPart = phrase.slice(0  ,startIndext)
const lastPart = phrase.slice(lastIndext )

const mergedStr = startPart + lastPart;

// console.log('[startIndext]', startIndext);
// console.log('[lastIndext]', lastIndext);

const dimon = phrase.slice(startIndext, lastIndext);
// console.log('[dimon]', dimon);

// console.log("------------------");

// console.log('[mergedStr]', mergedStr);


// sayHello("Misha");
// sayHello("EuroSlan");
// sayHello("Dimon");

// function sayHello(name) {
//     console.log("Hi ," + name);
// }


// const sum = function (x , y) {
//     return  x + y 
// };

// const result = sum(10 ,3);


// console.log('[result]', result);


// const multiplyByTwo = (num) => {
//     return num * 2 
// }

// const result= multiplyByTwo(4);

// console.log('[result]', result);

// const mult = (x , y) => x * y ;

