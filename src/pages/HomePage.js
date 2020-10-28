import React, { Component } from "react";
import ScrollToTop from "./../components/ScrollToTop";
import Header from "./../components/Header";
import Hero from "./../components/Hero";
import Portfolio from "./../components/Portfolio";
import Faq from "./../components/Faq";
import Contact from "./../components/Contact";
import Footer from "./../components/Footer";
import Preloader from "./../components/Preloader";
import About from "./../components/About";
import BlogShowcase from "./../components/BlogShowcase";
import ReviewsText from "./../components/ReviewsText";
import Services from "./../components/Services";
import Parallax from "./../components/Parallax";
import Steps from "./../components/Steps";

const HomePage = () => (
  <React.Fragment>
    <Preloader></Preloader>
    <ScrollToTop></ScrollToTop>
    <Header page={"home"}></Header>
    <Hero scrollTo="#about"></Hero>
    <About></About>
    <BlogShowcase totalPosts={3}></BlogShowcase>
    <ReviewsText></ReviewsText>
    <Services></Services>
    <Parallax
      title="Get a free quote"
      subtitle={`Didn't find what you need? Let us know, we'll work together to find
            a custom solution that attend your needs.`}
      buttonText={"Request a free quote"}></Parallax>
    <Faq></Faq>
    <Steps></Steps>
    <Contact></Contact>
    <Footer page={"home"}></Footer>
  </React.Fragment>
);

export default HomePage;
