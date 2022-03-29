import { Response } from "miragejs";

/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/categories
 * */

export const getAllCategoriesHandler = function () {
  try {
    return new Response(200, {}, { categories: this.db.categories });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/user/category/:categoryId
 * */

export const getCategoryHandler = function (schema, request) {
  const categoryName = request.params.categoryId;

  // const searchQuery=new RegExp(categoryName,"i")
  try {
    const category = this.db.products;
    const products=category.filter(men=>men.categoryName==categoryName)
    return new Response(200, {}, { products });
  } catch (error) {
    new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
