import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {BsCartPlus} from 'react-icons/bs'
const index = ({product}) => {
  return (
    <div className='bg-white shadow rounded-lg'>
        <Link href={`/menu`}>
            <Image 
            src={product.image}
            alt={product.name}
            className="rounded-t-lg object-cover w-full"
            width={300}
            height={300}
            />
        </Link>

        <div className='flex flex-col justify-center px-4 py-4 m-2'>
            <div className='flex flex-row justify-between'>
            <Link href={`/menu`}>
                <h2 className='text-lg font-bold text-gray-dark font-dmsans mb-1'>{product.name}</h2>
            </Link>
            <Image 
            src={product.food_category}
            width={300}
            height={300}
            className="h-5 w-5"
            />
            </div>
          
            <p className='text-gray-dark font-bold'>$ {product.price}</p>
            <button
           className='border-t my-2 rounded ease-in-out duration-300   focus-within:bg-orange  bg-[#333] font-dmsans  inline-flex justify-center items-center' 
           type='button'
             >
              <p className='px-2 py-2 text-white font-ubuntu '>Add to cart</p><BsCartPlus stroke={3} size={20} className="text-red-400 font-bold"/>
            </button>
        </div>
    </div>
  )
}

export default index;