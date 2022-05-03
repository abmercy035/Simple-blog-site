/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function BlogList({ blogs, title }) {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <Link to={`/blogs/${blog.id}`}>
            <h3> {blog.title} </h3>
            <div> {blog.body} </div>
            <p> Post by {blog.author} </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
