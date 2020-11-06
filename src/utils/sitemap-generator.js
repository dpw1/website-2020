// require("babel-register")({
//   presets: ["es2015", "react"],
// });

// require.extensions[".css"] = function () {
//   return null;
// };

// require.extensions[".png"] = function () {
//   return null;
// };

// require.extensions[".svg"] = function () {
//   return null;
// };

// require.extensions[".jpg"] = function () {
//   return null;
// };

// const router = require("../Routes").default;
// const Sitemap = require("react-router-sitemap").default;

// console.log(router, Sitemap);

// function generateSitemap() {
//   return new Sitemap(router)
//     .build("https://ezfycode.com")
//     .save("../sitemap.xml");
// }

// generateSitemap();
// import React, { useEffect, useState } from "react";
// import buildSitemap from "react-build-sitemap";

// buildSitemap("./pages/HomePage.js", "../public", "http://ezfycode.com");

/* ============= */

import router from "../Routes";
import siteMapBuilder, { getSites } from "react-router-sitemap-builder";

getSites(router);
/*
 [ '/',
  '/test',
  '/posts',
  '/posts/*',
  '/article/*',
  '/tags/*',
  '/tags/pages',
  '/tags/pages/*',
  '/archive',
  '/archive/*' ]
 */
/* router, prefix, save_to_where */
siteMapBuilder(router, "http://ezfycode.com", __dirname + "/sitemap.txt");
/* return true of false */
