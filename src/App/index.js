import './style.css';
import NavBar from "../components/NavBar";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import TrainingsPage from "../pages/TrainingsPage";
import Footer from "../components/Footer";
import PartiesPage from "../pages/PartiesPage";
import CompetitionsPage from "../pages/CompetitionsPage";
import ContactPage from "../pages/ContactPage";

function App() {
    const mobilePhone = "+7 (917) 03-03-123";
    const cityPhone = "+7 (846) 212-05-25";
    const address = "Московское ш., 4, стр. 5, Самара";
    return (
        <Router>
            <div className="app">
            <NavBar />
            <div className="nav-offset"/>
            <main>
                <Routes>
                    <Route path='/' exact = {true} element={<MainPage />} />
                    <Route path='/trainings' element={<TrainingsPage />} />
                    <Route path='/parties' element={<PartiesPage />} />
                    <Route path='/competitions' element={<CompetitionsPage phone={mobilePhone}/>} />
                    <Route path='/contacts' element={<ContactPage mobilePhone={mobilePhone} cityPhone={cityPhone} address={address}/>} />
                </Routes>
            </main>
            <Footer />
            </div>
        </Router>
    );
}

export default App;
