import {LoginAPI} from "../api/LoginAPI";


const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
	login: '',
	isAuth: false,
	status: '',
	token: '',
};

const authReducer = (state=initialState, action) => {

	switch (action.type){

		case SET_USER_DATA: {
			const body = {
				...state,
			}
			body.login = action.login;
			body.isAuth = action.isAuth;
			body.status = action.status;
			body.token = action.token;
			return body;
		}

		default:
			return state;
	}
};

// ******************* //
// Instance Ajax API
const authAPI = new LoginAPI();
// ******************* //

export const setAuthUserData = (login, token, status, isAuth=true) => ({
	type: SET_USER_DATA,
	login,
	status,
	token,
	isAuth,
});


export const loginThunk = (login, password) => async (dispatch) => {
	const response = await authAPI.login(login, password);

	if (response.data.status === "ok") {
		const {status, token} = response.data;

		dispatch(setAuthUserData(login, token, status));
	}
};

export default authReducer;