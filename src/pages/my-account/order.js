import React from 'react'
import Layout from '../../components/Layout'
import { User } from '../../components/Icons'
import { DashboardMenu } from '../../components';

order.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};


function order() {
  return (
    <div>
        <section>
        {/* Start: 1 Row 3 Columns */}
        <div className="container mt-16" >
        <div className='flex flex-col items-center justify-center mb-10 border-b-2 border-gray-300 xl:mx-10'>
    <div className='text-center rounded-full mb-2 bg-tbRed px-3 py-3 text-white'><User/></div>
    <h3 className='text-center font-bold font-worksans text-4xl mb-8'>My Account</h3>
    {/* <div className="mx-5 h-1 bg-gray-300 rounded mt-2 mb-4"></div> */}
      </div>
          <div className="flex flex-col md:flex-row space-x-3">
            
            {/* Start: category column */}
            <DashboardMenu page="profile"/>
            {/* End: category column */}
            
            {/* Start: menu column */}
            <div className="col-12 col-lg-9" >
              <div className='bg-green rounded md:w-72 lg:w-[600px] mx-5'>
                <h5 className="text-xl font-dmsans text-center uppercase text-white py-1 ">My Orders</h5>
              </div>
              <div className='container'>
             
              <nav className='float-right'>
                  <ul className="flex ">
                    <li ><a  className="page-link" href="" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                
                    <li ><a className="page-link" href="" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                  </ul>
                </nav>
              </div>
              <div />
            </div>{/* End: menu column */}
          </div>
        </div>{/* End: 1 Row 3 Columns */}
      </section>
    </div>
  )
}

export default order