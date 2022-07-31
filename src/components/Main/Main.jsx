import React from "react";
import styles from "./Main.module.css";

import {HeaderContainer} from "./Header/HeaderContainer";
import {NoteListAsideContainer} from "./NoteListAside/NoteListAsideContainer";
import {NoteListFormContainer} from "./NoteListForm/NoteListFormContainer";
import {ModalDeleteNoteContainer} from "../modals/ModalDeleteNoteContainer";

export const Main = ({textAreaRef}) => {

	return (
		<div className={styles.mainTable}>
			{/* Модальное окно открывается при нажатии кнопки Удалить из NoteListFormContainer */}
			<ModalDeleteNoteContainer />

			<HeaderContainer />

			<div className={styles.notesBlock}>
				<NoteListAsideContainer textAreaRef={textAreaRef} />
				<NoteListFormContainer textAreaRef={textAreaRef} />
			</div>
		</div>
	)
};