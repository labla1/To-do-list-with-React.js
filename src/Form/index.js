import React from 'react';
import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__inputField" placeholder="What do you want to do?" />
        <button className="form__button">Add to-do</button>
    </form>
);

export default Form;