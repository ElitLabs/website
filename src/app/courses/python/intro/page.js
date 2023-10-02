import Overview from '@/components/Course/Overview/Overview';
import ITPImg from '@/assets/courses/python/intro/noJoin.svg';

export const metadata = {
	title: 'ElitLabs | Introduction to Python',
};

export default function ITP() {
	return (
		<Overview
			title={'Introduction to Python'}
			shortDescription={
				'Laboris velit minim aliquip qui adipisicing dolor dolor. Reprehenderit incididunt laboris amet quis ex reprehenderit laboris nostrud ea labore consectetur aute commodo.'
			}
			description={
				'Irure fugiat nulla ea deserunt elit quis culpa in nostrud culpa. Veniam ex enim reprehenderit amet sit adipisicing quis nisi pariatur et. Et est duis esse commodo tempor consequat sunt aliqua ex irure minim proident. Reprehenderit incididunt nulla nostrud laboris Lorem duis fugiat id quis elit ea labore eu tempor. Ad sit laborum ut anim irure consectetur eiusmod eiusmod ea consequat ex nulla.'
			}
			duration={'2h 14m'}
			assignments={'3 Assignments'}
			topics={'6 Topics'}
			image={ITPImg}
			imageAlt={'Introduction to Python'}
			button={`bg-[#306998] text-[#FFD43B] hover:bg-[#28557c]`}
			skills={
				<>
					<VscSourceControl className="h-5/6 w-5/6 self-center justify-self-center stroke-[0.25] text-[#181717]" />
					<p>Source Control Systems</p>
					<PiBracketsCurlyBold className="h-5/6 w-5/6 self-center justify-self-center stroke-[0.5] font-black text-neutral-700" />
					<p>Syntax and Datatypes</p>
					<FaBrain className="h-5/6 w-5/6 self-center justify-self-center stroke-[0.25] text-slate-950" />
					<p>Logic/Problem Solving</p>
					<FaShapes className="h-5/6 w-5/6 self-center justify-self-center stroke-[0.25] text-neutral-800" />
					<p>Object Oriented Programming</p>
				</>
			}
		/>
	);
}
