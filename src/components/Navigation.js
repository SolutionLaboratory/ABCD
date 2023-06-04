import Image from 'next/image';
import ABCD from '/public/ABCD.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Talent from '../components/Talent';
import styles from '/styles/Hero.module.css';
import { useState } from 'react';
import { MenuIco } from './icons';
import Menu from './Menu';
import Register from '../pages/Register';
export default function Navigation() {
	const router = useRouter();
	const [ State, setState ] = useState(false);
	function openNav() {
		setState(!State);
	}
	function closeNav() {
		setState(!State);
	}

	const [ Form, setForm ] = useState(false);
	function onclick() {
		setForm(!Form);
	}

	function onClose() {
		setForm(!Form);
	}
	return (
		<div>
			<nav className="flex justify-between mx-[25px] lg:mx-[50px] mt-10 items-center font-roboto">
				<Link href="/">
					<a>
						<Image strategy="lazyOnload" src={ABCD} height={35} width={150} layout="fixed" alt="ABCD" />
					</a>
				</Link>

				<div className="lg:hidden cursor-pointer">
					<MenuIco onClick={openNav} />
				</div>
				{State && <Menu onClick={closeNav} />}
				<ul className="lg:flex hidden">
					<Link href="/About">
						<a className={router.pathname == '/About' ? 'text-[#ffd000]' : 'text-white'}>
							<li className="px-4 hover:text-[#ffd000] font-roboto">About</li>
						</a>
					</Link>
					<Link href="/Blog">
						<a className={router.pathname == '/Blog' ? 'text-[#ffd000]' : 'text-white'}>
							<li className="px-4 hover:text-[#ffd000] font-roboto">Blog</li>
						</a>
					</Link>
					<Link href="/Community">
						<a className={router.pathname == '/Community' ? 'text-[#ffd000]' : 'text-white'}>
							<li className="px-4 hover:text-[#ffd000]  font-roboto">Community</li>
						</a>
					</Link>

					<Link href="/Contact">
						<a className={router.pathname == '/Contact' ? 'text-[#ffd000]' : 'text-white'}>
							<li className="px-4 hover:text-[#ffd000] font-roboto">Contact us</li>
						</a>
					</Link>
				</ul>
				<a className="hidden lg:block">
					<button
						className="text-center lg:block bg-[#FFD000] py-2 px-5 text-black 
			font-bold font-roboto text-base rounded w-[130px] h-[40px]
			hover:bg-transparent hover:border hover:border-[#ffd000] hover:text-white hover:shadow-xl"
						id={styles.btneffect}
						onClick={onclick}
					>
						Get vetted
					</button>
				</a>
			</nav>
			{Form && (
				<Register onChange={onClose} className="relative top-[400px]">
					<div className="mx-auto mt-12">
						<button className=" hover:bg-[#ffd000] text-center font-Roboto hover:text-black ml-[25px] text-[#ffd000] border border-[#ffd000] w-[91%] mr-[25px] p-[8px]">
							Talent
						</button>
					</div>
					<Talent />
				</Register>
			)}
		</div>
	);
}
