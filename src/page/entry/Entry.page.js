import React from 'react';
import './entry.style.css';
import { LoginForm } from '../../components/login/Login.comp';
import { useState } from 'react';
import { Resetpass } from '../../components/Password-reset/PasswordReset.comp';
export const Entry = () => {
    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");
    const[frmload,setfrmload]=useState("login");
    
    const handleOnChange = e=>{
        const{name,value} = e.target;
        switch(name){
            case 'email':setemail(value)
            break;

            case 'password':setpassword(value)
            break;

            default:
                break;
        }
    };

    const handleOnSubmit = e=>{
        e.preventDefault()
        if(!email || !password){
          return  alert("fill up all the fields in form!");
        }
        console.log(email);
        console.log(password);
        setemail("");
        setpassword("");
    }

    const handleOnResetSubmit=(e)=>{
        e.preventDefault()
        if(!email ){
            return  alert("please enter the email!");
          }
          console.log(email);
          setemail("");
    }

    const formswitcher = (frmtype)=>{
          setfrmload(frmtype);
    }

    return (
        <div className='entry-page bg-info' >
            <div className="jumbotron">

                {frmload === 'login' &&  <LoginForm handleOnChange={handleOnChange} email={email} password={password} handleOnSubmit={handleOnSubmit} formswitcher={formswitcher}/> }

                {frmload === 'reset' && <Resetpass handleOnChange={handleOnChange} email={email}  handleOnResetSubmit={handleOnResetSubmit} formswitcher={formswitcher}/> }
               
                
            </div>
        </div>
        
    )
}
