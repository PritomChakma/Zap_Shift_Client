import Banner from "./Banner/Banner";
import CustomerBanner from "./CustomerBanner/CustomerBanner";
import CustomerSaying from "./CustomerSaying/CustomerSaying";
import Ddelivery from "./Delivery/Ddelivery";
import Question from "./Question/Question";
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
      <CustomerSaying></CustomerSaying>
      <Question></Question>
    </div>
  );
};

export default Home;
