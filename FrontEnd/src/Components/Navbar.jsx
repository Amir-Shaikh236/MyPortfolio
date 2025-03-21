import React from "react";

const Navbar = () => {
    return (
        <header className="header">
            <a href="#" class="logo"> Portfolio.</a>

            <box-icon name='menu' className="bx bx-menu" id="menu"></box-icon>

            <nav className="navbar">
                <a href="#home" class="active"> Home </a>
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