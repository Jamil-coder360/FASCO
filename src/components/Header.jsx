"use client"
import { useContext } from "react";
import { Search, ShoppingBag, Star, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

const Header = () => {
	const { user, logout } = useContext(AuthContext);
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await logout();
			router.push("/signin");
		} catch (error) {
			console.error("Logout failed", error);
		}
	};

	return (
		<nav className="py-17.5 bg-white">
			<div className="container mx-auto">
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
							{!user && (
							<li>
								<Link href="/signin">Sign in</Link>
							</li>
							)}
						</ul>
						{!user && (
						<Link
							href="/signup"
							className="px-4 py-2 bg-black text-white rounded-md cursor-pointer"
						>
							Sign Up
						</Link>
						)}
						{user && (
						<button
							onClick={handleLogout}
							className="px-4 py-2 bg-black text-white rounded-md cursor-pointer"
						>
							Logout
						</button>
						)}
					</div>

					{/* user exists */}
					{user && (
						<div className="flex items-center gap-4">
							<Search />
							<User />
							<Star />
							<ShoppingBag />
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Header;
