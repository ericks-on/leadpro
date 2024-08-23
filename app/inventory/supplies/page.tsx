import { getSupplies } from "../../lib/actions";
import SignOutForm from "../../ui/sign-out-form";
import SuppliesForm from "../../ui/supplies/supplies-form";
import SuppliesTable from "../../ui/supplies/supplies-table";



export default async function ProductPage() {
    const supplies = await getSupplies();
    return (
        <div className = "flex flex-col px-2 md:px-8 gap-4 min-h-screen">
            < div className = "flex justify-center items-center w-full h-16 text-4xl relative" >
                <h1>Leadpro Bakers</h1>
                <SignOutForm  />
            </div >
            <div className="flex flex-col w-full gap-8 h-full">
                <SuppliesForm />
                <SuppliesTable items={supplies}/>
            </div>
        </div>
    )
}