import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";


export default function Detail({ home }) {
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
            <Head title={home.name} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                
                <div className="h-24"></div>
            </div>
        </AuthenticatedLayout>
    );
}
