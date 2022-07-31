import React from "react";
import {Form, Field} from "react-final-form";

import styles from "./NoteListForm.module.css";

export const NoteListForm = ({textAreaText, onSubmit, required}) => {


	return (
		<section className={styles.noteFormBlock}>
			<Form
				onSubmit={onSubmit}
				render={({handleSubmit, submitting}) => (

					<form className={styles.noteForm} onSubmit={handleSubmit}>

						<header className={styles.noteForm__header}>
							<h3 className={styles.noteForm__title}>Введите имя заметки</h3>
						</header>

						<div className={styles.noteFormMainBlock}>

							<Field name="body" validate={required}>
								{({input, meta}) => (
									<div className={styles.noteFormMainBlock}>
										<textarea className={styles.noteFormMainBlock__texarea}
															// name=""
															{...input}
															cols="30" rows="10"
															// value={textAreaText}

										/>
										{meta.error && meta.touched && <span className={styles.errorText}>{meta.error}</span>}
									</div>
								)}
							</Field>

							<Field name="color" validate={required}>
								{({input, meta}) => (
									<section className={styles.noteFormSubmitsBlock}>
										<div className={styles.inputColorBlock}>
											<label className={styles.inputColorBlock__label} htmlFor="inputColor">
												Выберите цвет <br/> заметки
											</label>

											<input type="color" className={styles.inputColorBlock__input}
														 id="inputColor"
														 {...input}
												// name="inputColor"
														 // value="#ffffff"
											/>
											{meta.error && meta.touched && <span className={styles.errorText}>{meta.error}</span>}
										</div>

										<div className={styles.noteFormBtnBlock}>
											<button className={styles.noteFormBtnBlock__btnDel}>Удалить</button>
											<button className={styles.noteFormBtnBlock__btnSubmit}>Сохранить</button>
										</div>

									</section>

								)}
							</Field>

						</div>
					</form>
				)}
			/>
		</section>
	)
};