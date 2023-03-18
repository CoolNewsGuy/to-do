import "./container.css";
import TaskBar from "./task-bar/task-bar";

let TopContainer = (() => {
	let container = document.createElement("div");

	container.classList.add("top-container");

	return container;
})();

TopContainer.appendChild(TaskBar());

export default TopContainer;
