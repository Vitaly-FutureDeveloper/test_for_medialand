import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsAuth} from "../../redux/authSelector";


export const withAuthRedirect = (Component) => {

	return (props) => {
		const isAuth = useSelector(getIsAuth);

		if (!isAuth){
			return <Navigate to={"/auth"} />
		} else {
			return <Component {...props} />
		}
	}
};