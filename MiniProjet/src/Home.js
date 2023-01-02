import React, { Component } from "react";
import imgg from "./images/feather.png";
import "./home.css";
 
class Home extends Component {
  render() {
    return (
      <div className="homeContent">
        <img src={imgg} alt="" id="fi" />
        <h2 id="titleCenter">I am  <span>Jane Doe </span>, Welcome to my Homepage</h2>
        <div class="homeContentins">
        <p>Nice seeing you here! this is my single page app where you can do multiple stuff.<br/><br/>
        starting with the navigation of the available content using the navigation bar up-top, you can either visit the blog or the contacts part or come back to this home page , easily by clicking on the navbar links. <br/><br/>
        you will have an explication of the part's content and what you can do in it in each part, everything is easy and self explanatory.
        Add buttons will give you forms to add either blog posts or contacts.
         Display buttons give you the ability to show already existing blogs or contacts, once shown, you can easily hide them again with the hide button.the Display Contacts button also gives you a useful search bar. 
        <br/><br/> have fun visiting my React app! </p>
        </div>
      </div>
    );
  }
}
 
export default Home;