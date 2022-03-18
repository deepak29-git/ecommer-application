
export const getPriceRange = (data, priceRange) => {
  if (priceRange) return [...data].filter((product) => product.price <= priceRange );
  else return data;
};
