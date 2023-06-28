
// * Difference between var and let
// var => var has global scope vision 
// - We might call variable before we define and then recieve undefined 
// let  => let has local scope vision
// const ˆ

// * Difference between const and let
// let  => variable 
// const => constant 

// scope -> local / glob 
// console.log('[x]', x);
// var x = 0;
// local scope
// if(true) {              //scope
//     // let userName = "John";
// }

// global scope
// console.log(userName);

// * if ... else statement  -> when we use range: from ... to ...

// const userAge = 19;

// if .. else take first correct case and then break chain of elseIf conditions 
// if(userAge < 20) {
//     console.log("1 case");
// }else if (userAge > 10) {
//     console.log("2 case");
// }

// if (userAge > 10) {
//     console.log("2 case");
// }

// switch -> when our value is something certainly defined 10 === 10 

// const userName = "John Doe";

// switch (username) {
//     case "Mike":
//         console.log();
//     break;
            
//     case "John":
//         console.log();
//     break;
                
//     case "Bob":
//             console.log();                
//     break;

//     case "Jakub":
//          console.log();
//     break;

//     default:    
//         console.log("");
//         break;
// }


// Data structures : objects and arrays
// * + functions () 

// 1000 3000 

// const userMMR = +prompt("What is ur MMR ? ");

// if (userMMR < 700) {
//     console.log("Take ur bagpack and put there ur hucking books");
//     // && , || , !
// }else if (userMMR > 700 && userMMR < 2000) {
//     console.log("There is some one whose mom was on the meeting with ur party-partners (was hucked)");
// }else if (userMMR > 2000 && userMMR < 4000) {
//     console.log("U should try to run faster on the streets");
// }else {
//     console.log("Oh my goodness !");
// }

// console.log(parseInt("12px"))
// console.log(+"12px")

// Data structures : objects and arrays
// * + functions () 
// 1.boolean (true / false)
// -> while , do ... while 
// -> condition rendering : if ... else , switch
// -> < , > , <= , >= , == , ===

// 2.string 

// const str = "Hello,world,";
// const serverData = "people*planets*starhuckingsheep";

// .length
// .slice()
// .repeat()
// .indexOf()
// .split()
// .substring()


// number 

// console.log(2 + 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);
// console.log(2 * 3);

// null => nothing 

// undefined => value is exist , but we don't know what exactly it is 



//  object - entity 
//  {
//  key : value 
// }

// hasSkills

// const person = {
//     name : "Ruslan",
//      field
//     surname : "Besarab" , 
//     age : 23 ,
//     // [] - arr is complicated data struct , where we have next values :
//     // index of element : element 
//     skills : [
//         "Dota 2" , "LoL" , "Virtual-girlfriend" , "Maincraft"
//     ]
// };

// get 
// extract 

// Access to nested prop via "." object.property
// Access to nested prop via "['prop-name']" object['prop-name']

// const doterName = person.name;
// const doterAge = person['age'];

// const new_prop = prompt("Eneter new prop name :")

// For dynamic actions 
// person[new_prop] = false;

// update 

// For static actions and updates
// person.age = false;

// detele 

// delete person.skills

// console.log('[person]', person);
            //   0         1      2

// const skills = ["HTML" , "CSS" , "JS"];
// console.log(skills[2]);



// Task 

// 1) Create yourself as an object 
// 2) It should be dynamic way to create property


// key : value 

// obj = {
//     key : value 
// }

// value ? str ... number => key : +value 
// typeof(typeof(obj[key]))

// const person = {
//     name : "John" , 
//     surname : "Doe",
   
// }


// const newKey = prompt("What is the name of ur new key ?");

// person[newKey] = prompt("What is the value will be here?");

// const personNewValue = person[newKey];

// const newValueToNumber = parseInt(personNewValue);

// const isFiniteNewValue = isFinite(newValueToNumber);

// if(isFiniteNewValue) {
   
//     person[newKey] = newValueToNumber;

//     console.log('[person]', person);
// }



// ! Homework :
// 1) Create convertor from $ to Euro -> get from user sum ($), 
// then convert this sum to Euro
// * You might give to user various of covert : From Euro to $ , or $ to Error 

// 2) Create empty object (define it as variable me)
// via prompts fill such fields as : name ,age , surname 
// !* Cycles

// 3) With objects created before make next actions : 
// 1. Delete one field of the keys (ur pick)
// 2. Update value one of values (ur pick)


function sum_of_two_nums(a , b) {
    console.log(`
        ${a + b}
    `)
}

sum_of_two_nums(12 , 2)