import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app)

const Login = () => {

    const [success, setSuccess] = useState(false)
    const [wrongPassword, setWrongPassword] = useState('')

    const handleLogIn = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        setSuccess(false)
        setWrongPassword('')

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true)
            })
            .catch(err => {
                console.error('error', err);
                setWrongPassword(err.message)
            })
    }
    return (
        <div>
            <Form onSubmit={handleLogIn} className='w-50 mx-auto'>
                <h2 className='text-primary'>Login Form</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                    <p className='text-danger'>{wrongPassword}</p>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <p className='my-4'>To Create an account, please <Link to='/register'>Register</Link></p>
                {success && <p className='text-success'>Account Logged in.</p>}
            </Form>
        </div>
    );
};

export default Login;