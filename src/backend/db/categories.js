import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: "f1",
    categoryName: "Men",
    categoryImage:"https://cdn.shopify.com/s/files/1/2219/4051/files/mens_banner_d378ca01-0c0f-44d9-b3fb-45bcd2680905_1024x1024_crop_center.jpg?v=1645085668",
    description:"this is about men"
  },
  {
    _id: uuid(),
    categoryName: "Women",
    categoryImage:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description:"this is about men"
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    categoryImage:"https://images.unsplash.com/photo-1511733897353-5b04f82435a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description:"this is about men"
 
  },
  {
    _id: uuid(),
    categoryName: "Home & Living",
    categoryImage:"https://images.unsplash.com/photo-1599643332904-ddc6060f3289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=943&q=80",
    description:"this is about men"
  },
  {
    _id: uuid(),
    categoryName: "Beauty",
    categoryImage:"https://static.toiimg.com/photo/msid-71335764/71335764.jpg?1609322",
    description:"this is about men"
  }
 
];
