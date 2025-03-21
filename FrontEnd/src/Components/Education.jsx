import React from "react";

const Education = () => {

    const education = [
        {
            Degree: "Bsc (Computer Science)",
            Institution_Name: "Abeda Inamdar Senior College",
            Year: "2021-2024",
        },
        {
            Degree: "Bsc (Computer Science)",
            Institution_Name: "Abeda Inamdar Senior College",
            Year: "2021-2024",
        },
        {
            Degree: "Bsc (Computer Science)",
            Institution_Name: "Abeda Inamdar Senior College",
            Year: "2021-2024",
        },
        {
            Degree: "Bsc (Computer Science)",
            Institution_Name: "Abeda Inamdar Senior College",
            Year: "2021-2024",
        },
    ];

    const experiences = [
        {
            role: "MERN Stack Developer",
            company: "Scalefull Technologies",
            duration: "2025 For 3 Months.",
            description: "Developed modern web applications using React, MongoDB, Node.js, Express.js",
        },
        {
            role: "MERN Stack Developer",
            company: "Scalefull Technologies",
            duration: "2025 For 3 Months.",
            description: "Developed modern web applications using React, MongoDB, Node.js, Express.js",
        },
        {
            role: "MERN Stack Developer",
            company: "Scalefull Technologies",
            duration: "2025 For 3 Months.",
            description: "Developed modern web applications using React, MongoDB, Node.js, Express.js",
        },
        {
            role: "MERN Stack Developer",
            company: "Scalefull Technologies",
            duration: "2025 For 3 Months.",
            description: "Developed modern web applications using React, MongoDB, Node.js, Express.js",
        },
    ];

    return (
        <section class="education" id="education">
            <h2 class="heading"> My <span>Education</span></h2>

            <div class="education-row">
                <div class="education-column">
                    <h3 class="title"> Education </h3>
                    <div class="education-box">
                        {education.map((edu, index) => (
                            <div class="education-content" key={index}>
                                <div class="content">
                                    <div class="year">{edu.Year}</div>
                                    <h3>{edu.Degree}</h3>
                                    {/* <h3>{edu.Institution_Name}</h3> */}
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit commodi voluptatem, sunt ratione laborum, mollitia !</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="education-column">
                    <h3 class="title"> Experience </h3>
                    <div class="education-box">
                        {experiences.map((exp, index) => (
                            <div class="education-content" key={index}>
                                <div class="content">
                                    <div class="year">{exp.role}</div>
                                    <h3>{exp.company}</h3>
                                    <p>{exp.description}</p>
                                    <h3 className="year">{exp.duration}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;