
// https://icanhazdadjokes.com/

//promises


// const jokes = document.querySelector("#jokes")
// const jokeBtn = document.querySelector("#btnJoke")
// const generateJokes = () => {
//     //hamri api ka data completely html hai so hame isme se json file uthane keliye header set kia hai j
//     //ye json file accepte kry ga sirf
//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }
//     fetch(" https://icanhazdadjoke.com", setHeader)
//         .then((res) => res.json())
//         .then(
//             (data) => {
//                 jokes.innerHTML = data.joke
//             }

//         )
//         .catch(
//             (error) => {
//                 console.log(error)
//             }


//         )
// }




//AysncAwaits
 
const jokes = document.querySelector("#jokes")
const jokeBtn = document.querySelector("#btnJoke")
const generateJokes = async() => {
    //hamri api ka data completely html hai so hame isme se json file uthane keliye header set kia hai j
    //ye json file accepte kry ga sirf
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }
 try{
    const respones =await fetch(" https://icanhazdadjoke.com", setHeader)
        const data =await respones.json();
        jokes.innerHTML = data.joke
 }
        // .then((res) => res.json())
        // .then(
        //     (data) => {
        //         jokes.innerHTML = data.joke
        //     }

        //)
catch(err){
    console.log("The Error is "+err)
            }


        
}
jokeBtn.addEventListener("click", generateJokes)
generateJokes();
