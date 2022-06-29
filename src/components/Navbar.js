import React from "react";
import logo from "../image/react-icon.jpg";

export default function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} alt= " " className="nav--icon"/>
            <h3 className="nav--logo_text"> React Facts </h3>
            <h4 className="nav--title"> React Facts project 1 </h4>
        </nav>
    )
}