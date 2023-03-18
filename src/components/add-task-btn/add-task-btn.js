import "./add-task-btn.css";

function AddTaskBtn() {
	let addBtn = document.createElement("button");

	addBtn.textContent = "ADD";
	addBtn.classList.add("add-task-btn");

	return addBtn;
}

export default AddTaskBtn;
