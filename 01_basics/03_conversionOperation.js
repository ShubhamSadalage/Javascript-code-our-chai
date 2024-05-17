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