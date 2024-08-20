export default function ErrorPopup({ message }: { message: string }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold">Error</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}