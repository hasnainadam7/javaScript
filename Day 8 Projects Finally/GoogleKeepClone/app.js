const addBtn = document.querySelector("#add")
const updateLSData = () => {
    const textAreaDAta = document.querySelectorAll("textarea");
    const notes = []
    textAreaDAta.forEach((currEle, index, arr) => {
  
        return notes.push(currEle.value)
    
})
    localStorage.setItem(`notes`,JSON.stringify(notes))
}

const createDiv = (text = ``) => {

    //NOW WE ARE CREATEING NOTE DYNAMICALLY
    const divNote = document.createElement("div")
    divNote.classList.add("note");
    const htmlData = `
    <div class="operation">
        <button class="edit">
            <i class="far fa-edit"></i>
        </button>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
    <div class="main ${text ? "" : "hidden"} "></div>
    <textarea name=""  style="resize: none" wrap="off" placeholder="Add Note..!" class="${text ? "hidden" : ""}" id=""></textarea>`;
    divNote.insertAdjacentHTML("afterbegin", htmlData)
    // console.log(divNote)
    //referncess


    const editBtn = divNote.querySelector(".edit")
    const delBtn = divNote.querySelector(".delete")
    const mainDiv = divNote.querySelector(".main")
    const textArea = divNote.querySelector("textarea")
    mainDiv.innerHTML = text;
    textArea.innerHTML = text;
    //deltenode
    delBtn.addEventListener("click", () => {

        divNote.remove();
        updateLSData();
    })
    //edit of save 
    editBtn.addEventListener("click", () => {
        updateLSData();
        textArea.classList.toggle("hidden")
        mainDiv.classList.toggle("hidden")
    })
    textArea.addEventListener("change", (event) => {
        const val = event.target.value;

        mainDiv.innerHTML = val
        updateLSData();
    })


    document.body.appendChild(divNote)



}
//getting a data from LS
const getDAta=JSON.parse(localStorage.getItem("notes"))
console.log(getDAta)
if (getDAta){
    getDAta.forEach((currEle)=> createDiv(currEle))
}
addBtn.addEventListener("click", () => createDiv());