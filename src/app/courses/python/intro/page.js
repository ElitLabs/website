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
			duration={'2h 14m'}
			assignments={'3 Assignments'}
			topics={'6 Topics'}
			image={ITPImg}
			button={{
				bgColor: '#306998',
				bgHoverColor: '#28557c',
				textColor: '#FFD43B',
			}}
		/>
	);
}
