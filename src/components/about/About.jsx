import React from "react";
import "./About.css"
import n from "../../assets/images/n.jpg"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="title reveal">
        <div className="section-title">About Me</div>
      </div>
      <div className="content">
        <div className="column col-left reveal">
          <div>
            <img className="img-card" src={n}  alt="n"/>
          </div>
        </div>
        <div className="column col-right reveal">
          <h2 className="content-title">Hey there! I'm Shamsiddin Norov</h2>
          <p className="paragraph-text">
            Officiis, eos pariatur esse velit veritatis reiciendis cum quod
            possimus quas? Modi adipisci odit voluptatem tempora error
            perferendis quisquam, dolores iure, ullam id nam quaerat dolor
            incidunt, ratione aliquam deserunt eaque explicabo nostrum quo
            veniam expedita distinctio dolorem. Aspernatur consectetur eum vitae
            nobis.
          </p>
          <br />
          <p className="paragraph-texte">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            corporis ullam deserunt debitis. Rerum necessitatibus accusantium,
            ipsa, officiis, eos pariatur esse velit veritatis reiciendis cum
            quod possimus quas? Modi adipisci odit voluptatem tempora error
            perferendis quisquam, dolores iure, ullam id nam
          </p>
          <Link to="#" className="btn">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
