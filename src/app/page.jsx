import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";
import brand1 from "@/app/assets/brand (1).png";
import brand2 from "@/app/assets/brand (2).png";
import brand3 from "@/app/assets/brand (3).png";
import brand4 from "@/app/assets/brand (4).png";
import brand5 from "@/app/assets/brand (5).png";
import TestimonialSlider from "@/components/Testimonial";
import Deal from "@/components/Deal";
import Arival from "@/components/Arival";
import Subscribe from "@/components/Subscribe";
import Gallery from "@/components/Gallery";
import Slide from "@/components/Slide";
import Features from "@/components/Features";

const brandData = [
	{
		id: 1,
		image: brand1,
	},
	{
		id: 2,
		image: brand2,
	},
	{
		id: 3,
		image: brand3,
	},
	{
		id: 4,
		image: brand4,
	},
	{
		id: 5,
		image: brand5,
	},
];

const Brand = () => {
	return (
		<section className="py-20">
			<div className="container">
				<div className="grid grid-cols-5 gap-2">
					{brandData.map((brand) => (
						<BrandCard key={brand.id} image={brand.image} />
					))}
				</div>
			</div>
		</section>
	);
};

const BrandCard = ({ image }) => {
	return (
		<div className="flex items-center justify-center">
			<Image src={image} alt="brand" width={200} height={100} />
		</div>
	);
};

const Home = () => {
	return (
		<>
			<Hero />
			<Brand />
			<Deal />
			<Arival />
			<Slide />
			<Features />
			<Gallery />
			<TestimonialSlider />
			<Subscribe />
		</>
	);
};

export default Home;
