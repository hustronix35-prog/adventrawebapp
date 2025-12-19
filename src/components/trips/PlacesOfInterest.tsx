import Image from 'next/image';

interface Place {
    title: string;
    image: string;
}

interface PlacesOfInterestProps {
    places: Place[];
}

export default function PlacesOfInterest({ places }: PlacesOfInterestProps) {
    if (!places || places.length === 0) return null;

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Places of Interest</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {places.map((place, index) => (
                    <div key={index} className="min-w-[200px] w-[200px] flex-shrink-0">
                        <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3">
                            <Image
                                src={place.image}
                                alt={place.title}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="font-medium text-gray-900 text-sm">{place.title}</h3>
                        <p className="text-xs text-gray-500">{place.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
