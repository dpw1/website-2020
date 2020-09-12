import React, { useState } from "react";
import "./Services.scss";
import TrustBadge from "./TrustBadge";

const items = [
  {
    tags: ["Custom Shopify Section"],
    video: require("../copy/videos/section-countdown.mp4"),
    price: "49",
    image: require("../copy/img/thumbnail/thumbnail-section-countdown.gif"),
    preview: "https://acid-tests.myshopify.com/",
    title: `Animated Countdown`,
    subtitle: () => (
      <ul>
        <li>
          <i class="fa fa-check" aria-hidden="true"></i>
          <span>Customize colors, text, expiration date and more</span>
        </li>

        <li>
          <i class="fa fa-check" aria-hidden="true"></i>
          <span>Works with any theme (without usage of apps)</span>
        </li>
        <li>
          <i class="fa fa-check" aria-hidden="true"></i>
          <span>
            It's a Shopify section: move it around, hide it, have full control
            and freedom
          </span>
        </li>
        <li>
          <i class="fa fa-check" aria-hidden="true"></i>
          <span>Super lightweight: won't slow down your website</span>
        </li>
        <li>
          <i class="fa fa-check" aria-hidden="true"></i>
          <span>
            Perfect to boost conversions for festive dates & sale seasons
          </span>
        </li>
        <li>
          <i class="fa fa-check" aria-hidden="true"></i>
          <span>Free installation included</span>
        </li>

        <li>
          <small>You'll be redirected to PayPal for secure checkout.</small>
          <div style={{ marginTop: 10 }}>
            <TrustBadge></TrustBadge>
          </div>
        </li>
      </ul>
    ),
  },
];

const ServicesItem = (tags, video, image, preview, title, subtitle, price) => {
  const [loading, setLoading] = useState(false);
  return (
    <div
      className="col-12 col-md-6 portfolio-item service-item"
      data-portfolio-item-tags={tags.join(", ")}>
      <div className="single-portfolio service-single res-margin">
        {/* Portfolio Thumb */}
        <div
          href={video}
          className="portfolio-thumb blog-thumb"
          data-fancybox="/lightbox-service">
          <figure className="custom-overlay">
            <img className="lazyload" data-src={image} alt={title} />
          </figure>
        </div>
        {/* Portfolio Content */}
        <div className="portfolio-content blog-content p-4">
          {/* Portfolio Title */}
          <div className="services-price">
            <h3 className="blog-title services-price-title my-3">
              <span>{title}</span>
            </h3>
            <h3 class="services-price-small color-primary">
              <small class="fw-7">$</small>
              {price}
            </h3>
          </div>
          <ul className="meta-info d-flex">
            <li>
              <a
                className={
                  preview.length > 0
                    ? "custom-link"
                    : " custom-link portfolio-blocked"
                }
                href={preview.length <= 0 ? "#" : preview}
                target="_blank">
                Click here to view a live demo!
              </a>
            </li>
          </ul>

          <div className="services-subtitle">{subtitle()}</div>
        </div>
        <div class="services-button">
          <a
            href="#"
            class="btn mt-4"
            onClick={() => {
              setLoading(true);
            }}>
            {loading ? "Redirecting to PayPal..." : "Buy Now"}
          </a>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top">
            <input type="hidden" name="cmd" defaultValue="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              defaultValue="YV4CYUCEEL7VQ"
            />
            <input type="hidden" border={0} name="send" />
          </form>
        </div>
      </div>
    </div>
  );
};

function Services() {
  return (
    <section
      id="services"
      className="section services blog-area bg-gray ptb_50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Services</h2>
              <p className="d-sm-block mt-4">
                Besides bug fixes and customizations we also sell premade
                sections.
                <br />
                <span className="custom-emphasis">Click on the gif</span> to
                watch a short video showcasing the respective section.
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
                ServicesItem(
                  e.tags,
                  e.video,
                  e.image,

                  e.preview,
                  e.title,
                  e.subtitle,
                  e.price,
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
