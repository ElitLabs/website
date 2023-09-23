import { SiGithub, SiDiscord, SiGmail, SiInstagram } from 'react-icons/si';
import Link from 'next/link';

export default function Footer() {
	return (
		<section className="VHcenter flex h-auto w-full rounded-t-lg border-t-2 border-gray-200 p-8 lg:p-6">
			<footer className="mx-auto flex w-full flex-col gap-x-10 md:max-w-[90%] md:flex-row md:justify-between">
				<div className="md:VHcenter flex flex-col gap-x-10 md:flex-row">
					<Link
						className="text-4xl font-bold text-neutral-800 md:text-3xl"
						href="/">
						2023 ElitLabs
					</Link>
					<div className="mb-4 mt-6 flex flex-col gap-x-10 gap-y-4 text-xl font-medium text-neutral-800">
						<h1 className="text-3xl font-semibold md:hidden">Pages</h1>
						<div className="flex flex-col gap-x-5 md:grid md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row">
							<Link href="terms">Terms</Link>
							<Link href="privacy">Privacy</Link>
							<Link href="contact">Contact</Link>
							<Link href="about">About</Link>
						</div>
					</div>
				</div>
				<div className="md:VHcenter flex flex-col">
					<h1 className="my-3 text-2xl font-semibold text-neutral-800">
						Contact us
					</h1>
					<div className="flex flex-row gap-x-7">
						<Link href="https://github.com/ElitLabs">
							<SiGithub color="#181717" size={24} />
						</Link>
						<Link href="https://discord.gg/usjptSSpkr">
							<SiDiscord color="#5865F2" size={24} />
						</Link>
						<Link href="mailto:team.elitlabs@gmail.com">
							<SiGmail color="#EA4335" size={24} />
						</Link>
						<Link href="https://instagram.com/elit_labs">
							<SiInstagram color="#E4405F" size={24} />
						</Link>
					</div>
				</div>
			</footer>
		</section>
	);
}
