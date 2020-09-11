import React, { useEffect } from "react";
import mobileImage from "../copy/img/ezfy-proof-mobile-up.jpg";
import desktopImage from "../copy/img/pixel_quite_black_portrait_trim_up.png";
import "./Services.scss";

import arvalVideo from "../copy/videos/video-arval.mp4";

const items = [
  {
    tags: ["HTML5", "CSS3", "jQuery", "UX"],
    video: require("../copy/videos/video-arval.mp4"),
    image: require("../copy/img/thumbnail/thumbnail-arval.jpg"),
    sourceCode: "",
    liveWebsite: "https://arvalmq.com/",
    title: "Arval",
    subtitle: `Arval is a printing machine company. They needed their old
  website updated so we developed a brand new design +
  website for them.`,
  },
];

const PortfolioItem = (
  tags,
  video,
  image,
  sourceCode,
  liveWebsite,
  title,
  subtitle,
) => {
  return (
    <div
      className="col-12 col-md-6 portfolio-item"
      data-portfolio-item-tags={tags.join(", ")}>
      <div className="single-portfolio res-margin">
        {/* Portfolio Thumb */}
        <div className="portfolio-thumb blog-thumb">
          <a className="play-btn" data-fancybox="gallery" href={video}>
            <div className="btn-circle play-animation" />
            <div className="btn-circle play-animation animation-short" />
            {/* Play Icon */}
            <div className="play-icon">
              <svg
                className="svg-inline--fa fa-play fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg>
                <path
                  fill="currentColor"
                  d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
              {/* <i class="fas fa-play"></i> */}
            </div>
          </a>
          <figure className="custom-overlay">
            <img className="lazyload" data-src={image} alt={title} />
          </figure>
        </div>
        {/* Portfolio Content */}
        <div className="portfolio-content blog-content p-4">
          {/* Meta Info */}
          <ul className="meta-info d-flex">
            <li>
              <a
                className={sourceCode.length <= 0 && "portfolio-blocked"}
                href={sourceCode.length <= 0 ? "#" : sourceCode}
                target="_blank">
                Source Code
              </a>
            </li>
            <li>
              <a
                className={liveWebsite.length <= 0 && "portfolio-blocked"}
                href={liveWebsite.length <= 0 ? "#" : liveWebsite}
                target="_blank">
                Live Website
              </a>
            </li>
          </ul>
          {/* Portfolio Title */}
          <h3 className="blog-title my-3">
            <span>{title}</span>
          </h3>
          <p>{subtitle}</p>
        </div>
        <ul className="portfolio-tags blog-content p-4"></ul>
      </div>
    </div>
  );
};

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
                        Filter
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
              {items.map((e) =>
                PortfolioItem(
                  e.tags,
                  e.video,
                  e.image,
                  e.sourceCode,
                  e.liveWebsite,
                  e.title,
                  e.subtitle,
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
