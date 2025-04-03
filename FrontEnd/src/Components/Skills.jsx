import React from "react";

const Skills = () => {

    const Web = [
        {
            Name: "HTML",
            skill: "90%",
        },
        {
            Name: "CSS",
            skill: "75%",
        },
        {
            Name: "JavaScript",
            skill: "80%",
        },
        {
            Name: "MongoDB",
            skill: "90%",
        },
    ];


    const Lang = [
        {
            Name: "Express",
            skill: "50%",
        },
        {
            Name: "React",
            skill: "50%",
        },
        {
            Name: "Node.js",
            skill: "50%",
        },
        {
            Name: "Python",
            skill: "75%",
        },
    ];
    return (
        <section class="skills" id="skills">
            <h2 class="heading"> My <span> Coding Skills </span></h2>
            <div class="skill-row">
                <div class="skill-column">
                    <div class="skill-box">
                        <div class="skill-content">
                            {Web.map((Web, index) => (
                                <div class="progress" key={index}>
                                    <h3>{Web.Name} <span> {Web.skill} </span></h3>
                                    <div class="bar"><span></span></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div class="skill-column">
                    <div class="skill-box">
                        <div class="skill-content">
                            {Lang.map((lang, index) => (
                                <div class="progress" key={index}>
                                    <h3>{lang.Name} <span> {lang.skill} </span></h3>
                                    <div class="bar"><span></span></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;