import React from "react";
import Card from "./Card";


import image1 from "./images/im1.png";
import image2 from "./images/im2.png";
import image3 from "./images/im3.png";

const cards = [
  {
    id: 1,
    title: "Reading",
    text: "Reading is good for you because it improves your focus, memory, empathy, and communication skills. It can reduce stress, improve your mental health, and help you live longer. Reading also allows you to learn new things to help you succeed. This is why reading is one of my favorite hobbies",
    image: image1,
   
  },
  {
    id: 2,
    title: "Coding",
    text: "Coding tests a variety of abilities. It hones problem-solving and analysis skills, such as finding errors and thinking logically. Further, coding often helps people develop teamwork and interpersonal skills since software and application projects are often cross-disciplinary and collaborative.. I focus a lot on coding to improve myself.",
    image: image2,
    
  },
  {
    id: 3,
    title: "Drawing & Painting",
    text: "Besides it being calming, when drawing, we actively use both sides of our brain, the right for creativity, and the left for logical thinking. This strengthens both and helps develop the ability to focus and think strategically. art is a safe space for me to feel free and bring my creativity to life, a safe space where everything is possible",
    image: image3,
   
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, text, image,  id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;