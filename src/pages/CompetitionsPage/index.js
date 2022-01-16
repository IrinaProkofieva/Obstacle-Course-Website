import React, {useEffect} from 'react'
import './style.css'
import logo from "../../assets/logo.png";
import Content from "../../components/Content";
import MobileContent from "../../components/MobileContent";
import BasicHeader from "../../components/BasicHeader";
import photo1 from '../../assets/competitions-1.jpg';
import photo2 from '../../assets/competitions-2.jpg';

const CompetitionsPage = (props) => {
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    const text1 = <><p>Мы часто проводим соревнования, причем самые разные: от местных джунглевских до отборочных этапов на всероссийские гонки. Но с уверенностью можем сказать: каждый маршрут оригинален и интересен, на какое бы соревнование вы к нам ни пришли. Ведь мы придумываем их с любовью!</p></>;
    const text2 = <><p>Следи за анонсами ближайших соревнований в наших аккаунтах в соцсетях!</p><p>По вопросам сотрудничества в проведении спортивных соревнований звони по телефону {props.phone} или пиши в любой удобный мессенджер!</p></>;
    return (
        <div className="competitions-page">
            <BasicHeader text="Соревнования" color="#BEAA00"/>
            <img src={logo} alt='Логотип' className="logo-image" />
            <div className="desktop-content">
                <Content text={text1} imgsrc={photo1} width="50vw" height="65vh" color = "#9FB900" horizontalPos = "left" verticalPos = "top"/>
                <Content text={text2} imgsrc={photo2} width="45vw" height="65vh" color = "#BEAA00" horizontalPos = "right" verticalPos = "bottom"/>
            </div>
            <div className="mobile-content">
                <MobileContent text={text1} imgsrc={photo1} width="80vw" height="65vh" topoffset="50%" leftoffset="50%" color = "#9FB900" />
                <MobileContent text={text2} imgsrc={photo2} width="80vw" height="65vh" topoffset="50%" leftoffset="40%" color = "#BEAA00" />
            </div>
        </div>
    )
}

export default CompetitionsPage;