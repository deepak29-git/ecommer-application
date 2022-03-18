import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    brand:"Roadster",
    categoryName:"Men",
    title: "Pure Cotton T-shirt",
    image:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2019/9/10/4f24f563-c764-4f27-9fc5-9ad3dcf167621568108715062-Roadster-Men-White-Solid-Round-Neck-T-shirt-1641568108713591-1.jpg",
    price: 174,
    inStock:false,
    fastDelivery:true,
    rating: 5
  },
  {
    id: uuid(),
    brand:"Nautica",
    categoryName:"Men",
    title: "Solid Polo Collar T-shirt",
    image:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11487338/2020/6/17/4d2f609d-4ea2-4d5e-a26a-80cd5eb9e4181592396326747-Nautica-Men-Tshirts-8971592396324879-1.jpg",
    price: 1559,
    inStock:true,
    fastDelivery:true,
    rating: 5
  },
  {
    id: uuid(),
    brand:"Puma",
    categoryName:"Women",
    title: "Metallic Nights Biker Jacket",
    image:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16855258/2022/1/18/b48704d6-03c5-4dba-9321-854257d8c5b01642487415429Jackets1.jpg",
    price: 2474,
    inStock:true,
    fastDelivery:false,
    rating: 4
  },
  {
    id: uuid(),
    brand:"ADIDAS",
    categoryName:"Women",
    title: "Training or Gym Sporty Jacket",
    image:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14795298/2021/11/17/c09f76cc-a2b4-4a9e-9dfd-ac66fda13c1b1637121500273-ADIDAS-Women-Blue-Solid-Training-or-Gym-Sporty-Jacket-521163-1.jpg",
    price: 2144,
    inStock:false,
    fastDelivery:false,
    rating: 2
  },

  {
    id: uuid(),
    brand:"H&M",
    categoryName:"Kids",
    title: "3-pack Skinny Fit Jeans",
    image:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16591246/2021/12/23/5f92ab9d-4c1c-4ffd-a5fd-6a994fa7052e16402325488993-packComfortStretchSkinnyFitJeans1.jpg",
    price: 899,
    inStock:true,
    fastDelivery:false,
    rating: 3
  },
  {
    id: uuid(),
  brand:"Colorbar",
  categoryName:"Beauty",
  title: "Flawless Finish Primer",
  image:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13141054/2021/5/3/03431007-a3bf-4bb5-b170-9f9db1e037371620044306868-Flawless-Finish-Primer-4491620044306463-1.jpg",
  price: 374,
  inStock:true,
  fastDelivery:true,
    rating: 5
  },
  {
    id: uuid(),
    brand:"KLOTTHE",
    categoryName:"Home & Living",
    title: "210 TC Pillow Covers",
    image:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13183424/2021/11/12/1f0068aa-ab48-40ad-b510-c08fa21396cc1636714098568KLOTTHEPurpleGeometric210TCCotton1KingBedsheetwith2PillowCov1.jpg",
    price: 758,
    inStock:false,
    fastDelivery:true,
    rating: 1
  },
  {
    id: uuid(),
    brand:"TALES & STORIES",
    categoryName:"Kids",
    title: "Boys Slim Fit Jeans",
    image:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/6/5be52952-11ef-410b-aa71-46c3856ffd271599342283498-1.jpg",
    price: 714,
    inStock:true,
    fastDelivery:false,
    rating: 3
  },
  {
    id: uuid(),
    brand:"Dove",
    categoryName:"Beauty",
    title: "Daily Shine Shampoo",
    image:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1954377/2020/4/24/92f4ef04-0989-438e-945b-158a3fda5bc71587730058250-Dove-Unisex-Hair-Therapy-Daily-Shine-Shampoo-340-ml-92515877-1.jpg",
    price: 239,
    inStock:false,
    fastDelivery:true,
    rating: 4
  }

];
