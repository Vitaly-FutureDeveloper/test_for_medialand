import React from "react";
import styles from "./Main.module.css";
import {Header} from "./Header/Header";
import {NoteListAsideContainer} from "./NoteListAside/NoteListAsideContainer";
import {NoteListFormContainer} from "./NoteListForm/NoteListFormContainer";

export const Main = () => {


	return (
		<div className={styles.mainTable}>
			<Header />

			<div className={styles.notesBlock}>
				<NoteListAsideContainer />
				<NoteListFormContainer />
			</div>
		</div>
	)
};