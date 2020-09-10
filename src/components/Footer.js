import React, { Component } from "react";

import "./Footer.scss";

function Footer() {
  return (
    <React.Fragment>
      <div class="height-emulator d-none d-lg-block"></div>
      <footer id="footerSection" className="footer-area footer-fixed">
        {/* Footer Top */}
        <div className="footer-top ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-3 col-lg-3">
                {/* Footer Items */}
                <div className="footer-items">
                  {/* Logo */}
                  <a className="navbar-brand fade-in" href="#">
                    <img
                      className="lazyload logo"
                      data-src={require("../copy/img/logo/ezfy-logo-small.png")}
                      alt
                    />
                  </a>
                  <p className="mt-2 mb-3">
                    Made with <span style={{ color: "#DC143C" }}>❤</span> in
                    Porto, Portugal.
                  </p>
                  {/* Social Icons */}
                  <div className="social-icons d-flex">
                    <a
                      className="facebook"
                      target="_blank"
                      href="https://fb.com/ezfyforshopify">
                      <i className="fab fa-facebook-f" />
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="facebook-messenger"
                      target="_blank"
                      href="https://m.me/ezfyforshopify">
                      <i className="fab fa-facebook-messenger" />
                      <i className="fab fa-facebook-messenger" />
                    </a>
                    <a
                      className="google-plus"
                      target="_blank"
                      href="mailto:diego.boarutto.fortes@gmail.com">
                      <i className="fas fa-envelope-square" />
                      <i className="fas fa-envelope-square" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3 col-lg-3">
                {/* Footer Items */}
                <div className="footer-items">
                  {/* Footer Title */}
                  <h3 className="footer-title mb-2">Useful Links</h3>
                  <ul>
                    <li className="py-2">
                      <a
                        className=" scroll"
                        href="#about"
                        data-scroll-offset={-60}>
                        About Us
                      </a>
                    </li>
                    <li className="py-2">
                      <a
                        className=" scroll"
                        href="#portfolio"
                        data-scroll-offset={-40}>
                        Portfolio
                      </a>
                    </li>
                    <li className="py-2">
                      <a
                        className=" scroll"
                        href="#reviews"
                        data-scroll-offset={-40}>
                        Reviews
                      </a>
                    </li>
                    <li className="py-2">
                      <a
                        className=" scroll"
                        href="#faq"
                        data-scroll-offset={-60}>
                        FAQ
                      </a>
                    </li>
                    <li className="py-2">
                      <a
                        className=" scroll"
                        href="#contact"
                        data-scroll-offset={-60}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-6">
                <img
                  className="footer-image lazyload"
                  data-src={require("../copy/img/bg/porto-picture.jpg")}
                  alt="picture of Porto city, in Portugal"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Copyright Area */}
                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                  {/* Copyright Left */}
                  <div className="copyright-center">
                    © Copyrights <span id="currentYear" /> EZFY All rights
                    reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
