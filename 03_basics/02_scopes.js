

if(true)
{
    let a=10
    const b =20
    var c=30
    d=40
}
//console.log(a)
//console.log(b)
console.log(c)
console.log(d)


let a=300
if(true){
    let a=10
    console.log("inner ",a)
    const b =20
    var c=30
    d=40
}
console.log("outside ",a)


//Nested Scope
function one(){
    const userName="Shubham"
    function two(){
        const website = "youtube"
        console.log(userName)
    }
    //console.log(website)
    two()
}
one() 


if(true)
{
    const userName="shubham"
    if(userName==="shubham")
        {
            const website="youtube"
            console.log(website);
        }
       // console.log(website)
}
//console.log(userName);

// +++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++
console.log(addone(7));
function addone(num){
    return num+1
}
console.log(addone(8));

//addtwo(5)
const addtwo=function(num){
    return num+2
}
console.log(addtwo(7));
