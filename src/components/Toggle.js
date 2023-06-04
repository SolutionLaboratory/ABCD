import styles from '/styles/Hero.module.css';
export default function Toggle({ isOn, onClick, className }) {
	return (
		<div className={className} checked={isOn} onClick={onClick}>
			<div className={styles.bar1} />
			<div className={styles.bar2} />
			<div className={styles.bar3} />
		</div>
	);
}
