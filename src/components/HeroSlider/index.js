import Link from 'next/link';
import Image from 'next/image';
import {OfferImages, PincodeInput}  from '..'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles


export default () => {
    SwiperCore.use([Autoplay])
  return (
    <Swiper
      // spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 5000
      }}
      loop={true}
      navigation = {true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      centeredSlides={true}
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
    <div className="grid lg:grid-cols-2 bg-black ">
      <div className="image">
        <Link href={"/"}>
          <img src={"/assets/img1.jpeg"} className="h-[800px]" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        {/* <div className="cat">
        <Link href={"/"}> frontend-developer</Link>
        <Link href={"/"}> - July 11, 2022</Link>  
        </div> */}
        {/* <PincodeInput/> */}
        <div className="container">
        <h3 className="font-caveat text-3xl text-yellow">Best Way to Order Your Favourite Food!</h3>
        </div>
        <p className="text-gray-500 py-3 font-bold font-dmsans text-4xl">Your favourite restaurants at your fingertips.</p>
    {/* <OfferImages /> */}
      </div>
    </div>
  );
}