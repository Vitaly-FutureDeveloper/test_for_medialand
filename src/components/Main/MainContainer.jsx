import React, {useRef} from "react";
import {Main} from "./Main";
import {useDispatch, useSelector} from "react-redux";



export const MainContainer = () => {

	const dispatch = useDispatch();


	return <Main />;
};