import Image from "next/image";
import { MapPin } from "lucide-react";

interface RoutePoint {
    title: string;
    description: string;
}

interface RouteTabProps {
    route: RoutePoint[];
    routeImage?: string | null;
}

export default function RouteTab({ route, routeImage }: RouteTabProps) {
    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Route</h3>
                <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:h-full before:w-0.5 before:bg-gray-200">
                    {route.map((point, index) => (
                        <div key={index} className="relative pl-12">
                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center z-10">
                                <MapPin className="w-4 h-4 text-primary" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-1">{point.title}</h4>
                            <p className="text-gray-600 text-sm">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {routeImage && (
                <div className="flex-1">
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-gray-100 sticky top-24">
                        <Image
                            src={routeImage}
                            alt="Route Map"
                            fill
                            className="object-cover"
                            suppressHydrationWarning
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
