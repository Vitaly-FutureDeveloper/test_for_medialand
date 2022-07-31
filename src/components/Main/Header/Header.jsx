import React from "react";
import styles from "./Header.module.css";

import Vector from "./../../../assets/img/Vector.svg";
import Medialand from "./../../../assets/img/medialand.svg";
import userPhoto from "./../../../assets/img/photoUser.png";


export const Header = ({authLogin}) => {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>

				<div className={styles.prewiewBlock}>

					<div className={styles.prewiewBlock__imageBlock}>
						<img src={Vector} alt="Картинка"/>
					</div>

					<div className={styles.prewiewBlock__imageTest}>
						<img src={Medialand} alt="Картинка"/>
						<span className={styles.prewiewBlock__text}>Тестовое задание</span>
					</div>

				</div>

				<section className={styles.authUserBlock}>
					<p className={styles.userName}>{authLogin}</p>

					<div className={styles.authUserImageBlock}>
						<img src={userPhoto} alt=""/>
					</div>

				</section>

			</div>
		</header>
	)
};