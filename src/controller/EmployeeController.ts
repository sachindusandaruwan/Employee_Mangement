import { Request, Response } from "express";
import { Employee } from "../model/Employee";   

export const saveEmployee = async (req: Request, res: Response) => {
    console.log("ndbdjdsjshsjs");
    try {
        const { name, email, phone, department, role, joinDate } = req.body;
        const newEmployee = new Employee({ name, email, phone, department, role, joinDate });
        
        await newEmployee.save();
        res.status(201).json({ message: "Task created successfully", task: newEmployee });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating task", error });
    }
}


export const getAllEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ message: "Error fetching employees", error });
    }
};

export const getEmployeeById = async (req: Request, res: Response) => {
    try{
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(employee);
    } catch (error) {
        console.error("Error fetching employee:", error);
        res.status(500).json({ message: "Error fetching employee", error });
    }
}

export const deleteEmployee = async (req: Request, res: Response) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        console.error("Error deleting employee:", error);
        res.status(500).json({ message: "Error deleting employee", error });
    }
}

export const updateEmployee = async (req: Request, res: Response) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee updated successfully", employee: updatedEmployee });
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).json({ message: "Error updating employee", error });
    }
}