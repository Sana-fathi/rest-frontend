import {Layout , HeroSlider, Cards,Carousal,About, HeaderSlider,DeliveryMethod}  from '../components'


Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Home(props) {
  return (
    <>    
{/* <HeroSlider/> */}
<HeaderSlider/>
<DeliveryMethod />


{/* menu carousel starts */}
<div className='mt-[-140px] h-auto lg:px-20 xl:px-32 py-10 lg:py-32 px-2 bg-black '>
  <div className='pl-10 xl:pl-5 mb-10'>
  <a className="font-medium title-font w-32 text-gray-900 bg-tbRed px-2 py-1 text-center text-white rounded">Special</a>
    <h3 className='text-3xl md:text-4xl xl:text-5xl font-bold mt-3 font-font-worksans text-white'>Today's Special</h3>
    </div>
<Carousal/>
</div>
{/* menu carousel ends */}

<Cards/>

<About/>
  </>
  );
}
