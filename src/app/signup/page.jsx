"use client";
import AuthComponent from "@/components/AuthComponent";
import React from "react";
import signUpImage from "@/app/assets/signup.png";
import googleImage from "@/app/assets/google.png";
import gmailImage from "@/app/assets/gmail.png";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		const formData = new FormData(e.target);
		const data = {};
		for (let [key,value] of formData) {
			data[key]=value;
		}
		if (data.password !== data.confirmPassword) {
			alert("Passwords do not match!");
			return;
		}
		console.log(data);
		e.target.reset();
	};

	return (
		<div>
			<AuthComponent img={signUpImage}>
				<form onSubmit={handleSubmit} className="w-full">
					<div className="mb-8">
						<h3 className="text-2xl font-semibold text-[#111] sm:text-[30px]">
							Create Account
						</h3>
						<p className="mt-2 text-sm text-[#838383]">
							Join FASCO to discover curated fashion and exclusive offers.
						</p>
					</div>

					<div className="flex flex-col gap-3 sm:flex-row">
						<button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#5B86E5] bg-white px-4 py-3 text-sm font-medium text-[#1f1f1f] transition hover:bg-[#f5f8ff]">
							<span>
								<Image
									src={googleImage}
									width={28}
									height={28}
									alt="google image"
								/>
							</span>
							<span>Sign up with Google</span>
						</button>
						<button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#5B86E5] bg-white px-4 py-3 text-sm font-medium text-[#1f1f1f] transition hover:bg-[#f5f8ff]">
							<span>
								<Image
									src={gmailImage}
									width={28}
									height={28}
									alt="gmail image"
								/>
							</span>
							<span>Sign up with Email</span>
						</button>
					</div>

					<div className="my-8 flex items-center gap-3">
						<div className="h-px flex-1 bg-[#d8d8d8]" />
						<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#838383]">
							Or
						</p>
						<div className="h-px flex-1 bg-[#d8d8d8]" />
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						<div className="border-b border-b-[#9D9D9D] pb-2">
							<input
								name="firstName"
								type="text"
								placeholder="First Name"
								className="w-full border-none bg-transparent text-sm outline-none placeholder:text-[#9D9D9D]"
							/>
						</div>
						<div className="border-b border-b-[#9D9D9D] pb-2">
							<input
								name="lastName"
								type="text"
								placeholder="Last Name"
								className="w-full border-none bg-transparent text-sm outline-none placeholder:text-[#9D9D9D]"
							/>
						</div>
						<div className="border-b border-b-[#9D9D9D] pb-2">
							<input
								name="email"
								type="email"
								placeholder="Email Address"
								className="w-full border-none bg-transparent text-sm outline-none placeholder:text-[#9D9D9D]"
							/>
						</div>
						<div className="border-b border-b-[#9D9D9D] pb-2">
							<input
								name="phoneNumber"
								type="text"
								placeholder="Phone Number"
								className="w-full border-none bg-transparent text-sm outline-none placeholder:text-[#9D9D9D]"
							/>
						</div>
						<div className="border-b border-b-[#9D9D9D] pb-2 ">
							<input
								name="password"
								type="password"
								placeholder="Password"
								className="w-full border-none bg-transparent text-sm outline-none placeholder:text-[#9D9D9D]"
							/>
						</div>
						<div className="border-b border-b-[#9D9D9D] pb-2 ">
							<input
								name="confirmPassword"
								type="password"
								placeholder="Confirm Password"
								className="w-full border-none bg-transparent text-sm outline-none placeholder:text-[#9D9D9D]"
							/>
						</div>
					</div>

					<div className="mt-8">
						<button
							type="submit"
							className="w-full rounded-lg bg-black py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1c1c1c]"
						>
							Create Account
						</button>
					</div>
					<p className="mt-5 text-center text-sm text-[#838383]">
						Already have an account?{" "}
						<Link href="/signin" className="font-medium text-[#5B86E5] underline">
							Login
						</Link>
					</p>
				</form>
			</AuthComponent>
		</div>
	);
};

export default Signup;
