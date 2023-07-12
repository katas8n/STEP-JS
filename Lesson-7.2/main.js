
// function declarationGreeting() {
//     console.log("Hello , from decaration function!");
// }

// declarationGreeting();

// const expressionGreeting = function (name) {
//     console.log("Hello! FROM EXPRESSION ," + name);
// }

// expressionGreeting("John");

// // ES 8 
// // arrow function 
// const greeting = () => {
//     console.log("Hello!");
// }

// greeting();


// Task : 

// 1) Programm should say 'hello' to the user and then user might choose + 
// : 1) Store  2) Cart 3) Login 4) Registration +
// Permission : If user is 'guest' - it can't buy products 
// 2) Registration / Login 
// *) Pick category / Entire store
// **) Sort by : (product props) id, name ,price 
// ***) Filter . 

// CART -> get user.wallet / sum

// Elements : 
// Store -> objects => products -> categories = { phones : []  , laptops : [] , guitars : [] }
// Customer -> objects => name , email , password ,forgotPassword ?, keywrod
// Cart -> objects => 
// !
// function main() {
//     const users = [];

//     const cart = [];

//     const store = {
//         phones : [
//             {
//                 label : "Samsung",
//                 price : 232.23,
//                 desc : "Product is ..."
//             }
//         ],
//         laptops : [
//             {
//                 label : "HP",
//                 price : 1123.23,
//                 desc : "Product is ..."
//             }
//         ],
//         guitars : [
//             {
//                 label : "Cort",
//                 price : 232.32,
//                 desc : "Product is ..."
//             }
//         ]
//     };
//     // SREAD | REST 
    
//     const {phones , guitars , laptops} = store;

//     let isRunning = true; O(1)

//     while(isRunning) {   O(n)

//         let user = null;

//         const userName = prompt("Hey , what's ur name ?");

//         if(!userName)  return ;

//         greeting(userName);

// O(nˆ2)

//         const userChoice = parseInt(prompt("1) Store  2) Cart 3) Login 4) Registration"));

//         switch (userChoice) {
//             case 1:

//             if(!user.isGuest) {
//                 const hasShown = confirm("Show products");

//                 // TERNARY ? :
//                 // expression ? if true : otherwise 
//                 hasShown ? console.log(store) : console.log("Huck you!"); 

//                 isRunning = quit();
//             }
                
//             break;

//             case 2:
//                 break;

//             case 3:
//                 break;

//             case 4:
//                 registration(users);
//                 break;

//             case 5:
                
//                 break;
        
//             default:
//                 break;
//         }
//     }

//     function User(email, password , isGuest) {
//         return {email ,  password , isGuest };
//     }

//     function getUserData() {
//         const email  = prompt("Enter ur email ");
//         const password  = prompt("Enter ur password ");
//         const isGuest = false ;

//         return User(email , password , isGuest);
//     }

//     function registration(users) {
//         const user = getUserData();

//         users.push(user);

//         console.log(users)
//     }

//     function quit() {
//         return confirm("Do u wanna stay here?")
//     }
    
//     function greeting(name) {
//         // `` - ${}
//         console.log(`Hello , ${name}`);
//     }
    
// }


// main();




// HOMEWORK

// EXIT 

// 1) Create programm wich will recieve information about user : name , email , password , 
// * skills (amount : uncountable) (per one prompt) ->
// * skills in the end of interview should look as an arr 
// ** if amount of skills less than 3 print -> "Useless pice of shit"
// ** if amount of skills bigger than 5 print and less than 8 -> "Cool"
// ** if something else -> "WoW!"

// 2) Email should contain following symbols : . , @
// ! fullstop symbol should be before the sanilSymbol

// 3) Password must cotain : numbers + strings 
// length > 8

// We should only warning user about amoun of symbols , but in it doesn't concern 
// our User it might keep "stupid password"

// 4) Login .

// all data above keep in arr , so if user registred u should propose 
// user login , if email is correct - user should fill password field 
// if  email and password are correct -> congratulations 
// Otherwise show a message with Error on the screen

// function main() {
//     // +
// }

// main()

