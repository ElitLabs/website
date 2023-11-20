import {
	SiGithub,
	SiDiscord,
	SiGmail,
	SiInstagram,
	SiTwitter,
} from 'react-icons/si';
import Link from 'next/link';
import ThemeButton from './ThemeButton';

export default function Footer() {
	return (
		<section className="VHcenter flex h-auto w-full rounded-t-lg border-t-2 border-gray-200 p-8 dark:border-gray-700 lg:p-6">
			<footer className="mx-auto flex w-full flex-col gap-x-10 sm:flex-row sm:justify-between lg:max-w-[75%] 3xl:max-w-[60%]">
				<div className="sm:VHcenter flex flex-col gap-x-10 sm:flex-row">
					<div className="flex flex-row justify-between">
						<Link className="text-4xl font-bold sm:text-3xl" href="/">
							2023 ElitLabs
						</Link>{' '}
						<div className="flex flex-col items-center sm:hidden">
							<h1 className="pb-2 text-2xl font-semibold">Theme</h1>
							<ThemeButton />
						</div>
					</div>
					<div className="mb-4 mt-6 flex flex-col gap-x-10 gap-y-4 text-xl font-medium">
						<h1 className="text-3xl font-semibold sm:hidden">Pages</h1>
						<div className="flex flex-col gap-x-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:flex lg:flex-row">
							<Link href="/terms">Terms</Link>
							<Link href="/privacy">Privacy</Link>
							{/* Add when we make Courses page */}
							{/* <Link href="/courses">Courses</Link> */}
							{/* Add when we make tutoring page */}
							{/* <Link href="/tutoring">Tutoring</Link> */}
							<Link href="/about">About</Link>
							<Link href="/contact">Contact</Link>
						</div>
					</div>
				</div>
				<div className="sm:VHcenter flex flex-col">
					<h1 className="my-3 text-2xl font-semibold">Contact us</h1>
					<div className="flex flex-row gap-x-7">
						<Link aria-label="github" href="https://github.com/ElitLabs">
							<SiGithub className="text-[#181717] dark:text-white" size={24} />
						</Link>
						<Link aria-label="discord" href="https://discord.gg/T4ngq47kVD">
							<SiDiscord color="#5865F2" size={24} />
						</Link>
						<Link aria-label="email" href="mailto:team@elitlabs.com">
							<SiGmail color="#EA4335" size={24} />
						</Link>
					</div>
				</div>
			</footer>
		</section>
	);
}
