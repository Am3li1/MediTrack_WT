import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreatePatient from './pages/CreatePatient';
import ShowPatient from './pages/ShowPatient';
import EditPatient from './pages/EditPatient';
import DeletePatient from './pages/DeletePatient';


const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/patients/create' element={<CreatePatient />} />
      <Route path='/patients/details/:id' element={<ShowPatient />} />
      <Route path='/patients/edit/:id' element={<EditPatient />} />
      <Route path='/patients/delete/:id' element={<DeletePatient />} />
    </Routes>
  );
};

export default App 