import React from 'react'
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Footer from "./Footer.js";
import Nav from "./Nav.js";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Nav/>
        {/* Contains website data in multiple routes */}
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/projects' element={<Projects/>} /> 
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
          </Routes >
        <Footer/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
