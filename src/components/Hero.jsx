import Image from "next/image";
import React from "react";

import heroLeft from "@/app/assets/hero-left.png";
import heroTop from "@/app/assets/hero-top.png";
import heroBottom from "@/app/assets/hero-bottom.png";
import heroRight from "@/app/assets/hero-right.png";
import Link from "next/link";

const Hero = () => {
	return (
		<section>
			<div className="container">
				<div className="grid grid-cols-3 gap-9">
					<div>
						<Image src={heroLeft} alt="hero" width={500} height={500} />
					</div>
					<div className="flex flex-col items-center justify-between gap-9">
						<div>
							<Image src={heroTop} alt="hero" width={500} height={500} />
						</div>
						<div>
							<p className="text-center flex flex-col items-center justify-center gap-2 leading-none font-poppins">
								<strong className="text-[90px] text-heading uppercase">
									ULTIMATE
								</strong>
								<span className="text_outline text-[187px] font-medium">
									SALE
								</span>
								<span>NEW COLLECTION</span>
							</p>
							<div className="flex items-center justify-center mt-6">
								<Link
									href="/shop"
									className="w-[206px] text-center px-4 py-2 bg-black text-white rounded-md cursor-pointer"
								>
									Shop Now
								</Link>
							</div>
						</div>
						<div>
							<Image src={heroBottom} alt="hero" width={500} height={500} />
						</div>
					</div>
					<div>
						<Image src={heroRight} alt="hero" width={500} height={500} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
