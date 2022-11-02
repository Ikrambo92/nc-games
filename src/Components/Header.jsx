import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

const header = () => {
    return (
        <div className="header">
            <h1>NC Games</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/account">Account</a>
                <a href="/reviews">Reviews</a>
                <a href="/categories">Categories</a>
                <Link to="/comment">Comment</Link>
            </nav>
        </div>
    )
}

export default header