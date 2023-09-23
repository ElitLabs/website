import Image from 'next/image';
import ITPImg from '@/assets/courses/python/intro/noJoin.svg';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { TbCodeCircle2, TbBooks } from 'react-icons/tb';
export const metadata = {
	title: 'ElitLabs | Introduction to Python',
};

export default function ITP() {
	return (
		<section>
			<header>
				<h1>Introduction to Python</h1>
				<div className="flex flex-row gap-x-6">
					<span className="flex flex-row items-center justify-center gap-x-2">
						<HiOutlineVideoCamera />
						2h 14m
					</span>
					<span className="flex flex-row items-center justify-center gap-x-2">
						<TbCodeCircle2 />3 Assignments
					</span>
					<span className="flex flex-row items-center justify-center gap-x-2">
						<TbBooks />
						2h 14m
					</span>
				</div>
			</header>
			<Image src={ITPImg} />
			<button className="text-bold rounded-lg bg-[#306998] px-16 py-4 text-2xl text-[#FFD43B]">
				Enroll
			</button>
		</section>
	);
}
