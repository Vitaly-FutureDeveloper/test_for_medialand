import React from "react";
import styles from "./Main.module.css";

import {HeaderContainer} from "./Header/HeaderContainer";
import {NoteListAsideContainer} from "./NoteListAside/NoteListAsideContainer";
import {NoteListFormContainer} from "./NoteListForm/NoteListFormContainer";
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