
// 1) Create store = []
// 2) Store contains following objects : {category : "drama" , 
// movie : ["Barbie" ,"Spartacass"] , },
// 2.1) {category : "comedy" , movie : ["FunnyShit" ,"FunnyShit2"] , }

// User must recieve prompt with following message :
//  "Enter category of film which u wanna watch : drama , comedy"


// Date 
// Array = [];
// Object = {};

    // ! ! - convert boolean values
    // * !true = false
    // * !false = true
    // * !!false = false
    // * !!!false = true
    // * !!!true = false

// data
// const store = [
//     // i  = 0
//     {
//         category : "drama" , 
//         movie : [
//             {
//                 label : "Barbie",
//                 yearOfRelease : new Date().getFullYear().toString(),
//                 tags : ["#iCan'tBelieveIt" , "#it'sAmazing"]
//             },
//             {
//                 label : "Spartacass",
//                 // new
//                 // Constructors
//                 yearOfRelease : new Date().getFullYear().toString(),
//                 tags : ["#rome" , "#gladiator" , "#misha"]
//             } 
//         ] 
//     },
//     // i  = 1
//     {
//         category : "Shiter",
//         movie : [
//             {
//                 label : "ForceAge",
//                 yearOfRelease : new Date().getFullYear().toString(),
//                 tags : ["#iCan'tBelieveIt" , "#it'sAmazing"]
//             },
//             {
//                 label : "Tak<->sI",
//                 // new
//                 // Constructors
//                 yearOfRelease : new Date().getFullYear().toString(),
//                 tags : ["#rome" , "#gladiator" , "#misha"]
//             } 
//         ]
//     },
//     // i = 2
//     {
//         category : "comedy" , 
//         movie : [
//             {
//                 label : "ForceAge",
//                 yearOfRelease : new Date().getFullYear().toString(),
//                 tags : ["#iCan'tBelieveIt" , "#it'sAmazing"]
//             },
//             {
//                 label : "Tak<->sI",
//                 // new
//                 // Constructors
//                 yearOfRelease : new Date().getFullYear().toString(),
//                 tags : ["#rome" , "#gladiator" , "#misha"]
//             } 
//         ]
//     },
// ];

// // toggler
// let isRunning = true;

// // util 
// const isArray = Array.isArray;

// while(isRunning) {
//     const film = prompt(
//         `Hi , sup ? You might pick category to watch 
//          list of films which are related to : ${getCategories(store)}...`
//     ); 

//     matchCategories(film,store);

//     isRunning = isExit();

// }


// // i++ = i + 1 
// function getCategories(arr) {
//     // return true/false 
//     // return - stop execution at the point where it is
//     if(!isArray(arr)) return;

//     const categories = [];

//     for(const element of arr){
//         // in 
//         const hasCategory = 'category' in element;
//         if(hasCategory) categories.push(element.category);
//     }

//     return categories.join(" ,")
    
// }

// function matchCategories(pickedCateogry , arr) {
//     if(!isArray(arr)) return;

//     for(let i = 0 ;i < arr.length ; i++){
//         const category = arr[i];
        
//         const hasCategory = category.category === pickedCateogry;

//         if(!hasCategory) continue;

//         console.log(category.movie);
//     }
// }

// function isExit() {
//     return !confirm("Do you wanna leave ?")
// }
// *------------------------------------------------------CLASS----------

// declaration
// params by default 
// params by default must be declared after other params
// when we don't know how much params will put user there 
// function messageDecorator (...args) {
//     // console.log(greeting , fullName);
//    for(const arg of args){
//         console.log("****************");
//         console.log(arg);
//    } 

//    console.log("****************");
// }


// messageDecorator("Hello" , "World" , "HI!" , "Sended");

// const tags = [];

// let isRunning = true;

// while(isRunning){
//    const tag = prompt("Enter as much products as u want ,(click 'q' if u wanna stop) : ");
//     if(tag === "q" || tag === "Q") break;

//     tags.push(tag);

//    if(prompt("Do you wanna see at ur object : y")) {
//     console.log(new Product("apple" ,"There is simply an apple" , 13.23 , tags));
//    }
// }

// constructor 
// new - is a keyword which invokes the constructor ,
// constructor - is a structure buil-in every object by default 
// and gives for every extend element props that it is .
// function Product(productName , description , price ,...args) {
//     let product = {
//         tags : []
//     };

//     for(const arg of args){
//         product.tags.push("#" + arg);
//     };

//     product.tags = product.tags.join(",")

//     return Object.assign({
//         productName : productName,
//         description : description,
//         price : price
//     }, product)
// }

// Object 

