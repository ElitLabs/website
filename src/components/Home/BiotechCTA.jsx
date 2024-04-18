'use client';
import Link from 'next/link';

export default function BiotechCTA() {

  function redirect() {
		if (typeof window !== "undefined") {
			window.location.host = "biotech." + window.location.host;
		}
	}

	return (
		<>
      <span className="pb-3 text-center text-2xl mt-10 font-semibold text-neutral-500 dark:text-neutral-300 lg:text-left xl:pb-1 3xl:pb-2">
          Interested in something else? We also offer:
      </span>
      <div className="mx-auto flex w-full max-w-[80%] flex-col md:flex-row justify-between text-center lg:mx-0 lg:max-w-full gap-y-4 text-neutral-50">
        <button
          onClick={() => redirect()}
          className="mx-auto w-[75%] md:w-[47.5%] xl:w-[45%] self-center rounded-xl bg-gradient-to-r from-green-500 via-blue-500 to-green-500 lg:from-blue-500 lg:via-green-500 lg:to-blue-500 bg-200% p-4 transition duration-500 ease-in-out hover:scale-105 hover:animate-gradient sm:mx-0 lg:self-start">
          Biotech Courses
        </button> 
      </div>
    </>
	);
}
