export const getCategory = (data, category) => {
  let filteredCategory = [];

  if (
    category.men === false &&
    category.women === false &&
    category.kids === false &&
    category.homeAndliving === false &&
    category.beauty === false
  ) {
    return data;
  }
  if (category.men) {
    let newList = data.filter(
      (product) => product.categoryName.toLowerCase() === "men"
    );
    filteredCategory.push(...newList);
  }
  if (category.women) {
    let newList = data.filter(
      (product) => product.categoryName.toLowerCase() === "women"
    );
    filteredCategory.push(...newList);
  }
  if (category.kids) {
    let newList = data.filter(
      (product) => product.categoryName.toLowerCase() === "kids"
    );
    filteredCategory.push(...newList);
  }
  if (category.homeAndliving) {
    let newList = data.filter(
      (product) => product.categoryName === "Home & Living"
    );
    filteredCategory.push(...newList);
  }
  if (category.beauty) {
    let newList = data.filter(
      (product) => product.categoryName.toLowerCase() === "beauty"
    );
    filteredCategory.push(...newList);
  }

  return filteredCategory;
};