// const group = [
//     {
//         "name" : "Arsen" , 
//         "rating" : 13 ,
//         "image" : "https://sparta.cz/upload/person/4/1679075046zeq0y-vitarigov-arsen-1800x1500.png?w=900"
//     },
//     {
//         "name" : "Dima" , 
//         "rating" : 23 ,
//         "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Jamie_Dimon%2C_CEO_of_JPMorgan_Chase.jpg/1920px-Jamie_Dimon%2C_CEO_of_JPMorgan_Chase.jpg"
//     },
//     {
//         "name" : "Vitaliy" , 
//         "rating" : 13.23 ,
//         "image" : "https://fcdynamo.com/img/7c965e86-b655-4a04-897a-9928374f0c38/-17-10-08-2.jpg?fm=jpg&q=80&fit=max&crop=1500%2C1000%2C0%2C0"
//     },
//     {
//         "name" : "Misha" , 
//         "rating" : 13.13 ,
//         "image" : "https://m.media-amazon.com/images/I/61OU9AmlkqL.png"
//     },
//     {
//         "name" : "Alina" , 
//         "rating" : 32.13 ,
//         "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Alina_Devecerski.jpg/1200px-Alina_Devecerski.jpg"
//     },
//     {
//         "name" : "Oleg" , 
//         "rating" : 32.13 ,
//         "image" : "https://upload.wikimedia.org/wikipedia/commons/b/b0/Oleg_of_Novgorod.jpg"
//     },
//     {
//         "name" : "Alex" , 
//         "rating" : 312.13 ,
//         "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Alexsandro_de_Souza.jpg/1920px-Alexsandro_de_Souza.jpg"
//     },
//     {
//         "name" : "Yarost'SlavaUkraini" , 
//         "rating" : 3.213 ,
//         "image" : "https://cdn.britannica.com/99/135799-050-A1C2A3D4/model-Yaroslav-I-Cathedral-of-St-Sofia.jpg"
//     },
//     {
//         "name" : "Doter" , 
//         "rating" : 23.22 ,
//         "image" : "https://cdn-celli.nitrocdn.com/SBXgGEHuvzBTaYAeLRhZzOkGUoNBhmkQ/assets/images/optimized/rev-ef5c079/www.sosyncd.com/wp-content/uploads/2022/12/Cancer-spirit-animal-3.png"
//     },
// ]

// const displaySC = document.querySelector("#screen");
// const eachBtn = document.querySelector("#each");

// function tag() {
//     const div = document.createElement('div');
//     div.className = "student";

//     return div
// }

// !!!!!!!!!!!!!!!!!!!!!!RETURN NOTHING!
// function forEach(el ,i) {
   
//         const div = tag();

//         div.innerHTML = `
//             <h4>index : ${i}</h4>
//             <h3>name : ${el.name}</h3>
            
//             <h3>rating : ${el.rating}</h3>
//             <h1>-----------------------------</h1>
//         `;
        
//         displaySC.append(div)
// }

// !--------forEach
// eachBtn.addEventListener('click' , () => {
//     group.forEach(function (el ,i) {
   
//         const div = tag();

//         div.innerHTML = `
//             <h4>index : ${i}</h4>
//             <h3>name : ${el.name}</h3>
            
//             <h3>rating : ${el.rating}</h3>
//             <h1>-----------------------------</h1>
//         `;
        
//         displaySC.append(div)
//     })
//     console.log(group);
// })

// const decorateBTN = document.querySelector("#decorate") ;

// !--------map => return new modified arr !
// const newArr = group.map((student ,index) => {
//     return `<h2>${student.name}</h2>`
// })

// console.log('[group]', group);
// console.log('[newArr]', newArr);

// !--------filter => return value if its sitisfied a condition
// const arsen = group.filter((el ,i) => {
//     return el.name === "Arsen"
// })

// console.log('[arsen]', arsen);
// !--------some  / every => return value if its sitisfied a condition
// const isSome = group.some((student) =>  student.rating < 3.5);

// const areEvery = group.every((student) => typeof student === "object");

// ! reduce 
// const sum = [23 , 1241 ,124 , 41255 , 12412].reduce((acc,curentValue) => {
//     console.log('[acc]', acc);
//     console.log('[curentValue]', curentValue);
//     return acc + curentValue
// },0)


// console.log('[sum]', sum);

// for(let j= 0 ,i = 1 ; j < 10  || i < 9 ; i++ , j++){
//     console.log('[i]', i);
//     console.log('[j]', j);
// }

// HW 

// Create ur own IT-courses as "IT-STEP"
// const IT_STEP = {

// };

// IT_STEP must contain following key|value fields :
// const budget 
// teachers : [] 
// students : [] 

// Amount of students/teacher is up to you
// Income of students/teacher is up to you
// Outcum of students/teacher is up to you

// teacher schema : {id : "", name : ""  , surname : "" , incum : ... }
// students schema : {id : "", name : ""  , surname : "" , outcum : ... }

// Budget of IT-STEP if average incum of teacher is : 2000 
// Budget of IT-STEP if average outcum of student is : 2100 

// All must be written according to the best practices.