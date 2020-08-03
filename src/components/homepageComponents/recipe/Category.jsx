import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <figure className="category__fig">
      <img
        src={category.image}
        alt={category.title}
        className="category__img"
      />
      <h1 className="category__title">
        <Link to={"/home/" + category.title}>
          <span>{category.title}</span>
        </Link>
      </h1>
    </figure>
  );
};

export default Category;
