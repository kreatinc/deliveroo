import React from "react";
import { fetchProduct } from "actions";
import { useParams } from "react-router-dom";

const Like = ({ item, dispatch }) => {
  const { category } = useParams();
  console.log("the category is the foo-llowing : ", category);
  return (
    <li>
      <a
        className="likes__link"
        href={
          category !== undefined
            ? "#" + item.id
            : "/home/" + item.category.title + "#" + item.id
        }
        onClick={() => fetchProduct(item.id)}
      >
        <figure className="likes__fig">
          <img src={item.image} alt={item.description} />
        </figure>
        <div className="likes__data">
          <h4 className="likes__name">{item.title}</h4>
          <p className="likes__author">{item.company.title}</p>
        </div>
      </a>
    </li>
  );
};

export default Like;
