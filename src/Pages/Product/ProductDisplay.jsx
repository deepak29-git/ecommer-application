export const ProductDisplay = ({product}) => {
  return (
    <main className="ecom-card card-content">
    
      <img src={product.image} alt={product.title} />
      <h3 className="card-title">{product.brand}</h3>
      <p>{product.title}</p>
      <p>Price:{product.price}</p>
      <p>Rating:{product.rating}</p>
    </main>
  );
};
