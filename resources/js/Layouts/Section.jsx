export default function Section({ title = "...", children, notitle = false }) {
    return (
        <section className={notitle ? "mb-6" : "my-6"}>
            {!notitle && (
                <div className="flex justify-between items-center font-bold">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m9 5 7 7-7 7"
                        />
                    </svg>
                </div>
            )}
            {children}
        </section>
    );
}
