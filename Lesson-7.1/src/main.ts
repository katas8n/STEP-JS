import './style.css'

// function : declar ,expession ,arrow (ES-8)
// operators : -> ?
// arr / tuple -> []
// ternary 
// pureFunction / dirtyFunction / dummyFunctions (decorators)

// unionType

// Task : 

// 1) Programm should say 'hello' to the user and then user might choose : 1) Store  2) Cart 3) Login 4) Registration
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


interface StoreCategory {
  id : number ;
  name : string ;
  products : Product[]
}

interface Store { 
  store : StoreCategory;
}

interface Cart {
  products : Product[];
  totalPrice? : number;
}

interface Customer {
  name? : string ;
  email : string ;
  password : string ;
  bag : Cart ; 
  isGuest : boolean ;
}

interface Product {
  id :string ;
  name : string ;
  price : number ;
  desc : string ;
}

// constructor func
function User(name:string,email:string,password:string,bag:{ products : []},isGuest:boolean):Customer  {
  return {
    name,
    password,
    email,
    bag,
    isGuest
  }
}

const john:Customer = {
  email : "john@i.ua",
  password : "232323",
  bag : {
    products : [],
    totalPrice : 0
  },
  isGuest : true
}


function main(): void{
  
}

main()