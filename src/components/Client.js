import styles from '/styles/Hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Client() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<form className="grid grid-cols-2 gap-4 w-full lg:w-[500px] lg:mx-[25px]" data-aos="flip-left">
			<input
				type="text"
				id="fname"
				name="fullname"
				placeholder="*Full Name"
				className="bg-transparent font-roboto border-[#ffd000] w-[100%] border p-4 h-[30px] mb-4 col-span-2 mt-4"
				required={true}
			/>
			<input
				type="text"
				id="wemail"
				name="workemail"
				placeholder="*Work Email"
				className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4"
				required={true}
			/>
			<input
				type="text"
				id="wphone"
				name="workphone"
				placeholder="*Work Phone"
				className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4"
				required={true}
			/>
			<label className="col-span-2 inline-block">
				Do you want a Talent?
				<input type="checkbox" />
				<span className={styles.checkmark} />
			</label>

			<label className="col-span-2 inline-block">
				Do you want ABCD to develop your product in-house?
				<input type="checkbox" className="bg-black" />
				<span className={styles.checkmark} />
			</label>
			<input
				type="text"
				id="cname"
				name="companyname"
				placeholder="*Company Name"
				className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4"
				required={true}
			/>
			<input
				type="text"
				id="fname"
				name="firstname"
				placeholder="*First Name"
				className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4"
				required={true}
			/>
			<textarea
				id="subject"
				name="subject"
				placeholder="*Message"
				className="bg-transparent border-[#ffd000] col-span-2 border p-4 h-[150px]"
				required={true}
			/>
		</form>
	);
}
