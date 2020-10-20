import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";

import { HashRouter, Route, Link, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import Reviews from "./components/Reviews";
import Portfolio from "./components/Portfolio";
import Faq from "./components/Faq";
import Steps from "./components/Steps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import { reloadOnURLChange } from "./utils/utils";
import BlogShowcase from "./components/BlogShowcase";
import Parallax from "./components/Parallax";
import ReviewsText from "./components/ReviewsText";

const HomePage = () => (
  <React.Fragment>
    <Preloader></Preloader>
    <ScrollToTop></ScrollToTop>
    <Header page={"home"}></Header>
    <Hero scrollTo="#about"></Hero>
    <About></About>
    <ReviewsText></ReviewsText>
    <Services></Services>
    <Parallax></Parallax>
    <Faq></Faq>
    <Steps></Steps>
    <Contact></Contact>
    <Footer page={"home"}></Footer>
  </React.Fragment>
);

const PortfolioPage = () => (
  <React.Fragment>
    <ScrollToTop></ScrollToTop>
    <Header page="portfolio"></Header>
    <Hero scrollTo="#portfolio" buttonText={"View Portfolio"}></Hero>
    <Portfolio></Portfolio>
    <Faq></Faq>
    <Contact></Contact>
    <Footer page={"portfolio"}></Footer>
  </React.Fragment>
);

const HighlightBarApp = () => (
  <React.Fragment>
    <ScrollToTop></ScrollToTop>
    <div className="container" style={{ padding: "40px 0" }}>
      <p>
        <h1>Ezfy's Highlights Bar Privacy Policy</h1>
        <br />
        <br />
        Ezfy's Highlights Bar "the App” provides the possibility to add a
        navigation bar styled like Instagram Stories to merchants who use
        Shopify to power their stores. This Privacy Policy describes how
        personal information is collected, used, and shared when you install or
        use the App in connection with your Shopify-supported store.
        <br />
        <br />
        <h2>Personal Information the App Collects</h2>
        <br />
        <br />
        When you install the App, we are automatically able to access certain
        types of information from your Shopify account: products data, themes
        data and wnformation about you and others who may access the App on
        behalf of your store, such as your name, address, email address, phone
        number, and billing information;
        <br />
        <br />
        We collect personal information directly from the relevant using the
        following technologies: “Cookies” are data files that are placed on your
        device or computer and often include an anonymous unique identifier. For
        more information about cookies, and how to disable cookies, visit
        http://www.allaboutcookies.org. “Log files” track actions occurring on
        the Site, and collect data including your IP address, browser type,
        Internet service provider, referring/exit pages, and date/time stamps.
        “Web beacons,” “tags,” and “pixels” are electronic files used to record
        information about how you browse the Site.
        <br />
        <br />
        <h2>How Do We Use Your Personal Information?</h2>
        <br />
        <br />
        We use the personal information (namely products and themes data) from
        you in order to provide the Service and to operate the App. <br />
        <br />
        <h2>Sharing Your Personal Information</h2>
        <br />
        <br />
        Finally, we may also share your Personal Information to comply with
        applicable laws and regulations, to respond to a subpoena, search
        warrant or other lawful request for information we receive, or to
        otherwise protect our rights.
        <br />
        <br />
        If you are a European resident, you have the right to access personal
        information we hold about you and to ask that your personal information
        be corrected, updated, or deleted. If you would like to exercise this
        right, please contact us through the contact information below.
        <br />
        <br />
        Additionally, if you are a European resident we note that we are
        processing your information in order to fulfill contracts we might have
        with you (for example if you make an order through the Site), or
        otherwise to pursue our legitimate business interests listed above.
        Additionally, please note that your information will be transferred
        outside of Europe, including to Canada and the United States.
        <br />
        <br />
        Changes We may update this privacy policy from time to time in order to
        reflect, for example, changes to our practices or for other operational,
        legal or regulatory reasons.
        <br />
        <br />
        Contact Us For more information about our privacy practices, if you have
        questions, or if you would like to make a complaint, please contact us
        by e-mail at diego.boarutto.fortes@gmail.com.
      </p>
    </div>
  </React.Fragment>
);

function App(props) {
  return (
    <div className="App main">
      <BrowserRouter basename="/">
        <div>
          <Route exact path="/" component={() => <HomePage></HomePage>} />
          <Route
            path="/portfolio"
            component={() => <PortfolioPage></PortfolioPage>}
          />
          <Route
            path="/apps/highlight-bar/privacy"
            component={() => <HighlightBarApp></HighlightBarApp>}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
