import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav>
                <a className="item"> <Link to="/">Home</Link></a>
                <a className="item"> <Link to="/about">About</Link></a>
                <a className="item"> <Link to="/users">Users</Link></a>
            </nav>
        </div>
    )
};

