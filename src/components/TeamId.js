import { BlackLinkedIn, BlackTwitter } from './icons';

export default function TeamId({ picture, Name, Position }) {
	return (
		<div className="mr-[4px] w-full lg:w-[270px] bg-white p-[4px]">
			<figure>{picture}</figure>
			<p className="text-black text-lg font-semibold mx-[20px] mt-12">{Name}</p>
			<p className="text-black text-sm font-semibold mx-[20px]">{Position}</p>
			<div className="flex items-center ml-[60%] mt-4">
				<BlackLinkedIn />
				<div className="ml-[6px]">
					<BlackTwitter />
				</div>
			</div>
		</div>
	);
}
