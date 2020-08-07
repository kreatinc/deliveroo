import React, { useEffect } from "react";
import icons from "../../../assets/img/icons.svg";
import Like from "./Like";

const Likes = ({ likedProducts, getLikedProducts, fetchProduct }) => {
  // const authenticated = useAuthenticated();
  useEffect(() => {
    getLikedProducts();
  }, []);

  return (
    <div className="likes">
      <div className="likes__field">
        <svg className="likes__icon">
          <use href={icons + "#icon-heart"}></use>
        </svg>
      </div>
      <div className="likes__panel">
        <ul className="likes__list">
          {likedProducts &&
            likedProducts.map((item) => (
              <Like
                item={item.details}
                fetchProduct={fetchProduct}
                key={item.details.id}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Likes;
