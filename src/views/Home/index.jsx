import React from "react";
import "./index.css";
import Header from "components/homepageComponents/header";
import Result from "components/homepageComponents/results";
import Recipe from "components/homepageComponents/recipe";
import Shopping from "components/homepageComponents/shopping";

const Home = () => {
  return (
    <div className="homepage-container">
      <Header />
      <Result />
      <Recipe />
      <Shopping />
    </div>
  );
};

export default Home;
