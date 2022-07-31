import React from "react";
import {Main} from "./Main";
import {withAuthRedirect} from "../hoc/withAuthRedirect";



const MainContainer = () => {
	return <Main />;
};

export default withAuthRedirect(MainContainer);