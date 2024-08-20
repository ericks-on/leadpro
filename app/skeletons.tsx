export function ProductsTableSkeleton () {
    return (
        <main className="container mx-auto">
            <h1 className="text-2xl font-semibold text-center w-full text-gray-800">Products</h1>
            <table className="w-full mt-6 border-t">
                <thead className="border-b-2 border-gray-400">
                    <tr>
                        <th className="px-4 py-3 text-left text-gray-500">Name</th>
                        <th className="px-4 py-3 text-left text-gray-500">Quantity</th>
                        <th className="px-4 py-3 text-left text-gray-500">Price</th>
                        <th className="px-4 py-3 text-left text-gray-500">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render a few skeleton rows */}
                    {[...Array(5)].map((_, index) => (
                        <tr key={index}>
                            <td className="px-4 py-3 text-sm text-gray-500">
                                <div className="animate-pulse bg-gray-300 h-4 w-3/4 rounded"></div>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-500">
                                <div className="animate-pulse bg-gray-300 h-4 w-1/4 rounded"></div>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-500">
                                <div className="animate-pulse bg-gray-300 h-4 w-1/4 rounded"></div>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-500">
                                <div className="animate-pulse bg-gray-300 h-4 w-1/2 rounded"></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};

