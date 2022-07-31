import React from "react";
import styles from "./Main.module.css";
import {NoteListAsideContainer} from "./NoteListAside/NoteListAsideContainer";
import {NoteListFormContainer} from "./NoteListForm/NoteListFormContainer";
import {HeaderContainer} from "./Header/HeaderContainer";

export const Main = () => {

	return (
		<div className={styles.mainTable}>
			<HeaderContainer />

			<div className={styles.notesBlock}>
				<NoteListAsideContainer />
				<NoteListFormContainer />
			</div>
		</div>
	)
};