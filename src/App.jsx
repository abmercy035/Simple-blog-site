/** @format */
import React, { useState } from "react";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import Input from "./components/SearchBar";

function App() {
  const [searchFor, setSearchFor] = useState(""),
    handleSearch = (e) => {
      setSearchFor(e.target.value);
      console.log("searching");
    };
  return (
    <Router>
      <React.StrictMode>
        <div className="app">
          <NavBar />
          <Input handleInput={handleSearch} />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home searchFor={searchFor} />} />
              <Route exact path="/blogs/:id" element={<BlogDetails />} />
              <Route exact path="/create" element={<Create />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </React.StrictMode>
    </Router>
  );
}

export default App;
