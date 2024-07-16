'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-teal-700 shadow-md'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-2xl font-bold text-white'>
          EthCommerce
        </Link>

        {/* Mobile menu button */}
        <button
          className='md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className='w-6 h-6 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-4'>
          <Link href='/connect' className='text-white hover:text-yellow-300'>
            Connect
          </Link>
          <Link href='/categories' className='text-white hover:text-yellow-300'>
            Categories
          </Link>
        </nav>

        {/* Search, Cart, and User icons */}
        <div className='hidden md:flex items-center space-x-4'>
          <input
            type='text'
            placeholder='Search'
            className='border text-gray-800 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white'
          />
          <Link href='/cart' className='text-white hover:text-white'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
          </Link>
          <Link href='/account' className='text-white hover:text-white'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden'>
          <nav className='px-2 pt-2 pb-4 space-y-1'>
            <Link
              href='/connect'
              className='block px-3 py-2 text-white hover:bg-white hover:text-teal-700 rounded-md'
            >
              Connect
            </Link>
            <Link
              href='/categories'
              className='block px-3 py-2 text-white hover:bg-white hover:text-teal-700 rounded-md'
            >
              Categories
            </Link>
          </nav>
          <div className='px-2 pt-2 pb-4'>
            <input
              type='text'
              placeholder='Search'
              className='w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white'
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
