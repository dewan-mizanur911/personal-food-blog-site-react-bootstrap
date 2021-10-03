import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Blog from "./components/Blog/Blog";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopularRecipes from "./components/PopularRecipes/PopularRecipes";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Category></Category>
        <Subscribe></Subscribe>
        <PopularRecipes></PopularRecipes>
        <Blog></Blog>
        <Main></Main>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
