import axios from "axios";

const apiUrl = axios.create({
    baseURL: "https://ikrams-first-app.herokuapp.com/api",
});

export const fetchReviews = () => {
    return apiUrl.get("/reviews").then((res) => {
        return res.data.reviews;
    });
};

export const fetchCategories = () => {
    return apiUrl.get("/categories").then((res) => {
        return res.data.categories;
    });
};
