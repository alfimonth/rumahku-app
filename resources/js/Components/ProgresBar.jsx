export default function ProgresBar({total, large = false}) {
    return (
        <div className="w-full bg-gray-200 rounded-xl">
            <div
                className={`flex justify-center p-0 ${large ? "text-xl" : "text-xs"}  font-bold text-white bg-primary rounded-xl`}
                style={{ width: `${total}%` }}
            >
                {total}%
            </div>
        </div>
    );
}
