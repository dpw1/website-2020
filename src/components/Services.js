import React, { useState, useRef } from "react";
import "./Services.scss";
import TrustBadge from "./TrustBadge";
import { servicesItems } from "./../utils/utils";
import ServicesItem from "./ServicesItem";

const items = servicesItems;

function Services() {
  const loadItemsAmount = 2;
  const [itemsToShow, setItemsToShow] = useState(loadItemsAmount);
  const [loadedItems, setLoadedItems] = useState(items);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const loadMoreItems = () => {
    console.log("loading", loadedItems);

    if (itemsToShow > loadedItems.length) {
      return;
    }

    return Array(itemsToShow)
      .fill(null)
      .map((_, i) => i)
      .map((e) => {
        let item = items[e];

        item.loadImage = true;
        item.isButtonLoading = isButtonLoading;
        item.setIsButtonLoading = setIsButtonLoading;

        if (itemsToShow <= loadItemsAmount) {
          item.loadImage = false;
        }

        return ServicesItem(item);
      });
  };

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
                Besides bug fixes, speed optimization and customizations we also
                sell <b>Shopify sections.</b>
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
            <div className="portfolio-row row">{loadMoreItems()}</div>
            {/* {itemsToShow >= loadedItems.length || (
              <button
                style={{ display: "block", margin: "0 auto" }}
                onClick={() => {
                  setItemsToShow(itemsToShow + loadItemsAmount);
                  return setTimeout(() => window.ezfy.initServices(), 50);
                }}
                className="btn mt-4">
                {isLoading ? "Loading..." : "Load more"}
              </button>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
