import React from 'react'
import Layout from '../components/Layout'

deals.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };

function deals(props) {
  return (
    <div className='h-72'>deals</div>
  )
}

export default deals;