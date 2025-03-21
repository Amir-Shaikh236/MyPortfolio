import React from "react";
import profile from "../assets/profile.png"

const Home = () => {
    return (
        <section class="home" id="home">
        <div class="pro-image">
            <img src={profile} alt="profile" />
        </div>
        <div class="home-content">
            <h1>Hi, I'm <span> Amir Shaikh </span></h1>
            <div class="animate">
                <h3> Full Stack Developer </h3>
            </div>
            <p>A passionate MERN Stack Developer with a strong foundation in MongoDB, Express.js, React, and Node.js.</p>

            <div class="home-cnt">
                <a href="#"><i class='bx bxl-linkedin'></i></a>
                <a href="#"><i class='bx bxl-gmail'></i></a>
                <a href="#"><i class='bx bxl-whatsapp'></i></a>
            </div>
            
            <div class="btn-box">
                <a href="Amir(FD).pdf" class="btn" download> Download CV </a>
            </div>
        </div>

    </section>
    );
}

export default Home;