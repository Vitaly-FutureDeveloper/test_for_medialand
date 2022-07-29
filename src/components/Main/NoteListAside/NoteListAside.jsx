import React, {useEffect} from "react";
import styles from "./NoteListAside.module.css";
import {NoteTitleContainer} from "./NoteTitle/NoteTitleContainer";

export const NoteListAside = ({notes, onAddNote}) => {


	return (
		<aside className={styles.noteAside}>
			<header className={styles.noteAside__header}>
				<span className={styles.noteAside__title}>Список заметок</span>
				<button className={styles.noteAside__btnAdd}
								onClick={() => onAddNote() }
					>Добавить</button>
			</header>

			<ul className={styles.noteList}>
				{
					notes.map( (note, i) => <NoteTitleContainer noteId={note.noteId} iterableElement={i} /> )
				}
			</ul>
		</aside>
	)
};