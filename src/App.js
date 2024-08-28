import React from "react";

import Header from './Components/Header';

import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';


export default function App(){
    return (
      <body>
        <Header />
        
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </body>
    )
  };
