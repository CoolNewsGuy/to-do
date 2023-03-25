import "./tasks-container.css";
import TopContainer from "../top-taskbar-container/top-container";
import TasksList from "../tasks-list/tasks-list";

let TasksContainer = (() => {
   const container = document.createElement("div");

   container.classList.add("tasks-container");

   return container;
})();

TasksContainer.append(TopContainer, TasksList);

export default TasksContainer;
