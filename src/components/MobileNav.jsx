'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);

	const MotionLink = motion(Link);

	function toggleNav() {
		setIsOpen(!isOpen);
		if (!isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}

	const iconVariants = {
		opened: {
			rotate: 135,
		},
		closed: {
			rotate: 0,
		},
	};

	const menuVariants = {
		opened: {
			top: 0,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.15,
			},
		},
		closed: {
			top: '-100vh',
		},
	};

	const linkVariants = {
		opened: {
			opacity: 1,
		},
		closed: {
			opacity: 0,
			y: 0,
		},
	};

	return (
		<>
			<header className="sticky top-0 z-50 flex w-full flex-row items-center justify-between border-b-2 border-neutral-300/20 bg-white bg-opacity-10 px-[5%] py-[0.5rem] backdrop-blur-lg backdrop-filter md:hidden">
				<Link
					className="font-quicksand text-brand/90 text-[2.125rem] font-semibold"
					href="/">
					ElitLabs
				</Link>
				<motion.div
					variants={iconVariants}
					animate={isOpen ? 'opened' : 'closed'}
					onClick={() => toggleNav()}
					className="z-50 mr-[2.5%] flex cursor-pointer items-center justify-center rounded-full">
					<FiPlus className="text-4xl font-black text-neutral-800" />
				</motion.div>
			</header>

			<motion.nav
				className="fixed top-0 z-40 flex h-full w-full flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter md:hidden"
				initial={false}
				variants={menuVariants}
				animate={isOpen ? 'opened' : 'closed'}>
				<motion.ul className="flex flex-col items-center justify-center gap-y-6 text-3xl font-semibold text-neutral-900">
					<MotionLink
						href="/about"
						variants={linkVariants}
						onClick={() => toggleNav()}>
						About
					</MotionLink>
					<MotionLink
						href="/contact"
						variants={linkVariants}
						onClick={() => toggleNav()}>
						Contact
					</MotionLink>
					<button
						className="rounded-xl bg-gradient-to-tl from-violet-400 to-blue-400 px-6 py-4 drop-shadow-md transition duration-500 ease-in-out hover:scale-105"
						onClick={() => toast.error('Coming Soon!')}>
						Sign Up
					</button>
				</motion.ul>
			</motion.nav>
		</>
	);
}
