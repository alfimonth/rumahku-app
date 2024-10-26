import { BiLogOut } from "react-icons/bi";
import { BiLockAlt } from "react-icons/bi";
import { BiLock } from "react-icons/bi";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import Section from "@/Layouts/Section";
import MenuButton from "@/Components/MenuButton";
import { BiDollar, BiHome, BiPhone } from "react-icons/bi";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200 text-center">
                    Profil
                </h2>
            }
        >
            <Head title="Profile" />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mx-auto w-fit my-4">
                    <div className="h-36 w-36 rounded-full overflow-hidden bg-primary ">
                        <img
                            src="https://inikpop.com/wp-content/uploads/2018/12/jennie.jpg"
                            alt="profile"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-fit mx-auto flex flex-col  my-2 items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Falah anugrah
                    </h2>
                    <span>falahanugrah@gmail.com</span>
                </div>
                <div className="w-fit mx-auto my-4">
                    <Link href={route("profile.edit")} className="btn btn-primary text-white">
                        Edit Profil
                    </Link>
                </div>
                <hr className="my-6" />

                <Section notitle>
                    <div className="grid justify-between grid-cols-3 gap-4 my-4 text-white md:flex md:justify-start">
                        <MenuButton
                            href={route("profile.edit.password")}
                            icon={<BiLockAlt />}
                            title="Ubah Kata Sandi"
                        />
                        <MenuButton
                            icon={<BiDollar />}
                            className="bg-[#4B9DCB]"
                            title="Log Aktifitas"
                        />
                        <MenuButton
                            icon={<BiPhone />}
                            className="bg-[#AF558B]"
                            title="Call Center"
                        />
                        <MenuButton
                            icon={<BiPhone />}
                            className="bg-[#A187D9]"
                            title="Call Center"
                        />
                        <MenuButton icon={<BiPhone />} title="Call Center" />
                        <MenuButton
                            icon={<BiLogOut />}
                            className="bg-[#4B9DCB]"
                            title="Logout"
                        />
                    </div>
                </Section>
                <div className="h-16"></div>
            </div>
        </AuthenticatedLayout>
    );
}
