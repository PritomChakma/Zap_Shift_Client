import img from "../../../assets/location-merchant.png";

const CustomerBanner = () => {
  return (
    <div className="hero bg-[#03373D] py-24 px-16 text-white my-10 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="max-w-sm" />
        <div>
          <h1 className="text-4xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6 text-[#DADADA]">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-2xl text-black bg-[#CAEB66]">Become a Merchant</button>
            <button className="px-4 py-2 border rounded-2xl text-[#CAEB66] hover:bg-[#CAEB66] hover:text-black">Earn with ZapShift Courier</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerBanner;
