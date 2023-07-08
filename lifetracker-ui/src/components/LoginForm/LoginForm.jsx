import React, { useState } from 'react';
import './LoginForm.css';
import ApiClient from '../../../services/apiClient';

function LoginForm({ handleLogin }) { // include handleLogin prop here
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (e.target.name === 'email' && !e.target.value.includes('@')) {
      setErrors({ ...errors, email: 'Entry is not a valid email' });
    } else {
      setErrors({ ...errors, [e.target.name]: null });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await ApiClient.login(formData);

    // If there is data, handle successful login
    if (response.data) {
      ApiClient.setToken(response.data.token); // Add this line to set the token in ApiClient
      handleLogin(response.data);
    } else {
      // Set any error from the API request into state
      setErrors({ form: response.error?.message || null });
    }
  }


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { data, error } = await ApiClient.login(formData);
//     if (data) {
//       // Successful login, handle the login data
//     } else if (error) {
//       // Error logging in, handle the error
//     }
//   }
  

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      {errors.form && <div className='error'>{errors.form}</div>}
      {['email', 'password'].map(field => (
        <div key={field}>
          <input 
            name={field} 
            type={field === 'password' ? 'password' : 'text'} 
            value={formData[field]} 
            className='form-input'
            onChange={handleChange} 
            placeholder={`Enter your ${field}`}
          />
          {errors[field] && <div className='error'>{errors[field]}</div>}
        </div>
      ))}
      <button className='submit-login'>Login</button>
    </form>
  )
}

export default LoginForm;


// - [ ] Build the **`LoginForm`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `login-form`
//   - [ ] Render an input element for the following fields:
//     - [ ] `email`
//     - [ ] `password`
//   - [ ] Each `input` element in the form should have a class name of `form-input` and should have the following props set:
//     - [ ] `name` - the `name` of the `input` field being rendered (`email`, `password`)
//     - [ ] `type` - the type of the `input` element (`text`, `email`, `number`, etc.)
//     - [ ] `value` - the current value of the `input` element
//     - [ ] `onChange` - the `onChange` handler function
//   - [ ] Validate the `email` field. If the user has entered text into the `email` field and it doesn't contain an `@` symbol, then an error message should be displayed in an element with the class name of `error` indicating that the entry is not a valid email.
//   - [ ] Gracefully handle errors:
//     - [ ] If the user has attempted to login and gotten a `401` error, then an error message should be displayed in an element with the class name of `error` indicating that the `email` and `password` combination is incorrect.
//     - [ ] If the user has attempted to login and gotten a `400` or `422` error, then an error message should be displayed in an element with the class name of `error` indicating what went wrong.
//   - [ ] There should be a `button` element with the class name of `submit-login`:
//     - [ ] It should contain the text `"Login"`
//     - [ ] When clicked, it should call the `loginUser` function