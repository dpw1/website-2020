import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";

import { HashRouter, Route, Link } from "react-router-dom";
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
    <Footer></Footer>
  </React.Fragment>
);

const PortfolioPage = () => (
  <React.Fragment>
    <ScrollToTop></ScrollToTop>
    <Header page="portfolio"></Header>
    <Hero scrollTo="#portfolio"></Hero>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
  </React.Fragment>
);

function App(props) {
  useEffect(() => {
    try {
      reloadOnURLChange();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="App main">
      <HashRouter basename="/website-2020">
        <div>
          <Route exact path="/" component={() => <HomePage></HomePage>} />
          <Route
            path="/portfolio"
            component={() => <PortfolioPage></PortfolioPage>}
          />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
