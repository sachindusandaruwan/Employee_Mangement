import express from "express";  
import { saveEmployee } from "../controller/EmployeeController";    

const router = express.Router();

router.post('/add', saveEmployee);

export default router