import {NotesAPI} from "../api/NotesAPI";

const SET_CURRENT_NOTE = "SET_CURRENT_NOTE";

const GET_NOTES_FROM_BACKEND = "GET_NOTES_FROM_BACKEND";
const SET_NOTE_FROM_BACKEND = "SET_NOTE_FROM_BACKEND";
const PUT_NOTE_FROM_BACKEND = "PUT_NOTE_FROM_BACKEND";
const DELETE_NOTE_FROM_BACKEND = "DELETE_NOTE_FROM_BACKEND";

const SET_TEXT_TO_CURRENT_NOTE = "SET_TEXT_TO_CURRENT_NOTE";


const initialState = {
	currentNote: 0,
	notes: [],
};

const mainReducer = (state=initialState, action) => {

	switch (action.type){

		case SET_CURRENT_NOTE: {
			const body = {
				...state,
			}
			body.currentNote = action.currentNote;
			return body;
		}


		case GET_NOTES_FROM_BACKEND: {
			// Получение списка через get запрос
			const body = {
				...state,
				notes: [...state.notes, action.notes.map(() => ({
					noteId: action.notes.id,
					noteTitle: action.notes.title,
					noteText: action.notes.body,
					noteBorderColor: action.notes.color,
				}))],
			}
			return body;
		}

		case SET_NOTE_FROM_BACKEND: {
			// Получение 1 note после post запроса
			const newId = state.notes.length + 1;
			const pushObj = {
				noteId: action.id,
				noteTitle: action.title, // `#Заметка_${newId}`,
				noteText: action.body,
				noteBorderColor: action.color,
			}
			const body = {
				...state,
				notes: [...state.notes, pushObj],
			}
			return body;
		}

		case PUT_NOTE_FROM_BACKEND: {
			// Обновление 1 note после put запроса
			const currentNote = state.currentNote;
			const pushObj = {
				noteId: action.id,
				noteTitle: action.title,
				noteText: action.body,
				noteBorderColor: action.color,
			}
			const body = {
				...state,
				notes: [...state.notes],
			}
			body.notes[currentNote] = pushObj;
			return body;
		}

		case DELETE_NOTE_FROM_BACKEND: {
			// Удалит 1 выделеный note
			const body = {
				...state,
				notes: [...state.notes.splice(action.currentNote, 1)],
			}
			return body;
		}

		case SET_TEXT_TO_CURRENT_NOTE: {
			const currentNote = state.currentNote;
			const body = {
				...state,
				...state.notes,
			}
			body.notes[currentNote].noteText = action.noteText;
			return body;
		}

		default:
			return state;
	}

};


// ******************* //
// Instance Ajax API
const noteAPI = new NotesAPI();
// ******************* //




export const setCurrentNoteAC = (currentNote) => ({
	type: SET_CURRENT_NOTE,
	currentNote,
});


export const setTextToCurrentNoteAC = (noteText) => ({
	type: SET_TEXT_TO_CURRENT_NOTE,
	noteText,
});

export const getNotesFromBackendAC = (notes) => ({
	type: GET_NOTES_FROM_BACKEND,
	notes,
});

export const setNoteFromBackendAC = (id, title, body, color) => ({
	// Получение 1 note после post запроса
	type: SET_NOTE_FROM_BACKEND,
	id,
	title,
	body,
	color,
});


export const putNoteFromBackendAC = (id, title, body, color) => ({
	// Обновление 1 note после put запроса
	type: PUT_NOTE_FROM_BACKEND,
	id,
	title,
	body,
	color,
});






export const getNotesThunk = () => async (dispatch) => {
	const response = await noteAPI.getNote();

	if (response.data.status === "ok") {
		dispatch( getNotesFromBackendAC(response.data.notes) );
	}
};


export const setNoteThunk = (title, body, color) => async (dispatch, getState) => {
	const token = getState().formPage.token;
	const response = await noteAPI.setNote(title, body, color, token);

	if (response.data.status === "ok") {
		const {id, title, body, color} = response.data.notes;

		dispatch( setNoteFromBackendAC(id, title, body, color) );
	}
};

export const setPutNoteThunk = (title, body, color) => async (dispatch, getState) => {
	const currentNote = getState().mainPage.currentNote;
	const noteId = getState().mainPage.notes[currentNote].noteId;
	const token = getState().formPage.token;

	const response = await noteAPI.putNote(noteId, title, body, color, token);

	if (response.data.status === "ok") {
		const {id, title, body, color} = response.data.notes;

		dispatch( putNoteFromBackendAC(id, title, body, color) );
	}
};

const setDeleteNoteAC = (currentNote) => ({
	type: DELETE_NOTE_FROM_BACKEND,
	currentNote,
});

export const setDeleteNoteThunk = (title, body, color) => async (dispatch, getState) => {
	const currentNote = getState().mainPage.currentNote;
	const noteId = getState().mainPage.notes[currentNote].noteId;
	const token = getState().formPage.token;

	const response = await noteAPI.deleteNote(noteId, title, body, color, token);

	if (response.data.status === "ok") {
		dispatch( setDeleteNoteAC(currentNote) );
	}
};



export default mainReducer;