// 'use strict'
// const arr = ["not nemo",
// "not nemo",
// "nemo",
// "not nemo",
// "not nemo",
// "nemo"
// ]

// for(let i = 0; i < arr.length ; i++) {
//     const element = arr[i]; 
//     if(element === "nemo") {
//         console.log("Here is nemo on the position : " + i );
//         console.log(element);

//     }
// }
// for (let i = 0; i < arr.length ; i++)

// const nemo = {
//     firstName : {
//         surname : {
//             text : {
//                 msg : "nemouk"
//             }
//         }
//     }
// }

// console.log(nemo.firstName.surname.text.msg);

// const nemoLength = 4;
// const hiddenNemo = "fvgybuhnemofgbhnj";

// const nStartPosition = hiddenNemo.indexOf("n");

// console.log(hiddenNemo.slice(nStartPosition, nStartPosition + nemoLength));


// const object1 = {
//     name : "John",
//     hp : 100,
//     damage : 23
// }


// const object2 = {
//     name : "Bob",
//     hp : 100,
//     damage : 18
// }

// const princeOfPersia = {
//     name : "Misha",
//     damage : 13, 
//     hp : 113
// } 

// const cyberHryak = {
//     name : "John",
//     damage : 23, 
//     hp : 100
// } 

// function battle(obj1, obj2) {

//     obj2['hp'] =  obj2.hp - obj1.damage;

//     return [obj1 , obj2];
    
// }

// const result = battle(object1 , object2);
// const resultOfSecondBattle = battle(princeOfPersia , cyberHryak);

// console.log('[resultOfSecondBattle]', resultOfSecondBattle);
// console.log('[result]', result);

// let isRunning = true;

// const milf = {
//     name : "Natasha",
//     surname : "Kryachko",
//     history : []
// }

// const milfsFriend = {
//     name : "Nadya",
//     surname : "",
//     history : []
// }

// while(isRunning) {
//     alert("Hi , " + milf.name + " where you gonna in the summer ? ");

//     const place = prompt("1)Turkey 2)Crotia 3)Czech Republic 4)Poland 5)Armenia");

//     // switch 
//     // if / else 
//     switch (place.toLowerCase()) {
//         case "turkey":
//             isEngaged(milf , "Kardigan")
//             break;
            
//         case "crotia":
//                 isEngaged(milf , "Modrich")
//             break;

//         case "czech":
//             isEngaged(milf , "Rosický")
//             break;

//         case "poland":
//             isEngaged(milf , "Błaszczykowski")
//             break;

//         case "armenia":
//             isEngaged(milf , "Mkhitaryan")
//             break;
    
//         default:
//             alert("What is the dirty tricks , mr. ?")
//             break;
//     }


//     isRunning = isExit();

// }

// function isEngaged(subject ,surname) {
//     subject.surname = surname;

//     subject.history.push(subject.surname);

//     console.log("Here is " + subject.history);
// }

// function isExit() {
//     return !confirm("Do you wanna leave?")
// }

// function Milf(n, s , a) {
//     if(a < 40) return "You must be older than 35 y.o !!!";

//     return {
//         name : n,
//         surname : s,
//         age : a ,
//         history : []
//     }
// }


// const newMilf = Milf("John" , "Doe" , "55523"  );
// const otherNewMilf = Milf("Ruslana" , "Bebrova" ,32  );
// const anotherNewMilf = Milf("Ruslana" , "Bebrova" ,52  );

// console.log('[newMilf]', newMilf);
// console.log('[otherNewMilf]', otherNewMilf);
// console.log('[anotherNewMilf]', anotherNewMilf);


// while(true){
//     let hasLeft = confirm("Do you wanna leave ?");
    

//     if (hasLeft) break;
//     console.log('Here we go ! ;)');
// }

// const nemo = [ "Mish" , "Ruslan" , "Nemo" ,"Mish" , "Ruslan" ,"Mish" , "Ruslan" ,"Mish" , "Ruslan"  ] 

// for(let i = 0 ; i < nemo.length ; i++) { 
//     console.log('[nemo[i]]', nemo[i]);
//     if(nemo[i] === "Nemo") {
//         break;
//     }
// }



// ***------------------------------Class---------------------------------
// const sayHello = () => console.log("Hello!");

// const heroes = [
//     {
//         name : "John",
//         skills : [
//             {"HTML"} , "CSS" , "JS"
//         ],
//         sayHello : sayHello
//     },
//     {
//         name : "Mike",
//         skills : [
//             "HTML" , "CSS" 
//         ],
//         sayHello : sayHello
//     },
//     {
//         name : "Bob",
//         skills : [
//             "HTML" , "CSS" , "Python"
//         ],
//         sayHello : sayHello
//     }
// ]
// const john = {name : "John"};

// console.log("name" in john);

// for(let i = 0 ; i < heroes.length ; i++) {
//     console.log(i);
//     const item = heroes[i];

//     item.sayHello();

