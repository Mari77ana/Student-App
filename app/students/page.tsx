"use client"
import Footer from "@/components/footer";
import HeaderMenu from "@/components/header";
import { Student } from "@/utils/types/user";
import Link from "next/link";
import { useEffect, useState } from "react";

//  S H O W   A L L   S T U D E N T   P A G E  in  a   S T U D E N T - L I S T

export default function Page() {

    // H Ä M T A   A L L A   S T U D E N T S  fr  DB med fetch och useEffect (visas en gång)
    const [students, setStudents] = useState<Student[]>([]) // array behövs för att spara alla studenter i

    useEffect(() => {
        const fetchData = async () => {
            try{
                // fetch -> för att hämta alla studenter via backend metoden GET
                const response = await fetch("/api/students", { 
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }

                }); 
                
                if (response.ok){
                    const result = await response.json()
                    setStudents(result.allUsers) // all studenter
                    console.log("Fetch OK", response.ok)
                }

            }catch(error){
                console.log("Error could't fetch students" + error)

            }
        };
        fetchData();
    }, []);// visar bara en gång 





    //  D E L E T E   S T U D E N T   B Y   I D 

    // funktion deleteStudentById med parametern id
    const deleteStudentById = async (id: number) => {
        try{
        // fetch för en delete begäran mot backend för att ta bort specifik användare med hjälp av id
            const response = await fetch(`/api/students/${id}`, { 
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })

            if (response.ok){
                const result = await response.json();
                setStudents(result.allUsers);// om success uppdateras alla studenter
            }
            else{
                const error = await response.json()
                console.log(error)
            }
        
        }catch(error){
            console.log("Something went wrong")
        }
        console.log(id)
        
    }
    
    
   // Tabell för varje students information med en knapp och en länk. 
   //.map() används för att få ut varje unik student
  return (
    <div>
    
    <main>
        <div className="owerflow-x-auto h-screen opacity-60">
            <table className="min-w-full table-auto border border-gray-200 rounded ">
            <caption className="caption-top text-xl opacity-70 p-7">TECH U Students</caption>
            <thead>
                <tr>
                    <th className="px-4 py-4">Namn</th>
                    <th className="px-4 py-4">Email</th>
                    <th className="px-4 py-4">Age</th>
                    <th className="px-4 py-4">Course</th>
                    <th className="px-4 py-4">Update</th>
                    <th className="px-4 py-4">Delete</th>
                </tr>
            </thead>

            <tbody className="">
                {students.length > 0 ? (
                    students.map((student, index ) => (
                        <tr  key= {index}>
                            <td className="px-4 py-2">{student.name}</td>
                            <td className="px-4 py-2">{student.email}</td>
                            <td className="px-4 py-2">{student.age}</td>
                            <td className="px-4 py-2"></td>
                            <ul>
                                {student.course.map((course, courseIndex) => (
                                    <li key={courseIndex}>
                                        {course.name}  Teacher: {course.teacher}, Course credit: {course.courseCredit}
                                    </li>
                                ))}
                            </ul>
                            <td>
                                {/**  Navigerar till id page.tsx för att updatera en student */}
                            <Link href={`/students/${student._id}`}
                            className="bg-indigo-700 hover:bg-violet-800 text-white font-bold py-2 px-2 rounded-full">
                                Update</Link>
                            </td>
                            <td>
                                <button className="bg-red-900 hover:bg-red-600 text-white font-bold py-2 px-2 rounded-full"
                                onClick={() => deleteStudentById(student._id!)}>
                                    Delete
                                </button>
                            </td>

                        </tr>
                       
                    ))
                ):(
                    <tr>
                    <td>Studenten finns inte</td>
                    </tr>
                )}

            </tbody>
            </table>


        </div>
      
    </main>
   

    
</div>




    
  );
}