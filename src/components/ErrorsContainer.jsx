import React from "react";

const ErrorsContainer = ({ errors }) => {
  const keys = Object.keys(errors);
  return (
    <div className="errors__container">
      {errors &&
        keys.map((key, i) => (
          <li key={i}>
            The {key} is {errors[key]}
          </li>
        ))}
    </div>
  );
};

export default ErrorsContainer;
