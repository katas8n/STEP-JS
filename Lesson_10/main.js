
// Store = [];
// const myStore = {
//     grocerieStore : [
//         {
//             title : "Bread"
//         },
//         {
//             title : "Banana"
//         },
//     ],
//     techniqueStore : [
//         {
//             title : "Phone"
//         },
//         {
//             title : "Laptop"
//         },
//     ]
// };

// // ...
// const roles = ['admin' , 'guest'];

// function main() {

//     while(true) {
//         const isChoiceExit = isExit("Do you wanna get out of here ? ");

//         if(isChoiceExit) break;

//         const role = prompt(`Enter ur role:${roles}`).toLowerCase();

//         const roleId = getRoleId(role,roles);

//         if(roles[roleId] !== roles[roles.indexOf('admin')]) return;

//         debugger;

//         const choicedOption = isExit("Enter 'ok' if u wanna add product , or 'cancel' which oposite and close ur programm");

//         if (!choicedOption) break;

//         const productTitle = prompt("Enter the title of product : ");
//         addProduct(myStore.grocerieStore , productTitle);

//         console.log('[myStore.grocerieStore]', myStore.grocerieStore);
    
//     }
// }
// function createProduct(productTitle) {
//     return {
//         title : productTitle
//     }
// }

// function addProduct(arr , productTitle) {
//     const newProduct = createProduct(productTitle);

//     if(isArray(arr)) return false;

//     arr.push(newProduct)
//     console.log("here");
// }

// function isArray(arr) {
//     if(!Array.isArray(arr)) return true;

//     return false
// }

// function getRoleId(role , arr) {
//     if(isArray(arr)) return;

//     if(arr.includes(role)) {
//         const roleIndex  = arr.indexOf(role)

//         return roleIndex;
//     }
// }

// function showProducts(arr) {

//     if(isArray(arr)) return;

//     for(let i = 0 ;i < arr.length ; i++) {
//         const el = arr[i];
//         console.log('[el]', el);
//     }
// }

// function isExit(msg) {
//     return  confirm(msg);
// }

// main()

// !---------------------------END-OF-homework==========================

// boolean , string , number's , undefined , null -> DT

// Objects->(Arrays) -> DS

// boolean                  -> falsy : 0 , null , undefined , ...
// ! - not , && - and , || - or                     -----------> logic o
// < , > , === , == , <= , >= 
// console.log(!true);
// console.log(false === undefined);
// if , else (condition - aways will be a boolean) =============> true / false 

// console.log(!true);
// console.log(!!true);
// console.log(!2)

// Sum of boolean
// If at least one of condition is false -> we will recieve False 
// console.log(true && true && false)

// console.log(true && "" && 1);
// console.log("" || undefined || true);

// + , / , % , * , - , ^

// console.log(3 , 3.14);
// 2 + 2 / 2 * 2 


// ! string

// const misha = "dbkn228";
// const skills = "html,css,js,sass";

// console.log('[misha|charAt]', misha.charAt(1)); // return character by index
// console.log('[misha|charCodeAt]', misha.charAt(1)); // return characters unicode 
// console.log('[misha|charCodeAt]', misha.charCodeAt(1)); // return character by index
// console.log('[misha|IMMUTABLE]', misha); // string is immutable statement
// console.log('[misha|CONCAT]', misha.concat(" Misha")); // Concat strings 
// console.log('[misha|INCLUDES]', misha.includes("2")); // string includes substr -> true/false 
// console.log('[misha|indexOf]', misha.indexOf("2")); // find an index of element(char) , return -> index or -1
// console.log('[misha|lastIndexOf]', misha.lastIndexOf("2")); // find an index of element(char) , return -> index or -1
// console.log('[misha|length]', misha.length); // find an index of element(char) , return -> index or -1
// console.log('[misha|replace]', misha.replace('2' , 'Misha')); // replaced found area on second arg
// console.log('[misha|replace-all]', misha.replaceAll('2' , 'Misha')); // replaced found areas on second arg
// console.log('[misha|split]', skills.split(",")); // split string on chars and return arr
// console.log('[misha|slice]', misha.slice(0 ,-1)); // slice since ... to ...
// console.log('[misha|trim]', "    Misha    ".trim()); // trim spaces
// console.log('[misha|toLowerCase]', "    Misha    ".toLowerCase()); // .
// console.log('[misha|toUpperCase]', "    Misha    ".toUpperCase()); // 


// ! for() , while () 

// While working until condition/expression is true 
// While stops its work when meet 'break'

// while() {}

// for 
// for stops its work when meet 'break'
// for(initialization of counter value ; condition ; what would be happened on the next step) i++     equal    i = i + 1

// let i = 0;
// + - incr
// console.log(i++);
// console.log(++i);
// - - decr
// console.log(--i);
// console.log(i--);


// ! DS 

// const obj = {
//     name : "John",
//     surname : "Doe",
// }

// console.log(obj.name);
// console.log("[KEYS]",Object.keys(obj));
// console.log("[VALUES]",Object.values(obj));
// console.log("[CONCAT_OBJ]",Object.assign({age : 23} , obj));

// * + Build on the way 
// obj.surname = "Bob";

// const kekek = "surname"; 
// obj[kekek] = "Doe";

// console.log(obj);

// arr = []
// const arr_ = [2,5,8];

// arr.slice()
// const arr = arr.concat([9,6,7],[8,9,0])
// arr_.includes(2)

// func declar
// function sum(x,y) {
//     return [x + y,22,{}]
// }

// console.log(sum(2,'3'));

// a();

// func expr
// const a = function () {
//     return "hello world"
// }

// console.log('[a]', a); // refer to function 
// console.log('[a]', a()); // execute function 


// ES 8 - 2020  
// const arrow = () => 23;

// console.log(arrow())

// Arrays -> method 
// const arr = ["Mike" , "Bob" , "John"];


// arr.filter(el => el === "Mike")

// arr.forEach((el,index) => {
//     console.log('[index]', index);
//     console.log('[el]', el);
// })

// arr.unshift(132)
// arr.shift()

// // splice

// const newArr = arr.map(el => {
//     return el * 2 
// })

// console.log(newArr);

// // push , pop , slice , splice 

// const value = +prompt("enter value that u wanna delete");


// // add element in the end of arr
// arr.push(23);
// arr.push(13);

// // delete last element in the end of arr
// arr.pop()
// arr.push("Hello world");

// // access
// console.log(arr[0]);
// console.log(arr[1]);

// console.log(arr);

// console.log(arr.slice(0,1))
// console.log(arr.concat([123 , 23 , 32]))

// console.log(arr);

// delete arr[128]

// console.log(arr);

// 1) Create arr = ["John" , "Bob" , "Mike" , "Don"]
// 2) Add in the end of arr : "Ruslan"
// 3) Remove last element of arr 
// 4) Write function that will show all items one by one with : index , value
// 5) 'HelloworldMishaNeRuslanDota2' -> 
//  - Find where is Misha
//  - Find where is Dima and slice him into new string which would named ruslan2
//  - Write console.log("Dimon!!!!!! Ta tara tata ta ta ta")
// 6) Write ur own exmaple of : arrow function , 
// function expression and function declaration 
// * - Function must be useful 