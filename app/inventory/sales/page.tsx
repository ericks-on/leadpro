import {  getSales } from "../../lib/actions";
import SalessForm from "../../ui/sales/sales-form";
import SalesTable from "../../ui/sales/sales-table";
import SignOutButton from "../../ui/sign-out-button";



export default async function ProductPage() {
    const sales = await getSales();
    return (
        <div className = "flex flex-col px-2 md:px-8 gap-4 min-h-screen">
            < div className = "flex justify-center items-center w-full h-16 text-4xl relative" >
                <h1>Leadpro Bakers</h1>
                <SignOutButton  />
            </div >
            <div className="flex flex-col w-full gap-8 h-full">
                <SalessForm />
                <SalesTable items={sales}/>
            </div>
        </div>
    )
}