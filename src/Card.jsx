

import React from "react";
import "./index.css";

function Card(props) {
  console.log(props);
  return (
    <div className="Card">
      <img src={props.img} alt={props.title || "Book image"} />
      <h3>{props.title || "Book Title"}</h3>
    </div>
  );
}

export default Card;



