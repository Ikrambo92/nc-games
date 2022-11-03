import { fetchReviews } from "../API"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ReviewsList = () => {

    const [reviews, setReviews] = useState([])
    const { category } = useParams()

    useEffect(() => {
        fetchReviews(category).then((res) => {
            setReviews(res)
        })
    }, [])

    return (
        <div className="container">
            <h1>Reviews</h1>
            <div className="content-list">
                <ul>
                    <div className="list">
                        {reviews.map((review) => {
                            return <li key={review.review_id}>
                                <h3>{review.title}</h3>
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