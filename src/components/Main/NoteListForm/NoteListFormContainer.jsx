import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {NoteListForm} from "./NoteListForm";
import {NoteListNOForm} from "../NoteListNOForm/NoteListNOForm";
import {getCurrentNote, getIsNoteList, getNoteTextarea} from "../../../redux/mainSelector";
import {required} from "../../formUtils/validatings";
import {setPutNoteThunk} from "../../../redux/mainReducer";




export const NoteListFormContainer = () => {

	const dispatch = useDispatch();

	const currentNote = useSelector(getCurrentNote);

	const isNoteList = useSelector((state) => getIsNoteList(state));
	const textAreaText = useSelector((state) => getNoteTextarea(state));

	const onSubmit = ({body, color}) => {
		dispatch( setPutNoteThunk(`#Заметка_${currentNote}`, body, color) );
	};



	return isNoteList ?
		<NoteListForm textAreaText={textAreaText}
									onSubmit={onSubmit}
									required={required} />
		:
		<NoteListNOForm />;
};