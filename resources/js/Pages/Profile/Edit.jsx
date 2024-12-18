import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { BiChevronLeft } from "react-icons/bi";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="relative">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200 text-center">
                        Edit Profil
                    </h2>
                    <Link
                        href={route("profile")}
                        className="rounded-full items-center absolute -top-1 left-0 hover:bg-slate-200"
                    >
                        <BiChevronLeft className="w-8 h-8" />
                    </Link>
                </div>
            }
        >
            <Head title="Profile" />
            <div className="px-4 mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="w-full"
                />
            </div>
        </AuthenticatedLayout>
    );
}
