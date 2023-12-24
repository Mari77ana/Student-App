import mongoose from "mongoose"


// MALLEN
export interface Student {
    _id?: number
    name: string,
    email: string,
    age: number
    course: Course[]
}

export interface Course {
    //  _id?: number
    name: string
    teacher: string
    courseCredit: number 
    
}




