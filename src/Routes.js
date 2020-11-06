import React, { useEffect, useState } from "react";
import { HashRouter, Route, Link, BrowserRouter } from "react-router-dom";

import HighlightBarAppPage from "./pages/HighlightBarAppPage";
import PortfolioPage from "./pages/PortfolioPage";
import HomePage from "./pages/HomePage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogsPage from "./pages/BlogsPage";
import Sitemap from "./Sitemap";

function Routes(props) {
  return (
    <BrowserRouter basename="/">
      <Route
        exact
        sitemapIndex={true}
        path="/"
        component={() => <HomePage></HomePage>}
      />
      <Route
        path="/portfolio"
        sitemapIndex={true}
        component={() => <PortfolioPage></PortfolioPage>}
      />
      <Route
        path="/apps/highlight-bar/privacy"
        component={() => <HighlightBarAppPage></HighlightBarAppPage>}
      />

      <Route exact path="/blog" component={() => <BlogsPage />} />

      <Route
        path="/blog/:slug"
        sitemapIndex={true}
        render={(data) => {
          return <BlogDetailsPage data={data} />;
        }}
      />

      <Route path="/sitemap" sitemapIndex={true} component={Sitemap} />
    </BrowserRouter>
  );
}

export default Routes;
