import React from "react";
import "./Component.css";

export default function Component({ title, description, image }) {
  return (
    <div
      className="custom-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="custom-card-overlay">
        <div className="custom-card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
