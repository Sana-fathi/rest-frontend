import React from 'react'

const index = () => {
  return (
    <div className='h-auto bg-[#333]'>
        <div className='flex flex-col md:flex-row justify-center space-x-[150px] py-10 items-center px-10'>
            <div className='flex justify-center mb-7 lg:mb-0 '>
            <div className=''><img src={'./assets/delivery.png'} className='opacity-50'/>
                <p className='font-caveat font-bold text-xl  text-white text-center'>Delivery</p></div>
            </div>
            <div className='flex justify-center mb-7 lg:mb-0'>
            <div><img src={'./assets/restaurant.png'} className='opacity-50'/>
                <p className='font-caveat font-bold text-xl text-white text-center'>Take away</p></div>
            </div>
            <div className='flex justify-center mb-7 lg:mb-0'>
            <div><img src={'./assets/take-away (1).png'} className='opacity-50'/>
                <p className='font-caveat font-bold text-xl text-white text-center'>Dine in</p></div>
            </div>
        </div>
    </div>
  )
}

export default index