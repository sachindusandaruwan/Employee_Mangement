import express from "express";  
import { saveEmployee,getAllEmployees,getEmployeeById,deleteEmployee } from "../controller/EmployeeController";    

const router = express.Router();

router.post('/add', saveEmployee);
router.get('/getAll', getAllEmployees);
router.get('/:id', getEmployeeById);
router.delete('/delete/:id', deleteEmployee);


export default router