import { Link } from "@inertiajs/react";
import ProgresBar from "./ProgresBar";
import { useState } from "react";
import useFormatPrice from "@/Hooks/useFormatPrice";

export default function HomeCard({ home }) {
    const [isImageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="card card-compact bg-base-100 shadow-xl overflow-hidden">
            <Link href={route("detail", home.slug)} className="relative">
                <figure
                    className={`w-full bg-gray-200 ${
                        !isImageLoaded
                            ? "animate-pulse aspect-square"
                            : "h-full"
                    }`}
                >
                    <img
                        src={home.image}
                        alt={home.name}
                        loading="lazy"
                        onLoad={() => setImageLoaded(true)}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <span className="absolute bottom-0 left-0 py-1 px-3 m-2 bg-[#4AB7B699] rounded-xl text-white text-sm">
                    Profit {home.profit} %
                </span>
            </Link>

            <div className="card-body">
                <Link
                    href={route("detail", home.slug)}
                    className="card-title overflow-hidden overflow-ellipsis line-clamp-2 text-lg md:text-xl"
                >
                    {home.name}
                </Link>
                <span className="text-right text-primary font-bold align-bottom">
                    {useFormatPrice(home.price)}
                </span>
                <ProgresBar
                    total={Math.round((home.invested / home.price) * 100)}
                />
                <p className="font-bold">{home.investor} Investor</p>
                <div className="card-actions justify-end">
                    <Link
                        href={route("detail", home.slug)}
                        className="btn btn-primary text-white dark:text-black"
                    >
                        Invest
                    </Link>
                </div>
            </div>
        </div>
    );
}
