import { createSelector } from 'reselect';

const getStatusSelector = (state) => state.formPage.status;
export const getStatus = createSelector(getStatusSelector,
	(status) => status
);

const getLoginSelector = (state) => state.formPage.login;
export const getLogin = createSelector(getLoginSelector,
	(login) => login
);

const getIsAuthSelector = (state) => state.formPage.isAuth;
export const getIsAuth = createSelector(getIsAuthSelector,
	(isAuth) => isAuth
);