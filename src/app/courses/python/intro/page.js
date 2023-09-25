import Image from 'next/image';
import ITPImg from '@/assets/courses/python/intro/noJoin.svg';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { TbCodeCircle2, TbBooks } from 'react-icons/tb';
export const metadata = {
	title: 'ElitLabs | Introduction to Python',
};

export default function ITP() {
	return (
		<section className="py-6">
			<div className="mx-auto grid max-w-[90%] grid-cols-2 grid-rows-1 items-center justify-center">
				<div className="flex flex-col gap-y-10">
					<div className="flex w-max max-w-[100%] flex-col justify-center gap-y-2">
						<h1 className="text-4xl font-bold">Introduction to Python</h1>
						<div className="flex flex-row justify-between gap-x-6">
							<span className="flex flex-row items-center justify-center gap-x-2">
								<HiOutlineVideoCamera />
								2h 14m
							</span>
							<span className="flex flex-row items-center justify-center gap-x-2">
								<TbCodeCircle2 /> 3 Assignments
							</span>
							<span className="flex flex-row items-center justify-center gap-x-2">
								<TbBooks />6 Topics
							</span>
						</div>
						<Image src={ITPImg} className="drop-shadow-sm" />
						<button className="text-bold mt-4 max-w-[65%] rounded-lg bg-[#306998] px-16 py-4 text-2xl text-[#FFD43B] hover:bg-[#28557c]">
							Enroll
						</button>
					</div>
					<div className="flex max-w-[75%] flex-col gap-y-2">
						<h1 className="text-3xl font-semibold">About This Course</h1>
						<p>
							Irure fugiat nulla ea deserunt elit quis culpa in nostrud culpa.
							Veniam ex enim reprehenderit amet sit adipisicing quis nisi
							pariatur et. Et est duis esse commodo tempor consequat sunt aliqua
							ex irure minim proident. Reprehenderit incididunt nulla nostrud
							laboris Lorem duis fugiat id quis elit ea labore eu tempor. Ad sit
							laborum ut anim irure consectetur eiusmod eiusmod ea consequat ex
							nulla.
						</p>
					</div>
				</div>
				<div className="flex aspect-video h-auto w-full max-w-[75%] items-center justify-center justify-self-end rounded-xl bg-neutral-400">
					<h2>Video Placeholder</h2>
				</div>
			</div>
		</section>
	);
}
