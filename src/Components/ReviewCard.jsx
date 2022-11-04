import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../API";
import "../ReviewCard.css";

const ReviewCard = () => {
    const [review, setReview] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchReviewById(id).then((res) => {
            console.log(res)
            setReview(res);
        });
    }, [id])

    return (
        <div className="card-container">
            <h1>{review.title}</h1>
            <div className="main-card">
                <div className="single-card-list">
                    <li>
                        <h4 className="card-body">{review.review_body}</h4>
                        <p className="votes">{'Votes: ' + review.votes}</p>
                        <p className="category">{'Category: ' + review.category}</p>
                        <p className="owner">{'Created by: ' + review.owner}</p>
                        <p className="created-at">{'Created at: ' + review.created_at}</p>
                    </li>
                </div>
            </div>
        </div>
    );
};




export default ReviewCard;