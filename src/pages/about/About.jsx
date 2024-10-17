import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="outer">
        <div className="intro">
          <div className="aboutusdesign">
            <p className="about-title">ABOUT SNAPWRITE</p>
          </div>
          <div className="short-description">
            <div className="heading-line heading-subtitle">
              Where Ideas Emerge, Pixels Ignite,
            </div>
            <div className="heading-line heading-subtitle">
              Crafting Digital Narratives.
            </div>
          </div>
        </div>

        <h3 className="mainhead">Our Mission:</h3>
        <div className="info-box">
          <p className="info-text"><b>At SnapWrite, we empower writers to share their unique stories and perspectives with the world.</b></p>
        </div>

        <h3 className="mainhead">What We Write About:</h3>
        <div className="info-box">
          <p className="info-text"><b>From lifestyle and technology to art and culture, we cover a wide range of topics that inspire and inform.</b></p>
        </div>

        <h3 className="mainhead">Connect with Us:</h3>
        <div className="info-box">
          <p className="info-text">
            <b>Join us on social media to stay updated with our latest content, share your thoughts, and connect with fellow writers!</b>
          </p>
        </div>
      </div>
    </>
  );
}
