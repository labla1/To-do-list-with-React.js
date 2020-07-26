import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Innerbuttons from "./InnerButtons";

const tasks = [
  {id: 1, content: "aaa", done: true},
  {id: 2, content: "bbb", done: false},
];

const allTasksHidden = false;

function App() {
  return (
    <main className="main">
      <h1 className="main__header">To-Do List</h1>
      <section className="section">
        <h2 className="section__header">Add new task</h2>
        <Form />
        </section>
        <section className="section">
          <div className="section__top">
            <h2 className="section__header">Task List</h2>
            <Innerbuttons tasks = {tasks} allTasksHidden = {allTasksHidden}/>
          </div>
          <Tasks tasks={tasks} allTasksHidden={allTasksHidden} />
        </section>
    </main>
  );
}

export default App;
