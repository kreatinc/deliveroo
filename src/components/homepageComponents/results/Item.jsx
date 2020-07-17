import React from "react";

const Item = ({ name, company }) => (
  <li>
    <a className="results__link results__link--active" href="#23456">
      <figure className="results__fig">
        <img src="img/test-1.jpg" alt="Test" />
      </figure>
      <div className="results__data">
        <h4 className="results__name">{name}</h4>
        <p className="results__author"></p>
      </div>
    </a>
  </li>
);

export default Item;
