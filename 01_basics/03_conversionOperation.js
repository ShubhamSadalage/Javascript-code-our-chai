let score =33

console.log(typeof score);

 score="33"
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))

score="33abc"
 valueInNumber = Number(score)
console.log(typeof(valueInNumber)) //NAN
console.log(valueInNumber);

score=null
 valueInNumber = Number(score)
console.log(typeof(valueInNumber))  //0
console.log(valueInNumber);

score=undefined
 valueInNumber = Number(score)
console.log(typeof(valueInNumber))  //NAN
console.log(valueInNumber);

score=true
 valueInNumber = Number(score)
console.log(typeof(valueInNumber))  //1
console.log(valueInNumber);

let isLoggedIn=1
console.log(isLoggedIn)

let boolIsLoggedIn=Boolean(isLoggedIn)
console.log(boolIsLoggedIn)

//1 => true; 0 => false
// "" => false
//"shubham" => true

 isLoggedIn=""
 boolIsLoggedIn=Boolean(isLoggedIn)
console.log(boolIsLoggedIn) //false

isLoggedIn="shubham"
boolIsLoggedIn=Boolean(isLoggedIn)
console.log(boolIsLoggedIn) //true


let someNumber = 33
let stringNumber=String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber)



// *********************** Operations *************************

let value=3
let negValue=-value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%3)

let str1="hello "
let sttr2="shubham"
console.log(str1+sttr2) //hello shubham

console.log(1+"2")  //12
console.log("1"+2)  //12
console.log("1"+2+2) //122
console.log(1+2+"2") //32
console.log(3+4*5%3)
console.log((3+4)*5%3)

console.log(+true) //1
console.log(+"")   //0

let num1, num2, num3

num1 = num2 =num3 =2+2

 let gameCounter=100
 gameCounter++;
 ++gameCounter
 console.log(gameCounter)









