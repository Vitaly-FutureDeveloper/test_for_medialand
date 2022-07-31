import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import {loginThunk} from "../../../redux/authReducer";
import {getIsAuth} from "../../../redux/authSelector";

import {required} from "../../formUtils/validatings";
import {AuthForm} from "./AuthForm";



export const AuthFormContainer = () => {
	const dispatch = useDispatch();

	const inputPasswordRef = useRef(null);

	const isAuth = useSelector(getIsAuth);

	const onSubmit = ({name, password}) => {
		dispatch( loginThunk(name, password) );
	};

	const onShowPassword = (evt) => {
		evt.preventDefault();
		const type = inputPasswordRef.current.type;

		type === 'password' ?
			inputPasswordRef.current.type = 'text'
			:
			inputPasswordRef.current.type = 'password';
	};


	return <AuthForm
		isAuth={isAuth}
		inputPasswordRef={inputPasswordRef}
		onSubmit={onSubmit}
		onShowPassword={onShowPassword}
		required={required} />
};