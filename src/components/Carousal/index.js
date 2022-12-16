import Link from "next/link";
import Image from "next/image";
// import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {BsCartPlus} from 'react-icons/bs'

// import './carousel.css'
// import {BsDot} from 'react-icons/bs'

function index(props) {
  

  function Slide() {
    return (
      <div className='bg-white shadow rounded-lg lg:w-48 xl:w-64 mx-10'>
      <Link href={`/menu`}>
          <Image 
          src={"/assets/naan.jpeg"}
          // alt={product.name}
          className="rounded-t-lg object-cover w-full"
          width={300}
          height={300}
          />
      </Link>

      <div className='flex flex-col justify-center px-4 py-4 m-2'>
          <div className='flex flex-row justify-between'>
          <Link href={`/menu`}>
              <h2 className='text-lg font-bold text-gray-dark font-dmsans mb-1'>North Indian Thali</h2>
          </Link>
          <Image 
          src={"/assets/meat.png"}
          width={300}
          height={300}
          className="h-5 w-5"
          />
          </div>
        
          <p className='text-gray-dark font-bold'>$ 45</p>
          <button
           className='border-t my-2  rounded ease-in-out duration-300   focus-within:bg-orange  bg-[#333] font-dmsans  inline-flex justify-center items-center' 
           type='button'
           >
              <p className='px-2 py-2 text-white font-ubuntu '>Add to cart</p><BsCartPlus stroke={3} size={20} className="text-red-400 font-bold"/>
          </button>
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
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
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