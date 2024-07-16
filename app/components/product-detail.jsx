'use client';

import { useState } from 'react';
import Image from 'next/image';

const SingleProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value)));
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex flex-col md:flex-row -mx-4'>
        {/* Product Image */}
        <div className='md:flex-1 px-4 mb-6 md:mb-0'>
          <div className='h-64 md:h-80 rounded-lg bg-gray-100 mb-4 relative'>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={640}
              height={640}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Product Details */}
        <div className='md:flex-1 px-4'>
          <h2 className='text-3xl text-teal-800 font-bold mb-2'>{product.name}</h2>
          <p className='text-gray-800 text-sm mb-4'>{product.category}</p>
          <div className='flex mb-4'>
            <div className='mr-4'>
              <span className='font-bold text-teal-600 text-2xl'>
                ${product.price.toFixed(2)}
              </span>
            </div>
            {product.oldPrice && (
              <div>
                <span className='line-through text-gray-700 text-xl'>
                  ${product.oldPrice.toFixed(2)}
                </span>
              </div>
            )}
          </div>

          <div className='mb-4'>
            <h3 className='text-xl text-teal-800 font-semibold mb-2'>Description</h3>
            <p className='text-gray-800 '>{product.description}</p>
          </div>

          {product.colors && (
            <div className='mb-4'>
              <h3 className='text-xl text-teal-800 font-semibold mb-2'>Color</h3>
              <div className='flex items-center'>
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className='w-8 h-8 rounded-full mr-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>
          )}

          <div className='mb-4'>
            <h3 className='text-xl text-teal-800 font-semibold mb-2'>Quantity</h3>
            <div className='flex items-center'>
              <input
                type='number'
                className='w-16 text-gray-800 border rounded-md p-2 mr-2'
                value={quantity}
                onChange={handleQuantityChange}
                placeholder='1'
                min='1'
              />
              <button className='bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
