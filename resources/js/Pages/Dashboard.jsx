import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AdminLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200 text-center">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="flex flex-col items-center">
                <div className="stats shadow my-6">
                    <div className="stat place-items-center">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">
                            From January 1st to February 1st
                        </div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-secondary">4,200</div>
                        <div className="stat-desc text-secondary">
                            ↗︎ 40 (2%)
                        </div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
                <div className="stats shadow my-6">
                    <div className="stat place-items-center">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">
                            From January 1st to February 1st
                        </div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-secondary">4,200</div>
                        <div className="stat-desc text-secondary">
                            ↗︎ 40 (2%)
                        </div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
