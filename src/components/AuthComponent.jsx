import Image from "next/image";

const AuthComponent = ({ img, children }) => {
	return (
		<section>
			<div className="grid md:grid-cols-[8fr_9fr]">
				<div>
					<Image
						className="w-full h-full max-h-screen object-cover"
						src={img}
						alt="Authentication"
						width={500}
						height={300}
					/>
				</div>
				<div className="py-10 px-4 md:pl-23.25 md:pt-23.5 relative">
					<h2 className="text-4xl md:text-[66px] font-normal">FASCO</h2>
					{children}
					<p className="text-right text-base mt-4 absolute bottom-8 right-20 z-10">
						FASCO Terms & Conditions
					</p>
				</div>
			</div>
		</section>
	);
};

export default AuthComponent;
