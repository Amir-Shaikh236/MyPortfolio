import React from "react";
import P1 from "../assets/Project1.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and CSS.",
    link: "https://yourportfolio.com",
    lang: {
      Common_Lang: "React.js",
      Style: "CSS",
      BackEnd_lang: "Node.js",
      Database: "MongoDB",
    },
  },
  {
    img: P1,
    title: "GYM Management",
    description: "A responsive GYM Management System with Payment Integration",
    link: "https://myecommerce.com",
    lang: {
      Common_Lang: "HTML",
      Style: "CSS",
      BackEnd_lang: "PHP",
      Database: "MySQL",
    },
  },
  {
    title: "Booking Houser",
    description: "A simple Frontend of Booking House Website Using React.",
    link: "https://House.com",
    lang: {
      Common_Lang: "React.js",
      Style: "CSS",
      BackEnd_lang: "----",
      Database: "----",
    },
  },
];

const Projects = () => {
  return (
    <section className="Project" id="project">
      <h2 className="heading"> <span>Project</span></h2>
      <div className="Projects">
        {projects.map((pro, index) => (
          <div className="Project-card" key={index}>
            <img src={pro.img} alt="Project-image" />
            <h1 className="P-title">{pro.title}</h1>
            <p className="description">{pro.description}</p>
            <div className="languages">
              <h1>{pro.lang.Common_Lang}</h1>
              <h1>{pro.lang.Style}</h1>
              <h1>{pro.lang.BackEnd_lang}</h1>
              <h1>{pro.lang.Database}</h1>
            </div>
            <a href={pro.link} target="_blank">See More</a>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
