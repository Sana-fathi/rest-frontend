import React from 'react'
import Layout from '../components/Layout'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

faqs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

function faqs() {
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
             <img src={'/assets/faq.png'} className="ml-10 anima"/> 
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-bold mt-4 text-gray-700 text-3xl font-ubuntu">Faqs</h2>
            <div className="w-12 h-1 bg-amber-500 rounded mt-2 mb-4"></div>
            {/* <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p> */}
          </div>
        </div>

        <div className="w-full px-4">
      <div className="rounded-2xl bg-[#f2f1ed]/20 p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full shadow-lg justify-between  bg-white px-4 py-[25px] text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring ">
                <span>How can I place my order?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-amber-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              You can place an order via our website www.thecurrymagic.com or making a call at +65 9856 0319.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full shadow-lg justify-between  bg-white px-4 py-[25px] text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring ">
                <span>How do I know if my order is processed?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-amber-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Upon confirming your order, you will receive an autoreply e-mail and our an order confirmation mail will be sent thereafter.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full shadow-lg justify-between  bg-white px-4 py-[25px] text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring ">
                <span>How can I make payment?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-amber-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              We normally accept Card or PayNow facilities.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full shadow-lg justify-between  bg-white px-4 py-[25px] text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring ">
                <span>Can I cancel my order after payment has been made?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-amber-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Yes, you can cancel your order however you will have to pay a cancellation fee.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full shadow-lg justify-between  bg-white px-4 py-[25px] text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring ">
                <span>Can I make any last-minute changes to my order?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-amber-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Please note that to make any sort of changes, it must be done at least 1 working day before the event date.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full shadow-lg justify-between  bg-white px-4 py-[25px] text-left text-sm font-medium text-gray-700 focus:outline-none focus-visible:ring ">
                <span>Will there be any additional charges if I need to make a last-minute cancellation of my order?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-amber-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Please note that 50% of the total bill will be refunded if the order is cancelled 1 working day before the event date. If the order is cancelled on the event date, no refund will be made.              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
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

export default faqs