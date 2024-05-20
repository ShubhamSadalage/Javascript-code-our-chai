// singleton --
Object.create

// object literals
const mySymb=Symbol("key1")

const User={
    name:"shubham",
    "myfullname":"Shubham Sadalage",
    age:"18",
    email:"shubham@google.com",
    isLoggedIn:false,
    lastLogInDays:["Monday","Sunday"]
}
console.log(User.email),
console.log(User["email"],
console.log(User["myfullname"])
)

User.email="shubham@chatgbt.com"
//Object.freeze("shubham@micro.com")
console.log(User)
User.greeting=function(){
    console.log(`hello user`)
}
User.greeting2=function(){
    console.log(`hello user,${this.name}`)
}

console.log(User.greeting())
console.log(User.greeting2())
