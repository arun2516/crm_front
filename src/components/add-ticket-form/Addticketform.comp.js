import React from 'react';
import { Form ,Button, Row,Col} from 'react-bootstrap';
import  PropTypes  from 'prop-types'
import './add-ticket-form.css';

export const Addticketform = ({handleOnChange,handleOnSubmit,frmdata,frmdataerror}) => {
    return (
        
            <div className="jumbotron mt-3 add-new-ticket bg-light">
                <h1 className='text-info  text-center'>Add New Ticket</h1>
                <hr/>

                 <Form autoComplete='off' onSubmit={handleOnSubmit}>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={3}>Subject</Form.Label>
                        <Col sm={9}>
                        <Form.Control  
                        name="subject" placeholder='Enter subject'  
                        onChange={handleOnChange} 
                        value={frmdata.subject} 
                        minLength={3} maxLength={100}
                        required/>
                        {/* <Form.Text className='text-danger'>{frmdataerror.subject && "subject is required!"}</Form.Text> */}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={3}>Issue Found</Form.Label>
                        <Col sm={9}>
                        <Form.Control type='date' name="issuedate" placeholder='Enter issuedate'  
                        value={frmdata.issuedate}
                         onChange={handleOnChange} 
                        required/>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label >Details</Form.Label>
                        
                        <Form.Control as='textarea' name="details" placeholder='Enter details'  rows={4}
                        value={frmdata.details}
                         onChange={handleOnChange} 
                        required/>
                        
                    </Form.Group>
                    <div className='d-grid gap-2'>
                    <Button type='submit' variant="info" size="lg" >Add New Ticket</Button>
                    </div>
                    </Form>

            </div>
        
    )
}

Addticketform.propTypes={
handleOnChange:PropTypes.func.isRequired,
handleOnSubmit:PropTypes.func.isRequired,
frmdata:PropTypes.object.isRequired,
// frmdataerror:PropTypes.object.isRequired,
};