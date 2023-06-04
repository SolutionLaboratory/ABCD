import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Blog() {
	return (
		<div>
			<Navigation />
			<h2 className="font-bold text-[30px] lg:text-[50px] text-[#ffd000] mt-20 mx-[25px] lg:mx-[50px]">
				ABCD Blog
			</h2>
			<main className="lg:flex lg:justify-between ">
				<BlogCard
					title="AFRICAN BLOCKCHAIN CENTRE FOR DEVELOPERS"
					date="May 29, 2022"
					text="African Blockchain Centre for Developers - ABCD. 
					Is an organisation focused on providing a full suite of solutions to help 
					organisations build on top of different blockchains/Layer 2 technologies 
					and get up to speed by cutting time by half while ensuring precise quality
					assurance. "
				/>
				<BlogCard
					title="AFRICAN BLOCKCHAIN CENTRE FOR DEVELOPERS"
					date="May 29, 2022"
					text="African Blockchain Centre for Developers - ABCD. 
					Is an organisation focused on providing a full suite of solutions to help 
					organisations build on top of different blockchains/Layer 2 technologies 
					and get up to speed by cutting time by half while ensuring precise quality
					assurance. "
				/>
			</main>
			<Footer />
		</div>
	);
}
