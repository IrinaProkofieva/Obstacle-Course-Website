import React, {useEffect} from 'react'
import './style.css'
import logo from "../../assets/logo.png";
import Content from "../../components/Content";
import MobileContent from "../../components/MobileContent";
import BasicHeader from "../../components/BasicHeader";
import photo1 from '../../assets/parties-1.jpg';
import photo2 from '../../assets/parties-2.jpg';
import photo3 from '../../assets/parties-3.jpg';
import photo4 from '../../assets/parties-4.jpg';
import photo5 from '../../assets/parties-5.jpg';

const PartiesPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    const text1 = <><p>Мы с радостью организуем для вас праздничное мероприятие на нашей полосе препятствий!</p><p>Такой формат - отличный вариант для проведения дня Рождения, корпоратива, окончания учебного года, годовщины и т.д.</p></>;
    const text2 = <><p>В программу входит:</p><p>энергичная разминка</p><p>знакомство со снарядами</p><p>проведение состязания на время прохождения полосы препятствий</p><p>дополнительные задания на ловкость и координацию</p></>;
    const text3 = <><p>2 000 р - будний день</p><p>2 500 р - выходной или праздничный день</p><p>Количество участников: до 12 человек</p><p>Длительность: 1-1,5 ч</p><p> Зона для чаепития: бесплатна на протяжении всего мероприятия и 30 минут после него.</p></>;
    const text4 = <><p>На батутах мы приготовили ещё несколько состязаний на проверку скорости и координации. Равнодушным не остаётся никто! Создайте настоящий праздник имениннику и гостям с полноценной спортивно-развлекательной программой.</p></>;
    const text5 = <><p>3 500 р - будний день</p><p>4 000 р - выходной или праздничный день</p><p>Количество участников: до 12 человек</p></>;
    const header1 = "Праздник на полосе препятствий";
    const header2 = "Праздник на полосе препятствий";
    const header3 = "Праздник на полосе препятствий";
    const header4 = "Праздник на полосе препятствий с батутами";
    const header5 = "Праздник на полосе препятствий с батутами";
    return (
        <div className="parties-page">
            <BasicHeader text="Праздники" color="#57AB00"/>
            <img src={logo} alt='Логотип' className="logo-image" />
            <div className="desktop-content">
                <Content header={header1} text={text1} imgsrc={photo1} width="50vw" height="65vh" color = "#9FB900" horizontalPos = "left" verticalPos = "top"/>
                <Content header={header2} text={text2} imgsrc={photo2} width="45vw" height="65vh" color = "#BEAA00" horizontalPos = "right" verticalPos = "bottom"/>
                <Content header={header3} text={text3} imgsrc={photo3} width="50vw" height="62vh" color = "#71027D" horizontalPos = "left" verticalPos = "bottom"/>
                <Content header={header4} text={text4} imgsrc={photo4} width="45vw" height="70vh" color = "#57AB00" horizontalPos = "right" verticalPos = "top"/>
                <Content header={header5} text={text5} imgsrc={photo5} width="50vw" height="62vh" color = "#9FB900" horizontalPos = "left" verticalPos = "top"/>
            </div>
            <div className="mobile-content">
                <MobileContent header={header1} text={text1} imgsrc={photo1} width="80vw" height="65vh" topoffset="2%" leftoffset="50%" color = "#9FB900" />
                <MobileContent header={header2} text={text2} imgsrc={photo2} width="80vw" height="65vh" topoffset="2%" leftoffset="60%" color = "#BEAA00" />
                <MobileContent header={header3} text={text3} imgsrc={photo3} width="80vw" height="65vh" topoffset="2%" leftoffset="40%" color = "#71027D" />
                <MobileContent header={header4} text={text4} imgsrc={photo4} width="80vw" height="65vh" topoffset="2%" leftoffset="50%" color = "#57AB00" />
                <MobileContent header={header5} text={text5} imgsrc={photo5} width="80vw" height="65vh" topoffset="2%" leftoffset="50%" color = "#57AB00" />
            </div>
        </div>
    )
}

export default PartiesPage;