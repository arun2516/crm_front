import React from 'react'
import{Form,Row,Col} from 'react-bootstrap'
import {PropTypes} from 'prop-types'

export const Searchform = ({handleOnChange,str}) => {
    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column ms={2}>
                        Search:{""}
                    </Form.Label>
                    <Col ms={9}>
                    <Form.Control name="searchstr" placeholder='search...'
                    onChange={handleOnChange}
                    value={str}
                    />
                    </Col>
                </Form.Group>
            </Form>
            
        </div>
    )
}

Searchform.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    str:PropTypes.string.isRequired
}