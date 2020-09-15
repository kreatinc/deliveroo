import Product from "components/companyComponents/Product";
import React from "react";
import Card from "react-bulma-components/lib/components/card";
import { Link } from "react-router-dom";

const CommandsReviewCard = ({ title, items }) => {
  console.log("itemssss :>> ", items);
  return (
    <Card className="company__card">
      <header className="card-header">
        <h3 style={{ paddingLeft: "20px" }}>{title}</h3>
      </header>
      <div className="card-content">
        {!items && <p>No data available</p>}
        <h2 className="statistic">
          {items && (
            <ul>
              {items.map((item, i) => (
                <Product item={item} key={i} />
              ))}
            </ul>
          )}
        </h2>
      </div>
    </Card>
  );
};

export default CommandsReviewCard;
