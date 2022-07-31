import React from "react";
import styles from "./Main.module.css";
import {NoteListAsideContainer} from "./NoteListAside/NoteListAsideContainer";
import {NoteListFormContainer} from "./NoteListForm/NoteListFormContainer";
import {HeaderContainer} from "./Header/HeaderContainer";
import {ModalDeleteNoteContainer} from "../modals/ModalDeleteNoteContainer";

export const Main = () => {

	return (
		<div className={styles.mainTable}>

			<ModalDeleteNoteContainer />

			<HeaderContainer />

			<div className={styles.notesBlock}>
				<NoteListAsideContainer />
				<NoteListFormContainer />
			</div>
		</div>
	)
};