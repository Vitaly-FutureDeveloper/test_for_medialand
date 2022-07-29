import React, {useEffect} from "react";
import {NoteListAside} from "./NoteListAside";
import {useDispatch, useSelector} from "react-redux";
import {setNewNoteAC} from "../../../redux/mainReducer";
import {getNotes} from "../../../redux/mainSelector";
import {NoteTitleContainer} from "./NoteTitle/NoteTitleContainer";



export const NoteListAsideContainer = () => {

	const dispatch = useDispatch();


	const notes = useSelector((state) => getNotes(state));


	const onAddNote = () => {
		dispatch( setNewNoteAC() );
	};

	return <NoteListAside notes={notes} onAddNote={onAddNote} />;
};