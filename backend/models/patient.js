import mongoose from 'mongoose';

const patientSchema = mongoose.Schema(
   {
    name: {
        type: String, required: true
    },
    age: {
        type: String, required: true
    },
    contact: {
        type: String, required: true
    },
    gender: {
        type: String, enum: ['Male', 'Female', 'Other'
        ], required: true
    },
    organ: {
        type: String, required: true
    },
    hospital: {
        type: String, required: true
    },
    blood_group: {
        type: String, required: true
    },
    status: { 
        type: String, default: 'Pending'
    },
   } 
);

export const Patient = mongoose.model('Patient', patientSchema);
