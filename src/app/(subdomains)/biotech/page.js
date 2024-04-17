import CallToAction from '@/components/biotech/CTA';

export const metadata = {
	title: 'ElitLabs | Biotech',
};

export default function Biotech() {

	return (
		<div className="mx-auto flex w-full flex-col items-center justify-center py-10 lg:max-w-[70%]">
			<CallToAction />
		</div>
	);
}
