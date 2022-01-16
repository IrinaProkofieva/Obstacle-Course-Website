import React, {useEffect, useState} from 'react'
import './style.css';

const Content = (props) => {
    const [colorRectClass, setColorRectClass] = useState("colorful-rectangle");
    const [mapRectClass, setMapRectClass] = useState("photo-rectangle");
    const [textAreaClass, setTextAreaClass] = useState("text-area");
    useEffect(()=>{
        setColorRectClass(colorRectClass+" "+props.horizontalPos+" "+props.verticalPos);
        setTextAreaClass(textAreaClass+" "+props.horizontalPos);
        let otherHorizontal = (props.horizontalPos==="left") ? "right" : "left";
        let otherVertical = (props.verticalPos==="top") ? "bottom" : "top";
        setMapRectClass(mapRectClass+" "+otherHorizontal+" "+otherVertical);
    }, []);
    return (
        <>
            <div id="container" style={{width:`calc(2 * ${props.width} - 0.44 * ${props.width})`, height: `calc(2 * ${props.height} - 0.82 * ${props.height})`}}>
                <div className={colorRectClass} style={{width:`${props.width}`, height:`${props.height}`, backgroundColor:`${props.color}`}}>
                    <div className={textAreaClass} style={{maxWidth:`calc(${props.width} - 0.44 * ${props.width})`, height:`${props.height}`}}>
                        <h2 className="content-header">{props.header}</h2>
                        {props.text}
                    </div>
                </div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f7ef5db2efd4d484035d63de9409749e764a1fb847cde656443cf513a41dccd&amp;source=constructor" className={mapRectClass} style={{width:`${props.width}`, height:`${props.height}`}} />
            </div>
        </>
    )
}

export default Content;