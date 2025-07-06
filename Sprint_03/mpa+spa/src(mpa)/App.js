import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Home from './Home'
import Category from "./Category";
import Footer from "./Footer";
import Error404 from './Error404'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CategoryDescription from "./CategoryDescription";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cat" element={<Category />} />
          <Route path="/footer" element={<Footer />} />
          <Route  path="/cat/:catName" element={<CategoryDescription />}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
