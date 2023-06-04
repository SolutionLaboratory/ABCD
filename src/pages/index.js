import Head from 'next/head';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
import { HTML5, CSS3, JS, TypeScript, Php, Bootstrap, Nodejs, React, Vue } from '../components/icons';
import LandingHero from '/public/assets/LandingHero.svg';
import WhatWeDo from '/public/assets/WhatWeDo.svg';
import Empowa from '/public/empowa.png';
import Emurgo from '/public/emurgo.png';
import Africa from '/public/africa.png';
import Zoepool from '/public/zoepool.png';
import DApp from '/public/DApp.png';
import Parallel from '../components/Parallel';
import Alfred from '/public/Alfred.png';
import Sam from '/public/Sam.png';
import Abiona from '/public/Abiona.png';
import Footer from '../components/Footer';
import styles from '/styles/Hero.module.css';
import 'animate.css';
import { useEffect, useState } from 'react';
import Register from './Register';
import Client from '../components/Client';
import { useRouter } from 'next/router';
import ClientMobile from './ClientMobile';
import Link from 'next/link';

export default function Home() {
	//useEffect
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const router = useRouter();
	const [ Form, setForm ] = useState(false);
	function onClick() {
		setForm(!Form);
	}
	function onClose() {
		setForm(!Form);
	}
	return (
		<div>
			<Head>
				<title>ABCD</title>
				<meta name="viewport" content="width=device-width" />
			</Head>
			<Navigation />
			<main className="font-roboto">
				<section className="lg:w-[974px] min-w-min h-[400px] lg:h-[500px] lg:mt-[120px] lg:top-[0] relative top-[370px] bg-[#ffd000]">
					<h1 className="mx-[25px] lg:mx-[50px] text-black font-bold font-roboto text-4xl lg:text-6xl lg:w-[550px] relative top-[87px]">
						Hire/Get Access to ABCD vetted:
					</h1>
					<p className="mx-[25px] relative lg:mx-[50px] font-roboto top-[93px] text-[28px] lg:text-[40px] font-bold">
						Smart contract engineers
					</p>
					<p className="mx-[25px] lg:font-normal font-bold font-roboto lg:mx-[50px] relative top-[82px] text-black text-[38px]">
						for your project
					</p>
					<div className="hidden lg:block">
						<button className={styles.started} id={styles.btneffect} onClick={onClick}>
							Get Started
						</button>
					</div>
					<Link href="/ClientMobile">
						<a className="lg:hidden relative right-[25px]">
							<button className={styles.started} id={styles.btneffect} onClick={onClick}>
								Get Started
							</button>
						</a>
					</Link>
					{Form && (
						<Register onChange={onClose}>
							<div className="mx-auto mt-12">
								<a
									className={
										router.pathname == '/src/components/Client.js' ? (
											'bg-[#ffd000] && text-black'
										) : (
											'bg-black && text-[#ffd000]'
										)
									}
								>
									<button className=" hover:bg-[#ffd000] text-center font-roboto hover:text-black ml-[25px] text-[#ffd000] border border-[#ffd000] w-[91%] mr-[25px] p-[8px]">
										Client
									</button>
								</a>
							</div>
							<Client />
						</Register>
					)}
				</section>
				<div className="w-full lg:w-3/5 relative lg:left-[35%] bottom-[400px] md:bottom-[500px]">
					<Image
						src={LandingHero}
						width={988}
						height={741}
						layout="responsive"
						alt="landing hero image"
						className="animate__animated animate__fadeIn"
					/>
				</div>

				{/**What we do */}
				<section className="lg:flex lg:justify-between md:-mt-[23%] mt-[125px]">
					<div className="w-full" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
						<Image src={WhatWeDo} width={786} height={589} layout="responsive" alt="What we Do image" />
					</div>
					<aside className="w-[95%] mx-[20px] text-lg mt-4">
						<h2 className="font-semibold text-[50px] text-[#ffd000] font-roboto w-full mr-[25px]">
							What We Do?
						</h2>
						<p className="lg:w-[80%] leading-10 font-roboto text-lg">
							African Blockchain Centre for developers is a development and talent management company
							focused on connecting clients with vetted talents capable of web3 solutions design and
							development solutions.
						</p>
						<ul className="mt-[35px] lg:w-[80%] w-full leading-10 font-roboto list-disc list-inside">
							<li>Client-Talent bridge</li>
							<li>Talent vetting and management</li>
							<li>Product development and management</li>
							<li>ABCD Community management</li>
							<li>Training/education collaborations</li>
							<li>Impact projects</li>
						</ul>
					</aside>
				</section>
				{/**End of What We Do */}

				{/**PARTNERS */}
				<h2 className="font-semibold text-[45px] text-[#ffd000] text-center mt-12 font-roboto">Partners</h2>
				<section className="mx-9 grid grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
					<Image src={Empowa} width={250} height={150} alt="Empowa Logo" />
					<Image src={Emurgo} width={250} height={150} alt="Emurgo Logo" />
					<Image src={Africa} width={250} height={150} alt="Proof of Africa" />

					<Image src={Zoepool} width={250} height={150} alt="Zoepool Logo" />

					<Image src={DApp} width={250} height={150} alt="DApp 360" />
				</section>
				{/**END OF PARTNERS */}

				{/**TALENT SHOWCASE */}
				<h2 className="font-semibold text-[30px] lg:text-[45px] font-roboto text-[#ffd000] mt-20 mx-[25px] g:mx-[50px]">
					Talent Showcase
				</h2>
				<p className="mx-[25px] lg:mx-[35px] mt-4 text-sm lg:text-[20px] font-roboto leading-10">
					Trained and seasoned Blockchain Developers.
				</p>
				<div className="overflow-hidden">
					<div
						className="lg:ml-[53%] ml-[18%] w-full"
						data-aos="zoom-in-up"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
					>
						<Parallel
							picture={<Image src={Abiona} alt="profile picture" width={120} height={120} />}
							text1="Adewemiwo Abiona"
							icon1={<HTML5 />}
							icon2={<CSS3 />}
							icon3={<JS />}
							icon4={<Bootstrap />}
							icon5={<TypeScript />}
							icon6={<Php />}
						/>
					</div>
					<div
						className="lg:ml-[43%] ml-[14%] w-full"
						data-aos="zoom-in-up"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
					>
						<Parallel
							picture={<Image src={Alfred} alt="profile picture" width={120} height={120} />}
							text1="Alfred Johnson"
							icon1={<JS />}
							icon2={<Php />}
							icon3={<Nodejs />}
							icon4={<React />}
						/>
					</div>
					<div
						className="lg:ml-[32%] ml-[8%] w-full"
						data-aos="zoom-in-up"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
					>
						<Parallel
							picture={<Image src={Sam} alt="profile picture" width={120} height={120} />}
							text1="Sam-Obisike Chibueze"
							icon1={<Nodejs />}
							icon2={<React />}
							icon3={<Vue />}
							icon4={<TypeScript />}
						/>
					</div>
				</div>
				{/**FOOTER */}
				<Footer />
			</main>
		</div>
	);
}
