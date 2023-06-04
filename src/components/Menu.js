import Link from 'next/link';
import { useRouter } from 'next/router';
import 'animate.css';
import styles from '/styles/Hero.module.css';
export default function Menu({ onClick }) {
	const router = useRouter();

	return (
		<main>
			<nav id="navigation" className={styles.sidenav}>
				<main className="animate__animated animate__backInLeft">
					<a className={styles.closebtn} onClick={onClick}>
						&times;
					</a>
					<ul>
						<Link href="/About">
							<a className={router.pathname == '/About' ? 'text-[#ffd000]' : 'text-white'}>
								<li className="p-4 hover:text-[#ffd000]">About</li>
							</a>
						</Link>
						<Link href="/Blog">
							<a className={router.pathname == '/Blog' ? 'text-[#ffd000]' : 'text-white'}>
								<li className="p-4 hover:text-[#ffd000]">Blog</li>
							</a>
						</Link>
						<Link href="/Community">
							<a className={router.pathname == '/Community' ? 'text-[#ffd000]' : 'text-white'}>
								<li className="p-4 hover:text-[#ffd000]">Community</li>
							</a>
						</Link>
						<Link href="/Contact">
							<a className={router.pathname == '/Contact' ? 'text-[#ffd000]' : 'text-white'}>
								<li className="p-4 hover:text-[#ffd000]">Contact us</li>
							</a>
						</Link>

						<Link href="/TalentMobile">
							<a>
								<button
									className="lg:block bg-[#FFD000] py-2 px-5 text-black font-bold text-base rounded w-[50%] h-[40px]"
									id={styles.btneffect}
								>
									Get vetted
								</button>
							</a>
						</Link>
					</ul>
				</main>
			</nav>
		</main>
	);
}
