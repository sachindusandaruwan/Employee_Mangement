import express from "express";  
import { saveEmployee,getAllEmployees } from "../controller/EmployeeController";    

const router = express.Router();

router.post('/add', saveEmployee);
router.get('/getAll', getAllEmployees);


export default router