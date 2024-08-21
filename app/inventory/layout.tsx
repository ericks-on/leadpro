import Link from "next/link";

export default function Layout({
    children,
}:{
    children: React.ReactNode;
}) {
    return (
            <div>
                <div className='flex flex-row'>
                    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col items-start py-8 px-6 border-r border-gray-700">
                        <div className="text-xl font-bold mb-6 px-4">LeadPro Bakers</div>
                        <nav className="flex flex-col w-full">
                            <Link href="/inventory/products" className="w-full mb-3 text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                                Products
                            </Link>
                            <Link href="/inventory/sales" className="w-full mb-3 text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                                Sales
                            </Link>
                            <Link href="/inventory/kitchen" className="w-full mb-3 text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                                Kitchen
                            </Link>
                            <Link href="/inventory/supplies" className="w-full mb-3 text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                                Supplies
                            </Link>
                        </nav>
                    </aside>
                    <div>
                        {children}
                    </div>
                </div>
                
            </div>
    );
}