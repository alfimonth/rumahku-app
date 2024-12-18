import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-6 align-middle bg-gray-100 sm:pt-0 dark:bg-gray-900">
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
                rel="stylesheet"
            />

            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
                </Link>
            </div>

            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                {children}
            </div>
        </div>
    );
}
