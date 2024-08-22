import { BuildingStorefrontIcon, CurrencyDollarIcon, HomeIcon, ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

export default function Layout({
    children,
}:{
    children: React.ReactNode;
    }) {
    return (
            <div>
                <div className='flex flex-col md:flex-row basis-1/5'>
                    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col items-start py-8 px-6 border-r border-gray-700">
                        <div className="text-xl font-bold mb-6 px-4">LeadPro Bakers</div>
                    <nav className={clsx(
                        "md:flex flex-col w-full",
                        {showMenu :'fixed width-full h-screen'}
                    )}>
                        <Link href="/welcome" className="w-full mb-3 flex gap-2 text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                            <HomeIcon className="w-6 h-6 mr-2" />
                            Home
                        </Link>
                        <Link href="/inventory/products" className="w-full mb-3 flex gap-2 text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                            <ShoppingCartIcon className="w-6 h-6 mr-2" />
                            Products
                        </Link>
                        <Link href="/inventory/sales" className="w-full mb-3 flex gap-2 text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                            <CurrencyDollarIcon className="w-6 h-6 mr-2" />
                            Sales
                        </Link>
                        <Link href="/inventory/kitchen" className="w-full mb-3 text-lg flex gap-2 font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                            <BuildingStorefrontIcon className="w-6 h-6 mr-2" />
                            Kitchen
                        </Link>
                        <Link href="/inventory/supplies" className="w-full mb-3 flex gap-2 text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                            <ShoppingBagIcon className="w-6 h-6 mr-2" />
                            Supplies
                        </Link>
                        </nav>
                    </aside>
                    <div className="basis-4/5">
                        {children}
                    </div>
                </div>
                
            </div>
    );
}