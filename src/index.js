import "../normalize.css";
import "../style.css";

import TasksContainer from "./components/tasks-container/tasks-container";
import TaskBar from "./components/task-bar/task-bar";

document.body.appendChild(TasksContainer());
document.querySelector(".tasks-container").append(TaskBar());
