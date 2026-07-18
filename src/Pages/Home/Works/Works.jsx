import bike from "../../../assets/bike.png";
const Works = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold text-[#03373D] my-5">How it Work</h1>

      <div className="grid grid-cols-4 gap-4">
        {/* div 1 */}
        <div className=" bg-gray-200 p-7 rounded-2xl hover:bg-[#CAEB66]">
          <img className="h-14" src={bike} alt="" />
          <h1 className="text-[#03373D] text-xl font-bold my-2">
            Booking Pick & Drop
          </h1>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        {/* div 2 */}
        <div className="bg-gray-200 p-7 rounded-2xl hover:bg-[#CAEB66]">
          <img className="h-14" src={bike} alt="" />
          <h1 className="text-[#03373D] text-xl font-bold my-2">
            Cash On Delivery
          </h1>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        {/* div 3 */}
        <div className="bg-gray-200 p-7 rounded-2xl hover:bg-[#CAEB66]">
          <img className="h-14" src={bike} alt="" />
          <h1 className="text-[#03373D] text-xl font-bold my-2">
            Delivery Hub
          </h1>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        {/* div 4 */}
        <div className="bg-gray-200 p-7 rounded-2xl hover:bg-[#CAEB66]
        ">
          <img className="h-14" src={bike} alt="" />
          <h1 className="text-[#03373D] text-xl font-bold my-2">
            Booking SME & Corporate
          </h1>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
