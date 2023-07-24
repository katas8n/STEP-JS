// Scope 

// Global , local , built-in

//  [built-in]
// alert() , function , const ,var , while , console 

// [GLOBAL]
// let b ;


// Garbage collector 

// Scope of var - always GLOBAL 
// Scope of let - always LOCAL 

// if (true) {
//     var a = 23;


//     // [LOCAL]
//     let b = 13;

//     console.log('[20th row]',b);
// }
// const hey = [
//     "Mike" , "Bob" , "John", "Jim"
// ];

// showUserName(hey);

// 1) Pure Function doesn't change global scope -> you have params
// parametr - is just a variable 
// 2) Intelligent function should return something 
// 3) Return stops function

// function showUserName(users) {
//     console.log(users);
//     // [GLOBAL]
//     let str = ""
//     console.log('[users]', users);
//     for(let i = 0 ; i < users.length ; i++) {
//         // for is actually block , and user exists only here 
//         // [LOCAL]
//         const user = users[i];


//         if (i === users.length - 1){
//             str += user;
//         }else {
            
//             str += user + ",";
//         }

//         console.log(user);
//     }

//     console.log('[str]', str.split(","));
//     // console.log(user); // user was crashed immidiately after 'for block'

// }


// const heroes = ["John" , "Mike", "Bob" , "Nemo" , "USAlan" , "Dimon"];

// const user = [
//     ["email" , "k@i.ua"],
//     ["password" , "2323"],
//     {adress : "Hello world 23 ;)"}
// ]
// findNemo("hello world");
// findNemo({"Hello" : "World"});
// findNemo(23);
// findNemo(heroes)


// function findNemo(fish) {
//     if (!Array.isArray(fish)) return console.error("Are u fucking kidding me ? ");
//     for(let i = 0 ; i < fish.length ; i++) {

// for in 

// in ? return 
//         const hero = fish[i];
    
//         if(hero === "Nemo") {
//             console.log('[i]', i);
//             console.log('[hero]', hero);
//             console.log("Here is nemo");

//             return;
//         }

//         console.log(i);
    
//     }

// }


// global
// let result;
// sum(result, x , 2);
// console.log('[result]', result);
// sum(result, 10 , 2);
// sum(result, "Hello " , "world");

// console.log('[result]', result);

// function sum(result , x, y) {
//     console.log('[result]', result);
//     // local
//     // const result =  x + y;
//     // If function can't find variable inside , it will look for variable in the global scope 
//     result = x + y
//     console.log('[result]', result);

//     return result
// }



// EXAMPLE 2 
// let x = 23;


// const result = changeX(156);

// function changeX(x) {
//     debugger;
//     x = 13 + x

//     return x 
// }


// !!! FOR 2 numbers 
// 1) Create programm calculator  via functions 
// (function must be pure) + function might return something if u need 
// USE : prompt , alert , function declaration , functions expression , arrow function 
// 2) Calculator should request numbers + symbol