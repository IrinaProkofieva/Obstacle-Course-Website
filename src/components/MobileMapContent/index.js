import React from 'react'
import './style.css';

const MobileMapContent = (props) => {
    return (
        <>
            <div id="mobile-map-container" className="mobile-map-container" style={{width:`${props.width}`}}>
                <div style={{width:`${props.width}`, height:`${props.height}`}}/>
                <div className="mobile-colorful-rectangle" style={{backgroundColor:`${props.color}`}}>
                    <h2 className="content-header">{props.header}</h2>
                    {props.text}
                </div>
                <iframe title="Мы на карте Самары" src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f7ef5db2efd4d484035d63de9409749e764a1fb847cde656443cf513a41dccd&amp;source=constructor" className="mobile-map-rectangle" style={{width:`${props.width}`, height:`${props.height}`}} />
            </div>
        </>
    )
}

export default MobileMapContent;