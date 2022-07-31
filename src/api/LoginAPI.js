import {AjaxAPI} from "./api";

export class LoginAPI extends AjaxAPI {
	constructor() {
		super();
	}

	login(login, password){
		const body = {
			login,
			password
		};
		return this.instance.post(`/login`, body);
	}
}