import mongoose, { Document, Schema } from "mongoose";

export interface IEmployee extends Document {
    name: string;
    email: string;
    phone: string;
    department: string;
    role: string;
    joinDate: Date;
}

const EmployeeSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    role: { type: String, required: true },
    joinDate: { type: Date, required: true }
}, {
    timestamps: true 
});

export const Employee = mongoose.model<IEmployee>('Employee', EmployeeSchema);
