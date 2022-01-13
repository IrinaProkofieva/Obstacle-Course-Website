import React from 'react'
import './style.css';

const ContentLeftUp = (props) => {
    return (
        <>
            <div id="container" style={{width:`calc(2 * ${props.width} - 0.44 * ${props.width})`, height: `calc(2 * ${props.height} - 0.82 * ${props.height})`}}>
                <div className="colorful-rectangle" style={{width:`${props.width}`, height:`${props.height}`, backgroundColor:`${props.color}`}}>
                    <div className="text-area" style={{maxWidth:`calc(${props.width} - 0.44 * ${props.width})`, height:`${props.height}`}}>
                        {props.text}
                    </div>
                </div>
                <img src={props.imgsrc} className="photo-rectangle" alt="Фото с тренировки" style={{width:`${props.width}`, height:`${props.height}`}}/>
            </div>
        </>
    )
}

export default ContentLeftUp;