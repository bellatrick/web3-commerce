import React from 'react';
import SingleProductPage from '../components/product-detail';

const Product = () => {
  const product = {
    id: 1,
    name: 'Modern Lounge Chair',
    category: 'Furniture',
    price: 299.99,
    oldPrice: 349.99,
    description:
      'A sleek and comfortable lounge chair perfect for any modern living space.',
    imageUrl: '/images/img1.jpg',
    colors: ['#000000', '#FFFFFF', '#964B00']
  };
  return (
    <div className='bg-white/90 min-h-screen'>
      <SingleProductPage product={product} />
    </div>
  );
};

export default Product;
