import "./task.css";
import "./trash.css";
import TrashHTML from "../../assets/trash.svg";

function Task() {
	let taskDiv = document.createElement("div");

	taskDiv.classList.add("task");
	taskDiv.append(TaskText("Hello world"), TaskDeleteIcon());

	return taskDiv;
}

function TaskText(text) {
	let taskP = document.createElement("p");

	taskP.classList.add("task-text");
	taskP.textContent = text;

	return taskP;
}

function TaskDeleteIcon() {
	let iconContainer = document.createElement("object");

	iconContainer.classList.add("trash-container");
	iconContainer.data = TrashHTML;
	iconContainer.type = "image/svg+xml";

	return iconContainer;
}

export default Task;
