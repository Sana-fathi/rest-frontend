import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const index = ({product}) => {
  return (
    <div className='card'>
        <Link href={`/menu`}>
            <Image 
            src={product.image}
            alt={product.name}
            className="rounded-t-lg object-cover w-full"
            width={300}
            height={300}
            />
        </Link>

        <div className='flex flex-col  justify-center px-4 w-auto xl:w-72'>
            <Link href={`/menu`}>
                <h2 className='text-lg font-bold text-gray-dark font-dmsans mb-1'>{product.name}</h2>
            </Link>
            <p className='mb-2 text-gray-dark font-bold'>{product.price}</p>
            <button
             className='primary-button mb-2' 
             type='button'
             >
                ADD TO CART
            </button>
        </div>
    </div>
  )
}

export default index;