
"use client"
import { Course, Student } from "@/utils/types/user";
//import {Student} from '../types/user';
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react";


// C R E A T E   S T U D E N T  P A G E   m  Form
const Page = () => {
  const router = useRouter(); // Navigerar 
    // Student mallen med tomma värden
    const [formData, setFormData] = useState<Student>({
        name: "",
        email: "",
        age: 0,
        course:[{
          name: "",
          teacher: "Mark Zuckerberg",
          courseCredit: 400
        }]
         
      
      });

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [event.target.name]:
          event.target.type === "number" ? parseFloat(event.target.value): event.target.value
          
        })
      }

      /*
       const courseHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
       const coursValue = event.target.value // hämtar värdet
       // av typen Course 
       const coursesArray = coursValue.split(",").map(courseName => ({ name: courseName.trim()} as Course))

          setFormData( formData => ({
            //...prevState, course: [...prevState.course, ...coursesArray]
            ...formData, course: coursesArray
           
            }))

            console.log("Course Array: ", coursesArray) // finns värde i arrayen
    
      }
      */


      const courseHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const courseValue: string = event.target.value
        // Studenten kan mata in flera kurser, as string = typsäkerhet
        const courseNames: string [] =  courseValue.split(",").map(courseName => courseName.trim()) as string[]
        
        // Nytt objekt skapas med nya kurser fr inmatningen. Teacher, courseCredit blir default
        const coursesArray: Course[] = courseNames.map(courseName => ({
          name: courseName,
          teacher: "Mark Zuckerberg",
          courseCredit: 400
        }))

        setFormData(formData => ({
          ...formData,
          course: coursesArray
        }))




      }

   // fetch görs för att skicka datan fr formuläret till backend för att skapa en ny student
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const {name,email, age, course} = formData

    try{
      const response = await fetch("/api/students", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify(formData),
        
        
      })

      if(response.ok){
        const result = await response.json()
        console.log(result)
        console.log("Fetch Response Status " , response.status)
        console.log("Fetch Response OK result", result)
        router.push("/students") // navigerar till student page.tsx

        // Handle success actions here
      }
      else{
        const error = await response.json()
        console.log(error)

        // Handle error actions here
      }

    }catch (error){
      console.error("Error: ", error)
    }
  }
    return(
        
    <div className="flex flex-row h-screen items-center justify-center opacity-50">
     
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-3 ">
    <label htmlFor="name">Name</label>
    <input
    className="p-2 rounded-sm"
     type="text"
     id="name"
     name="name"
     placeholder="name"
     value={formData.name}
     onChange={handleChange}
     required />

    <label htmlFor="email">Email</label>
    <input
    className="p-2 rounded-sm"
    type="email"
    id="email"
    name="email"
    placeholder="email"
    value={formData.email}
    onChange={handleChange}
    required />


    <label htmlFor="age">Age</label>
    <input
    className="p-2 rounded-sm"
    type="number"
    id="age"
    name="age"
    placeholder="12"
    value={formData.age}
    onChange={handleChange}
    required />

    <label htmlFor="course">Cours (separate with a comma for multiple courses)</label>
    <input
    className="p-2 rounded-sm"
    type="text"
    id="course"
    name="course"
    placeholder="Cours 1, Cours 2, Cours 3"
    value={formData.course.map(c => c.name).join(",")}
    onChange={courseHandleChange}
    required />

    
    <button 
    type= "submit"
    className="bg-slate-600 hover:bg-green-600  rounded rounded-m w-32 h-9"
    
    >Submit</button>
  </form>
 

  </div>



 )
    
    
}

export default Page