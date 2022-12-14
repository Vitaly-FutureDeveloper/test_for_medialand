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

	const isNoteList = useSelector(getIsNoteList);

	const onSubmit = ({body, color}) => {
		dispatch( setPutNoteThunk(`#Заметка_${currentNote}`, body, color) );
	};

	const onShowModalDelete = (evt) => {
		evt.preventDefault();
		dispatch( setToggleModalAC(true) );
	};


	return isNoteList ?
		<NoteListForm textAreaRef={textAreaRef}
									onSubmit={onSubmit}
									onShowModalDelete={onShowModalDelete}
									required={required} />
		:
		<NoteListNOForm />;
};