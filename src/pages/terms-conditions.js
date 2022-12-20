import React from 'react'
import Layout from '../components/Layout'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

termsAndConditions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

function termsAndConditions
() {
  return (
    <div className=''>
    <section className="text-gray-600 body-font">
      <div className="container xl:m-10 flex flex-col">
        <div className="w-full">
          {/* <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
          </div> */}
          <div className="flex flex-col md:flex-row mt-10">
            <div className="sm:w-1/4 text-center sm:pr-8 sm:py-8">
              {/* <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            
              </div> */}
                 <img src={'/assets/file.png'} className="ml-10 anima"/> 
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-bold mt-4 text-gray-700 text-3xl font-ubuntu">Terms & Conditions</h2>
                <div className="w-12 h-1 bg-amber-500 rounded mt-2 mb-4"></div>
                {/* <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p> */}
              </div>
            </div>
    
            <div className="w-full px-4">
            <div className='py-12'>
          {/* Start: 1 Row 2 Columns */}
          <div className="container">
            <div className="row">
              <div className="pr-9">
                <div />
                <div className="row">
                  {/* <div className="col">
                    <h1 style={{marginBottom: '3%', color: 'var(--bs-danger)', fontFamily: 'Aclonica, sans-serif', textAlign: 'left'}}>Terms &amp; Conditions<br /></h1>
                  </div> */}
                </div>
                <div className="row">
                  <div className="">
                    <p className='font-light font-ubuntu text-gray-500'>We may update our Terms and Conditions from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>                                
                    
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h5 className='py-2 font-bold font-ubuntu text-gray-700'>Refund</h5>
                    <p className='font-light font-ubuntu text-gray-500'>Cancellation or repayment is not given once your order is confirmed. The only refund is allowable in the event of any of the following circumstances:</p>
                    <p className='font-light font-ubuntu text-gray-500'>Your order packaging has been tampered or damaged at the time of delivery; Cancel your order due to your delivery location following outside our designated delivery zones</p>  
                    <p className='font-light font-ubuntu text-gray-500'>Failure to contact you by phone or email at the time of confirming the order booking</p>
                    <p className='font-light font-ubuntu text-gray-500'>Cancelling the order at the time of confirmation due to unavailability of the items you ordered for at the time of booking.</p>
                    <p className='font-light font-ubuntu text-gray-500'>Our decision on refunds shall be at our sole discretion and shall be final and binding. In case of payment at the time of delivery, you will not be required to pay for:</p>
                    <p className='font-light font-ubuntu text-gray-500'>Orders where the packaging has been tampered or damaged by us; Wrong order being delivered; or</p>
                    <p className='font-light font-ubuntu text-gray-500'>Items missing from your order at the time of delivery.</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h5 className='py-2 font-bold font-ubuntu text-gray-700'>Grievance officer</h5>
                    <p className='font-light font-ubuntu text-gray-500'>In accordance with Information Technology Act, 2000 and rules made thereunder, the name and contact details of the Grievance Officer are provided below:</p>
                    <p className='font-light font-ubuntu text-gray-500'>Your order packaging has been tampered or damaged at the time of delivery; Cancel your order due to your delivery location following outside our designated delivery zones</p>  
                    <p className='font-light font-ubuntu text-gray-500'>Failure to contact you by phone or email at the time of confirming the order booking</p>
                    <p className='font-light font-ubuntu text-gray-500'>Cancelling the order at the time of confirmation due to unavailability of the items you ordered for at the time of booking.</p>
                    <p className='font-light font-ubuntu text-gray-500'>Our decision on refunds shall be at our sole discretion and shall be final and binding. In case of payment at the time of delivery, you will not be required to pay for:</p>
                    <p className='font-light font-ubuntu text-gray-500'>Orders where the packaging has been tampered or damaged by us; Wrong order being delivered; or</p>
                    <p className='font-light font-ubuntu text-gray-500'>Items missing from your order at the time of delivery.</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h5 className='py-2 font-bold font-ubuntu text-gray-700'>Security</h5>
                    <p className='font-light font-ubuntu text-gray-500'>We value your trust in providing us with your Personal Information, thus we are striving to use commercially acceptable means of protecting it.</p>
                     </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h5 className='py-2 font-bold font-ubuntu text-gray-700'>Contact Us</h5>
                    <p className='font-light font-ubuntu text-gray-500'>If you have any questions or suggestions about our Terms and conditions, do not hesitate to contact us.</p>
                    <p className='font-light font-ubuntu text-gray-500'>Address : Curry Magic - Indian food 15-1 Jln Riang, Singapore 358987</p>
                    <p className='font-light font-ubuntu text-gray-500'>Tel : +65 9856 0319</p>

                     </div>
                </div>

              </div>                   
            </div>
          </div>{/* End: 1 Row 2 Columns */}
        </div>
        </div>
    
    
            {/* <div className="sm:w-3/4 sm:pl-8 sm:py-8  border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
              <a className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
        </div>
  )
}

export default termsAndConditions
