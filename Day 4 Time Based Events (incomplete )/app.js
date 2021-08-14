//setTimeout
//clearTimeOut
//setInterval
//cleartimeout


//settimeout



starts = ()=>{setTimeout(()=> {
    //settimeout(function ,time in miliseconds  )

        document.querySelector('#showName').innerHTML = "This is Hasnain";
    }, 1000 )
    console.log("Click Fired")
}


const stop= ()=> {
    clearTimeout(starts)
    console.log("time stop")
}

//cleartimeout







