import Header from "./Components/Header";
import ReviewsList from "./Components/ReviewsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoriesList from "./Components/CategoriesList";
import ReviewCard from "./Components/ReviewCard";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ReviewsList />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/reviews/categories/:category" element={<ReviewsList />} />
          <Route path="/reviews/:id" element={<ReviewCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

