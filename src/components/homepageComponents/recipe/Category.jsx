import React from "react";

const Category = ({ category }) => {
  return (
    <figure className="category__fig">
      <img
        src={category.image}
        alt={category.title}
        className="category__img"
      />
      <h1 className="category__title">
        <a href={"/home/" + category.title}>
          <span>{category.title}</span>
        </a>
      </h1>
    </figure>
  );
};

export default Category;
