import React, { Component } from "react";

import "./Faq.scss";
import { groupItems } from "../utils/utils";

const faqId = `apolo-accordion`;

const questions = [
  {
    id: "payment",
    question: `What exactly happens after I purchase a section?`,
    answer: () => (
      <p>
        Immediately after your purchase we'll send you an e-mail requesting your
        Shopify store URL so the section can be installed. You can{" "}
        <a className="custom-link scroll" href="#contact">
          contact us
        </a>{" "}
        before purchasing if you have any questions!
      </p>
    ),
  },
  {
    id: "support",
    question: `Is there any support once the service is done?`,
    answer: () => (
      <p>
        Absolutely! In case anything we coded breaks you can get in touch with
        us within 7 days and we'll get back to you within 24 hours to fix it
        with no extra charges.
      </p>
    ),
  },
  {
    id: "payment-methods",
    question: `What payment methods are available?`,
    answer: () => (
      <p>
        Currently we work with <span className="custom-emphasis">PayPal</span>{" "}
        and
        <span className="custom-emphasis">Bank Transfer</span>.{" "}
        <b>Bank transfers</b> are encouraged since we can give you
        <b> 7% of discount</b>. Additionally we have bank accounts in Australia,
        the United States &amp; Europe, so you don't have to worry about
        overseas fees if you reside in any of those places.
      </p>
    ),
  },
  {
    id: "faq-services",
    question: `What type of services do you offer?`,
    answer: () => (
      <p>
        <p>We can help you with:</p>
        <ul>
          <li>bug fixes; </li>
          <li>implementation of custom sections;</li>
          <li>general customizations;</li>
          <li>development tweaks;</li>
          <li>
            Give you control to customize any part of your website such as but
            not limited to: colors, font-size, text... anything!{" "}
          </li>
        </ul>
      </p>
    ),
  },
  {
    id: "faq-custom-website",
    question: `I want a custom theme for my business. Can you build one?`,
    answer: () => (
      <p>
        Currently we do not work by building themes from scratch. In such
        scenarios we'll recommend you a good theme that fits your needs and from
        there we'll help by customizing everything focused specifically for your
        niche.
      </p>
    ),
  },
  {
    id: "faq-review-website",
    question: `Do you have a portfolio of previously done websites?`,
    answer: () => (
      <p>
        Yes! Please{" "}
        <a className="custom-link" href="#/portfolio">
          click here
        </a>{" "}
        to take a look at my portfolio.
      </p>
    ),
  },
];

const FaqItem = (id, question, answer, isOpen = false, newLine = false) => {
  return (
    <div key={id} className="card my-2">
      {/* Card Header */}
      <div className="card-header">
        <h2 className="mb-0">
          <button
            className={`btn p-2 ${isOpen || "collapsed"}`}
            type="button"
            data-toggle="collapse"
            data-target={`#${id}`}>
            {question}
          </button>
        </h2>
      </div>
      <div
        id={id}
        className={isOpen ? "collapse show" : "collapse"}
        data-parent={`#${faqId}`}>
        {/* Card Body */}
        <div className="card-body">{answer()}</div>
      </div>
    </div>
  );
};

function Faq() {
  return (
    <section id="faq" className="section faq-area ptb_100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Frequently Asked Questions</h2>
              <p className="d-sm-block mt-4">
                Some of the most common questions related to our services.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            {/* FAQ Content */}
            <div className="faq-content">
              {/* Accordion */}
              <div className="accordion pt-5" id="apolo-accordion">
                <div className="row">
                  {groupItems(questions, 3).map((children, index) => (
                    <div className="accordion-group col-12 col-lg-6">
                      {children.map((e, i) =>
                        FaqItem(
                          e.id,
                          e.question,
                          e.answer,
                          index === 0 && i === 0 && true,
                        ),
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <span className="d-block text-center mt-5">
                Have any other questions? <br />
                We'd be happy to hear from you!
                <a
                  className="custom-link scroll"
                  href="#contact"
                  data-scroll-offset={-60}>
                  {" "}
                  Click here to contact us
                </a>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
