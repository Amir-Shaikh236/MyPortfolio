import React, { useEffect } from "react";

const Navbar = () => {
    useEffect(() => {
        let menu = document.querySelector("#menu");
        let navbar = document.querySelector(".navbar");

        if (menu) {
            menu.onclick = () => {
                menu.classList.toggle("bx-x");
                navbar.classList.toggle("active");
            };
        }
    }, []);

    return (
        <header className="header">
            <a href="#" className="logo"> Portfolio.</a>

            <box-icon name="menu" className="bx bx-menu" id="menu"></box-icon>

            <nav className="navbar">
                <a href="#home" className="active"> Home </a>
                <a href="#About"> About </a>
                <a href="#education"> Education </a>
                <a href="#skills"> Skills </a>
                <a href="#project"> Project </a>
                <a href="#contact"> Contacts </a>
            </nav>
        </header>
    );
}

export default Navbar;
