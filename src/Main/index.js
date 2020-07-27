import React from 'react';
import "./style.css";

const Main = ({ title, children }) => (
    <main className="main">
        <h1 className="main__header">{title}</h1>
        {children}
    </main>
);

export default Main;