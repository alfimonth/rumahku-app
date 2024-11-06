export default function AdminSidebar({ className }) {
    return (
        <ul className={`menu w-56 gap-2 max-w-full ${className}`}>
            <li>
                <a className="active">Dashboard</a>
            </li>
            <li>
                <details>
                    <summary>Penjualan Rumah</summary>
                    <ul>
                        <li>
                            <a>Semua</a>
                        </li>
                        <li>
                            <a>Ditawarkan</a>
                        </li>
                        <li>
                            <a>Terjual</a>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>Rumah Investasi</summary>
                    <ul>
                        <li>
                            <a>Semua</a>
                        </li>
                        <li>
                            <a>Progress</a>
                        </li>
                        <li>
                            <a>Menunggu Laba</a>
                        </li>
                        <li>
                            <a>Selesai</a>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <a>Koin</a>
            </li>
            <li>
                <a>User</a>
            </li>
            <li>
                <a>Laporan</a>
            </li>
        </ul>
    );
}
