import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init'

const auth = getAuth(app);

const Register = () => {
    const [errorPassword, setErrorPassword] = useState('');
    const [success, setSuccess] = useState(false)

    const handleResiter = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        setSuccess(false)

        if (!/(?=.*[0-9])/.test(password)) {
            setErrorPassword('Please provide at least one digit')
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setErrorPassword('Please provide a special character')
            return;
        }
        if (password.length < 6) {
            setErrorPassword("Please provide at least 6 characters")
            return;
        }
        setErrorPassword('')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(true)
                event.target.reset()
            })
            .catch(err => {
                console.error('error: ', err)
                setErrorPassword(err.message)
            })
    }

    return (
        <div>
            <Form onSubmit={handleResiter} className='w-50 mx-auto'>
                <h2 className='text-primary'>Registration Form</h2>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="email" placeholder="Enter your name" />
                </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                    <p className='text-danger'>{errorPassword}</p>
                    {success && <p className='text-success'>Account created successfully!</p>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p className='my-4'>Already have an account? Please <Link to='/'>Log in</Link></p>
            </Form>
        </div>
    );
};

export default Register;