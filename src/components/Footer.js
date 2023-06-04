import Link from 'next/link';
import Image from 'next/image';
import ABCD from '/public/ABCD.png';
import { Discord, FaceBook, Instagram, LinkedIn, Medium, Twitter } from './icons';
import Subscribe from './Subscribe';
export default function Footer() {
	return (
		<footer className="mx-[17px] lg:mx-[50px] mt-44 font-roboto">
			<section className="grid-cols-6 grid md:gap-4">
				<div className="w-full lg:col-span-2 col-span-6 font-bold text-2xl items-center">
					<Link href="/">
						<a>
							<Image strategy="lazyOnload" src={ABCD} height={35} width={150} alt="ABCD" />
						</a>
					</Link>
					<p className="text-[#ffd000] text-sm mt-[16px] font-normal font-roboto">
						@ 2022 ABCD All rights reserved
					</p>
					<h4 className="font-semibold mt-[17px] text-lg font-roboto">Subscribe to our Newsletter</h4>
					<p className="text-sm font-roboto mt-4 mb-[16px] font-normal">
						Become an Alpha, Join the ABCD growing web3 community.<br /> Be the first to get updates on our
						activities and opportunities
					</p>
					<Subscribe />
				</div>

				<div className="lg:col-span-2 col-span-3">
					<h3 className="font-bold text-2xl items-center font-roboto">Learn More</h3>
					<Link href="/About">
						<a>
							<p className="text-sm font-normal font-roboto mt-[16px] hover:text-[#ffd000]">About Us</p>
						</a>
					</Link>
					<Link href="/Contact">
						<a>
							<p className="text-sm font-normal font-roboto mt-[6px] hover:text-[#ffd000]">Contact Us</p>
						</a>
					</Link>
					<p className="text-sm font-normal font-roboto mt-[6px] hover:text-[#ffd000]">Hire Talent</p>
				</div>

				<div className="lg:col-span-2 col-span-3">
					<h3 className="font-bold text-2xl items-center font-roboto">Get in Touch</h3>
					<p className="text-sm font-normal mt-[16px] font-roboto">info@abcdevs.com</p>
					<div className="grid grid-cols-6 gap-4 items-center -mx-[10px] mt-[16px]">
						<a>
							<FaceBook className="hover:fill-[#ffd000] cursor-pointer" />
						</a>
						<a>
							<Discord color="white" className="hover:fill-[#ffd000] cursor-pointer" />
						</a>
						<a href="https://twitter.com/abcdeveloperz" rel="noreferrer noopener" target="_blank">
							<Twitter color="white" className="hover:fill-[#ffd000] cursor-pointer" />
						</a>
						<a
							href="https://www.linkedin.com/company/african-blockchain-centre-for-developers/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<LinkedIn className="hover:fill-[#ffd000] cursor-pointer" />
						</a>
						<a>
							<Instagram className="hover:fill-[#ffd000] cursor-pointer" />
						</a>
						<a>
							<Medium className="hover:fill-[#ffd000] cursor-pointer" />
						</a>
					</div>
				</div>
			</section>
		</footer>
	);
}
