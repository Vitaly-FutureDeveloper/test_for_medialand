import React from "react";
import { Form, Field } from "react-final-form";
import styles from "./AuthForm.module.css";
import iconPassword from "../../../assets/img/icon_password.svg";
import {Navigate} from "react-router-dom";

export const AuthForm = ({isAuth, inputPasswordRef, onShowPassword, onSubmit, required}) => {


	if (isAuth){
		return <Navigate to={"/"} />
	}

	return (
		<Form
			onSubmit={onSubmit}
			render={({handleSubmit, submitting}) => (

				<form className={styles.authForm} onSubmit={handleSubmit}>

					<h2 className={styles.authForm__title}>Войдите</h2>
					<div className={styles.authForm__Block}>
						<span>или </span>
						<a className={styles.authForm__authLink} href="/">зарегистрируйтесь</a>
					</div>

					<div className={styles.authFormImputs}>
						<Field name="name" validate={required}>
							{({input, meta}) => (
								<div className={styles.authFormImputs}>
									<label className={styles.authFormImputs__inputWrap}>
										<input className={styles.authFormImputs__input} {...input} type="text" placeholder="Введите имя"/>
									</label>
									{meta.error && meta.touched && <span className={styles.errorText}>{meta.error}</span>}
								</div>
							)}
						</Field>
						<Field name="password" validate={required}>
							{({input, meta}) => (
								<div className={styles.authFormImputs}>
									<label className={styles.authFormImputs__inputWrap}>
										<input ref={inputPasswordRef}
													 className={styles.authFormImputs__input}
													 {...input}
													 type="password"
													 placeholder="Введите пароль"/>
										<button className={styles.authFormImputs__btnPassword}
														onClick={(evt) => onShowPassword(evt)} style={{
											backgroundImage: `url(${iconPassword})`,
										}}></button>
									</label>
									{meta.error && meta.touched && <span className={styles.errorText}>{meta.error}</span>}
								</div>
							)}
						</Field>
					</div>

					<button className={styles.authForm__send}
									type="submit"
									disabled={submitting}>Войти в профиль
					</button>

				</form>
			)}
		/>

	)
};
