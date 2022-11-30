import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function index(props) {

  function Slide() { 
    return (
      <div className="grid md:grid-cols px-10 ">
        <div className="bg-gray-dim rounded-lg">
        <div  className="rounded-b-sm">
        <div>
            <img className="rounded-t-lg" src={"/assets/img1.jpeg"} width={600} height={600} />
          </div>
        </div>
        <div className="info flex justify-center flex-col py-2">
          <div className="px-5">
          <Link href={"/"}>ferg</Link>  
          </div>
          <div className="px-5">
          <Link href={"/"}>gfg</Link>
          </div>
          {/* <p className="text-gray-500 py-3">Your favourite restaurants at your fingertips. Satisfy your cravings with our Island wide delivery. Go ahead, download Zippy SG app for convenient ordering & tracking.</p> */}
    
        </div>
        </div>
      </div>
    );
  }
  function Slide1() { 
    return (
      <div className="grid md:grid-cols px-10 ">
        <div className="bg-gray-dim rounded-lg">
        <div className="">
          <div>
            <img className="rounded-t-lg" src={"/assets/img2.jpeg"} width={600} height={600} />
          </div>
        </div>
        <div className="info flex justify-center flex-col py-2">
          <div className="px-5">
          <Link href={"/"}>ferg</Link>
          <Link href={"/"}>gfgg</Link>  
          </div>
          <div className="px-5">
          <Link href={"/"}>gfg</Link>
          </div>
          {/* <p className="text-gray-500 py-3">Your favourite restaurants at your fingertips. Satisfy your cravings with our Island wide delivery. Go ahead, download Zippy SG app for convenient ordering & tracking.</p> */}
    
        </div>
        </div>
      </div>
    );
  }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }; 
  return (
    <div className="z-0">
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div>{Slide()}</div>
  <div>{Slide1()}</div>
  <div>{Slide()}</div>
  <div>{Slide()}</div>
</Carousel>  
    </div>
  )
}

export default index;