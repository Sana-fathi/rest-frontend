import React from 'react'
import {Layout, ProductItem, Category} from '../components'
import data from '../utils/data';


menu.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };

function menu(props) {
  return (
    <div className='mt-10 '>
    <div className='flex flex-col items-center justify-center border-b-2 border-gray-300 xl:mx-4'>
    <p className='bg-tbRed px-1 py-1 rounded-lg w-28 text-white font-medium text-center mb-4'>Menu</p>
    <h3 className='text-center font-extrabold font-font-worksans text-4xl mb-3'>Order Now</h3>
    {/* <div className="mx-5 h-1 bg-gray-300 rounded mt-2 mb-4"></div> */}
      </div>

    <div className='flex flex-col md:flex-row  px-2 m-8'>
      
      <div>
      <Category />
      </div>

  {/* <div className='h-96 w-72'></div> */}
   <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 '>
   {data.product.map((product) => (
    <ProductItem product={product} key={product.id}></ProductItem>
  ))}
   </div>
    </div>
   </div>
  )
}

export default menu;