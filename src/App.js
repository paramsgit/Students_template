
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Navbar } from "./components/navbar";
import { Index } from "./components";
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Index/>
     
    </div>
  );
}

export default App;