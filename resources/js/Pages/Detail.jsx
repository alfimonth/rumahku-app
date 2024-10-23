import { MdLocationOn } from "react-icons/md"; 
import ProgresBar from "@/Components/ProgresBar";
import useFormatPrice from "@/Hooks/useFormatPrice";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Detail({ home }) {
    console.log(home);
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
            <Head title={home.name} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <img
                    src={home.image}
                    className="w-full aspect-video rounded-xl object-cover"
                    alt={home.name}
                />
                <div className="w-full flex gap-4 my-6 overflow-auto" >
                    <img
                        src={home.image}
                        className=" aspect-square h-24 rounded-xl"
                        alt={home.name}
                    />
                    <img
                        src={home.image}
                        className=" aspect-square h-24 rounded-xl"
                        alt={home.name}
                    />
                    <img
                        src={home.image}
                        className=" aspect-square h-24 rounded-xl"
                        alt={home.name}
                    />
                </div>
                <div className="flex w-full justify-between items-center my-6">
                    <span className="py-1 px-3 bg-primary rounded-xl text-white text-lg">
                        Profit {home.profit} %
                    </span>
                    <span className="text-right text-primary block font-bold align-bottom text-lg">
                        {useFormatPrice(home.price)}
                    </span>{" "}
                </div>
                <h1 className="text-3xl font-bold my-6">{home.name}</h1>
                <div className="flex items-start gap-2 my-6">
                    <span className="text-white bg-primary p-1 rounded-full"><MdLocationOn /></span>
                    <span>{home.location}</span>
                </div>
                <ProgresBar
                    large
                    total={Math.round((home.invested / home.price) * 100)}
                />
                <div className="flex justify-between my-6 items-start">
                    <p className="text-lg">{home.investor} Investor</p>
                    <Link
                        href={route("detail", home.slug)}
                        className="btn btn-primary text-white dark:text-black"
                    >
                        Invest
                    </Link>
                </div>
                <p className="text-xl mt-2">{home.description}</p>

                <div className="h-24"></div>
            </div>
        </AuthenticatedLayout>
    );
}
