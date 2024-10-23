import { useMemo } from "react";

const useFormatPrice = (price) => {
    return useMemo(() => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    }, [price]);
};

export default useFormatPrice;
