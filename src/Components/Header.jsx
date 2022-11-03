import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

const header = () => {
    return (
        <div className="header">
            <h1>NC Games</h1>
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

