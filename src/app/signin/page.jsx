import AuthComponent from "@/components/AuthComponent";
import React from "react";
import signinImage from "@/app/assets/signin.png";
import googleImage from "@/app/assets/google.png";
import gmailImage from "@/app/assets/gmail.png";
import Image from "next/image";
import Link from "next/link";

const Signin = () => {
	return (
		<div className="h-screen">
			<AuthComponent img={signinImage}>
				<form className="max-w-[666px] pb-10">
					<h3 className="text-2xl md:text-[30px] mb-8.5">Sign In</h3>
					<div className="flex flex-wrap md:gap-16 items-center space-x-3 md:space-x-0">
						<button className="w-[calc(50%-0.75rem)] md:w-[294px] flex items-center gap-2 rounded-lg border border-[#5B86E5] py-2 px-2 md:px-8 cursor-pointer">
							<span>
								<Image
									src={googleImage}
									width={36}
									height={36}
									alt="google image"
								/>
							</span>
							<span>Sign up with Google</span>
						</button>
						<button className="w-[calc(50%-0.75rem)] md:w-[270px] flex items-center gap-2 rounded-lg border border-[#5B86E5] py-2 px-2 md:px-8 cursor-pointer">
							<span>
								<Image
									src={gmailImage}
									width={36}
									height={36}
									alt="google image"
								/>
							</span>
							<span>Sign up with Email</span>
						</button>
					</div>

					<div className="pt-21 pb-16.5">
						<p className="font-bold text-3xl text-center text-[#838383]">
							-OR-
						</p>
					</div>

					<div className="grid grid-cols-1 gap-4.5">
						<div className="border-b border-b-[#9D9D9D]">
							<input
								type="email"
								placeholder="Email Address"
								className="border-none outline-0 leading-10 placeholder:text-[#9D9D9D]"
							/>
						</div>
						<div className="border-b border-b-[#9D9D9D]">
							<input
								type="password"
								placeholder="Password"
								className="border-none outline-0 leading-10 placeholder:text-[#9D9D9D]"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-4 px-10 mt-11 pb-5">
						<button className="w-full block text-center leading-10 py-2.5 bg-black text-white rounded-lg cursor-pointer">
							Sign In
						</button>
						<button className="w-full block text-center leading-10 py-2.5 bg-transparent text-[#5B86E5] rounded-lg border border-[#5B86E5] cursor-pointer">
							Register Now
						</button>
						<p className="text-right text-[#838383]">
							<Link href="/forgot-password" className="text-[#5B86E5] ">
								Forget Password?
							</Link>
						</p>
					</div>
				</form>
			</AuthComponent>
		</div>
	);
};

export default Signin;
