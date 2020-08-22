import React from "react";
import convertStringToArray from "utils/convertStringToArray";

const Command = ({
  product,
  createdAt,
  deliveryState,
  price,
  description,
  quantity,
  commandGroupId,
  address,
  author,
}) => {
  return (
    <>
      <li>
        <div className="results__data">
          {
            <h4 className="results__command-id">
              Command id :{commandGroupId}
            </h4>
          }
          <p className="results__author">Author : {author.name}</p>
          {product.map((product, i) => (
            <React.Fragment key={i}>
              <br />
              <p className="results__author">Product : {product.title}</p>
              <figure className="category__fig">
                <img
                  src={product.image}
                  alt={product.title}
                  className="category__img"
                />
              </figure>
              <p className="results__author">
                Recipe :
                {convertStringToArray(product.recipe).map((ingredient, i) =>
                  i === 0 ? `${ingredient}` : `,${ingredient}`
                )}
              </p>
              <p className="results__author">Description : {description[i]}</p>
              <p className="results__author">Quantity : {quantity[i]}</p>
              <p className="results__state">
                Delivery state : {deliveryState[i]}
              </p>
              <br />
            </React.Fragment>
          ))}

          <p className="results__address">Delivery address : {address}</p>
          <span className="results__time">Created at : {createdAt}</span>
        </div>
      </li>
      <br />
    </>
  );
};

export default Command;
