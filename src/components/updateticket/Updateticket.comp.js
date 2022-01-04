import React from 'react'
import {Form ,Button} from 'react-bootstrap'
import PropTypes from "prop-types"

export const Updateticket= ({message,handlingOnChange,handlingOnSubmit}) => {
    return (
        <Form onSubmit={handlingOnSubmit}>
            <Form.Text>Please reply your message here </Form.Text>
            <Form.Control as="textarea"  row={5} name="detail" value={message} onChange={handlingOnChange}/>
            <div className='text-end mt-3 mb-3' >
            <Button variant='info' type='submit' >Reply</Button>
            </div>
        </Form>
    )
}

Updateticket.propTypes={
    handlingOnSubmit:PropTypes.func.isRequired,
    handlingOnChange:PropTypes.func.isRequired,
    message:PropTypes.string.isRequired,
}