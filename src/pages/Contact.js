import Footer from '../components/Footer';
import Inquiry from '../components/Inquiry';
import Navigation from '../components/Navigation';
import styles from '/styles/Hero.module.css';
export default function Contact() {
	return (
		<div className="font-Roboto">
			<Navigation />
			<h2 className="font-bold text-[30px] lg:text-[50px] text-[#ffd000] mt-20 mx-[25px] lg:mx-[50px] font-Roboto">
				Contact Us
			</h2>
			<p className="mx-[25px] lg:mx-[50px] text-sm lg:text-[18px] leading-10">Get in touch with us</p>

			{/**INQUIRY */}
			<section className="md:flex md:justify-around lg:ml-[8%] mt-12">
				<div className="lg:w-[50%]">
					<Inquiry header="Inquiries and help center:" email="destinyfelinah@abcdevs.com" />
					<Inquiry header="Partnership/Investment:" email="josh@abcdevs.com" />
					<Inquiry header="Talent/Product Management Info:" email="otobong@abcdevs.com" />
				</div>
				<div className="lg:w-[50%] mt-4 mx-4">
					<p className="text-[#ffd000] mb-[4px]">Drop us a Line</p>
					<p className="w-[90%] lg:w-[65%] mb-4 text-sm">
						Reach out to us from our contact form and we will get back to you shortly
					</p>
					<form className="grid grid-cols-2 gap-4 w-[75%]">
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="*First Name"
							className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4"
							required="true"
						/>

						<input
							type="text"
							id="lname"
							name="lastname"
							placeholder="*Last Name"
							className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4"
							required="true"
						/>

						<input
							type="text"
							id="email"
							name="email"
							placeholder="*Email"
							className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4"
							required="true"
						/>

						<input
							type="text"
							id="phone"
							name="phone number"
							placeholder="*Phone"
							className="bg-transparent border-[#ffd000] w-full border p-4 h-[30px] mb-4"
							required="true"
						/>

						<textarea
							id="subject"
							name="subject"
							placeholder="*Message"
							className="bg-transparent border-[#ffd000] col-span-2 border p-4 h-[150px]"
							required="true"
						/>

						<button
							type="submit"
							className="h-[50px] p-4 block bg-[#FFD000] col-span-2 text-black text-lg font-semibold"
							id={styles.btneffect}
						>
							Send Message
						</button>
						<p className="text-base font-normal font-Roboto col-span-2">*These fields are required</p>
					</form>
				</div>
			</section>

			{/**FOOTER */}
			<Footer />
		</div>
	);
}
