const convertStringToArray = (element) => {
  if (element) {
    return Array.isArray(element)
      ? element
      : element.replace("[", "").replace("]", "").split(",");
  }
};

export default convertStringToArray;
