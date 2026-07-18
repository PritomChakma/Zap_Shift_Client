import teeth from "../../../assets/teeth.png";

const serviceData = [
  {
    id: 1,
    title: "Express  & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off",
  },

  {
    id: 2,
    title: " Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },

  {
    id: 3,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support",
  },

  {
    id: 4,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },

  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },

  {
    id: 6,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants",
  },
];

const Services = () => {
  return (
    <div className="my-10 bg-[#03464D] rounded-4xl p-15">
      <div className="text-center w-6/12 mx-auto text-white ">
        <h1 className="text-4xl font-bold ">Our Services</h1>
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 text-center my-10">
        {serviceData.map((service) => (
          <div className="bg-white rounded-4xl p-5 hover:bg-[#CAEB66]" key={service.id}>
            <img className="mx-auto" src={teeth} alt="" />
            <h1 className="text-lg font-bold text-[#03373D] ">{service.title}</h1>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
