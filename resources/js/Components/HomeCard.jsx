export default function HomeCard({ home }) {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{home.name}</h2>
                <p className="text-right">
                    {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        separstor: ",",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    }).format(home.price)}
                </p>
                <progress
                    className="progress progress-accent w-full"
                    value={home.investTotal}
                    max="100"
                ></progress>
                <p className="">{home.investor} Investor</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent text-white dark:text-black">
                        Invest
                    </button>
                </div>
            </div>
        </div>
    );
}
