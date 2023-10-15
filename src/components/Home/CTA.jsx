'use client';
import laptop from '@/assets/laptop.png';
import toast from 'react-hot-toast';
import Image from 'next/image';

export default function CallToAction() {
	return (
		<section className="mx-auto flex max-w-[80%] flex-row items-center gap-x-10 py-[2.5vh] lg:grid lg:grid-cols-2 lg:pt-24 xl:gap-x-16 xl:py-[5vh]">
			<span className="flex flex-col 2xl:max-w-[75%]">
				<span className="3xl:text-[3.75rem] pb-6 text-[3.35rem] font-bold leading-[4.5rem]">
					Rethinking the Way People Learn to{' '}
					<span className="text-gradient animate-gradient bg-200% bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 font-black">
						Code
					</span>
				</span>
				<span className="pb-8 text-xl font-semibold text-neutral-500">
					We are a small group of passionate developers with the mission of
					teaching people in ways that are intuitive, realistic, and fun.
				</span>
				<button
					onClick={() => toast.error('Coming Soon!')}
					className="bg-500% hover:animate-gradient mx-auto rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 p-4 text-3xl font-semibold text-neutral-50 transition duration-500 ease-in-out hover:scale-105 sm:max-w-[55%] lg:mx-0">
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
