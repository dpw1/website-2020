import React, { useEffect } from "react";
import mobileImage from "../copy/img/ezfy-proof-mobile-up.jpg";
import desktopImage from "../copy/img/pixel_quite_black_portrait_trim_up.png";
import "./Services.scss";

import arvalVideo from "../copy/videos/video-arval.mp4";

function Services() {
  useEffect(() => {
    // video.play();
  }, []);

  return (
    <section
      id="services"
      className="section section-services blog-area bg-gray ptb_50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Services</h2>
              <p className="d-sm-block mt-4">
                Below you can find a succinct list of some of the websites coded
                for our customers.
                <br />
                <span className="custom-emphasis">
                  Click on the play button
                </span>{" "}
                to watch a video showcasing the respective project.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3">
            <aside className="sidebar">
              {/* Single Widget */}
              <div className="single-widget">
                {/* Tags Widget */}
                <div
                  className="accordions widget tags-widget"
                  id="tags-accordion">
                  <div className="single-accordion blog-accordion">
                    <h5>
                      <a
                        role="button"
                        className="collapse show text-uppercase d-block p-3"
                        data-toggle="collapse"
                        href="#accordion3">
                        Tags
                      </a>
                    </h5>
                    {/* Tags Widget Content */}
                    <div
                      id="accordion3"
                      className="accordion-content widget-content collapse show"
                      data-parent="#tags-accordion">
                      {/* Tags Widget Items */}
                      <div
                        id="tagsWidget"
                        className="widget-content tags-widget-items pt-2">
                        <a
                          href="#"
                          data-tag-name="all"
                          className="d-inline-block mt-2 mr-1 px-2 py-1 tags-widget-item tags-widget-item--active ">
                          All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-12 col-lg-9">
            <div className="portfolio-row row">
              {/* Single Portfolio start */}
              <div
                className="col-12 col-md-6 portfolio-item"
                data-portfolio-item-tags="HTML5, CSS3, jQuery, UX">
                <div className="single-portfolio res-margin">
                  {/* Portfolio Thumb */}
                  <div className="portfolio-thumb blog-thumb">
                    <img
                      className="lazyload"
                      data-src="https://www.mapzen.com/assets/images/one-minute-map/countdown.gif"
                      alt=""
                    />
                  </div>
                  {/* Portfolio Content */}
                  <div className="portfolio-content blog-content p-4">
                    {/* Meta Info */}
                    <ul className="meta-info d-flex">
                      <li>
                        <a href="https://github.com/dpw1/arval" target="_blank">
                          Source Code
                        </a>
                      </li>
                      <li>
                        <a href="https://arvalmq.com/" target="_blank">
                          Live Website
                        </a>
                      </li>
                    </ul>
                    {/* Portfolio Title */}
                    <h3 className="blog-title my-3">
                      <span>Arval</span>
                    </h3>
                    <p>
                      Arval is a printing machine company. They needed their old
                      website updated so we developed a brand new design +
                      website for them.
                    </p>
                  </div>
                  <ul className="portfolio-tags blog-content p-4"></ul>
                </div>
              </div>
              {/* Single Portfolio end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
