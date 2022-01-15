import React from 'react';
import './style.css';
import {GoMarkGithub} from 'react-icons/go';

const Footer = () => {
    return (
        <>
            <footer>
                <p className="bigger">Полоса препятствий "Джунгли" в Самаре</p>
                <p className="smaller">created by <GoMarkGithub /> IrinaProkofieva</p>
            </footer>
        </>
    )
}

export default Footer;