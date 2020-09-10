import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { HashRouter, Route, Link } from "react-router-dom";
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

const Home = () => (
  <div>
    {/* <Preloader></Preloader> */}
    <ScrollToTop></ScrollToTop>
    <Header></Header>
    <Hero></Hero>
    <About></About>
    <Reviews></Reviews>
    <Portfolio></Portfolio>
    <Faq></Faq>
    <Steps></Steps>
    <Contact></Contact>
    <Footer></Footer>
  </div>
);

function App(props) {
  return (
    <div className="App main">
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
