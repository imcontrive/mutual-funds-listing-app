import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className="is_homepage_wrapper">
      <Header />
      <div className="bg-layer"></div>
      <h2 className="heading">Mutual Funds Listing App</h2>
    </div>
  );
};

export default HomePage;
