import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import TodoDetails from "./components/TodoDetails/TodoDetails";
import Todos from "./components/Todos/Todos";

export const TodosContext = React.createContext('Todos');
 
function App() {
  const [searched, setSearched] = useState('');
  const handleOnSearch = name => {
    setSearched(name);
}
  return (
    <TodosContext.Provider value={{handleOnSearch: handleOnSearch, searched: searched}}>
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/todos">
              <Todos></Todos>
            </Route>
            <Route path="/todos/:todoId">
              <TodoDetails></TodoDetails>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
