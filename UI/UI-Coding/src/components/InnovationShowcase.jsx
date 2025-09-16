import React from "react";
import "./InnovationShowcase.css";
import Delivery from "./Delivery";

const features = [
  {
    title: "Engineering\nExcellence",
    description:
      "Engineering excellence: delivering scalable, cloud-native solutions with deep industry and domain expertise.",
    image: "hi.jpg",
    className: "greenOverlay",
  },
  {
    title: "AI-powered\nOrchestration",
    description:
      "Integrating intelligent systems to accelerate delivery and drive measurable outcomes.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    className: "blackOverlay",
  },
  {
    title: "Generative AI for\nInnovation",
    description:
      "Leveraging Gen AI and automation to compress delivery cycles and enable next-generation solutions.",
    image: "bye.jpg",
    className: "green1Overlay",
  },
  {
    title: "Pod-based Delivery\n& Product Mindset",
    description:
      "Cross-functional teams blend design, engineering, and outcomes to drive value.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    className: "blackOverlay",
  },
];

export default function InnovationShowcase() {
  return (
    <div className="innovation-showcase">
      <header className="innovation-header">
        <h1>
          <span className="bold">Streamline</span> Delivery.{" "}
          <span className="bold">Break Down</span> Bottlenecks.{" "}
          <span className="bold">Build</span> for the{" "}
          <span className="bold">Future</span>
        </h1>
        <p className="innovation-subtitle">
          The pace and scale of technology innovation are unprecedented.
          Software is no longer just built—it's engineered, deployed, and scaled
          at cloud speed, with intelligence infused at every step. Our teams
          combine deep technical expertise, cloud-native architectures, and
          AI-powered intelligence to help clients reimagine what’s possible,
          accelerate innovation, and shape the future of work.
        </p>
        <hr className="innovation-divider" />
      </header>
      <section className="innovation-different">
        <h2>
          <span className="green">Why</span> we are{" "}
          <span className="green">Different</span>
        </h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <Delivery key={idx} idx={idx} feature={feature} />
          ))}
        </div>
      </section>
    </div>
  );
}

// <div
//               className={`feature-card ${feature.overlay}`}
//               key={idx}
//               style={{
//                 background:
//                   feature.overlay === "green"
//                     ? `linear-gradient(180deg, rgba(38, 137, 13, 0) 26%, #26890d 103%)`
//                     : "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 29.52%)",
//               }}
//             >
//               <div
//                 className={`${
//                   feature.overlay === "green" || feature.overlay === "green1"
//                     ? "feature-overlay"
//                     : "feature-overlay-black"
//                 }`}
//                 style={{
//                   background:
//                     "linear-gradient(180deg, rgba(38, 137, 13, 0) 0%, #26890d 17.52%)",
//                 }}
//               >
//                 <h3>
//                   <span>{feature.title}</span>
//                 </h3>
//                 <p>{feature.description}</p>
//               </div>
//             </div>
