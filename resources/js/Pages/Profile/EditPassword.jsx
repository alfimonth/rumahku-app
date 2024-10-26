import { BiChevronLeft } from "react-icons/bi";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="relative">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200 text-center">
                        Edit Password
                    </h2>
                    <Link href={route("profile")} className="rounded-full items-center absolute -top-1 left-0 hover:bg-slate-200">
                        <BiChevronLeft className="w-8 h-8" />
                    </Link>
                </div>
            }
        >
            <Head title="Profile" />
            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                <UpdatePasswordForm className="max-w-xl" />
            </div>
        </AuthenticatedLayout>
    );
}
