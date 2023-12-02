import express from 'express';
import { Patient } from '../models/patient.js';

const router = express.Router();

// Route to save new Patient
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.age ||
            !request.body.contact ||
            !request.body.gender ||
            !request.body.organ ||
            !request.body.hospital ||
            !request.body.blood_group ||
            !request.body.status
        ) {
            return response.status(400).send({
                message: 'Fill all the required fields',
            });
        }

        const newPatient = {
            name: request.body.name,
            age: request.body.age,
            contact: request.body.contact,
            gender: request.body.gender,
            organ: request.body.organ,
            hospital: request.body.hospital,
            blood_group: request.body.blood_group,
            status: request.body.status,
        };

        const patient = await Patient.create(newPatient);

        return response.status(201).send(patient);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for Get All Patient details from database
router.get('/', async (request, response) => {
    try {
        const patients = await Patient.find({});

        return response.status(200).json({
            count: patients.length,
            data: patients
    });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for getting One Patient's details from database by id
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const patient = await Patient.findById(id);

        return response.status(200).json(patient);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for Update Patient Details
router.put('/:id', async (request, response) => {
    try{
        if(
            !request.body.name ||
            !request.body.age ||
            !request.body.contact ||
            !request.body.gender ||
            !request.body.organ ||
            !request.body.hospital ||
            !request.body.blood_group ||
            !request.body.status
         ) {
            return response.status(400).send({
                message: 'Send all the required fields',
            });
        }

        const { id } = request.params;

        const result = await Patient.findByIdAndUpdate(id, request.body);

        if(!result) {
            return response.status(404).json({ message: 'Patient details not found'});
        }

        return response.status(200).send({ message: 'Patient details updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for Deleting a Patient's details
router.delete('/:id', async (request, response) => {
    try{
        const { id } = request.params;

        const result = await Patient.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({ message: 'Patient details not found'});
        }

        return response.status(200).send({ message: 'Patient details deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;