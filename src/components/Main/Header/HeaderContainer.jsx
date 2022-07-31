import React from "react";
import {useSelector} from "react-redux";
import {getLogin} from "../../../redux/authSelector";

import {Header} from "./Header";

export const HeaderContainer = () => {
	const authLogin = useSelector(getLogin);

	return <Header authLogin={authLogin} />;
};