export const ProductDisplay = ({product}) => {
  return (
    <main className="ecom-card card-content">
    
      <img src={product.image} alt={product.title} />
      <h3 className="card-title">{product.brand}</h3>
      <p>{product.title}</p>
      <p>{product.categoryName}</p>
      <p>Price:{product.price}</p>
      {product.inStock ? <div>In Stock</div>: <div>Out of Stock</div>}
      {product.fastDelivery ? <div>Fast Delivery</div>: <div>5 Days Minimum</div>}
      <p>Rating:{product.rating}</p>
    </main>
  );
};
