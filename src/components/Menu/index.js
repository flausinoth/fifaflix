import React from 'react';
import Logo from '../../Assets/img/Logo.png'
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="FlauFlix" />
            </a>

            <ButtonLink  className="ButtonLink" href="/">
                Novo Video
            </ButtonLink>
        </nav>
    );
}

export default Menu;