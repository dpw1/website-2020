import React, { Component } from "react";
import "./Header.scss";
import logo from "../copy/img/logo/ezfy-logo-transparent-small.png";
import stickyLogo from "../copy/img/logo/ezfy-logo-small.png";
import { HashLink as Link } from "react-router-hash-link";
import { renderNav } from "../utils/utils";

const headerItem = (props) => (
  <li className="nav-item">
    <a
      className={props.scroll ? "nav-link scroll" : "nav-link"}
      href={props.url}
      data-scroll-offset={props.offset}>
      {props.name}
    </a>
  </li>
);

function Header(props) {
  const { page } = props;

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
              {renderNav(page, headerItem)}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
