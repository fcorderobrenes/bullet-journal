
let task = {description:"Tarea #1"}; 

window.onload = function(){
    // loadTasks();
}

function loadTasks(){
    document.getElementById("my-task").innerHTML = task.description;
}

function addTask(){
    let new_task = document.getElementById("new-task").value;
    task.description = new_task;
    loadTasks();
}
