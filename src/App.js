import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.scss";

import { HashRouter, Route, Link, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import { AppProvider } from "./context/Context";
import HighlightBarAppPage from "./pages/HighlightBarAppPage";
import PortfolioPage from "./pages/PortfolioPage";
import HomePage from "./pages/HomePage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogsPage from "./pages/BlogsPage";
import Routes from "./Routes";

function App(props) {
  useEffect(() => {
    console.log("sitemap");
  }, []);

  return (
    <AppProvider>
      <div className="App main">
        <Routes></Routes>
      </div>
    </AppProvider>
  );
}

export default App;
