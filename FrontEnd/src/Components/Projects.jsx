import React from "react";
import { useState, useEffect } from "react";
import P1 from "../assets/Project1.jpg";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="Project" id="project">
      <h2 className="heading"><span>Project</span></h2>
      <div className="Projects">
        {projects.map((pro, index) => (
          <div className="Project-card" key={index}>
            <img src={pro.img} alt="Project-image" />
            <h1 className="P-title">{pro.title}</h1>
            <p className="description">{pro.description}</p>
            <div className="languages">
              <h1>{pro.Frontend_lang}</h1>
              <h1>{pro.Backend_lang}</h1>
              <h1>{pro.Database}</h1>
            </div>
            <a href={pro.link} target="_blank">See More</a>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
