export default function TripMap() {
    return (
        <div className="w-full h-[600px] bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-500 border border-gray-200">
            <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                >
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                    <line x1="9" x2="9" y1="3" y2="18" />
                    <line x1="15" x2="15" y1="6" y2="21" />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Map View Coming Soon</h3>
            <p className="max-w-md text-center px-4">
                We're working on an interactive map to help you explore adventures by location. Stay tuned!
            </p>
        </div>
    );
}
