import {AjaxAPI} from "./api";

export class NotesAPI extends AjaxAPI {
	constructor() {
		super();
	}

	getNote(token){
		return this.instance.get(`/note`, {
			headers: {
				'token': token
			},
		});
	}

	setNote(title, body, color, token){
		const bodyObj = {
			title: title,
			body: body,
			color: color,
		};
		return this.instance.post(`/note`, bodyObj, {
			headers: {
				'token': token
			},
		});
	}

	putNote(id, title, body, color, token){
		const bodyObj = {
			id,
			title,
			body,
			color,
		};
		return this.instance.put(`/note`, bodyObj, {
			headers: {
				'token': token
			},
		});
	}

	deleteNote(id, title, body, color, token){
		const bodyObj = {
			headers: {
				token: token
			},
			data: {
				id,
				title,
				body,
				color,
				token,
			}
		};

		return this.instance.delete(`/note`, bodyObj);
	}
}