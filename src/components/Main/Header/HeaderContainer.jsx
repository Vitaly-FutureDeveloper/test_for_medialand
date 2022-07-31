import React from "react";
import {useSelector} from "react-redux";
import {getLogin, getStatus} from "../../../redux/authSelector";

import {Header} from "./Header";

export const HeaderContainer = () => {
	const authStatus = useSelector(getStatus);
	const authLogin = useSelector(getLogin);

	return <Header authStatus={authStatus} authLogin={authLogin} />;
};