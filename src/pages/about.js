import Layout from '../components/Layout'

about.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };

function about(props) {
  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto flex flex-col">
    <div className='flex flex-col items-center justify-center'>
    <p className='font-caveat px-1 py-1 rounded-lg w-28 text-[#333] text-xl font-medium text-center'>About us</p>
    <h3 className='text-center font-extrabold font-worksans text-4xl mb-3'>Our Story</h3>
    <div className="w-12 h-1 bg-gray-300 rounded mt-2 mb-4"></div>
      </div>
      
    <div className="lg:w-4/6 mx-auto mt-3">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={"/assets/img1.jpeg"}/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          {/* <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div> */}
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg font-dmsans">Phoebe Caulfield</h2>
            <div className="w-12 h-1 bg-gray-300 rounded mt-2 mb-4"></div>
            <p className="text-base font-dmsans">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4 font-dmsans">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          <a class="text-gray-500 inline-flex items-center font-dmsans font-bold">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default about