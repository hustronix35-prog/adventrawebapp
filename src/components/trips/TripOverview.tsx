import { CheckCircle2, Calendar, Mountain, MapPin, Flag, XCircle } from "lucide-react";

interface TripOverviewProps {
    description: string;
    highlights: string[];
    inclusions: string[];
    exclusions: string[];
    bestTime?: string | null;
    tripType?: string | null;
    summitHeight?: string | null;
    region?: string | null;
}

export default function TripOverview({
    description,
    highlights,
    inclusions,
    exclusions,
    bestTime,
    tripType,
    summitHeight,
    region,
}: TripOverviewProps) {
    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-2xl">
                {bestTime && (
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Best Time
                        </h3>
                        <p className="font-semibold text-gray-900">{bestTime}</p>
                    </div>
                )}
                {tripType && (
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                            <Flag className="w-4 h-4" />
                            Trip Type
                        </h3>
                        <p className="font-semibold text-gray-900">{tripType}</p>
                    </div>
                )}
                {summitHeight && (
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                            <Mountain className="w-4 h-4" />
                            Summit
                        </h3>
                        <p className="font-semibold text-gray-900">{summitHeight}</p>
                    </div>
                )}
                {region && (
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Region
                        </h3>
                        <p className="font-semibold text-gray-900">{region}</p>
                    </div>
                )}
            </div>

            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Trip Summary</h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-wrap">{description}</p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
                <ul className="space-y-3">
                    {highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusions</h3>
                    <ul className="space-y-3">
                        {inclusions.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Exclusions</h3>
                    <ul className="space-y-3">
                        {exclusions.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
