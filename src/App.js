import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home"






function App() {
  return (
    <Router>
    <div className="router">
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="home/" element={<Home />} />

        </Routes>
    </div>

        </Router>
     
     
  );
}

export default App;
