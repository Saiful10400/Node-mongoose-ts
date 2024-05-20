import  Express from "express"
import cors from "cors"
import { studentRoute } from "./student/student.route"
const app=Express()
app.use(Express.json())
app.use(cors())

app.use("/api/v1/student",studentRoute)

export default app