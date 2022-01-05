import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { Tickettable } from '../../components/ticket-table/Tickettable.comp'
import tickets from "../../assets/data/dummy-ticket.json"
import { Breadcrum } from '../../components/breadcrum/Breadcrum'
import { Defaultlayout } from '../../components/layout/Defaultlayout'
import{useNavigate} from "react-router-dom"

export const Dashboard= () => {
    const navigate= useNavigate();
    
    const addticket = ()=>{
        navigate("/add-ticket");
    }
    return (
        <Defaultlayout>
        <Container>

            <Row>
                <Col>
                <Breadcrum page={"Dashboard"}/>
                </Col>
            </Row>

            <Row>
                <Col className='text-center mt-5 mb-2'>
                <Button variant='info' style={{fontSize:'2rem',padding:"10px 30px"}} onClick={addticket}>
                    Add new Ticket
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col className='text-center  mb-2'>
                <div>Total Tickets:50</div>
                <div>Pending Tickets: 5</div>
                </Col>
            </Row>

            <Row>
                <Col className=' mt-2'>Recently Added Tickets</Col>
            </Row>
            <hr/>

            <Row>
                <Col className="recent-ticket">
                    <Tickettable tickets={tickets}/>
                </Col>
            </Row>

        </Container>
        </Defaultlayout>
    )
}
