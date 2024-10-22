export default function ProgresBar({total}) {
    return (
        <div className="w-full bg-gray-200 rounded-xl">
            <div
                className="flex justify-center p-0 text-xs font-bold text-white bg-primary rounded-xl"
                style={{ width: `${total}%` }}
            >
                {total}%
            </div>
        </div>
    );
}
