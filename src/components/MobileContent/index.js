import React from 'react'
import './style.css';

const MobileContent = (props) => {
    return (
        <>
            <div id="mobile-container" style={{width:`${props.width}`}}>
                <img src={props.imgsrc} className="mobile-photo-rectangle" alt="Фото с тренировки" style={{width:`${props.width}`, height:`${props.height}`, objectPosition:`${props.leftoffset} ${props.topoffset}`}}/>
                <div className="mobile-colorful-rectangle" style={{backgroundColor:`${props.color}`}}>
                    <h2 className="content-header">{props.header}</h2>
                    {props.text}
                </div>
            </div>
        </>
    )
}

export default MobileContent;