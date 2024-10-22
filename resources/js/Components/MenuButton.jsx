export default function MenuButton({ title = "...", icon, className = "bg-primary" }) {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-2 md:w-32 p-2 rounded-xl aspect-square ${className}`}
        >
            <span className="text-3xl">{icon}</span>
            <span className="text-center space-y-1">{title}</span>
        </div>
    );
}
