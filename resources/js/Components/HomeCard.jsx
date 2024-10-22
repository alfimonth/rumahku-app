import ProgresBar from "./ProgresBar";

export default function HomeCard({ home }) {
    return (
        <div className="card card-compact bg-base-100 shadow-xl overflow-hidden">
            <div className="relative">
                <figure>
                    <img
                        src="https://picsum.photos/400/400"
                        alt={`${home.name}`}
                    />
                </figure>
                <span className="absolute bottom-0 left-0 py-1 px-3 m-2 bg-[#4AB7B699] rounded-xl text-white">
                    Profit 60%
                </span>
            </div>

            <div className="card-body">
                <h2 className="card-title overflow-hidden overflow-ellipsis line-clamp-2">
                    {home.name}
                </h2>
                {FormatedPrice(home.price)}
                <ProgresBar total={home.investTotal} />
                <p className="font-bold">{home.investor} Investor</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white dark:text-black">
                        Invest
                    </button>
                </div>
            </div>
        </div>
    );

    function FormatedPrice(price) {
        return (
            <p className="text-right text-primary font-bold">
                {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    separstor: ",",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                }).format(price)}
            </p>
        );
    }
}
