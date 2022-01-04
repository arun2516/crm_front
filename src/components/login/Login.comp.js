import React from 'react'
import {Container,Row,Col,Form, Button} from "react-bootstrap"
import PropTypes from 'prop-types'

export const LoginForm = ( { handleOnChange, email, password, handleOnSubmit, formswitcher }) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className='text-info text-center'>Client Login</h1>
                <hr/>
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' 
                        name="email" placeholder='Enter Email'  onChange={handleOnChange} value={email} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name="password" placeholder='Enter password'  value={password} onChange={handleOnChange} required/>
                    </Form.Group>
                    <div className="mb-3">
                    <Button type='submit'>Login</Button>
                    </div>
                    </Form>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href='#!' onClick={()=>formswitcher("reset")}>Forget Password?</a>
                </Col>
            </Row>
        </Container>
    );
};

LoginForm.propTypes = {
    handleOnSubmit:PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    formswitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired

};