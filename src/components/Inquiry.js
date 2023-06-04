export default function Inquiry({ header, email }) {
	return (
		<div className="lg:ml-[150px] mx-4">
			<p className="text-[#ffd000] leading-10">{header}</p>
			<p className="font-normal text-sm">{email}</p>
		</div>
	);
}
