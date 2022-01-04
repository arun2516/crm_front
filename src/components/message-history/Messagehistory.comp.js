import React from 'react'
import PropTypes from 'prop-types'
import "./Messagehistory.style.css";
export const Messagehistory = ({msg}) => {
    if(!msg) return null;

    return (
        <div>
        {msg.map((row,i)=>
        <div key={i} className='message-history mt-3'>
        <div className='send fw-bold text-secondary'>
            <div className='sender'>{row.messageby}</div>
            <div className='date'>{row.date}</div>
        </div>
        <div className='message'>{row.message}</div>
    </div>
    )}
    </div>
    )
    
    
}

Messagehistory.propTypes={
    msg:PropTypes.array.isRequired,
};