

import Image from "next/image";
import React from "react";

interface LocationProps {
    location: string
}

const PlannerComponent: React.FC<LocationProps> = ({location}) => {
    return(
        <div className="flex flex-row flex-wrap">
            <Image
            src="/planner.png"
            alt="planner"
            width="20"
            height="20"
            />
            <p>{location} </p>

        </div>

    )
}
export default PlannerComponent 