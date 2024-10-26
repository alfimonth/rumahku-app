import { BiDollar } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import HomeCard from "@/Components/HomeCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Section from "@/Layouts/Section";
import { Head } from "@inertiajs/react";
import MenuButton from "@/Components/MenuButton";
import Search from "@/Components/Search";
import Location from "@/Components/Location";
import Carousel from "@/Components/Carousel";

export default function Home({ homes }) {
    return (
        <AuthenticatedLayout
            activePage={"home"}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        <span className="text-red-500">Rumah</span>
                        <span className="text-slate-500">Ku</span>
                    </h2>
                    <span>Rp 1,000,000</span>
                </div>
            }
        >
            <Head title="Home" />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <Location />
                <Search />
                <Carousel />

                <Section title="Main Menu">
                    <div className="grid justify-between grid-cols-3 gap-4 my-4 text-white md:flex md:justify-start">
                        <MenuButton
                            href={route("explore")}
                            icon={<BiHome />}
                            title="Cari Rumah"
                        />
                        <MenuButton icon={<BiDollar />} className="bg-[#4B9DCB]" title="Topup" />
                        <MenuButton icon={<BiPhone />}  className="bg-[#AF558B]" title="Call Center" />
                    </div>
                </Section>

                <Section title="Untuk Anda">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-8 my-4 justify-between">
                        {homes.map((home) => (
                            <HomeCard home={home} key={home.id} />
                        ))}
                    </div>
                </Section>
                <div className="h-16"></div>
            </div>
        </AuthenticatedLayout>
    );
}
