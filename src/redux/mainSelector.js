import { createSelector } from 'reselect';

const getCurrentNoteSelector = (state) => state.mainPage.currentNote;
export const getCurrentNote = createSelector(getCurrentNoteSelector,
	(currentNote) => currentNote
);

// Aside Selectors

const getNotesSelector = (state) => state.mainPage.notes;
export const getNotes = createSelector(getNotesSelector,
	(notes) => notes
);

const getBorderColorSelector = (state, iterableElement) => state.mainPage.notes[iterableElement].noteBorderColor;
export const getBorderColor = createSelector(getBorderColorSelector,
	(borderColor) => borderColor
);

const getNoteTitleSelector = (state, iterableElement) => state.mainPage.notes[iterableElement].noteTitle;
export const getNoteTitle = createSelector(getNoteTitleSelector,
	(noteTitle) => noteTitle
);

const getNoteTextSelector = (state, iterableElement) => state.mainPage.notes[iterableElement].noteText;
export const getNoteText = createSelector(getNoteTextSelector,
	(noteText) => noteText
);


// List Form Selectors

const getIsNoteListSelector = (state) => state.mainPage.notes;
export const getIsNoteList = createSelector(getIsNoteListSelector,
	(isNoteList) => isNoteList.length > 0
);

const getNoteTextareaSelector = (state) => {
	const currentNote = getCurrentNote(state);
	return state.mainPage.notes[currentNote] ? state.mainPage.notes[currentNote].noteText : '';
};
export const getNoteTextarea = createSelector(getNoteTextareaSelector,
	(textAreaText) => textAreaText
);