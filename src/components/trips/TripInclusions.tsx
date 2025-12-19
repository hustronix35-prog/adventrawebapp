import { Check, X } from "lucide-react";

interface TripInclusionsProps {
    inclusions: string[];
    exclusions: string[];
}

export default function TripInclusions({ inclusions, exclusions }: TripInclusionsProps) {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Inclusions & Exclusions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        Inclusions
                    </h3>
                    <ul className="space-y-3">
                        {inclusions.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                        <X className="w-5 h-5" />
                        Exclusions
                    </h3>
                    <ul className="space-y-3">
                        {exclusions.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
