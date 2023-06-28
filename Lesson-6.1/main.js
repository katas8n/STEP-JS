// let name; 

// console.log('[name]', name);

// while(true) {
//     const userName = getName();

//     greeting(userName);

//     const isQuit = confirm("Do you wanna escape this hit ?");

//     if(isQuit) break;
// }

// function getName() {
//     return prompt("Hey , enter ur name :")
// }

// function greeting(name) {
//     console.log("Hello ," + name);
// }


// * Registration / authorization mechanism 
// for / while 
// function 

// in operator

// const jim = {
//     name : "Jim" , 
//     gun : false 
// }

// console.log('done' in jim);

// [] -> Data structure 
// let isRunning = true;

// const users = [];

// while(isRunning) {
//     const choice = getUserChoice();

//     switch (choice.toUpperCase()) {
//         case "A":
//             const email = prompt("Enter ur email : ");
//             const password = prompt("Enter ur password : ");

//             const person = createdPerson(email , password);

//             users.push(person);

//             break;

//         case "B":
            
//             break;

//         case "C":
//             eachOf(users);
//             break;

//         case "Q":
//             isRunning = false;
//             break;
    
//         default:
//             showError("Something went wrong , incorrect data ...")
//             break;
//     }
// }

// function eachOf(arr) {
//     for(let i = 0; i < arr.length ; i++) {
//         const element = arr[i];

//         if(!isObject(element)) continue;

//         // for... in
//         for(const key in element) {
//             const value = element[key];
//             console.log('[key]', key ,value);

//         }

//         console.log("********************");

//     }
// }

// function isObject(element) {
//     const elementType = typeof(element);

//     if(elementType === 'object') return true;

//     return false;
// }

// function createdPerson(email , password) {
//     // [] - dynamic definition 
//     return {
//         // ! dynamic
//         // k@i.ua : k@i.ua
//         // ! static
//         // email : k@i.ua
//         email : email,
//         password : password
//     }

// }

// function getUserChoice() {
//     return prompt("a) Registration b) Login c) Show all users Login q) Exit")
// };

// function showError(msg) {
//     alert(msg)
// }




// Fake bank system 
// USE : functions , while , for , in opetor , for ... in , array
// 1) Greeting (make funtion that will greet user)
// 2) Get the following values : name , card_number , date ,cvv  and make object 
// 3) Push to UsersDB


// Interface : a) Get users b) New scum operation q) quit