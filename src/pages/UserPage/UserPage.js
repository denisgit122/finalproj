import {Navigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import {Users} from "../../components";

const UserPage = () => {
    const {isAuth} = useAuth()

    return isAuth ? (
        <div>
            <Users/>
        </div>
    ) : (
       <div>
           <Navigate to={'/login'}/>
       </div>

    );
};

export {UserPage};