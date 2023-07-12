// interface User {
//     userName : string,
//     userSurname : string ,
//     age : number 
// }

// type UserKey = 'userName' | 'userSurname'| 'age';

// type Config = "1" | "2"

// let user:User = {};

// while(true) {
//     const isRunning:boolean = confirm("Do you wanna start ?");

//     const menu = prompt("1) Register 2) Config") as Config;

//     switch (menu) {
//         case '1':
//             const userName = prompt("Enter ur name : ") as string;
//             const userSurname = prompt("Enter ur surname : ") as string;
//             const age = +prompt("Enter ur age : ") as number;
        
            
//             user.userName = userName;
//             user.userSurname = userSurname;
//             user.age = age;
            
//             console.log(user)
//             break;

//         case '2':
//             const action = prompt("1)Set new value by key 2) Delete") as Config;

//             switch (action) {
//                 case '1':
//                     const key = prompt(`Enter what exactly do I wanna set ${Object.keys(user)}`) as UserKey;

//                     switch(key){
//                         case 'userName' :
//                             user[key] = prompt("Enter value that u wanna set : ")  as string;
//                             console.log(user)

//                         break;

//                         case 'userSurname' :
//                             user[key] = prompt("Enter value that u wanna set : ") as string;
//                             console.log(user)

//                         break;

//                         case 'age' :
//                             user[key] = +prompt("Enter value that u wanna set : ") as number;
//                             console.log(user)

//                         break;
//                     }


//                     break;

//                 case '2':
//                     const prop = prompt(`Enter value that u wanna delete : ${Object.keys(user)}`) as string;

//                     delete user[prop]
//                     console.log(user§)
//                     break;
            
//                 default:
//                     break;
//             }
//             break;
    
//         default:
//             break;
//     }


//     if(!isRunning) break;
// }

// function returnString(str:string):string[]{
//     return [str];
// }

// const returnedStr = returnString("Message");
// returnedStr.forEach(el => {
//     el.
// })

