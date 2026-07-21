import { use } from "react";
import { AuthContext } from "../AuthContext/Authcontext";

const UseAuth = () => {
const authInfo = use(AuthContext)

    return authInfo
};

export default UseAuth;