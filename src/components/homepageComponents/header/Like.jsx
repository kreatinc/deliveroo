import React from "react";
import { fetchProduct } from "store/actions";
import { useParams } from "react-router-dom";

const Like = ({ product }) => {
  const { category } = useParams();
  return (
    <li>
      <a
        className="likes__link"
        href={
          category !== undefined
            ? "#" + product.id
            : "/home/" + product.category.title + "#" + product.id
        }
        onClick={() => fetchProduct(product.id)}
      >
        <figure className="likes__fig">
          <img src={product.image} alt={product.description} />
        </figure>
        <div className="likes__data">
          <h4 className="likes__name">{product.title}</h4>
          <p className="likes__author">
            {product?.company?.title ?? "Anonymous"}
          </p>
        </div>
      </a>
    </li>
  );
};

export default Like;
