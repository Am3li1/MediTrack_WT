import express, { request } from "express";
import { PORT, mongoDB } from "./config.js";
import cors from 'cors';
import mongoose from 'mongoose';
import { Patient } from './models/patient.js';
import patientsRoute from './routes/patientsRoute.js'

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack')
});

app.use('/patients', patientsRoute);

mongoose
    .connect(mongoDB)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, ()=>{
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });