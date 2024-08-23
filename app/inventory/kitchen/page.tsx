import { getKitchen } from "../../lib/actions";
import KitchenForm from "../../ui/kitchen/kitchen-form";
import KitchenTable from "../../ui/kitchen/kitchen-table";
import SignOutForm from "../../ui/sign-out-form";



export default async function ProductPage() {
    const kitchenItems = await getKitchen();
    return (
        <div className = "flex flex-col px-2 md:px-8 gap-4 min-h-screen text-black">
            < div className = "flex justify-center items-center w-full h-16 text-4xl relative" >
                <h1>Leadpro Bakers</h1>
                <SignOutForm  />
            </div >
            <div className="flex flex-col w-full gap-8 h-full">
                <KitchenForm />
                <KitchenTable items={kitchenItems} />
            </div>
        </div>
    )
}