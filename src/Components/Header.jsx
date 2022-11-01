import React from 'react'
import '../App.css';

const header = () => {
    return (
        <div className="header">
            <h1>NC Games</h1>
            <navbar>
                <a href="/">Home</a>
                <a href="/account">Account</a>
                <a href="/reviews">Reviews</a>
                <a href="/categories">Categories</a>
            </navbar>
        </div>
    )
}

export default header