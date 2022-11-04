import React from 'react'
import '../App.css';
import { NavLink, Link } from 'react-router-dom'
import "../App.css";


const header = () => {
    return (
        <div className="header">
            <h1><NavLink to="/" className="active-link">NC Games</NavLink></h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/account">Account</a></li>
                    <li><Link to="/categories">Categories</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default header