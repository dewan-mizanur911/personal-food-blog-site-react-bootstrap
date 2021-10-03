import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Meals from "./components/Meals/Meals";
import NotFound from "./components/NotFound/NotFound";
import TodoDetails from "./components/TodoDetails/TodoDetails";
import Todos from "./components/Todos/Todos";

export const TodosContext = React.createContext('Todos');
 
function App() {
  const [searched, setSearched] = useState('');
  const handleOnSearch = name => {
    setSearched(name);
}
  return (
    <TodosContext.Provider
      value={{ handleOnSearch: handleOnSearch, searched: searched }}
    >
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/home">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path="/todos">
              <Header></Header>
              <Todos></Todos>
              <Footer></Footer>
            </Route>
            <Route exact path="/todos/:todoId">
              <TodoDetails></TodoDetails>
            </Route>
            <Route exact path="/meals">
              <Header></Header>
              <Meals></Meals>
              <Footer></Footer>
            </Route>
            <Route exact path="/about">
              <Header></Header>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
