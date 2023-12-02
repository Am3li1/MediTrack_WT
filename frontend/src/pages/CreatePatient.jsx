import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreatePatient = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [organ, setOrgan] = useState('');
    const [hospital, setHospital] = useState('');
    const [blood_group, setBlood_group] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSavePatient = () => {
        const data = {
            name,
            age,
            contact,
            gender,
            organ,
            hospital,
            blood_group,
            status,
        };
        setLoading(true);
        axios
            .post('http://localhost:3000/patients', data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console');
                console.log(error);
            })
    };
    return(
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Create Patient</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Name</label>
                    <input 
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Age</label>
                    <input 
                        type='text'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Contact</label>
                    <input 
                        type='text'
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Gender</label>
                    <input 
                        type='text'
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Organ</label>
                    <input 
                        type='text'
                        value={organ}
                        onChange={(e) => setOrgan(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Hospital</label>
                    <input 
                        type='text'
                        value={hospital}
                        onChange={(e) => setHospital(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Blood Group</label>
                    <input 
                        type='text'
                        value={blood_group}
                        onChange={(e) => setBlood_group(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Status</label>
                    <input 
                        type='text'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSavePatient}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreatePatient