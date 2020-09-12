import React, { Component } from "react";
import mobileImage from "../copy/img/ezfy-proof-mobile-up.jpg";
import desktopImage from "../copy/img/pixel_quite_black_portrait_trim_up.png";
import "./Portfolio.scss";

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
                href={sourceCode}
                target="_blank">
                Source Code
              </a>
            </li>
            <li>
              <a
                className={liveWebsite.length <= 0 && "portfolio-blocked"}
                href={liveWebsite}
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

function Portfolio() {
  return (
    <section id="portfolio" className="section blog-area  bg-gray ptb_50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Portfolio</h2>
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
                  <div
                    className="portfolio-thumb blog-thumb"
                    data-fancybox="gallery"
                    href={require("../copy/videos/video-arval.mp4")}>
                    <a className="play-btn" href="#">
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
                      <img
                        className="lazyload"
                        data-src={require("../copy/img/thumbnail/thumbnail-arval.jpg")}
                        alt="Website Arval"
                      />
                    </figure>
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
              {/* Single Portfolio start */}
              <div
                className="col-12 col-md-6 portfolio-item"
                data-portfolio-item-tags="HTML5, CSS3, Shopify, Liquid, ES7, SCSS / SASS, jQuery">
                <div className=" single-portfolio res-margin">
                  {/* Portfolio Thumb */}
                  <div
                    className="portfolio-thumb blog-thumb"
                    data-fancybox="gallery"
                    href={require("../copy/videos/video-bubs.mp4")}>
                    <a href="#" className="play-btn">
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
                      <img
                        className="lazyload"
                        data-src={require("../copy/img/thumbnail/thumbnail-bubs.jpg")}
                        alt="Portfolio - Bubswarehouse Shopify Store"
                      />
                    </figure>
                  </div>
                  {/* Portfolio Content */}
                  <div className="portfolio-content blog-content p-4">
                    {/* Meta Info */}
                    <ul className="meta-info d-flex">
                      <li className="portfolio-blocked">Source Code</li>
                      <li>
                        <a
                          href="https://www.bubswarehouse.com/"
                          target="_blank">
                          Live Website
                        </a>
                      </li>
                    </ul>
                    {/* Portfolio Title */}
                    <h3 className="blog-title my-3">
                      <span>Bubswarehouse</span>
                    </h3>
                    <p>
                      Bubswarehouse is one of the biggest online stores in
                      Australia selling baby clothes and toys. We've worked
                      closely together to maximize the store's converion rates.
                    </p>
                  </div>
                  <ul className="portfolio-tags blog-content p-4"></ul>
                </div>
              </div>
              {/* Single Portfolio end */}
              {/* Single Portfolio start */}
              <div
                className="col-12 col-md-6 portfolio-item"
                data-portfolio-item-tags="HTML5, CSS3, Shopify, Liquid, ES7, SCSS / SASS, jQuery">
                <div className="single-portfolio res-margin">
                  {/* Portfolio Thumb */}
                  <div
                    className="portfolio-thumb blog-thumb"
                    data-fancybox="gallery"
                    href={require("../copy/videos/video-light-bricks.mp4")}>
                    <a className="play-btn" href="#">
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
                      <img
                        className="lazyload"
                        data-src={require("../copy/img/thumbnail/thumbnail-light-bricks.jpg")}
                        alt="Portfolio - Light my Bricks Shopify store"
                      />
                    </figure>
                  </div>
                  {/* Portfolio Content */}
                  <div className="portfolio-content blog-content p-4">
                    {/* Meta Info */}
                    <ul className="meta-info d-flex">
                      <li className="portfolio-blocked">Source Code</li>
                      <li>
                        <a href="http://lightmybricks.com.au/" target="_blank">
                          Live Website
                        </a>
                      </li>
                    </ul>
                    {/* Portfolio Title */}
                    <h3 className="blog-title my-3">
                      <span>Light My Bricks</span>
                    </h3>
                    <p>
                      A worldwide famous company selling leds for Legos®. Our
                      work consisted of the implementation of new Shopify
                      sections on their websites.
                    </p>
                  </div>
                  <ul className="portfolio-tags blog-content p-4"></ul>
                </div>
              </div>
              {/* Single Portfolio end */}
              {/* Single Portfolio start */}
              <div
                className="col-12 col-md-6 portfolio-item"
                data-portfolio-item-tags="HTML5, CSS3, Shopify, Liquid, ES7, SCSS / SASS, jQuery">
                <div className="single-portfolio res-margin">
                  {/* Portfolio Thumb */}
                  <div
                    className="portfolio-thumb blog-thumb"
                    data-fancybox="gallery"
                    href={require("../copy/videos/video-zudo.mp4")}>
                    <a className="play-btn" href="#">
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
                      <img
                        className="lazyload"
                        data-src={require("../copy/img/thumbnail/thumbnail-zudo.jpg")}
                        alt="Portfolio - Zudo Shopify Store"
                      />
                    </figure>
                  </div>
                  {/* Portfolio Content */}
                  <div className="portfolio-content blog-content p-4">
                    {/* Meta Info */}
                    <ul className="meta-info d-flex">
                      <li className="portfolio-blocked">Source Code</li>
                      <li>
                        <a href="http://zudo.co/" target="_blank">
                          Live Website
                        </a>
                      </li>
                    </ul>
                    {/* Portfolio Title */}
                    <h3 className="blog-title my-3">
                      <span>Zudo</span>
                    </h3>
                    <p>Shopify website fully customized for client.</p>
                  </div>
                  <ul className="portfolio-tags blog-content p-4"></ul>
                </div>
              </div>
              {/* Single Portfolio end */}
              {/* Single Portfolio start */}
              <div
                className="col-12 col-md-6 portfolio-item"
                data-portfolio-item-tags="HTML5, CSS3, Handlebars.js,  SCSS / SASS, jQuery, UX">
                <div className="single-portfolio res-margin">
                  {/* Portfolio Thumb */}
                  <div
                    className="portfolio-thumb blog-thumb"
                    data-fancybox="gallery"
                    href={require("../copy/videos/video-studiotagus.mp4")}>
                    <a className="play-btn" href="#">
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
                      <img
                        className="lazyload"
                        data-src={require("../copy/img/thumbnail/thumbnail-studiotagus.jpg")}
                        alt="Portfolio - Studio Tagus Website"
                      />
                    </figure>
                  </div>
                  {/* Portfolio Content */}
                  <div className="portfolio-content blog-content p-4">
                    {/* Meta Info */}
                    <ul className="meta-info d-flex">
                      <li>
                        <a
                          href="https://github.com/dpw1/tagus-v3"
                          target="_blank">
                          Source Code
                        </a>
                      </li>
                      <li className="portfolio-blocked">Live Website</li>
                    </ul>
                    {/* Portfolio Title */}
                    <h3 className="blog-title my-3">
                      <span>Studio Tagus</span>
                    </h3>
                    <p>
                      First company related to web development that I've brought
                      up with a couple of friends. Websites were coded in
                      Wordpress, HTML, CSS (SCSS / SASS &amp; Stylus) and
                      Javascript (Vanilla &amp; jQuery) to a multitude of
                      customers. Studio Tagus gave us room to grow and improve
                      our skills in various ways.
                    </p>
                  </div>
                  <ul className="portfolio-tags blog-content p-4"></ul>
                </div>
              </div>
              {/* Single Portfolio end */}
              {/* Single Portfolio start */}
              <div
                className="col-12 col-md-6 portfolio-item"
                data-portfolio-item-tags="HTML5, CSS3, Stylus, jQuery, UX">
                <div className="single-portfolio res-margin">
                  {/* Portfolio Thumb */}
                  <div
                    className="portfolio-thumb blog-thumb"
                    data-fancybox="gallery"
                    href={require("../copy/videos/video-megalancers.mp4")}>
                    <a href="#" className="play-btn">
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
                      <img
                        className="lazyload"
                        data-src={require("../copy/img/thumbnail/thumbnail-megalancers.jpg")}
                        alt="Portfolio - Megalancers Website"
                      />
                    </figure>
                  </div>
                  {/* Portfolio Content */}
                  <div className="portfolio-content blog-content p-4">
                    {/* Meta Info */}
                    <ul className="meta-info d-flex">
                      <li className="portfolio-blocked">Source Code</li>
                      <li className="portfolio-blocked">Live Website</li>
                    </ul>
                    {/* Portfolio Title */}
                    <h3 className="blog-title my-3">
                      <span>Megalancers</span>
                    </h3>
                    <p>
                      Popularly known as the <i>“Brazilian Fiverr”</i> , EZFY
                      helped the website to come to life. Everything was coded
                      from scratch based on a .PSD file.
                    </p>
                  </div>
                  <ul className="portfolio-tags blog-content p-4"></ul>
                </div>
              </div>
              {/* Single Portfolio end */}
              {/* Single Portfolio start */}
              <div
                className="col-12 col-md-6 portfolio-item"
                data-portfolio-item-tags="HTML5, CSS3, Shopify, Liquid, ES7, SCSS / SASS, jQuery">
                <div className="single-portfolio res-margin">
                  {/* Portfolio Thumb */}
                  <div
                    className="portfolio-thumb blog-thumb"
                    data-fancybox="gallery"
                    href={require("../copy/videos/video-yokd.mp4")}>
                    <a href="#" className="play-btn">
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
                      <img
                        className="lazyload"
                        data-src={require("../copy/img/thumbnail/thumbnail-yokd.jpg")}
                        alt="Portfolio - Get Yok'd Shopify Website"
                      />
                    </figure>
                  </div>
                  {/* Portfolio Content */}
                  <div className="portfolio-content blog-content p-4">
                    {/* Meta Info */}
                    <ul className="meta-info d-flex">
                      <li className="portfolio-blocked">Source Code</li>
                      <li>
                        <a href="https://www.getyokd.com/">Live Website</a>
                      </li>
                    </ul>
                    {/* Portfolio Title */}
                    <h3 className="blog-title my-3">
                      <span>GET YOK'D</span>
                    </h3>
                    <p>
                      The project owner requested website optimizations and
                      various styling modifications.
                    </p>
                  </div>
                  <ul className="portfolio-tags blog-content p-4"></ul>
                </div>
              </div>
              {/* Single Portfolio end */}
              {/* Single Portfolio start */}
              <div
                className="col-12 col-md-6 portfolio-item"
                data-portfolio-item-tags="HTML5, CSS3, Shopify, Liquid, ES7, SCSS / SASS, jQuery">
                <div className="single-portfolio res-margin">
                  {/* Portfolio Thumb */}
                  <div
                    className="portfolio-thumb blog-thumb"
                    data-fancybox="gallery"
                    href={require("../copy/videos/video-dog.mp4")}>
                    <a className="play-btn" href="#">
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
                      <img
                        className="lazyload"
                        data-src={require("../copy/img/thumbnail/thumbnail-dog.jpg")}
                        alt="Portfolio - Dog's Best Friend Australia Shopify Website"
                      />
                    </figure>
                  </div>
                  {/* Portfolio Content */}
                  <div className="portfolio-content blog-content p-4">
                    {/* Meta Info */}
                    <ul className="meta-info d-flex">
                      <li className="portfolio-blocked">Source Code</li>
                      <li>
                        <a href="https://www.getyokd.com/">Live Website</a>
                      </li>
                    </ul>
                    {/* Portfolio Title */}
                    <h3 className="blog-title my-3">
                      <span>DOG'S BEST FRIEND AUSTRALIA</span>
                    </h3>
                    <p>
                      Creation of new components on top of a theme.
                      Implementation of the new collection section "Best
                      Sellers".
                    </p>
                  </div>
                  <ul className="portfolio-tags blog-content p-4"></ul>
                </div>
              </div>
              {/* Single Portfolio end */}
              {/* Single Portfolio start */}
              <div
                className="col-12 col-md-6 portfolio-item"
                data-portfolio-item-tags="HTML5, CSS3, Shopify, Liquid, ES7, SCSS / SASS, jQuery">
                <div className="single-portfolio res-margin">
                  {/* Portfolio Thumb */}
                  <div
                    className="portfolio-thumb blog-thumb"
                    data-fancybox="gallery"
                    href={require("../copy/videos/video-birthcanva.mp4")}>
                    <a href="#" className="play-btn">
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
                      <img
                        className="lazyload"
                        data-src={require("../copy/img/thumbnail/thumbnail-birthcanva.jpg")}
                        alt="Portfolio - Birthcanva Shopify Website"
                      />
                    </figure>
                  </div>
                  {/* Portfolio Content */}
                  <div className="portfolio-content blog-content p-4">
                    {/* Meta Info */}
                    <ul className="meta-info d-flex">
                      <li className="portfolio-blocked">Source Code</li>
                      <li>
                        <a href="https://birthcanva.com/">Live Website</a>
                      </li>
                    </ul>
                    {/* Portfolio Title */}
                    <h3 className="blog-title my-3">
                      <span>Birthcanva</span>
                    </h3>
                    <p>
                      Shopify website. We worked together to improve the overall
                      performance, add new sections and styles customizations.
                    </p>
                  </div>
                  <ul className="portfolio-tags blog-content p-4"></ul>
                </div>
              </div>
              {/* Single Portfolio end */}
              {/* Single Portfolio start */}
              <div
                className="col-12 col-md-6 portfolio-item"
                data-portfolio-item-tags="HTML5, CSS3, Shopify, Liquid, ES7, SCSS / SASS, jQuery, UX">
                <div className="single-portfolio res-margin">
                  {/* Portfolio Thumb */}
                  <div
                    className="portfolio-thumb blog-thumb"
                    data-fancybox="gallery"
                    href={require("../copy/videos/video-jim.mp4")}>
                    <a href="#" className="play-btn">
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
                      <img
                        className="lazyload"
                        data-src={require("../copy/img/thumbnail/thumbnail-jim.jpg")}
                        alt="Portfolio - Jim's Décor Shopify Website"
                      />
                    </figure>
                  </div>
                  {/* Portfolio Content */}
                  <div className="portfolio-content blog-content p-4">
                    {/* Meta Info */}
                    <ul className="meta-info d-flex">
                      <li className="portfolio-blocked">Source Code</li>
                      <li>
                        <a href="https://www.jimsdecor.com.au/">Live Website</a>
                      </li>
                    </ul>
                    {/* Portfolio Title */}
                    <h3 className="blog-title my-3">
                      <span>Jim's Décor</span>
                    </h3>
                    <p>Australian Shopify e-commerce selling furnitures.</p>
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

export default Portfolio;
