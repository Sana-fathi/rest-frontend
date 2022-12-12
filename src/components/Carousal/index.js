import Link from "next/link";
// import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import './carousel.css'
// import {BsDot} from 'react-icons/bs'

function index(props) {
  

  function Slide() {
    return (
      <div className="h-96 xl:h-[380px] sm:h-72 w-auto">
        <div className="bg-gray-dim rounded-lg sm:w-48 xl:w-64 mx-10">
          <div className="rounded-b-sm">
            <div>
              <img className="rounded-t-lg" src={"/assets/img4.jpeg"} />
            </div>
          </div>
          <div className="info flex justify-center flex-col py-2">
            <div className="px-5 text-gray-800 font-bold font-dmsans mb-2">
              <Link href={"/"}>Biriyani</Link>
            </div>
            <div className="px-5 mb-2">
              <Link href={"/"}>$ 34</Link>
            </div>
            <button
              type="button"
              className="primary-button mx-4"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    );
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet2: {
      breakpoint: { max: 768 , min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="w-auto z-10">
      <Carousel
        swipeable={true}
        // draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={}
        // deviceType={props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item"
        // customDot={<CustomDot />}
        // renderDotsOutside={true}
        // customDot={<CustomDot />}
        // customRightArrow={<CustomRightArrow />}
        // customLeftArrow={<CustomLeftArrow />}
      >
        <div className="">{Slide()}</div>
        <div className="">{Slide()}</div>
        <div className="">{Slide()}</div>
        <div className="">{Slide()}</div>
        <div className="">{Slide()}</div>
      </Carousel>
    </div>
  );
}

export default index;