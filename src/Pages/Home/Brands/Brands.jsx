import * as MarqueeModule from "react-fast-marquee";
import adidas from "../../../assets/adidas.png";
import amazon from "../../../assets/amazon.png";
import casio from "../../../assets/casio.png";
import netflix from "../../../assets/netflix.png";
import nike from "../../../assets/nike.png";

const Marquee = MarqueeModule.default;

const Brands = () => {
  return (
    <Marquee speed={50} pauseOnHover={false}>
      <img src={casio} alt="casio" className="h-10 w-24 object-contain mx-8" />
      <img src={amazon} alt="amazon" className="h-10 w-24 object-contain mx-8" />
      <img src={adidas} alt="adidas" className="h-10 w-24 object-contain mx-8" />
      <img src={netflix} alt="netflix" className="h-10 w-24 object-contain mx-8" />
      <img src={nike} alt="nike" className="h-10 w-24 object-contain mx-8" />
    </Marquee>
  );
};

export default Brands;