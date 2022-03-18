export const getBrand = (data, brand) => {

  let filteredBrand = [];
  
  if (brand.roadster === false && brand.nautica === false && brand.puma===false && brand.adidas===false && brand.hAndm===false && brand.colorbar===false && brand.klotthe===false && brand.talesAndStories===false && brand.dove===false) {
    return data;
  }
  if (brand.roadster) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "roadster"
    );
    filteredBrand.push(...newList);
  }
  if (brand.nautica) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "nautica"
    );
    filteredBrand.push(...newList);
  }
  if (brand.puma) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "puma"
    );
    filteredBrand.push(...newList);
  }
  if (brand.adidas) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "adidas"
    );
    filteredBrand.push(...newList);
  }
  if (brand.hAndm) {
    let newList = data.filter(
      (product) => product.brand === "H&M"
    );
    filteredBrand.push(...newList);
  }
  if (brand.colorbar) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "colorbar"
    );
    filteredBrand.push(...newList);
  }
  if (brand.klotthe) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "klotthe"
    );
    filteredBrand.push(...newList);
  }
  if (brand.talesAndStories) {
    let newList = data.filter(
      (product) => product.brand === "TALES & STORIES"
    );
    filteredBrand.push(...newList);
  }
  if (brand.dove) {
    let newList = data.filter(
      (product) => product.brand.toLowerCase() === "dove"
    );
    filteredBrand.push(...newList);
  }
  return filteredBrand;
};
