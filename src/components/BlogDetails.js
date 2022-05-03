/** @format */

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isFetching,
  } = useFetch("http://localhost:8080/blog/" + id);
const navigate = useNavigate();
  const handleDelete = () =>{
    fetch("http://localhost:8080/blog/" + blog.id, {
      method : 'DELETE'
    }).then(() =>{
       navigate('/')
        
      })
    };

  return (
    <div className="blog-details">
      {isFetching && <div> is loading... </div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h3> {blog.title} </h3>
          <p> Post by {blog.author} </p>
          <div> {blog.body} </div>
          <button onClick={handleDelete}> Delete </button>
        </article>

      )}
    </div>
  );
} 
