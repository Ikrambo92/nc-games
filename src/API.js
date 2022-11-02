import axios from 'axios'

const apiUrl = axios.create({
  baseURL: "https://ikrams-first-app.herokuapp.com/api",
});

export const fetchReviews = () => {
    return apiUrl.get("/reviews").then((res) => {
        console.log(res.data.reviews)
        return res.data.reviews
    })
}