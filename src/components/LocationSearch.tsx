import { useState } from "react";
import type { Place } from "../api/Place";

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
    // always specify 'generic type' in case of 'useState' as it's a generic-function
    const [place, setPlace] = useState<Place[]>([]);

    return <div>Search for a location</div>;
}
