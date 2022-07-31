import React, {useRef} from "react";

import {withAuthRedirect} from "../hoc/withAuthRedirect";

import {Main} from "./Main";



const MainContainer = () => {
	// Prop drilling ))
	const textAreaRef = useRef(null);

	return <Main textAreaRef={textAreaRef} />;
};

export default withAuthRedirect(MainContainer);