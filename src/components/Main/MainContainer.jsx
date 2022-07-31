import React from "react";

import {withAuthRedirect} from "../hoc/withAuthRedirect";

import {Main} from "./Main";



const MainContainer = () => {
	return <Main />;
};

export default withAuthRedirect(MainContainer);