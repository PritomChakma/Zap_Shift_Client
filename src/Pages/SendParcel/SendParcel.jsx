import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const SendParcel = () => {
  const regionDist = useLoaderData();
  const regionDuplicate = regionDist.map((c) => c.region);
  const region = [...new Set(regionDuplicate)];
  console.log(region);

  const { register, handleSubmit } = useForm();

  const handleParcelSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-[#003B49] mb-2">Send A Parcel</h1>
      <p className="text-gray-500 mb-8">Enter your parcel details</p>

      <form onSubmit={handleSubmit(handleParcelSubmit)}>
        {/* Parcel Type */}
        <div className="flex gap-8 mb-8">
          <label className="label cursor-pointer gap-2">
            <input
              type="radio"
              name="parcelType"
              value="Document"
              defaultChecked
              {...register("parcelType")}
              className="radio radio-success radio-sm"
            />
            <span className="text-sm">Document</span>
          </label>

          <label className="label cursor-pointer gap-2">
            <input
              type="radio"
              name="parcelType"
              value="Not-Document"
              {...register("parcelType")}
              className="radio radio-sm"
            />
            <span className="text-sm">Not-Document</span>
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div>
            <label className="label font-medium">Parcel Name</label>
            <input
              type="text"
              placeholder="Parcel Name"
              {...register("parcelName")}
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          <div>
            <label className="label font-medium">Parcel Weight (KG)</label>
            <input
              type="number"
              placeholder="Parcel Weight (KG)"
              {...register("parcelWeight")}
              className="input input-bordered w-full rounded-xl"
            />
          </div>
        </div>

        {/* Sender & Receiver */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Sender */}
          <div>
            <h2 className="font-bold text-lg mb-5">Sender Details</h2>

            <div className="space-y-4">
              <div>
                <label className="label">Sender Name</label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  {...register("senderName")}
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              <div>
                <label className="label">Sender Email</label>
                <input
                  type="email"
                  placeholder="Sender Email"
                  {...register("senderEmail")}
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              <div>
                <label className="label">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("address")}
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              <div>
                <label className="label">Sender Phone No</label>
                <input
                  type="text"
                  placeholder="Sender Phone No"
                  {...register("senderPhoneNumber")}
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              <div>
                <label className="label">Your District</label>
                <select
                  className="select select-bordered w-full rounded-xl "
                  {...register("senderDistrict")}
                >
                  <option>Select your District</option>
                  {region.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">Pickup Instruction</label>
                <textarea
                  rows="4"
                  placeholder="Pickup Instruction"
                  className="textarea textarea-bordered w-full rounded-xl"
                  {...register("pickupInstruction")}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h2 className="font-bold text-lg mb-5">Receiver Details</h2>

            <div className="space-y-4">
              <div>
                <label className="label">Receiver Name</label>
                <input
                  type="text"
                  placeholder="Receiver Name"
                  {...register("receiverName")}
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              <div>
                <label className="label">Receiver Email</label>
                <input
                  type="email"
                  placeholder="Receiver Email"
                  {...register("receiverEmail")}
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              <div>
                <label className="label">Receiver Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full rounded-xl"
                  {...register("receiverAddress")}
                />
              </div>

              <div>
                <label className="label">Receiver Contact No</label>
                <input
                  type="text"
                  placeholder="Receiver Contact No"
                  className="input input-bordered w-full rounded-xl"
                  {...register("receiverPhoneNumber")}
                />
              </div>

              <div>
                <label className="label">Receiver District</label>
                <select
                  className="select select-bordered w-full rounded-xl"
                  {...register("receiverDistrict")}
                >
                  <option>Select your District</option>
                  {region.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">Delivery Instruction</label>
                <textarea
                  rows="4"
                  placeholder="Delivery Instruction"
                  className="textarea textarea-bordered w-full rounded-xl"
                  {...register("DeliveryInstruction")}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <p className="text-sm text-gray-500 mb-5">
            * Pickup Time 4pm-7pm Approx.
          </p>

          <button className="btn bg-lime-400 hover:bg-lime-500 text-black border-none px-8 rounded-xl">
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
