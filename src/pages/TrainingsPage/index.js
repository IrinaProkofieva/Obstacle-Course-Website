import React, {useEffect} from 'react'
import './style.css'
import logo from "../../assets/logo.png";
import Content from "../../components/Content";
import MobileContent from "../../components/MobileContent";
import BasicHeader from "../../components/BasicHeader";
import photo1 from '../../assets/trainings-1.jpg';
import photo2 from '../../assets/trainings-2.jpg';
import photo3 from '../../assets/trainings-3.jpg';
import photo4 from '../../assets/trainings-4.jpg';
import photo5 from '../../assets/trainings-5.jpg';

const TrainingsPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    const text1 = <><p>Тренировки на нашей полосе препятствий каждый раз разные и интересные. Мы рады видеть в нашем зале всех: и опытных спортсменов, участвовавших не в одном соревновании, и новичков, только недавно решивших заняться спортом. Тренировки это весело! Приходи и убедись в этом сам!</p></>;
    const text2 = <><p>Стоимость: 300 р</p><p>Длительность: ~ 2 ч</p><p>Расписание: пн/ср 20:00</p><p>Абонемент на 4 занятия: 1 150 р</p><p>Абонемент на 15 занятий: 3250 р</p></>;
    const text3 = <><p>Кроме этого, мы с радостью проводим тренировки и для детей! Юным спортсменам покоряются наши препятствия не хуже, чем взрослым. Все упражнения ребята выполняют под контролем опытного тренера.</p></>;
    const text4 = <><p>Возраст: от 7 лет</p><p>Стоимость: 200 р</p><p>Длительность: ~ 1,5 ч</p><p>Когда: по договоренности</p><p>Абонемент на месяц: 2 000 р</p></>;
    const text5 = <><p>Пиши - звони, хватай спортивный костюм и спортивную обувь и прибегай к нам!</p><p>Наши турники ждут тебя!</p></>;
    const header2 = "Взрослая тренировка";
    const header4 = "Детская тренировка";
    const header5 = "Надумал прийти на тренировку?";
    return (
        <div className="trainings-page">
            <BasicHeader text="О тренировках" color="#57AB00"/>
            <img src={logo} alt='Логотип' className="logo-image" />
            <div className="desktop-content">
                <Content text={text1} imgsrc={photo1} width="50vw" height="62vh" color = "#9FB900" horizontalPos = "left" verticalPos = "top"/>
                <Content header={header2} text={text2} imgsrc={photo2} width="45vw" height="55vh" color = "#BEAA00" horizontalPos = "right" verticalPos = "bottom"/>
                <Content text={text3} imgsrc={photo3} width="50vw" height="62vh" color = "#71027D" horizontalPos = "left" verticalPos = "bottom"/>
                <Content header={header4} text={text4} imgsrc={photo4} width="47vw" height="80vh" color = "#57AB00" horizontalPos = "right" verticalPos = "top"/>
                <Content header={header5} text={text5} imgsrc={photo5} width="50vw" height="62vh" color = "#9FB900" horizontalPos = "left" verticalPos = "top"/>
            </div>
            <div className="mobile-content">
                <MobileContent text={text1} imgsrc={photo1} width="80vw" height="65vh" topoffset="50%" leftoffset="50%" color = "#9FB900" />
                <MobileContent header={header2} text={text2} imgsrc={photo2} width="80vw" height="65vh" topoffset="50%" leftoffset="50%" color = "#BEAA00" />
                <MobileContent text={text3} imgsrc={photo3} width="80vw" height="65vh" topoffset="50%" leftoffset="50%" color = "#71027D" />
                <MobileContent header={header4} text={text4} imgsrc={photo4} width="80vw" height="65vh" topoffset="50%" leftoffset="50%" color = "#57AB00" />
                <MobileContent header={header5} text={text5} imgsrc={photo5} width="80vw" height="65vh" topoffset="50%" leftoffset="50%" color = "#57AB00" />
            </div>
        </div>
    )
}

export default TrainingsPage;