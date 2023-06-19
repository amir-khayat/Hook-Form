import React, {useState} from 'react'

const Form = () => {
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const changeHandler = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='container'>
            <h1>Form</h1>
            <form className='row g-3'>
                <input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={changeHandler}/>
                <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={changeHandler}/>
                <input type="email" name="email" id="email" placeholder="Email" onChange={changeHandler}/>
                <input type="password" name="password" id="password" placeholder="Password" onChange={changeHandler}/>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" onChange={changeHandler}/>
            </form>
            <h2>Your Form Data</h2>
            <p>First Name: {info.firstName} </p>
            <p>Last Name: {info.lastName} </p>
            <p>Email: {info.email} </p>
            <p>Password: {info.password}</p>
            <p>Confirm Password: {info.confirmPassword}</p>
        </div>
    )
}

export default Form