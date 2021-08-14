// //4 ways to calling events
// function callingFunc() {

//     alert("2nd way of writing Function")
// }
// const thirdWays = document.getElementById('thirdWay');

// thirdWays.onclick = ()=>{
//     console.log("click in")
//     alert("this is 3rd way of wrinting func")
// };

//  const fourway = document.getElementById('fourthWay');
// fourway.addEventListener("click", () => {
//     alert("4th type of calling functions and eventings")
// })



// //Event Objects


// const checkEvent =()=>{
//     console.log("event fired")
// console.log(event)
// console.log(event.target)
// console.log(event.type)

// }
// fourway.addEventListener("click",checkEvent)





const name = document.getElementById("txtName")
const secName = document.getElementById("optSec")
console.log("before fired")
document.getElementById("optSec").addEventListener("change", () => {

    document.getElementById("result").innerHTML = 'Mr '+name.value +' your sec is '+secName.value
})
console.log("after fired")