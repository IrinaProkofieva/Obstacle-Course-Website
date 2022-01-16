import React from 'react'
import './style.css';

const BasicHeader = (props) => {
    return (
        <>
            <header style={{backgroundColor:`${props.color}`}} className="basic-header">
                <h1>{props.text}</h1>
            </header>
        </>
    )
}

export default BasicHeader;