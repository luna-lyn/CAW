import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import "./Main.css";
// import NewCONTACT from "./NewCONTACT";
class Main extends Component {
  render() {
    return (
        
        <HashRouter>
        <div className="containerr">
          <h1>Jane doe's blog</h1>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            {/* <li><NavLink to="/NewCONTACT">new CONTACT</NavLink></li> */}
          </ul>
          <div className="content"> <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/contact" element={<Contact/>}/>
              {/* <Route path="/NewCONTACT" element={<NewCONTACT/>}/> */}
         </Routes></div>
         
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;