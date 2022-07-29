import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_LOGIN = "SET_USER_LOGIN";
const SET_USER_PASSWORD = "SET_USER_PASSWORD";



//по клику на note aside
const SET_CURRENT_NOTE = "SET_CURRENT_NOTE";

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
				...state.notes,
			}
			// body.notes.noteId = action.noteId;
			// body.notes.noteTitle = action.noteTitle;
			// body.notes.noteText = action.noteText;
			// body.notes.noteBorderColor = action.noteBorderColor;
			body.notes.push(pushObj);
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



export default mainReducer;