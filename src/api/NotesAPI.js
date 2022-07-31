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
}