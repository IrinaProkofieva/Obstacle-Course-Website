import React from 'react'
import './style.css';

const BasicHeader = (props) => {
    return (
        <>
            <header style={{backgroundColor:`${props.color}`}}>
                <h1>{props.text}</h1>
            </header>
        </>
    )
}

export default BasicHeader;