import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {NoteTitle} from "./NoteTitle";
import {getBorderColor, getNoteText, getNoteTitle} from "../../../../redux/mainSelector";
import {setCurrentNoteAC} from "../../../../redux/mainReducer";



export const NoteTitleContainer = ({iterableElement}) => {
	const dispatch = useDispatch();

	const BACKGROUND_NOTE_TRANSPARENT = '0D';


	const borderColor = useSelector((state) => getBorderColor(state, iterableElement));
	const noteTitle = useSelector((state) => getNoteTitle(state, iterableElement));
	const noteText = useSelector((state) => getNoteText(state, iterableElement));

	const backgroundColor = borderColor + BACKGROUND_NOTE_TRANSPARENT;

	const onChangeCurrentNoteItem = () => {
		//Меняет textarea по клику на заметку
		dispatch( setCurrentNoteAC( iterableElement ) );
	};


	return <NoteTitle
										borderColor={borderColor}
										backgroundColor={backgroundColor}
										noteTitle={noteTitle}
										noteText={noteText}
										onChangeCurrentNoteItem={onChangeCurrentNoteItem}
	/>;
};