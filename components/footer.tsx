import Image from "next/image";
import React, {FC} from "react";



const Footer: React.FC = () => {
    return(
        <>
        <div className="flex flex-row justify-evenly items-center bg-slate-900 opacity-50 p-4 space-x-4 flex-wrap">
            <div className="flex flex-row space-x-10 flex-wrap">

                <div className="flex flex-row space-x-2 flex-wrap">
                    <Image 
                    src=""
                    alt=""
                    width="30"
                    height="30" 
                    />
                    <p className=" hover: text-white hover:text-sky-500">info@techu.com</p>
                </div>

                <div className="flex flex-row flex-wrap">
                    <Image 
                    src=""
                    alt=""
                    width="30"
                    height="30"
                    />
                    <p className="hover: text-white hover:text-sky-500"> 08-660 35 00</p>

                </div>

            </div>

            {/** ICONS */}
            <div className="flex items-center space-x-4 flex-wrap">
                <Image
                src=""
                alt=""
                width="30"
                height="30"
                />

                <Image
                src=""
                alt=""
                width="30"
                height="30"
                />

                <Image
                src=""
                alt=""
                width="30"
                height="30"
                />

                <Image
                src=""
                alt=""
                width="30"
                height="30"
                />


            </div>

        </div>
        </>
    )

}
export default Footer