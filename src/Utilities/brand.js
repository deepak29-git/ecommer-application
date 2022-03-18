export const getBrand = (data, roadster, nautica,puma,adidas,hAndm,colorbar,klotthe,talesAndStories,dove) => {

  let filteredBrand = [];
  if (roadster === false && nautica === false) {
    return data;
  }
  if (roadster) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "roadster"
    );
    filteredBrand.push(...newList);
  }
  if (nautica) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "nautica"
    );
    filteredBrand.push(...newList);
  }
  if (puma) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "puma"
    );
    filteredBrand.push(...newList);
  }
  if (adidas) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "adidas"
    );
    filteredBrand.push(...newList);
  }
  if (hAndm) {
    let newList = data.filter(
      (product) => product.brand === "H&M"
    );
    filteredBrand.push(...newList);
  }
  if (colorbar) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "colorbar"
    );
    filteredBrand.push(...newList);
  }
  if (klotthe) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "klotthe"
    );
    filteredBrand.push(...newList);
  }
  if (talesAndStories) {
    let newList = data.filter(
      (product) => product.brand === "TALES & STORIES"
    );
    filteredBrand.push(...newList);
  }
  if (dove) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "dove"
    );
    filteredBrand.push(...newList);
  }
  return filteredBrand;
};
