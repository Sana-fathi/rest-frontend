import React from 'react'
import {Layout, ProductItem} from '../components'
import data from '../utils/data';


menu.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };

function menu(props) {
  return (
    <div className= 'px-4 m-8'>
    
    {/* <div className='h-96 w-72'></div> */}
   <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 '>
   {data.product.map((product) => (
    <ProductItem product={product} key={product.id}></ProductItem>
  ))}
   </div>
    </div>
  )
}

export default menu;