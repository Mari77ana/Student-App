"use client"

import { Course, Student } from "@/utils/types/user"
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react"
import Image from "next/image"
import HeaderMenu from "@/components/header"
import Footer from "@/components/footer"
import FirstPicDescript from "@/components/picOneDescriptions"
import Link from "next/link"
import LocationComponent from "@/components/location"
import PlannerComponent from "@/components/planner"


import { useRouter } from "next/router"



interface Book {
  id: string,
  name: string,
  image: string
}

interface BookDescription {
  [key: string]: string
}


export default function Home() {

  // array with books
  const books: Book[] = [
    {id: "1", name: "Webbutveckling med PHP och MySQL", image: "/webbBook.png"},
    {id: "2", name: "Jetpack Compose 1.3", image: "/jetpackBook.png"},
    {id: "3", name: "iOS Programming For Beginners", image: "/iOSBook.png"},
    {id: "4", name: "Java Programming for Android Developers", image: "/javaBook.png"},
    {id: "5", name: "MongoDB ", image:"/mongoDBBook.png" }]

    const bookDescription: BookDescription = {
      "1": "En omfamnade guid till webbutvecklingen",
      "2": "Utforska de goda delarna av Jetpack Compose"

    }

  return (
    <div className="flex flex-col ">

      <div className="flex flex-wrap relative h-48 md:h-64 lg:h-80 xl:h-95 opacity-50">
        <Image
        src="/computer.jpg"
        alt="computer"
        layout="fill"
        objectFit="cover"/> 
      </div>
      <div className="flex  flex-row flex-wrap justify-center items-center p-5 opacity-60 space-x-10">
          <h1 className="text-4xl font-thin">YH - PROGRAM</h1>
          <h3 className="text-2xl font-thin ">Utbildning inom IT</h3>
  
      </div>
    


       {/**  DIV all picDescriptions START  ------------------------------------*/}
     <div className="flex flex-row justify-center space-x-10 flex-wrap pt-16 bg-slate-900  pb-10">
      {/** Pic 1 */}
      <FirstPicDescript/>

        {/** Pic 2 */}
      <div className="  bg-slate-700 rounded-md opacity-50">
        <Image
        src="/computer.jpg"
        alt="computer"
        width="400"
        height="400"
        />
        <div className="flex flex-col flex-wrap p-1 ">
        <p className="text-xl pb-1 pl-2">Javautvecklare</p>
        <div className="flex flex-row justify-between px-1 "> 
        <LocationComponent location="Göteborg"/>
        <PlannerComponent location="2 år (410 YH-poäng)"/>
        </div>
        </div>

        <div className="flex flex-col flex-wrap p-4">
            <p>Bli Javautvecklare och arbeta med</p>
            <p>programmeringsspråket nummer ett inom</p>
            <p>en mängd olika branscher och behövs</p>
            <p>överallt i IT-världen. Bristen på utvecklare</p>
            <p>är stor på svenska arbetsmarknaden och</p>
            <p>du kan räkna med en ljus framtid!</p>
            <div className="flex flex-row items-center space-x-2 pt-4 ">
            <p className=" text-lg ">Nästa start: </p>
            <p>Augusti 2024</p>
            </div>
          </div>
      </div>
      {/** Pic 3 */}
      <div className=" bg-slate-700 rounded-md opacity-50">
        <Image
        src="/iOS:Android.jpg"
        alt="iOS:Android"
        width="400"
        height="400"
        />
         <div className="flex flex-col flex-wrap p-1 ">
            <p className="text-xl pb-1 pl-2">iOS/Android utveckling</p>
           <div className="flex flex-row justify-between px-1 "> 
               <LocationComponent location="Stockholm"/>
               <PlannerComponent location="2 år (400 YH-poäng)"/>
            </div>
            <div className="flex flex-col flex-wrap p-4">
            <p>Skapa framtidens appar!</p>
            <p>iOS/Android Developer är perfekt för dig</p>
            <p>framtidens användarvänliga appar.</p>
            <p>som vill in i ett riktigt framtidsområde</p>
            <p>där du designar och programmerar innovativa</p>
            <p>användarvänliga appar för både iOS & Android</p>
            <div className="flex flex-row items-center space-x-2 pt-4 ">
            <p className=" text-lg ">Nästa start: </p>
            <p>Augusti 2024</p>
            </div>
            </div>

          </div>
         
      </div>

    </div>
    {/**  DIV ALL picDescripton END ------------------------------------*/}



       {/** Link for books */}
      <div className="flex justify-center items-center flex-col opacity-50">
      <h1 className="text-2xl p-7 ">LITTERATUR</h1>
        <ul>
          {books.map((book) => (
           <li key={book.id} className="py-2">
            <Link href={{
              pathname: `/book/${book.id}`, query: {...book, description: bookDescription[book.id]}} }> 
              <div>
                <p>{book.name}</p>
              
               
              </div>
            </Link>
           </li>

          ))}
        </ul>
      </div>



    </div>







    
  )
}
