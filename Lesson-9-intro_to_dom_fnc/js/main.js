// const app = document.querySelector("#app"); 
// const submit = document.querySelector("#submit"); 

// // user 

// const fields = [
//     document.querySelector("[name='name']"),
//     document.querySelector("[name='email']"),
//     document.querySelector("[name='password']"),
//     document.querySelector("[name='confirm-password']"),
// ];

// submit.addEventListener('click' , (e) => {
//     e.preventDefault();

//     const userData = getFiledsValues(fields);
// })

// function getFiledsValues(fields) {
//     if(!Array.isArray(fields)) return 'Incorrect data';

//     let usersData = {};

//     for(let i = 0 ; i < fields.length ;i++) {
//         const field = fields[i];

//         if(field.name === "email") {
//             const isValid = emailValidator(field.value);

            
//             field.className = isValid;

//             const errMsg =  document.querySelector(".error-message");

//             errMsg.style = isValid === 'incorrect' 
//                                                 ? "display: block" 
//                                                 : "display: none" 
//         }

//         usersData[field.name] = field.value;

//     }

//     return usersData
// }


// function emailValidator(field) {
//     if(field.includes("@") && field.includes(".")) return 'correct';

//     return 'incorrect'
// }


// function getFieldValue(field) {
//     return field.value;
// }

// 1. Split condition : @ , . 

// ! MISHA 
// const email = prompt("Enter ur mail?");

// const validationProps = {
//     email : false,
//     isAt : {
//         errMsg: "Email should contain '@'",    
//         value: false
//     } ,
//     isDot : {
//         errMsg: "Email should contain '.'",    
//         value: false
//     } 
// }

// const validEmail = validationProps.email;

// validationProps.isAt.value = symbolCheck(email,"@");
// validationProps.isDot.value = symbolCheck(email,".");

// validationProps.email = isValid(validEmail,validationProps.isAt.value ,validationProps.isDot.value)

// if(validationProps.email === false) {
//     if(!validationProps.isDot.value){
//          errMsg(validationProps.isDot.errMsg)
//     } else {
//         errMsg(validationProps.isAt.errMsg)
//     }
// }else {
//     alert("Congratulations!")
// }


// function errMsg(msg) {
//     console.log(msg);
// }

// function isValid(data , key1 , key2) {
//     if(key1 && key2) return true

//     return false
// }

// function symbolCheck(field, symbol) {
//     return field.indexOf(symbol) === - 1 ? false : true 
// }
 

// Misha portret
// name : misha | Misha | mIsha | MiSha , nick : dbkn228
// ____ name 
// ____ nick 

// email : should contain "@" 

// password , length more than 5 symbols where 

// const userMisha = {
//     name : "Misha",
//     nickname: "dbkn23",
//     age : 23
// } 


// const entredName = prompt("Enter ur name : ");
// comparisonFunction(userMisha.name , entredName ,"You are Misha");

// const entredNickname = prompt("Enter ur nickname : ");
// comparisonFunction(userMisha.nickname , entredNickname ,"You are dbkn23");

// const entredAge = parseInt(prompt("Enter ur age : "));
// comparisonFunction(userMisha.age ,entredAge,"-");

// function comparisonFunction(a , b , msg) {
//     if (typeof a === 'string' || typeof b === 'string'){
//         if(a.toUpperCase() === b.toUpperCase()) {
//             alert(msg);
//         }
//     } else {
//         console.log("There are numbers");
//     }
// }

// const group = [
//     {
//         name : "Oleg"
//     },
//     {
//         name : "Arsen"
//     },
//     {
//         name : "Alina"
//     },
//     {
//         name : "MiSHA"
//     },
//     {
//         name : "Dimon"
//     },
//     {
//         name : "Mudriy"
//     },
//     {
//         name : "Max"
//     },
//     {
//         name : "Doter"
//     },
// ]

// for(let i = 0 ; i < group.length ; i++) {
//     const student = group[i];

//     console.log('[i]', i);
//     console.log('[student]', student);
// }

// for(let i = 0 ; i < 10 ; i++){

//     for(let j = 0 ; j < 10 ; j++) {
//         debugger
//     }
// }

// const poiner = "class";

// for(let firstCharI = 0 , secondCharI = 1; i < poiner.length && j <= poiner.length - 1 ; firstCharI++ , secondCharI++) { // quadratic 
//     const firstChar = poiner[firstCharI]; // O(1)
//     const secondChar = poiner[secondCharI];

//     // for(let b = )   // 
//     console.log('[firstChar]', firstChar);
//     console.log('[secondChar]', secondChar);
//     console.log("---------------------------");
    
// }

// function getA(a) {
//     console.log(a);
// }

// getA("a")
// getA("b")
// getA(1)
// getA({})
// getA([])

// Write ur own store  - + 
// Program should initialise u as an admin , 
// admin data must be regstred above whole ur program
// admin = { nick : admin , password  : 228 }

// User might has a choice enter as a manager or guest 


// guest permisson .
// Such as : Products (user might to see what products are we have) *amount of 

// admin permission : 
// Therefore u an admin , u might add new production to the store 
// * also if u wanna impress me you might add an amount of products 

// products = [ {label : "bread" , amount : 1 , status : alright } ]

// Imagine that you not always have certain rag of products and maybe in the future 
// it might looks as another arr 


// Array - is literally an object where keys are indexes
// Array has an attr -> length  
