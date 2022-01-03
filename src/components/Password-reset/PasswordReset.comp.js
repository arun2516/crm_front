import React from 'react'
import {Container,Row,Col,Form, Button} from "react-bootstrap"
import PropTypes from 'prop-types'

export const Resetpass = ( { handleOnChange, email, formswitcher, handleOnResetSubmit }) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className='text-info text-center'>Reset Password</h1>
                <hr/>
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' 
                        name="email" placeholder='Enter Email'  onChange={handleOnChange} value={email} required/>
                    </Form.Group>
                   
                    <Button type='submit'>Reset Password</Button>
                    </Form>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href='#!' onClick={()=>formswitcher("login")}>Loging now</a>
                </Col>
            </Row>
        </Container>
    );
};

Resetpass.propTypes = {
    handleOnResetSubmit:PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    formswitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired

};