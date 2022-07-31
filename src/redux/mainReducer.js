import {NotesAPI} from "../api/NotesAPI";

const SET_CURRENT_NOTE = "SET_CURRENT_NOTE";

const GET_NOTES_FROM_BACKEND = "GET_NOTES_FROM_BACKEND";
const SET_NOTE_FROM_BACKEND = "SET_NOTE_FROM_BACKEND";

const SET_NOTE = "SET_NOTE";
const SET_TEXT_TO_CURRENT_NOTE = "SET_TEXT_TO_CURRENT_NOTE";


const initialState = {
	currentNote: 0,
	notes: [
		{
			noteId: 1,
			noteTitle: '#Заметка_1',
			noteText: 'бла бла бла бла бла  бла бла текст заметки превью, дальше просто обрезаем текст вот так...',
			noteBorderColor: '#8478FF',
		},
		{
			noteId: 2,
			noteTitle: '#Заметка_2',
			noteText: '2 бла бла бла бла бла  бла бла текст заметки превью, дальше просто обрезаем текст вот так...',
			noteBorderColor: '#2478FF',
		}
	],
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

		case SET_NOTE: {
			const newId = state.notes.length + 1;
			const pushObj = {
				noteId: newId,
				noteTitle: `#Заметка_${newId}`,
				noteText: 'Пустая заметка',
				noteBorderColor: '#CFCFCF',
			}
			const body = {
				...state,
				notes: [...state.notes, pushObj],
			}
			return body;
		}

		case GET_NOTES_FROM_BACKEND: {
			// Получение списка через get запрос
			const newId = state.notes.length + 1;
			// const pushObj = {
			// 	noteId: newId,
			// 	noteTitle: `#Заметка_${newId}`,
			// 	noteText: action.body,
			// 	noteBorderColor: action.color,
			// }
			const body = {
				...state,
				notes: [...state.notes, action.notes],
			}
			return body;
		}

		case SET_NOTE_FROM_BACKEND: {
			// Получение 1 note после post запроса
			const newId = state.notes.length + 1;
			const pushObj = {
				noteId: newId,
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


export const setNewNoteAC = () => ({
	type: SET_NOTE,
});


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

export const setNoteFromBackendAC = (title, body, color) => ({
	// Получение 1 note после post запроса
	type: SET_NOTE_FROM_BACKEND,
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
		const {title, body, color} = response.data.notes;
		dispatch( setNoteFromBackendAC(title, body, color) );
	}
};



export default mainReducer;