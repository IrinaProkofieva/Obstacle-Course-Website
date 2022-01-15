import React from 'react'
import './style.css';

const MobileContent = (props) => {
    return (
        <>
            <div id="mobile-container" style={{width:`${props.width}`}}>
                <img src={props.imgsrc} className="mobile-photo-rectangle" alt="Фото с тренировки" style={{width:`${props.width}`, height:`${props.height}`}}/>
                <div className="mobile-colorful-rectangle" style={{backgroundColor:`${props.color}`}}>
                        {props.text}
                </div>
            </div>
        </>
    )
}

export default MobileContent;