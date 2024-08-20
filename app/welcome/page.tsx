import WelcomeButton from "../ui/welcome-button";

export default async function Welcome() {
    return (
            <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
                <WelcomeButton />
            </div>
    );
}