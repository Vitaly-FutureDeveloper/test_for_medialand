import {putNoteFromBackendAC} from "./mainReducer";
import {NotesAPI} from "../api/NotesAPI";

const SET_SHOW_MODAL_DELETE_NOTE = "SET_SHOW_MODAL_DELETE_NOTE";

const initialState = {
	modalDeleteNote: {
		visibile: false,
	}
};

const modalsReducer = (state=initialState, action) => {

	switch (action.type){

		case SET_SHOW_MODAL_DELETE_NOTE: {
			const reverseVisible = !state.modalDeleteNote.visibile;
			const body = {
				...state,
				...state.modalDeleteNote,
			};
			body.modalDeleteNote.visibile = reverseVisible;
			return body;
		}

		default:
			return state;
	}
};



export const setToggleModalAC = () => ({
	type: SET_SHOW_MODAL_DELETE_NOTE
});




export default modalsReducer;