import React, {useEffect} from 'react'
import './style.css'
import logo from "../../assets/logo.png";
import MapContent from "../../components/MapContent";
import MobileMapContent from "../../components/MobileMapContent";
import BasicHeader from "../../components/BasicHeader";
import {FaInstagram, FaVk, FaComments, FaPhoneAlt} from 'react-icons/fa';

const ContactPage = (props) => {
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    const text1 = <><p>{props.address}</p><p><FaPhoneAlt /> {props.cityPhone}</p><p><FaPhoneAlt /> {props.mobilePhone}</p><p><a href="https://www.vk.com/jungle_samara"><FaVk />  vk.com/jungle_samara</a></p><p><a href="https://www.instagram.com/jungle_samara/"><FaInstagram />  @jungle_samara</a></p><p>Любой удобный мессенджер <FaComments /> mssg.me/jungle_samara</p></>;
    return (
        <div className="contact-page">
            <BasicHeader text="Наши контакты" color="#71027D"/>
            <img src={logo} alt='Логотип' className="logo-image" />
            <div className="desktop-content">
                <MapContent text={text1} width="50vw" height="65vh" color = "#9FB900" horizontalPos = "left" verticalPos = "top"/>
            </div>
            <div className="mobile-content">
                <MobileMapContent text={text1} width="80vw" height="45vh" color = "#9FB900" />
            </div>
        </div>
    )
}

export default ContactPage;