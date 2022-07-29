import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_LOGIN = "SET_USER_LOGIN";
const SET_USER_PASSWORD = "SET_USER_PASSWORD";

const initialState = {
	login: '',
	password: '',
	isAuth: false,
	token: "",
};

const authReducer = (state=initialState, action) => {

	switch (action.type){
		case SET_USER_LOGIN: {
			const body = {
				...state,
			}
			body.login = action.login;
			return body;
		}

		case SET_USER_PASSWORD: {
			const body = {
				...state,
			}
			body.password = action.password;
			return body;
		}

		case SET_USER_DATA: {
			const body = {
				...state,
			}
			body.isAuth = action.isAuth;
			body.token = action.token;
			return body;
		}

		default:
			return state;
	}

};

export const setAuthUserData = (isAuth, token) => ({
	type: SET_USER_DATA,
	isAuth,
	token,
});

export const getAuthUserData = () =>  async (dispatch) => {
	const response = await authAPI.me();

	if (response.data.status === "ok"){
		const {status, token} = response.data;
		dispatch( setAuthUserData(status, token) );
	}
};

export const setAuthLogin = (login) => ({
	type: SET_USER_LOGIN,
	login,
});
export const setAuthPassword = (password) => ({
	type: SET_USER_PASSWORD,
	password,
});

export const login = (login, password) => async (dispatch) => {
	const response = await authAPI.login(login, password);

	if (response.data.status === "ok"){
		// После логинизации диспатчим САНКу
		// Которая проверяет: залогинины ли мы
		dispatch(getAuthUserData());
	}
};

export default authReducer;