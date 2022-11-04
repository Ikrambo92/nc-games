import { fetchReviews } from "../API"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import "../App.css";


const ReviewsList = () => {

    const [reviews, setReviews] = useState([])
    const { category } = useParams()

    useEffect(() => {
        fetchReviews(category).then((res) => {
            setReviews(res)
        })
    }, [category])

    return (
        <div className="container">
            <h1>Reviews</h1>
            <div className="content-list">
                <ul>
                    <div className="list">
                        {reviews.map((review) => {
                            return <li key={review.review_id}>
                                <Link to={`/reviews/${review.review_id}`} className="active-link">{review.title}</Link>
                                <p>{'Votes: ' + review.votes}</p>
                                <p>{'Category: ' + review.category}</p>
                                <br />
                            </li>
                        }
                        )}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default ReviewsList