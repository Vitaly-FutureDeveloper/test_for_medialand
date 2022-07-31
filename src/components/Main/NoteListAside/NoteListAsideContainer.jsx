import React, {useEffect} from "react";
import {NoteListAside} from "./NoteListAside";
import {useDispatch, useSelector} from "react-redux";
import {getNotesThunk, setNoteThunk, setPutNoteThunk} from "../../../redux/mainReducer";
import {getNotes} from "../../../redux/mainSelector";



export const NoteListAsideContainer = () => {

	const dispatch = useDispatch();

	useEffect(() => {

		//************************
		//Невалидный Json на get запрос
		// *********************
		// dispatch( getNotesThunk() );

	}, []);

	const notes = useSelector(getNotes);


	const onAddNote = () => {
		const newId = notes.length + 1;
		dispatch( setNoteThunk(`#Заметка_${newId}`, 'Пустая заметка', "#000000") );
	};

	// const onPutNote = ({body, color}) => {
	// 	const newId = notes.length + 1;
	// 	dispatch( setPutNoteThunk(`#Заметка_${newId}`, 'Пустая заметка', "#000000") );
	// };

	return <NoteListAside notes={notes} onAddNote={onAddNote} />;
};