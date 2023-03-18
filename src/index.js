import "../normalize.css";
import "../style.css";

import TasksContainer from "./components/tasks-container/tasks-container";
import TopContainer from "./components/top-taskbar-container/container";

document.body.appendChild(TasksContainer());
document.querySelector(".tasks-container").append(TopContainer);
