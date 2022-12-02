import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function index(props) {

  const CustomDot = ({ onMove, index, onClick, active }) => {
  
    return (
      <li
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
      >
        {index + 1}
      </li>
    );
  };

  function Slide() { 
    return (
      <div className="">
        <div className=" bg-gray-dim rounded-lg lg:w-96 mx-10">
        <div  className="rounded-b-sm">
        <div>
            <img className="rounded-t-lg" src={"/assets/img4.jpeg"} />
          </div>
        </div>
        <div className="info flex justify-center flex-col py-2">
          <div className="px-5">
          <Link href={"/"}>ferg</Link>  
          </div>
          <div className="px-5">
          <Link href={"/"}>gfg</Link>
          </div>
    
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
    <div className="">
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
  itemClass="carousel-item-padding-40-px"
  customDot={<CustomDot />}
  renderDotsOutside={true}
>
  
  <div className="">{Slide()}</div>
  <div className="">{Slide()}</div>
  <div className="">{Slide()}</div>
  <div className="">{Slide()}</div>
 
  
</Carousel>  
   </div>
  )
}

export default index;