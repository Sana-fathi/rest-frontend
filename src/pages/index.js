import {Layout , HeroSlider, Cards,Carousal,About}  from '../components'


Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Home(props) {
  return (
    <>    
<HeroSlider/>
<Cards/>

{/* menu carousel starts */}
<div className='h-[550px] py-20 px-10 bg-black '>
  <div className='pl-10 mb-10'>
  <a className="font-medium title-font w-32 text-gray-900 bg-tbRed px-2 py-1 text-center text-white rounded">Special</a>
    <h3 className='text-3xl font-bold mt-3 font-font-worksans text-white'>Today's Special</h3>
    </div>
<Carousal/>
</div>
{/* menu carousel ends */}

<About/>
  </>
  );
}
