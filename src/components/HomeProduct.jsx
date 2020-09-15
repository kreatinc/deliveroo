import React from "react";
import Card from "react-bulma-components/lib/components/card";
import Button from "./Button";
import sampleImage from "assets/img/test-1.jpg";
import { Link } from "react-router-dom";
const BannerComponent = ({ product }) => {
  return (
    <Card>
      <header className="card-header">
        <p className="card-header-title">{product.description}</p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          <img style={{ borderRadius: "20px" }} src={product.image}></img>
          <br />
        </div>
        <footer className="card-footer mb-5">
          <Link to={`/home/${product.category.title}#${product.id}`}>
            Take a look
          </Link>
        </footer>
      </div>
    </Card>
  );
};

export default BannerComponent;
