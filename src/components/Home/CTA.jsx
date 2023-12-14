'use client';
import laptop from '@/assets/laptop.webp';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';

export default function CallToAction() {
	return (
		<section className="mx-auto flex flex-row items-center gap-x-10 py-[2.5vh] md:grid lg:grid-cols-[55%,45%] lg:pt-24 xl:gap-x-4 xl:pb-[1vh] xl:pt-[5vh]">
			<span className="flex flex-col gap-y-2">
				<span className="pb-2 text-center text-[3.35rem] font-bold leading-[4.5rem] lg:text-left 3xl:text-[3.75rem]">
					Rethinking the Way People Learn to{' '}
					<code className="inline">
						<span className="text-gradient animate-gradient bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-350% font-black dark:from-pink-500 dark:via-purple-500 dark:to-pink-500">
							Code
						</span>
						{/* <span className="animate-cursor -ml-2 font-light">|</span> */}
					</code>
				</span>
				<span className="pb-3 text-center text-2xl font-semibold text-neutral-500 dark:text-neutral-300 lg:text-left xl:pb-4 3xl:pb-5">
					We are a small group of passionate developers with the mission of
					teaching people in ways that are intuitive, realistic, and fun.
				</span>
				<div className="mx-auto flex w-full max-w-[80%] flex-col md:flex-row justify-between text-center text-2xl font-semibold text-neutral-50 lg:mx-0 lg:max-w-full gap-y-4">
					<button
						onClick={() => toast.error('Coming Soon!')}
						className="mx-auto w-[75%] md:w-[47.5%] xl:w-[45%] self-center rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 bg-200% p-4 transition duration-500 ease-in-out hover:scale-105 hover:animate-gradient sm:mx-0 lg:self-start">
						Join Now!
					</button>
					<Link
						href={'/tutor-application'}
						className="mx-auto w-[75%] md:w-[47.5%] xl:w-[45%] self-center rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 lg:from-blue-500 lg:via-violet-500 lg:to-blue-500 bg-200% p-4 transition duration-500 ease-in-out hover:scale-105 hover:animate-gradient sm:mx-0 lg:self-start">
						Tutor Application
					</Link>
				</div>
			</span>
			<Image
				src={laptop}
				alt="Laptop Image"
				className="mx-auto hidden h-auto lg:flex lg:w-[80%] xl:w-[85%] 2xl:w-[100%]"
				width={1000}
				height={1000}
			/>
		</section>
	);
}
