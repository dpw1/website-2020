import React, { Component } from "react";
import "./Header.scss";
import logo from "../copy/img/logo/ezfy-logo-transparent-small.png";
import stickyLogo from "../copy/img/logo/ezfy-logo-small.png";
import { HashLink as Link } from "react-router-hash-link";
import { renderNav } from "../utils/utils";

const headerItem = (props) => (
  <li key={JSON.stringify(props)} className="nav-item">
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
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id={2076491679249035}
        theme_color="#0084ff"
        greeting_dialog_display="fade"
        greeting_dialog_delay={15}
        logged_in_greeting="Hi! How can we help you?"
        logged_out_greeting="Hi! How can we help you?"></div>
      ;
    </header>
  );
}

export default Header;
