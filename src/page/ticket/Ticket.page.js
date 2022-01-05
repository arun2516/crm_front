import React from 'react'
import {Container,Row,Col, Button} from "react-bootstrap"
import {Breadcrum} from "../../components/breadcrum/Breadcrum"
import tickets from "../../assets/data/dummy-ticket.json"
import { Messagehistory } from '../../components/message-history/Messagehistory.comp';
import { Updateticket } from '../../components/updateticket/Updateticket.comp';
import { useState, useEffect } from 'react';
import { Defaultlayout } from '../../components/layout/Defaultlayout';
import {useParams} from 'react-router-dom'
// const ticket = tickets[0];

export const Ticket = () => {
   
    const {tid} = useParams()

    const[message,setmessage]=useState("")
    const[ticket,setticket] = useState("")

    useEffect(() => {
      for(let i=0;i<tickets.length;i++){
          if(tickets[i].id == tid){
              setticket(tickets[i]);
              continue;
          }
      }
    }, [message,tid]);

    const handlingOnChange=e=>{
        setmessage(e.target.value);
    }

    const handlingOnSubmit=e=>{
        alert("form submitted")
    }

    return (
        <Defaultlayout>
        <Container>

            <Row>
                <Col>
                <Breadcrum page={"Ticket"}/>
                </Col>
            </Row>

            <Row>
                <Col className='text-weight-bolder text-secondary'>
                <div className='subject'>Subject :{ticket.subject}</div>
                <div className='date'>Ticket Opened :{ticket.addedAt}</div>
                <div className='status'>Status :{ticket.status}</div>
                </Col>
                <Col className='text-end'>
                <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                <Messagehistory msg={ticket.history}/>
                </Col>
            </Row>
            <hr/>

            <Row>
                <Col>
                <Updateticket message={message} handlingOnChange={handlingOnChange} handlingOnSubmit={handlingOnSubmit}/>
                </Col>
            </Row>

           
        </Container>
        </Defaultlayout>
    )
}
