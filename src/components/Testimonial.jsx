"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import testimonial1 from "@/app/assets/testimonial-1.png";
import testimonial2 from "@/app/assets/testimonial-2.png";
import Image from "next/image";

const testimonials = [
	{
		name: "Suzan B.",
		role: "Traveler",
		quote:
			"Items That I ordered were the best investment I ever made. I can't say enough about your quality service.",
		image: testimonial1,
		stars: 5,
	},
	{
		name: "James K.",
		role: "Traveler",
		quote:
			"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
		image: testimonial2,
		stars: 5,
	},
	{
		name: "Megen W.",
		role: "Traveler",
		quote:
			"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
		image: testimonial2,
		stars: 5,
	},
	{
		name: "Suzan B.",
		role: "Traveler",
		quote:
			"Items That I ordered were the best investment I ever made. I can't say enough about your quality service.",
		image: testimonial1,
		stars: 5,
	},
	// add more...
];

function TestimonialCard({ testimonial }) {
	const { image, quote, stars, name, role } = testimonial;

	return (
		<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex gap-8 items-start">
			{/* Image with offset border effect */}
			<div className="relative flex-shrink-0">
				<div className="w-32 h-36 rounded-lg overflow-hidden bg-gray-100">
					<Image
						src={image}
						alt={name}
						className="w-full h-full object-cover object-top"
					/>
				</div>
				{/* Decorative offset border */}
				<div className="absolute -bottom-1.5 -left-1.5 w-32 h-36 rounded-lg border-2 border-gray-200 -z-10" />
			</div>

			{/* Content */}
			<div className="flex-1">
				{/* Quote */}
				<p className="text-gray-800 text-sm leading-relaxed mb-4 italic">
					{quote}
				</p>

				{/* Stars */}
				<div className="flex gap-1 mb-4">
					{Array.from({ length: stars }).map((_, i) => (
						<svg key={i} className="w-5 h-5 fill-amber-400" viewBox="0 0 20 20">
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					))}
				</div>

				{/* Divider + Name */}
				<div className="border-t border-gray-200 pt-4">
					<p className="text-lg font-semibold text-gray-900">{name}</p>
					<p className="text-sm text-gray-500 mt-0.5">{role}</p>
				</div>
			</div>
		</div>
	);
}

export default function TestimonialSlider() {
	return (
		<section className="bg-[#FAFAFA]">
			<div className="container">
				<div className="w-full">
					<Swiper
						modules={[Navigation]}
						navigation
						slidesPerView={3}
						centeredSlides={true}
						spaceBetween={30}
						className="testimonial_slider"
					>
						{testimonials.map((t, i) => (
							<SwiperSlide key={i}>
								<TestimonialCard testimonial={t} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
