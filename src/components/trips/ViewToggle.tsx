"use client";

import { Map, List } from "lucide-react";
import Button from "../ui/Button";
import { useRouter, useSearchParams } from "next/navigation";

export default function ViewToggle() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isMapView = searchParams.get("view") === "map";

    const toggleView = () => {
        const params = new URLSearchParams(searchParams.toString());
        if (isMapView) {
            params.delete("view");
        } else {
            params.set("view", "map");
        }
        router.push(`/trips?${params.toString()}`);
    };

    return (
        <Button
            variant="outline"
            className="rounded-full"
            onClick={toggleView}
        >
            {isMapView ? (
                <>
                    <List className="w-4 h-4 mr-2" />
                    View List
                </>
            ) : (
                <>
                    <Map className="w-4 h-4 mr-2" />
                    View on Map
                </>
            )}
        </Button>
    );
}
