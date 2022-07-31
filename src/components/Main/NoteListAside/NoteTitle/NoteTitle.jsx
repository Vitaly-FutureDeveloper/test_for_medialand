import React from "react";
import styles from "./NoteTitle.module.css";

export const NoteTitle = ({borderColor, backgroundColor, noteTitle, noteText,
														onChangeCurrentNoteItem,}) => {


	return (
		<li className={styles.noteList__item}
				onClick={ () => onChangeCurrentNoteItem() }
				style={{
			borderLeft: `3px solid ${borderColor}`,
			backgroundColor: backgroundColor,
		}}>

			<h3 className={styles.noteList__title}>{noteTitle}</h3>
			<p className={styles.noteList__text}>{noteText}</p>

		</li>
	)
};