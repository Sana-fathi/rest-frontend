import React from 'react'

function index() {
  return (
    <section className="text-gray-600 body-font lg:px-20">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col items-center mb-10 md:mb-20">
      <a className="font-medium title-font mb-4 w-32 text-gray-900 bg-tbRed px-2 py-1 text-center text-white rounded">Categories</a>
      <h3 className="sm:text-4xl text-2xl leading-relaxed font-worksans font-bold">Our Categories</h3>
    </div>
    <div className="flex flex-wrap -m-4 text-center px-3"> 
      <div className="p-4 xl:w-1/6 lg:w-1/3 md:w-1/2 w-full">
        <div className="bg-gray-dim px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          {/* <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2> */}
          <p className="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div className="p-4 xl:w-1/6 lg:w-1/3 md:w-1/2 w-full">
        <div className="bg-gray-dim px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          {/* <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2> */}
          <p className="leading-relaxed">Users</p>
        </div>
      </div>
      <div className="p-4 xl:w-1/6 lg:w-1/3 md:w-1/2 w-full">
        <div className="bg-gray-dim px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          {/* <h2 className="title-font font-medium text-3xl text-gray-900">74</h2> */}
          <p className="leading-relaxed">Files</p>
        </div>
      </div>
      <div className="p-4 xl:w-1/6 lg:w-1/3 md:w-1/2 w-full">
        <div className="bg-gray-dim px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          {/* <h2 className="title-font font-medium text-3xl text-gray-900">46</h2> */}
          <p className="leading-relaxed">Places</p>
        </div>
      </div>
      <div className="p-4 xl:w-1/6 lg:w-1/3 md:w-1/2 w-full">
        <div className="bg-gray-dim px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          {/* <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2> */}
          <p className="leading-relaxed">Users</p>
        </div>
      </div>
      <div className="p-4 xl:w-1/6 lg:w-1/3 md:w-1/2 w-full">
        <div className="bg-gray-dim px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          {/* <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2> */}
          <p className="leading-relaxed">Users</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default index