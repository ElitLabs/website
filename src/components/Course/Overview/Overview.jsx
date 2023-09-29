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
	return (
		<section className="mx-auto flex max-w-[45%] grid-flow-row grid-cols-2 flex-col justify-center gap-y-10 py-4 lg:grid lg:pt-10">
			<div className="col-span-2 grid w-full grid-cols-2 flex-col justify-center gap-y-2">
				<div className="flex flex-col justify-between">
					<div>
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
						<p>
							Laboris velit minim aliquip qui adipisicing dolor dolor.
							Reprehenderit incididunt laboris amet quis ex reprehenderit
							laboris nostrud ea labore consectetur aute commodo.
						</p>
					</div>
					<button
						className={`text-bold mt-4 rounded-lg bg-[${button.bgColor}] w-2/5 px-16 py-4 text-2xl text-[${button.textColor}] hover:bg-[${button.bgHoverColor}]`}>
						Enroll
					</button>
				</div>
				<Image
					src={image}
					alt={imageAlt}
					className="h-auto w-4/5 self-center justify-self-end drop-shadow-sm"
				/>
			</div>

			<div className="mx-auto flex  flex-col gap-y-2 lg:mx-0 ">
				<h1 className="text-center text-3xl font-semibold lg:text-left 2xl:text-4xl">
					About This Course
				</h1>
				<p className="text-xl">{description}</p>
			</div>
			<div className="mx-auto flex w-[95%] flex-col gap-y-2">
				<h1 className="mx-auto text-3xl font-semibold lg:mx-0 2xl:text-4xl">
					Skills Covered
				</h1>
				<div className="mx-auto grid grid-cols-[5%,45%,5%,45%] justify-center gap-x-2 gap-y-2 text-xl font-semibold lg:mx-0 lg:max-w-[80%]">
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
			<Timeline className="col-span-2" />
		</section>
	);
}
