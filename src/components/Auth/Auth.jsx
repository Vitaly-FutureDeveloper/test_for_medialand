import React from "react";
import Vector from "./../../assets/img/Vector.svg";
import Medialand from "./../../assets/img/medialand.svg";
import loginBackground from "./../../assets/background/background.png";
import iconPassword from "./../../assets/img/icon_password.svg"
import styles from "./Auth.module.css";

export const Auth = ({ inputNameValue, inputNamePassword,
											 inputNameRef, inputPasswordRef,
											 setInputName, setInputPassword,
											 formSubmit }) => {


	return (
		<div className={styles.mainTable}>

			<section className={styles.prewiew} style={{
				backgroundImage: `url(${loginBackground})`,
			}}>

				<div className={styles.prewiewBlock}>
					<div className={styles.prewiewBlock__imageBlock}>
						<img src={Vector} alt="Картинка"/>
					</div>
					<div className={styles.prewiewBlock__imageTest}>
						<img src={Medialand} alt="Картинка"/>
						<span className={styles.prewiewBlock__text}>Тестовое задание</span>
					</div>
				</div>

				<nav className={styles.mainNav}>
					<ul className={styles.mainNavList}>
						<li className={styles.mainNavList__item}>
							<a href="/" className={styles.mainNavList__link}>
								Главная
							</a>
						</li>
						<li className={styles.mainNavList__item}>
							<a href="/" className={styles.mainNavList__link}>
								Конфеденциальность
							</a>
						</li>
						<li className={styles.mainNavList__item}>
							<a href="/" className={styles.mainNavList__link}>
								Условия
							</a>
						</li>
						<li className={styles.mainNavList__item}>
							<a href="/" className={styles.mainNavList__link}>
								О портале
							</a>
						</li>
					</ul>
				</nav>

			</section>

			<section className={styles.authForm}>
				<form action="/" onSubmit={formSubmit}>

					<h2 className={styles.authForm__title}>Войдите</h2>
					<div className={styles.authForm__Block}>
						<span>или </span>
						<a className={styles.authForm__authLink} href="">зарегистрируйтесь</a>
					</div>

					<div className={styles.authFormImputs}>
						<label className={styles.authFormImputs__inputWrap}>

							<input className={styles.authFormImputs__input}
										 ref={inputNameRef}
										 onChange={setInputName}
										 value={inputNameValue}
										 type="text"
							/>

						</label>

						<label className={styles.authFormImputs__inputWrap}>

							<input className={styles.authFormImputs__input}
										 ref={inputPasswordRef}
										 onChange={setInputPassword}
										 value={inputNamePassword}
										 type="password"
							/>

							<button className={styles.authFormImputs__btnPassword} style={{
								backgroundImage: `url(${iconPassword})`,
							}}></button>

						</label>
					</div>

					<button type={"submit"}
									className={styles.authForm__send}>Войти в профиль</button>

					<p className={styles.authForm__memory}>Забыли пароль или не можете войти?</p>
				</form>
			</section>
		</div>
	)
};