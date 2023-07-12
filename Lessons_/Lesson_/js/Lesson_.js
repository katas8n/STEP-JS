// "use strict";
// // () => arrow
// console.log('[a]', a);
// function b (){
//     console.log("b");
// }

// function a(params) {
//     b()
// }

// function multiply_by_two(num1) {
//    return num1 * 2
// }

// const twenty = multiply_by_two(10);
// console.log('[twenty]', twenty);

// function decorator(userName) {
//     return `
//     ************
//     ${userName}
//     ************
//     `
// }

// const decoratedUser = decorator("John");

// console.log('[decoratedUser]', decoratedUser);


// const store = [
//     {
//         id : "23323323",
//         title : "Product",
//         price : 233
//     },
//     {
//         id : "1111111",
//         title : "Product2",
//         price : 232
//     },
// ]

// function showProducts(products) {
//     const generated_html = [];
//     for (const product of products) {
//         for(const key in product) {
//             const value = product[key];
            
//             if(key === 'price') {
//                 product.price = '$' + product.price
//                 console.log('[VALUE]' , product.price);
//             }
//         }
//         console.log("-------------------");

//        const element = document.createElement('div');
//        element.className = product.title;
//        element.textContent = product.price 

//        console.log('[element]', element);
//        generated_html.push(element)
//     }

//     return generated_html
// }

// const htmlProducts = showProducts(store)
// const app = document.querySelector("#app");
// htmlProducts.forEach(el => {
//     app.append(el)
// })
// console.log(htmlProducts);