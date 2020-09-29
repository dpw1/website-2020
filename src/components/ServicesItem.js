import React, { useState, useRef } from "react";
// import "./Services.scss";
import TrustBadge from "./TrustBadge";
import { servicesItems } from "./../utils/utils";
import PaypalCheckout from "./PaypalCheckout";

/* 
 *
INFO:

You can find all items' JSON at servicesItems in utils/utils
 *
 */

function ServicesItem(props) {
  const {
    tags,
    video,
    price,
    image,
    preview,
    title,
    loadImage,
    paymentLink,
    descriptionList,
    subtitle,
  } = props;

  //   const [isButtonLoading, setIsButtonLoading] = useState(false);

  return (
    <div
      key={JSON.stringify(props)}
      className="col-12 col-md-6 col-lg-4  portfolio-item services-item"
      data-portfolio-item-tags={tags.join(", ")}>
      <div className="single-portfolio service-single res-margin">
        {/* Portfolio Thumb */}
        <div
          href={video}
          className="portfolio-thumb blog-thumb"
          data-fancybox="/lightbox-service">
          <figure className="custom-overlay">
            <img
              className="lazyload"
              src={loadImage ? image : undefined}
              data-src={loadImage || image}
              alt={title}
            />
          </figure>
        </div>
        {/* Portfolio Content */}
        <div className="portfolio-content services-content blog-content p-4">
          {/* Portfolio Title */}
          <div className="services-price">
            <h3 className="blog-title services-price-title my-3">
              <a href={video} data-fancybox="/lightbox-service-1">
                <span>{title}</span>
              </a>
            </h3>
            <h3 className="services-price-small color-primary">
              <small className="fw-7">$</small>
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
                Live demo
              </a>
            </li>
          </ul>

          <div className="services-subtitle">
            {/* <div className="services-description">{subtitle && subtitle()}</div> */}
            <React.Fragment>{descriptionList()}</React.Fragment>

            <a href="#" className="services-read-more custom-link">
              Read more
            </a>
          </div>
        </div>
        <div className="services-button">
          {paymentLink && (
            <a
              href={`${paymentLink}?wanted=true`}
              data-gumroad-single-product="true"
              className="btn mt-4">
              Buy Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesItem;
