import "./add-task-btn.css";
import Task from "../../task/task";
import TasksList from "../../tasks-list/tasks-list";

function AddTaskBtn() {
   let addBtn = document.createElement("button");

   addBtn.textContent = "ADD";
   addBtn.classList.add("add-task-btn");
   addBtn.onclick = addTask;

   return addBtn;
}

function addTask() {
   let taskText = document.querySelector(".task-bar").value;

   if (taskText) {
      let newTask = Task(taskText);
      TasksList.append(newTask);
   }
}

export default AddTaskBtn;
