import {Navigate} from "react-router-dom";

import {useAuth} from "../../hooks/useAuth";
import {AdminsPanel} from "../../components";

const AdminPanelPage = () => {
    const {isAuth} = useAuth()

    return isAuth ? (
        <div>
            <AdminsPanel/>
            {/*<Navigate to={'/adminPanel'}/>*/}
        </div>
    ) : (
        <div>
            <Navigate to={'/login'}/>
        </div>

    );
};

export {AdminPanelPage};