import React from "react";
import about from "../assets/about.png"

const About = () => {
    return (
        <section className="About" id="About">
            <h2 class="heading">About <span> Me </span></h2>

            <div className="about-img">
                <img src={about} alt="profile" />
                <span className="circle-spin"></span>
            </div>

            <div className="about-content">
                <h3> Full Stack Developer </h3>
                <p>Hi, I'm Mohammed Amer, a passionate MERN Stack Developer with a strong foundation in MongoDB, Express.js, React, and Node.js. I love building dynamic, user-friendly web applications that provide seamless experiences.I gained hands-on experience in developing full-stack applications, working with RESTful APIs, authentication, database management, and frontend design. I’m always eager to explore new technologies and improve my problem-solving skills.I’m looking forward to collaborating on exciting projects and making a meaningful impact in the web development world. Feel free to connect with me and check out my projects</p>
            </div>
        </section>
    );
}

export default About;