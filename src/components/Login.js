import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const login = () => {
    return (
        <div>
            <Form className='w-50 mx-auto'>
                <h2 className='text-primary'>Login Form</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <p className='my-4'>To Create an account, please <Link to='/register'>Register</Link></p>
            </Form>
        </div>
    );
};

export default login;