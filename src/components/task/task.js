import "./task.css";

function Task() {
	let taskDiv = document.createElement("div");

	taskDiv.classList.add("task");

	return taskDiv;
}

function TaskText(text) {
	let taskP = document.createElement("p");

	taskP.classList.add("task-text");
	taskP.textContent = text;

	return taskP;
}

export default Task;
