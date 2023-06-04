import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Talent() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<form className="grid grid-cols-2 gap-4 w-full lg:w-[500px] lg:mx-[25px]" data-aos="flip-right">
			<p className="font-roboto text-lg col-span-2 mt-4">
				Are you competent in your field of study?. Join our pool.
			</p>
			<input
				type="text"
				id="fname"
				name="firstname"
				placeholder="*First Name"
				className="bg-transparent border-[#ffd000] w-[100%] border p-4 h-[30px] mb-4 mt-4"
				required={true}
			/>
			<input
				type="text"
				id="lname"
				name="lastname"
				placeholder="*Last Name"
				className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4 mt-4"
				required={true}
			/>
			<input
				type="text"
				id="email"
				name="email"
				placeholder="*Email"
				className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4"
				required={true}
			/>
			<input
				type="text"
				id="phone"
				name="phone"
				placeholder="*Phone"
				className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4"
				required={true}
			/>
			<input
				type="text"
				id="skills"
				name="skills"
				placeholder="*Skills"
				className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4"
				required={true}
			/>

			<input
				type="text"
				id="level"
				name="level"
				placeholder="*Level"
				className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4"
				required={true}
			/>
			<textarea
				id="subject"
				name="subject"
				placeholder="*About yourself"
				className="bg-transparent border-[#ffd000] col-span-2 border p-4 h-[150px]"
				required={true}
			/>
		</form>
	);
}
