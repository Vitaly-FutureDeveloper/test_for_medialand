import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getNotesThunk, setNoteThunk} from "../../../redux/mainReducer";

import {getNotes} from "../../../redux/mainSelector";

import {NoteListAside} from "./NoteListAside";
import {setToggleModalAC} from "../../../redux/modalsReducer";



export const NoteListAsideContainer = ({textAreaRef}) => {

	const dispatch = useDispatch();

	useEffect(() => {
		// Грузим notes при первом рендере, get method
		dispatch( getNotesThunk() );

		// Unmount - close ModalDeleteNote
		return () => dispatch( setToggleModalAC(false) );
	}, []);

	const notes = useSelector(getNotes);


	const onAddNote = () => {
		const newId = notes.length + 1;
		dispatch( setNoteThunk(`#Заметка_${newId}`, 'Пустая заметка', "#000000") );
	};


	return <NoteListAside notes={notes} onAddNote={onAddNote} textAreaRef={textAreaRef} />;
};