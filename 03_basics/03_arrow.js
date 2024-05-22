const user={
    username:"shubham",
    price:999,

    welcomeMassage:function(){
        console.log(`${this.username}, welcome to website`)
        //console.log(this)
    }
}

//this - to reffer  current context
user.welcomeMassage()
user.userName="sam"
user.welcomeMassage()


function chai(){
    let userName="Shubham"
   // console.log(this.userName)
   console.log(this)
}
chai()

const chai2=()=>{
    let userName="Shubham"
   // console.log(this.userName)
   console.log(this)       //cannot use this in arrow function
}
chai2()

const add=(num1,num2)=>num1+num2
console.log(add(1,2));

const myArray=[2,5,3,4,87,7]

//myArray.forEach()