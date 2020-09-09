import React, { Component } from "react";
import "./Preloader.scss";

function Preloader() {
  return (
    <div className="preloader-main">
      <div className="preloader-wapper">
        <svg
          className="preloader"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width={600}
          height={200}>
          <defs>
            <filter id="goo" x="-40%" y="-40%" height="200%" width="400%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation={10}
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -8"
                result="goo"
              />
            </filter>
          </defs>
          <g filter="url(#goo)">
            <circle className="dot" cx={50} cy={50} r={25} fill="#8731E8" />
            <circle className="dot" cx={50} cy={50} r={25} fill="#8731E8" />
          </g>
        </svg>
        <div>
          <div className="loader-section section-left" />
          <div className="loader-section section-right" />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
