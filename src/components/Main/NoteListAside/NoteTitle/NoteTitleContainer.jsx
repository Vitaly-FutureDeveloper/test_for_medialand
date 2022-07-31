import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setCurrentNoteAC, setCurrentNoteThunk} from "../../../../redux/mainReducer";
import {getBorderColor, getNoteText, getNoteTextarea, getNoteTitle} from "../../../../redux/mainSelector";

import {NoteTitle} from "./NoteTitle";



export const NoteTitleContainer = ({iterableElement, textAreaRef}) => {
	const dispatch = useDispatch();

	const BACKGROUND_NOTE_TRANSPARENT = '0D';


	const borderColor = useSelector((state) => getBorderColor(state, iterableElement));
	const noteTitle = useSelector((state) => getNoteTitle(state, iterableElement));
	const noteText = useSelector((state) => getNoteText(state, iterableElement));

	const backgroundColor = borderColor + BACKGROUND_NOTE_TRANSPARENT;

	const onChangeCurrentNoteItem = async (text) => {
		//Меняет textarea по клику на заметку
		await dispatch( setCurrentNoteThunk( iterableElement ) );
		textAreaRef.current.value = text;
	};


	return <NoteTitle borderColor={borderColor}
										backgroundColor={backgroundColor}
										noteTitle={noteTitle}
										noteText={noteText}
										// textAreaText={textAreaText}
										onChangeCurrentNoteItem={onChangeCurrentNoteItem}
	/>;
};