import img1 from "../../../assets/live-tracking.png";
import img3 from "../../../assets/safe-delivery.png";

const Ddelivery = () => {
  return (
    <div className="my-5 flex flex-col gap-7">
      {/* delivery    1 */}
      <div className="flex items-center gap-10 bg-gray-200 p-7 rounded-2xl">
        <div>
          <img src={img1} alt="" />
        </div>
        <div className="h-36 border-l-2 border-dashed border-gray-400"></div>
        <div>
          <h1 className="text-2xl font-bold text-[#03373D]">
            Live Parcel Tracking
          </h1>
          <p className="text-[#606060]">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>

      {/* delivery    2 */}
      <div className="flex items-center gap-10 bg-gray-200 p-7 rounded-2xl">
        <div>
          <img src={img3} alt="" />
        </div>
        <div className="h-36 border-l-2 border-dashed border-gray-400"></div>
        <div>
          <h1 className="text-2xl font-bold text-[#03373D]">
            100% Safe Delivery{" "}
          </h1>
          <p className="text-[#606060]">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>

      {/* delivery    3 */}
      <div className="flex items-center gap-10 bg-gray-200 p-7 rounded-2xl">
        <div>
          <img src={img1} alt="" />
        </div>
        <div className="h-36 border-l-2 border-dashed border-gray-400"></div>
        <div>
          <h1 className="text-2xl font-bold text-[#03373D]">
            24/7 Call Center Support{" "}
          </h1>
          <p className="text-[#606060]">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ddelivery;
