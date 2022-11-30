import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const index = ({product}) => {
  return (
    <div className='card'>
        <Link href={`/product/${product.slug}`}>
            <Image src={product.image}
            alt={product.name}
            className="rounded-t"
            width={400}
            height={200}
            />
        </Link>

        <div className='flex flex-col  justify-center p-4'>
            <Link href={`/product/${product.slug}`}>
                <h2 className='text-lg font-bold text-gray-dark font-font-dmsans mb-1'>{product.name}</h2>
            </Link>
            <p className='mb-2 text-gray-dark font-bold'>{product.price}</p>
            <button className='primary-button' type='button'>
                ADD TO CART
            </button>
        </div>
    </div>
  )
}

export default index;