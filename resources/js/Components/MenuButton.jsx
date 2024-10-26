import { Link } from "@inertiajs/react";

export default function MenuButton({
    title = "...",
    icon,
    className = "bg-primary",
    href = "#",
}) {
    return (
        <Link
            href={href}
            className={`transition-all flex flex-col items-center justify-center gap-2 md:w-32 p-2 rounded-xl aspect-square ${className} `}
        >
            <span className="text-2xl">{icon}</span>
            <span className="text-center space-y-1">{title}</span>
        </Link>
    );
}
