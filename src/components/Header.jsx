import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<nav className="py-[70px] bg-white">
			<div className="container">
				<div className="flex items-center justify-between gap-4">
					<div>
						<Link href="/">
							<Image src="/logo.png" alt="logo" width={100} height={100} />
						</Link>
					</div>
					<div className="flex items-center gap-13 justify-end">
						<ul className="flex items-center gap-13">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/about">Deals</Link>
							</li>
							<li>
								<Link href="/contact">New Arrivals</Link>
							</li>
							<li>
								<Link href="/contact">Packages</Link>
							</li>
							<li>
								<Link href="/contact">Sign in</Link>
							</li>
						</ul>
						<Link
							href="/signup"
							className="px-4 py-2 bg-black text-white rounded-md cursor-pointer"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
