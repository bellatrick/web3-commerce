import React from 'react';
import ProductGrid from './productcard';

const Products = () => {
  const featuredProducts = [
    { id: 1, name: 'Modern Chair', price: 199.99, imageUrl: '/images/img2.jpg' },
    { id: 2, name: 'Elegant Table', price: 299.99, imageUrl: '/images/img2.jpg' },
    { id: 3, name: 'Stylish Lamp', price: 89.99, imageUrl: '/images/img2.jpg' },
    { id: 4, name: 'Cozy Sofa', price: 599.99, imageUrl: '/images/img2.jpg' }
  ];
  return <div>
     <ProductGrid products={featuredProducts} />
  </div>;
};

export default Products;
