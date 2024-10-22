import HomeCard from "@/Components/HomeCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Section from "@/Layouts/Section";
import { Head } from "@inertiajs/react";
import MenuButton from "@/Components/MenuButton";
import {  MdCall, MdHome, MdAttachMoney } from "react-icons/md";
import Search from "@/Components/Search";
import Location from "@/Components/Location";

export default function Home({ homes }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        <span className="text-red-500">Rumah</span>
                        <span className="text-slate-500">Ku</span>
                    </h2>
                    <span>Rp 1,000,000</span>
                </div>
            }
        >
            <Head title="Home" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Location />
                <Search />

                {/* <!--Start Carousel--> */}
                <div className="h-40 md:h-64 w-full rounded-xl overflow-hidden">
                    <div className="carousel w-full h-full md:h-64">
                        <div
                            id="slide1"
                            className="carousel-item relative w-full bg-green h-full"
                        >
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="w-full object-cover"
                            />
                            {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide2" className="btn btn-circle">
                                    ❯
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <!--End Carousel--> */}

                {/* <!-- Start Main Menu --> */}

                <Section title="Main Menu">
                    <div className="grid grid-cols-3 gap-4 my-4 text-white justify-between md:flex md:justify-start">
                        <MenuButton href={route("explore")} icon={<MdHome />} className="bg-primary" title="Cari Rumah" />
                        <MenuButton icon={<MdAttachMoney />} className="bg-[#4B9DCB]" title="Topup" />
                        <MenuButton icon={<MdCall />} className="bg-[#AF558B]" title="Call Center" />
                    </div>
                </Section>
                {/* <!-- End Main Menu --> */}

                {/* <!-- Start For Your Page --> */}
                <Section title="Untuk Anda">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4 justify-between">
                        {homes.map((home) => (
                            <HomeCard home={home} key={home.id} />
                        ))}
                    </div>
                </Section>
                {/* <!-- End For Your Page --> */}
                <div className="h-24"></div>
            </div>
        </AuthenticatedLayout>
    );
}
