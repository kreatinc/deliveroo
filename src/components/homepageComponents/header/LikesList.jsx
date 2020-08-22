import React, { useEffect } from "react";
import icons from "../../../assets/img/icons.svg";
import Like from "./Like";
import { useAuthenticated } from "customHooks";

import { getUser } from "utils/localStorageHelpers";

const Likes = ({
  likedProducts,
  receiveUser,
  getLikedProducts,
  fetchProduct,
  clearCommands,
}) => {
  const authenticated = useAuthenticated();
  useEffect(() => {
    if (!authenticated) {
      const user = getUser();
      if (user) {
        receiveUser({ data: user });
        getLikedProducts();
      }
    }
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
            likedProducts.map((product) => (
              <Like
                product={product.details}
                fetchProduct={fetchProduct}
                key={product.details.id}
                clearCommands={clearCommands}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Likes;
