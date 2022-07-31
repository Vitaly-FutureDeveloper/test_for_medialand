import React, {useRef} from "react";
import {Auth} from "./Auth";
import {useDispatch, useSelector} from "react-redux";
import {login, setAuthLogin, setAuthPassword} from "../../redux/authReducer";



export const AuthContainer = () => {

	const dispatch = useDispatch();

	// const inputNameRef = useRef(null);
	// const inputPasswordRef = useRef(null);
	//
	// const inputNameValue = useSelector((state => state.formPage.login));
	// const inputNamePassword = useSelector((state => state.formPage.password));
	//
	// const setInputName = () => {
	// 	const name = inputNameRef.current.value;
	// 	dispatch( setAuthLogin( name ) );
	// };
	//
	// const setInputPassword = () => {
	// 	const password = inputPasswordRef.current.value;
	// 	dispatch( setAuthPassword( password ) );
	// };
	//
	// const formSubmit = (evt) => {
	// 	evt.preventDefault();
	//
	// 	dispatch( login(inputNameValue, inputNamePassword) );
	// };

	return <Auth />
};