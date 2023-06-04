import { Discord, Twitter } from '../components/icons';
import Navigation from '../components/Navigation';
import CommunityHero from '/public/CommunityHero.jpg';
import Image from 'next/image';
import styles from '/styles/Hero.module.css';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';

export default function Community() {
	useEffect(() => {
		AOS.init();
		Aos.refresh();
	}, []);
	return (
		<div className="font-Roboto">
			<Navigation />
			<h2 className="font-bold text-[30px] lg:text-[50px] text-[#ffd000] mt-20 mx-[25px] lg:mx-[50px]">
				ABCD Community
			</h2>
			<main className=" grid-cols-4 grid gap-4 lg:grid-cols-none mb-12 lg:h-[500px]">
				<div className="mx-[25px] lg:mx-[50px] lg:w-[40%] mt-[300px] lg:mt-0 col-span-4 order-last">
					<p className="leading-10 tracking-wide text-base text-justify">
						Join the world’s most influential workforce in web3 product managers, web3 product designers,
						smart contract engineers, smart contract security audits, smart contracts testing etc. Connect
						with experts through networking events, volunteering, and more.
					</p>
					<button className="mt-16 flex border border-[#ffd000] py-2 px-5 text-[#ffd000] 
	 font-bold text-base rounded h-[40px]">
						Join ABCD{' '}
						<span className="ml-[10px]">
							<Discord color="#ffd000" />
						</span>
					</button>
					<button className="mt-16 flex border border-[#ffd000] py-2 px-5 text-[#ffd000] 
	 font-bold text-base rounded h-[40px]">
						Join ABCD{' '}
						<span className="ml-[10px]">
							<a href="https://twitter.com/abcd_community" target="_blank" rel="noreferrer noopener">
								<Twitter color="#ffd000" />
							</a>
						</span>
					</button>
				</div>
				<article className="absolute lg:left-[50%] left-[10%] lg:w-[50%] w-full mb-[160px] col-span-4">
					<div className={styles.community}>
						<Image
							src={CommunityHero}
							alt="Team Picture"
							width={720}
							height={500}
							className={styles.communityImg}
							layout="responsive"
							data-aos="flip-up"
							data-aos-offset="300"
							data-aos-easing="ease-in-sine"
						/>
					</div>
				</article>
			</main>
			<Footer />
		</div>
	);
}
