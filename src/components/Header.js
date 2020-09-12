import React, { Component } from "react";
import "./Header.scss";
import logo from "../copy/img/logo/ezfy-logo-transparent-small.png";
import stickyLogo from "../copy/img/logo/ezfy-logo-small.png";
import { HashLink as Link } from "react-router-hash-link";

const url = `website-2020`;

function Header(props) {
  return (
    <header
      id="navbarSection"
      className="navbar navbar-sticky navbar-expand-lg navbar-dark">
      <div className="container position-relative">
        <a className="navbar-brand fade-in scroll" href="#hero">
          <img className="navbar-brand-regular" src={logo} alt="brand logo" />
          <img
            className="navbar-brand-sticky lazyload"
            data-src={stickyLogo}
            alt="sticky brand logo"
          />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="navbarToggler"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-inner">
          {/*  Mobile Menu Toggler */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="navbarToggler"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <nav>
            <ul className="navbar-nav" id="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link scroll"
                  href="#about"
                  data-scroll-offset={-60}>
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link scroll"
                  href="#reviews"
                  data-scroll-offset={-40}>
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link scroll"
                  href="#services"
                  data-scroll-offset={-40}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#/portfolio"
                  data-scroll-offset={-40}>
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link scroll"
                  href="#faq"
                  data-scroll-offset={-60}>
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link scroll"
                  href="#contact"
                  data-scroll-offset={-60}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
