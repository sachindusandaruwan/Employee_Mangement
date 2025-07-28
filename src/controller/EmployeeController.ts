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