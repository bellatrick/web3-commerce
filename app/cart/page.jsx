"use client"
//cart/page.js
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => (
  <div className="flex items-center hover:bg-teal-600 -mx-8 px-6 py-5">
    <div className="flex w-2/5">
      <div className="w-20">
        <Image src={item.image} alt={item.name} width={80} height={80} />
      </div>
      <div className="flex flex-col justify-between ml-4 flex-grow">
        <span className="font-bold text-sm">{item.name}</span>
        <span className="text-teal-100 text-xs">{item.category}</span>
        <button onClick={() => removeItem(item.id)} className="font-semibold hover:text-red-300 text-red-600 text-xs">Remove</button>
      </div>
    </div>
    <div className="flex justify-center w-1/5">
      <input
        className="mx-2 border text-center w-12"
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
      />
    </div>
    <span className="text-center w-1/5 font-semibold text-sm">${item.price.toFixed(2)}</span>
    <span className="text-center w-1/5 font-semibold text-sm">${(item.price * item.quantity).toFixed(2)}</span>
  </div>
);

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Modern Chair", category: "Furniture", price: 199.99, quantity: 1, image: "/images/img1.jpg" },
    { id: 2, name: "Elegant Table", category: "Furniture", price: 299.99, quantity: 2, image: "/images/img1.jpg" },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-10 bg-white/90">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-teal-700 px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-100 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center text-gray-100 text-xs uppercase w-1/5">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-100 text-xs uppercase w-1/5">Price</h3>
            <h3 className="font-semibold text-center text-gray-100 text-xs uppercase w-1/5">Total</h3>
          </div>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
          <Link href="/shop" className="flex font-semibold text-teal-100 text-sm mt-10">
            <svg className="fill-current mr-2 text-teal-100 w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10 bg-gray-50">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
            <span className="font-semibold text-sm">${total.toFixed(2)}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${(total + 10).toFixed(2)}</span>
            </div>
            <button className="bg-teal-600 font-semibold hover:bg-teal-700 py-3 text-sm text-white uppercase w-full">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;