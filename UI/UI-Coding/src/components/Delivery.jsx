import React from "react";
import "./Delivery.css";

const images = ["hi.jpg", "ai.jpg", "bye.jpg", "pod.jpg"];
const Delivery = ({ feature, idx }) => {
  return (
    <>
      <div
        className={`delivery-card ${
          idx % 2 === 0 ? "greenOverlay" : "blackOverlay"
        }`}
        style={{ backgroundImage: `url(${images[idx]})` }}
      >
        <div
          className={`delivery-content ${
            idx % 2 === 0 ? "top-to-bottom-content" : "bottom-to-top-content"
          }`}
        >
          <h3 className="title">{feature?.title}</h3>
          <p className="description">{feature?.description}</p>
        </div>
      </div>
    </>
  );
};

export default Delivery;
