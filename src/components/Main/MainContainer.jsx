import React, {useEffect, useRef} from "react";
import {Main} from "./Main";
import {useDispatch, useSelector} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {getNotesThunk} from "../../redux/mainReducer";



const MainContainer = () => {

	const dispatch = useDispatch();




	return <Main />;
};

export default withAuthRedirect(MainContainer);