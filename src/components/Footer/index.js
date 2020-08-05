import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../Assets/img/fifaflix.png';
import './Footer.css';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/flausinoth/">
        <img className="Logo" src={Logo} alt="Logo Fifaflix" />
      </a>
      <p>
        Orgulhosamente criado por Thiago Flausino durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}
export default Footer;
