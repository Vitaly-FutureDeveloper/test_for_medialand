import React from "react";
import styles from "./NoteListAside.module.css";

import {NoteTitleContainer} from "./NoteTitle/NoteTitleContainer";
import {Loading} from "../../spinners/Loading";


export const NoteListAside = ({notes, onAddNote, textAreaRef}) => {

	return (
		<aside className={styles.noteAside}>
			<header className={styles.noteAside__header}>
				<span className={styles.noteAside__title}>Список заметок</span>
				<button className={styles.noteAside__btnAdd}
								onClick={() => onAddNote() }>Добавить</button>
			</header>

			<ul className={styles.noteList}>
				{ notes ?
					notes.map( (note, i) => <NoteTitleContainer key={note.noteId.toString()} iterableElement={i} textAreaRef={textAreaRef} /> )
					:
					<Loading />
				}
			</ul>
		</aside>
	)
};
