import {
    BuildingStorefrontIcon,
    CurrencyDollarIcon,
    HomeIcon,
    ShoppingBagIcon,
    ShoppingCartIcon
} from "@heroicons/react/24/outline";
import Image from 'next/image';
import Link from 'next/link'
import SignOutButton from '../ui/sign-out-button';


export default async function Welcome() {
    return (
        // sales, kitchen, supplies, inventory
        <div className='flex w-screen flex-col md:flex-row'>
            <aside className=" w-full h-20 md:w-64 md:h-screen bg-gray-800 text-white flex flex-row md:flex-col items-start py-8 px-6 border-r border-gray-700">
                <div className="text-xl font-bold mb-6 px-4 hidden md:block">LeadPro Bakers</div>
                <nav className="flex flex-row md:flex-col w-full gap-2">
                    <Link href="/welcome" className="w-full mb-3 flex gap-2 text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                        <HomeIcon className="w-6 h-6 mr-2" />
                        <span className="hidden md:block">Products</span>

                    </Link>
                    <Link href="/inventory/products" className="w-full mb-3 flex gap-2 text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                        <ShoppingCartIcon className="w-6 h-6 mr-2" />
                        <span className="hidden md:block">Products</span>

                    </Link>
                    <Link href="/inventory/sales" className="w-full mb-3 flex gap-2 text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                        <CurrencyDollarIcon className="w-6 h-6 mr-2" />
                        <span className="hidden md:block">Sales</span>

                    </Link>
                    <Link href="/inventory/kitchen" className="w-full mb-3 text-lg flex gap-2 font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                        <BuildingStorefrontIcon className="w-6 h-6 mr-2" />
                        <span className="hidden md:block">Kitchen</span>

                    </Link>
                    <Link href="/inventory/supplies" className="w-full mb-3 flex gap-2 text-lg font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                        <ShoppingBagIcon className="w-6 h-6 mr-2" />
                        <span className="hidden md:block">Supplies</span>

                    </Link>
                </nav>
            </aside>
            <div className='flex flex-col min-h-screen flex-auto'>
                < div className="flex justify-center items-center w-full h-16 text-4xl relative text-black" >
                    <h1>Leadpro Bakers</h1>
                    <SignOutButton />
                </div >
                <div className='flex flex-col md:flex-row gap-4 justify-center items-center w-full h-full'>
                    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <div className="relative w-full h-48">
                            <Image
                                src="/images/sale.jpg"
                                alt="Bakery Sales"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-gray-900">Delicious Bakery Sales</div>
                            <p className="text-gray-700 text-base">
                                Enjoy our daily discounts on freshly baked goods! Our bakery offers a wide variety of breads, pastries, and sweets.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">Sales</span>
                            <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">Bakery</span>
                            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">Fresh</span>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <div className="relative w-full h-48">
                            <Image
                                src="/images/kit.jpg"
                                alt="Kitchen Inventory"
                                layout='fill'
                                objectFit='cover'
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-gray-900">Kitchen Inventory</div>
                            <p className="text-gray-700 text-base">
                                Manage your kitchen inventory with ease! Our kitchen offers a wide variety of ingredients, utensils, and equipment.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">Kitchen</span>
                            <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">Bakery</span>
                            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">Fresh</span>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <div className="relative w-full h-48">
                            <Image
                                src="/images/bake.jpg"
                                alt="Bakery Supplies"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-gray-900">Bakery Supplies</div>
                            <p className="text-gray-700 text-base">
                                Stock up on bakery supplies! Our bakery offers a wide variety of ingredients, utensils, and equipment.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">Kitchen</span>
                            <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">Bakery</span>
                            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">Fresh</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        


    );
}