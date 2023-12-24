import mongoose, { Schema } from "mongoose";
import { Course, Student } from "../types/user";

 //detta la jag till

 /*
const courseSchema = new Schema<Course> (
  {
    name: {
      type: String,
      required: true
    },
    teacher: {
      type: String,
      required: true
    },
    courseCredit: {
      type: Number,
      required: true

    }
  },
  
);
*/

/*
export const CourseModel = 
mongoose.models.CourseModel ||
mongoose.model<Course>("CourseModel", courseSchema, "courses")
*/




const studentSchema = new Schema<Student>( // Object Student
    {
        name: {
        type: String,
        required: true
      },

       email: {
       type: String,
       required: true,
       unique: true  // endast ett unikt email, annars kastar error fr server 
      }, 

      age: {
        type: Number,
        required: true,
     }, 
     //course: [courseSchema]

     course: [
      {
      name: {
        type: String, 
        required: true

      },
      teacher: {
        type: String,
        default: "Mark Zuckerberg"

      },
      courseCredit: {
        type: Number,
        default: 400

      }
      

          //type: Schema.Types.ObjectId ,
          //ref:'CourseModel'              
                          
     }
    ]
     
    
},
  { strict: true } //regler i mallen

)

// man kan lägga in funktioner i Schema, visar namn med .fullName
studentSchema.methods.fullName = function () {
  const courseNames = this.course.map( (course: {name: string}) => course.name).join(",")
    return `${this.name} (Course: ${courseNames})`

}

// Identifierar att det finns UserModel för att bli en Singelton
export const UserModel =
mongoose.models.UserModel ||
// Finns det ingen så identifiera en 
mongoose.model<Student>("UserModel", studentSchema, "users") // på collection "user"

// Schema = mall för Objekt blir ett Singelton