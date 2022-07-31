import React from "react";
import {Header} from "./Header";
import {useSelector} from "react-redux";
import {getLogin, getStatus} from "../../../redux/authSelector";

export const HeaderContainer = () => {
	const authStatus = useSelector(getStatus);
	const authLogin = useSelector(getLogin);

	return <Header authStatus={authStatus} authLogin={authLogin} />;
};