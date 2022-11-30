import React from 'react'
import Image from 'next/image';
import {Layout,MenuCard} from '../components'
import cardList from './data'


menu.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };

function menu(props) {
  return (
    <div className='flex'>
    
    {/* <div className='h-96 w-72'></div> */}
   <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 pl-20'>
   {cardList.map((card,index) => (
      <div key={index} className=" h-auto w-48 bg-gray-dim rounded-lg my-2">
      <div className=''>
      <Image className='rounded-t-lg' src={card.img} alt="" width={200} height={200}/>
      </div>
      <div className='px-3 py-3'>
      <h3>{card.name}</h3>
        <p>{card.price}</p>
      </div>
      </div>
    ))}
   </div>
    </div>
  )
}

export default menu;