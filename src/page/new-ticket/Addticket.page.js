import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { Addticketform } from '../../components/add-ticket-form/Addticketform.comp'
import { Breadcrum } from '../../components/breadcrum/Breadcrum'
import { useState,useEffect } from 'react'
// import { shorttext } from '../../utils/Validation'
const initialfrmdt={
    subject:"",
    issuedate:"",
    details:"",
}
// const initialfrmerror={
//     subject:false,
//     issuedate:false,
//     details:false,
// }

export const Addticket = () => {

    const[frmdata,setfrmdata]=useState(initialfrmdt);
    // const [frmdataerror,setfrmdataerror]=useState(initialfrmerror);
    
    useEffect(() => {
            
    }, [frmdata]);

    const handleOnChange=(e)=>{
        const {name,value} = e.target;

        setfrmdata({
            ...frmdata,[name]:value
        })
       
    };
    const handleOnSubmit = async (e)=>{
        e.preventDefault();

        // const issubjectvalid = await shorttext(frmdata.subject);

        // setfrmdataerror({...initialfrmerror,subject:!issubjectvalid})

        console.log("form submit request is received");
        console.log(frmdata);
        setfrmdata({...initialfrmdt});
    };


    return (
        <Container>
            <Row>
                <Col>
                <Breadcrum page={"New Ticket"}/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Addticketform handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}  frmdata={frmdata}/>
                </Col>
            </Row>
            
        </Container>
    )
}
