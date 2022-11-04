import axios from "axios";

const apiUrl = axios.create({
    baseURL: "https://ikrams-first-app.herokuapp.com/api",
});

export const fetchReviews = (category) => {
    return apiUrl.get("/reviews", { params: { category } }).then((res) => {
        return res.data.reviews;
    });
};

export const fetchCategories = () => {
    return apiUrl.get("/categories").then((res) => {
        return res.data.categories;
    });
};

export const fetchReviewById = (review_id) => {
    return apiUrl.get(`/reviews/${review_id}`).then((res) => {
        console.log(res.data.reviews)
        return res.data.reviews;
    });
}