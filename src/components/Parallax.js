import React, { Component } from "react";
import "./Parallax.scss";

function Parallax() {
  return (
    <div className="ezfy-parallax">
      <div className="ezfy-parallax-container">
        <div className="ezfy-parallax-background">
          <img
            loading="lazy"
            src="https://returnpath.com/assets/images/backgrounds/background-confetti-xl-arcade.svg;"
          />
          <img
            loading="lazy"
            src="https://returnpath.com/assets/images/backgrounds/background-confetti-lg-arcade.svg;"
          />
          <img
            loading="lazy"
            src="https://returnpath.com/assets/images/backgrounds/background-confetti-md-arcade.svg;"
          />
          <img
            loading="lazy"
            src="https://returnpath.com/assets/images/backgrounds/background-confetti-sm-arcade.svg;"
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            version={1.0}
            width="800.000000pt"
            height="796.000000pt"
            viewBox="0 0 800.000000 796.000000"
            preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="header-shape-gradient" x2="0.35" y2={1}>
                <stop offset="0%" stopColor="var(--color-stop)" />
                <stop offset="50%" stopColor="var(--color-stop)" />
                <stop offset="100%" stopColor="var(--color-bot)" />
              </linearGradient>
            </defs>
            <g
              transform="translate(0.000000,796.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none">
              <path d="M5785 7944 c-1130 -311 -5463 -1541 -5504 -1561 -33 -16 -85 -56 -126 -98 -110 -111 -155 -219 -155 -380 0 -85 6 -112 117 -505 l118 -414 3 147 3 147 789 0 790 0 0 -225 0 -225 -520 0 -520 0 0 -155 0 -155 470 0 470 0 0 -210 0 -210 -470 0 -470 0 0 -160 0 -160 530 0 530 0 0 -230 0 -230 -566 0 c-534 0 -565 -1 -560 -17 3 -10 192 -677 421 -1483 296 -1044 425 -1485 450 -1536 63 -129 211 -244 355 -275 30 -6 96 -9 154 -6 97 4 205 34 2835 775 1695 478 2754 781 2789 799 80 40 190 152 229 233 42 85 52 136 53 245 0 89 -5 109 -337 1278 -185 653 -340 1187 -343 1187 -3 0 -67 -101 -143 -223 l-137 -224 0 -376 0 -377 -270 0 -270 0 0 366 0 367 -297 486 c-163 267 -332 543 -375 614 l-78 127 306 -2 306 -3 201 -357 c111 -197 204 -358 207 -358 7 0 354 611 358 630 2 9 -150 556 -338 1216 -240 845 -351 1220 -375 1270 -61 125 -208 242 -345 273 -63 15 -225 12 -285 -5z m-1985 -2858 l0 -195 -492 -551 c-271 -304 -494 -556 -496 -561 -2 -5 195 -9 492 -9 l496 0 0 -225 0 -225 -870 0 -870 0 0 193 1 192 500 560 500 560 -481 3 -480 2 0 225 0 225 850 0 850 0 0 -194z m1870 -41 l0 -235 -520 0 -520 0 0 -170 0 -170 470 0 470 0 0 -220 0 -220 -470 0 -470 0 0 -355 0 -355 -265 0 -265 0 0 980 0 980 785 0 785 0 0 -235z" />
            </g>
          </svg> */}
          <img
            src="https://returnpath.com/assets/images/backgrounds/background-confetti-xs-arcade.svg"
            loading="lazy"
          />
          <img
            src="https://returnpath.com/assets/images/backgrounds/background-confetti-xs-arcade.svg"
            loading="lazy"
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
