// Immediately Invoked Function Expressions(IIFE)
( function Chai(){
   //named iife
    console.log("DB Connected");
 })();

//semicollen is must

 ( (name)=>{
   console.log(`DB Connected two ${name}`)
 }
)('shubham');

