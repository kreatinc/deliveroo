import Product from "components/companyComponents/Product";
import React from "react";
import Card from "react-bulma-components/lib/components/card";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <Card className="company__card">
      <header className="card-header">
        <h3 style={{ paddingLeft: "20px" }}>Latest commands</h3>
        <Link
          to="/company/commands"
          className="card-header-icon"
          aria-label="more options"
        >
          Learn more &rarr;
        </Link>
      </header>
      <div className="card-content">
        <h2 className="statistic">
          <Product />
          <Product />
        </h2>
      </div>
    </Card>
  );
};

export default ReviewCard;
