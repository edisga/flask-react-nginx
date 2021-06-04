import React from 'react';
const List = (props) => {
  const { products } = props;
  if (!products || products.length === 0) return <p>No products...</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Products</h2>
      {products.map((product) => {
        return (
          <li key={product.id} className='list'>
            <span className='product-text'>{product.title} </span>
            <span className='product-description'>${product.price}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;