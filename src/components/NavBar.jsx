/** @format */

import React from "react";
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>Javascript Enthusiast Blog</h1>
      <div className="links">
        <Link to='/'> Home </Link>
        <Link to="/create"> About </Link>
        <Link to='/'> Contact </Link>
      </div>
    </nav>
  );
}


  