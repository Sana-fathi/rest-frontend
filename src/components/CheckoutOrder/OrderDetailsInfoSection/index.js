import React from 'react'

function index() {
  return (
    <div>
        <div className="card-details">
                  <h3 className="text-base font-bold text-gray-600 mb-2">ORDER&nbsp;SUMMARY</h3>
                  <div className="row">
    
                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                </div>
                
                      <div className="col-sm-6">
                        <div className="mb-3 font-semibold text-gray-700"><strong>Order Type</strong></div>
                      </div>

                      <div className="col-sm-6">
                        <div className="mb-3">
                            <span >
                            </span>                          
                          

                        </div>
                      </div>
                
                    
                    

           
                    <>
                    {/* <div className="col-sm-6">
                      <div className="mb-3 font-semibold text-gray-700"><strong>Order Time</strong></div>
                    </div> */}
                    <div className="col-sm-6">
                      <div className="mb-3"><span >
                         
                          </span>
                        <p ></p>
                        
                      </div>
                    </div>
                    </>
                    
                    
          

                        <>
                        <div className="col-sm-6">
                        <div className="mb-3"><strong>Delivery Location</strong></div>
                        </div>
                        <div className="col-sm-6">
                        <div className="mb-3 font-semibold text-gray-700"><span>Address</span>
                         <p className='text-sm font-normal'>Singapore</p>
                        </div>
                        </div>
                        </>
                    
                    
                  </div>
                </div>
    </div>
  )
}

export default index