import { Link } from "react-router-dom";
import logo from "../../assets/Group.png";
import img1 from "../../assets/icons8-facebook-96.png"
import img2 from "../../assets/icons8-instagram-logo-94.png"
import img3 from "../../assets/icons8-linkedin-96.png"
import img4 from "../../assets/icons8-youtube-96.png"
const Footer = () => {
  return (
    <div className="bg-[#0B0B0B] text-white p-24">
      {/* logo */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-end">
          <img src={logo} alt="" />
          <h1 className="text-3xl font-bold">ZapShift</h1>
        </div>
        <div className="text-[#DADADA] text-center w-9/12 my-5">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-8 justify-center items-center my-5">
        <Link>Services</Link>
        <Link>Coverage</Link>
        <Link>About Us</Link>
        <Link>Pricing</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
      </div>

      {/* icons */}

      <div className="flex justify-center items-center gap-5">
       <img className="h-12 w-12" src={img1} alt="" />
       <img className="h-12 w-12"  src={img3} alt="" />
       <img className="h-12 w-12"  src={img4} alt="" />
       <img className="h-12 w-12"  src={img2} alt="" />
      </div>
    </div>
  );
};

export default Footer;
