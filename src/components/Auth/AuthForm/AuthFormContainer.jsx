import React, {useRef} from "react";
import {AuthForm} from "./AuthForm";
import {loginThunk} from "../../../redux/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth} from "../../../redux/authSelector";

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

	const required = value => (value ? undefined : 'Поле обязательно для ввода');


	return <AuthForm
		isAuth={isAuth}
		inputPasswordRef={inputPasswordRef}
		onSubmit={onSubmit}
		onShowPassword={onShowPassword}
		required={required} />
};