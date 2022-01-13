import React from 'react'
import './style.css'
import Content from "../../components/Content";
import photo1 from '../../assets/main-page-1.jpg';
import photo2 from '../../assets/main-page-2.jpg';
import photo3 from '../../assets/main-page-3.jpg';
import photo4 from '../../assets/main-page-4.jpg';

const MainPage = () => {
    const text1 = "Тренировки на полосе препятствий - это новый тренд в спорте и всё больше людей предпочитают живые и динамичные тренировки однообразным и монотонным в тренажёрном зале. Кроме того, это превосходный набор тренажёров для развития силы, ловкости, координации и выносливости.";
    const text2 = "Многие из вас наверняка видели шоу \"Русский Ниндзя\" и полосу препятствий, которую проходят участники. Мы попытались воссоздать некоторые препятствия и получить те же эмоции, что и участники шоу. ";
    const text3 = "Мы рады видеть у себя людей с любым уровнем подготовки. Опытным спортсменам мы помогаем готовиться к спортивным соревнованиям, а новичков научим всему, что умеем сами, и покажем, что спорт - это весело! Обещаем, что у нас будет интересно и взрослым, и детям. Приходите одни или дружной компанией - занятие найдется всем!";
    const text4 = "Маршруты для прохождения на тренировках мы составляем из различных комбинаций колец, турников, канатов, рукоходов, скалодрома, крюков, шаров и это далеко не все. Мы делаем не только силовые упражнения, но и упражнения на пресс, на спину, на баланс и на преодоление своих страхов! Для тренировки баланса у нас есть балансборд, слэклайн, bosu и много других интересных штук. Всего рассказывать не будем - приходите и сами все увидите!";
    return (
        <div className="main-page">
            <h1>
                Main Page
            </h1>
            <Content text={text1} imgsrc={photo1} width="50vw" height="62vh" color = "#9FB900" horizontalPos = "left" verticalPos = "top"/>
            <Content text={text2} imgsrc={photo2} width="45vw" height="55vh" color = "#BEAA00" horizontalPos = "right" verticalPos = "bottom"/>
            <Content text={text3} imgsrc={photo3} width="50vw" height="62vh" color = "#71027D" horizontalPos = "left" verticalPos = "bottom"/>
            <Content text={text4} imgsrc={photo4} width="50vw" height="65vh" color = "#57AB00" horizontalPos = "right" verticalPos = "top"/>
        </div>
    )
}

export default MainPage;