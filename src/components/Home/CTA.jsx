'use client';
import laptop from '@/assets/laptop.png';
import toast from 'react-hot-toast';
import Image from 'next/image';

export default function CallToAction() {
	return (
		<section className="mx-auto flex max-w-[80%] flex-row items-center gap-x-10 py-[2.5vh] lg:grid lg:grid-cols-[60%,40%] lg:pt-24 xl:gap-x-16 xl:pb-[1vh] xl:pt-[5vh]">
			<span className="flex flex-col 2xl:max-w-[80%]">
				<span className="3xl:text-[3.75rem] pb-2 text-[3.35rem] font-bold leading-[4.5rem]">
					Rethinking the Way People Learn to{' '}
					<span className="text-gradient animate-gradient bg-350% bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 font-black dark:from-pink-500 dark:via-purple-500 dark:to-pink-500">
						Code
					</span>
				</span>
				<span className="3xl:pb-5 pb-3 text-xl font-semibold text-neutral-500 dark:text-neutral-300 xl:pb-4">
					We are a small group of passionate developers with the mission of
					teaching people in ways that are intuitive, realistic, and fun.
				</span>
				<button
					onClick={() => toast.error('Coming Soon!')}
					className="bg-500% hover:animate-gradient 3xl:w-[35%] mx-auto w-[75%] rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 p-4 text-3xl font-semibold text-neutral-50 transition duration-500 ease-in-out hover:scale-105 sm:mx-0 lg:w-[55%]">
					Join Now!
				</button>
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
