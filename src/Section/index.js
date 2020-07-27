import React from 'react';
import "./style.css";

const Section = ({ title, body, innerbuttons }) => (
  <section className="section">
    <div className="section__top">
      <h2 className="section__header">{title}</h2>
      {innerbuttons}
    </div>
    {body}
  </section>
);

export default Section;