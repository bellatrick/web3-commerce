//hero.js
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='relative h-[600px] bg-gray-100'>
      {/* Background Image */}
      <div className='absolute inset-0'>
      <Image
  src='/images/img1.jpg'
  alt='Modern Interior'
  width={1920}
  height={1080}
  className="w-full h-[600px] object-cover"
  quality={100}
/>
        <div className='absolute inset-0 bg-black opacity-40'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 h-full flex flex-col justify-center items-start max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4'>
          Modern Interior Design Studio
        </h1>
        <p className='text-xl sm:text-2xl text-white mb-8 max-w-2xl'>
          Transform your space with our expert designers and curated collection
        </p>
        <Link
          href='/shop'
          className='bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition duration-300'
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
