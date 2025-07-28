import express from "express";  
import { saveEmployee,getAllEmployees,getEmployeeById,deleteEmployee, updateEmployee } from "../controller/EmployeeController";    

const router = express.Router();

router.post('/add', saveEmployee);
router.get('/getAll', getAllEmployees);
router.get('/:id', getEmployeeById);
router.delete('/delete/:id', deleteEmployee);
router.put('/update/:id', updateEmployee);

export default router