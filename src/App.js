import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"





function App() {
  return (
    <Router>
    <div className="router">
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="home/" element={<Home />} />
          <Route path="about/" element={<About />} />

        </Routes>
    </div>

        </Router>
     
     
  );
}

export default App;
