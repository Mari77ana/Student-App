import Link from "next/link";
import Image from "next/image";
import React from "react";

const HeaderMenu: React.FC = () => {
    return(
        <>
        <div className="flex flex-row justify-center items-center space-x-14 flex-wrap bg-slate-900 opacity-40 p-10">
        
            <p className="text-3xl font-serif">TECH U</p>
            
            <div className="flex flex-row space-x-10 ">
            <Link href={"/"}>HOME</Link>
            <Link href={"/students"}>STUDENTS</Link>
            <Link href={"/students/createStudent"}>APPLICATION</Link>
            </div>
            

        </div>
        </>
    )

}
export default HeaderMenu