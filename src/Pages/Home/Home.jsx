import Banner from "./Banner/Banner";
import CustomerBanner from "./CustomerBanner/CustomerBanner";
import Ddelivery from "./Delivery/Ddelivery";
// import Brands from "./Brands/Brands";
import Services from "./Services/Services";
import Works from "./Works/Works";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      {/* <Brands></Brands> */}
      <Ddelivery></Ddelivery>
      <CustomerBanner></CustomerBanner>
    </div>
  );
};

export default Home;
