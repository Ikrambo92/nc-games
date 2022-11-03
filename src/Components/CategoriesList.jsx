import { fetchCategories } from "../API";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then((res) => {
            setCategories(res);
        });
    }, []);

    return (
        <div className="container">
            <h1>Categories</h1>
            <div className="content-list">
                <ul>
                    <div className="list">
                        {categories.map((category) => {
                            return (
                                <li key={category.slug}>
                                    <Link to={`/reviews/categories/${category.slug}`}>
                                        <h3>{category.slug}</h3>
                                    </Link>
                                    <p>{category.description}</p>
                                    <br />
                                </li>
                            );
                        })}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default CategoriesList;