//     if("skills" in item){
//         // ... - spread , rest 
//         // console.log('[Object.keys(item)]', Object.keys(item));
//         // console.log('[Object.values(item)]', Object.values(item));
//         // console.log('[Object.entries(item)]', Object.entries(item));

//         const itemsSkills = item.skills;

//         for(let i = 0 ; i < itemsSkills.length;i++) {
//             const skill = itemsSkills[i];

//             console.log('[skill]', skill);
//         }
//         console.log("--------------------------------------");
//     }

//     // Object.keys() -> method which return keys of object as arrays
//     // console.log('[item]', Object.keys(item));
// }



// for ... of 
// for(const item of heroes) {
//     console.log('[item]', item);
// }

// console.log('[heroes]', heroes);

// !---------------------------------NESTED_LOOPS

// let sum = 0;

// for(let i = 0 ; i < 10;i++){
//     console.log('[i]', i);

//     for(let j = 0 ; j < 10;j++){
//         sum = sum + 1
//         console.log('[j]', j);
//     }
//     console.log("----------------------");
// }

// console.log('[sum]', sum);

// const arr = [
//     ["x"],["o"],["x"],["x"],
//     ["x"],["x"],["x"],["0"],
//     ["x"],["x"],["x"],["x"],
//     ["x"],["x"],["0"],["x"],
// ]

// for(let i = 0 ; i < arr.length ;i++){
//     const nestedArr = arr[i];
//     for(let j = 0 ; j < nestedArr.length ;j++){
//         const value = nestedArr[j];

//         console.log('[value]', value);
//     }
//     // console.log('[nestedArr]', nestedArr);
// }

// let arr = [2 ,3 , 1 ,5 , 23 ,13];


// for(let i = 0 ; i < arr.length ; i++){
//     const num = arr[i];

//     debugger;
    
//     for(let j = 0 ; j < arr.length;j++){

//         debugger;
//         const nestedLoopNum = arr[j];

//         if(num < nestedLoopNum) {
//             arr = swap(arr , i , j)
//         }
//     }
// }

// console.log('[arr]', arr.sort((a ,b) => a - b ));


// function swap(arr,firstElementIndex , secondElementIndex) {
//     const firstElementIndexCopy = arr[firstElementIndex]; 

//     arr[firstElementIndex] = arr[secondElementIndex];
//     arr[secondElementIndex] = firstElementIndexCopy;


//     return arr
// }


// for(let i = 0 ; i < 5 ; i++){
//     // i = 0
//     // i = 1 
//     for(let j = 0; j <= 5 ; j++){
//         // first i = 0 itter
//         // j = 0
//         // j = 1
//         // j = 2
//         // j = 3
//         // j = 4
//         // second i = 1 itteration
//         // j =  0
//         // j =  1
//         // j =  2
//         // j =  3
//         // j =  4
//         // third i = 1 itteration

//         console.log('[j]', j);
//     }
//     console.log("-------------------");
//     console.log('[i]', i);
//     console.log("-------------------");
//     console.log("-------------------");
// }

// const arr = [23 , 1 , 54 , 13];

// const sortedArr = [];

// for(let i = 0 ; i< arr.length ; i++){
//     const el = arr[i];
//     sortedArr[el] = 1;
// }

// const data = sortedArr.map((el,i) =>{
//     if(el){
//        return i
//     }
// });

// const finallySortedArray = data.filter((el) => {
//     if (el) return el;
// });

// console.log('[finallySortedArray]', finallySortedArray);

// console.log('[data]', data);

// console.log('[sortedArr]', sortedArr);


// * --------------------------------------------TRY-----CATCH---FINALLY

// try {
//     // x = 23;
//     // console.log('[x]', x);

// }catch(err) {
//     console.log(err + " ,DOWN 4to li ?!");
// }
// finally {
// console.log("WE will miss u . Come in again when u will have a free time");
// }


// *============================================= ARR ========================
// const john = {
//     name : "john",
//     add : () => {
//         console.log('[result]',2 + 2 );
//     }
// }

// const john = {
//     name : "john",
//     add : function () {
//         console.log('[result]', 2 + 2 );
//     }
// }

// john.

// const arr = [23 , 13 , 4 , 5];

// const app = document.querySelector("#app");

// 1 arg of forEach is a function callback
//                      elem   i
// arr.forEach(function (item , index){
//     console.log('[index]', index);
//     console.log('[item]', item + "it's a decorator might be here");
// })
// arr.forEach((item , index) => {
//     app.append(item + "\n")
//     console.log('[index]', index);
// })

// console.log('[arr]', arr);


// // functions expression
// const kek =  () => {
//     console.log("Hello world");
// }
// // arrow
// const kek1 = () => {
//     console.log("Hello world");
// }

// kek()
// kek1()

// function sayhello() {
//     console.log("HELLO!!!!!");
// }




// 1) Create store = []
// 2) Store contains following objects : {category : "drama" , 
// movie : ["Barbie" ,"Spartacass"] , },
// 2.1) {category : "comedy" , movie : ["FunnyShit" ,"FunnyShit2"] , }

// User must recievee prompt with following message :
//  "Enter category of film which u wanna watch : drama , comedy"