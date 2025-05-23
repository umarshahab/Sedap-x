export default function Loading() {
    return (
        <div className=" flex flex-col justify-center items-center min-h-screen bg-white">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-green-600 text-lg">Loading...</p>
        </div>
    );
}
