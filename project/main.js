// import "./style.scss";

// // HOMEWORK
// // ! 1) 

// let isRunning = true;

// while(isRunning) {
//     const contextMenu = "a) Play q) Quit";

//     // switch 
//     const userChoose = prompt(contextMenu);
//     const lowerUserChoose = userChoose.toLowerCase();

//     switch (lowerUserChoose) {
//         case "a":
//                 const height = prompt("Enter ur height. Format : x.xx");
//                 const weight = prompt("Enter ur weight : ");
                
//                 const result = weight / (height * height);

//                 const stringified_result = result.toString()
//                 const fullstop = stringified_result.indexOf(".");

//                 const lastIndex = fullstop + 4

//                 const slicedResult = stringified_result.slice(0,lastIndex);
//                 alert(slicedResult);

//             break;

//         case "q":
//                 isRunning = false;
//             break;
    
//         default:
//             break;
//     }
// }
