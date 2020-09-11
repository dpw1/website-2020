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

let history = createBrowserHistory();

const Home = () => (
  <div>
    {/* <Preloader></Preloader> */}
    <ScrollToTop></ScrollToTop>
    <Header></Header>
    <Hero></Hero>
    <About></About>
    <Reviews></Reviews>
    {/* <Portfolio></Portfolio> */}
    <Services></Services>
    <Faq></Faq>
    <Steps></Steps>
    <Contact></Contact>
    <Footer></Footer>
  </div>
);

function reloadOnURLChange() {
  history.listen((location, action) => {
    const url = location.location.hash;
    const prevUrl = localStorage.getItem("prev-url");

    if (!prevUrl) {
      localStorage.setItem("prev-url", url);
    }

    if (prevUrl !== url) {
      console.log("reload it");

      localStorage.removeItem("prev-url");
      window.location.reload();
    }

    console.log(url, prevUrl);
  });
}

function App(props) {
  useEffect(() => {
    reloadOnURLChange();
  }, []);
  return (
    <div className="App main">
      <HashRouter basename="/website-2020">
        <div>
          <Route exact path="/" component={() => <Home></Home>} />
          <Route path="/about" component={() => <About></About>} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
