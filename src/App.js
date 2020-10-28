import React, { useEffect, useState } from "react";
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
import { generateBlogUrl, reloadOnURLChange } from "./utils/utils";
import BlogShowcase from "./components/BlogShowcase";
import Parallax from "./components/Parallax";
import ReviewsText from "./components/ReviewsText";
import { blogApi } from "./api/api";

import { AppProvider } from "./context/Context";
import HighlightBarAppPage from "./pages/HighlightBarAppPage";
import PortfolioPage from "./pages/PortfolioPage";
import HomePage from "./pages/HomePage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogsPage from "./pages/BlogsPage";

function App(props) {
  return (
    <AppProvider>
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
              component={() => <HighlightBarAppPage></HighlightBarAppPage>}
            />

            <Route exact path="/blog" component={() => <BlogsPage />} />

            <Route
              path="/blog/:slug"
              render={(data) => {
                return <BlogDetailsPage data={data} />;
              }}
            />
          </div>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
