import Image from 'next/image';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { TbCodeCircle2, TbBooks } from 'react-icons/tb';
import Timeline from './Timeline';
import { VscSourceControl } from 'react-icons/vsc';
import { FaBrain, FaShapes } from 'react-icons/fa';
import { PiBracketsCurlyBold } from 'react-icons/pi';

export default function Overview({
	title,
	description,
	duration,
	assignments,
	topics,
	image,
	imageAlt,
	button,
	video,
}) {
	button += ' text-bold rounded-lg w-2/5 px-16 py-4 text-2xl';
	return (
		<section className="3xl:max-w-[45%] mx-auto flex flex-col justify-center gap-y-10 py-4 lg:pt-10 xl:max-w-[75%]">
			<div className="col-span-2 grid w-full grid-cols-[55%,40%] flex-col">
				<div className="flex flex-col justify-between">
					<div className="flex h-full flex-col">
						<h1 className="pb-2 text-4xl font-bold">{title}</h1>
						<div className="flex flex-row text-xl lg:gap-x-6">
							<span className="flex flex-row items-center justify-center gap-x-2">
								<HiOutlineVideoCamera />
								{duration}
							</span>
							<span className="flex flex-row items-center justify-center gap-x-2">
								<TbCodeCircle2 />
								{assignments}
							</span>
							<span className="flex flex-row items-center justify-center gap-x-2">
								<TbBooks />
								{topics}
							</span>
						</div>
						<p className="pt-4 text-xl">
							Laboris velit minim aliquip qui adipisicing dolor dolor.
							Reprehenderit incididunt laboris amet quis ex reprehenderit
							laboris nostrud ea labore consectetur aute commodo.
						</p>
					</div>
					<button className={button}>Enroll</button>
				</div>
				<Image
					src={image}
					alt={imageAlt}
					className="h-auto w-full self-center justify-self-end drop-shadow-sm"
				/>
			</div>
			<div className="grid grid-cols-[55%,5%,35%]">
				<div className="mx-auto flex  flex-col gap-y-2 lg:mx-0 ">
					<h1 className="text-center text-3xl font-semibold lg:text-left 2xl:text-4xl">
						About This Course
					</h1>
					<p className="text-xl">{description}</p>
				</div>
				<div className="col-start-3 flex w-full flex-col gap-y-2">
					<h1 className="text-3xl font-semibold 2xl:text-4xl">
						Skills Covered
					</h1>
					<div className="grid grid-cols-[10%,90%] justify-center gap-x-2 gap-y-2 text-xl font-semibold">
						<VscSourceControl className="h-5/6 w-5/6 self-center justify-self-center stroke-[0.25] text-[#181717]" />
						<p>Source Control Systems</p>
						<PiBracketsCurlyBold className="h-5/6 w-5/6 self-center justify-self-center stroke-[0.5] font-black text-neutral-700" />
						<p>Syntax and Datatypes</p>
						<FaBrain className="h-5/6 w-5/6 self-center justify-self-center stroke-[0.25] text-slate-950" />
						<p>Logic/Problem Solving</p>
						<FaShapes className="h-5/6 w-5/6 self-center justify-self-center stroke-[0.25] text-neutral-800" />
						<p>Object Oriented Programming</p>
					</div>
				</div>
			</div>

			<Timeline />
		</section>
	);
}
