import React from "react";
import icons from "../../../assets/img/icons.svg";
import { useFormik } from "formik";
import ErrorsContainer from "components/ErrorsContainer";

let maxQuantity;
const Product = ({ clickHandler, product, setErrors }) => {
  maxQuantity = product.quantity;
  const formik = useFormik({
    initialValues: {
      unit: 1,
    },
    validate,
  });

  return (
    <>
      {Object.keys(formik.errors).length !== 0 && (
        <ErrorsContainer errors={formik.errors} />
      )}
      <li className="shopping__item">
        <div className="shopping__count">
          <input
            type="number"
            value={formik.values.unit}
            id="unit"
            name="unit"
            onChange={formik.handleChange}
            onClick={() =>
              Object.keys(formik.errors).length !== 0
                ? setErrors(true)
                : setErrors(false)
            }
            placeholder="1"
            max={product.quantity}
            min="1"
          />
          <p>unit</p>
        </div>
        <p className="shopping__description">{product.title}</p>
        <button
          className="shopping__delete btn-tiny"
          onClick={() => {
            clickHandler();
          }}
        >
          <svg>
            <use href={icons + "#icon-circle-with-cross"}></use>
          </svg>
        </button>
      </li>
    </>
  );
};

export default Product;

const validate = (values) => {
  const errors = {};
  if (values.unit < 0) {
    errors.unit = "bigger than 1";
  } else if (maxQuantity && values.unit > maxQuantity) {
    errors.unit = "more than the product quantity";
  }
  return errors;
};
