'use client';
import laptop from '@/assets/laptopbio.webp';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';

export default function CallToAction() {
	return (
		<section className="mx-auto flex flex-row items-center gap-x-20 md:grid lg:grid-cols-[60%,40%] lg:pt-12 xl:gap-x-15 xl:pb-[1vh]">
			<span className="flex flex-col gap-y-2">
				<span className="pb-2 text-center text-[3.35rem] font-bold leading-[4.5rem] lg:text-left 3xl:text-[3.75rem]">
					<h1 className="text-gradient animate-sgradient bg-gradient-to-l from-green-600 via-blue-600 to-green-600 bg-500% text-center font-mono text-[3rem] font-black uppercase tracking-wide dark:from-green-500 dark:via-blue-500 dark:to-green-500 lg:text-[3.125rem]">
						Learn the basics of {' '}
					</h1>
					<code className="inline">
						<span className="text-gradient animate-gradient bg-gradient-to-r from-green-600 via-purple-600 to-green-600 bg-350% font-black dark:from-green-500 dark:via-purple-500 dark:to-green-500">
							Biotechnology
						</span>
						{/* <span className="animate-cursor -ml-2 font-light">|</span> */}
					</code>
				</span>
				<span className="pb-3 text-center text-2xl font-semibold text-neutral-500 dark:text-neutral-300 lg:text-left xl:pb-4 3xl:pb-5">
					We are offering beginner level courses for middle and high school students to learn the basics of biotech. Explore the interdisciplinary field that combines biology and engineering!
				</span>
				<div className="mx-auto flex w-full max-w-[80%] flex-col md:flex-row justify-between text-center text-2xl font-semibold text-neutral-50 lg:mx-0 lg:max-w-full gap-y-4">
					<Link
						href={'/student-signup'}
						className="mx-auto w-[75%] md:w-[47.5%] xl:w-[45%] self-center rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-blue-500 bg-200% p-4 transition duration-500 ease-in-out hover:scale-105 hover:animate-gradient sm:mx-0 lg:self-start">
						Join Now!
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
