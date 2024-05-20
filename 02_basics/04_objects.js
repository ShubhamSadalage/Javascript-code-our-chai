//  singleton
const tinderUser = new Object()
console.log(tinderUser)
tinderUser.id="123abc"
tinderUser.name="shubham"
tinderUser.isLoggedIn=false
console.log(tinderUser)
console.log()

const regularUser={
    email:"shubham@google.com",
    fuullName:{
        userFullName:
        {
            firstName:"shubham",
            lastName:"sadalage"
        }
    }
}

console.log(regularUser.fuullName?.userFullName.firstName)

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj3={obj1,obj2}
console.log(obj3)

const obj4=Object.assign({},obj1,obj2)
console.log(obj4)

const obj5={...obj1,...obj2}
console.log(obj5)

const user=[
    {
        id:1,
        name:"shubham"
    },
    {
        id:2,
        name:"sushant"
    },
    {
        id:3,
        name:"omkar"
    }
]

console.log(user[1].name)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course={
    courseName:"Js in Hindi",
    price:"999",
    courseInstructor:"Shubham"
}

//course.courseInsructor
const {courseInstructor:instructor}=course

console.log(instructor)

const navbar = ({company}) => {

}
navbar(company="shuhbam")


//API's

// {
//     "name":"shubham",
//     "courseName":"Js in Hindi",
//     "price":"999",
// }

// [
//     {

//     },
//     {

//     },
//     {

//     }
// ]

