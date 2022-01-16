import React, {useEffect} from 'react'
import './style.css'
import Content from "../../components/Content";
import MobileContent from "../../components/MobileContent"
import photo1 from '../../assets/main-page-1.jpg';
import photo2 from '../../assets/main-page-2.jpg';
import photo3 from '../../assets/main-page-3.jpg';
import photo4 from '../../assets/main-page-4.jpg';
import MainHeader from "../../components/MainHeader";
import logo from '../../assets/logo.png'

const MainPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    const text1 = <><p>Тренировки на полосе препятствий - это новый тренд в спорте и всё больше людей предпочитают живые и динамичные тренировки однообразным и монотонным в тренажёрном зале. Кроме того, это превосходный набор тренажёров для развития силы, ловкости, координации и выносливости.</p></>;
    const text2 = <><p>Многие из вас наверняка видели шоу "Русский Ниндзя" и полосу препятствий, которую проходят участники. Мы попытались воссоздать некоторые препятствия и получить те же эмоции, что и участники шоу.</p></>;
    const text3 = <><p>Мы рады видеть у себя людей с любым уровнем подготовки. Опытным спортсменам мы помогаем готовиться к спортивным соревнованиям, а новичков научим всему, что умеем сами, и покажем, что спорт - это весело! Обещаем, что у нас будет интересно и взрослым, и детям. Приходите одни или дружной компанией - занятие найдется всем!</p></>;
    const text4 = <><p>Маршруты для прохождения на тренировках мы составляем из различных комбинаций колец, турников, канатов, рукоходов, скалодрома, крюков, шаров и это далеко не все. Мы делаем не только силовые упражнения, но и упражнения на пресс, на спину, на баланс и на преодоление своих страхов! Для тренировки баланса у нас есть балансборд, слэклайн, bosu и много других интересных штук. Всего рассказывать не будем - приходите и сами все увидите!</p></>;
    return (
        <div className="main-page">
            <MainHeader text='Полоса препятствий "Джунгли"'/>
            <img src={logo} alt='Логотип' className="logo-image" />
            <div className="desktop-content">
                <Content text={text1} imgsrc={photo1} width="50vw" height="62vh" color = "#9FB900" horizontalPos = "left" verticalPos = "top"/>
                <Content text={text2} imgsrc={photo2} width="45vw" height="55vh" color = "#BEAA00" horizontalPos = "right" verticalPos = "bottom"/>
                <Content text={text3} imgsrc={photo3} width="50vw" height="62vh" color = "#71027D" horizontalPos = "left" verticalPos = "bottom"/>
                <Content text={text4} imgsrc={photo4} width="47vw" height="80vh" color = "#57AB00" horizontalPos = "right" verticalPos = "top"/>
            </div>
            <div className="mobile-content">
                <MobileContent text={text1} imgsrc={photo1} width="80vw" height="65vh" topoffset="50%" leftoffset="50%" color = "#9FB900" />
                <MobileContent text={text2} imgsrc={photo2} width="80vw" height="65vh" topoffset="2%" leftoffset="30%" color = "#BEAA00" />
                <MobileContent text={text3} imgsrc={photo3} width="80vw" height="65vh" topoffset="2%" leftoffset="60%" color = "#71027D" />
                <MobileContent text={text4} imgsrc={photo4} width="80vw" height="65vh" topoffset="2%" leftoffset="50%" color = "#57AB00" />
            </div>
        </div>
    )
}

export default MainPage;