// fahrenheit to celsius  formula
// Formula	
// (32°F − 32) × 5/9 = 0°C
// // 
// celsius to fahrenheit formula
// Formula	
// (0°C × 9/5) + 32 = 32°F


const funcCovert = () => {
    const res = document.querySelector("#result")
    const num = document.querySelector("#temp").value
    const opt = document.getElementById("tempDiff")
    const selectOpt = tempDiff.options[opt.selectedIndex].value
    var answer
    if (selectOpt == "far") {
        answer = Math.round((num-32) / 1.8);
        res.innerHTML = num + "°F"

    }

    else {
        answer = Math.round((num*1.8)+32)
        res.innerHTML = answer + "°C"
        console.log("far")
    }


}
