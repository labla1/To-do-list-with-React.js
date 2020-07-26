import React from "react";
import "./style.css";

const Tasks = (props) => (
    <div>
        {props.tasks.map(task => (
            <div className={`taskContainer ${task.done && props.allTasksHidden ? "task--hidden" : ""}`}>
                 <button className="taskContainer__checkButton">
            {task.done ? "✔" : ""}
            </button>
                <span className={`addedTaskText ${task.done ? "taskContainer__checkButton--lineThrough" : ""}`}>
                {task.content}
                </span>
                <button className="taskContainer__removeButton">
                &#10006;
                </button>
            </div>
        ))}
    </div>
);

export default Tasks;