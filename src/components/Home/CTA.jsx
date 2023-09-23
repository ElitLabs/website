'use client';
import laptop from '@/assets/laptop.png';
import toast from 'react-hot-toast';
import Image from 'next/image';

export default function CallToAction() {
	return (
		<section className="VHcenter mx-auto flex max-w-[80%] flex-row gap-x-10 py-[2.5vh] xl:py-[5vh]">
			<section className="mx-auto flex flex-col items-center justify-center xl:max-w-[85%]">
				<div className="mx-auto flex flex-col items-center justify-center gap-x-16 pt-12 xl:grid-cols-2 xl:pt-24 2xl:grid">
					<span className="3xl:max-w-[75%] flex flex-col">
						<span className="3xl:text-6xl pb-6 text-[3.5rem] font-bold leading-[4.5rem]">
							Rethinking the way people learn to{' '}
							<span className="text-gradient animate-gradient bg-200% bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 font-black">
								code
							</span>
							.
						</span>
						<span className="pb-8 text-xl font-semibold text-neutral-500">
							We are a small group of passionate developers with the mission of
							teaching people. In ways that are intuitive, realistic, and fun.
						</span>
						<button
							onClick={() => toast.error('Coming Soon!')}
							className="bg-500% hover:animate-gradient mx-auto w-full max-w-[80%] rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 p-4 text-3xl font-semibold text-slate-100 transition duration-500 ease-in-out hover:scale-105 xl:mx-0 xl:max-w-[40%]">
							Join Now!
						</button>
					</span>
					<Image
						src={laptop}
						alt="Laptop Image"
						className="w-[50%] xl:w-[75%] 2xl:w-[100%]"
						width={1000}
						height={1000}
					/>
				</div>
			</section>
		</section>
	);
}
