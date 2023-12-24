
import Image from "next/image"
import React, {FC} from "react"
import LocationComponent from "./location"
import PlannerComponent from "./planner"


const FirstPicDescript: React.FC = () => {
    return(
        <>
          <div className=" bg-slate-700 rounded-md opacity-50">
              <Image
                 src="/cours.jpg"
                 alt="cours"
                 width="400"
                 height="400"
                />

              <div className="flex flex-col flex-wrap p-1 ">
                  <p className="text-xl pb-1 pl-2">Webbutveckling</p>

                  <div className="flex flex-row justify-between px-1 "> 
                      <LocationComponent location="Stockholm"/>
                       <PlannerComponent location="2 år (400 YH-poäng)"/>
                   </div>
        
                </div>
                       <div className="flex flex-col p-4">
                            <p>Arbeta med att skapa bättre</p>
                            <p>användarupplevelse med Frontend</p>
                            <p>och påverka hur användare kan integrera</p>
                            <p>i en webbläsare,smartphone eller surfplatta.</p>
                            <p>Området för fronten växer snabbt och rollen</p>
                            <p>är högt efertraktad på arbetsmarknaden</p>
                            <div className="flex flex-row items-center space-x-2 pt-4 ">
                              <p className=" text-lg ">Nästa start: </p>
                              <p>Augusti 2024</p>
                            </div>
                        </div>
                  
 
            </div>



        </>


    )
}
export default FirstPicDescript




