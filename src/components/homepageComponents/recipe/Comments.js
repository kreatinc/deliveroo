import React from "react";

const Comments = ({}) => {
  return (
    <ul className="results__list">
      <li>
        <a className="results__link results__link--active" href={"#"}>
          <figure className="results__fig">
            <img src="" alt="" />
          </figure>
          <div className="results__data">
            <h4 className="results__name">hello</h4>
            <p className="results__author">world</p>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default Comments;
