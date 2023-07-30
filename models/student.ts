import mongoose from "mongoose";
import { Schema, Document } from 'mongoose';

export interface StudentType extends Document {
    name: String;
    surname: string;
    email: String;
    age: number;
    password: String;
}

const studentSchema: Schema<StudentType> = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.models.Student || mongoose.model<StudentType>('Student', studentSchema);