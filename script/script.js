const input = document.getElementById("taskInput");
const button = document.getElementById("button");
const tasks = document.getElementById("taskContainer");

button.addEventListener("click", addTask);



function addTask(event){
    event.preventDefault();
    if(!input.value){
        return;
    }

}