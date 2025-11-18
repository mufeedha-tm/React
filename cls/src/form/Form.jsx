import React, { useState } from 'react'
import './form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        gender:''
    })
    const[errors, setErrors] = useState({});
    
    const handleChange = (e) => {
        const{name, value} = e.target;  //called every time a user types or changes form field.

        setFormData(prev => ({
            ...prev,  //uses the spread operator to keep other values unchanged

            [name]: value  //update formdata using the input's name as key & the values as the new value

        }))
    }

  return (
    <form>
        <div>
            <input 
            type="text" 
            name='name'
            value={formData.name}
            placeholder='Name'
            onChange={handleChange}/>
        </div>

        <div>
            <input type="email"
            name='email'
            value={formData.email} 
            placeholder='Your email'
            onChange={handleChange}/>
        </div>

        <div>
            <input type="text"
            name='age'
            value={formData.age}
            placeholder='Your age' 
            onChange={handleChange}/>
        </div>

        <div>
            <input type="password"
            name='password'
            value={formData.password} 
            placeholder='Your password'
            onChange={handleChange}/>
        </div>

        <div>
            <input type="password"
            name='confirmPassword'
            value={formData.confirmPassword}
            placeholder='confirmPassword' 
            onChange={handleChange}/>
        </div>
        <div>
            <label>
                <input type="radio" name='gender' value="male"
                onChange={handleChange}
                checked={formData.gender === 'male'} />
                Male
            </label>

            <label>
                <input type="radio" name='gender' value="female"
                onChange={handleChange}
                checked={formData.gender === 'female'} />
                Female
            </label>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
