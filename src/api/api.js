import * as axios from "axios";

// const BASE_URL = "http://localhost:5000";
//
//
// const instance = axios.create({
// 	withCredentials: true,
// 	baseURL: BASE_URL,
// 	headers: {
// 		'Content-Type': 'application/json'
// 	}
// });
//
//
// export const authAPI = {
// 	me(){
// 		return instance.get(`/auth/me`);
// 	},
//
// 	login(login, password){
// 		const body = {
// 			login,
// 			password
// 		};
// 		return instance.post(`/login`, body);
// 	},
//
// 	logout(){
// 		return instance.delete(`/auth/login`);
// 	}
// };

class AjaxAPI {
	constructor() {
		this.instance = axios.create({
			withCredentials: true,
			baseURL: "http://localhost:5000",
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}

class LogiAPI extends AjaxAPI {
	constructor() {
		super();
	}

	me(){
		return this.instance.get(`/auth/me`);
	}

	login(login, password){
		const body = {
			login,
			password
		};
		return this.instance.post(`/login`, body);
	}

	logout(){
		return this.instance.delete(`/auth/login`);
	}
}

export const authAPI = new LogiAPI();