//1 # Event Propagation(Event  Bubbling and Capturing)


//bottom to top is bubble phase
//top to bottom is caputring phase
//target phase will caught where the propogations actullay start

// const child=document.getElementById("parent")
//  const parent=document.getElementById("child")

//  function parentCall(){
//     alert("this is Parent Call")

// }
// function childCall(){
//     alert("this is child")
//     event.stopPropagation(); 
// }
// parent.addEventListener('click',parentCall,true)
// child.addEventListener('click',childCall,true)





//2 # Higher Order Function
//3 # Call BackFunction


//they all are call back functions 
// const mult=(a,b)=>{
//     return Math.abs(a*b);
// }
// const div=(a,b)=>{
//     return Math.abs(a/b);
// }
// const min=(a,b)=>{
//     return Math.abs(a-b);
// }
// const sub=(a,b)=>{
//     return Math.abs(a-b);
// }
// //this is higher order Function
// const calculator =(a,b,operator)=>{
//     return operator(a,b)
// }

// console.log(calculator(5,3,sub)) // A # Hoisting in JS
        //this will move variables and funcitons in top
                // console.log(myName)
                // var myName
                // myName="Hasnain"
        // //Hoisting  in below code
        //     1:var myName
        //     2:console.log(myName)
        //     3:myName="Hasnain"
        //note hoisting isnot applicable in let or const
                // console.log(myName)
                // let myName
                // myName="Hasnain"
        //ReferenceError: Cannot access 'myName' before initialization
    // B # lexical Scoping  : the inner functions can get access to
    //                        their  parent functions variables but the 
    //                        vice versa is not true 
  
    //C # Closures :Same as Lexical Scoping,it creates every time when will functions create 


    //Synchronous and Asynchonous

//synchronous 
//work step by step dont start 2nd work until first finished
// const func1 =() =>{
//     console.log("caling 1st funciton")

// }
// const func2 =() =>{
//     console.log("caling 2nd funciton")
//     func1();
//     console.log("2nf funciton again")

// }
// func2();
//Asynchonous 
//work all functions in same time 
// const func1 =() =>{
//     setTimeout(() => {
//         console.log("caling 1st funciton")
    
//     }, 2000);
    
// }
// const func2 =() =>{
//     console.log("caling 2nd funciton")
//     func1();
//     console.log("2nf funciton again")

// }
// func2();

//4 # function currying (we will see after Async JS Section

// //Curriying 
// Currying is a technique of evaluating 
// function with multiple arguments, into
// sequence of functions with single argument
// .In other words, when a function, instead of 
// taking all arguments at one time, takes the first one and return a 
// new function that takes the second one and returns 
// a new function which takes the third one, and so 
// // forth, until all arguments have been fulfilled.
// Uses of currying function
//   a) It helps to avoid passing same variable again and again.

// //   b) It is extremely useful in event handling. 
// function sum(num1){

//     return (num2)=>{

//         return (num3)=>{
//             console.log(num1+num2+num3)

//         }

//     }

// }
    
// sum(5)(3)(8)


//5 # Callback Hell
//6 # AJAX CALL USING XMLHTTPRequest
//7 # JSON
//8 # Fetch Api
        //it is the best alternative of xmlhttprequst it returns promiess
//9 # Promises
    //2 conditions 
        //fullfilled    
        //reject
       //
        // or  ongoing
    //in 90% case we consumed na ki create
        //consumed mean fullfilled or reject or ongoing
        //we use it to prevent callback hell


//10 # Async-Await
   

//11 # Error Handling in JS (Try Catch)