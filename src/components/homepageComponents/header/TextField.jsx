import React from "react";

const TextField = React.forwardRef(({ placeholder }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      className="search__field"
      id="search__field"
      placeholder={placeholder}
    />
  );
});

export default TextField;
