import React from 'react'

const index = () => {
  return (
    <div className='h-auto mb-32 '>
        <div className='grid grid-cols-1 lg:grid-cols-3 py-10 items-center px-10'>
            <div className='flex justify-center mb-7 lg:mb-0'>
            <div className=''><img src={'./assets/delivery-man.png'} className=''/>
                <p className='font-font-worksans font-bold text-xl text-center'>Delivery</p></div>
            </div>
            <div className='flex justify-center mb-7 lg:mb-0'>
            <div><img src={'./assets/take-away.png'} className=''/>
                <p className='font-font-worksans font-bold text-xl text-center'>Take away</p></div>
            </div>
            <div className='flex justify-center mb-7 lg:mb-0'>
            <div><img src={'./assets/tray.png'} className=''/>
                <p className='font-font-worksans font-bold text-xl text-center'>Dine in</p></div>
            </div>
        </div>
    </div>
  )
}

export default index