
"use client"

import Footer from "@/components/footer";
import HeaderMenu from "@/components/header";
import { useSearchParams } from "next/navigation";
import Image from "next/image";


export default function Page({params}:{params:{id: string} }) {

    const searchParams = useSearchParams()
    const bookName = searchParams.get("name")
    const bookPicture = searchParams.get("image")
    const bookDescript = searchParams.get("bookDescription")
    const bookNameParam = typeof bookName ==="string" ? bookName: "Unknow"
    const bookPictureParam = typeof bookPicture === "string" ? bookPicture: "Unknow" 
    

  return (
    
    <div>

    <div className="flex fle-col flex-wrap  justify-center h-screen  opacity-50">
        <div>
           <h1 className="text-3xl">This is Book Page</h1>
           <p>Search book in browser</p>
             <p>Book ID: {params.id}</p>
             <p>Book Name: {bookName}</p>
             {bookPicture && <Image src={bookPicture} alt={bookNameParam} width={100} height={100}/>}
             <p>{bookDescript}</p>
            


        </div>
   
    </div>

    
    </div>
   
    
    
  );
}