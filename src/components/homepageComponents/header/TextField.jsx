import React from "react";

const TextField = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      className="search__field"
      id="search__field"
      placeholder="Search over 1,000,000 products..."
    />
  );
});

export default TextField;
