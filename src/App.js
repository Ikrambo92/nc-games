import "./App.css";
import Header from "./Components/Header";
import ReviewsList from "./Components/ReviewsList";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
      <Router>
        <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ReviewsList />} />
          
        </Routes>
        </div>
      </Router>
  );
}

export default App;
