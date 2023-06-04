import styles from '/styles/Hero.module.css';
export default function Subscribe() {
	return (
		<form className="w-[100%] lg:w-[640px] mb-12 mt-4" action="/api/mail" method="post">
			<input
				aria-label="Email for newsletter"
				placeholder="Email Address"
				type="email"
				autoComplete="email"
				required
				className="text-xs p-[10px] h-[40px] w-5/6 w-[60%] text-white bg-[#353535]"
			/>
			<button
				className="bg-[#ffd000] w-[40%] lg:w-1/6 h-[40px] rounded-none text-[#ffffff] font-semibold text-xs"
				type="submit"
				id={styles.btneffect}
			>
				Subscribe
			</button>
		</form>
	);
}
