//primitive
// 7 types : String ,Number, Boolian, null ,undefined, Symbol, BigInt


const score=90;
const scorevalue =100.3
const isLogIn =false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);//false
console.log(typeof id)
console.log()

const bigNumber= 3222229999999999999n
console.log(typeof bigNumber)
console.log()


// Referance Type (Non primitive)

//Array, Objects, Functions 
const heros = ["shanktiman","naagraj","pushpa"]
let myObj={
    name:"shubham",
    age:23
}
console.log(typeof myObj)

const myfunction = function(){
    console.log("Hello World");
} 

console.log(typeof myfunction)

console.log()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)
 let myname="shubham" //stack

let anothername=myname;
anothername="sushant"

console.log(anothername)
console.log(myname)

let user={                      //Heap
    email:"user@gmail.com",
    upi:"user@ybl"
}

let user2=user
console.log(user2)

user2.email="user2@gmail.com"
console.log(user)
console.log(user2)