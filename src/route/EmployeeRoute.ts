import express from "express";  
import { saveEmployee,getAllEmployees,getEmployeeById } from "../controller/EmployeeController";    

const router = express.Router();

router.post('/add', saveEmployee);
router.get('/getAll', getAllEmployees);
router.get('/:id', getEmployeeById);


export default router