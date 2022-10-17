import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const register = () => {
    return (
        <div>
            <Form className='w-50 mx-auto'>
                <h2 className='text-primary'>Registration Form</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="email" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p className='my-4'>Already have an account? Please <Link to='/'>Log in</Link></p>
            </Form>
        </div>
    );
};

export default register;