import {XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="bg-black relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div aria-hidden="true" className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"></div>
            <div className="text-white flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-white text-sm leading-6">
                    <strong className="font-semibold">CODSOFT</strong>
                    <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
                        <circle r={1} cx={1} cy={1}/>
                    </svg>
                    Web Development Internship Project 3 Task 1 Building an e-commerce web app.
                </p>
                <Link
                    href="https://forms.gle/yeU4BUGeeBAUxtMp8"
                    className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    Register now <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
            <div className="flex flex-1 justify-end">
                <button type="button" className="text-white -m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span className="tex sr-only">Dismiss</span>
                    <XMarkIcon aria-hidden="true" className="h-5 w-5 text-gray-400"/>
                </button>
            </div>
        </div>
    )

}