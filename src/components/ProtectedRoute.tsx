import { Navigate, Outlet } from "react-router-dom";
import { User } from "../models/user.model";

type Props = {
    user: User;
    children?: JSX.Element;
    redirectTo?: string;
}

const ProtectedRoute = (props: Props): JSX.Element => {
    if (props.user == null || Object.keys(props.user).length == 0) {
        return (
            <Navigate to={
                props.redirectTo == undefined ?
                    '/landing' : props.redirectTo
            } />
        );
    }

    return props.children === undefined ? <Outlet /> : props.children;
};

export default ProtectedRoute;