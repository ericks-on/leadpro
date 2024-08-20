'use client'

export default function WelcomeButton() {
    function handleClick() {
        window.location.href = '/products';
    }
    return (
        <div className={` w-screen h-screen flex items-center justify-center fixed top-0 `}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg "
                    onClick={handleClick}>Welcome, click to continue</button>
        </div>
        
    )
}