import { getProducts } from "@/app/lib/actions";
import ProductsForm from "@/app/ui/products/products-form";
import ProductsTable from "@/app/ui/products/products-table";
import SignOutForm from "@/app/ui/sign-out-form";



export default async function ProductPage() {
    const products = await getProducts();
    return (
        <div className="flex flex-col px-2 md:px-8 gap-4 min-h-screen">
            < div className="flex justify-center items-center w-full h-16 text-4xl relative" >
                <h1>Leadpro Bakers</h1>
                <SignOutForm />
            </div >
            <div className="flex flex-col w-full gap-8 h-full">
                <ProductsForm />
                <ProductsTable products={products} />
            </div>
        </div>
    )
}