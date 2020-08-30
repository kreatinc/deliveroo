import Comment from "components/homepageComponents/recipe/Comment";
import React from "react";
import Card from "react-bulma-components/lib/components/card";

const ReviewCard = ({ review }) => {
  return (
    <Card className="company__card">
      <header className="card-header">
        <h3 style={{ paddingLeft: "20px" }}>Latest commands</h3>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-content">
        <h2 className="statistic">{/* <Comment /> */}</h2>
      </div>
    </Card>
  );
};

export default ReviewCard;
