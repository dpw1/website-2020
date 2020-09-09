import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { HashRouter, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import Reviews from "./components/Reviews";

const Home = () => (
  <div>
    <Preloader></Preloader>
    <ScrollToTop></ScrollToTop>
    <Header></Header>
    <Hero></Hero>
    <About></About>
    <Reviews></Reviews>
  </div>
);

function App() {
  return (
    <div className="App main">
      <HashRouter basename="/">
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
