import React from "react";
import {Form} from "react-final-form";

import styles from "./ModalDeleteNote.module.css";

export const ModalDeleteNote = ({isVisible, onSubmit, onCloseModalDelete}) => {


	return !isVisible ? null : (
		<article className={styles.modalDeleteNote}>
			<Form
				onSubmit={onSubmit}
				render={({handleSubmit, submitting}) => (

					<form className={styles.modalDeleteNoteForm} onSubmit={handleSubmit}>

						<header>
							<h2>Хотите удалить эту заметку</h2>
						</header>

						<div>
							<button className={styles.modalDeleteNote__btnDel}>Удалить</button>
							<button onClick={onCloseModalDelete} className={styles.modalDeleteNote__btnClose}>Закрыть</button>
						</div>
					</form>
				)}
			/>
		</article>
	)
};