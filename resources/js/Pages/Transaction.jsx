import HomeCard from "@/Components/HomeCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Section from "@/Layouts/Section";
import { Head } from "@inertiajs/react";
import TransactionCard from "@/Components/TransactionCard";

export default function Transaction({ activePage }) {
    const data = [
        {
            name: "Rumah Mewah Minimalis",
            image: "https://www.adira.co.id/img/frontend/news/thumb_rumahmewahminimalisjpg.jpg",
            price: 1000000,
            progress: 50,
            investor: 5,
            timeRemain: 10,
            date: "2022-01-01 02:30:12",
        },
        {
            name: "Rumah Kecil Tapi Nyaman",
            image: "https://www.adira.co.id/img/frontend/news/thumb_rumahmewahminimalisjpg.jpg",
            price: 500000,
            progress: 25,
            investor: 2,
            timeRemain: 5,
            date: "2022-02-01 01:30:00",
        },
        {
            name: "Rumah Sederhana",
            image: "https://www.adira.co.id/img/frontend/news/thumb_rumahmewahminimalisjpg.jpg",
            price: 2000000,
            progress: 75,
            investor: 10,
            timeRemain: 15,
            date: "2022-03-01 02:45:00",
        },
        {
            name: "Rumah Besar dan Mewah",
            image: "https://www.adira.co.id/img/frontend/news/thumb_rumahmewahminimalisjpg.jpg",
            price: 5000000,
            progress: 90,
            investor: 15,
            timeRemain: 20,
            date: "2022-04-01 03:15:00",
        },
        {
            name: "Rumah Klasik",
            image: "https://www.adira.co.id/img/frontend/news/thumb_rumahmewahminimalisjpg.jpg",
            price: 3000000,
            progress: 60,
            investor: 8,
            timeRemain: 12,
            date: "2022-05-01 02:00:00",
        },
    ];

    return (
        <AuthenticatedLayout activePage={activePage}>
            <Head title="Transaction" />
            <div className="container flex flex-col w-full h-screen gap-4 px-2 mb-[10rem]">
                <h2 className="text-2xl font-bold text-center">
                    Transaction History
                </h2>
                <div id="transactions" className="flex flex-col gap-3 p-3">
                    {data.map((item, index) => (
                        <TransactionCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
