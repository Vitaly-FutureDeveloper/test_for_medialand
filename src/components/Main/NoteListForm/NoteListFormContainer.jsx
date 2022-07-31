import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {NoteListForm} from "./NoteListForm";
import {NoteListNOForm} from "../NoteListNOForm/NoteListNOForm";
import {getIsNoteList, getNotes, getNoteTextarea} from "../../../redux/mainSelector";
import {required} from "../../formUtils/validatings";
import {setPutNoteThunk} from "../../../redux/mainReducer";




export const NoteListFormContainer = () => {

	const dispatch = useDispatch();

	// const currentNote = useSelector((state) => getCurrentNote(state));

	const isNoteList = useSelector((state) => getIsNoteList(state));
	const textAreaText = useSelector((state) => getNoteTextarea(state));
	const notes = useSelector(getNotes);

	const onSubmit = ({body, color}) => {
		const newId = notes.length;
		dispatch( setPutNoteThunk(`#Заметка_${newId}`, body, color) );
	};



	return isNoteList ?
		<NoteListForm textAreaText={textAreaText}
									onSubmit={onSubmit}
									required={required} />
		:
		<NoteListNOForm />;
};