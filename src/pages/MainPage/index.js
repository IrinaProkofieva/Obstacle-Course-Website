import React from 'react'
import './style.css'
import ContentLeftUp from "../../components/ContentLeftUp";
import photo1 from '../../assets/main-page-1.jpg';

const MainPage = () => {
    const text1 = "Тренировки на полосе препятствий - это новый тренд в спорте и всё больше людей предпочитают живые и динамичные тренировки однообразным и монотонным в тренажёрном зале. Кроме того, это превосходный набор тренажёров для развития силы, ловкости, координации и выносливости.";
    return (
        <div className="main-page">
            <h1>
                Main Page
            </h1>
            <ContentLeftUp text={text1} imgsrc={photo1} width="50vw" height="62vh" color = "#9FB900" />
        </div>
    )
}

export default MainPage;