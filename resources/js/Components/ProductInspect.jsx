function ProductInspect({ detail }) {
    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="text-2xl font-bold">{detail.name}</h3>
                <span className="font-bold">
                    <i class="ri-price-tag-3-fill"></i> Rp.{" "}
                    {parseFloat(detail.price)
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </span>
                <div
                    id="transaction-detail"
                    className="flex flex-col gap-3 my-5"
                >
                    <div id="transaction-content">
                        <span className="font-bold">progres :</span>
                        <div className="w-full bg-green-200 rounded-xl">
                            <div
                                className="flex justify-center p-0 text-xs font-bold text-white bg-green-400 rounded-xl"
                                style={{ width: `${detail.progress}%` }}
                            >
                                {detail.progress + " %"}
                            </div>
                        </div>
                        <i class="ri-bank-line"></i> Rp.{" "}
                        {parseFloat(detail.price * (detail.progress / 100))
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </div>
                    <div id="transaction-content" className="flex flex-col">
                        <span className="font-bold">investor :</span>
                        <span className="flex flex-row gap-2">
                            <i class="ri-group-line"></i>
                            <span>{detail.investor}</span>
                        </span>
                    </div>
                    <div id="transaction-content" className="flex flex-col">
                        <span className="font-bold">invest amount :</span>
                        <span className="flex flex-row gap-2">
                            <i class="ri-price-tag-3-line"></i>
                            <span>Rp. {detail.investamout}</span>
                        </span>
                    </div>
                    <div id="transaction-content" className="flex flex-col">
                        <span className="font-bold">transaction date :</span>
                        <span className="flex flex-row gap-2">
                            <i class="ri-calendar-schedule-line"></i>
                            <span>{detail.date}</span>
                        </span>
                    </div>
                    <div id="transaction-content" className="flex flex-col">
                        <span className="font-bold">time remain :</span>
                        <span className="flex flex-row gap-2">
                            <i class="ri-time-line"></i>
                            <span>{detail.timeRemain} days</span>
                        </span>
                    </div>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">
                            <i class="ri-share-forward-line"></i> Show
                        </button>
                    </form>
                    <form method="dialog">
                        <button className="btn">
                            <i class="ri-arrow-go-back-line"></i> Close
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default ProductInspect;
