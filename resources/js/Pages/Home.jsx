import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        <span className="text-red-500">Rumah</span>
                        <span className="text-slate-500">Ku</span>
                    </h2>
                    <span>Rp 1,000,000</span>
                </div>
            }
        >
            <Head title="Home" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Start Location --> */}

                <section className="mb-6">
                    <div className="flex justify-between items-center font-bold">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 text-gray-800 dark:text-white rounded-full bg-accent flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 dark:text-gray-800 text-white"
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
                                        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                    />
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm">Jawa Tengah</h3>
                                <h2 className="text-lg">Surakarta</h2>
                            </div>
                        </div>
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
                </section>
                {/* <!-- End Location --> */}
                {/* <!-- Start Search --> */}
                <label className="input input-bordered flex items-center gap-2 mb-6 bg-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <input
                        type="search"
                        className="grow focus:ring-0 border-none pl-0"
                        placeholder="Cari di sini..."
                    />
                </label>
                {/* <!-- End Search --> */}

                {/* <!--Start Carousel--> */}
                <div className="h-40 md:h-64 w-full rounded-xl overflow-hidden">
                    <div className="carousel w-full h-full md:h-64">
                        <div
                            id="slide1"
                            className="carousel-item relative w-full bg-green h-full"
                        >
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="w-full object-cover"
                            />
                            {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div> */}
                        </div>
                    </div>
                </div>
                {/* <!--End Carousel--> */}

                {/* <!-- Start Main Menu --> */}

                <section className="my-6">
                    <div className="flex justify-between items-center font-bold">
                        <h2 className="text-lg font-semibold">Menu Utama</h2>
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

                    <div className="grid grid-cols-3 gap-4 my-4 text-white justify-between md:flex md:justify-start">
                        <div className="flex flex-col items-center justify-center gap-2 md:w-32 p-2  bg-accent rounded-xl aspect-square">
                            <svg
                                className="w-6 h-6 dark:text-gray-800 text-white"
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
                                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                                />
                            </svg>
                            <span className="text-center space-y-1">
                                Cari Rumah
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 md:w-32 p-2 bg-secondary rounded-xl aspect-square">
                            <svg
                                className="w-6 h-6 dark:text-gray-800 text-white"
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
                                    d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
                                />
                            </svg>
                            <span className="text-center space-y-1">Topup</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 md:w-32 p-2  bg-primary rounded-xl aspect-square">
                            <svg
                                className="w-6 h-6 dark:text-gray-800 text-white"
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
                                    d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                                />
                            </svg>
                            <span className="text-center space-y-1">
                                Call Center
                            </span>
                        </div>
                    </div>
                </section>
                {/* <!-- End Main MEnu --> */}

                {/* <!-- Start For Your Page --> */}
                <section className="my-6">
                    <div className="flex justify-between items-center font-bold">
                        <h2 className="text-lg font-semibold">Untuk Anda</h2>
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

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4  justify-between">
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Rumah Tipe B</h2>
                                <p className="text-right">Rp 250,000,000</p>
                                <progress
                                    className="progress progress-accent w-full"
                                    value="50"
                                    max="100"
                                ></progress>
                                <p className="">8 investor</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-accent text-white dark:text-black">
                                        Invest
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Invest
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Invest
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Invest
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End For Your Page --> */}
                <div className="h-24"></div>
            </div>
        </AuthenticatedLayout>
    );
}
