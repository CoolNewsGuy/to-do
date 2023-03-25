import "./tasks-list.css";

let TasksList = (() => {
   let TasksListDiv = document.createElement("div");

   TasksListDiv.classList.add("tasks-list");

   return TasksListDiv;
})();

export default TasksList;
