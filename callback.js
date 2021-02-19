const { requiresArg } = require("yargs")
const request = require('request')





// setTimeout( () =>{
//      console.log("Hello from Callback");
// },2000)


// const names = ['Andrew','Jen','Jess']

// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// console.log(shortNames);


// const geocode = (address, callback) =>{
//         const data = {
//             latitude : 0,
//             longitude : 0
//         }

//         return data       
// }

// const data = geocode('New York')
// console.log(data)


// const geocode = (address, callback) => {
//      setTimeout(()=>{
//          const data = {
//             latitude : 0,
//             longitude : 0
//          }

//          //return data
//          callback(data)
//      },2000)
// }

// const data = geocode('New York', (data) => {
//     console.log(data)
// })



const add =(a,b, callback) =>{
    setTimeout(()=>{
        callback(a + b)
    },2000)
}


// add(2,10, (sum) => {
//     console.log(sum)
// })
// Callback Abstraction

// re-usable and it is easy to maintain



// geocodeUrl('India', (error,data) => {
//     console.log('Error:', error);
//     console.log('Data:', data);
// })

// geocodeUrl("India", (error, data) => {
//     console.log('Error:', error);
//     console.log('Data:', data);

    
// })




// Object Property Shorthand


const name = 'Amit'
const userAge = 30

const user = {
    name,
    age : userAge,
    location : 'Patna'

}

console.log(user);

// Object Destructing

const product = {
    label : 'Tea',
    price : 10,
    stock:201,
    salePrice : undefined,
    rating: 4.2

}


// const label = product.label
// const stock = product.stock
// console.log(label)



const { label:nameLabel,stock,rating=5 } = product

// console.log(nameLabel)
// console.log(rating)


const transaction = (type, MyProduct) =>{
    const { label } = MyProduct
    console.log(label)
}

transaction('Order', product)

