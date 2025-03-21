import React from "react";

const Skills = () => {

    const Web = [
        {
            Name: "HTML",
            skill: "90%",
        },
        {
            Name: "CSS",
            skill: "90%",
        },
        {
            Name: "JavaScript",
            skill: "90%",
        },
        {
            Name: "PHP",
            skill: "90%",
        },
    ];


    const Lang = [
        {
            Name: "Python",
            skill: "90%",
        },
        {
            Name: "Java",
            skill: "90%",
        },
        {
            Name: "C",
            skill: "90%",
        },
        {
            Name: "Web Development",
            skill: "90%",
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