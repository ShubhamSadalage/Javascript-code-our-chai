function sayMyName(){
    console.log("S")
    console.log("h")
    console.log("u")
    console.log("b")
    console.log("h")
    console.log("s")
    console.log("m")
}
sayMyName()

function add(num1,num2){
    console.log(num1+num2);
}
add(3,3)
add(3,null)

function addition(num1,num2){
    return num1+num2
    console.log("not exicute after return");
}
const result=addition(20,23)
console.log("result : ",result)

// function loginMassage(userName){
//     if(userName===undefined){
//         console.log("please enter user name")
//         return
//     }
//     return  `${userName} just logged in`
// }

function loginMassage(userName){
    if(!userName){
        console.log("please enter user name")
        return
    }
    return  `${userName} just logged in`
}
console.log(loginMassage("shubham"))
console.log(loginMassage())


function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500.400,600));



const user = {
    userName:"shubham",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`)
}


//handleObject(user)
handleObject({
    userName:"Sam",
    price:399
})


function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200,89,78,43]))
