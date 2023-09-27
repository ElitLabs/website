import Overview from '@/components/Course/Overview/Overview';
import ITPImg from '@/assets/courses/python/intro/noJoin.svg';

export const metadata = {
	title: 'ElitLabs | Introduction to Python',
};

export default function ITP() {
	return (
		<Overview
			title={'Introduction to Python'}
			description={
				'Irure fugiat nulla ea deserunt elit quis culpa in nostrud culpa. Veniam ex enim reprehenderit amet sit adipisicing quis nisi pariatur et. Et est duis esse commodo tempor consequat sunt aliqua ex irure minim proident. Reprehenderit incididunt nulla nostrud laboris Lorem duis fugiat id quis elit ea labore eu tempor. Ad sit laborum ut anim irure consectetur eiusmod eiusmod ea consequat ex nulla.'
			}
			image={ITPImg}
			button={
				<button className="text-bold mt-4 max-w-[65%] rounded-lg bg-[#306998] px-16 py-4 text-2xl text-[#FFD43B] hover:bg-[#28557c]">
					Enroll
				</button>
			}
			video={'Video Placeholder'}
		/>
	);
}
