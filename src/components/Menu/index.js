import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/img/Logo.png'
import './Menu.css';
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="FlauFlix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/Cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;