import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setPutNoteThunk} from "../../../redux/mainReducer";
import {setToggleModalAC} from "../../../redux/modalsReducer";

import {NoteListForm} from "./NoteListForm";
import {NoteListNOForm} from "../NoteListNOForm/NoteListNOForm";
import {required} from "../../formUtils/validatings";

import {getCurrentNote, getIsNoteList, getNoteTextarea} from "../../../redux/mainSelector";



export const NoteListFormContainer = ({textAreaRef}) => {

	const dispatch = useDispatch();

	const currentNote = useSelector(getCurrentNote);

	const isNoteList = useSelector((state) => getIsNoteList(state));
	// const textAreaText = useSelector((state) => getNoteTextarea(state));

	const onSubmit = ({body, color}) => {
		dispatch( setPutNoteThunk(`#Заметка_${currentNote}`, body, color) );
	};

	const onShowModalDelete = (evt) => {
		evt.preventDefault();
		dispatch( setToggleModalAC() );
	};


	return isNoteList ?
		<NoteListForm textAreaRef={textAreaRef}
									// textAreaText={textAreaText}
									onSubmit={onSubmit}
									onShowModalDelete={onShowModalDelete}
									required={required} />
		:
		<NoteListNOForm />;
};