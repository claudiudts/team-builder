import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, { useState } from 'react';

const defaultValues = {
  name: '',
  email: '',
  role: ''
};

function App() {
  const [formValues, setFormValues] = useState(defaultValues);
  const [savedFormInfo, setSavedFormInfo] = useState([]);
  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({...formValues, [name]: value});
  };
  const submit = (evt) => {
    evt.preventDefault();
    const newData = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trimEnd(),
    };
    setSavedFormInfo([...savedFormInfo, newData])
    setFormValues(defaultValues);
  };

  return (
    <div className='container'> 
      <h1>Member List</h1>
      <ul>
        <li>Name:{savedFormInfo.name} </li>
      </ul>
      
      <Form 
      formValues={formValues} 
      change={change}  
      submit={submit} />
    </div> )
    };
export default App;
