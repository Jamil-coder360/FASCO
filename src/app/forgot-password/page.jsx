import AuthComponent from "@/components/AuthComponent";
import React from "react";
import img from "@/app/assets/signin.png";
import googleImage from "@/app/assets/google.png";
import gmailImage from "@/app/assets/gmail.png";
import Image from "next/image";
import Link from "next/link";

const ForgotPassword = () => {
	return (
		<div className="h-screen">
			<AuthComponent img={img}>
				<form className="max-w-[666px] pb-10">
					<h3 className="text-2xl md:text-[30px] mb-8.5 pt-10 md:pt-50">Forgot Password</h3>

					<div className="grid grid-cols-2 gap-4.5">
						<div className="border-b border-b-[#9D9D9D]">
							<input
								type="text"
								placeholder="First Name"
								className="border-none outline-0 leading-10 placeholder:text-[#9D9D9D]"
							/>
						</div>
						<div className="border-b border-b-[#9D9D9D]">
							<input
								type="text"
								placeholder="Last Name "
								className="border-none outline-0 leading-10 placeholder:text-[#9D9D9D]"
							/>
						</div>
						<div className="border-b border-b-[#9D9D9D]">
							<input
								type="email"
								placeholder="Email Address"
								className="border-none outline-0 leading-10 placeholder:text-[#9D9D9D]"
							/>
						</div>
						<div className="border-b border-b-[#9D9D9D]">
							<input
								type="text"
								placeholder="Phone Number"
								className="border-none outline-0 leading-10 placeholder:text-[#9D9D9D]"
							/>
						</div>
					</div>

					<div className="flex items-center justify-center px-10 mt-11 pb-5">
						<button className="w-full block text-center leading-10 py-2.5 bg-black text-white rounded-lg cursor-pointer">
							Send Confirmation Code
						</button>
					</div>
					<p className="text-center text-[#838383]">
						Already have an account?{" "}
						<Link href="/signin" className="text-[#5B86E5] underline">
							Login
						</Link>
					</p>
				</form>
			</AuthComponent>
		</div>
	);
};

export default ForgotPassword;
