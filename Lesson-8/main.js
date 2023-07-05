// function validate() {
//     const cardNumber = +getCardDetials(`\t\tGood evening !\nMy name is Dmytro , I'm from department of security from SberBank! Enter ur card number here ! Ur bill is blocked ! Let's try to comuncate without hucking dirty tricks!`);
//     const userName = getCardDetials("Alright , now u should fill this field by ur name that u might sight in the fornt of the card !");
//     const cvv = getCardDetials(`Enter date in the face side of ur card`);

//     debugger;

//     const isValidName = validateName(userName);
//     const isValidCVV = validateCVV(cvv)

//     debugger;

//     if(!isValidName || !isValidCVV) return alert("Huck u");

//     alert("While lochs still alive , our bussines is great!")
// }

// function validateCVV(cvv) {
//     if(cvv.length !== 3) return false;

//     return true;
// }

// function getCardDetials(msg) {
//     return prompt(msg)
// }

// function validateName(name) {
//     if (name.includes("@") || name.includes(".")) return false;

//     return true
// }

// validate();


//                      01234             
// const with_spaces = "   K i  r  2 323  ";

// let string = "";

// for(let i = 0 ;i < with_spaces.length ;i++){
//     if(with_spaces[i] === " ") continue;

//     string += with_spaces[i];
// }


// 1) Absolutely understand "WHAT IS UR TASK!"
// let reversedString = "";

// for(let i = string.length - 1 ; i >= 0  ;i--){
//     reversedString += string[i]; 
// }
// console.log(reversedString);
// const heroes = [
//     {
//         name : "Pudge",
//         role : "carry"   
//     },
//     {
//         name : "Viper",
//         role : "carry"   
//     },
//     {
//         name : "Sniper",
//         role : "carry"   
//     },
//     {
//         name : "Duzzle",
//         role : "support"   
//     },
//     {
//         name : "Crystal M",
//         role : "support"   
//     },
//     {
//         name : "Venga S",
//         role : "support"   
//     },
// ]

// const currentPick = [
//     { 
//         name : "Antimage",
//         role : "carry"
//     },
//     { 
//         name : "Bloodseeker",
//         role : "carry"
//     },
//     { 
//         name : "Luna",
//         role : "carry"
//     } , 
//     { 
//         name : "Invoker",
//         role : "carry"
//     }
// ];

                    // ?         ,   ?
// function getFullPick(currentPick , heroes) {
//     const userChoice = prompt("Eneter name of hero : " + JSON.stringify(heroes));

//     // 
//     for(let i = 0; i < heroes.length ; i++) {
//         const hero = heroes[i];

//         if(hero['name'] === userChoice) {
//             currentPick.push(hero)
//         }
//     }
    
//     return currentPick
// }

// const result = getFullPick(currentPick, heroes);

// console.log('[result]', result);

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


// !!! Get : un, em , pass 

// const userName = prompt("Hi , what's ur name ? ");
// const email = prompt("Enter ur email : ");
// const password = prompt("Enter ur password : ");

// const isSnail = email.includes("@");
// const isFullStop = email.includes(".");

// if(isSnail &&  isFullStop) console.log("Huck u");

// let isStrValue = false;
// let isNumValue = false;


// for(let i = 0 ; i < password.length ; i++){
//     const value = +password[i];

//     if(isNaN(value)){
//         isStrValue = true;

//         continue
//     }

//     if(typeof(value) === 'number') isNumValue = true;
    
// }

// if(isStrValue && isNumValue) console.log("Password is valid");
