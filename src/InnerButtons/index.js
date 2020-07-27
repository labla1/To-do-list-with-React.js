import React from 'react';
import "./style.css";

const Innerbuttons = ({ tasks, allTasksHidden }) => (
    tasks.length > 0 &&
    <span className="section__span">
        <button className="section__span--button"> {allTasksHidden ? "Show" : "Hide"} done tasks</button>

        <button className="section__span--button" disabled={tasks.every(({ done }) => done)}>
            Mark all as done</button>
    </span>
);

export default Innerbuttons;