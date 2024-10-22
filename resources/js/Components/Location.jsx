import Section from "@/Layouts/Section";
import { MdLocationOn } from "react-icons/md";

export default function Location() {
    return (
        <Section notitle>
            <div className="flex justify-between items-center font-bold">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 text-3xl dark:text-gray-800 text-white rounded-full bg-accent flex items-center justify-center ">
                        <MdLocationOn />
                    </div>
                    <div>
                        <h3 className="text-sm">Jawa Tengah</h3>
                        <h2 className="text-lg">Surakarta</h2>
                    </div>
                </div>
                <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m9 5 7 7-7 7"
                    />
                </svg>
            </div>
        </Section>
    );
}
