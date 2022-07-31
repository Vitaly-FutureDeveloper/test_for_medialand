import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setToggleModalAC} from "../../redux/modalsReducer";
import {getIsVisibleDeleteModal} from "../../redux/modalsSelectors";
import {ModalDeleteNote} from "./ModalDeleteNote";
import {setDeleteNoteThunk} from "../../redux/mainReducer";
import {getBorderColor, getCurrentNote, getNoteText, getNoteTitle} from "../../redux/mainSelector";


export const ModalDeleteNoteContainer = () => {

	const dispatch = useDispatch();

	const isVisible = useSelector(getIsVisibleDeleteModal);

	//Эти данные не нужны... Такое требование в ТЗ
	const currentNote = useSelector(getCurrentNote);
	const borderColor = useSelector((state) => getBorderColor(state, currentNote));
	const noteTitle = useSelector((state) => getNoteTitle(state, currentNote));
	const noteText = useSelector((state) => getNoteText(state, currentNote));

	const onSubmit = () => {
		console.log('sdadad')
		dispatch( setDeleteNoteThunk(noteTitle, noteText, borderColor) );
	};

	const onCloseModalDelete = (evt) => {
		evt.preventDefault();
		dispatch( setToggleModalAC() );
	};

	return <ModalDeleteNote isVisible={isVisible} onSubmit={onSubmit} onCloseModalDelete={onCloseModalDelete} />
};