import "./task.css";
import "./trash.css";
import WhiteTrash from "../../assets/white-trash.svg";
import BlueTrash from "../../assets/blue-trash.svg";

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
   let iconContainer = document.createElement("div");
   iconContainer.classList.add("trash-container");

   let trashImg = new Image();
   trashImg.src = WhiteTrash;

   iconContainer.append(trashImg);

   let TrashColor = (() => {
      function changeToBlue() {
         trashImg.src = BlueTrash;
      }

      function changeToWhite() {
         trashImg.src = WhiteTrash;
      }

      return { changeToBlue, changeToWhite };
   })();

   iconContainer.onmouseover = TrashColor.changeToBlue;
   iconContainer.onmouseleave = TrashColor.changeToWhite;

   return iconContainer;
}

export default Task;
