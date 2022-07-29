import React from "react";
import styles from "./NoteListForm.module.css";

export const NoteListForm = ({textAreaText}) => {


	return (
		<section className={styles.noteFormBlock}>
			<form className={styles.noteForm}>
				<header className={styles.noteForm__header}>
					<h3 className={styles.noteForm__title}>Введите имя заметки</h3>
				</header>
				
				<section className={styles.noteFormMainBlock}>

					<textarea className={styles.noteFormMainBlock__texarea}
										name=""
										cols="30" rows="10"
										value={textAreaText}
					/>

				</section>

				<section className={styles.noteFormSubmitsBlock}>
					<div className={styles.inputColorBlock}>
						<label className={styles.inputColorBlock__label} htmlFor="inputColor">Выберите цвет <br/> заметки</label>
						<input type="color" className={styles.inputColorBlock__input}
									 id="inputColor"
									 name="inputColor"
									 value="#ffffff"
						/>
					</div>

					<div className={styles.noteFormBtnBlock}>
						<button className={styles.noteFormBtnBlock__btnDel}>Удалить</button>
						<button className={styles.noteFormBtnBlock__btnSubmit}>Сохранить</button>
					</div>
				</section>
			</form>
		</section>
	)
};