import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import CategoryDescription from "./CategoryDescription";
import Footer from "./Footer";
import Error404 from "./Error404";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const nav = [
  { link: "/", text: "Главная" },
  { link: "/about", text: "О сайте" },
  { link: "/cat", text: " Категории" },
];
const categories =[
  { url: "/notebook", text: " Notebooks" },
  { url: "/monitors", text: "Monitors" },
  { url: "/phones", text: " Phones" },
]

function App() {
  return (<>
      <Router>
        <Header data={nav} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cat" element={<Category data={categories} />} />
          
          <Route path="cat/:catName" element={<CategoryDescription/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
