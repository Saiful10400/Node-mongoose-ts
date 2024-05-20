
import { Student } from "./student.schema";
import { student } from "./student.type";

const createUser=async(student:student)=>{
    const result=await Student.create(student)
    return result
}

export const service={createUser}