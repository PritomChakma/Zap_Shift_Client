import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyParcel = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcel", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcel?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h1>Total Parcel: {parcels.length}</h1>
    </div>
  );
};

export default MyParcel;
