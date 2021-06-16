import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import './Form.js';

import axios from 'axios'
import * as yup from 'yup'
//import schema from '../validation/formSchema'

 const initialUser = {
   // text inputs //
   username: '',
   email:'',
   password:'',

   // dropdown //

   //checkbox //
   termsAndServices: false, 
 }
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
}
const initialUsers = []
const initialDisabled = true

export default function App() {
  //states
const[users, setUsers] = useState{initialUser}
const[forValues, setForValues] = useState(initialFormValues)
const[forErrors, setFormErrors] = useState(initialFormErrors)
const[disabled, setDisabled] =useState{initialDisabled}

//helpers
const getUsers = () => [
  axios.get('https//reqres.in/api/users')
  .then(res => {
    console.log('GET res.data.data: \n'. res.data.data)
    setUsers(res.data.data)
  })
  .catch(err => {
    debugger
    console.log(err)
  })
]
const postNewUser = newUser => {
  axios.post('https:reqres.in/api/users', newUser)
  .then(res => {
    console.log('POST res.data: \n', res.data)
    setUsers([...users, res.data])
  })
  .catch(err => {
    debugger
    console.log(err)
  })
  setFormValues(initialFormValues)
}
const validate = (username, value) =>
yup.reach(schema.name)
.validate(value)
.then(validate => {
  setFormErrors({
    ...setFormErrors,
    [username]: ''
  })
  })
  .catch(err => {
   setFormErrors({
    ...setFormErrors,
    [username]: err.errors[] 
   }) 
  })
}
//event handlers
const inputChange = (username,value) => {
  validate(username, value)
  setFormValues({
    ...formValues,
    [username]: value
  })
}
const formSubmit = () => {
  const newUser = {
    username:formValues.name.trim(),
    email:formValues.email.trim(),
    password:formaValues.password,
    terms: formValues.terms
  }
  postNewUser(newUser)
}

//<div className="App">
    // <h2>Sign Up</h2> 
     //<Form
     
    // />
   // </div>
  //);
//}

export default App;
