// const amount=12 
// if(amount<10){
//     console.log("small numbers")
// }
// else{
//     console.log('large numbers')
// }
// console.log(`hey it's my first node app!`)

// // Golbals -no window!
// // __dirname -path to current directory 
// // __filename - file name 
// // require -functio to use modules (commnets)
// // process -info about eu where the programmm is being executed`
// console.log(__dirname)
// console.log(__filename)
// console.log(require)
// console.log(module)
// console.log(process)
// setInterval((__dirname)=>{
//     console.log("Hello world ")
// },1000)

// //Modules in the node.js

// Modules in javascript 
//Modules in js 

// modules -Ecnapsulatee Code (only share default)
// // CommonJS, evry file is module(by default)
// const secret ="SUPER SECRET"
// const john ='john'
// const peter ='peter'
const name=require('./4-names')
console.log(name)
const sayHi =require('./5-utils')


sayHi('susan')
sayHi(name.john)
sayHi(name.peter)

