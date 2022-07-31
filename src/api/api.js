import * as axios from "axios";

export class AjaxAPI {
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


