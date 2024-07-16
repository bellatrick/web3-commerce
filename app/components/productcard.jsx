import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => (
  <Link
    href={`/${product.id}`}
    className='bg-white rounded-lg shadow-md overflow-hidden'
  >
    <div className='relative w-full h-64'>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={300}
        height={300}
        className='w-full h-full object-cover'
      />
    </div>
    <div className='p-4'>
      <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
      <p className='text-gray-600 mb-2'>${product.price.toFixed(2)}</p>
      <button className='bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition duration-300'>
        Add to Cart
      </button>
    </div>
  </Link>
);

const ProductGrid = ({ products }) => {
  return (
    <section className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl text-teal-700 font-bold mb-8 text-center'>
          All Products
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
