import styles from '/styles/Hero.module.css';
export default function Parallel({ picture, text1, icon1, icon2, icon3, icon4, icon5, icon6 }) {
	return (
		<div className={styles.containerTalent}>
			<div className={styles.properties}>{picture}</div>
			<aside className={styles.text}>
				{text1}
				<div className="flex mt-4">
					<div className="mr-[4px] lg:mr-[0.5rem]">{icon1}</div>
					<div className="mr-[4px] lg:mr-[0.5rem]">{icon2}</div>
					<div className="mr-[4px] lg:mr-[0.5rem]">{icon3}</div>
					<div className="mr-[4px] lg:mr-[0.5rem]">{icon4}</div>
					<div className="mr-[4px] lg:mr-[0.5rem]">{icon5}</div>
					<div className="mr-[4px] lg:mr-[0.5rem]">{icon6}</div>
				</div>
			</aside>
		</div>
	);
}
