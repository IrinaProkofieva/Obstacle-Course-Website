import React from 'react'
import './style.css';

const MainHeader = (props) => {
    return (
        <>
            <header className="main-header">
                <div className="dark-overlay">
                    <h1>{props.text}</h1>
                </div>
            </header>
        </>
    )
}

export default MainHeader;