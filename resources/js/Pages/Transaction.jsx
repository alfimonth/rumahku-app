import HomeCard from "@/Components/HomeCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Section from "@/Layouts/Section";
import { Head } from "@inertiajs/react";
import TransactionCard from "@/Components/TransactionCard";
import { Inertia } from "@inertiajs/inertia";
import ProductInspect from "@/Components/ProductInspect";
import { useState, useEffect } from "react";

export default function Transaction({ activePage }) {
    const [detail, setDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const data = [
        {
            id: 6,
            name: "Rumah Modern Minimalis",
            image: "https://www.adira.co.id/img/frontend/news/thumb_rumahmewahminimalisjpg.jpg",
            price: 2000000,
            investamout: 2000,
            progress: 50,
            investor: 8,
            timeRemain: 12,
            date: "2022-06-01 02:30:00",
            description:
                "Rumah modern minimalis ini memiliki desain yang sangat elegan dan modern. Rumah ini memiliki 3 kamar tidur, 2 kamar mandi, dan 1 garasi. Rumah ini juga dilengkapi dengan peralatan rumah tangga yang sangat lengkap.",
        },
        {
            id: 7,
            name: "Rumah Tipe 36",
            image: "https://www.adira.co.id/img/frontend/news/thumb_rumahmewahminimalisjpg.jpg",
            price: 1500000,
            investamout: 1300,
            progress: 25,
            investor: 5,
            timeRemain: 8,
            date: "2022-07-01 01:45:00",
            description:
                "Rumah tipe 36 ini memiliki luas tanah 36m2 dan luas bangunan 24m2. Rumah ini memiliki 2 kamar tidur, 1 kamar mandi, dan 1 garasi. Rumah ini sangat cocok untuk anda yang ingin memiliki rumah yang kecil tapi nyaman.",
        },
        {
            id: 8,
            name: "Rumah Sederhana Tipe 21",
            image: "https://www.adira.co.id/img/frontend/news/thumb_rumahmewahminimalisjpg.jpg",
            price: 1000000,
            investamout: 10000,
            progress: 10,
            investor: 3,
            timeRemain: 5,
            date: "2022-08-01 02:00:00",
            description:
                "Rumah sederhana tipe 21 ini memiliki luas tanah 21m2 dan luas bangunan 16m2. Rumah ini memiliki 1 kamar tidur, 1 kamar mandi, dan 1 garasi. Rumah ini sangat cocok untuk anda yang ingin memiliki rumah yang kecil tapi nyaman.",
        },
        {
            id: 9,
            name: "Rumah Besar Tipe 70",
            image: "https://www.adira.co.id/img/frontend/news/thumb_rumahmewahminimalisjpg.jpg",
            price: 5000000,
            investamout: 20000,
            progress: 80,
            investor: 12,
            timeRemain: 20,
            date: "2022-09-01 03:00:00",
            description:
                "Rumah besar tipe 70 ini memiliki luas tanah 70m2 dan luas bangunan 56m2. Rumah ini memiliki 4 kamar tidur, 2 kamar mandi, dan 2 garasi. Rumah ini sangat cocok untuk anda yang ingin memiliki rumah yang besar dan nyaman.",
        },
        {
            id: 10,
            name: "Rumah Klasik Tipe 45",
            image: "https://www.adira.co.id/img/frontend/news/thumb_rumahmewahminimalisjpg.jpg",
            price: 2500000,
            investamout: 1000000,
            progress: 70,
            investor: 10,
            timeRemain: 18,
            date: "2022-10-01 02:15:00",
            description:
                "Rumah klasik tipe 45 ini memiliki luas tanah 45m2 dan luas bangunan 36m2. Rumah ini memiliki 3 kamar tidur, 2 kamar mandi, dan 1 garasi. Rumah ini sangat cocok untuk anda yang ingin memiliki rumah yang klasik dan nyaman.",
        },
    ];

    const handleInspect = (prop) => {
        setDetail(prop);
        document.getElementById("my_modal_1").showModal();
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <AuthenticatedLayout activePage={activePage}>
            <ProductInspect detail={detail} />
            <Head title="Transaction" />
            <div className="container flex flex-col w-full h-screen gap-4 px-2 mb-[10rem]">
                <h2 className="text-2xl font-bold text-center">
                    My Transaction History
                </h2>
                <div id="transactions" className="flex flex-col gap-3 p-3">
                    <div class="flex w-full flex-col gap-4">
                        {isLoading ? (
                            <div class="flex items-center gap-10 flex-col">
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        id="skeleton"
                                        className="flex flex-row items-center gap-3"
                                    >
                                        <div className="w-16 h-16 rounded-full skeleton shrink-0"></div>
                                        <div className="flex flex-col gap-4">
                                            <div className="h-4 skeleton w-52"></div>
                                            <div className="w-64 h-4 skeleton"></div>
                                        </div>
                                    </span>
                                ))}
                            </div>
                        ) : (
                            data.map((item, index) => (
                                <TransactionCard
                                    key={index}
                                    handleInspect={handleInspect}
                                    {...item}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
