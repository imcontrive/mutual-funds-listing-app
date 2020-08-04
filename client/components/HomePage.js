import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="bg-layer"></div>
      <h2 className="hero-heading">Mutual Funds Listing App</h2>
    </div>
  );
};

export default HomePage;
