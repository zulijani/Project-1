const input = document.getElementById("taskInput");
const button = document.getElementById("button");
const tasks = document.getElementById("taskContainer");

button.addEventListener("click", addTask);
tasks.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveList();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList();
    }
}, false);


function saveList(){
    localStorage.setItem("data", tasks.innerHTML);
}

function getList(){
    tasks.innerHTML = localStorage.getItem("data");
}


function addTask(event){
    event.preventDefault();
    if(!input.value){
        return;
    }

    let li = document.createElement("li");
    li.textContent = input.value;
    tasks.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
    input.value = "";
    saveList();
}

getList();
