let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toString());
console.log(myDate.toUTCString());
console.log(typeof myDate);
console.log()

let myCratedDate=new Date(2024,0,23)
console.log(myCratedDate.toDateString());
console.log()

let myCratedDate2=new Date("01-14-2024")
console.log(myCratedDate2.toDateString());
console.log()

let myCratedDate3=new Date("2023-04-14")
console.log(myCratedDate3.toDateString());
console.log()

let myTimeSpan= Date.now()
console.log(myTimeSpan);
console.log(myCratedDate.getTime());
console.log(Math.floor(myTimeSpan/1000));
console.log()


let newDate= new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log()

newDate.toLocaleDateString('default',{
    weekday:"long",
    timeZone:''
})
