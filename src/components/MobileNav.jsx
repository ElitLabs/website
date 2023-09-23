'use client';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function MobileNav() {
	const toggleNav = () => {
		document.body.classList.toggle('overflow-hidden');
	};

	return (
		<header className="sticky top-0 z-50 flex w-full min-w-full flex-row items-center justify-between border-b-2 border-neutral-300/20 bg-white bg-opacity-10 px-[5%] py-[0.5rem] backdrop-blur-lg backdrop-filter md:hidden">
			<Link
				href="/"
				passHref
				className="font-quicksand text-brand/90 text-[2.125rem] font-semibold">
				ElitLabs
			</Link>
			<div
				onClick={toggleNav}
				className="z-50 mr-[5%] flex cursor-pointer items-center justify-center rounded-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10 text-4xl text-neutral-800"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					/>
				</svg>
			</div>
			<nav className="fixed top-0 z-40 flex flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter md:hidden">
				<ul className="flex flex-col items-center justify-center gap-y-6 text-3xl font-semibold text-neutral-900">
					<a href="mailto:team@elitlabs.com">Contact Us</a>
					<button
						className="navbutton-bg px-10 py-4 text-3xl font-bold transition duration-500 ease-in-out hover:scale-105"
						onClick={() => toast.error('Coming Soon!')}>
						Sign Up
					</button>
				</ul>
			</nav>
		</header>
	);
}
