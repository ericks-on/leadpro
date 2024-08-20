import { getProducts } from "../lib/actions";
import ProductsForm from "../ui/products/products-form";
import ProductsTable from "../ui/products/products-table";
import SignOutButton from "../ui/sign-out-button";
import WelcomeButton from "../ui/welcome-button";



export default async function ProductPage() {
    const products = await getProducts();
    return (
        <div className = "flex flex-col px-2 md:px-8 gap-4 min-h-screen">
            < div className = "flex justify-center items-center w-full h-16 text-4xl relative" >
                <h1>Leadpro Bakers</h1>
                <SignOutButton  />
            </div >
            <div className="flex flex-col w-full gap-8 h-full">
                <ProductsForm />
                <ProductsTable products={products} />
            </div>
        </div>
    )
}