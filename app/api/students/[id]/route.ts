import { dbConnect } from "@/utils/db";
import { UserModel } from "@/utils/models/userModels";
import { Student } from "@/utils/types/user";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";


// 



// G E T   U S E R   by  I D / Request by id
export async function GET(request: NextApiRequest) {
   // tog bort  await dbConnect();

    const id = request.url?.split("students/")[1]; // [1] = tittar efter id i url
    // http://localhost:3000/students/65860815dcd613644688177d
    console.log(request.url)

    //console.log(request.url?.split("students"));
    //console.log(request.url?.split("students/")[0]);
    //console.log(request.url?.split("students/")[1]);

    try{

        if (!id) {
            throw new Error("Missing ID parameter");
        }
        const user = await UserModel.findById(id);

        if(!user) {
            return NextResponse.json({ messange: "User not found" }, {status: 404 });
        }/*
        else { return NextResponse.json({user}, {status: 200})}
        */
        return NextResponse.json({user});
    }catch (error) {
        return NextResponse.json(
            {message: error || "Error occurred"},
            {status: 400}
        )
    }
}



// U P D A T E   U S E R  by ID
export async function PUT(request: NextRequest) {
    console.log("=====")
    // tog bort await dbConnect();
    const id = request.url?.split("students/")[1];
    console.log(request.url)

    console.log("heh")
    

    try{

        if (!id){
            throw new Error("Missing ID parameter");
        }
        //  dessa attribut ska uppdateras
        const {name, email, age, course}: Student = await request.json()

        // hitta id på studenten
        const student = await UserModel.findById(id)


        if (!student) {
            return NextResponse.json({message: "User not found"}, {status: 404});
        }

        // uppdaterar attributerna med ny data
        student.name = name
        student.email = email
        student.age = age
        student.course = course

        // sparar studentens nya data (uppdatering)
        const updatedStudent = await student.save()

        return NextResponse.json({updatedStudent, message: "Student updated successfully" })
        

    }catch (error){
        return NextResponse.json(
            {message: error || "Error occurred"},
            {status: 400}
        )
    }
}



// D E L E T E    S T U D E N T  by ID
export async function DELETE(request: NextApiRequest) {
   // tog bort  await dbConnect();
    const id = request.url?.split("students/")[1];

    try{
        if (!id) {
            throw new Error("Missing ID parameter");
        }
        const deleteStudent = await UserModel.findByIdAndDelete(id) // tar bort usern

        if(deleteStudent) {// om den lyckas radera, hämta alla studenter
            const allUsers = await UserModel.find();
            return NextResponse.json({allUsers, message: "Student was deleted"}) // hämtar resterande users
        }
        else{
            return NextResponse.json(
                {message: "Student not found"},
                {status: 404}
            )
        }
    }catch (error) {
        return NextResponse.json("Internal Server Error:" + error)
    }

}
