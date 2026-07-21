import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Pages/Shared/Loading/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate state={{ from: location }} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRouter;
