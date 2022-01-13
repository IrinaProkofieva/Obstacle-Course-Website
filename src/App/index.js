import './style.css';
import NavBar from "../components/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import TrainingsPage from "../pages/TrainingsPage";
import Footer from "../components/Footer";

function App() {
    return (
        <Router>
            <NavBar />
            <main>
                <Routes>
                    <Route path='/' exact = {true} element={<MainPage />} />
                    <Route path='/trainings' element={<TrainingsPage />} />
                    <Route path='/parties' element={<TrainingsPage />} />
                    <Route path='/competitions' element={<TrainingsPage />} />
                    <Route path='/contacts' element={<TrainingsPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
