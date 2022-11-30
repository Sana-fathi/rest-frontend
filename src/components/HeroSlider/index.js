import Link from 'next/link';
import Image from 'next/image';
import {OfferImages, PincodeInput}  from '..'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Autoplay} from 'swiper'

// Import Swiper styles
import 'swiper/css';

export default () => {
    SwiperCore.use([Autoplay])
  return (
    <Swiper
    //   spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2000
      }}
      loop={true}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
     
    </Swiper>
  );
};


function Slide() {
  return (
    <div className="grid lg:grid-cols-2 bg-black">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/assets/img1.jpeg"} width={600} height={600} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        {/* <div className="cat">
        <Link href={"/"}> frontend-developer</Link>
        <Link href={"/"}> - July 11, 2022</Link>  
        </div> */}
        {/* <PincodeInput/> */}
        <div className="title">
        <h3 className="font-caveat text-3xl text-yellow">Best Way to Order Your Favourite Food!</h3>
        </div>
        <p className="text-gray-500 py-3 font-bold text-gray-dim font-font-dmsans text-4xl">Your favourite restaurants at your fingertips.</p>
    {/* <OfferImages /> */}
      </div>
    </div>
  );
}