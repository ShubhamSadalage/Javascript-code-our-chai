const myArray =  [1,2,3,4,5,true,"shubham"]

const myHeros = ["virat","sachin"]
const myArr2=new Array(1,2,3,4,5)
console.log(myArray[0])
console.log(myArray)

myArr2.push(6)
myArr2.push(7)
myArr2.pop()
myArr2.unshift(9)
console.log(myArr2)
myArr2.shift()
console.log(myArr2)

console.log(myArr2.includes(9))
console.log(myArr2.indexOf(9))

const newArr=myArr2.join()
console.log(myArr2)
console.log(newArr)
console.log()


//slice , splice
console.log("A ",myArr2)

const newArr2=myArr2.slice(1,3)
console.log(newArr2)
console.log("B ",myArr2)

 const newArr3=myArr2.splice(1,3)// it manupulate original Array
console.log("C ",myArr2)
console.log(newArr3)

 

