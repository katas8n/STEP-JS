
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



function main() {
    const store = {
        phones : [
            {
                label : "Samsung",
                price : 232.23,
                desc : "Product is ..."
            }
        ],
        laptops : [
            {
                label : "HP",
                price : 1123.23,
                desc : "Product is ..."
            }
        ],
        guitars : [
            {
                label : "Cort",
                price : 232.32,
                desc : "Product is ..."
            }
        ]
    }

    let isRunning = true;

    while(isRunning) {
        const userName = prompt("Hey , what's ur name ?");
        
        greeting(userName);

        const userChoice = parseInt(prompt("1) Store  2) Cart 3) Login 4) Registration 5)"));

        switch (userChoice) {
            case 1:
                
                break;

            case 2:
                
                break;

            case 4:
                
                break;

            case 5:
                
                break;
        
            default:
                break;
        }
    }

    function (params) {
        
    }
   
    
    function greeting(name) {
        // `` - ${}
        console.log(`Hello , ${name}`);
    }
    
}


main();