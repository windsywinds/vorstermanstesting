import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PortfolioList from "./Pages/Portfolio/PortfolioList";
import PortfolioItem from "./Pages/Portfolio/PortfolioItem";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            {" "}
            {/*top route will load and be used to define links*/}
            <Route path="/project/:id" element={<PortfolioItem />} />
            <Route path="/Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="PortfolioList" element={<PortfolioList />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
