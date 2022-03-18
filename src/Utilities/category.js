export const getCategory = (data, category) => {
  if (category === "men")
    return [...data].filter((product) => product.categoryName.toLowerCase()==="men");
  else if (category === "women")
    return [...data].filter((product) => product.categoryName.toLowerCase()==="women");
  else if (category === "kids")
    return [...data].filter((product) => product.categoryName.toLowerCase()==="kids");
  else if (category === "home&living")
    return [...data].filter((product) => product.categoryName.toLowerCase()==="home & living");
  else if (category === "beauty")
    return [...data].filter((product) => product.categoryName.toLowerCase()==="beauty");
  else return [...data];
};
