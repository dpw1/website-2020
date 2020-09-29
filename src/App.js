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

const HomePage = () => (
  <React.Fragment>
    <Preloader></Preloader>
    <ScrollToTop></ScrollToTop>
    <Header page={"home"}></Header>
    <Hero scrollTo="#about"></Hero>
    <About></About>
    <Reviews></Reviews>
    <Services></Services>
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
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
