import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Innerbuttons from "./InnerButtons";
import Section from "./Section";
import Main from "./Main";

const tasks = [
  {id: 1, content: "aaa", done: true},
  {id: 2, content: "bbb", done: false},
];

const allTasksHidden = false;

function App() {
  return (
      <Main
      title="To-do List"
      >
      <Section 
      title="Add new task" 
      body={<Form />}
      />
      <Section 
      title="Task list" 
      body={<Tasks tasks={tasks} allTasksHidden={allTasksHidden} />}
      innerbuttons={<Innerbuttons tasks = {tasks} allTasksHidden = {allTasksHidden}/>}
      />
    </Main>
  );
}

export default App;
