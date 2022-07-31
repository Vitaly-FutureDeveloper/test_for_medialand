import {AjaxAPI} from "./api";

export class NotesAPI extends AjaxAPI {
	constructor() {
		super();
	}

	getNote(){
		return this.instance.get(`/note`);
	}

	setNote(title, body, color, token){
		const bodyObj = {
			title: title,
			body: body,
			color: color,
		};
		return this.instance.post(`/note`, bodyObj, {
			headers: {
				'Authorization': `Basic ${token}`
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
				'Authorization': `Basic ${token}`
			},
		});
	}
}