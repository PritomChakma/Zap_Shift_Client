import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/img1.png";
import banner2 from "../../../assets/img2.png";
import banner3 from "../../../assets/img3.png";

const Banner = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img src={banner1} alt="Slide 1" className=" object-cover" />
        </div>"

        <div>
          <img src={banner2} alt="Slide 2" className=" object-cover" />
        </div>

        <div>
          <img src={banner3} alt="Slide 3" className=" object-cover" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
