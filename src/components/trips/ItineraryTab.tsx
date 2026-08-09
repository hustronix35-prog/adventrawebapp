interface ItineraryDay {
    day: number;
    title: string;
    description: string;
}

interface ItineraryTabProps {
    itinerary: ItineraryDay[];
}

export default function ItineraryTab({ itinerary }: ItineraryTabProps) {
    if (!itinerary || itinerary.length === 0) return null;

    return (
        <div className="space-y-8">
            <h3 className="text-xl font-bold text-gray-900">Itinerary</h3>
            <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:h-full before:w-0.5 before:bg-gray-200">
                {itinerary.map((day, index) => (
                    <div key={index} className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center font-bold text-primary text-sm z-10">
                            {day.day}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{day.title}</h4>
                        <p className="text-gray-600">{day.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
