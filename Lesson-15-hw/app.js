// * ---------Function-example--------
// Description
// value - is a param , parm => is a dependency -> What is that ? 
// const convert = (value) => {
    // return - stop execution at the point where it is 
    // if(value.toLowerCase() === 'yes') return true;

    // return false;   
// }

// const answer = prompt("She seems hate me . Isn't she?");

//                       Here we define what will be a value into convert funct
//                       value = answer
// const result = convert(answer);

// console.log('[result]', result);

// * ---------HOMEWORK---------

// let isArray = Array.isArray;

// const extreactData = (people , prop) => {
//     if(isArray(people)){
//         let sum = 0;
//         // for - common
//         // for of - for arrays
//         // for in - for objects
//         for(const person of people) {
//             const value =  person[prop];
//             sum += value;
//         }
//         console.log(sum);

//         return sum;
//     } 


//     return "Incorrect data!";
// }

// const BUDGET_BY_DEFAULT = 0;
// const INCOME_BY_DEFAULT = 2000;
// const OUTCOME_BY_DEFAULT = 2100;

// const IT_STEP = {
//     budget : BUDGET_BY_DEFAULT,
//     teachers : [
//         {
//             name : "John",
//             surname : "Doe",
//             income : INCOME_BY_DEFAULT             
//         },
//         {
//             name : "Mike",
//             surname : "Bibby",
//             income : INCOME_BY_DEFAULT             
//         },
//     ],
//     students : [
//         {
//             name : "Bob",
//             surname : "Dylan",
//             outcome : OUTCOME_BY_DEFAULT             
//         },
//         {
//             name : "Jim",
//             surname : "Root",
//             outcome : OUTCOME_BY_DEFAULT             
//         },
//         {
//             name : "Mick",
//             surname : "Tompson",
//             outcome : OUTCOME_BY_DEFAULT             
//         },
        
//     ]
// }
// const obj = {
//     name : "John"
// }

// for ...in key
// for(const key in IT_STEP) {
//     const value = IT_STEP[key];

//     switch (key) {
//         case 'students':
//             extreactData(value,'outcome');
//             break;
            
//         case 'teachers':  
//             extreactData(value,'income');
//             break;
            
//         case 'budget':
//             const outcome = extreactData(IT_STEP.students,'outcome');
//             const income = extreactData(IT_STEP.teachers,'income');
//             const prev_budget = IT_STEP[key];

//             IT_STEP.budget = outcome - income;

//             console.log(outcome - income);

//             console.log('[prev_budget]', prev_budget);
//             console.log('[actual_budget]',   IT_STEP.budget);
//             break;
    
//         default:
//             break;
//     }
// }

// *-------------------CLASS-------------------

// ! Worst case 
// const html = {skill : "HTML"};
// const css =  {skill : "CSS"};
// const js =  {skill : "JS"};

// const skills = [html,css,js];

// const john = {
//     skills : skills
// }

// console.log('[john]', john);

// * Factory function
// * this
// * class 

// function Cat(name,age) {
//         this.name = name ;
//         this.age = age;
//         this.greeting = function () {
//             console.log(this.name);
//             console.log("HI! " , age);
//         }
// }

// const ketty = new Cat("Ketty" ,23);
// console.log('[ketty]', ketty);

// function greeting () {
//     // if(!this.name) return "Huck you!"
//     // return "Hello " + this.name
//     console.log("Hello " , this.name);
// }

// const houseOfCuteCats = [
//     {
//         name : "Ketty",
//         age : 8
//     },
//     Cat("Spectra",13)
// ];

// houseOfCuteCats[1].greeting();

// const result = greeting.call({name : "Kir"});

// console.log('[result]', result);

// const result = greeting.bind(houseOfCuteCats[0]);
// const result2 = greeting.bind({name : "Kir"});
// const result3 = greeting.bind("Misha");

// console.log('[result]', result());
// console.log('[result2]', result2());
// console.log('[result3]', result3());
// console.log('[houseOfCuteCats]', houseOfCuteCats);

// function getInfo() {
//     console.log("Hello ",this);


//     // return ["this_now_is",this]
// }

