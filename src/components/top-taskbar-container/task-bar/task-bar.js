import "./task-bar.css";

function TaskBar() {
	let taskTitle = document.createElement("input");

	taskTitle.type = "text";
	taskTitle.classList.add("task-bar");

	return taskTitle;
}

export default TaskBar;
