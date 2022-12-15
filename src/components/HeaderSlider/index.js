import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";



export default function Section1() {
  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });

  SwiperCore.use([Autoplay]); //autoplay works

  //   const bg = {
  //     background:"url('/images/banner.png') no-repeat",
  //     backgroundPosition:"right"
  //   }

  return (
    <>
      <section className="bg-[#333]">
        <div className="container">
          <Swiper
            cssMode={true}
            style={{
              "--swiper-navigation-color" : "#fff"
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            slidesPerView={1}
            loop={true}
            // autoplay={{
            //   delay: 5000,
            // }}
            // navigation={{
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            // }}
            pagination={{
              el: ".swiper-pagination",
              clickable: "true",
            }}
          >
            <SwiperSlide>{Slide()}</SwiperSlide>
            <SwiperSlide>{Slide()}</SwiperSlide>
            <SwiperSlide>{Slide()}</SwiperSlide>
            <SwiperSlide>{Slide()}</SwiperSlide>
          </Swiper>
          <div class="swiper-pagination"></div>
          {/* <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}
        </div>
      </section>
    </>
  );
}

function Slide() {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <Link href={"/"}>
            <img
              src={
                "https://t4.ftcdn.net/jpg/02/84/46/89/240_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg"
              }
              className="lg:h-[600px] w-full object-cover lg:object-contain"
            />
          </Link>
        </div>

        <div className=" flex justify-center flex-col items-center bg-black border-8 xl:border-[20px] border-dashed ">
       
          <div className="text-yellow text-4xl font-caveat">
            <Link href={"/"}>Best Way to Order Your Favourite Food!</Link>
          </div>
          <p className="text-gray-50/80 font-bold py-3 px-3 mx-3 text-center font-worksans ">
            Your favourite restaurants at your fingertips. Satisfy your cravings
            with our Island wide delivery. Go ahead, download for
            convenient ordering & tracking.
          </p>
          <div className="cat">
            {/* <Link href={"/"} ><button className="text-yellow border border-amber-400">order now</button></Link>
            <Link href={"/"}></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
