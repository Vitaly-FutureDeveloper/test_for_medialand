import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {NoteListForm} from "./NoteListForm";
import {NoteListNOForm} from "../NoteListNOForm/NoteListNOForm";
import {getIsNoteList, getNoteTextarea} from "../../../redux/mainSelector";



export const NoteListFormContainer = () => {

	const dispatch = useDispatch();

	// const currentNote = useSelector((state) => getCurrentNote(state));

	const isNoteList = useSelector((state) => getIsNoteList(state));
	const textAreaText = useSelector((state) => getNoteTextarea(state));


	return isNoteList ?
		<NoteListForm textAreaText={textAreaText} />
		:
		<NoteListNOForm />;
};