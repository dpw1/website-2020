import React, { Component } from "react";
import "./Parallax.scss";

function Parallax() {
  return (
    <div className="ezfy-parallax">
      <div className="ezfy-parallax-container">
        <div className="ezfy-parallax-background">
          <img
            loading="lazy"
            className="lazyload"
            data-src="https://returnpath.com/assets/images/backgrounds/background-confetti-xl-arcade.svg;"
          />
          <img
            loading="lazy"
            className="lazyload"
            data-src="https://returnpath.com/assets/images/backgrounds/background-confetti-lg-arcade.svg;"
          />
          <img
            loading="lazy"
            className="lazyload"
            data-src="https://returnpath.com/assets/images/backgrounds/background-confetti-md-arcade.svg;"
          />
          <img
            loading="lazy"
            className="lazyload"
            data-src="https://returnpath.com/assets/images/backgrounds/background-confetti-sm-arcade.svg;"
          />
          <img
            data-src="https://returnpath.com/assets/images/backgrounds/background-confetti-xs-arcade.svg"
            loading="lazy"
            className="lazyload"
          />
          <img
            data-src="https://returnpath.com/assets/images/backgrounds/background-confetti-xs-arcade.svg"
            loading="lazy"
            className="lazyload"
          />
        </div>

        <div className="ezfy-parallax-text">
          <h2>Can't find what you need?</h2>
          <h3 className="ezfy-parallax-subtitle">
            No worries! Get in touch with us, we'll work together to find a
            custom solution that attend your needs.
          </h3>
          <a
            className="btn custom-btn scroll"
            href={"#contact"}
            data-scroll-offset={-60}>
            Click here to request a free quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default Parallax;
