import Collapsible from '../components/Collapsible';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import styles from '/styles/Hero.module.css';
export default function FAQ() {
	return (
		<div className="font-Roboto">
			<Navigation />
			<h2 className="w-[100%] font-bold text-[30px] lg:text-[50px] text-[#ffd000] mt-20 mx-[25px] lg:mx-[50px]">
				FAQs
			</h2>
			<h2 className="w-[100%] font-bold text-[30px] lg:text-[50px] text-[#ffd000] mt-16 mx-[25px] lg:mx-[50px]">
				ABCD Talent Vetting & Quality
			</h2>

			<div className={styles.preferences}>
				<Collapsible title="DATA COLLECTION" defaultExpanded="true">
					<div className="text-lg">
						<p>Here we collect data from the devs to understand their background and strength.</p>
					</div>
				</Collapsible>
				<Collapsible title="FIRST INTERVIEW" defaultExpanded="false">
					<div>
						<p className="mb-0 text-lg">
							To get to know the candidate and understand their experience level.
						</p>
					</div>
				</Collapsible>
				<Collapsible title="TECHNICAL INTERVIEW" defaultExpanded="false">
					<div className="text-lg">
						<p>At his stage, the developers take 3 tests:</p>
						<ul className="list-disc list-inside mx-[25px]">
							<li>
								A technical test that helps us have an understanding of their actual technical strength.
							</li>
							<li>
								{' '}
								An aptitude test to help us understand their level of dexterity & problem-solving
								ability.
							</li>
							<li>
								{' '}
								A personality test that helps us profile their strengths and understand work situations
								where they are the best fit.
							</li>
						</ul>
					</div>
				</Collapsible>
				<Collapsible title="FINAL STAGE & COMPLETE PROFILING" defaultExpanded="false">
					<div className="text-lg">
						<p>
							Every process and interview leading to this is carefully documented to help us carefully
							create important details and a profile about the developer. This includes:
						</p>
						<ul className="list-disc list-inside mx-[25px]">
							<li>Name and Resume.</li>
							<li>Their Tech Stack or Technology.</li>
							<li>Years of Experience.</li>
							<li>
								Perceived conclusion on their communication skill, leadership ability and level of
								experience.
							</li>
							<li>Test Score from their technical test, aptitude test and personality test.</li>
						</ul>
					</div>
				</Collapsible>
			</div>

			<div className="mt-[35rem]">
				<Footer />
			</div>
		</div>
	);
}
