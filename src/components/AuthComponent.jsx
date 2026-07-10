import Image from "next/image";

const AuthComponent = ({ img, children }) => {
	return (
		<section className="min-h-screen bg-[#f8f8f8]">
			<div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
				<div className="relative hidden lg:block">
					<Image
						className="h-full w-full object-cover"
						src={img}
						alt="Authentication"
						width={500}
						height={700}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/5 to-transparent" />
				</div>
				<div className="flex flex-col justify-start px-6 py-8 sm:px-8 md:px-10 lg:px-12 xl:px-16">
					<div className="flex items-center ">
						<div className=" text-start text-3xl font-semibold tracking-[0.35em] text-[#111] lg:hidden">
							FASCO
						</div>
						<div className="hidden text-4xl font-semibold tracking-[0.35em] text-[#111] lg:block xl:text-[56px]">
							FASCO
						</div>
					</div>

					<div className="flex flex-1 items-center justify-center py-6 lg:py-10">
						<div className="w-full max-w-[700px]">{children}</div>
					</div>

					<p className="mt-4 text-right text-sm text-[#838383]">
						FASCO Terms & Conditions
					</p>
				</div>
			</div>
		</section>
	);
};

export default AuthComponent;
