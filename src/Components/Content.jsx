import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Content = () => {

    const [reviews, setReviews] = useState([])

    function getReviews() {

        axios.get('https://ikrams-first-app.herokuapp.com/api/reviews')
            .then((response) => {
                setReviews(response.data.reviews)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <button onClick={getReviews}>All Reviews</button>
            <ul>
                {reviews.map((review) => {
                    return <li key={review.review_id}>
                        {review.title}
                        {review.review_body}
                        {review.votes}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Content

