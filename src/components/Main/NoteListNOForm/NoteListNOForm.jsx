import React from "react";
import styles from "./NoteListNOForm.module.css";

export const NoteListNOForm = () => {
	return (
		<section className={styles.noFormBlock}>
			<p className={styles.noFormBlock__text}>Ой, а заметок еще нет :) нажмите “добавить” в меню с лева чтобы добавить новую заметку </p>
		</section>
	)
};