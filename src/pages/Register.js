import { useEffect, useState } from 'react';
import { AuthBg } from '../components/icons';
import styles from '/styles/Hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Register({ onChange, children, className }) {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className={className}>
			<main className="font-Roboto absolute z-10" data-aos="zoom-in-down">
				<div className="border border-black rounded relative bg-black shadow-3xl bottom-[300px] lg:left-[60%] mx-auto">
					<a
						className="float-right mr-[25px] text-4xl leading-none border border-[#ffd000]
				rounded-full text-center w-[35px] px-[5px] h-[35px] bg-[#ffd000] mt-[10px] text-black cursor-pointer"
						onClick={onChange}
					>
						&times;
					</a>
					{children}
					<button
						type="submit"
						className="h-full p-[10px] block bg-[#FFD000] ml-[25px] lg:w-[500px] text-black mt-4 text-center text-lg font-semibold"
						id={styles.btneffect}
					>
						Submit
					</button>
					<p className="text-base font-normal font-Roboto w-[100%] mx-[25px]">*These fields are required</p>
					<AuthBg className="relative left-[17%]" />
				</div>
			</main>
		</div>
	);
}
