import React from 'react'
import Layout from '../components/Layout'

privacy.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

function privacy() {
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
             <img src={'/assets/security.png'} className="ml-10 anima"/> 
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-bold mt-4 text-gray-700 text-3xl font-ubuntu">Privacy policies</h2>
            <div className="w-12 h-1 bg-amber-500 rounded mt-2 mb-4"></div>
            {/* <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p> */}
          </div>
        </div>

        <div className="w-full px-4">
        <div className="row">
                  <div className="col">
                    <h5 className='py-2 font-extrabold font-ubuntu text-gray-700'>Security</h5>
                    <p className='font-light font-ubuntu text-gray-500'>We value your trust in providing us with your Personal Information, thus we are striving to use commercially acceptable means of protecting it.</p>
                     </div>
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

export default privacy