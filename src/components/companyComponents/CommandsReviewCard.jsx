import Product from "components/companyComponents/Product";
import React from "react";
import Card from "react-bulma-components/lib/components/card";
import { Link } from "react-router-dom";

const CommandsReviewCard = ({
  title,
  items = [
    {
      id: 1,
      quantity: "20",
      product: { image: "https://fr.wikipedia.org/wiki/Pizza", title: "Tacos" },
    },
    {
      id: 1,
      quantity: "20",
      product: { image: "https://fr.wikipedia.org/wiki/Pizza", title: "Tacos" },
    },
    {
      id: 1,
      quantity: "20",
      product: { image: "https://fr.wikipedia.org/wiki/Pizza", title: "Tacos" },
    },
  ],
  comments,
}) => {
  return (
    <Card className="company__card">
      <header className="card-header">
        <h3 style={{ paddingLeft: "20px" }}>{title}</h3>
      </header>
      <div className="card-content">
        <h2 className="statistic">
          {items && (
            <ul>
              {items.map((item) => (
                <Product command={item} key={item.id} />
              ))}
            </ul>
          )}
        </h2>
      </div>
    </Card>
  );
};

export default CommandsReviewCard;
