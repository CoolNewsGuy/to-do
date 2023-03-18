import "./container.css";
import AddTaskBtn from "../add-task-btn/add-task-btn";
import TaskBar from "./task-bar/task-bar";

let TopContainer = (() => {
	let container = document.createElement("div");

	container.classList.add("top-container");

	return container;
})();

TopContainer.append(TaskBar(), AddTaskBtn());

export default TopContainer;
