import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Pages/Shared/Loading/Loading";

const PrivateRouter = ({children}) => {
const {user, loading} = UseAuth()

if(loading){
    return <Loading></Loading>
}
if(!user){
    return <Navigate to="/login"></Navigate>
}

    return children
};

export default PrivateRouter;