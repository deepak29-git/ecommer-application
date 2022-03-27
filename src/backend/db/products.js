import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brand: "Roadster",
    categoryName: "Men",
    title: "Pure Cotton T-shirt",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2019/9/10/4f24f563-c764-4f27-9fc5-9ad3dcf167621568108715062-Roadster-Men-White-Solid-Round-Neck-T-shirt-1641568108713591-1.jpg",
    price: 174,
    selling_price:500,
    discount:10,
    delivery_charges:70,
    description: "White solid T-shirt, has a round neck, short sleeves",
    inStock: false,
    fastDelivery: true,
    rating: 5,
  },
  {
    _id: uuid(),
    brand: "Nautica",
    categoryName: "Men",
    title: "Solid Polo Collar T-shirt",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11487338/2020/6/17/4d2f609d-4ea2-4d5e-a26a-80cd5eb9e4181592396326747-Nautica-Men-Tshirts-8971592396324879-1.jpg",
    price: 1559,
    selling_price:2000,
    discount:20,
    delivery_charges:50,
    description: "Black solid T-shirt, has a polo collar, and short sleeves",
    inStock: true,
    fastDelivery: true,
    rating: 5,
  },
  {
    _id: uuid(),
    brand: "Puma",
    categoryName: "Women",
    title: "Metallic Nights Biker Jacket",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16855258/2022/1/18/b48704d6-03c5-4dba-9321-854257d8c5b01642487415429Jackets1.jpg",
    price: 2474,
    description:
      "Black solid biker jacket, has a hooded, 2 pockets ,has a zip closure, long sleeves, straight hemline, cotton lining",
    availibility: "In Stock",
    selling_price:3000,
    discount:15,
    delivery_charges:45,
    sizeAndfit: "The model (height 6') is wearing a size XL",
    materialAndCare: "100% Cotton,Machine wash",
    inStock: true,
    fastDelivery: false,
    rating: 4,
  },
  {
    _id: uuid(),
    brand: "ADIDAS",
    categoryName: "Women",
    title: "Training or Gym Jacket",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14795298/2021/11/17/c09f76cc-a2b4-4a9e-9dfd-ac66fda13c1b1637121500273-ADIDAS-Women-Blue-Solid-Training-or-Gym-Sporty-Jacket-521163-1.jpg",
    price: 2144,
    selling_price:4000,
    discount:37,
    delivery_charges:150,
    description:
      "Blue solid sporty jacket, has a hooded, 2 pockets ,has a zip closure, long sleeves, straight hemline, without lining",
    inStock: false,
    fastDelivery: false,
    rating: 2,
  },

  {
    _id: uuid(),
    brand: "H&M",
    categoryName: "Kids",
    title: "Girls & White Dress",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17464686/2022/3/10/0bfc591f-51fb-4466-a026-2397ace568b01646916547848Patternedjerseydress1.jpg",
    price: 899,
    selling_price:1799,
    discount:40,
    delivery_charges:66,
    description:
      "Sleeveless dress in patterned cotton jersey with a gathered seam at the waist and flared skirt.",
    inStock: true,
    fastDelivery: false,
    rating: 3,
  },
  {
    _id: uuid(),
    brand: "Colorbar",
    categoryName: "Beauty",
    title: "Flawless Finish Primer",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13141054/2021/5/3/03431007-a3bf-4bb5-b170-9f9db1e037371620044306868-Flawless-Finish-Primer-4491620044306463-1.jpg",
    price: 374,
    description: "Colorbar Flawless Finish Primer",
    inStock: true,
    selling_price:500,
    discount:10,
    delivery_charges:20,
    fastDelivery: true,
    rating: 5,
  },
  {
    _id: uuid(),
    brand: "KLOTTHE",
    categoryName: "Home & Living",
    title: "210 TC Pillow Covers",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13183424/2021/11/12/1f0068aa-ab48-40ad-b510-c08fa21396cc1636714098568KLOTTHEPurpleGeometric210TCCotton1KingBedsheetwith2PillowCov1.jpg",
    price: 758,
    description: "Set content: 1 King bedsheet with 2 pillow covers",
    inStock: false,
    selling_price:1000,
    discount:60,
    delivery_charges:93,
    fastDelivery: true,
    rating: 1,
  },
  {
    _id: uuid(),
    brand: "TALES & STORIES",
    categoryName: "Kids",
    title: "Boys Slim Fit Jeans",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/6/5be52952-11ef-410b-aa71-46c3856ffd271599342283498-1.jpg",
    price: 714,
    selling_price:1599,
    discount:77,
    delivery_charges:70,
    description:
      "Blue light wash 5-pocket mid-rise jeans, clean look, light fade, has a button and zip closure, and waistband with belt loops",
    inStock: true,
    fastDelivery: false,
    rating: 3,
  },
  {
    _id: uuid(),
    brand: "Dove",
    categoryName: "Beauty",
    title: "Daily Shine Shampoo",
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1954377/2020/4/24/92f4ef04-0989-438e-945b-158a3fda5bc71587730058250-Dove-Unisex-Hair-Therapy-Daily-Shine-Shampoo-340-ml-92515877-1.jpg",
    price: 239,
    description: "Hair Therapy Daily Shine Shampoo",
    inStock: false,
    selling_price:699,
    discount:26,
    delivery_charges:50,
    fastDelivery: true,
    rating: 4,
  },
];
