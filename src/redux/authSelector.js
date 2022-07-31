import { createSelector } from 'reselect';


const getLoginSelector = (state) => state.formPage.login;
export const getLogin = createSelector(getLoginSelector,
	(login) => login
);

const getIsAuthSelector = (state) => state.formPage.isAuth;
export const getIsAuth = createSelector(getIsAuthSelector,
	(isAuth) => isAuth
);