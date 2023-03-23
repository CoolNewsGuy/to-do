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
   // will be used to help us change the color of trash when hovering
   let iconContainer = document.createElement("object");
   iconContainer.classList.add("trash-container");
   iconContainer.data = TrashHTML;
   iconContainer.type = "image/svg+xml";

   // for hover effect
   function changeIconStrokeColor(color) {
      const trashIcon = iconContainer.contentDocument.querySelector("svg path");
      trashIcon.setAttribute("stroke", color);
   }

   iconContainer.addEventListener("mouseover", () => {
      changeIconStrokeColor("#07f");
   });

   iconContainer.addEventListener("mouseleave", () => {
      changeIconStrokeColor("#fff");
   });

   return iconContainer;
}

export default Task;
