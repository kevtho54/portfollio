import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import ProjetPerso from "./pages/projet_perso"
import ProjetFormation from './pages/projet_formation';



function App() {
  return (
    <Router>
    <div className="router">
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="home/" element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="projet_perso/" element={<ProjetPerso />} />
          <Route path="projet_formation/" element={<ProjetFormation />} />

        </Routes>
    </div>

        </Router>
     
     
  );
}

export default App;
