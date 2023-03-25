import "./task.css";
import "./trash.css";
import WhiteTrash from "../../assets/white-trash.svg";
import BlueTrash from "../../assets/blue-trash.svg";

function Task(text) {
   let taskDiv = document.createElement("div");

   taskDiv.classList.add("task");
   taskDiv.append(TaskText(text), TaskDeleteIcon());

   return taskDiv;
}

function TaskText(text) {
   let taskP = document.createElement("p");

   taskP.classList.add("task-text");
   taskP.textContent = text;

   return taskP;
}

function TaskDeleteIcon() {
   // will be used to help us change the color of trash when hovering
   let iconContainer = document.createElement("div");
   iconContainer.classList.add("trash-container");

   let trashImg = new Image();
   trashImg.src = WhiteTrash;
   trashImg.classList.add("trash-icon");

   iconContainer.append(trashImg);
   iconContainer.onmouseover = () => (trashImg.src = BlueTrash);
   iconContainer.onmouseleave = () => (trashImg.src = WhiteTrash);
   iconContainer.onclick = (e) => e.target.closest(".task").remove();

   return iconContainer;
}

export default Task;
