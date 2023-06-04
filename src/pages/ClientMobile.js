import { useEffect } from 'react';
import { AuthBg } from '../components/icons';
import styles from '/styles/Hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
import Client from '../components/Client';
export default function ClientMobile() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div>
			<Navigation />
			<div className="mx-[25px] mt-12">
				<button className=" hover:bg-[#ffd000] text-center font-Roboto hover:text-black text-[#ffd000] border border-[#ffd000] w-[100%] p-[8px]">
					Client
				</button>
				<Client />
				<button
					type="submit"
					className="h-full p-[10px] block bg-[#FFD000] w-full text-black mt-4 text-center text-lg font-semibold"
					id={styles.btneffect}
				>
					Submit
				</button>
				<p className="text-base font-normal font-Roboto w-[100%]">*These fields are required</p>
				<AuthBg className="relative right-[20%]" />
			</div>
		</div>
	);
}
