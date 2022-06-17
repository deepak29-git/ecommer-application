export const getFilteredCategory = (data,categoryName) => {
    console.log(categoryName,"ss")
    if(categoryName){
        const filteredCategory = data.filter(
          (item) => item.categoryName === [categoryName]
          );
          return filteredCategory;
    }
    return data
};
