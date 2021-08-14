//   <h1 id="mainHeading">Animated Thermometer<span id="temp"class="fa"></span>


const tempload= ()=>{

    let temp =document.getElementById("temp")
    temp.innerHTML="&#xf2cb";
    temp.style.color="#223E7F";
    
    setTimeout(
        ()=>{
            
            temp.style.color="#5F8DCE";
            temp.innerHTML="&#xf2ca "; 
        },1000
    )
    setTimeout(
        ()=>{
            temp.style.color="#236F21";
            temp.innerHTML="&#xf2c9 "; 
        },2000
    )
    setTimeout(
        ()=>{
            temp.style.color="#CF5300";
            temp.innerHTML="&#xf2c8 "; 
        },3000

    )
    
    setTimeout(
        ()=>{
            temp.style.color="#B7121F";
            temp.innerHTML="&#xf2c7"; 
        },4000

    )
    }
tempload();

setInterval(tempload,5000)