import React from "react";
import icons from "assets/img/icons.svg";
const Categories = () => {
  return (
    <div className="likes">
      <div className="likes__field">
        <svg className="likes__icon">
          <use href={icons + "#icon-circle-with-plus"}></use>
        </svg>
      </div>
      <div className="likes__panel">
        <div className="likes__list"></div>
      </div>
    </div>
  );
};

export default Categories;
