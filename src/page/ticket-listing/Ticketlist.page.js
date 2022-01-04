import React from 'react'
import {container,Row,Col, Container, Button} from 'react-bootstrap'
import {Breadcrum} from '../../components/breadcrum/Breadcrum'
import { Searchform } from '../../components/search-form/Searchform.comp'
import { useState,useEffect } from 'react'
import { Tickettable } from '../../components/ticket-table/Tickettable.comp'
import tickets from "../../assets/data/dummy-ticket.json"

export const Ticketlist = () => {
     const[str,setstr] = useState("");
     const[dispticket,setdispticket] = useState(tickets);
    
     useEffect(() => {}, [str,dispticket])

    const handleOnChange=e=>{
        const {value} = e.target
        setstr(value)
        searchticket(value)
    }

    const searchticket = sttr =>{
        const displaytickets = tickets.filter((row)=> row.subject.toLowerCase().includes(sttr.toLowerCase()));
        setdispticket(displaytickets)
    }

    return (
        <Container>
            <Row>
                <Col>
                <Breadcrum page={"Ticket Lists"}/>
                </Col>
            </Row>

            <Row className='mt-4'>
                <Col>
                <Button variant="info " >Add New Ticket</Button>
                </Col>
            </Row>

            <Row>
                <Col className='text-end'>
                <Searchform handleOnChange={handleOnChange} str={str}/>
                </Col>
            </Row>
            <hr/>

            <Row>
                <Col>
                <Tickettable tickets={dispticket}/>
                </Col>
            </Row>
            
        </Container>
    )
}
