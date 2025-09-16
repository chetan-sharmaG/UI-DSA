import React from "react";
import "./HeroSection.css";

const HeroSection = () => (
  <>
    <div class="features-grid">
      <div
        class="feature-card green"
        style='backdrop-filter: blur(400px);background: linear-gradient(180deg, rgba(38, 137, 13, 0) 26%, #26890d 103%);/* background-position: top; *//* background-size: 320px; *//* background-repeat: no-repeat; *//* background-image: url("hi.jpg"); */'
      >
        <div
          class="feature-overlay"
          style="
        /* backdrop-filter: blur(39px); */
        background: linear-gradient(180deg, rgba(38, 137, 13, 0) 0%, #26890d 17.52%);"
        >
          <h3>
            <span>
              Engineering
              <br />
            </span>
            <span>
              Excellence
              <br />
            </span>
          </h3>
          <p>
            Engineering excellence: delivering scalable, cloud-native solutions
            with deep industry and domain expertise.
          </p>
        </div>
      </div>
      <div
        class="feature-card black"
        style='background-image: url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;w=600&amp;q=80");'
      >
        <div class="feature-overlay">
          <h3>
            <span>
              AI-powered
              <br />
            </span>
            <span>
              Orchestration
              <br />
            </span>
          </h3>
          <p>
            Integrating intelligent systems to accelerate delivery and drive
            measurable outcomes.
          </p>
        </div>
      </div>
      <div
        class="feature-card green"
        style='background-image: url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=600&amp;q=80");'
      >
        <div class="feature-overlay">
          <h3>
            <span>
              Generative AI for
              <br />
            </span>
            <span>
              Innovation
              <br />
            </span>
          </h3>
          <p>
            Leveraging Gen AI and automation to compress delivery cycles and
            enable next-generation solutions.
          </p>
        </div>
      </div>
      <div
        class="feature-card black"
        style='background-image: url("https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=crop&amp;w=600&amp;q=80");'
      >
        <div class="feature-overlay">
          <h3>
            <span>
              Pod-based Delivery
              <br />
            </span>
            <span>
              &amp; Product Mindset
              <br />
            </span>
          </h3>
          <p>
            Cross-functional teams blend design, engineering, and outcomes to
            drive value.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default HeroSection;
