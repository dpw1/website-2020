import React, { useState, useEffect } from "react";
import "./Header.scss";
import logo from "../copy/img/logo/ezfy-logo-transparent-small.png";
import stickyLogo from "../copy/img/logo/ezfy-logo-small.png";
import { HashLink as Link } from "react-router-hash-link";
import { renderNav } from "../utils/utils";
import FacebookButton from "./FacebookButton";
import $ from "jquery";

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

  useEffect(() => {
    $(document).ready(function () {
      checkWidth(true);
      $(window).resize(function () {
        checkWidth(false);
      });
    });
    function checkWidth(init) {
      // If browser resized, check width again
      if ($(window).width() <= 991) {
        $(".dropdown-submenu a").on("click", function (e) {
          $(this).next("ul").toggle();
          e.stopPropagation();
          e.preventDefault();
        });
      }
    }
    function navMenu() {
      // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
      $('[data-toggle="navbarToggler"]').click(function () {
        $(".navbar").toggleClass("active");
        $("body").toggleClass("canvas-open");
      });
      // MAIN MENU TOGGLER ICON
      $(".navbar-toggler").click(function () {
        $(".navbar-toggler-icon").toggleClass("active");
      });
      // NAVBAR STICKY
      var $stickyNav = $(".navbar-sticky");
      $(window).on("scroll load", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 120) {
          $stickyNav.addClass("navbar-sticky-moved-up");
        } else {
          $stickyNav.removeClass("navbar-sticky-moved-up");
        }
        // apply transition
        if (scroll >= 250) {
          $stickyNav.addClass("navbar-sticky-transitioned");
        } else {
          $stickyNav.removeClass("navbar-sticky-transitioned");
        }
        // sticky on
        if (scroll >= 500) {
          $stickyNav.addClass("navbar-sticky-on");
        } else {
          $stickyNav.removeClass("navbar-sticky-on");
        }
      });
    }
    setTimeout(navMenu, 10);
  }, []);

  return (
    <React.Fragment>
      <header
        id="navbarSection"
        className="navbar navbar-sticky navbar-expand-lg navbar-dark">
        <div className="container position-relative">
          <a className="navbar-brand fade-in" href="/">
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
      </header>
      <FacebookButton></FacebookButton>
    </React.Fragment>
  );
}

export default Header;
