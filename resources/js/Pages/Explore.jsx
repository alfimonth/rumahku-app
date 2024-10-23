import HomeCard from "@/Components/HomeCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Section from "@/Layouts/Section";
import { Head } from "@inertiajs/react";
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
            <Head title="Cari Rumah" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Location />
                <Search />

                <Section notitle>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-8 my-4 justify-between mt-10">
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
