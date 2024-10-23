const TransactionCard = (props) => {
    // style guide
    /*
    1. tambahkan optional image
    2. skeleton loading
    3. null value handling
    */

    return (
        <div
            className="flex flex-row items-center gap-2 p-2 align-middle duration-100 rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 active:bg-slate-200"
            onClick={(prop) => props.handleInspect(props)}
        >
            <div id="product-image">
                <img
                    src={props.image}
                    alt={props.name + " image"}
                    className="object-cover h-20 w-28 rounded-xl"
                />
            </div>
            <div
                id="product-details"
                className="flex flex-col w-full gap-2 px-2"
            >
                <span
                    id="product-info"
                    className="flex flex-row items-center justify-between gap-1"
                >
                    <span id="product-title" className="font-bold text-md">
                        {props.name}
                    </span>
                    <span className="text-xs">
                        Rp{" "}
                        {parseFloat(props.price)
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </span>
                </span>
                <div id="product-stat" className="flex flex-col gap-2">
                    <div className="w-full bg-green-200 rounded-xl">
                        <div
                            className="flex justify-center p-0 text-xs font-bold text-white bg-green-400 rounded-xl"
                            style={{ width: `${props.progress}%` }}
                        >
                            50%
                        </div>
                    </div>
                    <span
                        id="investor-stat"
                        className="flex flex-row justify-between text-xs"
                    >
                        <span id="investor-total">
                            {props.investor} Investor
                        </span>
                        <span id="time-remain">
                            {props.timeRemain} Days left
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TransactionCard;
