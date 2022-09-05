
// Selector
let userForm = document.querySelector("form")

// console.log(userForm);

let userInput = document.querySelector("input")

// let userbtn= document.querySelector("button")

let userUl = document.querySelector("ul")

// console.log(userUl);


//Event

userForm.addEventListener("submit" , myfunsave)

userUl.addEventListener("click" , removeNew)

userUl.addEventListener("click" , editNew)


function myfunsave(e){
    e.preventDefault();
    // console.log("new");

    // create new li 
    let newli = document.createElement("li")
    newli.className = "list-group-item"

    // create detbtn

    let delbtn = document.createElement("button")

    delbtn.className = " fa-solid fa-trash-can float-end delete"

    delbtn.style="color : red"
    delbtn.style.border="none"
    delbtn.style.marginRight="10px"
    

    // create Edit button

    let edit = document.createElement("button")

    edit.className = "fa-solid fa-pen-to-square float-end edits "
    edit.style="color:green"
    edit.style.border="none"
    edit.style.marginRight="20px"

    



    // icons

    // <i class="bi bi-trash"></i>



    // insert text

    // delbtn.textContent = "Delete"  

    // edit.textContent = "Edit"

    newli.textContent = userInput.value

    // Append btn in li

    newli.appendChild(delbtn)

    newli.appendChild(edit)

    // append li into ul

    userUl.appendChild(newli)

    // reset

    userForm.reset()

 

}

// Remove li
function removeNew(e){
     if(confirm("Are you sure!!")){
        if(e.target.classList.contains("delete")){
            let myli = e.target.parentElement;
            userUl.removeChild(myli)
        }
    }
 }


// edits li

function editNew(e){
    //  if(confirm("Are you sure to Edit!!")){
        if(e.target.classList.contains("edits")){
            let myli = e.target.parentElement;
            userInput.value=myli.textContent;
            // myli.innerText=userInput.value;
            userUl.removeChild(myli);

            
        }
    }

    // console.log(e);
// }