import { FaQuoteLeft, FaStar } from "react-icons/fa";
import img from "../../../assets/customer-top.png";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Excellent service! The delivery was fast, and the support team was incredibly helpful. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "A seamless experience from start to finish. The website is beautiful, responsive, and easy to use.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=24",
    review:
      "One of the best services I've used recently. Everything worked exactly as expected.",
    rating: 4,
  },
];

const CustomerSaying = () => {
  return (
    <div className="my-10">
      {/* header */}
      <div className="flex flex-col justify-center items-center w-7/12 mx-auto text-center">
        <img src={img} alt="" />
        <h1 className="text-3xl font-bold text-[#03373D] my-2">
          What our customers are sayings
        </h1>
        <p className="text-[#606060]">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      {/* Card Section */}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-3xl p-7 shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <FaQuoteLeft className="text-4xl text-blue-500 mb-5" />

            <p className="text-gray-600 leading-7 mb-6">"{review.review}"</p>

            <div className="flex gap-1 text-yellow-400 mb-6">
              {[...Array(review.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSaying;
