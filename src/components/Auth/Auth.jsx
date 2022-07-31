import React from "react";
import styles from "./Auth.module.css";

import Vector from "./../../assets/img/Vector.svg";
import Medialand from "./../../assets/img/medialand.svg";

import {AuthFormContainer} from "./AuthForm/AuthFormContainer";



export const Auth = () => {

	return (
		<div className={styles.mainTable}>
			<section className={styles.prewiew} >

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

			<section className={styles.authFormBlock}>
				<AuthFormContainer />
			</section>
		</div>
	)
};