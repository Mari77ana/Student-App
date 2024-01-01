"use client"
import Footer from "@/components/footer";
import HeaderMenu from "@/components/header"
import { Course, Student } from "@/utils/types/user";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";



//  UPDATE STUDENT Page with Form
export default function Page({params}:{params:{id: string}}) { // props skicka datan 

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

      const id = params.id
      const router = useRouter(); // Navigerar 

      // Hämtar user id med useEffect så att det visas på denna sida i formuläret
      // useEffect hämtar anrop mot backend och hämtar user med id genom att skicka props
      useEffect(() => {

        const fetchStudent = async () => {

          if (id){
            console.log(params.id)

            try{

              const response = await fetch(`/api/students/${id}` , {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",

                }
              });

              if(response.ok){
                const result = await response.json()
                setFormData(result.user) // sätter nya värden
                console.log(formData)
              }
              else{
                console.log("Could't fetch student")
              }

              
            }catch (error){
              console.log("Something went wrong " + error)

            }
          }
        };
        fetchStudent();
      }, [id]); // uppdatera hela sidan när id ändras




      const handleSubmit = async (event: FormEvent) => {

        console.log("hej")
        console.log(id);
        event.preventDefault()


        // Uppdaterar de nya värderna 
        const updatedStudent: Student = {
          name: formData.name,
          email: formData.email,
          age: formData.age,
          course: formData.course
         
      }

      try{
        const response = await fetch(`/api/students/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedStudent),
        });

        if (response.ok){
          const result = await response.json()
          console.log(result)
          router.push("/students")
        }

      }catch (error) {
        console.log("Something went wrong: " + error)

      }

    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [event.target.name]:
        event.target.type === "number" ? parseFloat(event.target.value): event.target.value
        
      })
      console.log(formData)
    }



    const courseHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault
      const courseValue: string = event.target.value
      const courseNames: string []=  courseValue.split(",").map(courseName => courseName.trim()) as string[]

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

  return (
    <>
    <div className="">
     
      <div className="flex flex-col justify-center items-center opacity-50 mt-10 ">
      <p className="text-2xl"> UPDATE HERE </p>
      </div>

      <div className="flex flex-col justify-center items-center opacity-50 h-screen">

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-3">
        <label htmlFor="name">Namn</label>
          <input
          className="p-2 rounded-sm"
          id="name" 
          type="text"
          name="name" 
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          required
          />


          <label htmlFor="email">Email</label>
          <input
          className="p-2 rounded-sm"
          id="email" 
          type="text"
          name="email" 
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          required
          />


          <label htmlFor="age">Age</label>
          <input
          className="p-2 rounded-sm"
          id="age" 
          type="text"
          name="age" 
          placeholder="age"
          value={formData.age}
          onChange={handleChange}
          required
          />


          <label htmlFor="name">Course</label>
          <input
          className="p-2 rounded-sm"
          id="course" 
          type="text"
          name="course" 
          placeholder="course"
          value={formData.course.map(c => c.name).join(",")}
          onChange={courseHandleChange}
          required
          />

           
          <button 
          type= "submit"
          className="bg-slate-600 hover:bg-green-600  rounded rounded-m w-32 h-9">
            Submit
          </button>    
        
        </form>

      </div>

      
       
      
    </div>
    </>
  );
   
    
  }