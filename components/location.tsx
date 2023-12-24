
import Image from "next/image"
import React, {FC } from "react"

interface LocationProps{
    location: string
}

const LocationComponent: React.FC<LocationProps> = ({location}) => {
    return(
        <div className="flex flex-row flex-wrap">
            <Image
            src="/location.png"
            alt="location"
            width="20"
            height="20"
            />
            <p>{location}</p>

        </div>

    )
}
export default LocationComponent