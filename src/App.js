
import React from "react";
import {hot} from "react-hot-loader";
 import TodoApp from "./TodoApp.js";
import "./App.css";

const App = () => {

  



  return(
    <div className="App">
      <h1> Todo App </h1>
      <TodoApp />
    </div>
  );
}

export default hot(module)(App);
