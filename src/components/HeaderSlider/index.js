import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



export default function SliderComponent() {

    return (
        <>
            <Swiper
            breakpoints={{
                576: {
                  minWidth: 576,
                  slidesPerView: 1,
                  height: "auto",
                 
                },
                1024: {
                  minWidth: 1024,
                  slidesPerView: 1,
                 
                },
              }}
                // spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="w-full h-screen object-cover" src="https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-screen object-cover" src="https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-screen object-cover" src="https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-screen object-cover" src="https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg"/>
                </SwiperSlide>
                </Swiper>
        </>
    );
}