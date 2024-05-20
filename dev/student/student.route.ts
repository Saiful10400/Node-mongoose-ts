import express, { Router } from "express"
import { controller } from "./student.controller"

const router=express.Router()

router.post("/create-a-student",controller.createUser)


export const studentRoute=router