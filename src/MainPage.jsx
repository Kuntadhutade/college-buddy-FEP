import React from "react";
import Card from "./Card";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
import img5 from "./images/img5.jpg"


function MainPage() {
  return (
    <>
      <h1 className="heading">Card Gallery</h1>
      <div className="Cardname">
        <Card img={img1} />
        <Card img={img2}/>
        <Card img={img3}/>
        <Card img={img4}/>
        <Card img={img5}/>
        <Card img={img5}/>
        <Card img={img3}/>
        <Card img={img2}/>
        <Card img={img4}/>
      </div>
    </>
  );
}

export default MainPage;
