import React, {useEffect, useState} from 'react'
import './style.css';

const Content = (props) => {
    const [colorRectClass, setColorRectClass] = useState("colorful-rectangle");
    const [photoRectClass, setPhotoRectClass] = useState("photo-rectangle");
    const [textAreaClass, setTextAreaClass] = useState("text-area");
    useEffect(()=>{
        setColorRectClass(colorRectClass+" "+props.horizontalPos+" "+props.verticalPos);
        setTextAreaClass(textAreaClass+" "+props.horizontalPos);
        let otherHorizontal = (props.horizontalPos==="left") ? "right" : "left";
        let otherVertical = (props.verticalPos==="top") ? "bottom" : "top";
        setPhotoRectClass(photoRectClass+" "+otherHorizontal+" "+otherVertical);
    }, []);
    return (
        <>
            <div id="container" style={{width:`calc(2 * ${props.width} - 0.44 * ${props.width})`, height: `calc(2 * ${props.height} - 0.82 * ${props.height})`}}>
                <div className={colorRectClass} style={{width:`${props.width}`, height:`${props.height}`, backgroundColor:`${props.color}`}}>
                    <div className={textAreaClass} style={{maxWidth:`calc(${props.width} - 0.44 * ${props.width})`, height:`${props.height}`}}>
                        {props.text}
                    </div>
                </div>
                <img src={props.imgsrc} className={photoRectClass} alt="Фото с тренировки" style={{width:`${props.width}`, height:`${props.height}`}}/>
            </div>
        </>
    )
}

export default Content;