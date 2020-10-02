import React, { useEffect } from "react";
import "./About.scss";
import image from "../copy/img/avatar/diego.jpg";
import { getAllPosts } from "./../utils/data";

function BlogShowcase() {
  useEffect(() => {
    const getUser = async () => {
      const posts = await getAllPosts();
      console.log("my data", posts);
    };

    getUser();
  }, []);
  return <div>{"test"}</div>;
}

export default BlogShowcase;