// const people = [
//     {
//         name : "Guslan",
//         age : 23,
//         avarageGrade : 12 
//     },
//     {
//         name : "Misha",
//         age : 13,
//         avarageGrade : 11 
//     },
//     {
//         name : "DimOn",
//         age : 32,
//         avarageGrade : 13 
//     }
// ]

// getInfo.apply([{name:"John"},{name : "Bob"} , {name :"Kek"}]);
// for(const student of people){

//     const boundValue = getInfo.bind(student);
//     const result = boundValue();
//     console.log(result);
//     getInfo.call(student);
//     console.log("---------------------");
// }

// function User() {
//     return {
//         name : this.name ,
//         surname : this.surname ,
//         age : this.age ,
//     }
// }

// const user = new User.call({name : "John", surname : "Doe", age : 23});
// console.log('[user]', user);

// function User(name , surname , age) {
//     this.name = name ;
//     this.surname = surname ;
//     this.age = age ;

//     this.greeting = function () {
//         console.log("Hi , from " + this.name);
//     }
// }


// function Admin(name , surname , age , isAdmin) {
//     return Object.assign(new User(name , surname , age),this.isAdmin = isAdmin)
// }

// const admin = new Admin("John" , "Doe", 23,true);
// admin.greeting()
// console.log('[admin]', admin);
// const user = new User("John" , "Doe" , 23);

// const user = new User.call({name : "John", surname : "Doe", age : 23});
// console.log('[user]', user);

// class User {
//     constructor(name, healPoints=100){
//         this.healPoints = healPoints;
//         this.name = name
//     }

//     getName() {
//         console.log(this.name);
//     }
// }

// const user = new User("Arsen");
// const user2 = new User("Guslan");
// const user3 = new User("John",23);
// console.log('[user]', user);
// console.log('[user2]', user2);
// console.log(user3);
// user.getName()
// user2.getName()
// console.log('[user]', user);

// class Student {
//     constructor(name , grade , yearOfBirth , skills = []){
//         this.name = name;
//         this.age = 2023 - yearOfBirth;
//         this.grade = grade;
//         this.skills = skills;
//     }

//     getAge(){
//         return this.age;
//     }
// }

// const students = [
//     new Student("Vitaliy",100 , 1976,["HTML" , "CSS", "JS"]),
//     new Student("Arsen",99.9 , 1989,["HTML" , "CSS", "JS" , "Python"]),
//     new Student("Alex",99.99 , 1949,["HTML" , "CSS"]),
//     new Student("Oleg",23.23 , 1823,["HTML" , "CSS" , "Delphi" , "Pascal" , "QBasic"]),
// ]

// console.log('[students]', students);
// const listItems = document.querySelectorAll("li");

// [...listItems].filter(el => {
//     console.log(el.textContent)
// })

// console.log('[listItems]', listItems);

// class User {
//     constructor(email ,password) {
//         this.email = email;
//         this.password = password;
//     }

//     getPassword() {
//         return this.password
//     }

//     getEmail() {
//         return this.email
//     }
// };

// class Admin extends User {
//     constructor(email ,password , isAdmin) {
//         super(email,password);
//         this.isAdmin = isAdmin;
//     }
// }

// const user = new User("k@i.ua" ,"2323");
// const admin = new Admin("k@i.ua.admin" ,"2323", true);

// const email = user.getEmail();
// const password = user.getPassword();

// console.log('[admin]', admin);

// console.log(admin.getEmail());

// console.log('[email]', email);
// console.log('[password]', password);

// 1) Create function or class , which will produce hero 
// 2) Hero is a class which constructor has following props : name  , damage , hp
// 3) Hero methods are : kick , skill
// method - is the same as a function 
// 4) method kick return -23
// 4) method skill return -33


// 5) Create function or class , which will produce user
// 6) User is a class which constructor has following props : name ,email , password
// 7) User methods are : getPassword -> must return a password ,getEmail , getName


// 8)write function which will regiter / login user 
// 9)function "fight" where u and bot (computer) will fight 
// 10)function "fight" retrieves (user1,user2)
// 11)function "fight" return new data