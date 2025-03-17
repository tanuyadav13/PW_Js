"use strict"; //treat all JS code as newer version

 //alert("hello")
// alert( 3 + 3 ) //we are using node.js, not browser

console.log(3
     +
     3) //code readability should be high
console.log("tanu")


// PRIMITIVE DATA TYPES (STACK)
// number => 2 to power 53  
//  bigint                   
// string => ""          
// boolean => true/false      
//null => standalone value  
// undefined =>             
// symbol => unique         
const age =27
const aReallyLongNumber = 954594512698569854n
Const firstname ="Tanu"
let isLoggedIn = true
const nodeValue = undefined
let bankBalance = undefined
const buttonId = symbol("id")

// Reference (Non-primitive) (HEAP) -Objects
/*
Arrays               
Objects            
Functons             
*/
const numbers = [1,2,3,4,5]
const heroes = [
         "superman",
         "batman",
         "Flash",
           true,
            123,
          ]
  const userObject ={ 
   name: "tanu",
   age:27,
   isLoggedin: true
     }
//function
const sayHello =function(){
      console.log("Tanu")
}


console.log(typeof null);
